/**
 * tool-guides.ts — rich, intent-led content for tool pages.
 *
 * Every guide is written for the searcher's actual question: a direct
 * answer first (AEO), then how to use the tool, what the result means,
 * how the calculation honestly works, and real FAQs. Tools without a
 * rich entry here fall back to their registry content in ToolGuide.
 */

export type ToolGuide = {
  guideTitle: string;
  /** Direct-answer intro paragraphs (first paragraph answers the query). */
  guide: string[];
  steps: string[];
  /** "What your result means" paragraphs. */
  resultMeaning: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const TOOL_GUIDES: Record<string, ToolGuide> = {
  "big-three": {
    guideTitle: "What Is Your Big Three in Astrology?",
    guide: [
      "Your Big Three are the three most personal placements in your birth chart: your Sun sign (your core identity and purpose), your Moon sign (your emotions and inner needs) and your Rising sign, also called the Ascendant (how you come across and approach life). Together they describe you far more accurately than your Sun sign alone, which is why two people with the same zodiac sign can be completely different.",
      "Your Sun sign depends only on your birth date. Your Moon sign needs your birth date and time, because the Moon changes signs every two to three days. Your Rising sign is the most time-sensitive of all: it changes roughly every two hours and is calculated from your exact birth time and birthplace, which is why this calculator asks you to pick your birth city from the suggestions — it uses the city's real coordinates.",
      "You can view your chart in the Western (tropical) system used by most Western astrologers, or the Vedic (sidereal) system used in Indian astrology, which shifts placements back by about 24 degrees (the Lahiri ayanamsa). Many people find their Vedic Moon or Rising sign matches the nakshatra-based readings they grew up with.",
    ],
    steps: [
      "Enter your name (optional, used only in the result heading).",
      "Enter your exact birth date.",
      "Enter your birth time in 12-hour AM/PM format — the closer to your birth certificate time, the better your Rising sign.",
      "Type your birth city and select it from the suggestions so its coordinates are used, then switch between Western and Vedic to compare both charts.",
    ],
    resultMeaning: [
      "Read the three cards together: the Sun is who you are growing into, the Moon is what you need to feel safe and happy, and the Rising sign is the style with which you do everything. When a description of your Sun sign alone never quite fit, the Moon and Rising usually explain why.",
      "If a result sits within about a degree of a sign boundary it can differ between calculators and systems. In that case, read both neighbouring signs and trust the one that matches your lived experience.",
    ],
    faqs: [
      {
        question: "What are the Big Three in astrology?",
        answer:
          "The Big Three are your Sun sign, Moon sign and Rising sign (Ascendant). The Sun shows your core identity, the Moon your emotional nature, and the Rising sign your outward personality and appearance. They are the foundation of a full birth chart reading.",
      },
      {
        question: "Why do I need my birth time and birthplace for the Big Three?",
        answer:
          "The Sun sign needs only a date, but the Moon moves about 13 degrees a day and the Rising sign changes every two hours. An exact birth time and birthplace (for its coordinates and timezone) are what make the Moon and especially the Rising sign accurate.",
      },
      {
        question: "What if I don't know my exact birth time?",
        answer:
          "Your Sun and Moon signs will still be calculated from your date, and the Moon is correct on most days. The Rising sign, however, can be wrong without a reliable time — treat it as tentative, or try the times family members remember and see which Rising description fits best.",
      },
      {
        question: "Why is my Vedic Big Three different from my Western one?",
        answer:
          "Western astrology uses the tropical zodiac, tied to the seasons; Vedic astrology uses the sidereal zodiac, tied to the actual star positions. The difference (ayanamsa) is currently about 24 degrees, so placements often shift one sign earlier in the Vedic chart. Neither is wrong — they are two different reference frames.",
      },
      {
        question: "Can my Moon sign change during the day?",
        answer:
          "Yes. The Moon crosses a sign boundary every two to three days, so if you were born on a boundary day, your Moon sign can depend on the hour you were born. That is why this calculator uses your full birth moment, not just the date.",
      },
    ],
  },

  "kundali-milan": {
    guideTitle: "Kundali Milan: How the 36 Guna Score Works",
    guide: [
      "Kundali Milan (also called Guna Milan or Kundali matching) compares the Moon signs and nakshatras of two people across eight traditional tests called Ashtakoota, which add up to a maximum of 36 points (gunas). It has been the standard first step of Vedic marriage matching for centuries: a score of 18 or above is traditionally considered acceptable, 25 or above is good, and 32 or above is excellent.",
      "The eight kootas are Varna (1 point, spiritual outlook), Vashya (2, mutual influence), Tara (3, wellbeing and longevity), Yoni (4, physical and intimate compatibility), Graha Maitri (5, mental friendship), Gana (6, temperament), Bhakoot (7, family welfare and prosperity) and Nadi (8, health and progeny). Nadi carries the most weight — when both partners share the same Nadi it creates Nadi Dosha, traditionally cancelled in several situations, such as when the nakshatra or its quarter (pada) differs.",
      "A complete match is always read together with the full birth charts: Manglik (Mangala) Dosha, the strength of the 7th house, and the dashas running at the time of marriage all modify the picture. Treat the guna score as a strong first filter, not a final verdict on a relationship.",
    ],
    steps: [
      "Enter the boy's birth date, exact birth time and birthplace.",
      "Enter the girl's birth date, exact birth time and birthplace.",
      "Read the total guna score out of 36 and the verdict band.",
      "Check the per-koota breakdown — a low score in one koota (especially Nadi or Bhakoot) matters more than the total alone suggests.",
    ],
    resultMeaning: [
      "Scores of 28–36 indicate an outstanding traditional match, 18–27 a good and workable match, and below 18 a pairing where classical texts suggest remedies or a deeper chart review before proceeding. A same-Nadi result (Nadi Dosha) is the single most-checked item; classical cancellations apply when the couple's nakshatras differ or fall in specific quarters.",
      "Remember that guna milan measures traditional symbolic compatibility between Moon charts. Real relationships also depend on communication, values and timing — use the score as guidance, not as a decision-maker.",
    ],
    faqs: [
      {
        question: "What is a good score in Kundali Milan out of 36?",
        answer:
          "Traditionally, 18–24 is considered a good match, 25–32 a very good match, and 33–36 an excellent match. Below 18 is considered a weak match in classical texts, though a full chart analysis (including dosha cancellations) can change the conclusion.",
      },
      {
        question: "What is Nadi Dosha and why does it matter?",
        answer:
          "Nadi Dosha occurs when both partners' Moon nakshatras fall in the same Nadi (Adi, Madhya or Antya). It costs all 8 Nadi points and is traditionally linked with health and progeny concerns. It is cancelled (Nadi Dosha bhanga) in several classical conditions, for example when both share the same nakshatra but different quarters, or the same rashi with different nakshatras.",
      },
      {
        question: "Why does Kundali Milan use the Moon and nakshatra?",
        answer:
          "Vedic astrology treats the Moon as the mind and emotional nature — the part of you that actually lives with a partner day to day. The nakshatra (the Moon's exact star segment) refines temperament, instincts and health tendencies, so matching is based on Moon and nakshatra rather than the Sun sign.",
      },
      {
        question: "Is 36/36 guna match necessary for a happy marriage?",
        answer:
          "No. Many happy marriages score in the low 20s, and classical texts themselves list cancellations for most doshas. Guna milan is one traditional input; the full charts, Manglik status, 7th house strength and current dasha periods are read alongside it.",
      },
      {
        question: "What details are needed for an accurate Kundali match?",
        answer:
          "Both partners' birth dates, exact birth times and birthplaces. The Moon's nakshatra — on which seven of the eight kootas depend — is derived from the exact birth moment, so an incorrect time can change the nakshatra and the score.",
      },
    ],
  },

  "spouse-predictor": {
    guideTitle: "Spouse Prediction in Astrology: What Your Chart Indicates",
    guide: [
      "In Vedic astrology, your future spouse is read mainly from the 7th house of your birth chart, its ruling planet, the position of Venus (for men) and Jupiter (for women), and the planet placed in or aspecting the 7th house. The spouse predictor combines these traditional indicators with your Moon nakshatra to describe the likely nature, appearance themes and meeting circumstances of your partner.",
      "Western astrology reads the same themes through the sign on the Descendant (the 7th house cusp) and Venus and Mars placements. Both systems agree on one point: the chart describes tendencies and the type of person you attract and commit to — it does not produce a photograph or a name.",
      "Use the reading as a reflective guide: notice which described qualities you genuinely value, and treat timing indications (such as the dasha periods astrologers watch for marriage) as themes rather than fixed dates.",
    ],
    steps: [
      "Enter your birth date and exact birth time.",
      "Select your birth city from the suggestions so the chart houses are placed correctly.",
      "Read the spouse profile: nature, appearance themes, profession indications and likely meeting context.",
      "Compare with the Venus sign and 7th-house guidance in your Big Three and full chart for a fuller picture.",
    ],
    resultMeaning: [
      "The description works at the level of qualities: temperament (calm or fiery), build and appearance themes, family background, and the settings where meetings traditionally happen (work, travel, family networks). If several indicators repeat the same theme — for example, a foreign or distant connection — classical readers weight it more heavily.",
    ],
    faqs: [
      {
        question: "How does astrology predict a future spouse?",
        answer:
          "Vedic astrologers study the 7th house, its lord, Venus and Jupiter, and the nakshatra of the 7th lord to describe a spouse's nature, background and meeting circumstances. It is an interpretive tradition: it indicates the type of partner and relationship themes, not an exact identity.",
      },
      {
        question: "Which planet shows the husband or wife in a chart?",
        answer:
          "Traditionally, Venus is the primary significator (karaka) of the wife in a man's chart and of marriage generally, while Jupiter is read for the husband in a woman's chart. The 7th house and its ruling planet refine the picture in both cases.",
      },
      {
        question: "Can astrology tell when I will meet my spouse?",
        answer:
          "Astrologers watch Vimshottari dasha periods of Venus, Jupiter and the 7th lord, plus Jupiter and Saturn transits over the 7th house or Moon, as marriage-favouring windows. These indicate periods of higher likelihood, not fixed dates.",
      },
      {
        question: "Does the spouse predictor show love marriage or arranged marriage?",
        answer:
          "Classical indicators for love marriage include connections between the 5th house (romance) and the 7th house (partnership), and Venus linked with the Moon or Rahu. Strong 7th-house ties to family significators are read as more traditional or family-approved matches.",
      },
    ],
  },

  "sade-sati": {
    guideTitle: "Sade Sati: Saturn's Seven-and-a-Half-Year Transit Explained",
    guide: [
      "Shani Sade Sati is the roughly seven-and-a-half-year period when Saturn transits the three signs around your natal Moon: the sign before your Moon sign (rising phase, about 2.5 years), your Moon sign itself (peak phase) and the sign after it (setting phase). Because Saturn takes about 2.5 years to cross one sign, almost everyone experiences Sade Sati two or three times in a lifetime.",
      "Saturn entered Pisces on 29 March 2025 and stays there until early 2028. That means Sade Sati is currently active for three Moon signs: Aries Moon (rising phase — Saturn in the 12th from the Moon), Pisces Moon (peak phase — Saturn over the Moon) and Aquarius Moon (setting phase — Saturn in the 2nd from the Moon). If your Moon sign is not one of these three, you are not in Sade Sati right now, whatever you may have heard.",
      "Classically, Sade Sati is a period of discipline, delays and restructuring rather than simple bad luck: careers, health routines and finances get audited by Saturn, and people often come out of it leaner and more grounded. Its intensity also depends on your chart — Saturn's friendship with your Moon sign, your running dasha, and whether Saturn is a benefic for your ascendant all modify the experience.",
    ],
    steps: [
      "First find your Vedic Moon sign (Janma Rashi) — use the Big Three calculator in Vedic mode if you don't know it.",
      "Select that Moon sign in the checker.",
      "Read your current phase (rising, peak or setting), its focus areas and the traditional remedies.",
      "Re-check whenever Saturn changes signs (about every 2.5 years) — phases change with the transit, not with your birthday.",
    ],
    resultMeaning: [
      "The rising phase tends to bring expenses, distance from home and quiet preparation; the peak phase is the most demanding, pressing on health, confidence and close relationships; the setting phase gradually releases pressure and rewards the discipline built earlier. None of the phases is uniformly bad — Saturn periods are also known for durable achievements earned slowly.",
    ],
    faqs: [
      {
        question: "How do I know if I am in Sade Sati?",
        answer:
          "Find your Vedic Moon sign, then check where Saturn is transiting. You are in Sade Sati when Saturn is in the sign before, the same as, or the sign after your Moon sign. Since 29 March 2025 Saturn is in Pisces, so Pisces, Aquarius and Aries Moon signs are currently in Sade Sati.",
      },
      {
        question: "How long does Sade Sati last?",
        answer:
          "About seven and a half years in total — roughly 2.5 years in each of the three signs Saturn crosses around your Moon sign. Brief retrograde movements can make Saturn re-enter a sign, slightly extending a phase.",
      },
      {
        question: "Which phase of Sade Sati is the most difficult?",
        answer:
          "The second, peak phase — Saturn transiting directly over your natal Moon — is traditionally considered the most intense, followed by the rising phase. The setting phase is usually experienced as a gradual easing. Personal results vary with the whole chart and dasha.",
      },
      {
        question: "What are the traditional remedies for Sade Sati?",
        answer:
          "Classical remedies include lighting a sesame-oil lamp on Saturdays, chanting Hanuman Chalisa or the Shani mantra 'Om Sham Shanaishcharaya Namah', donating black sesame, mustard oil or dark clothing to the needy on Saturdays, and — Saturn's favourite — honest work, discipline and serving the elderly and labourers.",
      },
      {
        question: "Is Sade Sati always bad?",
        answer:
          "No. Saturn is the planet of karma, effort and maturity. Sade Sati often coincides with career consolidation, property matters and hard-earned status, especially for Taurus, Libra and Aquarius ascendants, for whom Saturn is a benefic. It is demanding, but many people count their Sade Sati years as their most productive.",
      },
    ],
  },

  choghadia: {
    guideTitle: "Choghadia Muhurat: Today's Auspicious Timings Explained",
    guide: [
      "Choghadia is a Vedic system that divides the day (sunrise to sunset) and the night (sunset to the next sunrise) into eight equal segments each, called choghadia. Each segment is ruled by a planet and carries a quality: Amrit, Shubh and Labh are the three auspicious choghadia used for starting important work; Chal is neutral-to-good for travel and movement; Udveg, Rog and Kaal are avoided for new beginnings.",
      "Because choghadia are calculated from your local sunrise and sunset, the timings change every day and differ from city to city — a Shubh choghadia in Mumbai starts at a different clock time in Delhi or Dubai. That is why this tool asks for your city: it computes the segments from that day's actual sunrise where you are.",
      "Choghadia is the quick, everyday layer of muhurat selection. For once-in-a-lifetime events like marriage or a housewarming, astrologers layer it with the day's tithi, nakshatra and Rahu Kaal — but for starting a journey, signing a document, opening a shop or making an important call, an Amrit, Shubh or Labh choghadia is the traditional go-to.",
    ],
    steps: [
      "Select your city so sunrise and sunset are calculated for your location.",
      "Check today's date (choghadia change daily).",
      "Find the current and upcoming Amrit, Shubh and Labh segments in the daytime table.",
      "Schedule the start of your activity inside an auspicious segment; avoid beginning new ventures in Rog, Kaal or Udveg.",
    ],
    resultMeaning: [
      "Amrit is considered the finest choghadia for almost any beginning, Labh favours gains, business and money matters, and Shubh suits ceremonies, meetings and purchases. Chal is acceptable for travel. If an important task must happen in a weaker segment, starting it in the hora of a benefic planet is the traditional workaround.",
    ],
    faqs: [
      {
        question: "Which choghadia is best for starting new work?",
        answer:
          "Amrit Choghadia is considered the most auspicious for almost all beginnings, followed by Shubh and Labh. Labh is especially favoured for business and financial starts, and Shubh for ceremonies and auspicious purchases.",
      },
      {
        question: "Why do choghadia timings differ between cities?",
        answer:
          "Choghadia are divisions of the local day: the time between sunrise and sunset at your location is split into eight equal parts. Sunrise in Mumbai and Delhi can differ by 30–40 minutes, so the same choghadia begins at different clock times in each city.",
      },
      {
        question: "Which choghadia should be avoided?",
        answer:
          "Rog (illness/disturbance), Kaal (loss/obstacles) and Udveg (anxiety/haste) are traditionally avoided for starting important or auspicious activities. Routine, unavoidable work continues regardless; the system is meant for choosing start times you can control.",
      },
      {
        question: "Is night choghadia also useful?",
        answer:
          "Yes. The night is divided from sunset to the next sunrise into eight segments with its own sequence. Night Amrit, Shubh and Labh choghadia are used for evening events, travel departures and ceremonies held after sunset.",
      },
      {
        question: "What is the difference between Choghadia and Rahu Kaal?",
        answer:
          "Choghadia divides the whole day into quality-graded segments, giving you several good windows daily. Rahu Kaal is a single roughly 90-minute inauspicious period each day that is avoided for new starts. Most people check both: pick a good choghadia that does not overlap Rahu Kaal.",
      },
    ],
  },
};
