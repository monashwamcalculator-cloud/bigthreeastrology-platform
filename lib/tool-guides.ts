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
"vertex": {
    guideTitle: "Vertex Calculator: The Fated Encounter Point in Your Birth Chart",
    guide: [ "The Vertex is a calculated point in your birth chart, found where the ecliptic crosses the prime vertical on the western side of the chart. It is not a planet or a body in the sky; it is a sensitive angle worked out from your birth moment and birthplace. Tradition reads the Vertex as a fated encounter point: the people and events that arrive when transiting planets touch it tend to feel destined, charged and hard to avoid, as if a door you did not choose has opened.", "Unlike a sign placement, the Vertex cannot be found from your birth date alone. It needs your exact birth time and the latitude of your birthplace, because the prime vertical depends on where on Earth you were born and on the precise moment. In most charts cast for mid latitudes it lands somewhere in the 5th through 8th houses, the relationship and encounter side of the chart. Change the birth time by even half an hour and the Vertex can shift noticeably, which is why astrologers treat it as only as reliable as the recorded time.", "The Vertex always travels with a partner point. Exactly 180 degrees opposite it sits the Anti-Vertex, in the eastern half of the chart, and some readers treat the pair as an axis: the Vertex shows what life brings to you, the Anti-Vertex the part you more consciously project or pursue. Readings concentrate on the Vertex itself, its sign and house, and on conjunctions to it. Other aspects are usually ignored, and the orb allowed is small, around 2 degrees, because a calculated point is read as a precise trigger rather than a wide field." ],
    steps: [ "Cast the birth chart from the exact birth date, time and birthplace, using the latitude of the place of birth.", "Find where the ecliptic intersects the prime vertical on the western side of the chart; that intersection is the Vertex.", "Record the sign, degree and house of the Vertex, and mark the Anti-Vertex exactly opposite it.", "Watch for transiting planets conjuncting the Vertex within about 2 degrees, and read the house for the life area involved." ],
    resultMeaning: [ "Suppose your chart shows the Vertex in Scorpio in the 6th house, with the Anti-Vertex in Taurus. The traditional reading is of intense, transformative encounters that arrive through work, health and daily life rather than through romance or public life: the colleague who changes how you work, the health episode that forces a new routine, the demanding project that reorganises your days. Scorpio colours the meetings with depth, privacy and all-or-nothing stakes, while the Taurus Anti-Vertex suggests you yourself keep reaching for steadiness and tangible results on the other side of the axis.", "The classic trigger is a transit crossing the Vertex degree. Transiting Jupiter conjunct the Vertex is the textbook example: an expanding, door-opening meeting or opportunity that later looks like a turning point. Slower planets are read as heavier, longer activations, quick ones as brief fated-feeling encounters. Keep the framing honest, though: the Vertex describes a style of experience, not proof of destiny, and because it hangs on your birth time, an uncertain time means an uncertain point." ],
    faqs: [ { question: "Do I need my exact birth time for the Vertex?", answer: "Yes. The Vertex is calculated from the prime vertical, which depends on your exact birth time and birthplace latitude, so it is never a date-only placement. A birth time rounded to the nearest hour can move it by several degrees or even change its house, so use a birth certificate time where possible." }, { question: "What is the Anti-Vertex?", answer: "It is the point exactly 180 degrees opposite the Vertex, on the eastern side of the chart. Most readers focus on the Vertex itself, but the pair is read as an axis: the Vertex end shows encounters that seem to arrive from outside, while the Anti-Vertex end shows the style you more deliberately bring to meetings and relationships." }, { question: "Which houses does the Vertex usually fall in?", answer: "In charts cast for mid latitudes it usually falls between the 5th and 8th houses, the western, relationship-facing side of the chart. At extreme northern or southern latitudes the geometry distorts and it can fall elsewhere, which is one reason high-latitude births are read with extra care and a verified birth time." }, { question: "How close does a transit need to be to activate the Vertex?", answer: "Tradition uses a tight orb of about 2 degrees for conjunctions to the Vertex, and most readers consider conjunctions only, not squares or trines. The closer and slower the transiting planet, the longer and weightier the activation is taken to be; a fast planet like the Moon gives at most a brief, same-day flavour." }, { question: "Does a Vertex activation mean a meeting is truly fated?", answer: "No. Fated is the traditional language for how such meetings feel: significant, unplanned and hard to sidestep. The Vertex is a useful lens for noticing turning-point encounters and taking them seriously, but it is not evidence of destiny, and no placement obliges you to keep any person or opportunity that your own judgement rejects." } ]
  },
  "horoscope": {
    guideTitle: "Daily Horoscope: How Astrologers Actually Read the Day for Your Sign",
    guide: [ "A daily horoscope is a short reading built from the transits of that day, and one transit matters above all the others: the Moon. The Moon changes sign every 2 to 2.5 days, moves through every house of your chart each month and sets the emotional weather in a way the slower planets cannot. Astrologers read the day's Moon, and any sharp aspects it makes, against three reference points in your chart in a set order: your Rising sign first, then your Moon sign, then your Sun sign.", "The order matters because each sign answers a different question. The Rising sign fixes the houses, so the transiting Moon is counted from the Rising sign to see which life area is lit up today: work, money, partners, home. The Moon sign method, the backbone of Vedic daily readings, shows how the day feels from the inside. The Sun sign, the one in newspapers, is the easiest to know and the least personal, which is why Sun-sign columns so often feel vague or interchangeable.", "Hold the whole thing lightly. A daily horoscope is shared by everyone with your sign, so at best it names a theme worth noticing: a conversation to have, a mood to plan around, a day to push or to pause. It is a reflection prompt written from general transits, not a forecast of events in your particular life, and it should never be the reason you spend money, sign a contract or cancel something that matters." ],
    steps: [ "Find the sign the Moon is in today and note any major aspects it completes during the day.", "Count the houses from your Rising sign to the Moon's sign to find today's highlighted life area.", "Repeat the count from your Moon sign, the Vedic daily method, and compare the emotional theme.", "Read the Sun sign version last, treating it as a general mood note rather than the main message." ],
    resultMeaning: [ "On a day when the Moon is in Leo, watch how differently the same sky reads. For a Leo Rising person, the Moon is moving through their 1st house, so the day is about visibility, mood, body and personal initiative; they are the story. For an Aquarius Rising person, Leo is the 7th house, so the identical transit puts partners centre stage: a spouse's mood, a negotiation, a one-to-one conversation that cannot be postponed. Nothing in the sky changed between the two readings. Only the starting point moved.", "That is the whole secret behind why one sign's lucky day is another sign's relationship day, and why a column written for your Sun sign can miss completely. Used well, a daily horoscope is a two-minute planning habit: note the house theme, match it to one real thing on your calendar, and let the rest go. If the day's reading warns of friction, the practical translation is usually simple: slow down, confirm details in writing, and do not start sensitive conversations tired." ],
    faqs: [ { question: "Should I read my daily horoscope by Rising, Moon or Sun sign?", answer: "Read the Rising sign first, because houses are counted from it, and houses turn a transit into a life topic. Read the Moon sign second for emotional tone, as Vedic daily readings do. Use the Sun sign last and lightest: it is the most general of the three, and the one newspaper columns use." }, { question: "Why does the Moon matter most in a daily horoscope?", answer: "Because it is the fastest-moving body astrologers track. The Moon changes sign every 2 to 2.5 days and completes the zodiac in about a month, so it alone can give each day a distinct flavour. The Sun spends a month in each sign and the outer planets years, so they describe background seasons, not daily weather." }, { question: "Why does my horoscope sometimes feel completely wrong?", answer: "Usually because it was written for your Sun sign only, the least personal of the three reference points, and shared with everyone born in that month. Try reading the column for your Rising sign instead; most people find it lands far more often. Boundary days, when the Moon changes sign mid-day, can also make a morning reading feel stale by evening." }, { question: "What else do astrologers check besides the Moon?", answer: "The day's aspects: whether the Moon or other fast planets are meeting Saturn, Mars or Mercury by hard aspect, which colours the day's friction, energy or communication. Some readers also note Mercury retrograde periods and the weekday ruler. These are refinements layered on the Moon's house position, not replacements for it." }, { question: "Can a daily horoscope predict what will happen to me?", answer: "No. It is written from general transits for a whole sign, so it can name a theme, a mood or a house topic, but not events in one person's life. Treat anything that promises specific outcomes, lucky purchases or guaranteed meetings as entertainment copy, and keep real decisions on real information." } ]
  },
  "in-laws-compatibility": {
    guideTitle: "In-Laws Compatibility: Reading Family Harmony From the 7th House",
    guide: [ "In Vedic astrology, your relationships with your in-laws are read from your own birth chart by counting houses from the 7th house, the house of your spouse. The logic is simple: once the spouse is located at the 7th, their family is mapped relative to them. Your mother-in-law is your spouse's mother, so she is read from the 4th house counted from the 7th, which lands on the 10th house from your Lagna. Your father-in-law is your spouse's father, read from the 9th counted from the 7th, which lands on the 3rd house from Lagna.", "This counting method is called derived houses, or bhavat bhavam, and it is used across Vedic reading: any person's relatives can be located by counting from that person's house. For in-laws, the reading itself looks at three things in each house: its ruling planet and where that lord has gone, any planets sitting in the house, and the aspects falling on it. Benefic influence suggests ease and warmth; heavy malefic pressure suggests friction points to manage, not doom.", "Two honest cautions belong with this technique. First, traditions vary: some schools count the father-in-law differently, using the 10th from the 7th or the Sun as father's significator, so two competent astrologers may not map the family identically. Second, this is a framework for understanding family dynamics, never a verdict on real people. Used well, it simply highlights where respect, patience and clear boundaries will matter most, with your spouse as the natural bridge between the two families." ],
    steps: [ "Identify your 7th house and its sign; this is the spouse's reference point for the whole reading.", "Count four houses from the 7th to find the mother-in-law house, the 10th from your Lagna.", "Count nine houses from the 7th to find the father-in-law house, the 3rd from your Lagna.", "Read each house's lord, occupants and aspects to judge warmth, friction and where effort helps." ],
    resultMeaning: [ "Take a verified example. With Leo Lagna, the 7th house is Aquarius, the spouse's sign position. Counting four houses from Aquarius gives Taurus, so Taurus is the mother-in-law house, and it is also the 10th house from Lagna. Counting nine houses from Aquarius gives Libra, the father-in-law house, the 3rd from Lagna. The reading then follows the lords: Venus rules Taurus, so if Venus is placed well, in a friendly sign and free of heavy affliction, tradition reads warmth, generosity and practical support in the mother-in-law relationship.", "In that same example Venus also rules Libra, so one planet's condition colours both in-law relationships, which is common in practice. A well-placed common lord hints that goodwill on one side tends to spread to the other, while an afflicted one suggests the spouse works hardest as mediator. Either way, the chart describes tendencies to navigate: it cannot rank real people, excuse unkindness, or replace the ordinary work of courtesy, honesty and time spent together." ],
    faqs: [ { question: "Which houses in my chart show my mother-in-law and father-in-law?", answer: "Count from the 7th house, the spouse's house. The 4th from the 7th, which is the 10th house from Lagna, shows the mother-in-law, because she is the spouse's mother. The 9th from the 7th, the 3rd from Lagna, shows the father-in-law. Then read each house's lord and occupants for the quality of the relationship." }, { question: "Why are in-laws counted from the 7th house and not from Lagna?", answer: "Because they are not your blood relatives; they enter your life through your spouse. Vedic derived-house logic locates any person's family relative to that person: the spouse sits at the 7th, so the spouse's mother is the 4th from there and the spouse's father the 9th from there. Your own parents are read directly from your 4th and 9th houses instead." }, { question: "Do all astrologers use the same house for the father-in-law?", answer: "No, and it is worth knowing before you compare readings. The method used here counts the 9th from the 7th, treating the father-in-law as the spouse's father. Some traditions instead use the 10th from the 7th, or weigh the Sun as the general significator of fathers. The mother-in-law mapping, the 4th from the 7th, is more widely agreed." }, { question: "What if Saturn or another malefic sits in an in-law house?", answer: "Tradition reads it as a friction theme, not a sentence: Saturn there can suggest formality, distance or duty-heavy interactions that warm slowly with consistency. The lord's condition and any benefic aspects soften or sharpen the picture considerably. In real life it is best used as a planning hint: expect trust to build gradually and let actions, not assumptions, lead." }, { question: "Can this reading actually help my family relationships?", answer: "Yes, if you use it as a mirror rather than a scorecard. It can show you where patience will be needed, which relationships may need the spouse as bridge, and where a little formality or space protects goodwill. The improvements themselves still come from respect, clear boundaries and time; the chart just suggests where to aim them first." } ]
  },
  "pitra-dosha": {
    guideTitle: "Pitra Dosha: The Ancestral Pattern Read From the Sun and 9th House",
    guide: [ "Pitra Dosha is a traditional Vedic pattern connected with the Sun, the 9th house and the ancestral line, read as a sign that the family's past needs acknowledgment in the present. The word pitra means the ancestors, especially the paternal line, and the 9th house governs father, fortune and dharma, while the Sun is the significator of the father and the soul. When specific afflictions gather around these points, classical astrologers count Pitra Dosha as present. It is best understood as an invitation to honour and remember those who came before, not as a punishment.", "The traditional checklist names clear indicators. The Sun conjunct Rahu or Ketu is the best known, especially in the 1st, 5th or 9th house. The Sun or the 9th lord placed in the 6th, 8th or 12th house counts as well, as does a 9th lord that is debilitated or combust. Rahu or Ketu occupying the 9th house, and malefics aspecting the 9th house or the Sun, add further weight. Birth on Amavasya, the new Moon day, is also traditionally noted alongside these chart factors.", "The tone of the tradition matters as much as the checklist. Pitra Dosha is not a curse, and responsible astrologers do not use it to frighten. Its remedies are remembrance practices, gentle by design: tarpan, the offering of water to ancestors on Amavasya and during Pitru Paksha, the ancestral fortnight also called Mahalaya; feeding birds and crows, who are treated as ancestral messengers; charity given in the names of ancestors; and caring attentively for living elders. None of these promises a guaranteed outcome. They are ways of honouring a lineage, and many families find that meaning enough." ],
    steps: [ "Check whether the Sun is conjunct Rahu or Ketu, especially in the 1st, 5th or 9th house.", "Check whether the Sun or the 9th lord is placed in the 6th, 8th or 12th house.", "Examine the 9th house itself for occupants, its lord's strength, and malefic aspects on it or the Sun.", "Count the indicators present, and note whether the birth fell on Amavasya, before judging the dosha." ],
    resultMeaning: [ "Work through a verified example. In a Cancer Lagna chart, the Sun sits in the 9th house, in Pisces, conjunct Rahu: that is the first indicator, the Sun joined with Rahu in the house of father and fortune. The 9th lord is Jupiter, and in this chart Jupiter sits in the 8th house, Aquarius, one of the difficult houses on the checklist: that is the second indicator. With two classical indicators present, the traditional checklist counts Pitra Dosha as present in this chart.", "Read that result as a count, not as a curse or a verdict on the family. Two indicators describe a theme: fortune and paternal support may need conscious effort, and the ancestral connection may feel distant until it is deliberately renewed. A single weak indicator, by contrast, is common in charts and is usually not counted as a full dosha. The response the tradition prescribes is remembrance and care, offered calmly and regularly, rather than fear or expensive rituals sold with promises." ],
    faqs: [ { question: "Is Pitra Dosha a curse or a punishment?", answer: "No. In the classical framing it is an ancestral imbalance asking for acknowledgment, not a penalty imposed on you for anything. The themes it is linked with, such as distance from the father or delayed fortune, are read as areas needing effort and remembrance. Any astrologer who presents it as a curse to sell fear should be avoided." }, { question: "How many indicators are needed for Pitra Dosha to count?", answer: "There is no single binding number, but the working rule most astrologers use is weight: one mild indicator is common and usually not counted as a full dosha, while two or more classical indicators, especially involving the 9th house and the Sun together, are counted as present. Strength and cancellation factors in the chart modify the judgement." }, { question: "What are the traditional remedies for Pitra Dosha?", answer: "They are remembrance practices rather than purchases: tarpan, offering water to the ancestors on Amavasya and during Pitru Paksha; feeding birds and crows; giving food or charity in the names of ancestors; and caring respectfully for living elders and parents. The tradition values regularity and sincerity in these acts over scale or expense." }, { question: "Does being born on Amavasya always mean Pitra Dosha?", answer: "No. Birth on Amavasya, the new Moon day when the Moon is dark and close to the Sun, is traditionally noted as a supporting factor, because the luminaries are read as weakened for ancestral matters. On its own it does not establish the dosha; astrologers look for the chart indicators around the Sun and the 9th house as well." }, { question: "Can Pitra Dosha be completely removed?", answer: "The tradition does not frame it as something to remove once and for all. Remembrance practices are ongoing: Amavasya comes every month, and Pitru Paksha every year, so honouring ancestors is treated as a continuing relationship rather than a one-time fix. No practice guarantees specific worldly outcomes, and claims otherwise go beyond what the tradition itself promises." } ]
  },
  "career-tarot": {
    guideTitle: "Career Tarot: A Three-Card Spread for Work and Direction",
    guide: [ "A career tarot reading uses a focused three-card spread built for work questions. The first card shows where you stand now: your real current position, skills and energy at work. The second card shows the real blocker underneath, the obstacle that is actually slowing you, which is often not the one you would name. The third card shows the move to make next, the most useful action the reading can point to. Three positions, read in that order, turn a vague worry about your career into a structured story you can act on.", "Reading the spread well means reading it as one sentence, not three separate fortunes. The blocker card deserves the closest attention, because career readings so often show that the visible problem, a stalled promotion or a difficult manager, sits on top of something quieter: missing information, an unspoken agreement, or a skill gap kept politely hidden. The suits help too. Pentacles speak of money, craft and security; Wands of ambition and visibility; Swords of decisions and conflict; Cups of satisfaction and workplace relationships. Major Arcana cards signal bigger chapter themes.", "Keep the framing honest from the start. Tarot used this way is a structured reflection tool: the cards surface the questions you have been avoiding and give them a shape you can discuss and plan around. They do not predict job outcomes, interview results or market movements. A draw is never, by itself, a sound reason to resign, sign a contract or invest money. Those decisions belong to your contract, your finances and your judgement, with the cards allowed, at most, to clarify what to investigate next." ],
    steps: [ "Hold one clear career question in mind: a decision, a stalled situation or a change you are weighing.", "Draw three cards in order and lay them out as now, blocker and next move.", "Read each card by its traditional meaning, then read all three together as one connected story.", "Translate the third card into one concrete, low-risk action you can take within the week." ],
    resultMeaning: [ "Consider this example draw. Card one, where you stand, is the Eight of Pentacles: skill-building, apprenticeship and quiet mastery, the stage where the craft itself is being built through repetition and care. Card two, the blocker, is The Moon: unclear information and unspoken office politics, a warning not to sign or commit while the facts are still foggy. Card three, the move, is The Chariot: take the reins, apply, pitch and drive the transition yourself in one clear direction rather than waiting to be chosen.", "Read together, the story is precise. The problem is not talent: the Eight of Pentacles shows real skill being built. The fog is the problem, so the practical work is verification: get the promised role, salary band or timeline in writing before moving. Only then does The Chariot's advice apply, and it applies fully: one direction, visibly driven by you. Notice what the reading did not do. It issued no prediction, only a sharper description of the present and a sensible order of operations." ],
    faqs: [ { question: "Can a career tarot reading tell me whether to quit my job?", answer: "No, and you should not let it. The spread can clarify what is blocking you and what a sensible next move looks like, but quitting depends on your savings, contract, market and alternatives, none of which a card can see. Use the reading to prepare questions and plans, then decide on the real facts." }, { question: "What if the blocker card looks frightening, like The Tower?", answer: "Read it by its traditional core rather than its drama. In a career spread The Tower usually names a structure that is already unstable: a reorganisation, a role built on unclear promises, a plan that cannot survive honest scrutiny. As the blocker, it often points at the instability itself, and the useful response is contingency planning, not panic." }, { question: "How specific should my career question be?", answer: "Specific enough to have a next step attached. Questions like whether to accept the internal transfer, or what is blocking the promotion you were promised, give the three positions something to bite on. A whole-life question, like what career you should have, is better broken into stages: ask about the current blocker first, then about direction." }, { question: "Should I draw again if the career cards seem wrong?", answer: "Tradition says no: the first draw is the reading, and redrawing until the answer flatters you turns the tool into noise. If a card seems wrong, sit with the blocker position especially; it is designed to name the thing you would rather not look at. Ask again only when the situation itself has genuinely changed." }, { question: "What does the next-move card actually ask me to do?", answer: "It points at a direction and a style of action, which you must translate into your own circumstances. The Chariot means drive one clear move yourself; the Eight of Pentacles would mean keep building skill first; The Moon there would mean gather information before moving at all. The card sets the strategy, you choose the concrete step." } ]
  },
  "composite-chart": {
    guideTitle: "Composite Chart: Midpoint Astrology for the Relationship Itself",
    guide: [ "A composite chart is a single birth chart built for a relationship itself. Instead of comparing two people's charts side by side, the composite method merges them: for every planet, it takes the midpoint between the two partners' positions, the nearer midpoint on the circle, and plots those midpoints as one chart. That chart is then read like a natal chart, except the person it describes is the couple. Its Sun shows the relationship's core purpose, its Moon the pair's emotional habits, its Venus how affection flows between them.", "The distinction from synastry is worth keeping clear, because the two techniques answer different questions. Synastry lays one chart over the other and reads the contacts between them: how person A affects person B, where the sparks and frictions live. A composite chart forgets the two individuals and describes the third entity their union creates, the relationship as a thing with its own temperament, needs and direction. Couples often use both: synastry for how they interact, composite for what they are building together and why it feels the way it does.", "One honest caveat concerns the houses. Composite planet signs come purely from the two birth charts, so they are the same wherever the chart is calculated. The houses are not: they depend on the reference place used, the location chosen as the relationship's home base, and different schools use the couple's residence, the meeting place or a midpoint location. Read the signs and planet aspects with full confidence, and treat the house placements as method-dependent, worth noting but not worth arguing over between two printouts." ],
    steps: [ "Convert each partner's planet positions into absolute degrees, counted from 0 degrees Aries around the circle.", "Add each matching pair of positions together and divide by two to get the raw midpoint.", "If that midpoint falls opposite the pair, take the midpoint on the shorter arc between the two positions instead.", "Plot all the midpoints as one chart and read it as the natal chart of the relationship itself." ],
    resultMeaning: [ "The arithmetic is simple once positions are absolute. Partner A's Sun sits at 10 degrees Aries, which is 10 degrees absolute. Partner B's Sun sits at 20 degrees Gemini, which is 80 degrees absolute. The midpoint is (10 + 80) divided by 2, which is 45 degrees, and 45 degrees absolute is 15 degrees Taurus. So the composite Sun falls in Taurus: a relationship whose core purpose is stability, sensuality and building shared resources, a couple that exists to make something lasting and tangible together.", "The wrap rule matters just as much. Partner A's Moon is at 20 degrees Pisces, 350 degrees absolute, and Partner B's Moon is at 10 degrees Aries, 10 degrees absolute. Naively averaging 350 and 10 gives 180 degrees, deep in Libra, but the two Moons are actually only 20 degrees apart, measured across the 0 degree point where Pisces meets Aries. Their true midpoint is 0 degrees Aries. Always take the midpoint on the shorter arc, or half your composite planets will sit opposite where they belong." ],
    faqs: [ { question: "What is the difference between synastry and a composite chart?", answer: "Synastry compares two separate charts, reading the contacts between one person's planets and the other's to show how they affect each other. A composite chart merges the two charts by midpoints into a single new chart that describes the relationship itself. Synastry answers how you interact; the composite answers what the relationship is." }, { question: "Why does every planet have two possible midpoints?", answer: "Because two points on a circle are joined by two arcs, a short way round and a long way round, and each arc has its own midpoint, exactly opposite the other. Composite method uses the midpoint of the shorter arc, the nearer one, since that is where the two positions genuinely meet. Choosing the wrong one flips the planet by 180 degrees." }, { question: "Do composite chart houses need a place to be calculated?", answer: "Yes. The planet signs come only from the two birth charts, but the houses and Ascendant of a composite chart depend on the reference place chosen for the relationship, such as where the couple lives or met. Different reference places can shift the houses while leaving every planet sign unchanged, which is why house readings vary between methods." }, { question: "Can a composite chart be made for friends or business partners?", answer: "Yes. The method works for any two people, because it only needs two birth charts and their midpoints. For a friendship or a founding pair, readers weight Mercury, Saturn and the composite Sun more heavily than Venus, but the reading logic is identical: one chart describing what the pairing itself is like and what it tends to produce." }, { question: "Which composite placements matter most in a reading?", answer: "Start with the composite Sun for the relationship's purpose, the Moon for its emotional pattern, and Venus and Mars together for affection and desire. The composite Ascendant, where a reference place is agreed, shows how the couple presents as a unit. Hard aspects to the composite Sun or Moon are read as the relationship's own built-in work." } ]
  },
