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

  "angel-numbers": {
    guideTitle: "Angel Numbers: What They Mean and How to Find Yours",
    guide: [
      "Angel numbers are repeating digit sequences — 111, 222, 333, 444 and so on — that people keep noticing on clocks, receipts, number plates and phone screens. In numerology they are read as prompts for reflection: a repeated sequence is treated as a nudge to pay attention to a theme in your life, not as a prediction or a message with a guaranteed outcome.",
      "There are two different numbers people mean when they say 'my angel number'. The first is the sequence you keep seeing — that is the one this decoder explains: pick the sequence (111, 222, 444, 777, 888 and more) and read its traditional meaning. The second is your personal angel number, calculated from your birth date or your name, which stays the same for life. Both are explained below so you do not mix them up.",
      "To calculate a personal angel number from your birth date, add all the digits of your full birth date and keep reducing until you reach a single digit (1-9): for example, 7 August 1986 gives 7 + 8 + 1 + 9 + 8 + 6 = 39, then 3 + 9 = 12, then 1 + 2 = 3, so the pattern is 333. If a reduction lands on 11, 22 or 33, many numerologists keep it as a master number instead of reducing further.",
      "To calculate one from your name, use the Pythagorean letter chart (A = 1, B = 2, C = 3, D = 4, E = 5, F = 6, G = 7, H = 8, I = 9, then J = 1, K = 2 and so on repeating), add the values of your full birth name and reduce the same way. Use the name on your birth certificate, not a nickname: the birth-date number is read as your life direction, while the name number is read as your natural talents — so the two often differ, and that is normal.",
      "The traditional meanings in brief: 111 new beginnings and manifestation, 222 balance and partnership, 333 growth and creative expression, 444 stability and protection, 555 change and freedom, 666 responsibility and rebalancing home life, 777 spiritual insight and introspection, 888 abundance and achievement, 999 completion and letting go. Four-digit sequences people commonly ask about include 1111 (a gateway moment for focused intention), 1212 (stay positive and trust the direction you are heading) and 1234 (steady step-by-step progress).",
      "Treat all of this as a symbolic tradition, not a tested predictor: the value is in the reflection it prompts — what theme keeps showing up in your life right now, and what would acting on it look like? No sequence guarantees an outcome, and no result here should replace a real decision about health, money or relationships.",
    ],
    steps: [
      "If a sequence keeps appearing in your day, pick it in the decoder above and read its meaning and suggested action.",
      "To find your personal angel number, add the digits of your full birth date and reduce to a single digit — or use the Pythagorean values of your full birth name.",
      "If you land on 11, 22 or 33, read both the master number meaning and its reduced base number (2, 4 or 6).",
      "Compare the theme with what is actually happening in your life right now — that is where the reading earns its keep.",
    ],
    resultMeaning: [
      "A repeated 111 or 1111 is traditionally read as a 'thoughts manifesting fast' moment: the advice is to focus deliberately on what you want rather than on worries. A run of 444 is read as reassurance and a call to build solid foundations, while 555 is read as change already in motion — the practical question is what you need to release or reorganise, not whether change is coming.",
      "Your personal number (from birth date or name) describes a standing theme, not a day-to-day message: a life-path-style 3 points to expression and communication as a lifelong thread, while a 7 points to introspection and study. When the sequence you keep seeing matches your personal number, traditional readers take that as emphasis — the same theme, louder.",
    ],
    faqs: [
      {
        question: "What is my angel number?",
        answer:
          "Most commonly, the single digit (1-9) you get by adding all the digits of your full birth date and reducing to one digit — that digit gives the pattern (1 = 111, 2 = 222, up to 9 = 999). A second method uses your full birth name with Pythagorean letter values. The two can differ; the birth-date number is read as life direction and the name number as natural talents.",
      },
      {
        question: "What does seeing 1111 mean?",
        answer:
          "Traditionally, 1111 is read as an intensified 111: a gateway moment for focused intention. The practical reading is simple — notice what you were thinking about when you saw it, and decide deliberately whether that is what you want to pursue.",
      },
      {
        question: "Do angel numbers predict the future?",
        answer:
          "No. Angel numbers belong to a symbolic, interpretive tradition, not to tested prediction. They are best used as prompts for reflection about a theme in your life, not as guarantees about money, health or relationships.",
      },
      {
        question: "Why do my birth-date and name numbers differ?",
        answer:
          "Because they measure different things in the tradition: the birth-date number reflects your life path and direction, while the name number reflects your expression and natural abilities. Different results are normal, not a sign that one calculation is wrong.",
      },
      {
        question: "What are master numbers 11, 22 and 33?",
        answer:
          "In numerology, 11, 22 and 33 are kept unreduced when they appear during a calculation, because they are read as intensified versions of 2, 4 and 6: 11 for intuition and spiritual insight, 22 for building large-scale plans into reality, and 33 for teaching, healing and service. If you get one, read both the master meaning and the base number.",
      },
    ],
  },

  "kundali-milan": {
    guideTitle: "Kundali Milan: How the 36 Guna Score Works",
    guide: [
      "Kundali Milan (also called Guna Milan or Kundali matching) compares the Moon signs and nakshatras of two people across eight traditional tests called Ashtakoota, which add up to a maximum of 36 points (gunas). It has been the standard first step of Vedic marriage matching for centuries: a score of 18 or above is traditionally considered acceptable, 25 or above is good, and 32 or above is excellent.",
      "The eight kootas are Varna (1 point, spiritual outlook), Vashya (2, mutual influence), Tara (3, wellbeing and longevity), Yoni (4, physical and intimate compatibility), Graha Maitri (5, mental friendship), Gana (6, temperament), Bhakoot (7, family welfare and prosperity) and Nadi (8, health and progeny). Nadi carries the most weight — when both partners share the same Nadi it creates Nadi Dosha, traditionally cancelled in several situations, such as when the nakshatra or its quarter (pada) differs.",
      "A complete match is always read together with the full birth charts: Manglik (Mangala) Dosha, the strength of the 7th house, and the dashas running at the time of marriage all modify the picture. Treat the guna score as a strong first filter, not a final verdict on a relationship.",
      "North India uses this eight-koota system (Ashtakoota, 36 points). South India traditionally uses Dashakoota, a ten-factor system that adds Mahendra and Rajju to the same core — so a South Indian match report may quote a different total and still be describing the same couple. This calculator scores the Ashtakoota eight.",
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
      {
        question: "Does this calculator check Mangal Dosha (Manglik status)?",
        answer:
          "No — this tool scores only the Ashtakoota guna milan. Mangal Dosha (Manglik status) is a separate check read from Mars in the Lagna and Moon charts, and it changes with birth time because the Lagna shifts roughly every two hours. A complete marriage reading weighs the guna score together with Manglik status, the 7th house and current dasha periods.",
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

  // Phase B enrichment batch 1 (2 Nov 2026, 10/10 programme)
  "neptune-sign": {
    guideTitle: "Neptune Sign Guide: Your Dreams, Art and Collective Imagination",
    guide: [
      "Your Neptune sign is the sign Neptune occupied when you were born, and it describes how you dream, imagine, idealise and seek spiritual connection. Neptune dissolves boundaries, so this placement colours your taste in art, film and music, your compassion, and the illusions you are most likely to fall for. Because Neptune moves very slowly, it is not personal by itself. Everyone born in the same era shares your Neptune sign, and the house it falls in, plus aspects to personal planets, is what makes the placement feel individual to you.",
      "You can find your sign from your birth period alone, using this approximate tropical table. Neptune was in Libra from 1943 to 1957, Scorpio from 1957 to 1970, Sagittarius from 1970 to 1984, Capricorn from 1984 to 1998, Aquarius from 1998 to 2011, Pisces from 2011 to 2025, and Aries from 2025 to 2039. These boundaries are approximate and shift slightly with retrograde motion near the edges. If you were born within a few months of a changeover year, check your exact birth date against a detailed table rather than relying on the year alone.",
      "Each generation expresses Neptune differently. Neptune in Sagittarius dreamed through travel, belief and big philosophies; Neptune in Capricorn idealised success and tried to make dreams practical and respectable; Neptune in Aquarius imagined new communities, technology and humanitarian futures; Neptune in Pisces, in its home sign, deepened sensitivity to music, film, healing and collective emotion; Neptune in Aries is beginning to dream in bolder, more independent and pioneering ways. Read your sign as a shared cultural atmosphere first, then ask where that atmosphere concentrates in your own life through its house placement."
    ],
    steps: [
      "Enter your birth date or select your birth period in the tool above.",
      "Compare the result with the era table in this guide to confirm your Neptune sign.",
      "Note the themes the reader highlights, especially art, dreams and compassion.",
      "Reflect on which house Neptune occupies in your full chart for the personal layer."
    ],
    resultMeaning: [
      "A Neptune result is best read as a description of your generational imagination, not as a private prediction. It shows the images, music, myths and spiritual longings your whole age group tends to share, and the kind of escapism you should watch for when life feels overwhelming. Two people with Neptune in Pisces may share a love of immersive art, yet express it in completely different parts of life depending on house placement and life experience.",
      "Use the result as a prompt for honest reflection. Where do you idealise people or situations and ignore clear evidence? Where does creativity genuinely restore you? Neptune rewards gentleness, clear boundaries and regular grounding in sleep, nature and routine. If a theme in your reading feels vague, that vagueness is itself useful information, because Neptune areas of life often need more definition, honesty and practical structure than other areas do."
    ],
    faqs: [
      {
        question: "Does my Neptune sign change during my life?",
        answer: "No. Your Neptune sign is fixed by your birth date and stays the same throughout your life. What changes is Neptune moving by transit through later signs, which can temporarily highlight different houses in your chart. Your natal sign remains the foundation, describing the imaginative style and spiritual sensitivities you were born into with your generation."
      },
      {
        question: "Why do all my friends have the same Neptune sign?",
        answer: "Because Neptune spends about fourteen years in each sign, classmates, siblings close in age and most friends from school will usually share it. That is expected and does not make the placement meaningless. It describes a shared generational background. Your house placement, aspects and the rest of your chart are what separate your personal experience from theirs."
      },
      {
        question: "What if I was born near a Neptune sign change?",
        answer: "If your birth falls within a few months of a boundary year in the table, do not guess from the year alone. Neptune can move back and forth across a boundary during retrograde periods. Check your exact day and month against a detailed ephemeris table or a full birth chart, and use that confirmed sign when reading this guide."
      },
      {
        question: "Does my Neptune sign affect compatibility?",
        answer: "Only in a broad, generational way. Shared Neptune signs can mean you idealise similar things or grew up with similar music, films and cultural dreams, which can feel comforting. Real compatibility depends far more on personal planets, the Moon, Venus and Mars, and on how two charts interact overall, so treat Neptune as background colour rather than a verdict."
      },
      {
        question: "How can I work positively with my Neptune sign?",
        answer: "Give Neptune healthy outlets on purpose, such as music, film, swimming, prayer, meditation or making art without needing it to be perfect. Protect those practices with clear boundaries around sleep, substances and promises. Neptune works best when inspiration is welcomed regularly but everyday decisions still rest on evidence, rest and honest conversation."
      }
    ]
  },
  "saturn-sign": {
    guideTitle: "Saturn Sign Guide: Work, Discipline and the Lessons Time Teaches",
    guide: [
      "Your Saturn sign is the sign Saturn occupied when you were born, and it shows where you learn through effort, patience and consequence rather than luck. It points to the work you take seriously, the standards you hold yourself to, and the area where confidence tends to arrive later, after practice. Saturn is faster than the other outer planets, but it still spends about two and a half years in each sign, so everyone in your school years shares it. Your house placement and aspects make it personal, shaping exactly where maturity is demanded of you most.",
      "Find your sign from this approximate tropical table. Saturn was in Cancer from 2003 to 2005, Leo from 2005 to 2007, Virgo from 2007 to 2010, Libra from 2010 to 2012, Scorpio from 2012 to 2015, Sagittarius from 2015 to 2017, Capricorn from 2017 to 2020, Aquarius from 2020 to 2023, Pisces from 2023 to 2025, and Aries from 2025 to 2028. Boundaries shift slightly with retrogrades, so if you were born near a changeover, check your exact birth date before settling on a sign and reading the interpretation that follows in this guide.",
      "The sign colours how a cohort approaches responsibility. Saturn in Virgo builds skill through precision and useful service; Saturn in Libra learns fairness, commitment and partnership the hard way; Saturn in Scorpio earns endurance through shared resources and emotional honesty; Saturn in Sagittarius must test beliefs against reality; Saturn in Capricorn, in its home sign, is ambitious, structured and focused on lasting achievement; Saturn in Aquarius works to reform systems rather than simply obey them; Saturn in Pisces learns boundaries around compassion, rest and creative work; Saturn in Aries, the newest placement, is learning patience, self control and the discipline of starting well."
    ],
    steps: [
      "Enter your birth date or select your birth period in the reader above.",
      "Compare the result with the era table in this guide to confirm your Saturn sign.",
      "Read the highlighted themes around work, discipline and long-term goals carefully.",
      "Consider the house Saturn occupies in your full chart to see where the lessons apply."
    ],
    resultMeaning: [
      "Read your Saturn result as a description of your working style and your relationship with time, not as a judgement on your character. It suggests where shortcuts tend to fail for your generation, where steady effort compounds, and what kind of structure actually supports you. Many people dislike their Saturn themes in youth and respect them by middle age, because Saturn rewards tend to arrive after the effort, not before it.",
      "The most useful question a Saturn reading raises is practical: what small, repeatable commitment would improve this area over the next year? Saturn responds to calendars, budgets, practice schedules and honest accountability, not to self-criticism. If your result feels demanding, break it into one modest habit. Consistency matters far more than intensity here, and progress that looks slow at first is often the kind that lasts."
    ],
    faqs: [
      {
        question: "Is Saturn always difficult or restrictive?",
        answer: "No. Saturn feels restrictive mainly where you want results without the underlying structure. In areas where you have done the work, Saturn brings competence, reliability and genuine authority. Many people find their Saturn sign becomes a source of pride later in life, precisely because nothing there was handed to them and every gain was earned and kept."
      },
      {
        question: "Why do people my age share my Saturn sign?",
        answer: "Because Saturn spends roughly two and a half years in each sign, a whole school cohort shares the same placement and many of its work attitudes. That shared layer explains generational habits around careers and responsibility. Your personal expression comes from the house Saturn occupies and the aspects it makes, which differ from chart to chart."
      },
      {
        question: "What is a Saturn return and when does it happen?",
        answer: "A Saturn return happens when Saturn comes back to its birth sign and degree, around ages twenty nine, fifty eight and eighty seven. It is a period of reviewing commitments, work and responsibilities and keeping only what is sustainable. The sign table in this guide helps you locate that return period, but exact timing depends on your precise birth degree."
      },
      {
        question: "What if I was born near a Saturn sign boundary?",
        answer: "Check your exact date rather than guessing from the year. Saturn stations and retrogrades can move it back across a sign boundary for several months, so two people born in the same changeover year can have different Saturn signs. A detailed ephemeris table or full birth chart will confirm which side of the boundary your birth date falls on."
      },
      {
        question: "Can my Saturn sign help with career choices?",
        answer: "It can suggest a working style rather than a specific job title. Saturn in Capricorn may thrive with clear ladders and measurable results, while Saturn in Aquarius may need independence and a reforming purpose. Use it to choose environments, routines and managers that suit your discipline style, and keep real skills, qualifications and experience at the centre of any decision."
      }
    ]
  },
  "pluto-sign": {
    guideTitle: "Pluto Sign Guide: Power, Shadow and Generational Transformation",
    guide: [
      "Your Pluto sign is the sign Pluto occupied when you were born, and it describes how your generation confronts power, loss, control and rebirth. Pluto governs what is hidden, what must be eliminated, and what returns in a stronger form after a crisis. It is the slowest planet in this set, spending between twelve and thirty one years in a sign, so your Pluto sign is shared by an entire generation. Its personal meaning comes almost entirely from its house placement and aspects to your personal planets in your chart.",
      "Locate your generation in this approximate tropical table. Pluto was in Virgo from 1958 to 1971, Libra from 1971 to 1984, Scorpio from 1984 to 1995, Sagittarius from 1995 to 2008, Capricorn from 2008 to 2023, and Aquarius from 2023 to 2043. Because Pluto retrogrades across boundaries, births near a changeover year need an exact date check. Two people born months apart near 1984 or 2008, for example, can belong to different Pluto generations. That long Aquarius stay also means Pluto generations are now much longer than the Scorpio generation, a useful reminder that these spans are never uniform.",
      "Each Pluto generation carries a distinct collective task. Pluto in Virgo transformed work, health and daily systems; Pluto in Libra remade marriage, law and ideas of fairness; Pluto in Scorpio, in its home sign, intensified questions of sexuality, shared money and psychological truth; Pluto in Sagittarius exposed belief, media and global culture; Pluto in Capricorn tested governments, corporations and authority itself; Pluto in Aquarius is beginning a long transformation of technology, networks and collective power. Your sign names the era, not your private destiny, however intense the themes may feel."
    ],
    steps: [
      "Enter your birth date or select your birth period in the reader above.",
      "Compare the result with the era table in this guide to confirm your Pluto generation.",
      "Notice which themes around power, change and renewal the reader emphasises.",
      "Look at the house Pluto occupies in your full chart for where this plays out personally."
    ],
    resultMeaning: [
      "A Pluto result should be read slowly. It describes the deep background pressures your generation grew up inside, such as attitudes to authority, money, technology or truth, rather than events that will happen to you personally. Where it becomes personal is the house: Pluto in the seventh house, for example, concentrates transformation in partnerships, while Pluto in the tenth concentrates it in career and public life, even for people with the identical sign.",
      "Working well with Pluto means practising honest elimination. Periodically ask what habit, grudge, subscription, role or version of yourself has genuinely ended, and let it go cleanly instead of controlling its memory. Pluto themes improve with therapy, journalling, debt clearing and other structured ways of facing uncomfortable truths. Avoid power struggles you do not need; transformation offered voluntarily is almost always gentler than transformation imposed by crisis."
    ],
    faqs: [
      {
        question: "Why does Pluto stay in some signs much longer than others?",
        answer: "Pluto has a highly elliptical orbit, so it moves at very different speeds through the zodiac. It spent only about twelve years in Scorpio but around thirty one years in Taurus in an earlier era. That uneven pace is why Pluto generations are different lengths and why the sign is a generational marker rather than a personal one."
      },
      {
        question: "Does my Pluto sign describe my personality?",
        answer: "Only in a very broad way. It describes the collective obsessions and crises your generation shares, not your temperament, talents or daily behaviour. Personal planets such as the Sun, Moon, Mercury, Venus and Mars describe you far more directly. Pluto becomes personal mainly through its house placement and close aspects to those personal planets in your chart."
      },
      {
        question: "What if I was born when Pluto changed signs?",
        answer: "Use your exact birth date, not just the year. Pluto can cross a boundary, retrograde back, and cross again over many months, so births near 1971, 1984, 1995, 2008 or 2023 are the most likely to be misread from a year table. A detailed ephemeris or full birth chart will settle the sign reliably."
      },
      {
        question: "Is Pluto in Scorpio stronger than other signs?",
        answer: "Pluto is traditionally considered at home in Scorpio, so that generation often expresses Pluto themes of intensity, secrecy and regeneration very directly. Stronger does not mean better or worse for an individual. Every Pluto sign has a demanding collective task, and how it affects you personally depends on house placement and aspects, not on the sign alone."
      },
      {
        question: "How can I work with Pluto themes in a healthy way?",
        answer: "Focus on honesty and clean endings. Clear debts where you can, finish or formally close what has ended, and use reflective practices such as journalling or counselling when old patterns resurface. Pluto rewards voluntary change and punishes clinging and control. Small, truthful steps taken early usually prevent the larger upheavals Pluto is associated with."
      }
    ]
  },
  "uranus-sign": {
    guideTitle: "Uranus Sign Guide: Breakthroughs, Technology and Your Rebel Streak",
    guide: [
      "Your Uranus sign is the sign Uranus occupied when you were born, and it shows how your generation breaks rules, adopts new technology and imagines a freer future. Uranus rules sudden insight, experimentation and the refusal to live by outdated traditions. It spends about seven years in each sign, so everyone in your age group shares it, and classmates will almost always have the same Uranus sign as you. The sign describes the style of change you collectively bring; the house shows where you personally need freedom, originality and experimentation.",
      "Find your era in this approximate tropical table. Uranus was in Libra from 1968 to 1975, Scorpio from 1975 to 1981, Sagittarius from 1981 to 1988, Capricorn from 1988 to 1996, Aquarius from 1996 to 2003, Pisces from 2003 to 2011, Aries from 2011 to 2019, Taurus from 2019 to 2026, and Gemini from 2026 onward. Boundaries blur slightly with retrograde motion, so births near a changeover year should be confirmed with an exact birth date rather than the year alone. The table also shows why grandparents and grandchildren rarely share this sign, while school friends almost always do.",
      "Each Uranus generation rebels in its own direction. Uranus in Capricorn disrupted careers and institutions from inside; Uranus in Aquarius, in its home sign, normalised the internet, networks and alternative identities; Uranus in Pisces dissolved boundaries in music, film and spirituality; Uranus in Aries championed start ups, personal branding and direct action; Uranus in Taurus is reinventing money, food and material security; Uranus in Gemini is set to transform learning, media and transport. Your sign shows which traditions your cohort simply will not keep. The common thread is honesty about what no longer works."
    ],
    steps: [
      "Enter your birth date or select your birth period in the reader above.",
      "Compare the result with the era table in this guide to confirm your Uranus sign.",
      "Read the themes around originality, technology and change that the reader highlights.",
      "Check the house Uranus occupies in your full chart to find your personal freedom needs."
    ],
    resultMeaning: [
      "Read your Uranus result as a portrait of your generation at its most inventive, not as a forecast of sudden events in your own life. It explains why your age group adopts some technologies instantly, questions certain traditions automatically, and expects flexibility in work and identity. When you feel restless in a rigid environment, you are often expressing a generational value, which is why finding peers who share that value can feel so relieving.",
      "Personally, Uranus matters most where it sits by house and aspect. That area of life needs honesty, variety and room to experiment, and it tends to stagnate under tight control. Build deliberate outlets for change there, such as side projects, flexible routines or new skills, so that your need for freedom renews your life in planned ways instead of arriving as an abrupt break you did not choose."
    ],
    faqs: [
      {
        question: "Why do I share my Uranus sign with everyone my age?",
        answer: "Because Uranus takes about seven years to cross one sign, an entire primary school generation shares the same placement. That is normal and intentional in interpretation. Uranus describes collective attitudes to freedom, technology and rebellion. Your individual expression comes from its house placement and its aspects to personal planets, which are unique to your chart."
      },
      {
        question: "Does Uranus cause sudden changes in my life?",
        answer: "Uranus is associated with sudden insight and disruption by transit, when the moving planet contacts points in your chart. Your birth sign by itself does not schedule those events. It describes the style of change your generation favours. Treat any restlessness it highlights as information about where you need more flexibility, not as a prediction."
      },
      {
        question: "What if I was born near a Uranus sign change?",
        answer: "Confirm with your exact birth date. Uranus can enter a new sign, retrograde back into the previous one, and enter again months later, so births near years such as 1996, 2003, 2011, 2019 or 2026 can easily be misread from a year only table. A detailed ephemeris or full birth chart gives the reliable answer."
      },
      {
        question: "Is Uranus in Aquarius especially powerful?",
        answer: "Aquarius is the sign Uranus traditionally rules, so that generation often expresses Uranian themes of networks, technology and social reform in a concentrated way. It does not make individuals luckier or more original by default. Every Uranus sign innovates somewhere, and house placement decides where that inventiveness shows most clearly in your own life."
      },
      {
        question: "How can I use my Uranus sign constructively?",
        answer: "Give the Uranus part of your life scheduled freedom. Learn emerging tools early, keep one project where experimentation is allowed, and review routines yearly so small updates prevent large ruptures. Uranus works best when change is a habit rather than an emergency, and when originality serves a real purpose instead of simply opposing every rule."
      }
    ]
  },
  "friendship-compatibility": {
    guideTitle: "Why Some Friendships Feel Effortless: The 11th House, Moon and Mercury",
    guide: [
      "Some friendships feel easy from the first conversation, while others stay polite but never quite click. In astrology, friendship compatibility is not mainly about Sun signs. It is about social fit: how you relax, talk and spend time together. The clearest place to look is the 11th house, the house of friends, groups and shared hopes. The sign on your 11th house, and any planets in it, describes the companions you naturally gather and the social world where you feel you belong.",
      "Three placements do most of the everyday work. Your Moon sign shows emotional ease — whether you can be tired, quiet or honest around someone without performing. Your Mercury sign shows communication style: some friends bond through long talks, others through humour or practical help. Your Venus sign shows social taste, from what you find fun to how you show appreciation. When these line up comfortably between two charts, conversation flows and small differences rarely become friction. When they clash, the friendship can still work, but it needs more patience and clearer expectations.",
      "Elements give a quick, honest summary of social energy. Fire with fire is lively and encouraging, though it can drift. Earth with earth is steady and loyal, built on showing up. Air with air is talkative and idea-led, lighter on emotional check-ins. Water with water is intuitive, with feelings understood without explanation. Fire pairs well with air, which feeds its enthusiasm, and earth pairs well with water, which softens and sustains it. Mixed elements are not a problem; they describe a friendship that brings you something different from your own nature.",
      "Sun-sign-only matching is the shallow version because the Sun says more about identity than daily companionship. Two people with supposedly incompatible Sun signs often have beautifully matched Moons or Mercurys and become lifelong friends, while a perfect Sun pairing can struggle if their social needs differ. Use Sun signs as a starting hint, then look deeper: the 11th house for the shape of your social life, the Moon for comfort, Mercury for conversation and Venus for shared pleasures. That fuller picture explains real friendships far better."
    ],
    steps: [
      "Enter your birth date in the matcher, and add your friend's birth date if you know it.",
      "Review the summary shown, noting comments about shared energy, communication or social style.",
      "Compare the result with real life — easy topics, recurring misunderstandings, how you show up for each other.",
      "Use this guide to check the deeper factors yourself: Moon, Mercury and Venus signs, 11th house sign, and your elements."
    ],
    resultMeaning: [
      "A strong result points to ease rather than perfection: you recharge in similar ways, understand each other's humour, and can disagree without the bond feeling threatened. That looks like low-maintenance contact, honest conversation and loyalty over time. You will still irritate each other sometimes — every long friendship has seasons — but repair comes easily.",
      "A lower or mixed result is not a verdict. It highlights difference: one person needs more contact, depth or spontaneity than the other. Many valuable friendships are exactly this kind, widening your world rather than mirroring it. Read it as a map of where to be thoughtful, not a reason to step back."
    ],
    faqs: [
      {
        question: "What matters most for friendship compatibility in astrology?",
        answer: "The 11th house is the starting point because it governs friends, groups and shared hopes. After that, look at Moon sign for emotional ease, Mercury sign for how you talk together, and Venus sign for shared pleasures. Together these describe daily companionship far more accurately than Sun signs alone, which only cover general identity and temperament."
      },
      {
        question: "Can two people with incompatible Sun signs be great friends?",
        answer: "Yes, very often. Sun signs are a small part of a full chart, and friendship depends more on emotional comfort, conversation and social rhythm. Two people whose Suns clash on paper may have harmonious Moons or complementary Mercury signs, making them natural confidants. Shared history, kindness and reliability matter more than any single placement."
      },
      {
        question: "Which element combinations work best for friendship?",
        answer: "Same-element friendships tend to feel easiest: fire with fire is energising, earth with earth is dependable, air with air is stimulating and water with water is emotionally attuned. Fire with air and earth with water are the classic complementary pairs. Mixed combinations also thrive; they often bring balance and new experiences rather than instant familiarity."
      },
      {
        question: "What does the 11th house sign say about my friendships?",
        answer: "Your 11th house sign describes the atmosphere of your social life and the kind of friends you seek out. A Leo 11th house often enjoys warm, expressive, loyal circles, while an Aquarius 11th house may prefer independent friends united by ideas or causes. Planets in the house add detail about what friendships bring you."
      },
      {
        question: "Should a low friendship score mean I end the friendship?",
        answer: "No. A compatibility summary describes patterns of ease and friction, not the worth of a real relationship built on shared experience and trust. Use a lower result to understand where you differ — contact style, emotional needs, social energy — and where communication helps. Many lasting friendships are astrologically mixed and succeed through honesty and mutual effort."
      }
    ]
  },
  "personal-month": {
    guideTitle: "Personal Month Calculator: Timing Your Month With Numerology",
    guide: [
      "Your Personal Month number shows the focus of the current calendar month within your longer Personal Year theme — useful when timing a launch, a trip or a quiet reset. First find your Personal Year: add your birth month, your birth day (reduced to one digit) and the current calendar year (reduced to one digit), then reduce the total. Then add the Personal Year number to the calendar month number and reduce again. That final digit is this month's energy.",
      "Here is a worked example, step by step, for someone born on 14 June, looking at October 2026. Birth month is 6. Birth day 14 reduces to 1 plus 4, which is 5. The year 2026 reduces to 2 plus 0 plus 2 plus 6, which is 10, then 1. Add them: 6 plus 5 plus 1 equals 12, which reduces to 3, so the Personal Year is 3. October is month 10, which reduces to 1. Personal Month is 3 plus 1, which equals 4 — a building, organising month inside a creative year.",
      "The nine months form a repeating mini-cycle. 1 is beginnings, initiative and planting seeds; 2 is patience, partnership and quiet diplomacy; 3 is expression, social life and creative output; 4 is work, order, budgeting and solid foundations; 5 is change, movement, travel and welcome disruption. Read your number as a planning lens rather than a prediction: a 4 month supports systems and steady effort far better than impulsive leaps, while a 5 month rewards flexibility when plans shift unexpectedly around you.",
      "The remaining numbers complete the cycle: 6 is home, family, responsibility and care; 7 is rest, study, reflection and research before deciding; 8 is business, money, authority and visible results; 9 is completion, clearing, forgiveness and letting go before the next 1 month begins. One timing note: the common system used here runs on calendar months, changing on the first. Some schools instead run personal months from birthday to birthday. Both are traditional; the calendar system is simpler for planning, so most calculators follow it."
    ],
    steps: [
      "Enter your date of birth in the calculator on this page.",
      "Keep in mind the calendar month you want to explore — the current one, or a future month you are planning for.",
      "Note the Personal Month number shown, and the Personal Year behind it, since the month refines the year's theme.",
      "Check the hand method in this guide — birth month plus reduced birth day plus reduced year, then add the calendar month — to work out any month yourself."
    ],
    resultMeaning: [
      "Use your result as a timing aid, not a rule. Starting in a 1 month, organising in a 4 month or pushing a business goal in an 8 month helps you sequence tasks instead of forcing everything at once. The nine months form a rhythm: initiate, cooperate, create, build, change, nurture, reflect, achieve, release.",
      "If your result clashes with your plans, do not postpone important decisions on numerology alone. A slower month can still host a big event; pacing, preparation and support simply matter more than usual. Use the number to choose how you approach the month — boldly, carefully, socially or quietly — rather than whether you live it."
    ],
    faqs: [
      {
        question: "How is the Personal Month number calculated?",
        answer: "First calculate your Personal Year by adding your birth month, your birth day reduced to one digit, and the current calendar year reduced to one digit, then reducing the total. Then add that Personal Year number to the calendar month number and reduce once more if needed. The result, from 1 to 9, is your Personal Month."
      },
      {
        question: "What is the difference between Personal Year and Personal Month?",
        answer: "Your Personal Year sets the broad theme for twelve months — the background direction of your year. Your Personal Month narrows that theme into a roughly thirty-day focus, showing what kind of activity the current month supports best. Think of the year as the season and the month as this week's weather: both matter, at different scales."
      },
      {
        question: "Which Personal Month is best for business or a launch?",
        answer: "Traditionally, a 1 month favours starting and announcing, an 8 month favours business, visibility and financial decisions, and a 4 month favours the groundwork that makes a launch succeed. A 5 month can suit promotion and new audiences. No month guarantees an outcome, so use these themes to sequence effort rather than judge a plan."
      },
      {
        question: "When does my Personal Month change?",
        answer: "In the common calendar system, your Personal Month changes on the first day of each calendar month, because the calculation uses the calendar month number. Some schools instead count from your birthday each month, shifting the changeover date. Pick one system and use it consistently, so your observations stay comparable over time."
      },
      {
        question: "Can I calculate Personal Months for future months in advance?",
        answer: "Yes, and planners often do exactly that. Once you know your Personal Year number, simply add each future calendar month number to it and reduce. That gives you the sequence of monthly themes for the rest of your Personal Year, helping you schedule demanding, social, restful or financially focused periods with more intention."
      }
    ]
  },
  "challenge-numbers": {
    guideTitle: "Challenge Numbers: The Growth Obstacles Written Into Your Birth Date",
    guide: [
      "Not every useful number flatters you. Challenge numbers are numerology's honest mirror: they point to a specific blind spot or recurring friction — impatience, self-doubt, oversensitivity, stubborn control — that repeats until you work with it consciously. They are not punishments or fixed flaws. In the classical system they describe where life keeps setting you the same lesson, and the gift hidden inside it: each challenge, once understood, tends to become a deliberate strength rather than an automatic reaction. That growth angle is the whole point of calculating them.",
      "The method uses only your birth date, with each part reduced to a single digit first. The First Challenge is the absolute difference between birth month and birth day. The Second Challenge is the absolute difference between birth day and birth year. The Third, or Main, Challenge is the absolute difference between the First and Second Challenges. The Fourth, or Late, Challenge is the absolute difference between birth month and birth year. Absolute difference means subtracting the smaller from the larger, so results are never negative, and run from 0 to 8.",
      "A worked example makes it concrete. Take 14 June 1990. Reduce each part: month is 6, day 14 becomes 1 plus 4, which is 5, and year 1990 becomes 1 plus 9 plus 9 plus 0, which is 19, then 10, then 1. First Challenge: 6 minus 5 equals 1. Second Challenge: 5 minus 1 equals 4. Third or Main Challenge: 1 minus 4, as an absolute difference, equals 3. Fourth Challenge: 6 minus 1 equals 5. This person carries challenges 1, 4, 3 and 5 — independence, order, expression and change.",
      "Read the numbers briefly like this: 0 is the old-soul, all-or-none challenge, involving many lessons at once; 1 is standing up for yourself without steamrolling others; 2 is oversensitivity, learning calm confidence; 3 is blocked expression and self-criticism, finding your voice; 4 is order versus rebellion, learning discipline without rigidity; 5 is fear of change or restless excess, learning grounded freedom; 6 is perfectionism about duty, home and ideals; 7 is distrust and buried fear, learning trust; 8 is money and power struggles, learning balanced material values."
    ],
    steps: [
      "Enter your full date of birth — day, month and year — in the finder on this page.",
      "Look at the challenge numbers shown, and identify your Main Challenge, the lifelong theme.",
      "Verify the arithmetic with the method in this guide: reduce month, day and year first, then subtract as described.",
      "Read each description alongside your own history, and note one small action step for when that pattern next appears."
    ],
    resultMeaning: [
      "Traditionally, the challenges arrive on a rough timetable. The First is strongest in youth, up to about 25 to 30. The Second dominates the middle years, roughly 25 or 30 to 55 or 60. The Third, or Main, Challenge is lifelong. The Fourth grows relevant in later life. These bands are the traditional view, not strict boundaries.",
      "Working with a challenge is practical, not mystical. Name the pattern, pause before the automatic reaction, and choose the steadier response — the honest sentence instead of silence, the finished task instead of the perfect one. Treat the number as training, not a verdict: it locates where modest, repeated effort builds real emotional resilience."
    ],
    faqs: [
      {
        question: "How are challenge numbers calculated from my birth date?",
        answer: "Reduce your birth month, birth day and birth year each to a single digit. The First Challenge is the absolute difference between month and day, the Second between day and year, the Third or Main Challenge is the absolute difference between the First and Second, and the Fourth is the absolute difference between month and year."
      },
      {
        question: "What does a Challenge number of 0 mean?",
        answer: "Zero is sometimes called the old-soul or all-or-none challenge. Instead of one narrow lesson, several challenge themes can appear together, and the person may swing between taking on everything and avoiding it all. In the classical reading, balance, conscious choice and self-awareness resolve what intensity alone cannot."
      },
      {
        question: "Which challenge number is the most important?",
        answer: "The Third Challenge, usually called the Main Challenge, matters most because it is considered lifelong. It comes from the difference between your First and Second Challenges — the tension between your early-life and mid-life lessons. The other challenges dominate particular periods, but the Main Challenge is the background theme practitioners watch across your whole timeline."
      },
      {
        question: "When is each challenge number active in my life?",
        answer: "In the traditional timetable, the First Challenge is strongest from youth to roughly age 25 to 30, the Second from about 25 or 30 to 55 or 60, the Main Challenge operates throughout life, and the Fourth becomes prominent in later years. Treat these as approximate phases; stressful periods can reactivate any challenge at any age."
      },
      {
        question: "Can I overcome my challenge number?",
        answer: "Practitioners would say the challenge never fully disappears, but your relationship to it changes completely. Awareness turns an automatic weakness into a conscious skill: the 3 challenge becomes honest expression, the 4 becomes reliable structure, the 8 becomes calm stewardship of money and power. Progress usually looks like better habits and quicker repair after setbacks."
      }
    ]
  },
  "venus-mars-synastry": {
    guideTitle: "Venus and Mars Synastry: The Astrology of Attraction and Chemistry",
    guide: [
      "Chemistry has a signature in astrology, and it is written mainly by Venus and Mars. Venus shows how a person loves: what they find beautiful, how they show affection and what makes them feel wanted. Mars shows how a person desires: how they pursue, what excites them and how directly they act on attraction. When one person's Venus connects strongly with the other person's Mars, affection and desire recognise each other. That recognition is what people call magnetic — flirting, touch and attention landing exactly where they were aimed, without either person trying hard.",
      "A full comparison looks at four cross-combinations, not one. Her Venus with his Mars shows how his pursuit meets her sense of being desired. His Venus with her Mars shows the reverse — how her desire and initiative meet what he finds attractive. Venus with Venus compares taste and affection style, while Mars with Mars compares drive, pace and how each handles frustration. Traditional astrology used gendered language for these pairs, but the method works for any couple: read each person's Venus against the other person's Mars, in both directions, and weigh all four together.",
      "The aspects describe how the chemistry behaves. A conjunction blends Venus and Mars closely — strong, obvious attraction, hard to ignore. A trine flows easily, giving natural warmth and timing. A sextile is lighter and playful, often sparked by conversation. A square creates friction: intense desire mixed with mismatched pacing, experienced as sparks that need managing. An opposition is polarising — a powerful pull toward someone unlike you, with a risk of swinging between closeness and distance. Element harmony supports all of this: fire and air feed excitement, earth and water deepen sensual comfort.",
      "Here is the honest limit: Venus and Mars describe chemistry, not compatibility for a shared life. Attraction answers whether you want each other; it does not answer whether you can live together or weather difficulty. For staying power, astrologers look to the Moon for emotional safety and to Saturn for commitment and endurance. Read a strong result here as the spark — real and enjoyable, but only the beginning of the story."
    ],
    steps: [
      "Enter your birth date in the calculator, along with your partner's or the other person's birth date.",
      "Review the attraction summary shown, noting any mention of harmony, intensity or friction.",
      "Consider both directions — your Venus with their Mars, and their Venus with your Mars — not just one side.",
      "Use this guide to explore the method yourself: compare Venus and Mars signs by element, and weigh chemistry alongside emotional fit."
    ],
    resultMeaning: [
      "A harmonious result — trines, sextiles, compatible elements — feels like ease in attraction: compliments land, timing feels natural, affection is relaxed. A charged result, with conjunctions, squares or oppositions prominent, feels stronger but less predictable: more urgency, more impatience to manage, a pull that persists when things are complicated. Neither is better in any lasting sense.",
      "Place any result in context. Venus-Mars contacts explain the spark, but long-term astrologers read them beside Moon contacts for emotional fit and Saturn contacts for durability. If the chemistry is high and the relationship is kind and reliable, enjoy the confirmation. If the chemistry is high but the relationship is not working, believe the relationship."
    ],
    faqs: [
      {
        question: "What are the four Venus and Mars cross-combinations in synastry?",
        answer: "Each person's Venus is compared with the other person's Mars, in both directions, giving two Venus-Mars pairs. Then Venus is compared with Venus, showing how affection styles and tastes align, and Mars with Mars, showing how drives, pace and tempers interact. Reading all four gives a fuller picture than any single contact can."
      },
      {
        question: "Which Venus-Mars aspects create the strongest attraction?",
        answer: "The conjunction is usually considered the most potent, blending affection and desire into one obvious pull. Trines and sextiles create attraction that feels easy, warm and well-timed. Squares and oppositions often produce intense chemistry too, but add friction around pacing, style or jealousy, so the attraction asks for more awareness to enjoy comfortably."
      },
      {
        question: "Does strong Venus-Mars chemistry mean a relationship will last?",
        answer: "No, and honest astrologers are clear about this. Venus and Mars govern attraction and desire, not commitment. Lasting partnerships in synastry are associated more with Moon contacts, showing emotional safety and everyday fit, and Saturn contacts, showing endurance and responsibility. Chemistry cannot substitute for trust, kindness and shared intention."
      },
      {
        question: "How do elements affect Venus and Mars compatibility?",
        answer: "Elements describe the style of affection and desire. Fire and air combinations tend to be exciting and fast-moving, while earth and water combinations are slower, more sensual and comfort-seeking. Venus in water with Mars in earth, for instance, pairs emotional tenderness with steady physical devotion. Cross-element pairs also work; they blend different languages of attraction."
      },
      {
        question: "What if our Venus-Mars result shows friction or a low score?",
        answer: "Friction contacts such as squares often describe desire that is real but differently timed or expressed — one person pursues directly, the other needs romance and reassurance first. That is information, not a judgement. Many couples with challenging Venus-Mars aspects report strong attraction precisely because of the tension, provided it is handled with respect and honest conversation."
      }
    ]
  },
"jupiter-transit": {
    guideTitle: "Jupiter Transit Luck Finder: Your Guru Gochara Guide",
    guide: [
      "Your Jupiter transit is the sidereal sign Jupiter, called Guru in Vedic astrology, is passing through right now, judged from your Moon sign to show where growth and support are traditionally easiest this year. In gochara, the Vedic transit system, Jupiter is not read from your rising or Sun sign but from Chandra Lagna, the Moon sign. Count the signs from your Moon to Jupiter's current sign, and that number, from first to twelfth, sets the tone and life areas of the reading.",
      "Tradition is specific about which positions help. Jupiter transiting the 2nd, 5th, 7th, 9th or 11th sign from the Moon is considered favourable, linked to wealth and family support, children, study and creativity, marriage and partnership, fortune and dharma, and gains through networks. The 6th, 8th and 12th positions are considered effortful, pointing to debts or conflict, sudden change, and rising expenses. The 1st, 3rd, 4th and 10th are mixed, neither classic luck slots nor classic obstacles, and depend heavily on your own effort and choices.",
      "Jupiter moves slowly, spending roughly one year in each sidereal sign and about twelve years on a full circuit of the zodiac. Recent sidereal ingresses are approximate: Aries in 2023, Taurus in 2024, Gemini in 2025 and Cancer in 2026, with Leo following late in 2026. Jupiter gave a brief preview of Cancer from October to December 2025, retrograded back into Gemini, then re-entered Cancer in mid 2026 before moving into Leo around the end of October 2026, its position as of November 2026. Treat boundary periods as approximate and cross-check them with a full chart."
    ],
    steps: [
      "Enter your birth details so the tool can identify your Vedic Moon sign, or select your Moon sign directly if you already know it.",
      "Check the current sidereal sign of Jupiter shown for today, and note that everyone shares this same Jupiter sign at any given time.",
      "Count forward from your Moon sign, with the Moon sign itself as the first, until you reach Jupiter's sign to find your house position.",
      "Read the interpretation for that position, note which life areas it highlights, and use the timing notes to plan effort for the months ahead."
    ],
    resultMeaning: [
      "Take a worked example with the Moon in Taurus. Jupiter in Leo is the fourth sign from Taurus, counting Taurus as first, Gemini second, Cancer third and Leo fourth. A fourth place transit is mixed to supportive: the traditional focus is home, mother, property and inner peace. It is not a classic wealth slot, so expecting a windfall would misread it, but steady work on your living situation and family foundations is well supported.",
      "Place that same Taurus Moon reader under Jupiter in Pisces and the picture changes, because Pisces is the eleventh sign from Taurus. The eleventh is the classic gains position, traditionally read as promotions, a stronger network and income growth through contacts. The lesson is that Jupiter's sign alone means little. The same transit gives one reader gains and asks another to build at home, purely because their Moon signs differ, so read the position first."
    ],
    faqs: [
      {
        question: "How long does Jupiter stay in each sign?",
        answer: "About one year in each sidereal sign, and roughly twelve years to travel the whole zodiac. That slow pace is why astrologers treat it as a yearly background theme for study, career, family or finances, rather than a short passing influence."
      },
      {
        question: "What is the difference between tropical and sidereal Jupiter transits?",
        answer: "Western astrology mostly uses the tropical zodiac, tied to the seasons, while Vedic astrology uses the sidereal zodiac, tied to the fixed stars. The two have drifted about twenty four degrees apart, so Jupiter can sit in different signs in each system. This tool follows the sidereal system, judged from your Moon sign."
      },
      {
        question: "Is a difficult Jupiter transit really bad?",
        answer: "No. The sixth, eighth and twelfth positions are better described as effort areas than as bad luck. They highlight debts to clear, changes to manage or expenses to watch, and many people use those years productively by simplifying and saving. Jupiter remains a benefic in the tradition; an effortful position redirects its growth rather than removing it."
      },
      {
        question: "When does Jupiter bless marriage?",
        answer: "Traditionally, Jupiter transiting the seventh sign from your Moon is the strongest marriage signal, supporting partnership and commitment. The fifth and ninth positions are also supportive, the fifth through romance and the ninth through fortune and family approval. It is an interpretive tradition about favourable timing, not a guarantee of a wedding."
      },
      {
        question: "Does everyone share the same Jupiter transit?",
        answer: "Yes and no. Jupiter occupies one sidereal sign for everyone on Earth at the same time, so the raw transit is shared. What differs is the position counted from your own Moon sign, which depends on when you were born. That is why two people can experience the same Jupiter year in completely different life areas."
      }
    ]
  },

  "communication-compatibility": {
    guideTitle: "Zodiac Communication Style: How You and Your Partner Talk",
    guide: [
      "Your communication compatibility result describes how you and your partner naturally talk, listen, argue and make up, based on the elements of your Mercury signs, or your Sun signs as a simpler fallback. Mercury rules language, logic and pace of thought, so comparing two placements shows whether conversation flows easily, needs translation, or sparks because you process words differently. The result is a style map for dialogue, not a verdict on the relationship.",
      "The four elements set the basic styles. Fire signs, Aries, Leo and Sagittarius, speak directly, fast and bluntly, thinking out loud and moving on quickly. Earth signs, Taurus, Virgo and Capricorn, are practical and measured, preferring facts and time to consider before answering. Air signs, Gemini, Libra and Aquarius, lead with ideas and words, enjoying debate, humour and talking a problem through. Water signs, Cancer, Scorpio and Pisces, communicate through tone and feeling, reading between the lines and noticing what was not said.",
      "Pairings of elements explain most everyday friction and ease. Air with Fire is fast and inspiring, full of plans and laughter, though it can skip over feelings. Earth with Water is calm and loyal, building trust slowly through consistency. Air with Earth needs translation work, because one partner wants to explore options while the other wants a decision and evidence. Fire with Water also needs care, since directness can feel harsh to a sensitive listener, while indirect hints frustrate a straightforward speaker."
    ],
    steps: [
      "Enter both partners' signs, using Mercury signs if you know them, or Sun signs if you do not, for each person in the pair.",
      "Note the element of each sign, Fire, Earth, Air or Water, since the element pairing drives most of the interpretation that follows.",
      "Read the shared strengths first, then the friction points, and notice which examples match your real arguments about tone, timing or detail.",
      "Choose one practical suggestion from the result, such as a check in habit or a pause rule, and agree to test it for a week."
    ],
    resultMeaning: [
      "Consider a Gemini and Aquarius pair, both Air signs. Conversation is rapid and idea rich, full of jokes, half finished sentences the other completes, and late night debates. The shared risk is subtle: everything gets analysed and nothing gets felt out loud, so either partner can feel lonely inside a very talkative relationship. The fix is not more talking but different talking, with scheduled check ins about feelings rather than plans or news.",
      "Contrast that with a Taurus and Scorpio pair, Earth with Water. This couple talks slowly and privately, remembers everything that was said, and argues rarely but deeply when trust feels threatened. Where the Air pair must add feeling to words, this pair must add words to feeling, saying needs plainly instead of expecting them to be sensed. The result tells you which translation your pairing has to practise, not which partner is communicating correctly."
    ],
    faqs: [
      {
        question: "Is this about Mercury sign or Sun sign?",
        answer: "Mercury ideally, because Mercury governs speech, reasoning and listening style, and it can sit in a different sign from your Sun. If you do not know your Mercury sign, the Sun sign works as a reasonable fallback for a general style sketch, but a full birth chart will give you the more precise Mercury based reading."
      },
      {
        question: "Why do we argue about tone rather than content?",
        answer: "Because elements process delivery differently. A Fire or Air partner may hear only the words and miss that the tone felt cold, while a Water partner hears the tone first and may never reach the content. Earth partners, meanwhile, can fixate on an inaccurate detail. Most tone arguments are really style collisions, and naming your elements makes that easier to see mid discussion."
      },
      {
        question: "Does Mercury retrograde affect couples?",
        answer: "In popular astrology, Mercury retrograde periods are linked with crossed wires, delayed replies and old conversations resurfacing. There is no evidence the planet changes how anyone communicates, but the periods can serve as a useful reminder to confirm plans in writing, reread messages before sending, and revisit unresolved talks calmly rather than assuming the worst of a partner."
      },
      {
        question: "Can opposite communication styles work long term?",
        answer: "Yes, and many lasting couples have contrasting styles. The research backed ingredients are responsiveness, repair after conflict and willingness to adapt, not identical styles. An Air and Earth pair, for example, can thrive once the Air partner offers conclusions and the Earth partner tolerates brainstorming. Style differences become a problem mainly when each partner insists their way is the only respectful one."
      },
      {
        question: "How do we use this result in a real disagreement?",
        answer: "Pause and translate. Restate your partner's point in your own words before answering it, match their pace rather than your own, and separate the content question from the tone question explicitly. If one of you needs time to think, agree a time to return to the topic, so silence is understood as processing rather than rejection."
      }
    ]
  },

  "intimacy-compatibility": {
    guideTitle: "Zodiac Bedroom Chemistry: Venus, Mars and Your Style of Closeness",
    guide: [
      "Your bedroom chemistry result describes how you and your partner express affection, desire and physical closeness, by comparing Venus, which shows pleasure and sensory style, with Mars, which shows drive and pursuit. Venus reveals what feels good and romantic, while Mars reveals how desire is sparked and acted on. Together, the placements sketch pacing, atmosphere and the attention each partner finds most connecting, as an interpretive guide rather than a measure of anyone's performance.",
      "Element gives the quickest feel for style. A Fire Mars is spontaneous and passionate, sparked by novelty and direct appreciation. An Earth Venus is sensory and quality focused, valuing comfort, touch, scent and unhurried time over grand gestures. Air placements bring talk and novelty, flirting through conversation, humour and variety. Water placements seek emotional merging, needing trust and tenderness before physical closeness feels complete. Most people blend two styles, one from Venus and one from Mars, which is why chemistry is individual.",
      "Chemistry here is about fit of pacing and signals, not matching elements perfectly. Two partners can share an element and want different tempos, or sit in clashing elements and adore the contrast. The comparison explains recurring mismatches kindly: one partner recharging through quiet closeness while the other expresses love through excitement and initiative, for instance. Once both styles are named as legitimate, it becomes easier to ask for what you enjoy without taking different preferences personally."
    ],
    steps: [
      "Enter each partner's Venus sign and Mars sign if you know them, using the birth dates requested so the tool can work from the placements you provide.",
      "Read the Venus description first for what each of you finds pleasurable and romantic, then the Mars description for drive and pursuit style.",
      "Compare pacing, atmosphere and affection signals between the two profiles, and note one similarity and one difference you recognise from real life.",
      "Use the suggestions to start a gentle conversation about timing, touch and closeness, focusing on preferences you can share rather than scores."
    ],
    resultMeaning: [
      "Picture Venus in Taurus paired with Mars in Scorpio. Venus in Taurus is slow, sensual and touch led, needing comfort, trust and unhurried time. Mars in Scorpio brings an intense, all or nothing drive that values depth, privacy and total focus. Taurus and Scorpio are opposite signs, making this the classic magnetic pairing: deep physical loyalty when trust is high, but possessiveness and stubborn stand offs when it is not. Both signs are fixed, so neither backs down first.",
      "The practical reading is reassuring. The Taurus Venus partner should expect intensity to arrive as devotion, while the Scorpio Mars partner should understand that slowness is not rejection but how trust is built. A regular rhythm of affection, honest talk about jealousy, and protected time together can turn this opposition into staying power. Use your own result the same way: as a description of how two styles feed each other, not a prediction."
    ],
    faqs: [
      {
        question: "What are the different roles of Venus and Mars?",
        answer: "Venus describes pleasure: what you enjoy, how you like to be courted, and the sensory details that make closeness feel good. Mars describes drive: how desire starts, how you pursue someone and how you express energy and initiative. Attraction readings usually weight Venus more, while chemistry and pacing readings need both planets together to make sense."
      },
      {
        question: "Do opposite signs attract or clash?",
        answer: "Traditionally, both. Opposite signs share an axis of life and often feel a magnetic pull, as with Taurus and Scorpio or Aries and Libra, because each offers what the other underplays. The same polarity can clash over control, money or pace. Astrologers treat opposition as high chemistry with high negotiation, not as an automatic match or an automatic problem."
      },
      {
        question: "What if our elements do not match?",
        answer: "Mismatched elements are extremely common and simply point to where translation helps. A Fire partner may need to slow down and add tenderness for a Water partner, while an Air partner can learn that an Earth partner shows desire through reliability and touch rather than words. The reading highlights adjustments; it does not grade the pairing as compatible or incompatible overall."
      },
      {
        question: "Are differences in desire normal?",
        answer: "Yes. Desire fluctuates with health, stress, sleep, medication, age and the stage of a relationship, and two partners rarely want closeness at identical frequency or in identical ways. A mismatch in the reading can give you neutral language for that conversation, but persistent distress about intimacy is a topic for a doctor or qualified therapist, not for an astrology tool."
      },
      {
        question: "How can we use this without stereotyping each other?",
        answer: "Treat every statement as a question, not a label. If the result says your partner needs more emotional closeness or more novelty, ask whether that rings true and listen to the answer. People always outrank their placements. The value of the reading is starting kinder, more specific conversations about affection, not deciding in advance what someone must be like in private."
      }
    ]
  },

  "juno": {
    guideTitle: "Juno Soulmate Commitment Calculator: Your Style of Lasting Partnership",
    guide: [
      "Your Juno sign is the sign the asteroid Juno occupied when you were born, and it describes your style of commitment: what you need from a lasting partnership, what loyalty means to you, and the terms on which you can happily stay. Juno is named for the Roman goddess of marriage, wife of Jupiter, and represents the marriage bond itself rather than attraction. This tool works from the birth date you enter, and reads the placement as a reflection on fairness, fidelity and shared life.",
      "Juno's orbit is about 4.36 years, so it changes sign every few months, with retrograde stretches that can carry it back and forth across a sign boundary. That is why an exact Juno sign needs your birth date rather than just your birth year, and why births close to a changeover date should be cross checked with a full chart. The payoff is a placement personal to your slice of a generation, not shared by everyone born in your year.",
      "The element of Juno gives a first sketch of commitment needs. A Fire Juno needs admiration and adventure inside commitment, a partner who stays proud and playful. An Earth Juno needs reliability, shared resources and kept promises, and feels loved through consistency. An Air Juno needs conversation, friendship and space, thriving with a partner who remains an interesting equal. A Water Juno needs emotional loyalty and privacy, bonding deeply and protecting the inner life of the relationship."
    ],
    steps: [
      "Enter your full birth date carefully, since Juno changes sign every few months and a small date error can shift the result near boundaries.",
      "Read your Juno sign and its element, and note the commitment needs, loyalty expectations and equality themes the interpretation highlights for you.",
      "If you are comparing with a partner, repeat the process for their birth date and compare needs side by side rather than looking for a single score.",
      "Reflect on which described non negotiables match your real relationship history, and use them as prompts for honest conversation about expectations."
    ],
    resultMeaning: [
      "As an interpretation example, consider Juno in Capricorn. Here commitment is expressed through reliability: showing up, building shared goals, and respecting each other's ambitions. The non negotiable is a partner whose word can be trusted, because a kept promise is the deepest form of romance for this placement, and flakiness reads as a lack of love. Partnership tends to be chosen carefully rather than rushed, and strengthens as the couple builds a shared life together.",
      "The same example shows the shadow side to watch. Juno in Capricorn can turn marriage into a business contract, all duties and standards, with tenderness postponed until the work is done. The advice is to protect softness deliberately: time off together, affection that is not earned, and celebrating progress. Read your own result in this balanced way, taking the strength seriously and treating the shadow as a habit to manage, not a fate."
    ],
    faqs: [
      {
        question: "What is the difference between Juno and Venus?",
        answer: "Venus describes attraction: who and what you are drawn to, your taste and your style of romance. Juno describes commitment: the terms you need once attraction becomes a lasting partnership, including loyalty, equality and how conflict should be handled. The two can point in different directions, which is why someone can be attracted to exciting partners yet need calm reliability to actually stay."
      },
      {
        question: "Does Juno show when I will marry?",
        answer: "No. Juno describes the style and conditions of commitment that suit you, not a date or a prediction. Astrology tools like this one offer interpretation for reflection, and no placement can guarantee if or when a marriage happens. Timing questions depend on real life choices and circumstances far more than on an asteroid sign."
      },
      {
        question: "Can my Juno sign differ from what I consciously want?",
        answer: "Yes, and astrologers consider that one of Juno's most useful insights. The placement is often read as describing needs you reveal in long relationships rather than in dating, such as a hidden need for space, admiration or financial fairness. If the description surprises you, compare it with your longest past relationship before dismissing it, and treat it as a prompt for reflection."
      },
      {
        question: "What does Juno in the houses mean?",
        answer: "While this tool focuses on Juno's sign, a full birth chart also places Juno in one of twelve houses, which shows the life area where commitment themes play out most strongly. Juno in the tenth house, for example, links partnership with career and public life. House interpretations add context to the sign but need an accurate birth time and a full chart calculation."
      },
      {
        question: "Does a difficult Juno placement doom my marriage?",
        answer: "No placement dooms a relationship. Challenging Juno aspects or signs are traditionally read as areas where expectations need clearer negotiation, such as power, money or loyalty, not as verdicts. Many people with supposedly difficult Juno placements have long, happy marriages, usually because they learned to state their commitment needs openly instead of assuming a partner should guess them."
      }
    ]
  },
"nordic-runes": {
    guideTitle: "Runes Reading Guide",
    guide: [
      "A runes reading is a traditional casting or drawing of symbols from the Elder Futhark, the ancient Germanic alphabet of 24 runes, used here as a reflective tool for looking at a situation from a fresh angle. Each rune is both a letter and a symbol with its own meaning, so a single drawn rune can suggest a theme for the day, while a small spread can show how a situation has developed, where it stands now, and what may help next. It is best approached as a prompt for reflection, not as a fixed prediction.",
      "Some meanings are widely recorded in rune tradition. Fehu stands for wealth, earned prosperity and movable resources, while Uruz is raw strength, health and untamed energy. Thurisaz, the thorn, suggests defence and a reactive force, with advice to pause before acting. Ansuz is Odin's rune of messages, wisdom and communication, Raidho is the wheel of journey, movement and the rhythm of travel, and Kenaz is the torch of insight, clarity and learning. Gebo means gift, partnership and fair exchange, and because it is symmetrical it has no reversed meaning. Hagalaz is hail, disruption and forces outside your control.",
      "Readings are usually kept simple. A single rune draw suits a daily focus or one clear question, and a three-rune spread is read left to right as past, present and future, or as situation, challenge and outcome. Some readers also note merkstave, where a rune drawn reversed or upside-down can shade the meaning toward its blocked or internal side. That shading is not a separate doom-laden message, just a softer or more inward reading. Some runes look identical reversed and are read upright, so orientation only matters where the shape actually changes."
    ],
    steps: [
      "Think of one clear question or theme, then draw one rune for a daily reading or three runes for a full spread.",
      "Lay the runes in order and note each name, meaning and position before trying to combine them into a story.",
      "Check the orientation of each rune, remembering that symmetrical runes are read the same either way.",
      "Read the positions together, then write down one practical reflection or next step the reading suggests to you."
    ],
    resultMeaning: [
      "Consider this complete three-rune example. In the past position, Hagalaz shows that a disruption or loss set the situation in motion, something broke so it could be rebuilt. In the present position, Isa, the ice rune, describes stillness, delay and a frozen situation. Its advice is patience, do not force movement while the ice holds, because pushing now would likely meet resistance rather than progress. Read together, the first two runes say the break has already happened, and the present pause is part of the process, not a failure.",
      "In the future position, Sowilo, the sun rune, points to clarity, energy returning and success after the thaw. That does not promise a guaranteed outcome on a set date, but it does suggest the story of this spread moves from disruption, through patience, toward renewed direction. A useful way to use such a reading is to ask what you can prepare quietly during the Isa phase, so you are ready to act clearly when movement returns. The value lies in that reflection, not in treating the runes as proof of what must happen."
    ],
    faqs: [
      {
        question: "How many runes are there in the Elder Futhark?",
        answer: "There are 24 runes in the Elder Futhark, the oldest known runic alphabet. Each rune works as a letter in writing and also carries a symbolic name and meaning, such as Fehu for resources or Raidho for a journey. This reader uses that full traditional set of 24."
      },
      {
        question: "Should I choose a single rune or a three-rune reading?",
        answer: "Choose a single rune for a quick daily theme or one simple question, because it keeps the message focused. Choose three runes when you want development over time, since the positions show past, present and future, or situation, challenge and outcome. Neither is better, they simply suit different depths of question."
      },
      {
        question: "Are runes fortune-telling?",
        answer: "Runes come from a long divination and reflection tradition, but this reader does not claim they prove or guarantee the future. Treat a reading as a structured prompt that helps you notice patterns, feelings and options you may have overlooked. Your own judgement and choices remain what shape the outcome."
      },
      {
        question: "What if I draw the same rune repeatedly?",
        answer: "Drawing the same rune repeatedly often means its theme is worth a second look, especially if it relates to an unfinished situation in your life. Note when it appears and what question you asked. It may point to a lesson you keep circling, rather than being an error in the draw."
      },
      {
        question: "Do I need my own rune set to use this reader?",
        answer: "No, you do not need a physical set, because this reader draws from the full Elder Futhark for you. A physical set in wood, stone or clay can be enjoyable if you like a hands-on practice, but it is optional. What matters most is a clear question and time to reflect."
      }
    ]
  },

  "soul-contract": {
    guideTitle: "Soul Contract Reader",
    guide: [
      "A soul contract, in the spiritual belief framework this reader follows, is an agreement many people believe souls make before birth with other souls, so that each person helps teach the other an important life lesson. The contract is not presented here as established fact, but as a way believers make sense of meaningful relationships. A partner, parent, child, friend or mentor may be seen as a contract partner when the connection carries a strong lesson, such as patience, forgiveness, independence or unconditional love.",
      "Within this framework, several contract types are commonly described. The Teacher triggers growth through challenge, so the relationship may feel demanding while it develops strength or honesty. The Healer arrives during pain and helps restore trust, stability or self-worth. The Mirror shows you your own patterns, often by displaying the very habit or fear you need to recognise in yourself. The Companion offers steady, long-term support, while the Catalyst is short and intense, arriving briefly but changing your direction in a lasting way.",
      "This reader combines a contract theme with a simple birth-date reduction in the life path style, so the relationship lesson can be considered alongside your own expressive pattern. For example, a birth date of 14 June 1990 reduces as 1+4+0+6+1+9+9+0 = 30, and then 30 reduces to 3, the expressive and creative path. That number does not prove a contract exists. Used gently, it simply adds context, suggesting how your natural way of learning and communicating may meet the lesson a particular relationship keeps presenting."
    ],
    steps: [
      "Enter the birth details requested by the reader, then think of the specific relationship you want to reflect on.",
      "Read the contract type and core lesson first, before deciding whether the description fits your experience.",
      "Look at what each side is said to give and receive, since a contract is always read as two-way.",
      "Sit with the result as a reflection prompt, and note one lesson, boundary or conversation it brings to mind."
    ],
    resultMeaning: [
      "Here is an example reading for a parent and adult child whose contract theme reads as Independence. Rather than labelling one person as the problem, the reader is meant to be read together. The parent's lesson is releasing control, learning that support does not have to mean direction, and trusting the child to make and own decisions. The child's lesson is self-trust without rebellion, making independent choices calmly instead of defining every choice against the parent. Each side gives something the other needs, space from one side and honest, steady communication from the other.",
      "Believers often say a contract feels complete when its emotional charge fades, gratitude replaces resentment, and the lesson feels integrated into daily life. Completion does not have to mean the relationship ends, it can mean it changes form and becomes lighter, clearer or more equal. If a reading points to independence, for example, completion might look like easier conversations and fewer power struggles. Treat signs like these as personal reflections on growth, not as a verdict, and let your real experience of the relationship carry more weight than any label."
    ],
    faqs: [
      {
        question: "What is a soul contract?",
        answer: "In this spiritual framework, a soul contract is an agreement many people believe souls make before birth to meet in life and teach each other lessons. Lessons often involve patience, forgiveness, independence or unconditional love. It is a belief-based way of interpreting relationships, offered here for reflection rather than presented as established fact."
      },
      {
        question: "Can soul contracts be with family, not just partners?",
        answer: "Yes, in this tradition contracts are most often discussed for family, especially parents and children, as well as partners, close friends and mentors. Any relationship that repeatedly presents the same important lesson could be viewed this way. Romantic partners are only one example, and often not the deepest or longest contracts described."
      },
      {
        question: "Can a soul contract end or be fulfilled?",
        answer: "Believers say yes, a contract can feel fulfilled when the lesson has been learned and the emotional charge fades. Gratitude may replace resentment, and the relationship can either continue in a lighter form or naturally close. Fulfilment is about growth being integrated, not about a formal ending or a dramatic separation."
      },
      {
        question: "Is a soul contract the same as karma?",
        answer: "They are related ideas but not identical. Karma usually refers to cause and effect across actions and lifetimes, while a soul contract focuses on a specific agreed relationship and its lesson. A contract is more personal and mutual, describing what two souls are believed to teach each other."
      },
      {
        question: "What if the reading feels wrong?",
        answer: "Use it as a reflection prompt rather than a ruling. If the contract type or lesson does not match your experience, trust your experience first, and consider whether a different relationship fits the theme better. Sometimes a reading is useful simply because your reaction to it clarifies what you actually believe."
      }
    ]
  },

  "crystal-matcher": {
    guideTitle: "Crystal Energy Matcher",
    guide: [
      "The Crystal Energy Matcher suggests crystals traditionally associated with your zodiac sign and a personal goal, such as focus, calm, confidence or love. It works by combining the element of your sign with folklore associations built up over many years of crystal practice. The matches are offered as tradition and personal reflection, and as a mindfulness aid for setting intentions. They are not presented as scientific proof, and no crystal in this guide is claimed to diagnose, treat or cure any condition.",
      "Traditional associations include Amethyst with calm, sleep and a clear head, linked with Pisces and Aquarius, and Rose Quartz with love, self-worth and gentleness, linked with Taurus and Libra. Citrine is associated with abundance and confidence and is traditionally called the merchant's stone, linked with Leo, while Pyrite is linked with prosperity and protection at work. Clear Quartz is the all-purpose stone of clarity for any sign, Black Tourmaline is used for grounding, Fluorite for focus and study, Carnelian for courage and motivation for Aries and Leo, and Emerald for harmony and heart wisdom for Taurus.",
      "Element logic keeps the matching consistent. Fire signs are paired with energising stones such as carnelian, citrine and red jasper, while Earth signs receive grounding stones such as hematite, black tourmaline and moss agate. Air signs are matched with clarity stones such as fluorite, clear quartz and sodalite, and Water signs with soothing stones such as amethyst, moonstone and aquamarine. Care matters too, because selenite and some soft stones are water-sensitive and are better cleansed with moonlight or sound, and amethyst and rose quartz can fade in prolonged strong sunlight."
    ],
    steps: [
      "Enter your zodiac sign and choose the personal goal that matters most to you right now.",
      "Read your primary match first and note why it was chosen, through both your element and your goal.",
      "Choose one to three stones to start with, in a form you will actually use, such as a tumble stone or bracelet.",
      "Set a simple intention when you place or carry the stone, and cleanse it gently using a method safe for that stone."
    ],
    resultMeaning: [
      "Consider a Pisces reader whose goal is focus for study. Pisces is a Water sign, so the soothing stones would be the obvious element match, but the goal changes the recommendation. The primary match here is Fluorite, traditionally associated with focus, study and mental order, carried or worn with Clear Quartz, the all-purpose clarity stone, and placed on the study desk during work sessions. This shows how the matcher balances both inputs, sign and goal, rather than simply giving every Pisces the same single stone every time.",
      "The intention-setting part is best understood as a mindfulness ritual, not magic. Pausing to hold the Fluorite, state your intention to study for one focused hour, and place the stone where you can see it, creates a small repeatable cue for your attention. Many people find such rituals helpful because they mark a clear start to a task. If the stone helps you return to that intention when distracted, it has done its job as a focus aid and a personal reminder."
    ],
    faqs: [
      {
        question: "How does the crystal matching work?",
        answer: "The matcher combines your sign's element with your chosen goal. Fire signs tend toward energising stones, Earth toward grounding stones, Air toward clarity stones and Water toward soothing stones, then the goal refines the choice, so a study goal points to Fluorite. It follows traditional associations rather than a scientific formula."
      },
      {
        question: "Can I use a crystal that was not matched to me?",
        answer: "Yes, you can use any crystal you are drawn to, because the match is a starting suggestion, not a restriction. Personal response matters in this tradition, so if a stone outside your match appeals to you and suits your goal, it is fine to work with it. Many collections grow that way."
      },
      {
        question: "How should I cleanse and charge my crystals?",
        answer: "Safe general methods include resting stones in moonlight, placing them on a selenite plate, or using sound such as a singing bowl. Use water with caution, because selenite and some soft stones are water-sensitive and can be damaged. Also keep amethyst and rose quartz out of prolonged strong sunlight, as they can fade."
      },
      {
        question: "Do crystals heal illness?",
        answer: "No. Crystals are not a substitute for medical care, and this guide makes no claim that they heal illness or replace treatment. Some people enjoy them as a comfort, a focus for reflection or a mindfulness ritual alongside proper care. For any health concern, always follow the advice of a qualified medical professional."
      },
      {
        question: "How many crystals should I start with?",
        answer: "Start with one to three crystals, matched to one clear goal. A small set is easier to use consistently, cheaper to buy well, and simpler to care for than a large collection gathered at once. Live with those first, notice how you actually use them, and add more only when a new goal appears."
      }
    ]
  },

  "pinnacle-cycles": {
    guideTitle: "Pinnacle Cycles Guide",
    guide: [
      "Your Pinnacle Cycles are four long chapters of life in numerology, calculated from your birth date, each describing the main theme, lessons and opportunities of that period. The first Pinnacle covers your early decades, the second and third each run for nine years, and the fourth continues from later midlife onward. Unlike a personal year, which changes annually, a Pinnacle changes only a few times in a lifetime, so it describes the broad background theme you are working with, rather than the mood of a single month or year.",
      "The method is standard numerology and is worth following exactly. Reduce the month, day and year of birth separately, then combine them. The First Pinnacle is month plus day, the Second is day plus year, the Third is the First plus the Second, and the Fourth is month plus year. Reduce each final sum to a single digit, except 11 and 22, which are traditionally kept as master numbers. Your Life Path, found by reducing the whole birth date, is also needed, because it sets the timing of the first change.",
      "The timing rule is simple. The First Pinnacle runs from birth to age 36 minus your Life Path number. The Second Pinnacle runs for the next nine years, the Third for the nine years after that, and the Fourth runs from then onward. Traditional meanings are, 1 for independence and new starts, 2 for diplomacy and patience, 3 for expression, 4 for building and order, 5 for change and freedom, 6 for responsibility and family, 7 for analysis and faith, 8 for power and abundance, and 9 for compassion and completion."
    ],
    steps: [
      "Reduce your birth month, day and year separately to single digits, keeping the three numbers apart.",
      "Add them in the four Pinnacle combinations, month plus day, day plus year, First plus Second, and month plus year.",
      "Reduce each result to one digit, except 11 and 22, and calculate your Life Path from the full birth date.",
      "Apply the timing rule, 36 minus Life Path for the first change, then nine-year blocks, to place each Pinnacle by age."
    ],
    resultMeaning: [
      "Work through a birth date of 14 June 1990 exactly. June is month 6, the day 14 reduces to 1+4 = 5, and the year 1990 reduces as 1+9+9+0 = 19, then 10, then 1. The Life Path is 1+4+0+6+1+9+9+0 = 30, which reduces to 3. The First Pinnacle is 6 + 5 = 11, a master number read as 11, the intuitive and inspirational chapter, with the undertone of 2. The Second is 5 + 1 = 6, home, responsibility and family. The Third is 11 + 6 = 17, reducing to 8, achievement, money and authority.",
      "The Fourth Pinnacle is 6 + 1 = 7, study, reflection and mastery. With a Life Path of 3, the First Pinnacle runs from birth to age 33, because 36 minus 3 is 33. The Second then runs from 34 to 42, the Third from 43 to 51, and the Fourth from 52 onward. Read as a life story, this person spends their early decades in an intuitive 11 chapter, moves into family responsibility, then achievement, and finally a reflective mastery phase. Master number 22 is traditionally the master builder, turning large ideas into lasting practical results."
    ],
    faqs: [
      {
        question: "What is a Pinnacle Cycle?",
        answer: "A Pinnacle Cycle is one of four long numerology chapters calculated from your birth date, each describing the main theme and lessons of that period of life. The first lasts until your early or mid thirties, the next two last nine years each, and the fourth continues onward. They describe background themes, not daily events."
      },
      {
        question: "How is a Pinnacle different from Life Path and Personal Year?",
        answer: "Your Life Path is one fixed number describing your overall direction, and it never changes. A Personal Year changes every year and describes a short annual theme. Pinnacles sit between them in scale, changing only three times, so they show the long chapter within which your yearly cycles play out."
      },
      {
        question: "When does my Pinnacle change?",
        answer: "Your first Pinnacle changes at the age found by 36 minus your Life Path number, and the change is traditionally counted from the birthday at that boundary age. Later changes follow every nine years from that point. If your boundary is 33, your second Pinnacle begins around that birthday."
      },
      {
        question: "What if my Pinnacle is a master number?",
        answer: "If your calculation gives 11 or 22, it is traditionally kept rather than reduced to 2 or 4. An 11 Pinnacle emphasises intuition, inspiration and sensitivity, with the undertone of 2, while a 22 Pinnacle emphasises building something large and lasting, with the undertone of 4. Both are read as more intense versions."
      },
      {
        question: "Can two people share the same Pinnacles?",
        answer: "Yes, two people can share some or all Pinnacle numbers, especially if parts of their birth dates reduce to the same values. Their timing can still differ if their Life Path numbers differ, and their lives will express the same broad themes differently. Shared Pinnacles suggest similar chapter themes, not identical lives or experiences."
      }
    ]
  },
"amatyakaraka": {
    guideTitle: "Amatyakaraka Career Guide",
    guide: [
      "Your Amatyakaraka is the planet with the second-highest degree in your sidereal Vedic birth chart, and in Jaimini astrology it is read as your career and vocation significator. The word means the minister planet: if the Atmakaraka is the king, the soul significator, the Amatyakaraka is the trusted minister who advises the king and carries out the work in the world. Its sign, house and condition are therefore read less for inner purpose and more for the kind of work, working style and professional direction that tends to suit you best over a lifetime. Its strength, aspects and any planets joining it refine whether that direction appears early, late, through employment, or through independent professional work.",
      "The method is precise and degree-based. In the sidereal chart, look at how far each of the seven grahas has travelled within its sign, from 0 to 30 degrees: the Sun, Moon, Mars, Mercury, Jupiter, Venus and Saturn. The planet with the highest degree is the Atmakaraka. The planet with the second-highest degree is the Amatyakaraka. Rahu and Ketu are excluded in this seven-karaka scheme. For honesty, an eight-karaka variant also exists in the tradition, and it counts Rahu differently, which can change the ordering in some charts, so always check which scheme a reading is using.",
      "A worked example shows the ranking clearly. Take a chart with Sun 12 degrees Leo, Moon 8 degrees Cancer, Mars 21 degrees Aries, Mercury 26 degrees Leo, Jupiter 5 degrees Sagittarius, Venus 18 degrees Taurus and Saturn 15 degrees Capricorn. Rank the degrees from highest to lowest and Mercury at 26 degrees comes first, so Mercury is the Atmakaraka. Mars at 21 degrees comes second, so Mars is the Amatyakaraka. Nothing about the sign names decides this; only the degrees travelled within each sign decide the order, which is why two people with similar charts can have different career planets."
    ],
    steps: [
      "Build your sidereal Vedic birth chart from your date, time and place of birth.",
      "List the degree within its sign for the Sun, Moon, Mars, Mercury, Jupiter, Venus and Saturn.",
      "Rank those seven degrees from highest to lowest, including minutes where degrees are close.",
      "Take the second-highest planet as your Amatyakaraka, then note its sign and house."
    ],
    resultMeaning: [
      "Mars as the career planet in that example points to engineering, technology, defence and uniformed services, surgery, sport, real estate and entrepreneurship: work involving competition, tools, heat or decisive action. Because that Mars sits in Aries, its own sign, the reading strengthens considerably. It suggests leadership and self-employment rather than quiet back-office roles, with energy best used when there is a clear target, a deadline, or a problem that needs direct handling rather than endless discussion. It also favours roles where responsibility is visible and results are measured in outcomes rather than intentions or long committee processes.",
      "The other planets give different fields. The Sun points to government, authority, medicine and leadership. The Moon points to care, hospitality, food, public-facing work and trade in liquids. Mercury points to commerce, writing, marketing, media, accounting and software. Jupiter points to teaching, law, finance, counselling and publishing. Venus points to arts, design, beauty, luxury, entertainment and hospitality. Saturn points to labour-intensive industry, mining, agriculture, real estate, long-haul structured organisations and judiciary support roles. Read your planet as an aptitude theme, then check its sign and house for setting."
    ],
    faqs: [
      {
        question: "What is the difference between Amatyakaraka and Atmakaraka?",
        answer: "The Atmakaraka, the highest-degree planet, signifies the soul and its deepest lessons. The Amatyakaraka, the second-highest, signifies career and vocation, the minister who puts purpose into practical work. One describes why, the other describes how you earn and serve."
      },
      {
        question: "What if two planets share near-equal degrees?",
        answer: "The higher exact degree wins, including minutes and seconds. If Mars is at 21 degrees 40 minutes and Venus at 21 degrees 10 minutes in their signs, Mars ranks above Venus. Always rank the full precise degree, not the rounded whole number."
      },
      {
        question: "Does the Amatyakaraka guarantee a particular career?",
        answer: "No. It indicates aptitude and a fitting direction, not a guaranteed job. Education, effort, family circumstances and the timing of planetary periods, called dashas, all shape what actually happens. Use it as guidance for choices, not as a promise of outcome."
      },
      {
        question: "Is the 10th house still relevant for career?",
        answer: "Yes, very much. The Amatyakaraka should always be read together with the 10th house, its ruler and the planets placed there. The Amatyakaraka shows the working style and field; the 10th house shows public role, reputation and how a career unfolds visibly."
      },
      {
        question: "Which zodiac does the Amatyakaraka use?",
        answer: "This method belongs to Vedic and Jaimini astrology, so it uses the sidereal zodiac only. Degrees taken from a tropical Western chart will often differ by about a sign, and the ranking can change, so do not mix the two systems in one calculation. If you only have a Western chart, recalculate the chart sidereally first."
      }
    ]
  },

  "business-partner-compatibility": {
    guideTitle: "Business Partner Compatibility Guide",
    guide: [
      "Business partner compatibility is a synastry reading that compares two birth charts to judge how two people are likely to work together as co-founders or partners. It is not a love match applied to an office. It focuses on commitment, money habits, decision speed and shared ambition, asking a practical question: can these two people build something together, divide the work fairly, and stay aligned when pressure, cash flow problems or disagreement arrive, as they almost always do in a real venture.",
      "Classical synastry reads a business pair through a few clear themes. Saturn shows commitment, contracts and who reliably carries duty when the work becomes heavy. Mercury shows decision speed, communication and negotiation style, including how each person argues, emails and closes a deal. The 7th house themes describe partnership itself, fairness and one-to-one dealing, while 10th house themes describe the public venture, career direction and reputation. Alongside these, element balance matters: Fire brings sales energy and risk appetite, Earth brings operations and money discipline, Air brings ideas, marketing and networks, and Water brings client empathy and intuition about people. A reading also notes timing and workload, because a partnership that looks balanced on paper can still strain if one founder consistently carries nights, risk or unpaid development work.",
      "A worked example makes this concrete. Pair a Capricorn founder with a Virgo founder and both are Earth signs. Capricorn typically brings structure, finance and patience; Virgo brings systems, detail and quality control. Together they form an operations powerhouse: realistic plans, clean books and low drama. Their shared blind spot is double caution. Launches can be slow, offers can be under-priced, and both may say no to visibility. The useful advice is not to become different people, but to deliberately add Fire functions, such as a firm launch deadline, a sales target, or an advisor with strong Fire emphasis."
    ],
    steps: [
      "Enter both partners birth details and generate the compatibility reading for the pair.",
      "Read the Saturn and Mercury links first, for commitment, duty, communication and decision speed.",
      "Compare the element balance and note which elements are strong and which are missing.",
      "Use the findings to agree roles, money terms and a regular decision meeting in writing."
    ],
    resultMeaning: [
      "In practice, each partner usually contributes what the other lacks. One may naturally handle structure, delivery and follow-through, while the other handles clients, ideas or growth. A strong reading does not require identical charts; it requires complementary strengths, honest Saturn links that can survive a contract, and Mercury links clear enough that neither partner constantly feels unheard, rushed or slowed down. Where the charts clash, the reading is pointing at the exact conversation the pair should have before money is committed. Shared values around quality, debt and growth speed matter as much as talent, because those choices recur in almost every major business decision.",
      "Every reading recommends the same three practical agreements, whatever the score. First, put roles in writing, so responsibility for sales, operations, finance and hiring is never assumed. Second, agree money and exit terms early, while goodwill is high, including salaries, reinvestment and what happens if one partner wants to leave. Third, hold a fixed weekly decision meeting, with decisions recorded, so small disagreements do not accumulate silently. Astrology can highlight temperament; only clear agreements protect the business and the relationship behind it."
    ],
    faqs: [
      {
        question: "Which matters more, the Saturn links or the Mercury links?",
        answer: "Both matter, for different jobs. Saturn links show whether the partnership can endure, share duty and honour contracts over years. Mercury links show whether you can decide, negotiate and communicate day to day. A durable venture needs Saturn; a workable week needs Mercury."
      },
      {
        question: "Can opposite elements co-found a business together?",
        answer: "Yes, often very successfully. A Fire and Earth pairing, for example, can combine bold selling with careful delivery. The condition is defined roles: let each person lead where their element is strong, and agree in advance how final decisions are made when instincts differ."
      },
      {
        question: "What should friends going into business together watch for?",
        answer: "Friendship can hide unspoken assumptions about money, effort and credit. The reading often helps by naming different work styles plainly. Friends should be especially careful to write down roles, pay and exit terms, precisely because they trust each other and feel paperwork is unnecessary."
      },
      {
        question: "Does a low compatibility score mean we should not partner?",
        answer: "No. A low score is not a verdict against partnering. It flags where friction is likely, such as pace, risk or communication, so you can write agreements covering exactly those points. Many successful partnerships are difficult on paper and well managed in practice."
      },
      {
        question: "How is this different from love compatibility?",
        answer: "Love compatibility centres attraction, emotion and intimacy, usually through the Moon, Venus and Mars. Business compatibility centres Saturn, Mercury and the 7th and 10th house themes: duty, contracts, decisions and shared public goals. Two people can be a poor romantic match and excellent co-founders."
      }
    ]
  },

  "love-tarot": {
    guideTitle: "Love Tarot Reading Guide",
    guide: [
      "A love tarot reading is a three-card spread that uses tarot cards as a reflective tool for a relationship question, with one card for your feelings, one for the other person's feelings, and one for the block, lesson or direction between you. It does not predict fixed events or what another person will certainly do. Used honestly, it gives you a structured way to notice emotions, patterns and unspoken tensions, and to think more clearly about your next step in love.",
      "A full tarot deck has 78 cards. The 22 Major Arcana describe larger life themes, turning points and lessons that feel bigger than one day. The 56 Minor Arcana describe daily situations and are divided into four suits. Cups relate to feelings and love, Wands to passion and action, Pentacles to the practical side, security and effort, and Swords to thoughts, words and conflict. In this spread, position one shows your feelings and energy, position two shows your partner's, or the other person's, feelings and energy, and position three shows the block or lesson between you and where the connection is heading.",
      "Consider this example draw. In position one, The Moon describes your feelings: strong attraction mixed with uncertainty, where something is unsaid or unclear. Intuition is loud but facts are few, so you may be filling gaps with hope or worry. In position two, the Two of Cups describes their feelings: genuine mutual warmth and a wish for a balanced, respectful bond, the classic partnership card suggesting affection is reciprocated. In position three, The Star gives the direction: healing and hope after a difficult stretch, where honesty and patience can restore trust, and even distance can end in renewal if both people stay truthful."
    ],
    steps: [
      "Settle on one clear love question and hold the person and situation in mind.",
      "Draw three cards and place them in order: your feelings, their feelings, the direction.",
      "Read each card in its position first, using its suit or Major Arcana theme as a guide.",
      "Read the three together as one story, then note one honest, practical step the reading suggests."
    ],
    resultMeaning: [
      "Read together, that example tells one coherent story. The connection itself is real, shown by the Two of Cups, but it is currently clouded, shown by The Moon, and its path forward is calm transparency, shown by The Star, not grand gestures or dramatic tests. This is how a spread should be read: not as three separate fortunes, but as feelings, feelings and direction combined. Notice which card challenges you most, because that position usually names the conversation, boundary or patience the situation is actually asking for.",
      "Two tradition notes help you read responsibly. Some readers treat reversed cards as blocked or internalised energy, where the card's quality is present but turned inward or delayed, while others ignore reversals entirely; both approaches exist in the tradition. Timing claims deserve particular caution. Tarot is strongest on themes, feelings and choices in the present, and weakest as a timetable. If a reading suggests a direction, test it against real behaviour over time rather than treating a card as proof of what will happen. Notice also whether the spread is dominated by one suit, because that emphasis often shows whether the issue is emotional, practical, passionate or mainly about communication."
    ],
    faqs: [
      {
        question: "Can tarot predict exactly what he or she will do?",
        answer: "No. A reading reflects energies, feelings and patterns around a situation as they stand now. People retain free will and circumstances change. Treat the cards as insight for your own choices, never as a certain prediction of another person's actions or decisions."
      },
      {
        question: "How often should I repeat a love reading?",
        answer: "Avoid daily repeats on the same question. Asking again and again usually reflects anxiety rather than new information, and the answers blur. Give a reading time to play out, act on its honest advice, and return only when the situation has genuinely changed."
      },
      {
        question: "What if I draw a scary card like Death or The Tower?",
        answer: "These cards are not literal. Death usually marks the ending of a phase and the start of a new one, while The Tower marks a sudden truth or a structure that was already unstable. In love readings they more often describe necessary change than disaster."
      },
      {
        question: "Can single people use a love tarot reading?",
        answer: "Yes. If there is no partner, position two can describe a person you are interested in, a past connection that still affects you, or the kind of partner energy approaching your life. The spread still works as reflection on your feelings, patterns and readiness for love."
      },
      {
        question: "Do Major Arcana cards matter more than Minor Arcana cards?",
        answer: "Generally, yes, in weight rather than importance. A Major Arcana card signals a larger theme or turning point in the connection, while Minor Arcana cards describe everyday feelings and events. A spread with several Major cards suggests the situation carries a bigger life lesson."
      }
    ]
  },

  "soulmate-initials": {
    guideTitle: "Soulmate Initials Predictor Guide",
    guide: [
      "Soulmate initials are starting letters suggested by an old Vedic naming tradition, offered here as a light, playful hint about the sound a future partner's name may begin with. They are not a guaranteed name, a proof of identity, or a test any real person should have to pass. The tradition behind them is genuine and precise, but its modern use in this tool is simple: take the suggested sounds as a fun prompt for reflection, and judge any relationship by character, kindness and shared life, never by a letter.",
      "The classical method works like this. In Vedic astrology, each nakshatra, or lunar mansion, is divided into four padas, or quarters. Each pada carries an assigned birth syllable, the sound a person's traditional name should begin with. There are 27 nakshatras with 4 padas each, giving 108 pada syllables in total, and many Indian names are still chosen this way. The same phonetic tradition can be applied to the 7th-house side of the chart, the house of partnership, to hint at the name sounds associated with a spouse or long-term partner. That distinction matters, because the system assigns sound values rather than modern alphabet letters, and families traditionally pronounce the chosen syllable at the start of the name.",
      "The syllables follow a fixed order. Ashwini's four padas give Chu, Che, Cho and La. Bharani gives Li, Lu, Le and Lo. Krittika gives A, I, U and E, and Rohini gives O, Va, Vi and Vu. A worked example shows how a hint is formed: if the relevant placement falls in Rohini pada 2, the syllable is Va, which points to names beginning with the V sound, such as Varun, Vaishnavi, Vanessa or Victor across different languages. The syllable is a sound, not a strict letter rule, and scripts adapt it, so Va may appear as Wa in some spellings."
    ],
    steps: [
      "Enter your birth details so the relevant nakshatra and pada placements can be identified.",
      "Read the pada syllable linked to the partnership side of the chart.",
      "Note the starting sounds it suggests, including common spelling variations of the same sound.",
      "Treat the result as a light hint and compare it, if you wish, with names already in your life."
    ],
    resultMeaning: [
      "A result such as Va is best understood as one sound among the 108 traditional pada syllables, attached to a specific quarter of a specific nakshatra. It tells you the starting sound the tradition associates with the partner side of your chart, nothing more and nothing less. Because it is a sound, it travels across languages: the same syllable can begin a Sanskrit name, an English name or a name from any culture that uses that sound, and spelling will vary with script and family preference.",
      "Keep the framing honest. Millions of people share any given initial, and most happy partners were never checked against a chart before they met. If a name you care about matches the hint, enjoy the coincidence. If it does not match, that says nothing against the person or the relationship. Traditions like this survive because they are enjoyable and thought-provoking, and they work best held lightly, as a prompt for curiosity about names and sounds rather than evidence about who your soulmate is."
    ],
    faqs: [
      {
        question: "How are the soulmate initials derived?",
        answer: "They come from pada syllables. The relevant nakshatra placement on the partnership side of the chart is located, its pada, or quarter, is identified, and that pada's assigned traditional syllable gives the suggested starting sound, following the same naming system used for newborns in the tradition."
      },
      {
        question: "Why did I get more than one letter or sound?",
        answer: "Because more than one chart placement can be considered, and each placement has its own nakshatra and pada. Multiple placements therefore give multiple candidate sounds. Treat them as a small set of possibilities from the tradition, not as letters that must all appear in one name."
      },
      {
        question: "Does this work with English and other non-Indian names?",
        answer: "Yes, in the sense that sounds transliterate. A syllable like Va matches Varun in India and Vanessa or Victor in English, because the match is phonetic. Spelling differs by language and script, so follow the sound at the start of the name rather than the exact letters."
      },
      {
        question: "What if my partner's initial is not listed?",
        answer: "That is common and means very little. Middle names, nicknames, changed names and different chart points can all shift the result, and the tradition is indicative only. Never judge a real relationship by an initial; character and compatibility matter infinitely more than a starting letter."
      },
      {
        question: "Can I use my own nakshatra padas to check my own name?",
        answer: "Yes, and this is the tradition's original use. Find your Moon's nakshatra and pada, look up its assigned syllable, and see whether your name begins with that sound. Many families chose names exactly this way, so a match often reflects that naming practice."
      }
    ]
  },
"elemental-compatibility": {
    guideTitle: "Elemental Compatibility Guide: How Fire, Air, Earth and Water Fit",
    guide: [
      "Your elemental compatibility result compares the elements of your two zodiac signs to show how your basic temperaments blend, support or challenge each other in a relationship. Fire signs are Aries, Leo and Sagittarius, Earth signs are Taurus, Virgo and Capricorn, Air signs are Gemini, Libra and Aquarius, and Water signs are Cancer, Scorpio and Pisces. Each element describes a default way of acting, feeling, thinking and wanting, so the pairing maps where a couple flows and where they must translate.",
      "Two pairings are traditionally read as naturally compatible. Fire plus Air is the first: air feeds fire, so energy, ideas and enthusiasm amplify each other, though the risk is burnout and all talk with no rest. Earth plus Water is the second: water nourishes earth, creating a calm, loyal bond that builds real things slowly, though it can slide into stagnation if nothing new is invited in. Same-element pairings have their own power. Fire plus Fire is high voltage, inspiring and competitive, and it thrives on shared goals. Earth plus Earth is dependable and practical, but needs deliberate romance and novelty. Air plus Air sparkles mentally and is often friendship-based, while feelings can go unspoken. Water plus Water offers deep emotional attunement, with a real risk of mood contagion when one partner sinks.",
      "The other four pairings are work pairings, not bad pairings. Fire plus Water makes steam: intense attraction, but fire can feel damped and water can feel overheated, so pacing and cooling-off rules help. Fire plus Earth pairs the spark with the builder; earth may find fire reckless and fire may find earth slow, yet it works when fire leads vision and earth leads execution. Air plus Earth is mind meets matter: air floats ideas while earth asks about the budget, and it becomes excellent once both respect the other's function. Air plus Water is logic meets feeling: air analyses emotions while water feels analysed, and it works when air learns to listen first."
    ],
    steps: [
      "Enter your birth date or Sun sign and your partner's sign to find each person's element.",
      "Read your pairing type first: natural, same-element or work pairing.",
      "Note the strength and the watch point named for your specific combination.",
      "Agree one practical change together, such as how you rest, decide or cool down after conflict."
    ],
    resultMeaning: [
      "Consider a Leo partner, a Fire sign, with a Libra partner, an Air sign. Libra's air literally fans Leo's fire, so together they can be socially dazzling, generous and rich in ideas, each making the other shine brighter in company. The friction point is just as specific: Leo wants applause and a clear decision, while Libra wants discussion and harmony before committing. Neither is wrong; they simply refuel in different ways, Leo through appreciation and momentum, Libra through balance and conversation together.",
      "The reading for this pair therefore advises a small exchange. Leo gives Libra time to weigh options in private, without treating hesitation as rejection or delay as disloyalty. Libra gives Leo clear appreciation out loud, not just agreement in principle, because Leo hears love most plainly when it is spoken and shown. Used this way, your result is a translation guide, showing where affection can get lost between two elemental languages."
    ],
    faqs: [
      {
        question: "Are same-element pairs always the best match?",
        answer: "Not always. Sharing an element brings instant understanding, but it can also amplify the same weakness: two Fire signs may burn out, two Earth signs may get stuck, two Air signs may avoid feelings, and two Water signs may sink together. A shared strength still needs conscious handling every day."
      },
      {
        question: "What is the hardest pairing?",
        answer: "Fire plus Water is traditionally named the hardest, because fire feels damped while water feels overheated, and arguments can swing between explosion and withdrawal. It is still workable. Pacing, cooling-off rules and repairing quickly after steam rises make this intense pairing surprisingly durable for many couples who respect its rhythm."
      },
      {
        question: "Do we use Sun signs only?",
        answer: "This tool starts with Sun sign elements because they are easy to find and describe core temperament well. For a deeper reading, compare Moon and Venus elements too: the Moon shows emotional needs and comfort style, while Venus shows how each person gives affection, enjoys company and prefers to be wooed."
      },
      {
        question: "Can elements change with the full chart?",
        answer: "Your Sun sign element never changes, but a full chart may be dominated by another element altogether. If most planets sit in Water signs, for example, a Fire Sun person may act far more feeling-led than expected. Treat this result as the headline, and the wider chart as the detail underneath."
      },
      {
        question: "How can we use a work pairing result constructively?",
        answer: "Treat the friction as information, not failure. Name which function each person leads, agree how decisions, rest and conflict will be handled, and revisit the agreement after a few weeks. Work pairings often build unusual respect, because each partner must learn a language they would never have chosen alone."
      }
    ]
  },

  "parent-child-astrology": {
    guideTitle: "Parent-Child Astrology Guide: Reading Moon Sign Needs and Parenting Style",
    guide: [
      "Your parent-child result compares your child's Moon sign, which in astrology describes emotional needs and comfort style, with your own sign, which describes your instinctive parenting style, and reads the fit between the two. It is a guide to empathy, never a label or a limit on a child. Children are always more than their charts, and this reading simply suggests where comfort may be offered in a form your child can receive most easily.",
      "Moon sign needs follow the element. A Fire Moon child, with the Moon in Aries, Leo or Sagittarius, needs movement, praise, choices and quick repair after conflict, and wilts under cold silence. An Earth Moon child, in Taurus, Virgo or Capricorn, needs routine, regular food and sleep, advance warning of changes and plenty of physical comfort. An Air Moon child, in Gemini, Libra or Aquarius, needs to talk it out, have questions answered honestly, and have books and friends nearby, because feelings are processed through words. A Water Moon child, in Cancer, Scorpio or Pisces, needs a soft tone, unhurried comfort and feelings believed the first time, and remembers emotional weather for years.",
      "Your own sign describes the parenting you offer almost without thinking: how quickly you act, how you soothe, how you set limits and how you show pride. No style is better than another. The useful question is whether your default comfort matches what your child's Moon actually asks for, or whether it lands slightly off target. When the two differ, small translations usually matter far more than big changes in personality, rules or family routines at home. Noticing that gap early also prevents a common misunderstanding, where a child who simply needs a different kind of comfort is mistaken for being difficult, distant or deliberately uncooperative at home."
    ],
    steps: [
      "Enter your child's birth date to find the Moon sign, and add your own sign for your parenting style.",
      "Read your child's elemental needs first, before looking at the fit between you.",
      "Notice one place where your instinctive response and your child's comfort style differ.",
      "Try the suggested translation for a week, then watch what actually soothes your child fastest."
    ],
    resultMeaning: [
      "Consider an Aries parent with a Cancer Moon child. The Aries parent is fast, direct and fixes things by acting, while this Water Moon child needs security, softness and to be comforted before being corrected. The classic friction sounds like this: the parent says you are fine, come on, while the child still needs two minutes of being held first. The guide's translation is comfort first, courage second. Once soothed properly, this child borrows the Aries parent's bravery beautifully and becomes quietly very brave.",
      "The gift also runs in reverse. This child teaches the Aries parent slowness, tenderness and the value of feelings that cannot be solved by action alone, lessons the parent may carry into every other relationship. That two-way exchange sits at the heart of every pairing in this tool: the parent offers the child a strength they lack, the child stretches the parent somewhere they have grown rigid, and the friction between styles becomes the family's quiet curriculum over the years together."
    ],
    faqs: [
      {
        question: "Why is the Moon sign used for children?",
        answer: "In astrology the Moon rules emotions, comfort, sleep, food and the feeling of safety, which is exactly the world a child lives in most of the day. A child's Sun sign shows emerging character, but the Moon sign usually explains tears, clinginess, soothing and bedtime behaviour far more accurately."
      },
      {
        question: "What if I do not know my child's birth time?",
        answer: "The Moon sign can usually still be found from the birth date alone, because the Moon stays in one sign for about two and a half days. Only when a birth falls near a sign-change day does the exact time matter, and the tool will flag those borderline cases for you clearly."
      },
      {
        question: "Does the parent's Moon sign matter too?",
        answer: "Yes, it matters a great deal. Your own Moon sign shows your comfort language: how you were soothed, how you calm yourself, and what you instinctively offer when your child cries. When your Moon and your child's Moon share an element, comfort often flows easily without either of you trying."
      },
      {
        question: "Does this still apply to teenagers?",
        answer: "Yes, though the same needs wear older clothes. A Fire Moon teenager still needs quick repair after rows, an Earth Moon teenager still hates sudden plan changes, and a Water Moon teenager still tracks emotional weather. The main difference is delivery: offer the same comfort with more privacy, choice and respect."
      },
      {
        question: "Can this help with siblings who are very different?",
        answer: "Yes. Compare the children's Moon elements side by side and you will often see why one needs talking, another needs quiet, and a third needs a snack and a routine. Fair parenting is rarely identical parenting; matching comfort to each child's Moon is a practical way of being fair."
      }
    ]
  },

  "spirit-animal": {
    guideTitle: "Spirit Animal Finder Guide: Totem Archetypes, Elements and Temperament",
    guide: [
      "Your spirit animal result matches you with a totem animal archetype chosen from your zodiac element and temperament, offered as a reflective mirror for traits you already carry. The idea is borrowed from Indigenous traditions, where such relationships hold deep spiritual meaning, and it is used here respectfully as a reflective archetype exercise rather than as a claim about those traditions. Read your animal as a pattern to notice in yourself, not as a fixed identity or a prediction about your future.",
      "Ten archetypes anchor the finder. The Wolf stands for loyalty, intuition, protecting the pack yet needing solo freedom. The Bear brings grounding, strength, healing rest and defended boundaries. The Owl sees in the dark: wisdom, pattern-spotting and quiet observation. The Eagle offers high vision, freedom and long-range perspective. The Deer moves with gentleness, grace, non-confrontation and alert kindness. The Fox shows cleverness, adaptability and playful problem-solving. The Turtle carries patience, longevity and home carried within. The Butterfly means transformation and lightness after a heavy chapter. The Horse has stamina, wanderlust and honest energy. The Snake teaches shedding skins, renewal and deep instinct.",
      "Element guides the matching, as tendencies rather than rigid rules. Fire temperaments often match bold daytime hunters and roamers such as the Horse, Eagle and Fox. Earth temperaments often match the steady, embodied Bear, Turtle and Deer. Air temperaments often match watchers and messengers: the Owl, Butterfly and Eagle. Water temperaments often match instinct-led, feeling-led animals: the Wolf, Snake and Deer. Because temperament blends several traits, a supporting animal can sit close behind your main result, and many readers recognise themselves in two archetypes at once. When your element and temperament point in slightly different directions, trust the temperament description more, because daily habits, pace and social style usually shape the match more honestly than the sign label alone."
    ],
    steps: [
      "Enter your birth date so the tool can read your zodiac sign, element and temperament.",
      "Read your matched animal's core traits and notice which ones feel uncomfortably accurate.",
      "Read the growth edge named in your result, not just the flattering strengths.",
      "Watch for that animal's strategy in your own decisions over the following week."
    ],
    resultMeaning: [
      "Consider a Scorpio reader, a Water sign, matched with the Wolf. The reading describes loyalty to a small trusted circle rather than easy openness to everyone, superb intuition about threat and hidden motives, and a rich private inner life that few people are allowed to see. Much of a Scorpio's energy goes on quiet vigilance: sensing shifts in the pack, remembering who proved trustworthy, and withdrawing to recover alone after intense social effort drains them completely.",
      "The growth edge this reading names is just as specific: letting the pack see vulnerability instead of vanishing alone. A Wolf who always disappears when hurt teaches others that help is unwanted, then feels abandoned when none arrives. For the Scorpio reader, the practice is small and deliberate: tell one trusted person what is actually wrong, once, before retreating. Your animal result therefore works best as an honest character sketch, highlighting a strength to trust and a habit to soften."
    ],
    faqs: [
      {
        question: "Is my spirit animal fixed for life?",
        answer: "Think of your main result as a core totem that reflects lasting temperament, so it usually stays stable. Alongside it, temporary messengers can appear during particular phases: the Butterfly during a transition, the Bear during recovery, the Snake during a reinvention. A changing emphasis does not mean the first result was wrong."
      },
      {
        question: "Why is my result different from my favourite animal?",
        answer: "It usually is different, because the finder reflects traits rather than taste. You may love dolphins yet match the Owl, because your actual strategy is watching quietly and speaking only when sure. Favourite animals show what delights you; the archetype match shows how you habitually move through difficulty, loyalty and change."
      },
      {
        question: "What if two animals both resonate strongly?",
        answer: "Read the first as your primary archetype and the second as a supporting one. Many people run a main strategy with a backup: Wolf loyalty supported by Owl observation, or Horse stamina supported by Turtle patience. The supporting animal often describes how you behave under pressure, rather than on an ordinary day."
      },
      {
        question: "Is a spirit animal the same as a power animal or familiar?",
        answer: "They are related ideas with different roots. A power animal is usually invoked in shamanic practice for specific help or qualities, while a familiar comes from European folk magic as a companion spirit. This finder uses spirit animal loosely, as a temperament archetype for reflection, not as either of those practices."
      },
      {
        question: "How do I work with my result?",
        answer: "Start with journal prompts: where did this animal's strategy help me this month, and where did it cost me? Notice the animal's habits inside your real decisions about work, loyalty, rest and conflict. Some readers keep a small image nearby as a reminder, but honest observation matters far more."
      }
    ]
  },

  "gemstone": {
    guideTitle: "Vedic Gemstone Finder Guide: Ratna Vigyan, Planets, Metals and Fingers",
    guide: [
      "Your Vedic gemstone result, drawn from Ratna Vigyan, matches a classical gemstone to a planet in your chart, together with its traditional metal and wearing finger. The classical table is fixed: the Sun takes Ruby, called Manik, set in gold and worn on the ring finger; the Moon takes Pearl, Moti, in silver on the little finger; Mars takes Red Coral, Moonga, in gold or copper on the ring finger; Mercury takes Emerald, Panna, in gold on the little finger; and Jupiter takes Yellow Sapphire, Pukhraj, in gold on the index finger.",
      "The table continues: Venus takes Diamond, Heera, in white gold, platinum or silver on the middle or ring finger, with white sapphire and opal accepted as traditional substitutes; Saturn takes Blue Sapphire, Neelam, in silver or iron and steel on the middle finger; Rahu takes Hessonite, Gomed, in silver on the middle finger; and Ketu takes Cat's Eye, Lehsunia, in silver on the middle or ring finger. Tradition adds a wearing ritual: the ring is rinsed and energised, then first worn on the planet's weekday morning, Jupiter stones on Thursday and Saturn stones on Saturday, for example.",
      "The crucial caution shapes every recommendation. In the classical system a gemstone strengthens its planet, so a stone is worn for the chart's functional benefics, judged from the Ascendant, or Lagna, never simply because a planet looks weak. Strengthening a planet that harms the chart is traditionally avoided. Blue Sapphire is the classic test-first stone, traditionally worn on trial for a few days before committing. A qualified Jyotishi should review the full chart before major stones, and inexpensive substitutes and non-gem remedies count as valid classical alternatives."
    ],
    steps: [
      "Enter your birth details so the tool can find your Ascendant and judge each planet's role.",
      "Read which planet your recommended stone strengthens, and which houses that planet rules for you.",
      "Check the caution notes carefully, especially any test-wearing advice for powerful stones.",
      "Consider a substitute stone or a non-gem remedy before committing to an expensive purchase."
    ],
    resultMeaning: [
      "A worked example shows why the Ascendant, not the Sun sign, decides. For a Cancer ascendant, Mars rules the fifth house, Scorpio, and the tenth house, Aries, making Mars a yogakaraka, the most benefic planet for this chart, carrying both creativity and career. Red Coral for Mars is therefore the classic recommendation for this Lagna, set in gold or copper and worn on the ring finger. The same Mars could be a difficult planet for a different ascendant, which is why copying another person's stone is traditionally discouraged.",
      "Treat your own result in that spirit: as a traditional recommendation to examine, not an instruction to buy quickly. Where the tool suggests a powerful stone, honour the test-wearing custom, watch your sleep, temper and circumstances over the trial days, and let a qualified Jyotishi confirm the choice against your full chart and current periods. Where cost is a barrier, remember the classical alternatives carry real standing in the tradition: mantras for the planet, charity on its weekday, the associated metal, and fasting days are all recognised remedies."
    ],
    faqs: [
      {
        question: "Why does each gemstone have a specific finger?",
        answer: "In the tradition each finger is linked to a planet, so the stone is worn where its planet's influence is received most directly: the index finger for Jupiter, the middle finger for Saturn, the ring finger for the Sun and Mars, and the little finger for the Moon and Mercury."
      },
      {
        question: "Can I wear two gemstones together?",
        answer: "Sometimes, but combinations need care, because some stones strengthen planets that are traditionally in tension with each other; Ruby alongside Blue Sapphire or Hessonite is a commonly questioned pairing. Ask a knowledgeable Jyotishi before combining stones, especially where one planet is a benefic for your ascendant and the other is not."
      },
      {
        question: "Must a gemstone be natural, or will synthetic do?",
        answer: "The tradition insists on natural, untreated stones, holding that heat treatment, filling or laboratory creation changes the stone's quality as a remedy. That is also why certified natural stones cost more. If a flawless natural stone is beyond reach, a smaller natural stone or a traditional substitute is preferred over synthetic."
      },
      {
        question: "How long does a gemstone take to work?",
        answer: "Tradition does not promise instant results; a stone is judged over weeks, often in relation to the planet's periods and transits in your chart. Read that reflectively: notice sleep, mood, decisions and circumstances across a full month before concluding anything, and keep the test-wearing custom for Blue Sapphire regardless of timescale."
      },
      {
        question: "Are there remedies that do not involve gems?",
        answer: "Yes, and they are fully classical. Mantras for the planet, charity given on the planet's weekday, wearing or carrying its associated metal, and observing a fast on its day are all recognised remedies in Ratna Vigyan's wider tradition. Many practitioners recommend these first, reserving gemstones for cases a full chart review supports."
      }
    ]
  },
};
