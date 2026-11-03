"use client";

import { useMemo, useState } from "react";

type NodeData = {
  sign: string;
  northNodeFocus: string;
  southNodePastLife: string;
  karmicLesson: string;
  idealCareer: string;
};

const NODAL_DATABASE: Record<string, NodeData> = {
  "Aries / Libra": {
    sign: "North Node in Aries ♈ (South Node in Libra ♎)",
    northNodeFocus: "Developing self-reliance, bold initiative, personal boundaries, and independent courage.",
    southNodePastLife: "Past lives centered heavily on people-pleasing, co-dependency, and sacrificing self for others.",
    karmicLesson: "Step into your independent power without waiting for external validation or permission.",
    idealCareer: "Entrepreneurship, Solo Consulting, Leadership, Athletics, Pioneering Projects."
  },
  "Taurus / Scorpio": {
    sign: "North Node in Taurus ♉ (South Node in Scorpio ♏)",
    northNodeFocus: "Building physical stability, self-worth, simple pleasures, and sustainable financial peace.",
    southNodePastLife: "Past lives immersed in intense crisis, secretive drama, and emotional turmoil.",
    karmicLesson: "Cultivate inner security and steady tangible growth instead of seeking dramatic crises.",
    idealCareer: "Real Estate, Financial Planning, Agriculture, Art & Design, Eco-Sustainability."
  },
  "Gemini / Sagittarius": {
    sign: "North Node in Gemini ♊ (South Node in Sagittarius ♐)",
    northNodeFocus: "Active listening, local community networking, open-minded curiosity, and practical communication.",
    southNodePastLife: "Past lives centered on rigid dogmatic beliefs, preachiness, and detachment from local details.",
    karmicLesson: "Remain a lifelong student, stay curious, and appreciate diverse perspectives.",
    idealCareer: "Journalism, Podcasting, Digital Content, Teaching, Local Commerce, Marketing."
  },
  "Cancer / Capricorn": {
    sign: "North Node in Cancer ♋ (South Node in Capricorn ♑)",
    northNodeFocus: "Honoring emotional vulnerability, family bonding, intuition, and creating a supportive home base.",
    southNodePastLife: "Past lives dominated by cold corporate ambition, rigid status seeking, and emotional suppression.",
    karmicLesson: "Nurture your emotional heart and understand that true success begins in domestic peace.",
    idealCareer: "Psychology, Hospitality, Family Counseling, Interior Architecture, Wellness."
  },
  "Leo / Aquarius": {
    sign: "North Node in Leo ♌ (South Node in Aquarius ♒)",
    northNodeFocus: "Embracing personal creative stardom, heart-centered leadership, courage, and joyful expression.",
    southNodePastLife: "Past lives blending anonymously into crowd groups, aloof detachment, and observing from afar.",
    karmicLesson: "Shine your unique light brightly without fear of judgment from the collective.",
    idealCareer: "Performing Arts, Creative Direction, Media Stardom, Youth Education, Entertainment."
  },
  "Virgo / Pisces": {
    sign: "North Node in Virgo ♍ (South Node in Pisces ♓)",
    northNodeFocus: "Mastering practical routines, attention to detail, physical wellness, and grounding ideal visions.",
    southNodePastLife: "Past lives escaping reality through daydreams, lack of boundaries, and total surrender.",
    karmicLesson: "Anchor your intuitive dreams into realistic daily habits and actionable service.",
    idealCareer: "Healthcare, Holistic Medicine, Data Analytics, Quality Assurance, Editing."
  }
};

const NODAL_KEYS = Object.keys(NODAL_DATABASE);

export function NorthNodeCalculator() {
  const [selectedAxis, setSelectedAxis] = useState("Aries / Libra");

  const result = useMemo(() => NODAL_DATABASE[selectedAxis] || NODAL_DATABASE["Aries / Libra"], [selectedAxis]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-emerald mb-3"> Soul Destiny & Karmic Nodes</div>
        <h2 className="font-display text-3xl font-bold gradient-text">North Node & Soul Purpose Finder</h2>
        <p className="text-[#3A5747] text-sm mt-1">
          Discover your North Node (Rahu - Future Life Destiny) and South Node (Ketu - Past Life Comfort Zone).
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {NODAL_KEYS.map((axis) => (
          <button
            key={axis}
            onClick={() => setSelectedAxis(axis)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedAxis === axis
                ? "bg-emerald-400 text-emerald-950 font-bold shadow-lg border border-emerald-300"
                : "bg-white text-[#3A5747] border border-emerald-500/20 hover:bg-emerald-500/20"
            }`}
          >
            {axis}
          </button>
        ))}
      </div>

      <div className="glass-card-hover p-6 md:p-8 max-w-2xl mx-auto border-emerald-500/40 bg-white">
        <div className="border-b border-emerald-500/30 pb-4 mb-6">
          <span className="text-xs uppercase tracking-widest text-[#075433] font-semibold">Karmic Nodal Axis</span>
          <h3 className="text-2xl font-display font-bold text-[#042F2A] mt-1">{result.sign}</h3>
        </div>

        <div className="space-y-4 text-left">
          <div>
            <h4 className="text-sm font-semibold text-[#075433] flex items-center gap-2 mb-1">
              <span></span> North Node (Future Soul Mastery)
            </h4>
            <p className="text-[#2C473F] text-sm leading-relaxed">{result.northNodeFocus}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#08745A] flex items-center gap-2 mb-1">
              <span></span> South Node (Past Life Comfort Zone)
            </h4>
            <p className="text-[#2C473F] text-sm leading-relaxed">{result.southNodePastLife}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#DFF5EC] border border-emerald-500/30">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#075433] mb-1">
               Core Karmic Lesson & Ideal Career Path
            </h4>
            <p className="text-sm text-[#042F2A] font-medium mb-1">"{result.karmicLesson}"</p>
            <p className="text-xs text-[#075433]">Target Vocation: {result.idealCareer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