"breakup-recovery": {
    guideTitle: "Breakup Recovery Astrology: Why Endings Happen When They Do",
    guide: [
      "A breakup rarely feels random when you look at the transits running at the time: certain classical periods coincide again and again with endings, and naming them gives a painful season a shape and an end date. Saturn testing the natal Moon or the 7th house, a Ketu or South Node period stirring release, and Chiron themes around the wound that teaches are the three patterns traditional astrologers check first. None of them caused a relationship to fail on its own, but together they describe the weather in which weak bonds are tested and finished bonds are let go.",
      "Saturn is the central figure. Its transits bring an audit: whatever is built on habit, fear or convenience is pressed, while whatever is built on real commitment is usually redefined and strengthened. When Saturn aspects the Moon, the audit turns inward to emotional habits and unmet needs. When it touches the 7th house or its ruler, the audit turns to the partnership itself, its fairness, workload and honesty. A relationship that ends under Saturn was often already carrying weight it could no longer hold in silence.",
      "Ketu, the South Node in Western terms, works differently. Its periods are linked with detachment, sudden clarity and an inability to keep pretending that something feeds you when it no longer does. Chiron adds the third layer, the old wound touched by the ending: rejection, abandonment or not being chosen. If you are struggling badly, lean on real people and, where needed, a professional counsellor. Astrology here offers timing and perspective, never a substitute for support."
    ],
    steps: [
      "Find your natal Moon sign and 7th house sign from a sidereal birth chart made with your date, time and place of birth.",
      "Check where Saturn is transiting now and note whether it touches your Moon, your 7th house or the ruler of your 7th house.",
      "Check your current Vimshottari dasha and note any Ketu period, sub-period or strong South Node transit activation running now.",
      "Note any Chiron theme the ending repeats, then write down the lesson and the practical change you intend to make from it."
    ],
    resultMeaning: [
      "Take a person with natal Moon in Virgo as the worked example. Sidereal Saturn has been in Pisces since 29 March 2025, and Pisces is the 7th sign from Virgo, so Saturn simultaneously transits opposite their Moon and casts its 7th house aspect directly onto that Moon. Classically this is a relationship-mirror and emotional-audit period: partnerships are tested, redefined or released, private unhappiness can no longer be managed quietly, and the person is asked to state plainly what they need instead of silently adapting.",
      "The useful news inside a Saturn example is the timetable. Saturn spends about two and a half years in one sign, so this intense mirror phase is a chapter, not a life sentence. Traditional guidance is deliberately ordinary: keep sleep, food and work routines steady, let grief have its normal course without rushing a replacement relationship, finish practical separations cleanly, and notice which old wound was touched so the next relationship is chosen rather than repeated."
    ],
    faqs: [
      {
        question: "Which transits most often coincide with a breakup?",
        answer: "Saturn transits to the natal Moon, the 7th house or its ruler are the classic first check, because Saturn audits commitment and emotional habits. Ketu or South Node periods add detachment and release, while Chiron contacts highlight the older wound the ending reopens."
      },
      {
        question: "Does Saturn always end a relationship when it aspects the Moon?",
        answer: "No. Saturn tests rather than simply destroys. Committed partnerships often survive this period by becoming more honest, fairer in workload and clearer in terms. Relationships that end under Saturn usually had structural problems already. The transit brings the audit forward; it does not invent the problems it exposes."
      },
      {
        question: "How long does a Saturn breakup period last?",
        answer: "Saturn spends about two and a half years in each sign, so a transit to your Moon or 7th house is a chapter of roughly that length, strongest while the aspect is closest. The acute grief of an ending is normally much shorter than the full transit. Knowing the period has a boundary helps many people pace recovery."
      },
      {
        question: "What does Ketu or the South Node have to do with letting go?",
        answer: "Ketu is the significator of detachment in Vedic astrology, and its dasha periods and strong transits are traditionally linked with attachments losing their hold. People often describe a quiet certainty that something is finished, even before events confirm it. The teaching is release without bitterness, keeping the lesson and dropping the grievance."
      },
      {
        question: "Can astrology help me recover, and when should I seek other help?",
        answer: "Astrology can help by naming the period, normalising its themes and giving it a rough end date, and the practical steps here can structure daily life while feelings settle. It is not therapy. If grief is severe, lasting or affecting your health, work or safety, please talk to trusted people and a qualified counsellor or doctor promptly."
      }
    ]
  },
  "shani-dhaiya": {
    guideTitle: "Shani Dhaiya: Saturn in the 4th or 8th From Your Moon",
    guide: [
      "Shani Dhaiya is Saturn transiting the 4th sign from your natal Moon, called Kantaka Shani, or the 8th sign from your natal Moon, called Ashtama Shani, and each form lasts about two and a half years, the time Saturn takes to cross one sign. It is a traditionally demanding period, but it is not Sade Sati. Dhaiya is one Saturn sign transit hitting one sensitive house from the Moon. Sade Sati is three consecutive transits, the 12th, 1st and 2nd from the Moon, lasting about seven and a half years in total.",
      "The 4th and 8th are sensitive for different reasons. The 4th from the Moon covers home, mother, property, vehicles and inner peace, so Kantaka Shani tends to disturb domestic settledness in order to rebuild it on more honest terms. The 8th covers sudden change, joint money, debts and health discipline, so Ashtama Shani tends to bring enforced restructuring there. In both cases the classical reading is the same at root: Saturn slows what was careless, exposes what was neglected, and rewards patience, routine and straight dealing.",
      "Nothing in the traditional treatment of Dhaiya justifies panic or expensive fear-based remedies. Saturn is read as a strict teacher, not an enemy, and his periods are described as purposeful: effort made now tends to last, shortcuts tend to be caught, and service to others is said to soften the period. Read Dhaiya as demanding maintenance, not as a sentence."
    ],
    steps: [
      "Find your sidereal natal Moon sign, called your Janma Rashi, from a Vedic chart made with your birth date, time and place.",
      "Count forward from that Moon sign and note the 4th sign and the 8th sign, counting your Moon sign itself as the first.",
      "Check the sign Saturn is transiting now in the sidereal zodiac and see whether it matches your 4th or your 8th sign.",
      "If it matches, note the period as Dhaiya, record when Saturn entered that sign, and plan for roughly two and a half years."
    ],
    resultMeaning: [
      "Use the present era as the verified example. Sidereal Saturn entered Pisces on 29 March 2025 and stays there until about June 2027. Pisces is the 4th sign from Sagittarius, so people with Moon in Sagittarius are in Kantaka Shani for this whole period, and Pisces is the 8th sign from Leo, so people with Moon in Leo are in Ashtama Shani for the same period. Everyone else is not in Dhaiya under this transit, whatever a generic headline suggests.",
      "For the Sagittarius Moon group, expect the 4th house themes to dominate: a house move or renovation, a parent needing more support, property paperwork moving slowly, and restlessness at home that settles only when real changes are made. For the Leo Moon group, expect 8th house themes: shared finances needing clean agreements, loans and taxes demanding attention, sudden role changes, and health routines that can no longer be postponed. The traditional prescription is unglamorous and effective: keep a steady routine, serve elders and workers without show, be honest in documents and money, and let slow progress count."
    ],
    faqs: [
      {
        question: "What is the difference between Dhaiya and Sade Sati?",
        answer: "Sade Sati is Saturn transiting the 12th, 1st and 2nd signs from your Moon, three signs over about seven and a half years. Dhaiya is Saturn transiting only the 4th sign, Kantaka Shani, or only the 8th sign, Ashtama Shani, each lasting about two and a half years. They are separate periods and never describe the same transit at the same time."
      },
      {
        question: "Who is in Shani Dhaiya right now?",
        answer: "With sidereal Saturn in Pisces from 29 March 2025 until about June 2027, Moon in Sagittarius natives are in Kantaka Shani because Pisces is the 4th from Sagittarius, and Moon in Leo natives are in Ashtama Shani because Pisces is the 8th from Leo. The answer changes each time Saturn changes sign, roughly every two and a half years."
      },
      {
        question: "Is Ashtama Shani worse than Kantaka Shani?",
        answer: "They are demanding in different areas rather than ranked simply as worse or better. Kantaka Shani presses home, mother, property and inner peace. Ashtama Shani presses sudden change, joint resources and health discipline. The whole chart, ascendant and running dasha decide how strongly either is felt, and many people complete both with solid achievements."
      },
      {
        question: "What remedies are traditionally suggested for Dhaiya?",
        answer: "The classical remedies are behavioural: keep a disciplined routine, work honestly, serve the elderly, the poor and manual workers, and respect Saturdays with simple acts such as lighting a sesame oil lamp or giving food in charity. No genuine tradition requires fear or paid rituals. Saturn responds, in the traditional view, to humility, patience and sustained effort."
      },
      {
        question: "Can good things happen during Dhaiya?",
        answer: "Yes. Saturn periods regularly coincide with promotions earned through endurance, property finally secured after long effort, debts cleared and skills mastered slowly. The pattern is that results come through structure rather than luck."
      }
    ]
  },
  "vehicle-numerology": {
    guideTitle: "Vehicle Number Numerology: How to Read Your Plate Total",
    guide: [
      "Vehicle number numerology reduces your registration plate to a single digit from 1 to 9 and reads that digit as the character of the vehicle: how it is traditionally said to feel to own and drive. There are two accepted ways to reach the total. The first, and the one most Indian practitioners use, adds only the digits on the plate. The second adds the full alphanumeric plate, converting every letter to a number first. The two methods often give different answers, so honest practitioners say which one they used.",
      "The letter values come from the Pythagorean chart, which runs in repeating cycles of nine: A equals 1, B equals 2, C equals 3, D equals 4, E equals 5, F equals 6, G equals 7, H equals 8 and I equals 9, then J equals 1, K equals 2, L equals 3, M equals 4, N equals 5, O equals 6, P equals 7, Q equals 8 and R equals 9, and finally S equals 1, T equals 2, U equals 3, V equals 4, W equals 5, X equals 6, Y equals 7 and Z equals 8. Add every value, then reduce until one digit remains.",
      "Tradition then compares the plate total with the driver. Totals of 3, 5 and 6 are widely considered harmonious for vehicles: 3 for ease and sociability, 5 for movement and adaptability, and 6 for comfort and family use. One honesty note governs everything here: a number never makes a vehicle safe. Maintenance, tyres, brakes and sober, attentive driving do that. Numerology here is a preference tradition only."
    ],
    steps: [
      "Write down the full registration plate exactly as issued, including the state and district codes and all letters and digits.",
      "For the digits-only method, add just the numerals on the plate and reduce the sum to a single digit from 1 to 9.",
      "For the full method, convert each letter with the Pythagorean values, add letters and digits together, and reduce to one digit.",
      "Compare both totals with the driver birth number and read the digits-only total as the primary one, following Indian practice."
    ],
    resultMeaning: [
      "Work the verified example plate MH 12 AB 1234 both ways. Digits-only first: the numerals are 1, 2, 1, 2, 3 and 4, which add to 13, and 13 reduces as 1 plus 3 to 4. A 4 vehicle is traditionally the workhorse: stable, practical, built for regular routes and long ownership rather than thrills. Now the full total: M equals 4, H equals 8, A equals 1 and B equals 2, alongside the digits 1, 2, 1, 2, 3 and 4. Everything adds to 28, which reduces to 10 and then to 1, the number of independence and solo driving.",
      "Read together, this plate suits a driver who mostly drives alone for work: the everyday character is the steady 4, while the full-plate undertone of 1 adds self-reliance. If a choice between two plates comes down to totals alone, practitioners pick the plate whose digits-only total is harmonious, ideally 3, 5 or 6, or friendly to the driver birth number, then forget the number and maintain the vehicle properly."
    ],
    faqs: [
      {
        question: "Which method is correct, digits-only or the full plate total?",
        answer: "Both are established, but most Indian practitioners use the digits-only total as the main vehicle number, because the numerals are the part of the plate that is always present and spoken. The full alphanumeric total is read as a secondary undertone. State your method when comparing readings."
      },
      {
        question: "Which total numbers are considered lucky for a vehicle?",
        answer: "Totals of 3, 5 and 6 are traditionally considered the most harmonious for vehicles: 3 for light, social, everyday ease, 5 for travel and frequent use, and 6 for comfort and family service. These are traditional preferences, not guarantees, and no total is treated as a curse."
      },
      {
        question: "How do I find my driver or birth number to compare?",
        answer: "Reduce the day of the month you were born on to a single digit. Someone born on the 14th adds 1 plus 4 to get a birth number of 5, while someone born on the 9th is simply 9. That number is compared with the plate total: matching and traditionally friendly numbers are read as an easy fit between driver and vehicle."
      },
      {
        question: "Does an unfavourable plate number mean the vehicle is unsafe?",
        answer: "No. Numerology is a symbolic preference tradition with no power over mechanical safety. Accidents are prevented by maintained brakes, tyres, steering and lights, by servicing on schedule, and by sober, attentive, rested driving. Treat a troubling total as a taste question, never as a safety prediction."
      },
      {
        question: "Can I change my vehicle number if I dislike the total?",
        answer: "In India a registration number is issued by the transport authority, and choice numbers are available in many states through the official fancy or choice number process for a fee, subject to availability. Changing an existing number later is rarely simple, so most owners simply note the reading and drive well."
      }
    ]
  },
  "aura-color": {
    guideTitle: "Aura Color Calculator: Your Life Colour From Your Birth Date",
    guide: [
      "Your aura colour, in the esoteric tradition this calculator follows, is found from your birth date: reduce the date to your Life Path number, then read that number through a fixed colour mapping to get your life colour, the standing tone said to surround you throughout life. The life colour is considered constant, like the Life Path itself. Around it, temporary aura colours are said to shift with mood, health and circumstance, while the underlying life colour remains the baseline.",
      "The mapping used here is one widely used version, labelled as such because aura traditions are not standardised and other teachers publish slightly different tables. In this version, 1 is Red, 2 is Orange, 3 is Yellow, 4 is Green, 5 is Blue, 6 is Indigo, 7 is Violet, 8 is Rose pink and 9 is Gold. The master numbers carry special readings: 11 is often read as silver-white, linked with intuition and sensitivity, and 22 is often read as radiant gold, linked with the master builder who turns vision into form.",
      "The honest framing matters as much as the mapping. Aura colours are a symbolic, esoteric tradition; they are not scientifically proven, no instrument measures a life colour, and a reading is never a diagnosis of health or character. Their genuine value is self-reflection, a compact picture of qualities to notice in yourself. Read your result as a thoughtful metaphor, test it against lived experience, and keep what rings true."
    ],
    steps: [
      "Write out your full birth date with the day, month and full four-digit year, exactly as recorded on your birth certificate.",
      "Add every digit of the date together, then reduce the total by adding its digits until you reach a single digit or a master number.",
      "If the reduction reaches 11 or 22, note the master number first, then reduce once more to its single digit for the base reading.",
      "Read your single digit through the colour mapping to find your life colour, then reflect on where its qualities show in your life."
    ],
    resultMeaning: [
      "Work the verified example of someone born on 14 June 1990. Add the digits of the full date: 1 plus 4 plus 0 plus 6 plus 1 plus 9 plus 9 plus 0 equals 30, and 30 reduces as 3 plus 0 to 3. The Life Path is 3, and in the mapping used here 3 is Yellow, so this person has a Yellow life colour. Yellow is traditionally the mental, communicative aura: joy, intellect, curiosity, humour and expression are its strengths, the person who explains, teaches or lifts a room by talking. Its shadow side is scattered attention and over-talking when anxious.",
      "Read your own colour the same balanced way, strengths and shadow together. Red lives through action and courage, Orange through warmth and appetite for experience, Green through steadiness and healing, Blue through calm truth and honest speech, Indigo through perception and depth, Violet through imagination and spiritual leaning, Rose pink through compassion and gentle love, and Gold through generosity and purpose. The life colour is the climate; daily colours are only weather."
    ],
    faqs: [
      {
        question: "What is a life colour and how is it different from daily aura colours?",
        answer: "The life colour is derived from your birth date through your Life Path number, and in this tradition it never changes, describing your standing qualities. Daily or temporary aura colours are said to shift with mood, health, stress and company."
      },
      {
        question: "What do the master numbers 11 and 22 mean as aura colours?",
        answer: "In the mapping used here, 11 is often read as silver-white, linked with intuition and sensitivity, with Orange as its reduced base colour through the digit 2. The number 22 is often read as radiant gold, linked with building lasting things of value, with Green as its base through the digit 4. Read both the master colour and the base colour together."
      },
      {
        question: "Why do different websites give me different aura colours?",
        answer: "Because aura colour systems are traditional and unstandardised. Different teachers map numbers to colours in different ways, and some systems use questionnaires or name calculations instead of the birth date. This page uses one widely used Life Path mapping and labels it openly. Consistency within one system matters more than hunting for a single official table that does not exist."
      },
      {
        question: "Are aura colours scientifically real?",
        answer: "No scientific evidence establishes aura colours as measurable physical fields, and no colour reading should be used to diagnose illness, judge character or make medical, financial or relationship decisions. The tradition is best treated as symbolic self-reflection: a language of colour that some people find helpful for noticing patterns in themselves, held lightly and tested against real life."
      },
      {
        question: "Can my aura colour change over time?",
        answer: "Your life colour, being tied to your birth date, does not change in this system. What practitioners say changes is the temporary layer: brightness, clarity and passing colours that reflect rest, stress, joy, grief or excitement."
      }
    ]
  },
  "daily-panchang": {
    guideTitle: "Panchang Explained: Tithi, Vara, Nakshatra, Yoga and Karana",
    guide: [
      "The Panchang is the traditional Vedic almanac built from five limbs: pancha means five and anga means limb. The five limbs are Tithi, the lunar day; Vara, the weekday; Nakshatra, the star the Moon occupies; Yoga, a period found from the Sun and Moon together; and Karana, the half-tithi. Together they describe the quality of a day far more precisely than a date alone.",
      "Tithi measures the Moon pulling away from the Sun. The elongation between them grows in steps of 12 degrees, and each completed step is one tithi, so 30 tithis make a lunar month, split into the bright Shukla Paksha as the Moon waxes and the dark Krishna Paksha as it wanes. Nakshatra measures where the Moon sits: the zodiac is divided into 27 stars of 13 degrees 20 minutes each. Yoga comes from adding the Sun and Moon longitudes and dividing that sum into 27 steps of 13 degrees 20 minutes, giving 27 yogas. Karana is simply half a tithi, so there are 60 karanas in a lunar month.",
      "Vara, the weekday, is the limb everyone already knows: each day is ruled by a planet, Sunday by the Sun, Monday by the Moon, Tuesday by Mars, Wednesday by Mercury, Thursday by Jupiter, Friday by Venus and Saturday by Saturn. A real daily Panchang needs the actual sidereal positions of the Sun and Moon for that day and place, taken from an ephemeris. This page is an orientation guide."
    ],
    steps: [
      "Take the sidereal longitudes of the Sun and the Moon for the day, measured in degrees from 0 degrees Aries.",
      "Find the Nakshatra by dividing the Moon longitude by 13 degrees 20 minutes and rounding up to the next whole star number.",
      "Find the Tithi by subtracting the Sun from the Moon, dividing the elongation by 12 degrees, and counting the tithi in progress.",
      "Find the Yoga by adding both longitudes, dividing by 13 degrees 20 minutes, and find the Karana as the half of the current Tithi."
    ],
    resultMeaning: [
      "Work the verified teaching example exactly, using sidereal longitudes: the Sun at 250 degrees, which places it in Sagittarius, and the Moon at 130 degrees, which places it in Leo. Nakshatra first: divide 130 by 13.333 and you get 9.75, so the Moon is in the 10th nakshatra, Magha, which spans 120 degrees to 133 degrees 20 minutes. Tithi next: the elongation is 130 minus 250, taken modulo 360, which gives 240 degrees, and 240 divided by 12 equals 20 completed steps, so the 21st tithi is running, Krishna Paksha Shashthi.",
      "Yoga completes the set: add the longitudes, 250 plus 130 equals 380, taken modulo 360 gives 20 degrees, and 20 degrees falls in the second step of 13 degrees 20 minutes, so the yoga is the 2nd yoga, Priti, also spelled Preeti, a name meaning affection. For the Karana of this tithi, the first half is Gara and the second half is Vanija. Treat this example as a teaching snapshot with round numbers chosen to make the arithmetic visible. A genuine daily Panchang must use today actual ephemeris positions."
    ],
    faqs: [
      {
        question: "What are the five limbs of the Panchang in simple words?",
        answer: "Tithi is the lunar day, found from the angle between Moon and Sun in 12 degree steps. Vara is the weekday and its planetary lord. Nakshatra is the star segment the Moon occupies. Yoga is a period found by adding the Sun and Moon longitudes. Karana is half a tithi."
      },
      {
        question: "Why does a tithi not match the calendar date?",
        answer: "A tithi is an angular event, not a clock event: it lasts while the Moon gains 12 degrees on the Sun, which takes roughly a day but varies, from about 19 to 26 hours. Tithis can therefore begin and end at any hour. The Panchang follows the sky, not the midnight boundary."
      },
      {
        question: "How is Yoga different from Nakshatra if both use 27 divisions?",
        answer: "Both divide the circle into 27 steps of 13 degrees 20 minutes, but they measure different things. Nakshatra uses the Moon longitude alone and shows where the Moon is placed. Yoga uses the sum of the Sun and Moon longitudes, so it advances about twice as fast and describes the combined quality of the day rather than a position."
      },
      {
        question: "What is a Karana and why are there 60 of them?",
        answer: "A Karana is half a tithi, the time the Moon needs to gain 6 degrees on the Sun. Since a lunar month holds 30 tithis, it holds 60 karanas. Most karanas repeat in a fixed cycle. Traditional timing treats some karanas, notably Vishti, also called Bhadra, as unsuitable for auspicious beginnings."
      },
      {
        question: "Can I calculate today Panchang myself from this guide?",
        answer: "You can follow and check the arithmetic once you have the day sidereal Sun and Moon longitudes, but those positions must come from a real ephemeris for your date and location. Use this guide to understand and verify a published Panchang, not as a substitute for the ephemeris itself."
      }
    ]
  },
  "personal-day": {
    guideTitle: "Personal Day Number: Your Daily Numerology Vibration",
    guide: [
      "Your Personal Day is the quickest-moving number in numerology: a single digit that changes every morning and colours how one date feels for you. Where the Personal Year describes the season of your year and the Personal Month its monthly weather, the Personal Day is the forecast for today alone, which is why people check it before big conversations, launches or quiet days.",
      "You reach it in three short hops, always starting from your own birth numbers. First the Personal Year: shrink your birth month and birth day to one digit each, shrink the current year the same way, and combine the three, reducing again if the total has two digits. Folding the current calendar month into that result gives the Personal Month. One final addition, the day of the month, reduced the same way, gives the Personal Day. A final total of 11 or 22 is often kept as a master number instead of being reduced further.",
      "The nine flavours are traditionally read like this. One is for initiative: begin, decide, go first. Two slows the pace for listening, tact and teamwork. Three turns outward, toward conversation, writing, friends and making things. Four is the builder day of lists, repairs and finishing. Five breaks routine and rewards movement and improvisation. Six pulls attention homeward, to family, promises and care. Seven goes quiet and inward: study, analysis and rest. Eight is the executive day, suited to money and visible action. Nine closes circles: complete, forgive, let go."
    ],
    steps: [
      "Shrink your birth month and birth day to single digits, shrink the current year the same way, and combine all three to get your Personal Year.",
      "Fold the number of the current calendar month into the Personal Year and reduce the sum to find your Personal Month.",
      "Add the date you are asking about, the day of the month, to the Personal Month figure.",
      "Reduce the result to one digit, leaving 11 or 22 standing if either appears, and read that theme for the day."
    ],
    resultMeaning: [
      "See the chain run on real numbers. Someone born on 8 March wants their number for early November 2026. Their Personal Year: birth month 3, birth day 8, and the year 2026 shrinks to 1, since 2 + 0 + 2 + 6 = 10 and 10 becomes 1. Together, 3 + 8 + 1 = 12, reducing to 3: an expressive, socially rebuilding year. November gives a Personal Month of 3 + 11 = 14, reducing to 5: a month tilted toward movement and change.",
      "Now the day itself. On 2 November 2026 the Personal Month of 5 meets the date 2, and 5 + 2 = 7, so this is a 7 Personal Day. Read against its own month, the picture sharpens: inside a restless, change-heavy 5 month, the day asks for the opposite: research before signing, one deep task instead of six shallow ones, and an early night. That contrast, a quiet day inside a restless month, is exactly what this number is for: a pacing note pinned to a real date, not a prediction."
    ],
    faqs: [
      {
        question: "How does the Personal Day relate to the Personal Year and Personal Month?",
        answer: "They are nested cycles. The year number, built from your birth date and the current year, describes a twelve-month theme. Adding the calendar month narrows the focus to a few weeks; adding the date narrows it to a single day. Each layer is calculated from the one above it, so check the first hop twice."
      },
      {
        question: "What does it mean if my Personal Day comes out as 11 or 22?",
        answer: "Those totals are traditionally kept whole at the final step and read as master numbers. An 11 day is the heightened, intuitive version of 2, insight turned up with patience still required underneath. A 22 day is the master-builder version of 4, the day to pour foundations for something large. Not every school keeps them, so check the convention when comparing calculators."
      },
      {
        question: "Does the Personal Day begin at midnight or at sunrise?",
        answer: "This page follows the civil calendar: your number for 2 November runs from the start of that date. A minority tradition counts from local sunrise to the next sunrise instead. They agree for most waking hours, so pick one rule and stay with it."
      },
      {
        question: "Which Personal Days suit decisions, money and difficult talks?",
        answer: "In the tradition, 1 is the day to open negotiations and act alone, 8 the day to discuss money and sign with confidence, and 2 the day for a delicate conversation that needs listening. Seven counsels postponing a signature if you can, and 5 counsels double-checking impulsive plans. Real deadlines and real facts always outrank these pacing hints."
      },
      {
        question: "Why is my Personal Day different from my partner's on the same date?",
        answer: "Because the chain begins with your own birth month and day, not with the calendar. Two people sharing a home and a date usually have different Personal Years, so their months and days diverge too. When a couple does share one, the chains have simply aligned at every hop."
      }
    ]
  },
