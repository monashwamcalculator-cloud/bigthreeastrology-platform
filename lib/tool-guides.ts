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
  }
};
