import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ListingStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

import { SAMPLE_ASTROLOGERS } from "@/lib/sample-data";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let profile = null;
  try {
    profile = await prisma.astrologerProfile.findUnique({ where: { id: params.id } });
  } catch (e) {}
  if (!profile) {
    profile = SAMPLE_ASTROLOGERS.find((a) => a.id === params.id) || null;
  }
  if (!profile) return {};
  return buildMetadata({
    title: `${profile.name} Astrologer Profile | BIGThreeAstrology`,
    description: `${profile.name} in ${profile.city}, ${profile.state}. ${profile.specialization}.`,
    path: `/astrologers/${params.id}`,
    noindex: profile.status !== ListingStatus.APPROVED
  });
}

export default async function AstrologerProfilePage({ params }: Props) {
  let profile: any = null;
  try {
    profile = await prisma.astrologerProfile.findUnique({ where: { id: params.id } });
  } catch (e) {}
  if (!profile) {
    profile = SAMPLE_ASTROLOGERS.find((a) => a.id === params.id) || null;
  }
  if (!profile || profile.status !== ListingStatus.APPROVED) notFound();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    description: profile.bio,
    url: absoluteUrl(`/astrologers/${profile.id}`),
    address: { "@type": "PostalAddress", addressLocality: profile.city, addressRegion: profile.state, addressCountry: profile.country },
    telephone: profile.phone,
    email: profile.email
  };
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: profile.name,
    areaServed: `${profile.city}, ${profile.state}`,
    email: profile.email,
    telephone: profile.phone
  };

  return (
    <div className="container-main space-y-8 py-8 max-w-5xl mx-auto animate-fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      
      <div className="glass-card p-8 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
        <div className="w-32 h-32 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-5xl font-display font-bold text-white shadow-xl shadow-purple-900/20 border-4 border-white/10">
          {profile.name.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">{profile.name}</h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="badge">{profile.specialization}</span>
            <span className="badge-gold">{profile.experienceYears} Years Exp.</span>
            <span className="text-cosmic-200 flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full text-sm border border-white/10">
              <span>📍</span> {profile.city}, {profile.state}
            </span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
            <a className="btn-primary px-6 py-2 flex items-center gap-2" href={`tel:${profile.phone}`}>
              <span>📞</span> Call Now
            </a>
            <a className="px-6 py-2 rounded-lg font-medium text-white shadow-lg bg-[#25D366] hover:bg-[#128C7E] transition-all flex items-center gap-2" href={`https://wa.me/${profile.whatsapp.replace(/[^\d]/g, "")}`} target="_blank" rel="noopener noreferrer">
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <section className="glass-card p-6 md:p-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-cosmic-100">About Me</h2>
            <div className="prose prose-invert max-w-none text-cosmic-200">
              <p className="whitespace-pre-wrap leading-relaxed">{profile.bio}</p>
            </div>
          </section>

          <section className="glass-card p-6 md:p-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-cosmic-100">Services Offered</h2>
            <div className="prose prose-invert max-w-none text-cosmic-200">
              <p className="whitespace-pre-wrap leading-relaxed">{profile.services}</p>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="glass-card p-6 border-accent-gold/30 bg-gradient-to-b from-black/40 to-accent-gold/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl">✨</div>
            <h2 className="text-xl font-display font-semibold mb-4 text-accent-gold flex items-center gap-2">
              Pricing & Rates
            </h2>
            <div className="text-cosmic-200">
              <p className="whitespace-pre-wrap leading-relaxed">{profile.pricing}</p>
            </div>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-xl font-display font-semibold mb-4 text-cosmic-100">Send an Inquiry</h2>
            <form
              className="grid gap-4"
              action={async (fd) => {
                "use server";
                await prisma.inquiry.create({
                  data: {
                    profileId: profile.id,
                    name: String(fd.get("name")),
                    email: String(fd.get("email")),
                    phone: String(fd.get("phone") || ""),
                    message: String(fd.get("message"))
                  }
                });
              }}
            >
              <div className="space-y-1">
                <input name="name" placeholder="Your name" className="input-cosmic w-full" required />
              </div>
              <div className="space-y-1">
                <input name="email" type="email" placeholder="Your email" className="input-cosmic w-full" required />
              </div>
              <div className="space-y-1">
                <input name="phone" placeholder="Phone (optional)" className="input-cosmic w-full" />
              </div>
              <div className="space-y-1">
                <textarea name="message" placeholder="How can I help you?" className="input-cosmic w-full min-h-[100px] resize-y" required />
              </div>
              <button className="btn-primary w-full mt-2 py-3">Send Message</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