"house-numerology": {
    guideTitle: "House Number Numerology: What Your Address Number Means",
    guide: [
      "Your house number has a numerology vibration found by adding its digits together and reducing the total to a single digit from 1 to 9, and that digit is traditionally read as the flavour of the home: the kind of energy it supports, the lessons it keeps presenting, and the atmosphere visitors tend to feel. It is a simple, transparent calculation you can check by hand in seconds, and it describes the home rather than the people.",
      "The method handles letters as well as digits. If your address includes a letter, such as flat 17A or house 24B, convert the letter with the Pythagorean values, where A is 1, B is 2, C continues to I at 9, then J returns to 1 and the cycle repeats through the alphabet. Add the letter value to the digit total before reducing. For flats and apartments, use the flat or unit number as the primary vibration, and treat the building number as a quieter background influence on shared areas and neighbours.",
      "Read the nine results in brief like this. A 1 home supports independence and fresh starts, a 2 home supports harmony and partnership, a 3 home supports creativity and social life, a 4 home supports stability and security, a 5 home supports change and freedom, a 6 home supports family and nurture, a 7 home supports study and quiet, an 8 home supports ambition and a focus on money, and a 9 home supports compassion and a humanitarian welcome. No number is lucky or unlucky in itself; each suits some households and stretches others."
    ],
    steps: [
      "Write down the number of your house, flat or unit exactly as it appears on your door.",
      "Add all the digits together, converting any letter with the Pythagorean values first.",
      "Reduce the total by adding its digits until you reach a single digit from 1 to 9.",
      "Read that digit as the primary vibration, with any building number as background only."
    ],
    resultMeaning: [
      "Work through house 284 exactly. Add 2 plus 8 plus 4, which gives 14, then reduce 1 plus 4 to reach 5. This is a 5 home: change-loving, social and movement-filled, where routines rarely survive the month, guests and ideas circulate freely, and life feels like a crossroads in the best sense. Now take flat 17A. The digits 1 plus 7 give 8, and the letter A adds 1, making 9 in total. This is a 9 home, compassionate and generous, with an 8 undertone of order underneath: a completion-and-guests home where people arrive with problems and leave feeling heard.",
      "The honest limit matters here. You cannot always choose your number, because homes are chosen for rent, schools, work and family first, and numerology should never overrule those practical reasons. The real value is understanding the flavour you are living with, so you can work with it deliberately: protect quiet in a lively 5 home, or add warmth and gathering in a private 7 home. Remedies in this tradition are symbolic and small, such as a door colour, a nameplate style or a healthy plant by the entrance, not structural advice or expensive changes."
    ],
    faqs: [
      {
        question: "How do I calculate my house number in numerology?",
        answer: "Add the digits of your house, flat or unit number together, then keep adding the digits of the total until you reach a single digit from 1 to 9. If a letter is present, convert it with the Pythagorean values and include it before reducing. That final digit is the number you read."
      },
      {
        question: "Which number should I use for a flat in a large building?",
        answer: "Use your flat or unit number as the primary vibration, because it identifies your own home and the life lived inside it. Read the building number as background only, colouring entrances, shared spaces and the general feel of the building. Most practitioners weight the unit number far more heavily."
      },
      {
        question: "Is there a best or luckiest house number?",
        answer: "No. Each number from 1 to 9 supports something valuable and stretches something else: a 4 home is steady but can feel rigid, while a 5 home is lively but can feel unsettled. The best number is the one whose strengths match what your household needs in this chapter of life."
      },
      {
        question: "What if my house number feels wrong for my family?",
        answer: "Treat the mismatch as useful information rather than a problem to fix. A quiet family in a social 5 home can protect rest with closed doors and calmer evenings, while a busy family in a 7 home can add shared rituals. Small symbolic touches, such as colour or a plant, belong to the tradition; major decisions should stay practical."
      },
      {
        question: "Do street names or postcodes count in house numerology?",
        answer: "Traditionally, no. The standard method uses only the number, and any letter, of your own house or unit. Street names and postcodes cover too many different homes to describe yours specifically. Keep the calculation to the digits on your own door for a reading that is actually about your household."
      }
    ]
  },
  "jupiter-sign": {
    guideTitle: "Jupiter Sign: Your Style of Growth, Luck and Opportunity",
    guide: [
      "Your Jupiter sign is the zodiac sign Jupiter occupied when you were born, and it describes your style of growth and luck: where opportunity tends to find you, how you learn, and what kind of generosity and faith come naturally to you. Jupiter spends about a year in each sign, so your Jupiter sign is shared with everyone born in the same stretch of months, yet it becomes personal through the house it occupies in your own chart: the sign shows the style of growth, while the house shows where in life that growth happens.",
      "You can find your sign from your birth date using this tropical table, given at month precision. Jupiter was in Taurus from June 2011 to June 2012 and again from May 2023 to May 2024, in Gemini from June 2012 to June 2013 and from May 2024 to June 2025, in Cancer from June 2013 to July 2014 and from June 2025 to June 2026, and in Leo from July 2014 to August 2015, returning there from June 2026. It was in Virgo from August 2015 to September 2016, Libra from September 2016 to October 2017, Scorpio from October 2017 to November 2018, and Sagittarius from November 2018 to December 2019.",
      "The table continues through the recent cycle. Jupiter was in Capricorn from December 2019 to December 2020, in Aquarius from December 2020 to December 2021 with a brief dip into Pisces from May to July 2021, in Pisces from December 2021 to December 2022 with a brief dip into Aries from May to October 2022, and in Aries from December 2022 to May 2023, before the Taurus period above. Jupiter returns to the same sign roughly every 12 years."
    ],
    steps: [
      "Find your birth month and year and locate that period in the Jupiter table above.",
      "Note the sign listed for that period as your tropical natal Jupiter sign.",
      "Check whether your birth falls within a few weeks of a changeover month before deciding.",
      "Read the sign as your growth style, then add its house in your full chart for where."
    ],
    resultMeaning: [
      "A verified example shows both the table and the 12-year cycle at work. Someone born on 14 March 2024 has Jupiter in Taurus, because that date falls inside the May 2023 to May 2024 Taurus period. Someone born on 14 March 2012 also has Jupiter in Taurus, from the June 2011 to June 2012 period. The second birth is a Jupiter return across the 12-year cycle: two children a school generation apart sharing the same growth style. Taurus Jupiter grows through patience, craft, money sense and the senses, building luck slowly through quality, loyalty and things made to last rather than through gambles or speed.",
      "Two cautions keep this reading honest. First, births within a few weeks of a changeover month need an exact chart, because Jupiter can cross a boundary, pause and cross back during retrograde motion. Second, do not mix systems. This table is tropical, as used in Western astrology. A Vedic, sidereal Jupiter is usually one sign earlier, because the sidereal zodiac sits about 24 degrees behind the tropical one through the ayanamsa. Both are coherent inside their own system; combining the two tables produces a result that belongs to neither."
    ],
    faqs: [
      {
        question: "How do I find my Jupiter sign from my birth date?",
        answer: "Locate your birth month and year in the table in this guide and read the sign for that period. Jupiter stays in a sign for about a year, so the month is usually enough."
      },
      {
        question: "What is a Jupiter return and when does it happen?",
        answer: "A Jupiter return happens when transiting Jupiter comes back to the sign and position of your natal Jupiter, roughly every 12 years, near ages 12, 24, 36 and so on. Traditionally it marks a year of expanded opportunity and renewed direction in the area of life shown by the house Jupiter occupies in your chart."
      },
      {
        question: "Does my Jupiter sign show where I will be lucky?",
        answer: "It shows a style rather than a guarantee: the way opportunity tends to reach you and the attitude that helps you use it. Taurus Jupiter prospers through patience and craft, while Gemini Jupiter prospers through curiosity and contacts."
      },
      {
        question: "Why is my Vedic Jupiter sign different from my Western one?",
        answer: "Because the two traditions measure the sky from different starting points. Western charts anchor the zodiac to the spring equinox, while Indian charts anchor it to the constellations themselves, and Earth slow wobble has slid those two anchors roughly 24 degrees apart, the ayanamsa. The same Jupiter therefore frequently lands a sign earlier in a sidereal chart. Both describe the same planet through different frames, so keep each reading inside its own frame."
      },
      {
        question: "Is Jupiter in Sagittarius or Pisces stronger than other signs?",
        answer: "Traditionally, Jupiter rules Sagittarius and Pisces, so it is read as especially comfortable and expressive there, and it is exalted in Cancer. A well-placed Jupiter can still be wasted without effort, however, and a challenging placement often produces wisdom through experience."
      }
    ]
  },
  "chakra-balance": {
    guideTitle: "Chakra Balance: The Seven Energy Centres Explained Honestly",
    guide: [
      "A chakra balance reading looks at the seven chakras of the yogic tradition, the energy centres running from the base of the spine to the crown of the head, and asks which feel strong and open in your life right now and which feel quiet or blocked. Each centre is linked with an area of experience, from survival and security to expression and connection, so the pattern gives you a structured way to reflect on where your energy flows easily and where it habitually gets stuck. Read it as a self-reflection framework from a wellness tradition, not as anything more.",
      "The standard table runs like this. Muladhara, the Root chakra, sits at the base of the spine, with the earth element, the seed sound LAM and the colour red, covering survival and security. Svadhisthana, the Sacral chakra, sits below the navel, with water, VAM and orange, covering emotion and creativity. Manipura, the Solar Plexus chakra, carries fire, RAM and yellow, covering will and personal power. Anahata, the Heart chakra, carries air, YAM and green, covering love and balance. Vishuddha, the Throat chakra, carries ether, HAM and blue, covering expression and truth. Ajna, the Third Eye, sits between the brows, with the sound OM and indigo, covering insight. Sahasrara, the Crown, sits at the top of the head, in violet or white, covering connection itself.",
      "Balance in this tradition does not mean all seven centres blazing at maximum. A centre can be underactive, steady or overactive, and an overactive centre distorts life just as a quiet one does: an overactive Solar Plexus can become controlling, just as an underactive one can become passive. The aim practitioners describe is flow, where each centre does its own job without drowning out the others."
    ],
    steps: [
      "Sit quietly and review your recent weeks honestly, area by area, before reading any result.",
      "Work through the seven centres in order, from Root to Crown, noting strong and quiet ones.",
      "Look for patterns between neighbouring centres rather than judging any single chakra alone.",
      "Choose one gentle, practical practice for the quietest centre and repeat it for two weeks."
    ],
    resultMeaning: [
      "Read a sample profile to see how this works in practice. Imagine a result showing a strong Heart chakra but a weak Throat chakra. In the traditional reading, this person gives generously, forgives easily and keeps relationships warm, yet struggles to say no, to ask for help, or to speak their own needs out loud, so generosity quietly turns into exhaustion and unspoken resentment. The suggested practices follow the pattern directly: humming, singing and honest conversation to open the throat, and calm breathwork, slowing the exhale, to keep the heart open without overextending it. The insight is the pairing, not either centre alone.",
      "The honesty note is required, not decorative. Chakras belong to the yogic wellness tradition, and balance here means a pattern for reflection, not a medical assessment of your body or mind. This reading cannot diagnose anything, rule anything out, or replace care from a doctor, therapist or other qualified professional. Used within those limits, the framework earns its place: it gives you a calm vocabulary for noticing where life feels open, where it feels tight, and what small practice you want to try next."
    ],
    faqs: [
      {
        question: "What are the seven chakras in order?",
        answer: "From the base of the spine upward they are Muladhara, the Root, for security; Svadhisthana, the Sacral, for emotion and creativity; Manipura, the Solar Plexus, for will; Anahata, the Heart, for love; Vishuddha, the Throat, for expression; Ajna, the Third Eye, for insight; and Sahasrara, the Crown, for connection. Each carries a traditional element, colour and seed sound."
      },
      {
        question: "What does a blocked or weak chakra actually mean here?",
        answer: "In this framework it means the life area linked with that centre currently feels quiet, avoided or difficult, based on your own reflection. A weak Throat pattern, for example, points to unspoken needs rather than a physical fault in your throat. It is a prompt for attention and practice, never a diagnosis of illness."
      },
      {
        question: "Can chakra balance affect my physical health?",
        answer: "Chakra work belongs to a spiritual wellness tradition and is not a substitute for medicine. Gentle practices linked with it, such as breathing exercises, movement, rest and honest conversation, can support general wellbeing. Any symptom that persists or worries you should be checked by a qualified health professional."
      },
      {
        question: "How often should I check my chakra balance?",
        answer: "Practitioners usually suggest checking in at natural turning points, such as a new season, after a stressful period, or when a pattern like poor sleep or constant tension keeps repeating. Daily scoring tends to create noise."
      },
      {
        question: "What is the simplest practice for a quiet chakra?",
        answer: "walking and regular meals for the Root, creative play for the Sacral, finishing one task daily for the Solar Plexus, gratitude and breathwork for the Heart, singing or honest conversation for the Throat, quiet reflection for the Third Eye, and stillness or time in nature for the Crown. Consistency matters more than intensity."
      }
    ]
  },
  "leadership-astrology": {
    guideTitle: "Leadership Astrology: What Your Chart Says About How You Lead",
    guide: [
      "A leadership astrology reading does not ask whether you were born to rule; it asks how you lead when people look to you: visibly or quietly, fast or patiently, through inspiration, systems or example. Astrologers read that style from a small set of chart factors working together, not from one placement, and the honest version of this reading describes a leadership style and its growth edges. It never assigns a rank, a job title or a guaranteed outcome.",
      "The chart factors taught for this reading are consistent across the tradition. The Sun shows direction, visibility and authority style: how you take up space and set a course. Mars shows drive, decision speed and courage: how quickly you act and how you handle conflict. Saturn shows structure, endurance and discipline: whether your leadership can last beyond enthusiasm. The 10th house, and the planet ruling it, show your public role and reputation, the part of leadership the world actually sees. Strong Leo, Capricorn or Aries placements add their own colour: Leo brings presence and loyalty, Capricorn brings patience and institution-building, and Aries brings initiative and a willingness to go first.",
      "No single factor decides the picture, and strength in one area often compensates for softness in another. A person with a modest Sun but a powerful Saturn may lead for decades through reliability, while a blazing Mars with a weak Saturn starts brilliantly and burns out. Read the factors as a team: the Sun sets direction, Mars supplies momentum, Saturn supplies staying power, and the 10th house shows where that combination becomes visible."
    ],
    steps: [
      "Identify your Sun sign and house first, for your direction and authority style.",
      "Note your Mars sign and house next, for drive, pace and courage under pressure.",
      "Check Saturn and your 10th house and its ruler, for endurance and public role.",
      "Read the factors together as one leadership style, including its growth edge."
    ],
    resultMeaning: [
      "Learn to recognise this illustrative chart pattern. Imagine a Sun in Leo in the 10th house, joined with Mars exalted in Capricorn. The Leo Sun in the house of public role gives a visible, commanding presence: this person naturally becomes the face of a project and is comfortable being watched. Mars exalted in Capricorn adds the rarer second half, disciplined execution: plans, deadlines and follow-through that survive long after the applause. Together astrologers would call this pattern the front-of-room strategist, someone who can both hold the room and hold the plan. Treat this as a pattern to recognise in a chart, clearly an illustration, not a computed promise about any individual.",
      "Balance the picture before using it. Quiet signs lead too, and often lead organisations that last. Scorpio leadership works through depth, privacy and an exact knowledge of where the real problems sit, while Capricorn leadership works through patience, hierarchy and results that compound over years. A chart with no dramatic placements can still belong to an outstanding leader, because leadership in real life is also skills practised daily, mentors who correct you, and timing that meets preparation. The chart suggests the style you will lead in most naturally; character and work decide how far that style takes you."
    ],
    faqs: [
      {
        question: "Which planets matter most for leadership in astrology?",
        answer: "The Sun leads the list, showing direction, visibility and authority style, followed by Mars for drive and decision speed and Saturn for structure and endurance. The 10th house and its ruling planet complete the picture by showing public role and reputation. A good reading weighs all of them together rather than crowning one placement."
      },
      {
        question: "Can a quiet or introverted chart still belong to a strong leader?",
        answer: "Yes, commonly. Scorpio, Capricorn and Virgo emphasis often produces leaders who work through depth, preparation and systems rather than visibility. Their authority grows from being right, reliable and calm under pressure."
      },
      {
        question: "What does a strong 10th house say about leadership?",
        answer: "The 10th house governs public role, career and reputation, so strength there suggests leadership that becomes visible and recognised over time. Benefic planets there, or a strong ruler of the house, support a good public name. It describes where leadership shows, though the Sun, Mars and Saturn still describe how it operates day to day."
      },
      {
        question: "Does my chart guarantee leadership success?",
        answer: "No chart guarantees success, rank or promotion, and any reading claiming otherwise should not be trusted. Astrology here describes style, strengths and likely blind spots. Outcomes depend on skills, effort, mentors, circumstances and timing. Use the reading to lead in your natural mode and to train its weak side deliberately."
      },
      {
        question: "How can I use a leadership reading practically?",
        answer: "Take one strength and one growth edge into your next project. A fast Mars leader can add a Saturn habit, such as written plans and fixed reviews, while a cautious Saturn leader can add a Mars habit, such as deciding by a deadline. Small borrowed habits, practised consistently, change leadership more than any label does."
      }
    ]
  },
  "dhan-yoga-calculator": {
    guideTitle: "Dhan Yoga: The Classical Vedic Combinations for Wealth",
    guide: [
      "A Dhan Yoga is a classical Vedic astrology combination linking the houses of wealth, gains and fortune in a birth chart, and it is traditionally read as structural potential for prosperity: the chart contains a working circuit between earning, keeping and growing resources. Several distinct combinations carry the name, and a careful reading checks which of them are actually present, how strong the planets involved are, and whether anything weakens them. What a Dhan Yoga never is, on its own, is a bank balance, a salary forecast or a promise, and this guide will keep that line clear throughout.",
      "The combinations taught most often are these. First, the core Lakshmi pattern: the lords of the 5th and 9th houses connected, by conjunction, by exchanging signs, or by standing in mutual kendras. Second, the Lagna lord joined with or aspecting the 2nd lord or the 11th lord, connecting the self with the houses of wealth and gains. Third, Gaja Kesari Yoga: Jupiter placed in a kendra, the 1st, 4th, 7th or 10th house, counted from the Moon, traditionally linked with intelligence, respect and lasting prosperity. Fourth, Lakshmi Yoga in its stricter form: the 9th lord strong in its own sign or exaltation sign, placed in a kendra or trikona, with Venus also well placed in the chart.",
      "Strength decides how much weight any of these patterns carries. A yoga formed by debilitated, combust or badly placed lords is read as a faint version of itself, while the same combination with strong, well-placed planets is taken seriously. Classical readers also check that the wealth houses themselves are not heavily afflicted, and they read the whole chart rather than collecting yogas like trophies."
    ],
    steps: [
      "Cast the sidereal Vedic chart and identify the lords of the 2nd, 5th, 9th and 11th houses.",
      "Check whether the 5th and 9th lords are conjunct, exchanging signs or in mutual kendras.",
      "Check the Lagna lord against the 2nd and 11th lords, and Jupiter in a kendra from the Moon.",
      "Judge the strength and placement of every planet involved before naming any yoga present."
    ],
    resultMeaning: [
      "Use this verified worked example exactly. Take a Leo Lagna chart. The 5th house is Sagittarius, so the 5th lord is Jupiter, and the 9th house is Aries, so the 9th lord is Mars. If Mars and Jupiter are conjunct together in the 10th house, which is Taurus for this Lagna, then the 5th and 9th lords meet in a kendra, and that is a textbook Dhan Yoga: merit and fortune joined in the house of career and public action. Now run the Gaja Kesari check in the same chart. If the Moon is in Scorpio, then Jupiter in Taurus stands in the 7th house counted from the Moon, and the 7th is a kendra, so Gaja Kesari Yoga is also present in this chart.",
      "The required framing protects you from the common misuse of this topic. A yoga is structural potential in the chart, not money in an account, and classical astrology itself reads its results through the dasha periods that activate the planets involved: a Dhan Yoga whose lords are dormant may show little until their periods run. Effort, skills, education, family circumstances and plain luck all stand between a chart pattern and an outcome. Never treat a yoga, present or absent, as financial advice, and never make borrowing, investing or career decisions on this reading alone."
    ],
    faqs: [
      {
        question: "What is a Dhan Yoga in Vedic astrology?",
        answer: "A Dhan Yoga is a classical combination linking the houses of wealth, gains and fortune, most famously the lords of the 5th and 9th houses in connection with each other or with strong houses. It is read as structural potential for prosperity in the chart."
      },
      {
        question: "What is Gaja Kesari Yoga and how is it checked?",
        answer: "Gaja Kesari Yoga forms when Jupiter stands in a kendra, the 1st, 4th, 7th or 10th house, counted from the Moon rather than from the Lagna. It is traditionally linked with intelligence, reputation and durable prosperity."
      },
      {
        question: "If I have a Dhan Yoga, will I become rich?",
        answer: "No honest reading promises that. A Dhan Yoga shows potential whose results are traditionally timed by the dasha periods of the planets involved, and which still depends on effort, skills and circumstances. Treat it as encouragement to build, not a forecast."
      },
      {
        question: "Can a Dhan Yoga be weakened or cancelled?",
        answer: "Yes. Classical texts reduce a yoga when its planets are debilitated, combust, placed in the difficult 6th, 8th or 12th houses, or heavily afflicted by malefics. Weak dignity turns a headline combination into a modest one."
      },
      {
        question: "What if my chart has no Dhan Yoga at all?",
        answer: "It is common, and it is not a verdict on your financial life. Wealth is also read from the 2nd and 11th houses, their lords, Jupiter and Venus, and from career houses that have nothing to do with named yogas."
      }
    ]
  },
  "lifepath-compatibility": {
    guideTitle: "Life Path Compatibility: How Two Numbers Work as a Couple",
    guide: [
      "Life Path compatibility compares the Life Path numbers of two partners to describe how their basic temperaments meet: where the relationship flows easily, where it grinds, and what the pair keeps teaching each other. Each Life Path is calculated from the birth date by reducing the month, day and year separately to single digits, adding those three results, and reducing again. The pair is then read in two layers: the two numbers side by side, and their combined total, which describes the relationship itself as a third character in the story.",
      "The temperaments in brief run like this. A 1 partner brings initiative and independence, a 2 brings sensitivity and peacemaking, a 3 brings play, words and social warmth, a 4 brings loyalty and structure, a 5 brings change and appetite for experience, a 6 brings devotion and responsibility, a 7 brings depth and a need for space, an 8 brings ambition and directness, and a 9 brings compassion and big-picture meaning. An 11 partner is read as 11, intuitive and intense, with a 2 undertone.",
      "Read compatibility as a lens on dynamics, never as a verdict. Traditional numerology calls some pairs naturally harmonious and others growth pairs, but harmonious only means the friction is lower, not that the love is greater, and a growth pair often produces the stronger bond once both people understand the pattern. Any pair can work, and plenty of effortless-looking pairs fail through neglect."
    ],
    steps: [
      "Reduce each partner birth month, day and year separately, then add and reduce for each Life Path.",
      "Keep 11, 22 or 33 unreduced if one appears as a final Life Path total.",
      "Read the two numbers side by side for temperament, ease and likely friction points.",
      "Add the two Life Paths and reduce to find the couple number, the relationship theme."
    ],
    resultMeaning: [
      "Work through this verified example exactly. Partner 1 was born on 14 June 1990: the month is 6, the day 14 reduces to 5, and the year 1990 reduces through 19 to 1, so 6 plus 5 plus 1 gives 12, which reduces to a Life Path 3. Partner 2 was born on 25 December 1988: the month 12 reduces to 3, the day 25 reduces to 7, and the year 1988 reduces through 26 to 8, so 3 plus 7 plus 8 gives 18, which reduces to a Life Path 9. The pair is 3 and 9, both at the expressive, idealistic end of the spectrum: 3 brings play, words and social warmth, while 9 brings depth, compassion and big-picture meaning, and tradition counts this among the naturally harmonious pairs.",
      "Their combined couple number completes the reading. Adding 3 plus 9 gives 12, which reduces to 3, so the relationship itself runs on a 3 theme: this couple does best when they create things together and talk everything out, keeping life shared, verbal and playful. Name the growth edge honestly, because every pair has one. Here, the 3 partner can dodge the heavy conversations the 9 partner genuinely needs, while the 9 partner can turn intense and all-encompassing where the 3 partner needs lightness and air. Neither habit is a flaw: the 3 teaches the 9 to surface, and the 9 teaches the 3 to stay in the room."
    ],
    faqs: [
      {
        question: "How is Life Path compatibility calculated?",
        answer: "First calculate each partner Life Path by reducing the birth month, day and year separately, adding the three results and reducing again, keeping master numbers as final totals. Then read the two numbers together for temperament and friction, and add them for a couple number. The method is identical for both partners, which keeps the comparison fair."
      },
      {
        question: "Which Life Path pairs are considered most compatible?",
        answer: "Tradition favours pairs sharing an element of temperament: 1 with 3 and 5, 2 with 6 and 9, 3 with 5, 7 and 9, 4 with 6 and 8, and similar easy groupings. These describe lower friction, not better love."
      },
      {
        question: "What does the couple number mean in a reading?",
        answer: "The couple number is the reduced sum of the two Life Paths, and it describes the relationship itself: its shared theme, its habits and what it asks of both people. A couple number of 3 needs creation and conversation, while a 6 needs home and mutual care."
      },
      {
        question: "How do master numbers affect compatibility?",
        answer: "A partner with an 11, 22 or 33 Life Path is read on two levels: the master number on top and its reduced base, 2, 4 or 6, underneath. An 11 partner brings intuition and intensity with a sensitive 2 undertone, so they need both inspiration and gentleness."
      },
      {
        question: "Can an incompatible Life Path pairing still succeed?",
        answer: "Yes, and numerology at its most honest says so plainly. Compatibility describes dynamics: where ease lives and where work lives. It cannot measure commitment, kindness, attraction or timing, which decide real outcomes."
      }
    ]
  },
