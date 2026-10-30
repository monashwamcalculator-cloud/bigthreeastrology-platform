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
      "Select your Moon sign (Janma Rashi) from the sign buttons — this tool reads the spouse indications from your Moon sign and its traditional 7th-house connections.",
      "If you do not know your Moon sign, find it first with the Big Three calculator or the Nakshatra Finder using your birth date, time and city.",
      "Read the spouse profile: nature and personality traits, appearance themes, likely meeting environment and lucky first initials.",
      "Compare with your Venus sign for the fuller picture — Venus shows the kind of partner you are drawn to, this profile shows who traditionally shows up.",
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

  "venus-sign": {
    guideTitle: "Venus Sign: What the Planet of Love Was Doing on Your Birthday",
    guide: [
      "Your Venus sign is the zodiac sign Venus occupied on the day you were born. It describes how you love, what attracts you, what you find beautiful, and how you handle money and pleasure. Where your Sun sign is your core identity and your Moon sign your feelings, Venus is your taste — in partners, art, comfort and spending.",
      "Venus never travels far from the Sun, so your Venus sign is always your Sun sign or one of the two signs on either side of it. That is why two people with the same Sun sign can love very differently: a Leo with Venus in Cancer needs emotional safety before romance, while a Leo with Venus in Virgo shows love through acts of service and notices every detail.",
      "To read your result well, combine three layers: the sign's element (fire Venus loves excitement, earth Venus loves loyalty and touch, air Venus needs conversation, water Venus needs emotional depth), the sign's ruling planet, and your Venus sign's compatibility list, which shows whose Venus naturally speaks your love language.",
    ],
    steps: [
      "Enter your birth date — the day, month and year are enough, because Venus moves slowly.",
      "Submit and read your Venus sign, element and love style.",
      "Check the attraction triggers listed for your sign — they describe what reliably draws you to someone.",
      "Compare with a partner's Venus sign using the compatibility list in your result.",
    ],
    resultMeaning: [
      "The love style in your result is a tendency, not a rule: a Venus in Scorpio person feels love intensely and privately, but their Moon and Rising signs shape how visibly they show it. Use the result to understand your needs in relationships — what makes you feel chosen, desired and valued — and to recognise the same needs in a partner whose Venus differs from yours.",
    ],
    faqs: [
      {
        question: "Do I need my birth time for the Venus sign calculator?",
        answer:
          "No. Venus changes signs only every three to four weeks, so your birth date alone is enough — except when you were born on the exact day Venus changed signs, when the birth time settles it.",
      },
      {
        question: "Why is my Venus sign different from my Sun sign?",
        answer:
          "Venus orbits close to the Sun, so it is always within two signs of it — but it is often in a neighbouring sign, which is why your love style can differ noticeably from your core personality.",
      },
      {
        question: "Which Venus sign is the most romantic?",
        answer:
          "Pisces and Libra are traditionally called the most romantic Venus placements — Pisces for devotion and fantasy, Libra for charm and partnership. But every Venus sign loves deeply in its own style; Taurus is the most sensual, Scorpio the most intense.",
      },
      {
        question: "What if my Venus sign and my partner's Venus sign clash?",
        answer:
          "Clashing Venus signs (for example fire with water) mean different love languages, not doom. The fix is translation: learn what makes the other person feel loved — words, time, touch, gifts or loyalty — and offer that, rather than what you would want yourself.",
      },
      {
        question: "Does Venus retrograde at birth matter?",
        answer:
          "About 7-8% of people are born with Venus retrograde. Traditionally it suggests love lessons around self-worth and receiving affection. The sign remains the main influence; retrograde adds a more private, reflective tone.",
      },
    ],
  },

  "mercury-sign": {
    guideTitle: "Mercury Sign: How Your Mind and Voice Are Wired",
    guide: [
      "Your Mercury sign is the zodiac sign Mercury occupied when you were born. It governs how you think, learn, speak, write, negotiate and make decisions — your mental operating system. Two people can share a Sun sign yet argue, study and joke completely differently because their Mercury signs differ.",
      "Like Venus, Mercury never strays far from the Sun, so your Mercury sign is your Sun sign or a neighbouring one. Mercury in a fire sign thinks out loud and decides fast; in an earth sign it is methodical and evidence-based; in an air sign it is quick, verbal and curious; in a water sign it thinks in feelings, images and memory.",
      "Your Mercury sign also explains your communication friction with others. A Mercury in Taurus person needs time to process and dislikes being rushed, while a Mercury in Gemini partner changes topics mid-sentence. Neither is wrong — they are running different mental software, and knowing both signs turns misunderstandings into translation work.",
    ],
    steps: [
      "Enter your birth date — Mercury moves fast but a date is enough on most days.",
      "Read your Mercury sign's thinking style and communication strengths.",
      "Note the learning style in your result — it tells you how you absorb new skills fastest.",
      "Compare with the Mercury signs of people you talk with daily to smooth out friction.",
    ],
    resultMeaning: [
      "Read your result as a description of process, not intelligence: every Mercury sign is smart in its own register. Mercury in Scorpio researches obsessively and reads between the lines; Mercury in Sagittarius sees the big picture and misses typos. The practical value is choosing work, study methods and conversations that fit your wiring instead of fighting it.",
    ],
    faqs: [
      {
        question: "Do I need my exact birth time for Mercury sign?",
        answer:
          "Usually not. Mercury changes sign every two to three weeks. Only if you were born on a sign-change day does the birth time decide which side of the boundary you fall on.",
      },
      {
        question: "What does Mercury retrograde at birth mean?",
        answer:
          "Roughly 18% of people have Mercury retrograde in their birth chart. It is linked with a reflective, re-thinking mind — people who revise, edit and reconsider before speaking. It is far less disruptive natally than the famous Mercury retrograde transit periods.",
      },
      {
        question: "Which Mercury sign is best for writing or business?",
        answer:
          "Gemini and Virgo (both ruled by Mercury) are the classic writing and analysis placements; Capricorn excels at structured business communication; Libra at negotiation and diplomacy. The best Mercury sign is the one whose style you actually use.",
      },
      {
        question: "Why do I misunderstand my partner so often?",
        answer:
          "Mercury sign mismatches are the usual suspect: a water-sign Mercury communicates through tone and implication, an earth-sign Mercury through facts and specifics. Checking both Mercury signs shows each person where the other is literally coming from.",
      },
    ],
  },

  "nakshatra": {
    guideTitle: "Nakshatra Finder: Your Vedic Birth Star and What It Reveals",
    guide: [
      "Your nakshatra is the lunar mansion the Moon occupied at your birth — the oldest layer of Vedic astrology, older than the twelve-sign zodiac in Indian practice. The Moon's sidereal position is divided into 27 nakshatras of 13 degrees 20 minutes each, and each nakshatra is divided into four padas (quarters) that fine-tune the reading.",
      "The nakshatra is not a decorative detail: it decides your Vimshottari dasha sequence (the planetary periods that time major life chapters), it is the basis of Kundali Milan matching through gana, nadi and yoni, and each nakshatra carries its own deity, symbol, ruling planet and temperament. Two people with the same Moon sign but different nakshatras — say Cancer Moon in Pushya versus Ashlesha — are read very differently by a Vedic astrologer.",
      "Traditionally the Moon's nakshatra is found from its sidereal (Lahiri) longitude at the exact birth moment, which is why the finder asks for date and time. If your Moon sits within about a degree of a nakshatra boundary, an ephemeris-grade chart can refine the result.",
    ],
    steps: [
      "Enter your birth date and your exact birth time — the Moon moves about 13 degrees a day, so the time matters.",
      "Select your birth city so the chart is anchored to the right place.",
      "Read your nakshatra, its pada, ruling planet and deity.",
      "Use the result in Kundali Milan matching and to understand your dasha sequence.",
    ],
    resultMeaning: [
      "Your nakshatra describes instinctive nature — the layer of personality that shows under stress and in private. Pushya is the nourisher, Magha carries ancestral authority, Rohini is the sensual creator, Hasta the skilled maker. The ruling planet of your nakshatra also starts your Vimshottari dasha count, so this one result unlocks your whole timing map.",
    ],
    faqs: [
      {
        question: "What is the difference between nakshatra and Moon sign?",
        answer:
          "The Moon sign (rashi) is the 30-degree sign the Moon is in; the nakshatra is the narrower 13-degree-20-minute star segment inside it. Each rashi contains two and a quarter nakshatras. The rashi gives the broad temperament, the nakshatra the precise flavour.",
      },
      {
        question: "Why does my nakshatra decide my dasha?",
        answer:
          "Vimshottari dasha allots the Moon's remaining journey through its birth nakshatra to that nakshatra's ruling planet. The fraction of the nakshatra the Moon has already crossed becomes the fraction of the first dasha already lived before birth — which is why an accurate nakshatra matters for timing.",
      },
      {
        question: "What is a pada and does it change my nakshatra?",
        answer:
          "Each nakshatra has four padas of 3 degrees 20 minutes. The pada does not change the nakshatra itself, but it maps to a navamsa sign and refines personality and life direction in detailed chart reading.",
      },
      {
        question: "Which nakshatra is considered the best?",
        answer:
          "Pushya is traditionally called the most auspicious nakshatra — the star of nourishment, ruled by Saturn with Brihaspati as deity. Rohini, Uttara Phalguni and Shravana are also highly prized, but every nakshatra has gifts; there is no bad birth star.",
      },
      {
        question: "Can my nakshatra differ between two calculators?",
        answer:
          "Yes, near boundaries or when calculators use different ayanamsa values or date-only approximations. The Moon's exact sidereal longitude at your birth time is the deciding figure — around 13 degrees 20 minutes per nakshatra, counted from 0 degrees sidereal Aries.",
      },
    ],
  },

  "numerology": {
    guideTitle: "Life Path Number: The Core Calculation of Numerology",
    guide: [
      "Your Life Path number is numerology's equivalent of a Sun sign: the single most important number in your chart, derived from your full birth date. It describes your natural talents, your recurring life lessons and the road you keep finding yourself on, no matter how often you try to leave it.",
      "The calculation is transparent and centuries old: add the digits of your birth month, day and year, reducing each component to a single digit first (with master numbers 11, 22 and 33 preserved), then add the components together and reduce again. For 15 August 1947: month 8, day 1+5 = 6, year 1+9+4+7 = 21 → 3. Then 8 + 6 + 3 = 17 → 1+7 = 8. Life Path 8 — the number of power, money and mastery.",
      "Component-wise reduction matters: the older habit of adding the whole date in one string can hide master numbers and gives different results for the same birthday. This calculator reduces month, day and year separately first, which is the method used by most modern numerologists.",
    ],
    steps: [
      "Enter your full birth date exactly as on your birth certificate.",
      "Read your Life Path number — 1 to 9, or the master numbers 11, 22 and 33.",
      "Read the strengths and the challenge side: every number has both, and the challenges are the curriculum.",
      "Compare with your Destiny and Soul Urge numbers for the fuller picture — Life Path is the road, Destiny is the destination.",
    ],
    resultMeaning: [
      "Treat your Life Path as a description of the lessons that keep recurring: a Life Path 1 keeps meeting situations that demand independence; a Life Path 6 keeps being handed responsibility for others; a Life Path 5 keeps being offered change until it stops fearing it. The number does not limit careers — it explains which environments feel like swimming downstream.",
    ],
    faqs: [
      {
        question: "What are master numbers and why aren't they reduced?",
        answer:
          "11, 22 and 33 are called master numbers because they are read as intensified versions of 2, 4 and 6 with a larger public or spiritual dimension. Standard practice is to keep them unreduced when they appear as a final Life Path result.",
      },
      {
        question: "Can two calculators give me different Life Path numbers?",
        answer:
          "Yes, if one adds the entire date in a single string and the other reduces month, day and year separately first. The component method is the widely taught standard and the one this calculator uses; it is also the method that preserves master numbers correctly.",
      },
      {
        question: "Is Life Path the same as Destiny number?",
        answer:
          "No. Life Path comes from your birth date and describes the road and its lessons. Destiny (Expression) number comes from the letters of your full birth name and describes what you are here to accomplish. They are read together.",
      },
      {
        question: "Which Life Path numbers are most compatible?",
        answer:
          "Traditional pairings: 1 with 3, 5 and 9; 2 with 4, 6 and 8; 3 with 1, 5 and 7; 4 with 2, 6 and 8; 5 with 1, 3 and 7; 6 with 2, 4 and 9; 7 with 3, 5 and 9; 8 with 2, 4 and 6; 9 with 1, 6 and 3. Compatibility is a tendency, not a verdict — effort outranks arithmetic.",
      },
    ],
  },

  "love-compatibility": {
    guideTitle: "Love Compatibility: How Sign Matching Actually Works",
    guide: [
      "Love compatibility in astrology compares two people's charts for harmony and friction — and the honest version starts with elements. Fire signs (Aries, Leo, Sagittarius) ignite each other and pair naturally with air signs (Gemini, Libra, Aquarius), which feed fire. Earth signs (Taurus, Virgo, Capricorn) ground each other and blend well with water signs (Cancer, Scorpio, Pisces), which soften earth. Same-element pairs feel effortless; cross-element pairs need translation but often grow the most.",
      "A sign-to-sign score is a starting point, not a verdict, because real synastry layers many contacts: her Venus with his Mars (attraction), Moon to Moon (emotional safety), Mercury to Mercury (whether they can actually talk). That is why two couples with identical Sun-sign pairings can have completely different relationships — and why this calculator's percentage should be read as the weather, not the climate.",
      "Use the result the way good astrologers do: the strong areas tell you what to protect, and the friction areas tell you exactly where the couple's work is. A 62% match with understood friction routinely outlasts a 95% match taken for granted.",
    ],
    steps: [
      "Select the first person's Sun sign (or enter their birth date if asked).",
      "Select the second person's Sun sign.",
      "Read the overall score first, then the area-by-area breakdown — communication, emotions, attraction.",
      "For a deeper reading, compare Venus signs for love language and Moon signs for emotional needs using the dedicated calculators.",
    ],
    resultMeaning: [
      "A high score means your natural rhythms mesh: similar needs for affection, space, money and adventure. A mid-range score usually means one strong axis (say, attraction) and one working axis (say, communication). A low score flags genuinely different operating systems — not impossibility; some of the longest marriages are low-score pairings where both people learned the other's language deliberately.",
    ],
    faqs: [
      {
        question: "Which zodiac pairs are considered the most compatible?",
        answer:
          "Classic high-harmony pairs include Taurus with Cancer, Leo with Libra, Scorpio with Pisces, Virgo with Capricorn and Gemini with Aquarius — same or friendly elements, shared values and matching energy levels.",
      },
      {
        question: "Can a low compatibility score still work?",
        answer:
          "Absolutely. The score measures natural ease, not worth or durability. Low-score couples succeed by naming their differences early — especially around affection styles and conflict habits — instead of assuming the other person is being difficult.",
      },
      {
        question: "What matters more than Sun sign compatibility?",
        answer:
          "Moon sign compatibility for emotional life, Venus and Mars contacts for attraction, and Mercury compatibility for day-to-day communication. A full synastry reading weighs all of them; the Sun-sign score is the quick first impression.",
      },
      {
        question: "Why do I feel drawn to someone with a low match score?",
        answer:
          "Attraction often comes from the contacts a Sun-sign score cannot see — their Venus may fall in your sign, or your Mars signs may ignite. Opposites genuinely attract when the missing element in one chart is supplied by the other; the work is keeping the spark from becoming friction.",
      },
    ],
  },

  "tarot": {
    guideTitle: "3-Card Tarot Reading: Past, Present and Future Explained",
    guide: [
      "The three-card spread is the oldest and most practical tarot layout: the first card shows the past influences still shaping your situation, the second the present energy you are actually standing in, and the third the future outlook — the direction things move if nothing changes. Three cards, one story, no clutter.",
      "This reader draws from the 22 Major Arcana — the archetypal cards from The Fool to The World that describe life's big themes: beginnings, power, love, change, crisis and completion. When a Major Arcana card appears, tradition reads it as a significant force rather than a passing mood, which is why a focused Major Arcana spread answers 'what is this chapter about?' better than a full-deck daily draw.",
      "Read the three cards as a sentence, not three separate fortunes. The Sun in the past, The Emperor in the present and The Chariot in the future tells a story: a joyful period built the confidence, structure is now required, and determined action carries it forward. The middle card is always the most important — it is the only one you can act on today.",
    ],
    steps: [
      "Take a breath and hold one clear situation or question in mind — specific questions get specific readings.",
      "Tap Draw Your 3 Tarot Cards and let the three cards reveal themselves.",
      "Read past, present and future in order, then re-read them as one connected story.",
      "Focus on the present card's guidance — that is your actionable step for today.",
    ],
    resultMeaning: [
      "The future card is a trajectory, not a sentence: it shows where current energy leads, and changing the present card's behaviour changes the destination. If a challenging card appears (The Tower, Death, The Devil), read it by its traditional core — sudden clearing, necessary endings, or a habit that owns you — rather than as doom; in practice these cards usually name what you already know needs to change.",
    ],
    faqs: [
      {
        question: "How accurate is an online tarot reading?",
        answer:
          "Treat it as a structured reflection tool: the draw is random, but the archetypes are real, and seeing your situation described through a card's symbolism often clarifies what you already sense. It is guidance for thinking, not a guarantee of events.",
      },
      {
        question: "Can I draw again if I don't like my cards?",
        answer:
          "You can, but tradition advises against re-drawing until you get a nicer answer — the first draw is the reading. If the cards confuse you, sit with them for a day; the meaning usually lands after the situation moves.",
      },
      {
        question: "What does the Death card mean in a reading?",
        answer:
          "Almost never physical death. Death (XIII) means an ending that clears the ground — a phase, job, habit or identity concluding so something new can start. In the future position it typically signals a transition you will ultimately be relieved by.",
      },
      {
        question: "Why does this reader use only Major Arcana cards?",
        answer:
          "The 22 Major Arcana carry the big archetypal themes, which suits a focused three-card general reading. Full 78-card decks add everyday detail through the Minor Arcana; for a daily or weekly chapter-check, Major Arcana alone keeps the message concentrated.",
      },
      {
        question: "How often should I do a 3-card reading?",
        answer:
          "Once a day for a daily check, or once per question. Drawing repeatedly on the same question in one sitting tends to produce noise rather than clarity — ask once, act on the present card, then ask again when the situation has actually changed.",
      },
    ],
  },
  "moon-phase": {
    guideTitle: "Moon Phase Calculator: The Phase You Were Born Under",
    guide: [
      "Your birth Moon phase is where the Moon stood in its monthly cycle on the day you were born — measured as the angle between the Sun and the Moon in the sky. That angle decides how much of the Moon's face was lit: 0 degrees is a New Moon (the Moon sits between Earth and Sun), 90 degrees is a First Quarter, 180 degrees is a Full Moon, and 270 degrees is the Third Quarter. The full cycle, called a synodic month, takes about 29.53 days, so your phase depends on your birth date — not your birth time or place.",
      "Astrologers read the birth Moon phase as your emotional operating style: how you instinctively react, recharge and get things started. New Moon people are seed-planters who act on instinct; Full Moon people are illuminators who need an audience and emotional exchange; Balsamic (waning crescent) people are quiet finishers who process life internally. The phase does not replace your Moon sign — the sign colours how you feel, the phase shows the rhythm you feel it in.",
      "This calculator computes the real thing: it takes the actual Sun and Moon positions for your birth date (midday UTC) from our astronomy engine, finds the elongation angle between them, and converts it into both your phase and the approximate percentage of the Moon that was illuminated — the same geometry astronomers use, with the traditional astrological meanings layered on top.",
    ],
    steps: [
      "Enter your birth date in the date box at the top of the reader.",
      "Read your personal result line: your phase name, the exact Sun–Moon angle, and how illuminated the Moon was.",
      "Or tap any of the eight phase buttons to browse what each phase means.",
      "Read your phase's Emotional Personality Archetype and its Prime Manifestation Superpower in the result card.",
      "Combine it with your Moon sign (try the Moon Sign Calculator) for the full picture: sign = emotional style, phase = emotional rhythm.",
    ],
    resultMeaning: [
      "Waxing phases (New Moon to Full Moon) are traditionally read as outward, building energy: people born then tend to initiate, accumulate and push forward. Waning phases (Full Moon back to New Moon) are read as inward, refining energy: people born then tend to analyse, share, release and complete. Neither is better — a team, a family or a relationship usually works best with a mix of both rhythms.",
      "Use your result as a timing hint as well as a personality note. When today's Moon returns to the phase you were born under — which happens once a month — many people notice a personal reset point: intentions set then tend to feel unusually natural to act on. The reader above always shows your birth phase, and the phase buttons let you compare it with today's energy.",
    ],
    faqs: [
      {
        question: "Do I need my birth time or birthplace for the Moon phase calculator?",
        answer:
          "No. The Moon phase changes slowly through the day, so your birth date alone is enough. The calculator uses midday UTC on your date; only if you were born within a few hours of a phase boundary could the exact hour matter.",
      },
      {
        question: "How is the Moon phase on my birth date calculated?",
        answer:
          "By geometry: the angle (elongation) between the Sun and the Moon. The angle is divided into eight 45-degree sectors — New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon, Waning Gibbous (Disseminating), Third Quarter and Balsamic — and illumination follows from the same angle.",
      },
      {
        question: "What does being born on a Full Moon mean?",
        answer:
          "Traditionally: high emotional visibility, strong intuition and a life organised around relationships and feedback — the Sun and Moon sat opposite each other (about 180 degrees apart) when you were born, so your identity and your feelings constantly illuminate, and challenge, each other.",
      },
      {
        question: "What does being born on a New Moon mean?",
        answer:
          "Traditionally: instinct, fresh starts and self-reinvention. With the Sun and Moon together (0 degrees apart), identity and emotion are fused — New Moon people often act first and understand their feelings afterwards, and they tend to reinvent themselves in cycles.",
      },
      {
        question: "Is my Moon phase the same as my Moon sign?",
        answer:
          "No. Your Moon sign is the zodiac sign the Moon was in; your Moon phase is the Sun–Moon angle, which sets how lit the Moon was. Two people can share a Moon sign but be born under opposite phases, and their emotional rhythms will feel quite different.",
      },
    ],
  },
};
