import { ListingStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { sendListingReminderEmail } from "@/lib/mail";

const DAY_MS = 24 * 60 * 60 * 1000;

function getReminderIntervalDays() {
  return Number(process.env.LISTING_REMINDER_DAYS ?? 7);
}

function getStaleThresholdDays() {
  return Number(process.env.LISTING_STALE_DAYS ?? 30);
}

export async function runListingLifecycleJob() {
  const now = new Date();
  const reminderCutoff = new Date(now.getTime() - getReminderIntervalDays() * DAY_MS);
  const staleCutoff = new Date(now.getTime() - getStaleThresholdDays() * DAY_MS);

  const activeListings = await prisma.astrologerProfile.findMany({
    where: { status: ListingStatus.APPROVED },
    select: {
      id: true,
      name: true,
      email: true,
      updatedAt: true,
      lastOwnerUpdateAt: true,
      lastReminderSentAt: true,
      isIndexable: true
    }
  });

  let staleCount = 0;
  let reminderCount = 0;

  for (const listing of activeListings) {
    const lastOwnerTouch = listing.lastOwnerUpdateAt ?? listing.updatedAt;
    const shouldBecomeStale = lastOwnerTouch <= staleCutoff;

    if (shouldBecomeStale && listing.isIndexable) {
      await prisma.astrologerProfile.update({
        where: { id: listing.id },
        data: { isIndexable: false }
      });
      staleCount += 1;
      continue;
    }

    const shouldSendReminder =
      lastOwnerTouch <= reminderCutoff &&
      (!listing.lastReminderSentAt || listing.lastReminderSentAt <= reminderCutoff);

    if (shouldSendReminder) {
      await sendListingReminderEmail({
        to: listing.email,
        name: listing.name
      });
      await prisma.astrologerProfile.update({
        where: { id: listing.id },
        data: { lastReminderSentAt: now }
      });
      reminderCount += 1;
    }
  }

  return { total: activeListings.length, staleCount, reminderCount };
}