"shadow-work": {
    guideTitle: "Shadow Work Reflection Guide For Hidden Triggers",
    guide: [
      "The Shadow Work Reflection Guide helps you notice the reactions you would rather disown, then trace them to an unmet need you can actually address. You bring a recent moment that stung, shamed, or hooked you, and the guide walks you through naming the trigger, separating fact from interpretation, and choosing a small integrating action. It suits product reviews, family rows, friendship envy, or any ordinary friction where your response felt bigger than the situation itself seemed to warrant. Keep entries brief, dated, and private, so honesty stays easier than performance and older reactions can be compared calmly later.",
      "The method borrows from Carl Jung's idea of the shadow: qualities pushed out of conscious identity do not vanish, they surface sideways as projection, prickliness, or self-sabotage. This tool adapts that psychology-inspired lens into structured journaling rather than analysis by a clinician. You write quickly and privately, you resist editing for respectability, and you treat strong judgement of another person as a clue worth examining. Nothing here diagnoses you; the prompts simply organise honest self-observation so patterns become visible across several entries. Work with one incident at a time, because vague general confessions rarely reveal the specific story driving a particular reaction.",
      "Shadow material shows up in surprisingly varied cupboards. Unspoken anger may hide beneath excessive niceness, buried ambition beneath criticism of colleagues who self-promote, envy beneath moralising about other people's luck. Grief that was never mourned can appear as numbness, selfishness you condemn in others may mirror needs you forbid yourself, and hunger for approval can masquerade as people-pleasing followed by resentment. Playfulness, appetite, assertiveness, and creative hunger also get exiled when they once drew punishment. Each entry differs because the disowned piece differs. Notice too how often the hidden piece is not wicked, merely inconvenient, embarrassing, or badly timed for the image you maintain."
    ],
    steps: [
      "Pick one recent moment when your reaction felt disproportionate, sharp, or strangely hard to shake afterwards.",
      "Write the bare facts first, in one column, keeping interpretation and mind-reading completely out of that list.",
      "Add the story you told yourself and the need underneath it, using plain first-person language throughout.",
      "Finish by choosing one tiny owned action you can take this week that honours that need."
    ],
    resultMeaning: [
      "Consider Meera, a product designer who notices a sting of envy when a junior colleague's design is praised in a review meeting. Her three-column exercise reads: Trigger, the praise moment itself, colleagues applauding work that was not hers. Story she tells herself: 'there is only room for one creative star here', praise for another means demotion for her. Disowned Need underneath: her own ambition and wish to be recognised, which she has been calling vanity. Integration becomes one small owned action, she pitches her own shelved idea at the next sprint.",
      "Read your own entry the same way, as information rather than indictment. A trigger does not prove you are envious, angry, or selfish by nature; it points to a capacity or longing that has had too little legitimate room. This is a reflection and psychology-inspired practice, not therapy, and it cannot process trauma for you. If entries keep surfacing overwhelming memories, panic, or material linked to abuse, pause the journaling and seek support from a qualified therapist or counsellor instead of pushing deeper alone."
    ],
    faqs: [
      {
        question: "What exactly is the shadow in Jungian psychology terms?",
        answer: "Jung used shadow for everything about yourself that your conscious identity refuses to own, pleasant as well as difficult. Those disowned qualities keep influencing behaviour from outside awareness, as overreactions, projections onto colleagues, or repeated self-sabotage, until you deliberately acknowledge and reintegrate them."
      },
      {
        question: "How often should I do a shadow work journaling session?",
        answer: "Short, occasional sessions after real friction tend to teach more than daily digging for its own sake. Try one entry when a reaction lingers for hours, review several entries monthly for repeating stories, and stop whenever you feel flooded rather than reflective and curious."
      },
      {
        question: "Can shadow work replace therapy or professional mental health support?",
        answer: "No, and this guide never tries to. Journaling prompts can organise self-reflection, but they cannot assess trauma, diagnose conditions, or hold you safely through overwhelming material. Working with a qualified therapist or counsellor is the appropriate route when memories feel destabilising or persistent."
      },
      {
        question: "Why do I judge in others what I deny in myself?",
        answer: "Projection offers a shortcut: spotting a forbidden quality outside yourself feels safer than admitting it lives in you too. If someone's ambition, anger, or neediness irritates you intensely, ask what rule you impose on yourself about that same quality, and what it costs you."
      },
      {
        question: "What should I write when I feel completely blank or numb?",
        answer: "Start with the body and the bare sequence of events rather than hunting for feelings directly. Note tight shoulders, flat voice, urge to leave, then reconstruct who said what. Numbness itself is useful data, often marking a feeling that learned early to stay hidden."
      }
    ]
  },
  "yes-no-oracle": {
    guideTitle: "Yes No Oracle Cards For Clearer Daily Decisions",
    guide: [
      "The Yes/No Oracle Cards tool answers one focused question with a single draw that lands on Yes, No, or Maybe, labelled Neutral. You type or hold a specific question, draw once, and receive a short prompt to examine why that answer landed the way it did. It works best for everyday crossroads where you are circling, like accepting extra work, sending a message today, or booking something now versus waiting a little longer. Keep the stakes proportionate: small reversible choices suit this format well, whereas medical, legal, or large financial commitments deserve proper professional advice and real documentation.",
      "Honesty about method matters here: a card is selected at random from the three outcomes, and no hidden information about your future is being accessed. The value lies in your reaction. Relief, disappointment, resistance, or confusion after seeing the card often reveals a preference you had been suppressing, or a missing fact you had skipped. Treat the draw as a decision-clarifying reflection exercise, a structured pause, rather than an instruction that removes your responsibility for choosing. Writing your reaction down within a minute helps, because the first unedited response is usually more revealing than later rationalisations.",
      "Each outcome asks something different of you. Yes invites you to check practical readiness, costs, timing, and whether enthusiasm survives those checks. No invites you to separate genuine unsuitability from fear of discomfort, and to notice what alternative the refusal protects. Maybe, the Neutral result, signals unresolved variables: unclear terms, another person's unconfirmed availability, your own depleted energy, or a question phrased too vaguely to answer responsibly. Reading which situation matches yours matters more than the word printed on the card itself. Afterwards, convert the reading into calendar reality: a call made, a price confirmed, a deadline checked, or a deliberate decision to wait."
    ],
    steps: [
      "Phrase one question about your own action, beginning with words like should I, focused on a single topic.",
      "Take two slow breaths, reread the question aloud, and remove any second question hiding inside it.",
      "Draw a single card and sit with your immediate emotional reaction before reading any interpretation text.",
      "Write down one concrete step the outcome suggests, or one missing fact you now need to check."
    ],
    resultMeaning: [
      "Suppose the question is 'Should I say yes to the Saturday freelance project?' and the draw returns MAYBE, the Neutral card. Learn from that result correctly: a neutral card means information is missing, not a soft yes you can round up to permission. The rate, deadline, and your weekend energy are apparently unsettled. A better follow-up question is: 'What do I need to know about taking on the Saturday project?' Ask about pay, hours, and revision limits first, then decide with those facts in hand.",
      "Hold three rules firmly around any draw. Keep one topic per question, keep your own agency inside the wording, asking 'should I...' about your choices, not 'will he...' about controlling someone else. And do not re-draw the same question the same day hoping for a different card; that turns reflection into shopping for permission. Wait until circumstances actually change, new information arrives, terms are clarified, or a deadline genuinely shifts, before asking again. The card clarifies your thinking, never predicts an outcome."
    ],
    faqs: [
      {
        question: "Is a Maybe or Neutral result basically a gentle yes?",
        answer: "No. Neutral points to information you do not yet hold, terms that remain vague, timing that has not settled, or energy you have not honestly assessed. Rounding it up to yes defeats its purpose. Gather the missing fact first, then make the decision yourself with clearer ground."
      },
      {
        question: "How many times can I ask the same question again?",
        answer: "Once per set of circumstances is the useful limit. Redrawing within hours because you disliked the first card teaches nothing and usually increases anxiety. Return only after something material changes, such as new pricing, a confirmed schedule, a conversation that resolves uncertainty, or a genuinely different option appearing."
      },
      {
        question: "What makes a good yes or no oracle question?",
        answer: "Good questions concern your own next action, name a single topic, and can genuinely be answered yes or no today. Should I send the proposal this evening works well. Vague questions about another person's secret feelings, or double questions bundling money and timing together, produce muddled reflection."
      },
      {
        question: "Can this oracle predict whether someone else will act?",
        answer: "No card can forecast another person's free choices, and framing questions that way quietly hands your agency away. Rephrase around what you control: whether you will ask, wait, set a boundary, or walk away. Your reaction to the draw can clarify that choice, nothing more mystical is claimed."
      },
      {
        question: "What should I do if the card upsets or disappoints me?",
        answer: "Treat that flash of disappointment as the most honest data in the whole exercise. It usually reveals which answer you were secretly hoping for, and why. Sit with that preference, examine its reasons and costs, and let it inform your decision alongside practical facts and timing."
      }
    ]
  },
  "higher-self-oracle": {
    guideTitle: "Higher Self Oracle For Quiet Reflective Guidance",
    guide: [
      "The Higher Self Oracle offers open-ended guidance messages for reflection when a decision feels noisy, tangled, or emotionally overloaded. Instead of answering yes or no, it presents a short themed message to sit with, test against your values, and translate into one grounded action. People use it while weighing relocation, career changes, relationship pacing, or creative direction, moments when the facts are partly known but inner priorities have not yet been sorted into a clear order. Sessions work best unhurried, perhaps weekly, with earlier messages revisited to see which insights survived contact with ordinary life.",
      "Within its belief framework, the higher self names your calmer, wider perspective, the part supposedly less driven by fear, habit, or other people's urgency. This page makes no claim that messages arrive as literal channelled facts from an external being. Practically, you are using quiet sitting, a written question, slow breathing, and a randomly drawn reflective message to bypass mental chatter. Whether you read that spiritually or psychologically, the discipline is identical: receive slowly, question honestly, act modestly. Keeping a dedicated notebook helps separate genuine recurring insight from one-off moods that merely felt profound in the moment.",
      "Messages here cluster around recurring human themes rather than verdicts. Patience themes ask where rushing is masquerading as decisiveness, release themes point to grudges or old identities consuming present energy, and courage themes highlight conversations postponed out of politeness. Other draws emphasise rest before commitment, gratitude that recalibrates comparison, boundaries around time, or trust built through small kept promises. The same theme reads differently depending on your question, which is precisely why journalling your context beside the message matters more than memorising generic meanings."
    ],
    steps: [
      "Sit somewhere quiet, write your question by hand, and read it slowly three times before drawing.",
      "Breathe slowly for one full minute, letting your shoulders drop, without trying to force any particular feeling.",
      "Draw your guidance message and copy it word for word into your journal beneath the question.",
      "Record your first honest response, then choose one small real-world step the message reasonably suggests today."
    ],
    resultMeaning: [
      "Picture someone weighing whether to relocate to another city for a job, following the sitting in second person. You quieten, write the question plainly, breathe slowly until the mental noise thins, then receive the guidance message. The theme drawn is 'Trust the slow yes': enthusiasm that survives waiting, research, and sleep is sturdier than urgency. Test the message properly. Does it feel calm rather than urgent? Does it fit your values? Journal it, then take one small real-world step, research one neighbourhood, instead of treating the message as an instruction.",
      "That testing step separates this practice from blind obedience. Guidance that demands instant, irreversible action, flatters your ego extravagantly, or contradicts your settled values deserves scepticism, however beautifully phrased. This oracle also differs clearly from a yes-no draw: that tool returns a single binary-style answer for a narrow question, while this one offers open guidance for reflection over days. It is a contemplative practice within a belief framework, useful for perspective, not a source of verified facts about employers, cities, or outcomes."
    ],
    faqs: [
      {
        question: "How is this different from the yes no oracle cards?",
        answer: "The yes-no tool compresses a narrow question into one of three short answers for quick reflection. This oracle deliberately avoids binaries, offering a themed message you examine, journal, and test against values over time. Use the first for small timing choices, this one for layered life questions."
      },
      {
        question: "How can I tell if a guidance message is trustworthy?",
        answer: "Apply ordinary tests before spiritual ones. Trustworthy-feeling messages tend to arrive calm rather than frantic, respect your freedom, align with values you already hold, and survive a night of sleep. Messages pushing secrecy, haste, superiority over others, or costly irreversible leaps should be questioned hard, then likely set aside."
      },
      {
        question: "Do I need to meditate before using the higher self oracle?",
        answer: "A long meditation practice is not required, but arriving rushed and distracted usually produces rushed and distracted reading. One minute of slow breathing, a handwritten question, and a quiet seat are enough scaffolding for most people. Consistency of that small ritual matters more than elaborate preparation or special equipment."
      },
      {
        question: "What if the message seems unrelated to my question entirely?",
        answer: "Write it down anyway and look sideways rather than literally. Sometimes an apparently unrelated theme names the background condition, exhaustion, grief, money worry, that is actually distorting the foreground decision. If no honest connection emerges after journalling, set it aside without forcing meaning; not every draw deserves deep decoding."
      },
      {
        question: "Can the higher self oracle tell me what to do?",
        answer: "It should not, and any reading style that removes your judgement is worth avoiding. A message can highlight a value, slow your pace, or suggest one modest experiment, but employers, leases, and relationships require real information too. Pair every message with research, conversation, and practical checking before committing."
      }
    ]
  },
  "past-life-tarot": {
    guideTitle: "Past Life Tarot Three Card Root Lesson Gift",
    guide: [
      "The Past Life Tarot tool lays out three cards in a fixed spread, Root, Lesson, and Gift, framed as a previous chapter whose patterns might echo in your present life. You draw the three positions together, read each card inside its assigned role, then look for a story connecting them. It suits recurring fascinations, unexplained affinities, stubborn emotional loops, or talents that feel older than your training, approached as material for reflection rather than biography. One spread per question, recorded in a journal with the date, keeps the exercise grounded and prevents endless reshuffling for a preferable storyline.",
      "Framing is explicit and non-negotiable on this page: this is an archetypal storytelling and reflection exercise, not evidence or proof of literal past lives. Tarot images carry centuries of human symbolism, scholars, hermits, grief, apprentices, which makes them effective mirrors for present patterns whether or not you hold reincarnation beliefs. You are borrowing a narrative frame to examine yourself from an unusual angle. Take what resonates as a mirror, leave the rest without argument, and never base medical, financial, or relationship verdicts on a spread. Photographing the layout before clearing it preserves details you may only appreciate after reflection.",
      "Read each position by its job in the story. Root cards describe an originating pattern, solitary study, communal duty, exile, craft, devotion, or survival, that supposedly set the tone. Lesson cards name unfinished learning, often grief, trust, power, patience, or surrender, shown through challenge imagery. Gift cards close the spread with a capacity carried forward, practical skill, intuition, teaching, endurance, or warmth, expressed in usable form today. Major arcana in any position tends to feel thematic and long-range, while pip cards usually describe concrete habits and situations."
    ],
    steps: [
      "Hold one present pattern or fascination in mind, shuffle slowly, and state that you are exploring it symbolically.",
      "Draw three cards in order, placing them left to right as Root, Lesson, and Gift positions.",
      "Read each card only within its position first, writing two sentences per position before connecting them.",
      "Journal where the combined story resembles your current life, and name one behaviour you will test changing."
    ],
    resultMeaning: [
      "A complete example draw shows the method. Position 1, Root, is The Hermit, a solitary, study-centred pattern, someone who learned by withdrawing, reading, and watching rather than joining in. Position 2, Lesson, is Five of Cups, grief that fixates on what was spilled, learning to turn toward what remains standing behind you. Position 3, Gift, is Page of Pentacles, patient, practical craftsmanship carried into this life, slow skill-building, honest apprenticeship, care with money and materials. Across the three, withdrawal taught discernment, grief taught redirection, and both left diligence.",
      "Notice how the example never claims those events literally happened to anyone. That restraint is the whole discipline, and it also separates this spread from a standard tarot reading such as the love or career layouts elsewhere on this site, which address present choices directly. Here the Root, Lesson, Gift positions deliberately route through a previous chapter frame. Use journalling prompts afterwards: where do I still withdraw by default, what spilled thing still faces me, which slow craft quietly sustains my present life today?"
    ],
    faqs: [
      {
        question: "Does a past life tarot reading prove I lived before?",
        answer: "No, and this tool does not claim otherwise. The spread is a storytelling mirror built from archetypal images, useful for examining present patterns from a fresh angle. Whether you personally believe in reincarnation or treat the frame purely metaphorically, the reflective value works identically, without requiring historical claims about your soul."
      },
      {
        question: "What do the Root Lesson and Gift positions each mean?",
        answer: "Root describes the originating pattern or setting of the imagined previous chapter, the conditions everything else grew from. Lesson names the unfinished learning that pattern produced, often shown through a challenging card. Gift closes the story with a strength, skill, or sensitivity supposedly carried forward into your present life."
      },
      {
        question: "How is this spread different from a normal tarot reading?",
        answer: "Standard layouts on this site, including love and career readings, examine your current situation and choices directly. This spread assigns every card a role inside a previous chapter narrative, Root, Lesson, Gift, so interpretation flows through that story frame first, and only afterwards gets compared honestly with your life today."
      },
      {
        question: "What if I draw frightening or heavy cards in the spread?",
        answer: "Heavy imagery usually symbolises heavy themes, grief, endings, conflict, rather than predicting harm or confirming dark histories. Read the card's lesson inside its position, keep the reflection focused on present-day patterns you can influence, and stop if a theme feels genuinely distressing. No card here diagnoses trauma or obliges belief."
      },
      {
        question: "Can I redraw the spread if the first cards confuse me?",
        answer: "Resist immediate redraws, which usually chase a preferred story instead of reading the one offered. Sit with confusing cards, journal associations per position, and look for the connecting thread across all three. If nothing resonates honestly, note that outcome too, close the session, and return another week with fresh eyes."
      }
    ]
  },
