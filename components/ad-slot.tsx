type Props = { label: string };

/**
 * AdSlot — renders nothing until AdSense is configured for this site.
 * An empty labelled placeholder looks like a broken page to visitors and
 * reviewers, so slots stay hidden until real ads can fill them.
 */
export function AdSlot({ label }: Props) {
  void label;
  return null;
}