"business-name-numerology": {
    guideTitle: "Match Your Business Name to Life Path",
    guide: [
      "This matcher compares two numbers side by side: the vibration carried by your company name and the Life Path number drawn from your own birth date. When the pair sits comfortably together, the name tends to feel natural to introduce, print and defend. When they pull in opposite directions, founders often describe extra effort around decisions, hiring or direction, even though the underlying business idea itself remains perfectly sound and workable. Because the founder usually makes the earliest choices alone, that personal fit matters most during registration, branding and the first hires, before partners or investors dilute the original pattern with numbers of their own.",
      "Both sides use plain addition. Your birth date is written out digit by digit and totalled, then shrunk by adding its digits together until one figure from one to nine remains. The company name follows Pythagorean letter values, where each letter carries a value between one and nine in repeating alphabetical order. Each word is totalled separately first, then those word totals are combined before the final reduction happens. Work on paper at least once, keeping every raw word total visible, because most errors creep in when someone reduces a single word too early and then builds the rest of the comparison on that mistaken figure.",
      "Three broad relationships appear. An exact match repeats your own core pattern inside the business, which suits owner-led work. A complementary pairing joins two different strengths, such as a creative founder behind a structured name. Friction pairings place contrasting drives together; they can still succeed, yet they usually ask for clearer roles, written agreements and slower choices around money, partners and expansion timing. Read friction as information rather than a verdict: it highlights where the business will demand behaviour that does not come automatically to you, which is exactly where routines, advisers and documented processes earn their keep."
    ],
    steps: [
      "Enter your full birth date exactly as recorded, including the complete four digit year.",
      "Work out your Life Path total first so the comparison target stays fixed and clear.",
      "Type the trading name precisely as customers see it, leaving out legal endings for now.",
      "Compare the reduced name number with your Life Path, then test any spelling variant separately."
    ],
    resultMeaning: [
      "Take a founder born 14 February 1988. Adding every digit gives 1+4+0+2+1+9+8+8 = 33, and 3+3 = 6, so the Life Path is 6. Now score the name AURA LIVING. AURA = 1+3+9+1 = 14, which reduces to 5. LIVING = 3+9+4+9+5+7 = 37, which becomes 10 and then 1. Combine the raw word totals first, 14+37 = 51, and 5+1 = 6. Name number 6 lands exactly on Life Path 6: a match, where a nurturing, service-led brand fits a 6 founder comfortably. A homeware or interiors venture suits that pairing especially well, because six emphasises home, responsibility and repeat customers who feel personally looked after.",
      "Notice how fragile that balance is. Adding the word STUDIO, scored 1+2+3+4+9+6 = 25 and reducing to 7, would move the running total to 51+25 = 76, then 13, then 4. The business has not changed, yet the name now leans corporate and procedural rather than caring. Treat suffixes, initials and legal words as real ingredients, check each version separately, and remember that bookkeeping, product quality and pricing still decide commercial outcomes far more than any name score. Use the matcher to shortlist names you already like, then let availability, trademark checks and honest customer reactions make the final call between close candidates."
    ],
    faqs: [
      {
        question: "Should my company name number exactly match my Life Path?",
        answer: "An exact match is the simplest fit, especially for a solo founder whose name and reputation carry the business. It is not compulsory. Complementary pairings often work beautifully because the name supplies a quality the founder lacks, balancing instinct with structure."
      },
      {
        question: "Do spaces and separate words change the final name calculation result?",
        answer: "Spaces themselves carry no value, but splitting the name into words matters for checking your working. Total each word on its own, add those raw totals together, and only then reduce. Reducing too early can hide the true combined total completely."
      },
      {
        question: "Should I include Ltd, LLP or Private Limited in the name?",
        answer: "Score the customer-facing trading name first, because that is the version people actually say and remember. Then score the full registered version separately. If the two differ sharply, many founders keep the harmonious trading name and reserve the legal form for paperwork."
      },
      {
        question: "Can I adjust the spelling slightly to improve the final match?",
        answer: "Yes, small changes are the traditional lever here: adding or dropping a letter, using an initial, or choosing a plural over a singular. Keep the result easy to spell aloud, available as a domain, and clear of trademark conflicts before committing anywhere."
      },
      {
        question: "What happens if my business has two equal founding partners?",
        answer: "Calculate both Life Paths and score the name against each person separately. A name that sits comfortably with both is ideal, though rarely perfect. Where one pairing shows friction, agree decision rights in writing so the weaker fit never becomes a recurring argument."
      }
    ]
  },
  "brand-numerology": {
    guideTitle: "How Customers Feel Your Brand Name Vibration",
    guide: [
      "A brand name does its work in the first seconds, on a shelf, a search result or a spoken recommendation. This guide reads that outward impression: what feeling the letters project before anyone samples the product. It is less about who founded the company and far more about the mood a stranger absorbs from the name alone, at speed, surrounded by competing choices. Shoppers rarely analyse that reaction; they simply drift towards packaging that feels right for the price being asked, and drift away from names whose tone quietly contradicts the promise printed underneath them.",
      "Two layers deserve attention. First comes the compound total, the full sum of every letter before any shrinking happens, which practitioners read as an undertone colouring the headline figure. Then that total is added across itself until a single digit remains, giving the surface personality. Sound matters alongside arithmetic: hard consonants feel firmer, open vowels feel warmer, and shorter names usually register faster in busy aisles and feeds. Length changes memory as well, since a compact name survives a hurried voice note or a half-heard radio mention, while a longer coined word may need repeated exposure before customers reproduce it accurately. That first-exposure test mirrors how buyers actually meet a name, briefly and distractedly, among many louder alternatives competing nearby.",
      "Each reduced figure lands differently with buyers. One feels pioneering, two feels gentle and reassuring, three feels playful and talkative. Four suggests reliability, five promises movement and novelty, six wraps a product in care, seven hints at expertise and mystery, eight projects premium confidence and commercial weight, while nine reads compassionate and global, suited to causes, wellness ranges and community-led labels. None of these readings flatters every category: the playful three that sells snacks beautifully could undermine a funeral service, and the weighty eight that suits private banking might chill a children's toy range, so context always outranks the digit."
    ],
    steps: [
      "Write the brand exactly as printed on packaging, including any shortened shelf version you use.",
      "Score every letter with Pythagorean values and keep the full compound total before reducing.",
      "Reduce the compound total to one digit and note both layers side by side.",
      "Say the name aloud three times, then judge sound, length and shelf presence honestly."
    ],
    resultMeaning: [
      "Consider the skincare name LUMORA. Scoring it letter by letter gives L3+U3+M4+O6+R9+A1 = 26, and 2+6 = 8. Hold both layers in view. The compound 26 lingers as an undertone, a quieter note beneath the surface reading, while the reduced 8 does the public work: premium, authoritative, commerce-strong, the sort of figure associated with flagship products, confident pricing and polished counters rather than bargain baskets or homemade charm. Spoken aloud, the name also opens softly and closes open, which keeps that authority from sounding harsh when a consultant says it across a counter.",
      "Trim the name and the impression shifts. MORA alone scores 4+6+9+1 = 20, reducing to 2, and suddenly the same family of letters feels softer, care-led and intimate, closer to a boutique balm than a luxury serum line. Neither version is better in isolation. Choose according to price point, audience and setting, and test the favourite on real packaging mock-ups before printing anything permanent. Show both versions to people who match your intended buyer, without explaining the numbers first, and record the adjectives they volunteer; that unprompted language usually confirms or challenges the reading more honestly than any score sheet."
    ],
    faqs: [
      {
        question: "What is a compound number in brand name numerology practice today?",
        answer: "It is the full letter total before reduction, such as 26 in the worked example. Practitioners treat it as background colouring behind the final single digit. Two names can share the same reduced figure yet feel different because their compound totals diverge underneath."
      },
      {
        question: "Which reduced number feels most premium to shoppers in stores?",
        answer: "Eight is usually read as the premium, executive figure, linked with authority, durability and confident pricing. That helps luxury and professional ranges, but it can feel distant for friendly, handmade or budget products, where warmer figures often connect far more quickly with buyers."
      },
      {
        question: "Does pronunciation really matter alongside the number when customers choose?",
        answer: "Yes. A strong score cannot rescue a name people stumble over, mishear on the phone or hesitate to recommend. Read it aloud in a sentence, imagine it announced in a shop, and check that strangers can spell it after hearing it once."
      },
      {
        question: "Should product names and the parent brand name agree numerically?",
        answer: "They do not need identical figures, but wildly clashing tones confuse the range. A premium parent brand carrying a playful budget sub-brand can work when the difference is deliberate. Map every product name, note its reduced figure, and look for a coherent family pattern."
      },
      {
        question: "Can a domain extension or tagline change overall brand vibration?",
        answer: "In strict letter scoring, only letters count, so a tagline absolutely changes the total if you choose to include it. Most practitioners score the core name alone for clarity, then test the tagline version separately when the two always appear together in public."
      }
    ]
  },
  "atmakaraka": {
    guideTitle: "Find Your Atmakaraka the Soul King Planet",
    guide: [
      "In Jaimini astrology every chart contains one planet that outranks the rest for soul-level questions, and this finder identifies it. Called the Atmakaraka, literally the significator of the self, it is whichever of the seven visible planets sits furthest through its sign. Its sign, house and condition describe the territory where your deepest lessons, longings and maturing work tend to gather across a lifetime. Practitioners return to this planet repeatedly because its themes rarely stay quiet for long; relationships, vocations and turning points keep circling back to whatever it represents in that particular chart.",
      "The measurement is taken inside the sign, never across the whole zodiac. Each planet's position is expressed as degrees travelled within its own sign, on a scale running from zero to thirty, using the sidereal zodiac of the Vedic tradition. Rank those within-sign degrees from largest to smallest and a complete sequence of chara karakas, or movable significators, emerges, with each planet taking a distinct role in the resulting order. Because only the degree figure decides the ranking, two charts with identical sign placements can produce different karakas, which is why copying a friend's result because your signs look alike leads straight into error.",
      "Any planet can wear this crown. The Sun in this seat turns lessons toward authority and self-respect, the Moon toward feeling and belonging, Mars toward courage and desire, Mercury toward speech and skill, Jupiter toward belief and guidance, Venus toward love and value, and Saturn toward endurance, duty and time. The finder simply names the planet; interpretation begins with where it sits and what it touches. A strongly placed Atmakaraka often feels like a talent with obligations attached, while a challenged one tends to describe the recurring difficulty the person eventually understands better than anyone around them."
    ],
    steps: [
      "Use a sidereal Vedic birth chart and list every planet with its degrees inside its sign.",
      "Ignore the sign names for ranking and compare only the within-sign degree figures.",
      "Place the largest degree first: that planet is your Atmakaraka, the soul planet.",
      "Continue ranking downward to reveal the remaining karakas in their correct sequence."
    ],
    resultMeaning: [
      "Read this sample ranking carefully. Moon 28 degrees, Saturn 25 degrees, Jupiter 22 degrees, Mercury 17 degrees, Sun 12 degrees, Mars 9 degrees, Venus 5 degrees. The Moon travels furthest, so the Moon becomes Atmakaraka, pointing to lessons through emotion, mother, care and public life. Saturn at 25 degrees follows as Amatyakaraka, the career significator. Jupiter at 22 degrees is Bhratrikaraka, Mercury at 17 degrees is Matrukaraka, Sun at 12 degrees is Putrakaraka, Mars at 9 degrees is Gnatikaraka, and Venus at 5 degrees closes the list as Darakaraka in this seven-karaka scheme. Notice the spacing: only three degrees separate the top two, yet the roles assigned to them remain entirely distinct.",
      "Two technical points prevent most mistakes. Degrees are measured within the sign, from 0 to 30, in the sidereal zodiac, so a planet at 28 degrees of any sign outranks one at 5 degrees of a later sign. Also, an eight-karaka scheme exists which adds Rahu, and Rahu is handled in reverse: its effective degree is 30 minus the degree shown, because Rahu moves backwards. Keep one scheme consistently throughout any single reading. Mixing schemes halfway through produces duplicated roles and missing significators, a muddle that says more about the method used than about the person whose chart is being read."
    ],
    faqs: [
      {
        question: "What does the word Atmakaraka actually mean in simple everyday words?",
        answer: "It means the significator of the soul. The planet holding the highest within-sign degree is treated as the chart's king, the main teacher whose themes keep returning. Its sign shows the style of those lessons and its house shows the life area involved."
      },
      {
        question: "Why are planet degrees measured only within each individual sign?",
        answer: "Jaimini ranking compares how far each planet has matured through its own sign, not where the sign falls in the zodiac. A planet at 27 degrees of Aries therefore outranks a planet at 10 degrees of Taurus, even though Taurus comes later in sequence."
      },
      {
        question: "What changes in the eight karaka scheme with Rahu included?",
        answer: "Rahu joins the ranking, giving eight significators instead of seven, and one extra role, usually counted between the existing ones. Because Rahu travels in reverse motion, its degree is flipped: subtract the shown degree from 30 before placing it in the order."
      },
      {
        question: "Can two different planets tie for the highest degree position?",
        answer: "Exact ties down to minutes and seconds are rare, so compare the full position including minutes before deciding. When figures remain extremely close, experienced practitioners examine both planets and the houses they rule, rather than forcing a single winner from rounded degree numbers alone."
      },
      {
        question: "Does the Atmakaraka ever change as planets move after birth?",
        answer: "No. Chara karakas are fixed from the birth chart for the whole life, which is precisely why they are used for long-range soul themes. Transiting planets move constantly, but the natal ranking, and the identity of your Atmakaraka, stays exactly where birth placed it."
      }
    ]
  },
  "financial-astrology-cycles": {
    guideTitle: "Planetary Cycles Eras and Personal Review Windows",
    guide: [
      "This guide lays three slow planetary rhythms over one another so you can place a year in its wider setting. It offers educational timing context: which era a period belongs to, and when a personal review window arrives. It does not forecast prices, pick assets or signal trades, and it should be read as background reflection material alongside ordinary financial planning, never instead of it. Think of it as a calendar with unusually long chapters, helpful for organising reflection across decades, and far too coarse for anything that requires a date, a price or a decision deadline.",
      "The layers move at different speeds. Jupiter completes one full circuit in roughly 12 years, spending about one sign a year, and astrologers associate its rounds with phases of expansion and optimism. Saturn needs about 29.5 years per circuit, roughly 2.5 years a sign, linked with consolidation and testing. Where Jupiter and Saturn meet, roughly every 20 years, a great conjunction opens a fresh era in the traditional reading. Layering matters because a single year can sit inside a buoyant Jupiter phase while belonging to a sober Saturn chapter, and that mixed picture is precisely why simple one-planet forecasts collapse under scrutiny.",
      "Recent conjunction dates anchor the scheme. May 2000 brought a meeting in Taurus, December 2020 brought one in Aquarius and was read as opening an air-sign era, and the next falls in November 2040 in Libra. Personal timing sits inside these eras: a Saturn return, when transiting Saturn reaches its birth position after about 29.5 years, is treated as a structured moment for reviewing commitments rather than a market event. Earlier generations of astrologers tracked the same meetings through agricultural and dynastic changes, which explains the era language, even though modern economies move for reasons those writers never encountered."
    ],
    steps: [
      "Locate the current era first by finding the most recent Jupiter Saturn great conjunction date.",
      "Note where Jupiter sits this year to place the shorter expansion rhythm inside that era.",
      "Calculate your own Saturn return window by adding roughly 29.5 years to your birth year.",
      "Use the result only to schedule reviews of debt, commitments and career structure."
    ],
    resultMeaning: [
      "Work through a personal example. Someone born in 1996 adds Saturn's round of about 29.5 years and arrives at 1996 + 29.5, approximately 2025.5, so their Saturn return falls around 2025-26. Framed responsibly, that window simply prompts an adult audit: Are long-term commitments still affordable? Is debt structured sensibly? Does the career framework built in the twenties still fit? The era backdrop matters too, since this return unfolds inside the air-sign era opened in December 2020. A second Saturn return would arrive near the mid-fifties by the same arithmetic, often coinciding with retirement planning in ordinary life.",
      "Hold the limits firmly. Economists do not use these cycles, textbooks on markets do not cite them, and past occasions where a conjunction roughly coincided with a market turn are coincidences until proven otherwise, which they have not been. Cycles here describe eras and personal review windows, never buy or sell signals. Anyone needing investment direction should consult a regulated adviser and rely on evidence-based analysis, budgets and risk limits. Kept in that modest place, the material can still be genuinely useful: a memorable prompt, arriving at adult milestones, to review paperwork most people postpone for years."
    ],
    faqs: [
      {
        question: "Is financial astrology a reliable way to predict markets accurately?",
        answer: "No reliable evidence supports that claim, and this guide makes no such promise. Markets respond to earnings, interest rates, policy and human behaviour at enormous scale. Treat planetary cycles as a reflective calendar for personal reviews, and base actual money decisions on documented evidence."
      },
      {
        question: "How often do Jupiter and Saturn hold great conjunctions together?",
        answer: "Roughly every 20 years, because Jupiter's faster 12-year circuit gradually laps Saturn's slower one. Recent meetings fell in May 2000 in Taurus and December 2020 in Aquarius, and the following one is expected in November 2040 in Libra, continuing the newer air-sign sequence."
      },
      {
        question: "What should I actually do during my Saturn return period?",
        answer: "Use it as a diary prompt, not a warning. Review pension contributions, insurance cover, debts, contracts and career direction with fresh eyes, ideally alongside a qualified adviser. People often restructure commitments at this age anyway, which explains the return's reputation without needing any prediction."
      },
      {
        question: "How long does Jupiter spend in each zodiac sign approximately?",
        answer: "About one year per sign, because its full circuit takes roughly 12 years. Financial astrologers read that annual shift as changing the flavour of optimism and growth themes. It is a slow background rhythm, useful for era language, and far too broad for timing individual trades."
      },
      {
        question: "Why does Saturn take about two and a half years per sign?",
        answer: "Saturn's full journey around the zodiac lasts about 29.5 years, and dividing that span by twelve signs gives roughly 2.5 years in each. That slow pace is why Saturn transits feel like extended chapters, and why its return near age thirty carries such weight in tradition."
      }
    ]
  },
"personality-number": {
    guideTitle: "Personality Number Calculator: Your Outer Self Explained",
    guide: [
      "Your Personality Number describes the version of you that strangers, colleagues and new acquaintances encounter before anything deeper is known. Derived only from the consonants in your full birth name, it points to outward manner, first-impression style and the social surface you present without much conscious effort. Some people come across as brisk and organised, others as warm, witty or quietly reserved, even when their private inner life feels quite different. This calculator isolates that outer layer so you can compare the face you show with the person you know yourself to be underneath.",
      "The method uses the Pythagorean letter table, where each letter carries a value from 1 to 9 in repeating order. Vowels are set aside completely here, and only consonants are added together, then reduced by adding digits until a single figure remains. One letter needs care: Y counts as a consonant unless it forms the only vowel sound inside a syllable, as it does in names like Lynn, where it behaves like a vowel and is skipped. Spell the name exactly as given at birth, because later nicknames change the consonant set and therefore the result.",
      "Read across the range as nine social styles. One arrives decisive and self-assured, two gentle and diplomatic, three lively and expressive, four dependable and grounded. Five seems restless and adaptable, six caring and responsible, seven thoughtful and hard to read, eight composed and executive, nine generous and broad-minded. Master totals 11 and 22 are sometimes kept unreduced before the final step, giving an intense, high-voltage version of 2 or 4: the perceptive diplomat or the commanding builder. None of these styles is better; each simply colours how quickly people trust, approach or underestimate you."
    ],
    steps: [
      "Write your full birth name exactly as recorded, including middle names if you have them.",
      "Cross out every vowel, leaving only the consonant letters in each part of the name.",
      "Convert each remaining letter using the Pythagorean values shown alongside the calculator.",
      "Add each name part separately, reduce the parts, then combine and reduce once more."
    ],
    resultMeaning: [
      "Take the name Asha Verma as a worked example. In ASHA the consonants are S and H only, because both A's are vowels and are skipped: S is 1 and H is 8, giving 9. In VERMA the consonants are V, R and M: 4 plus 9 plus 4 equals 17, which reduces to 8. Adding the two parts, 9 plus 8 equals 17, reduced again to 8. A Personality Number of 8 suggests the world first meets someone composed, capable and quietly executive, comfortable with responsibility and difficult to rattle, long before it discovers her private hopes, doubts or tenderness.",
      "Keep the three name numbers separate in your mind, because each answers a different question. Vowels alone produce the Soul Urge, the inner desire motivating you privately. Consonants alone produce this Personality number, the outer style other people describe. Every letter together produces the Destiny or Expression number, the broader talents the full name is said to carry. Confusion usually comes from mixing these layers. Your outer 8 might look entirely in control on a day when an inner number feels uncertain, and that gap is information, not contradiction: it shows where presentation and private experience diverge."
    ],
    faqs: [
      {
        question: "How is the Personality Number different from the Soul Urge number?",
        answer: "Soul Urge comes from vowels and speaks about private motivation, what you quietly want from life. Personality comes from consonants and speaks about presentation, what others experience when they first meet you. Reading both together shows the gap between inner longing and outward manner."
      },
      {
        question: "Which full name should I use for calculating this number correctly?",
        answer: "Use the full name given at birth, spelled as it was originally recorded, including a middle name where one exists. Married names, stage names and everyday nicknames create different consonant totals, so numerologists treat them as separate overlays rather than replacements for the birth result."
      },
      {
        question: "Why is the letter Y sometimes counted differently in name calculations?",
        answer: "Y switches roles depending on sound. It counts as a consonant in names like Yasmin, where a vowel follows it. When Y provides the only vowel sound in a syllable, as in Lynn or Bryn, treat it as a vowel and leave it out here."
      },
      {
        question: "What does a master number mean in this Personality Number result?",
        answer: "If your consonant parts total 11 or 22 before final reduction, many traditions pause and read that master form first. Eleven heightens the perceptive, diplomatic qualities of 2, while 22 magnifies the practical building force of 4, before you also consider the reduced single digit underneath."
      },
      {
        question: "Can my Personality Number change during my life as I grow older?",
        answer: "The birth-name result itself stays fixed, because the birth name does not change. What evolves is how consciously you use it. Someone who understands their outer style can soften, sharpen or relax it deliberately, even though the underlying number calculated from the original name remains constant."
      }
    ]
  },
  "personal-year": {
    guideTitle: "Personal Year Number: Planning Your Nine-Year Cycle",
    guide: [
      "Your Personal Year Number identifies which stage of a repeating nine-year epicycle you are living through in a given calendar year. Rather than describing your permanent character, it highlights the kind of work a particular year keeps asking of you: whether life is pushing fresh starts, patient cooperation, building, pruning or completion. This calculator adds your birth month and birth day to the digits of the year in question, giving a planning lens you can hold against decisions about work, home, study, money and relationships across twelve whole months.",
      "The arithmetic stays deliberately simple. Reduce your birth month and birth day if they are two digits, reduce the calendar year by adding its four digits together, then combine all three pieces and reduce again. When the final total lands on 11 or 22, many practitioners keep that master form and read it alongside its reduced value, as an amplified version rather than a separate destiny. Your cycle also runs in sequence, so context matters: knowing whether this year follows a beginning or precedes a ending changes how urgently you should push, wait or let something finish.",
      "Across a full cycle, each year carries distinct planning work. Year 1 suits launching and choosing a direction; 2 asks for patience, partnership and quiet consolidation; 3 favours communication, visibility and rebuilding confidence. Year 4 is for systems, budgets and durable foundations, 5 for deliberate change and repositioning, 6 for home, duty and repairing commitments. Year 7 rewards study, review and stepping back before deciding, 8 focuses effort, earning and claiming authority, and 9 asks what must be completed, forgiven or released before the next cycle opens. Planning with, not against, that sequence is the point."
    ],
    steps: [
      "Enter your birth month and birth day, ignoring your year of birth completely.",
      "Add the four digits of the calendar year you want to examine.",
      "Combine the reduced month, day and year figures into one final total.",
      "Reduce to a single digit, noting 11 or 22 if it appears."
    ],
    resultMeaning: [
      "Consider someone born on 5 May who wants to understand 2026. The birth month is 5 and the birth day is 5, both already single digits, so nothing changes there. The year 2026 reduces as 2 plus 0 plus 2 plus 6 equals 10, then 1. Adding the three pieces gives 5 plus 5 plus 1 equals 11. Instead of reducing further, the tradition keeps master number 11 and reads it as 11/2: a heightened, intuitive year resting on a sensitive, cooperative 2 base, where listening, timing and alliances matter more than forcing outcomes alone.",
      "Place that result inside its sequence before acting on it. An 11 year arriving after a 1 year of beginnings often tests whether a new direction can deepen through trust and collaboration, rather than demanding another dramatic restart. Treat the number as a prompt for reflection when you plan the year, not as a rule that forbids or guarantees anything. Jobs still require applications, relationships still require conversation, and health or money decisions still require real evidence. Used that way, the cycle helps you choose emphasis across a whole year without surrendering judgement to it. That perspective also makes difficult months easier to place."
    ],
    faqs: [
      {
        question: "When does a Personal Year actually begin and end each cycle?",
        answer: "Most modern numerologists run the Personal Year from 1 January to 31 December of the calendar year you calculated. A smaller tradition counts from birthday to birthday instead. Pick one convention and stay consistent, because switching methods mid-cycle makes comparisons between years confusing and unreliable."
      },
      {
        question: "Why is my birth year not used in this calculation?",
        answer: "Your birth year already belongs to your Life Path calculation, which describes lifelong themes. The Personal Year is meant to move, so it combines the fixed month and day of your birth with the changing calendar year. That is why everybody sharing your birthday shares this cycle."
      },
      {
        question: "What should I do differently in a Personal Year 11?",
        answer: "Read 11 through its 2 base first: protect rest, listen carefully, build alliances and avoid forcing premature decisions. The master form adds intuition and intensity, so keep a journal, test impressions against facts, and let important partnerships develop at a pace both sides can genuinely sustain."
      },
      {
        question: "Can I calculate a Personal Year for a future year?",
        answer: "Yes, replace the current year with any future year and repeat the same addition. Looking one or two years ahead can help with long planning, such as timing study or a house move, but treat distant cycles lightly because your circumstances and priorities will evolve meanwhile."
      },
      {
        question: "What happens after a Personal Year 9 ends for the cycle?",
        answer: "The sequence returns to 1, opening a fresh nine-year epicycle. Many people feel that transition as a genuine clearing followed by new appetite for direction. You do not need to manufacture a dramatic reinvention; a clear first step, chosen deliberately, is exactly what a 1 year asks for."
      }
    ]
  },
  "baby-name-numerology": {
    guideTitle: "Baby Name Numerology: Matching Name and Life Path",
    guide: [
      "Baby name numerology compares the number carried by a shortlisted name with the Life Path number drawn from your baby's birth date, looking for a pairing that feels supportive rather than jarring. Parents use this calculator as one gentle check among many while choosing: a name whose total echoes the birth number is traditionally read as harmonious, while a contrasting total may add qualities the birth chart lacks. It is a way of listening to how a name might sit alongside the child, never a test a beloved name can fail or a ranking of children.",
      "Name totals use the Pythagorean table, adding every letter value and reducing the sum, while keeping 11 and 22 as master totals where they appear. The birth side comes from adding all digits of the delivery date together and reducing that total the same way. Families differ on scope: many read only the first name for a newborn, since that is what a baby is actually called, while the surname joins the picture later when the full legal name is used at school and in documents. This calculator lets you explore both readings.",
      "Harmony takes several shapes, not just identical numbers. An exact match, where name and Life Path share a digit, is read as reinforcement of the child's natural direction. A friendly pairing, such as a nurturing 6 name softening an independent 1 path, can balance rather than repeat. Even a lively contrast can suit parents who value breadth. Master totals 11 and 22 in a name are traditionally read as sensitive or capable respectively, with their reduced 2 and 4 underneath. Sound, family meaning, culture and sheer parental love should always outrank any total produced here."
    ],
    steps: [
      "Enter your baby's birth date, or the expected date if still planning.",
      "Type a shortlisted first name exactly as you intend to spell it.",
      "Note the name total and compare it with the Life Path number shown.",
      "Repeat with each shortlisted name, then decide using meaning and sound too."
    ],
    resultMeaning: [
      "Imagine a baby born on 3 January 2026. Adding the full date, 3 plus 1 plus 2 plus 0 plus 2 plus 6, gives 14, which reduces to a Life Path of 5. Now test the shortlisted name Kabir: K is 2, A is 1, B is 2, I is 9 and R is 9, totalling 23, which reduces to 5. That exact match is traditionally read as clean harmony, a name reinforcing the freedom-loving, curious, change-ready energy of the 5 path rather than pulling against it at every step of childhood.",
      "Contrast makes the idea clearer. Ayaan totals A 1, Y 7, A 1, A 1 and N 5, giving 15 and reducing to 6. Against a Life Path 5, that is a gentle mismatch: 6 brings home, duty and devotion, while 5 craves movement and variety, so the pairing might need conscious room for both roots and wings. That is not a verdict against Ayaan or any name. A name is one influence among temperament, family, place and experience, and it should never be the reason to discard a name you love."
    ],
    faqs: [
      {
        question: "Should I include the surname when checking a baby name?",
        answer: "Try both ways. Many families judge a newborn by the first name alone, because that is the name spoken daily in infancy. The full name, including surname, gives the broader Expression reading used later in life, so checking both gives a fuller picture without forcing one rule."
      },
      {
        question: "What does it mean if a name total is 11 or 22?",
        answer: "Those are kept as master numbers in this tradition before reduction. An 11 name is read as intuitive and sensitive with a 2 underneath, and a 22 name as practical and capable with a 4 underneath. Neither is automatically better; both simply add intensity to the reduced digit."
      },
      {
        question: "Is an exact match between name and Life Path best?",
        answer: "Not necessarily. An exact match reinforces one set of qualities strongly, which some parents love and others find one-sided. A complementary number can introduce balance, for example steadiness beside a restless path. There is no ranking table here, only different kinds of relationship between two numbers."
      },
      {
        question: "What if we have not decided on a spelling yet?",
        answer: "Test each spelling separately, because every changed letter changes the total. Kabir and Kabeer will not produce the same number. Compare the results, but let pronunciation, family tradition and how the spelling works in your language and country carry more weight than a single digit of difference."
      },
      {
        question: "Should numerology ever overrule a name with deep family meaning for us?",
        answer: "No. A name honouring a grandparent, a place or a story carries real meaning no total can replace. Use the number as a final layer of reflection once sound and significance feel right. If a beloved name shows a contrasting number, simply note the balance it might bring."
      }
    ]
  },
  "twin-flame-matcher": {
    guideTitle: "Twin Flame Matcher: Reflecting on Connection and Dynamics",
    guide: [
      "The twin flame idea holds that two people can mirror each other's strengths, wounds and blind spots with unusual intensity, prompting rapid personal growth. It is important to be plain from the start: twin flame is a modern belief framework and a popular cultural concept, not an established fact, and this matcher works inside that framework as a reflection tool. It compares birth-date numbers and sign flavour for two people and describes the dynamic their pairing suggests, without certifying that anyone is, or is not, another person's twin flame.",
      "Inside the tradition, the matcher begins with each person's Life Path, found by adding every digit of the birth date and reducing the total. It then combines the two paths into a pair sum, reduced again, which is read as the shared work or recurring lesson of the connection. Sign and element flavour add a second, softer layer, noting where temperaments might spark or soothe. Popular twin flame stories often mention separation phases and a runner and chaser; that language describes a narrative many people recognise, not a diagnosis of any real relationship placed in front of you.",
      "What the matcher weighs, then, is three things in fresh terms: the two individual Life Paths and how their priorities meet, the pair sum that colours what the relationship keeps asking both people to practise, and elemental flavour, whether fire meets earth, air meets water, and so on. A high resonance reading inside this system means the numbers echo each other strongly; a quieter reading means the pairing is framed as complementary or challenging. Neither outcome, in any honest use of this tool, predicts whether a real relationship will last, heal or make either person happy."
    ],
    steps: [
      "Enter the first person's full birth date as accurately as you know it.",
      "Enter the second person's birth date, double-checking day and month order carefully.",
      "Read both Life Path numbers separately before looking at the combined result.",
      "Use the pair reading as reflection prompts, then judge the relationship by reality."
    ],
    resultMeaning: [
      "Take two birth dates as an illustration. Person A, born 7 July 1993, adds as 7 plus 0 plus 7 plus 1 plus 9 plus 9 plus 3, equalling 36 and reducing to Life Path 9. Person B, born 19 November 1990, adds as 1 plus 9 plus 1 plus 1 plus 1 plus 9 plus 9 plus 0, equalling 31 and reducing to Life Path 4. Their pair sum is 9 plus 4 equals 13, reducing to 4, read here as a builder pair: the shared work is turning the compassion of 9 into something durable that 4 can maintain.",
      "Hold that reading lightly and honestly. A builder-pair description can prompt useful questions, such as whether kindness between you actually becomes reliability, but it cannot certify a twin flame bond, excuse harmful behaviour or promise reunion. A painful, one-sided or unsafe relationship is not made healthy by any label, however resonant the numbers look. Real-world respect, honesty, reciprocity and safety come first, always. If a connection consistently diminishes you, support from people you trust matters far more than matcher scores, and stepping away can be the genuinely growthful act this framework claims to honour."
    ],
    faqs: [
      {
        question: "Can this matcher really prove someone is my twin flame connection?",
        answer: "No, and no calculator can. Twin flame is a belief framework, not a measurable fact, so this tool can only reflect on dynamics inside that framework. Whether a relationship deserves your commitment depends on observed behaviour, mutual respect and how safe and valued you actually feel within it."
      },
      {
        question: "What does runner and chaser mean in twin flame stories?",
        answer: "Those terms describe a popular narrative in which one person withdraws from intensity while the other pursues closeness. It is a storytelling pattern, not a diagnosis or an excuse. In real life, withdrawal and pursuit deserve honest conversation about needs and boundaries, not a spiritual label."
      },
      {
        question: "How is a twin flame different from a soulmate in this tradition?",
        answer: "Within the belief framework, soulmate connections are usually described as harmonious and supportive, while twin flame connections are framed as mirrors that expose difficult patterns quickly. Both are concepts from the same modern spiritual culture, and neither vocabulary changes what a healthy relationship requires day to day."
      },
      {
        question: "What if our pair sum suggests a challenging pairing for us both?",
        answer: "Treat it as a reflection prompt, not a sentence. A challenging pair sum inside this system highlights where priorities may grate, such as freedom against security. Couples with every imaginable number combination build good lives together when communication, kindness and shared effort are present in practice."
      },
      {
        question: "Should I stay in a painful relationship because of a strong match?",
        answer: "No. A strong matcher result never outweighs pain, control, dishonesty or fear in a real relationship. Those are reasons to seek support and consider distance, whatever any label suggests. Respect and safety are not obstacles to a spiritual connection; their absence means the relationship itself needs addressing first."
      }
    ]
  },
"black-moon-lilith": {
    guideTitle: "Black Moon Lilith Calculator Mean True Signs Houses",
    guide: [
      "Black Moon Lilith marks where the Moon travels farthest from Earth along its orbit, a mathematical point rather than a planet or asteroid you could see through a telescope. This calculator locates that apogee point in your birth chart by sign and house, giving you a symbolic marker for the urges you were taught to hide, soften or apologise for, and the part of you that resists being managed by other people's comfort. Astrologers read it as instinct that refuses negotiation: desire, anger or refusal labelled excessive early in life and pushed underground, still shaping reactions decades later in subtle ways.",
      "Two versions circulate because the apogee itself will not sit still. Mean Lilith smooths the Moon's uneven motion into a steady average, drifting evenly through the zodiac. True Lilith, also called oscillating Lilith, follows the actual wobbling apogee, so it can jump, pause and sit several degrees away from the mean position, occasionally landing in the neighbouring sign altogether. Most calculators default to the mean version because its motion stays predictable across software and dates. The true version rewards tolerance for ambiguity, since its degree can stall or slip backwards. Neither is objectively correct; consistency matters most when comparing charts.",
      "Lilith needs about eight years and ten months to complete the full zodiac, spending roughly nine months in each sign, which is why whole friendship groups often share a Lilith sign yet differ completely by house. The sign colours the flavour of the taboo, while the house names the room where it erupts: the second house around money and worth, the seventh around partnership, the tenth around reputation and public refusal. House placement often feels more personal than sign because it points to concrete settings: classrooms, kitchens, boardrooms, bedrooms or stages where the same charged theme keeps returning, asking to be owned rather than hidden away from view."
    ],
    steps: [
      "Enter your birth date, exact birth time and birthplace so the apogee point and house cusps resolve correctly.",
      "Check which version the result displays, mean or true, and note the degree shown beside the sign.",
      "If the degree sits within two degrees of a sign edge, read both signs before settling on an interpretation.",
      "Read the sign together with the house, then compare with any planets sitting close to the same degree."
    ],
    resultMeaning: [
      "Consider Lilith in Leo in the fifth house as a reading rather than a computation. Leo craves an audience and the fifth house governs play, romance and creative output, so this pairing describes an applause paradox: a deep hunger to be seen and celebrated paired with sharp embarrassment about wanting exactly that. It surfaces in unfinished creative projects, in flirting that retreats once noticed, and in posting work online then deleting it within the hour. The growth move here is deliberately unglamorous: finish things for their own sake before showing anyone. Let a compliment land without apologising, and keep work visible long enough for people to respond.",
      "Treat the calculator as a mirror for reflection, not a verdict on character or destiny. A symbolic point cannot dictate choices, excuse behaviour or predict events, and the asteroid numbered 1181 Lilith is an entirely separate body that this tool does not use at all in its workings. A tight contact from another planet can intensify the theme, while a quieter placement may surface only during certain relationships or periods. Strong reactions to the description are worth noticing as information, not proof about your past. Revisit it after a few months, and let ordinary experience arbitrate which version rings truest."
    ],
    faqs: [
      {
        question: "What is the difference between mean and true Lilith placements?",
        answer: "Mean Lilith averages the Moon's wobbly orbit into smooth, even movement, while true Lilith tracks the actual apogee as it shifts. The two can sit a few degrees apart, so always check which version a calculator reports before comparing results."
      },
      {
        question: "How long does Lilith stay in each zodiac sign exactly?",
        answer: "Roughly nine months per sign, completing the entire zodiac in about eight years and ten months. That slow rhythm means your birth-year peers usually share your Lilith sign, while your house placement, set by birth time, makes the reading personal."
      },
      {
        question: "Is Black Moon Lilith the same as the asteroid Lilith body?",
        answer: "No. Black Moon Lilith is a calculated point, the lunar apogee, with no physical body at all. Asteroid 1181 Lilith is a real rocky object orbiting the Sun. Charts and calculators keep them separate, and this tool uses only the apogee point."
      },
      {
        question: "What should I do if Lilith sits near a sign boundary?",
        answer: "Read the neighbouring sign alongside your result whenever the degree falls within about two degrees of an edge. Mean and true calculations can disagree precisely there, and holding both readings lightly usually describes lived experience better than forcing one label."
      },
      {
        question: "Does my Lilith placement describe something wrong with me personally?",
        answer: "Nothing here is a flaw or a diagnosis. The placement sketches themes around appetite, refusal and self-censorship that many people recognise in themselves to some degree. Use it for honest self-questioning, and set it aside whenever the description stops feeling useful."
      }
    ]
  },
  "10th-house-career": {
    guideTitle: "Tenth House Career Calculator Whole Sign Midheaven Guide",
    guide: [
      "This calculator counts ten signs forward from your Ascendant sign, called the Lagna, to find your tenth house, the chart sector linked with vocation, public role and the work you become known for. The sign occupying that house, any planets inside it and the placement of its ruling planet together sketch a career direction rather than a single prescribed job title. Traditionally called Karma Bhava in Sanskrit texts, this house also gathers questions of authority, employers and reputation, because all of those shape how a vocation unfolds publicly across a lifetime of working years.",
      "The method here follows whole-sign houses used in Vedic reading, where the tenth sign from the Lagna simply is the career house. Quadrant systems used in much Western astrology instead anchor the Midheaven, or MC, by exact degree, and that point can slip into the ninth or eleventh house, so two traditions can describe the same chart with different house labels. That distinction explains many confusing readings online, where a planet sits in the tenth sign yet stands far from the Midheaven degree. Knowing which system produced your result stops you comparing readings built on incompatible foundations as though one were simply wrong.",
      "Counting around the wheel gives a fixed pattern worth learning: Aries rising puts Capricorn tenth, Taurus puts Aquarius, Gemini puts Pisces, Cancer puts Aries, Leo puts Taurus and Virgo puts Gemini. Continuing onward, Libra rises to Cancer tenth, Scorpio to Leo, Sagittarius to Virgo, Capricorn to Libra, Aquarius to Scorpio and Pisces to Sagittarius, each pairing carrying its own working temperament. Notice how the tenth sign always stands in a steady structural relationship to its rising sign, which is why astrologers treat this pairing as a backbone of the chart rather than a random label attached afterward to a birth time."
    ],
    steps: [
      "Enter your birth date, time and place, then confirm the Ascendant sign the calculator returns before reading further.",
      "Count ten signs forward including the Ascendant itself to verify the tenth house sign shown in your result.",
      "Identify the ruling planet of that tenth sign and note which house that planet occupies in your chart.",
      "List any planets sitting inside the tenth house, since they add strong flavours to the career picture described."
    ],
    resultMeaning: [
      "Take a Virgo Ascendant as the worked case. Counting ten signs forward lands on Gemini in the tenth house, tilting vocation toward communication, craft and variety: teaching, editing, media, translation and skilled trades all fit that flavour. Gemini's ruler Mercury sits in the third house in this example, pulling the career further toward writing, instruction, short courses and content made in brief, frequent formats rather than one monumental work. Journalism, tutoring, sales or community work would all express the same pattern, because this Mercury doubles down on skills built through practice and local networks rather than distant institutions or inherited status.",
      "Planets inside the tenth house then sharpen or complicate that outline, and the tenth lord's house shows where the work actually happens day to day. Read all of this as a traditional interpretive lens on direction and appetite. It offers no guarantee of employment or promotion, and it never replaces training, portfolio, experience or the plain reality of the job market around you. Two charts can share a tenth sign and diverge completely once lord, planets and aspects enter the picture, so resist copying a famous person's path merely because your tenth house matches theirs on paper alone."
    ],
    faqs: [
      {
        question: "How is the tenth house different from the Midheaven point?",
        answer: "In whole-sign reading the tenth sign from the Ascendant is the career house by definition. The Midheaven is an exact degree point that quadrant house systems calculate separately, and it can fall in the ninth, tenth or eleventh house depending on latitude."
      },
      {
        question: "What does the tenth house lord placement tell me about work?",
        answer: "The planet ruling your tenth sign, and the house it occupies, suggests where career energy gets spent in practice. A lord in the third points toward communication work, in the seventh toward clients and partnerships, in the ninth toward teaching or travel."
      },
      {
        question: "What do planets sitting in the tenth house mean for careers?",
        answer: "Each planet colours public work in its own register: the Sun seeks visibility, Saturn builds slowly through duty, Mars competes and initiates, Venus works through design and relationships. No single placement decides an occupation, so read planets as tendencies layered together."
      },
      {
        question: "Can this calculator choose the right career for me alone?",
        answer: "It can suggest directions that match your temperament, which is useful when you feel torn between paths. It cannot weigh salaries, openings or your actual skills. Pair any reading with honest research into training routes, demand and the daily texture of the work."
      },
      {
        question: "Why does my tenth house sign differ between websites online?",
        answer: "Sites disagree because they use different house systems and sometimes different zodiacs. A whole-sign Vedic calculator counts signs from the Ascendant, while a quadrant Western calculator places the Midheaven by degree. Neither mismatch means your birth data was entered incorrectly."
      }
    ]
  },
  "karmic-relationship": {
    guideTitle: "Karmic Relationship Calculator Life Path Pair Lessons Explained",
    guide: [
      "This calculator compares two birth dates through numerology to describe a relationship as a classroom: a bond that keeps presenting the same lesson until both people handle it differently. The framing suits romantic partners, close family and mentors equally, because the tool cares about the pattern two people repeat together, not about romance alone or any verdict on whether a bond should continue. People usually report familiarity first: conversations that feel resumed rather than begun, reactions larger than the acquaintance warrants, and one unfinished theme circling back despite good intentions on both sides over the years.",
      "The arithmetic is the familiar Pythagorean life path method applied twice. Each full birth date is added digit by digit and reduced to a single number, giving each person a life path. Those two numbers are then added and reduced again for a pair theme. Astrologers describing karmic bonds also watch chart signatures in parallel, especially Saturn contacts and links involving the South Node of the Moon. Saturn contacts suggest duty and lessons delivered through limits, while South Node links evoke an old habit that comforts and stunts simultaneously. Neither signature proves a shared past life.",
      "Pairings read as shared homework rather than compatibility scores. Two reflective numbers together may stall in silence, two driven numbers may rehearse the same argument about control, and a nurturing number beside an independent one often negotiates closeness versus freedom. Every combination names a skill the pair keeps practising, from direct speech and boundary-setting to patience, forgiveness or finally letting a finished chapter close. Spark-heavy combinations rehearse desire without drifting into dishonesty, while steady combinations rehearse trust around money and reliability. Naming the lesson is practical, because a pattern you can name mid-argument is far easier to interrupt."
    ],
    steps: [
      "Write out the first person's full birth date and add every digit, reducing the total to one number.",
      "Repeat the same addition for the second person's birth date to find their individual life path number.",
      "Add the two life path numbers together and reduce once more to reveal the pair theme number.",
      "Read the individual numbers, the pair theme and the completion notes together before drawing any conclusions about the relationship."
    ],
    resultMeaning: [
      "Here is the arithmetic worked in full. Someone born 11 February 1992 gives 1+1+0+2+1+9+9+2 = 25, reducing to life path 7. A partner born 30 June 1987 gives 3+0+0+6+1+9+8+7 = 34, also reducing to 7. Two 7s share a lesson in trust and interior honesty: both retreat inward when hurt, so their karmic work is staying inside difficult conversations. Their pair theme, 7 + 7 = 14 reducing to 5, asks for change through honest speech. Neither partner can hide inside solitude here, because the other recognises the retreat instantly, having invented it. Progress looks undramatic: one honest sentence offered before withdrawal, repeated until trust accumulates.",
      "Completion matters as much as connection in this framework. A lesson can finish, after which a once-intense bond may soften into ordinary fondness or end altogether, and leaving can itself be the completed lesson rather than a failure. Treat past-life language strictly as a belief framework for reflection. It proves nothing about history, obliges nobody to stay, and should never override safety, consent or plain unhappiness. Used well, the numbers organise questions you were already asking: what keeps repeating, what has genuinely changed, and what stays identical despite every promise made in good faith by either person."
    ],
    faqs: [
      {
        question: "What makes a relationship karmic rather than an ordinary bond?",
        answer: "Within this belief framework, a karmic bond feels unusually charged, familiar and repetitive, returning both people to the same unresolved pattern. Astrologers traditionally point to Saturn contacts and South Node links between charts as the classic signatures behind that intensity and pull."
      },
      {
        question: "How is a karmic relationship different from a soul contract?",
        answer: "A soul contract reading emphasises an agreement supposedly arranged before birth, with roles assigned in advance. The karmic reading here focuses instead on lessons in progress and their completion: what the pair keeps rehearsing, what changes it, and when the work is done."
      },
      {
        question: "How does a karmic bond differ from a twin flame connection?",
        answer: "Twin flame language describes one soul mirrored across two people, which makes separation feel like incompleteness. This calculator uses a different frame entirely: two separate people sharing a lesson. Completion, distance or a calm ending can all count as success within that frame."
      },
      {
        question: "Does a karmic relationship mean we must stay together forever?",
        answer: "No, and this framework never asks that of anyone. Some lessons complete precisely by leaving respectfully and not repeating the pattern elsewhere. Intensity is not evidence of obligation, and any reading suggesting you must endure harm or misery deserves to be ignored completely."
      },
      {
        question: "Can family members or mentors share a karmic relationship pattern?",
        answer: "Yes. The classroom idea applies wherever two people repeatedly trigger the same growth point in each other, including parents, siblings, close friends and teachers. Romance is simply the most discussed setting. The pair theme number describes the shared lesson regardless of the relationship type."
      }
    ]
  },
  "workplace-astrology": {
    guideTitle: "Workplace Astrology Calculator Work Style Mercury Mars Moon",
    guide: [
      "This calculator reads your birth chart for one narrow, practical purpose: how you actually behave across an ordinary working week. It ignores fame, vocation and long-range ambition, and concentrates instead on how you process information in meetings, how you pace effort across a deadline, how you respond when plans change, and what surroundings help you recover after a demanding stretch of collaboration. Two colleagues can share a title, team and manager yet experience the same Monday completely differently. This tool describes that layer: preferences and friction points, never talent, seniority or measurable worth to an employer.",
      "Three placements carry most of the reading, each governing a different layer of office life. Mercury describes communication and mental processing, Mars describes drive, pace and friction style, and the Moon describes workplace needs and recovery. The calculator weighs those three signs together into a work-style card, so no single placement is treated as a complete description of your professional character or ability. Element flavours refine each placement: fire acts before the meeting ends, earth asks what it costs, air reframes the problem, and water tracks the mood nobody mentioned aloud.",
      "Mercury in a chatty sign may draft by talking, while Mercury in a reserved sign writes first and speaks later. Mars in a cardinal sign starts instantly, Mars in a fixed sign finishes relentlessly, and the Moon quietly sets the conditions underneath: one person needs silence and a closed door, another recharges through team lunches, a third needs predictable hours above almost everything else you could offer them. None of these styles is the professional ideal. Teams stall when everyone processes identically, and fracture when differences get moralised as attitude. A talkative drafter beside a silent writer is a pairing, provided handovers stay explicit."
    ],
    steps: [
      "Enter your birth date, time and place, then note the signs returned for Mercury, Mars and the Moon.",
      "Read Mercury first for communication habits, Mars second for pace and conflict style, and the Moon last for needs.",
      "Compare your card with a close colleague's Mars and Mercury signs to spot likely pace or style clashes early.",
      "Turn one insight into a concrete agreement, such as written deadlines or shorter check-ins, and test it for a fortnight."
    ],
    resultMeaning: [
      "Picture one composite work-style card read as interpretation. Mercury in Gemini processes by talking and drafting aloud, thinking faster in conversation than alone. Mars in Capricorn supplies the opposite tempo: slow to ignite, immovable once a deadline is accepted, climbing steadily while others sprint and stall. Moon in Taurus underneath needs a stable desk, predictable routines and real lunch breaks protected from meetings, and it quietly resents hot-desking and last-minute schedule churn. In practice this colleague writes strong follow-up notes after brainstorming, prefers projects with visible milestones, and does their most reliable work in a familiar corner with a calendar that rarely ambushes them.",
      "Now pair this person with a Mars in Aries colleague and the friction is purely mechanical: an instant starter beside a deliberate finisher. A workable protocol is short check-ins, written deadlines and agreed start dates, so speed and stamina stop misreading each other as laziness or recklessness. Use this lens for self-knowledge and smoother teamwork only. It is never a hiring, firing, promotion or assessment tool, and no placement measures competence. Small agreements carry similar weight: agendas circulated early and warnings before schedule changes cost a team almost nothing, yet they respect the steadiness this person quietly depends on daily."
    ],
    faqs: [
      {
        question: "Which planets matter most for everyday behaviour at work today?",
        answer: "Mercury, Mars and the Moon do most of the work in this reading. Mercury covers communication and processing, Mars covers pace, drive and friction, and the Moon covers daily needs, comfort and recovery. Together they describe behaviour rather than job title or status."
      },
      {
        question: "How is workplace astrology different from career astrology readings online?",
        answer: "Career readings built on the tenth house ask which vocation and public role suit you over years. This calculator asks a smaller daily question: how you write, meet, pace yourself and collaborate this week. Leadership readings differ again, focusing on how you direct other people."
      },
      {
        question: "Can my manager use this to assess or hire staff?",
        answer: "No. A work-style card is a reflective prompt for the person it describes, useful for starting conversations about preferences and collaboration. It measures nothing, predicts no performance and must never feed into hiring, firing, promotion, pay or formal assessment decisions of any kind."
      },
      {
        question: "What if my Mars sign clashes with a close colleague's?",
        answer: "Treat a clash as a tempo difference to manage, not a personality verdict. Name the mismatch plainly, agree written deadlines and start dates, and schedule brief check-ins so the faster starter and the slower finisher each get the structure their pace requires to work."
      },
      {
        question: "Why does the Moon sign matter for my working day?",
        answer: "The Moon in this framework points to the conditions that keep you steady: food, rest, privacy, routine and emotional temperature. When those needs go unmet, small irritations grow quickly. Arranging even one of them properly often improves focus more than any productivity technique."
      }
    ]
  },
};
