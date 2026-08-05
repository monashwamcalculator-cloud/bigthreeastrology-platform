export type ToolDefinition = {
  id: string;
  slug: string;
  name: string;
  category: "planetary" | "vedic" | "numerology" | "guidance" | "synastry" | "career";
  categoryName: string;
  icon: string;
  shortDesc: string;
  metaTitle: string;
  metaDesc: string;
  badge: string;
  educationalTitle: string;
  educationalContent: string;
  faqs: Array<{ question: string; answer: string }>;
  steps?: string[];
};

export const MASTER_TOOLS_LIST: ToolDefinition[] = [
  // 🌟 Group 1: Birth Chart & Planets (1-20)
  {
    id: "big-three",
    slug: "big-three",
    name: "Big Three Calculator",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "🔮",
    shortDesc: "Calculate your Sun, Moon & Rising (Ascendant) signs.",
    metaTitle: "Big Three Calculator | Sun Moon Rising Sign Snapshot",
    metaDesc: "Calculate your Sun, Moon, and Rising signs instantly with global timezone and birth city support.",
    badge: "🔮 Core Placement",
    educationalTitle: "Understanding Your Big Three Astrology Blueprint",
    educationalContent: "Your Big Three consists of your Sun sign (core identity), Moon sign (emotional mind), and Rising sign (physical persona). Combining all three gives a complete self-awareness snapshot.",
    faqs: [
      { question: "Why do I need exact birth time for the Big Three?", answer: "The Rising sign (Ascendant) changes every 2 hours as the Earth rotates." }
    ]
  },
  {
    id: "spouse-predictor",
    slug: "spouse-predictor",
    name: "Spouse & Soulmate Predictor",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "💖",
    shortDesc: "Predict physical traits, personality & meeting location.",
    metaTitle: "Future Spouse & Soulmate Predictor | Traits & Initials",
    metaDesc: "Predict your future spouse's appearance, element, lucky initials, and meeting environment.",
    badge: "💖 High Demand",
    educationalTitle: "How Astrology Predicts Your Future Spouse",
    educationalContent: "By analyzing Venus, Darakaraka planet, and the 7th house ruler in your natal chart, Vedic and Western astrology reveal physical features, career path, and meeting scenarios for your life partner.",
    faqs: [
      { question: "Can astrology reveal my spouse's meeting scenario?", answer: "Yes! 7th house ruler house placement reveals meeting environments such as college, work, travel, or online." }
    ]
  },
  {
    id: "soulmate-initials",
    slug: "soulmate-initials",
    name: "Soulmate Initials Predictor",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "🔤",
    shortDesc: "Predict starting letters & name initials of your soulmate.",
    metaTitle: "Soulmate Name & Initial Predictor | Zodiac Love Signature",
    metaDesc: "Predict probable starting letters and initial signatures of your future soulmate.",
    badge: "🔤 Viral Trend",
    educationalTitle: "Soulmate Initials & Planetary Degrees",
    educationalContent: "Zodiac degrees and 7th house Nakshatra padas vibrate with specific phonetic letters that align with your soulmate's birth name.",
    faqs: [
      { question: "How are initial letters derived?", answer: "Using Nakshatra pada phonetics and 7th house lord planetary degrees." }
    ]
  },
  {
    id: "rising-sign",
    slug: "rising-sign",
    name: "Rising Sign Ascendant Reader",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "🌅",
    shortDesc: "Discover physical aura, first impressions & Lagna lord.",
    metaTitle: "Rising Sign (Ascendant) Reader | Physical Aura & Style",
    metaDesc: "Discover your Ascendant Lagna sign, physical aura, style preferences, and first impression signature.",
    badge: "🌅 Ascendant",
    educationalTitle: "The Mask You Wear to the World",
    educationalContent: "Your Ascendant dictates your 1st house cusp, physical appearance, posture, and outward social aura.",
    faqs: [
      { question: "What is the Lagna lord?", answer: "The planet ruling your Rising sign becomes the master ruler of your natal chart." }
    ]
  },
  {
    id: "mars-sign",
    slug: "mars-sign",
    name: "Mars Sign Drive Reader",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "♂️",
    shortDesc: "Decode physical drive, ambition style & passion.",
    metaTitle: "Mars Sign Passion & Drive Reader | Physical Energy",
    metaDesc: "Decode your physical energy, ambition style, anger triggers, and romantic passion based on Mars sign placement.",
    badge: "♂️ Physical Energy",
    educationalTitle: "Unlocking Your Mars Energy Signature",
    educationalContent: "Mars rules ambition, physical stamina, anger management, and intimate romantic chemistry.",
    faqs: [
      { question: "What does an Exalted Mars mean?", answer: "Mars in Capricorn is Exalted, bestowing executive discipline and master endurance." }
    ]
  },
  {
    id: "venus-sign",
    slug: "venus-sign",
    name: "Venus Sign Love Calculator",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "♀️",
    shortDesc: "Calculate love style, romantic charm & attraction.",
    metaTitle: "Venus Sign Love Calculator | Attraction & Harmony",
    metaDesc: "Calculate your Venus sign placement to reveal love language, romantic charm, and relationship attraction style.",
    badge: "♀️ Romance",
    educationalTitle: "The Goddess of Attraction & Harmony",
    educationalContent: "Venus rules art, beauty, affection style, and what makes you feel cherished in love.",
    faqs: [
      { question: "How does Venus affect relationship harmony?", answer: "Venus determines your love language—words of affirmation, gifts, touch, or quality time." }
    ]
  },
  {
    id: "mercury-sign",
    slug: "mercury-sign",
    name: "Mercury Sign Mind Calculator",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "☿️",
    shortDesc: "Explore thinking patterns, intellect & speech style.",
    metaTitle: "Mercury Sign Mind & Communication Calculator",
    metaDesc: "Explore your Mercury sign to understand your learning style, speech patterns, and mental intellect.",
    badge: "☿️ Intellect",
    educationalTitle: "The Cosmic Messenger of Intellect",
    educationalContent: "Mercury rules processing speed, communication style, writing, trading, and analytical logic.",
    faqs: [
      { question: "Why does Mercury Retrograde affect communication?", answer: "Retrograde periods encourage internal review and double-checking details." }
    ]
  },
  {
    id: "sun-sign",
    slug: "sun-sign",
    name: "Sun Sign Purpose Calculator",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "🌞",
    shortDesc: "Discover your core conscious purpose & vital ego.",
    metaTitle: "Sun Sign Purpose Calculator | Core Identity & Vitality",
    metaDesc: "Discover your Sun sign core purpose, vital energy, and life mission.",
    badge: "🌞 Vital Ego",
    educationalTitle: "The Solar Force of Your Horoscope",
    educationalContent: "Your Sun sign represents your conscious ego, vitality, leadership style, and primary life purpose.",
    faqs: [
      { question: "How does the Sun sign influence vitality?", answer: "The Sun fuels your willpower, immunity, and creative drive." }
    ]
  },
  {
    id: "moon-sign",
    slug: "moon-sign",
    name: "Moon Sign Emotion Calculator",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "🌙",
    shortDesc: "Uncover subconscious emotions & inner peace needs.",
    metaTitle: "Moon Sign Emotion & Subconscious Calculator",
    metaDesc: "Uncover your Moon sign to understand subconscious emotional needs and inner comfort.",
    badge: "🌙 Emotional Mind",
    educationalTitle: "Manas: The Lunar Realm of the Mind",
    educationalContent: "In Vedic Jyotish, the Moon rules *Manas* (the emotional mind), gut instincts, and subconscious security.",
    faqs: [
      { question: "Why is Moon sign vital in Vedic astrology?", answer: "Vedic horoscopes and Dasha timelines are calculated directly from your Moon placement." }
    ]
  },
  {
    id: "chiron",
    slug: "chiron",
    name: "Chiron Healing Calculator",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "⚕️",
    shortDesc: "Find your wounded healer archetype & soul wisdom.",
    metaTitle: "Chiron Healing Calculator | Soul Wounded Healer",
    metaDesc: "Discover your Chiron placement to transform core soul wounds into spiritual healing gifts.",
    badge: "⚕️ Soul Healing",
    educationalTitle: "Transforming Wounds into Spiritual Wisdom",
    educationalContent: "Chiron represents where you feel vulnerable, but also where you possess profound gifts to heal others.",
    faqs: [
      { question: "What is Chiron in astrology?", answer: "Chiron is an asteroid known as the Wounded Healer archetype." }
    ]
  },
  {
    id: "nakshatra",
    slug: "nakshatra",
    name: "Birth Star Nakshatra Finder",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "⭐",
    shortDesc: "Identify your 27 Vedic birth star, deity & symbol.",
    metaTitle: "Birth Star Nakshatra Finder | 27 Vedic Lunar Mansions",
    metaDesc: "Find your birth Nakshatra out of the 27 Vedic stars, ruling planet, deity, and animal yoni.",
    badge: "⭐ 27 Stars",
    educationalTitle: "The 27 Lunar Mansions of Jyotish",
    educationalContent: "Nakshatras provide deep granular insights into mind instincts, deity grace, and karmic destiny.",
    faqs: [
      { question: "How many Nakshatras exist?", answer: "There are 27 Nakshatras starting from Ashwini to Revati." }
    ]
  },
  {
    id: "jupiter-sign",
    slug: "jupiter-sign",
    name: "Jupiter Sign Luck Reader",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "🪐",
    shortDesc: "Explore divine expansion, luck & wisdom sign.",
    metaTitle: "Jupiter Sign Luck & Higher Wisdom Reader",
    metaDesc: "Explore your natal Jupiter sign placement for fortune, higher learning, and spiritual expansion.",
    badge: "🪐 Guru Grace",
    educationalTitle: "The Greater Benefic of Astrology",
    educationalContent: "Jupiter expands whatever house or sign it touches, bringing fortune, optimism, and moral wisdom.",
    faqs: [
      { question: "Where is Jupiter exalted?", answer: "Jupiter is Exalted in the sign of Cancer." }
    ]
  },
  {
    id: "saturn-sign",
    slug: "saturn-sign",
    name: "Saturn Sign Karma Reader",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "🪐",
    shortDesc: "Discover career endurance, discipline & karma.",
    metaTitle: "Saturn Sign Karma & Discipline Calculator",
    metaDesc: "Discover your natal Saturn sign for career discipline, structural endurance, and karmic lessons.",
    badge: "🪐 Shani Karma",
    educationalTitle: "The Taskmaster of Duty & Maturity",
    educationalContent: "Saturn teaches hard work, patience, time management, and structural accountability.",
    faqs: [
      { question: "Why does Saturn reward patience?", answer: "Saturn governs long-term legacy and structural stability." }
    ]
  },
  {
    id: "uranus-sign",
    slug: "uranus-sign",
    name: "Uranus Innovation Reader",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "⚡",
    shortDesc: "Uncover breakthrough genius & original rebel energy.",
    metaTitle: "Uranus Sign Innovation & Genius Reader",
    metaDesc: "Uncover your Uranus sign to find where you express breakthrough innovation and freedom.",
    badge: "⚡ Innovation",
    educationalTitle: "The Great Awakener & Rebel",
    educationalContent: "Uranus rules sudden flashes of genius, technological revolution, and breaking outdated traditions.",
    faqs: [
      { question: "What does Uranus represent in generational trends?", answer: "Uranus stays 7 years in a sign, shaping generational technological evolution." }
    ]
  },
  {
    id: "neptune-sign",
    slug: "neptune-sign",
    name: "Neptune Intuition Reader",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "🌊",
    shortDesc: "Explore artistic dreams, mysticism & idealism.",
    metaTitle: "Neptune Sign Intuition & Mysticism Reader",
    metaDesc: "Explore your Neptune sign placement for artistic inspiration, spiritual dreams, and telepathic intuition.",
    badge: "🌊 Mystic Dreams",
    educationalTitle: "The Ocean of Spiritual Consciousness",
    educationalContent: "Neptune dissolves boundaries, inspiring artistic film, music, unconditional love, and spiritual oneness.",
    faqs: [
      { question: "How does Neptune enhance creativity?", answer: "Neptune connects the mind to universal dream imagery." }
    ]
  },
  {
    id: "pluto-sign",
    slug: "pluto-sign",
    name: "Pluto Transformation Reader",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "🌋",
    shortDesc: "Uncover personal power, rebirth & shadow transformation.",
    metaTitle: "Pluto Sign Transformation & Power Reader",
    metaDesc: "Uncover where you hold profound personal power, renewal, and psychological transformation.",
    badge: "🌋 Rebirth Power",
    educationalTitle: "Phoenix Rebirth & Deep Psychological Power",
    educationalContent: "Pluto governs deep psychological purges, elimination of toxicity, and monumental personal rebirth.",
    faqs: [
      { question: "What is Pluto's key lesson?", answer: "Release what no longer serves your soul to allow true empowerment." }
    ]
  },
  {
    id: "black-moon-lilith",
    slug: "black-moon-lilith",
    name: "Lilith Shadow Self Calculator",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "🖤",
    shortDesc: "Explore raw independence & shadow self authenticity.",
    metaTitle: "Black Moon Lilith Shadow Self Calculator",
    metaDesc: "Calculate your Black Moon Lilith placement to reclaim wild independence and shadow self authenticity.",
    badge: "🖤 Shadow Self",
    educationalTitle: "Reclaiming Your Wild Unapologetic Power",
    educationalContent: "Lilith represents unyielding independence, refusal to be controlled, and raw authentic instinct.",
    faqs: [
      { question: "What is Black Moon Lilith?", answer: "Lilith marks the lunar apogee point representing raw autonomy." }
    ]
  },
  {
    id: "midheaven",
    slug: "midheaven",
    name: "Midheaven Career Peak Calculator",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "👑",
    shortDesc: "Find your 10th house MC public reputation & career peak.",
    metaTitle: "Midheaven (MC) Career Peak & Reputation Calculator",
    metaDesc: "Calculate your Midheaven MC placement to discover public legacy, career vocation, and status goals.",
    badge: "👑 10th Cusp MC",
    educationalTitle: "The Zenith Cusp of Public Legacy",
    educationalContent: "The Midheaven (Medium Coeli / MC) marks the top of your natal chart ruling professional honor and public reputation.",
    faqs: [
      { question: "How does MC differ from Rising sign?", answer: "Rising is your personal aura; MC is your public career achievement." }
    ]
  },
  {
    id: "vertex",
    slug: "vertex",
    name: "Vertex Fated Encounter Calculator",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "🌀",
    shortDesc: "Discover karmic turning points & destiny encounters.",
    metaTitle: "Vertex Fated Encounter & Destiny Point Calculator",
    metaDesc: "Discover your Vertex point to reveal fated relationship turning points and synchronized events.",
    badge: "🌀 Fated Axis",
    educationalTitle: "The Electric Doorway of Destiny",
    educationalContent: "The Vertex is an astronomical intersection point associated with inevitable fated people and soul encounters.",
    faqs: [
      { question: "When does the Vertex trigger?", answer: "Major planetary transits over your Vertex bring life-changing encounters." }
    ]
  },
  {
    id: "juno",
    slug: "juno",
    name: "Juno Soulmate Commitment Calculator",
    category: "planetary",
    categoryName: "🌟 Birth Chart & Planets",
    icon: "💍",
    shortDesc: "Calculate marital contract needs & commitment style.",
    metaTitle: "Juno Asteroid Soulmate Commitment Calculator",
    metaDesc: "Calculate Juno asteroid placement to reveal your non-negotiable marriage needs and long-term loyalty.",
    badge: "💍 Marriage Contract",
    educationalTitle: "The Sacred Asteroid of Marriage Loyalty",
    educationalContent: "Juno rules long-term marital commitment, equality expectations, and core partnership loyalty.",
    faqs: [
      { question: "How is Juno different from Venus?", answer: "Venus is romantic attraction; Juno is legal, dedicated marriage." }
    ]
  },

  // 🕉️ Group 2: Vedic Jyotish & Timing (21-40)
  {
    id: "kundali-milan",
    slug: "kundali-milan",
    name: "Kundali Milan 36 Gunas",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "🕉️",
    shortDesc: "Authentic Ashta Koota marriage horoscope matching.",
    metaTitle: "Vedic Kundali Milan | 36 Ashta Koota Guna Matching",
    metaDesc: "Calculate 36 Gunas Ashta Koota marriage compatibility for Groom and Bride with Vedic Nadi remedies.",
    badge: "🕉️ 36 Gunas",
    educationalTitle: "The Ancient Art of Vedic Matchmaking",
    educationalContent: "Kundali Milan evaluates 8 dimensions of matrimonial compatibility out of 36 points to ensure genetic, emotional, and spiritual harmony.",
    faqs: [
      { question: "What is a passing Guna score?", answer: "18+ Gunas indicate a compatible match for marriage." }
    ]
  },
  {
    id: "dasha-calculator",
    slug: "dasha-calculator",
    name: "Vimshottari Dasha Timeline",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "⏳",
    shortDesc: "120-year planetary period timeline & remedies.",
    metaTitle: "Vimshottari Dasha 120-Year Planetary Timeline",
    metaDesc: "Explore the 9 major planetary Mahadasha cycles shaping your life events and career trajectory.",
    badge: "⏳ 120 Yrs",
    educationalTitle: "Tracking Your Cosmic Timeline",
    educationalContent: "Vimshottari Dasha allocates 120 years across 9 planetary Mahadashas dictating timing of marriage, career, and wealth.",
    faqs: [
      { question: "Which planet starts your Dasha?", answer: "Your birth Moon Nakshatra ruler determines your starting Mahadasha planet." }
    ]
  },
  {
    id: "jupiter-transit",
    slug: "jupiter-transit",
    name: "Jupiter Transit Luck Finder",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "🪐",
    shortDesc: "Track Guru blessings, wealth & marriage timing.",
    metaTitle: "Jupiter Transit & Luck Expansion Finder",
    metaDesc: "Discover how Jupiter (Guru) expands your wealth, marriage luck, career opportunities, and spiritual grace.",
    badge: "🪐 Guru Luck",
    educationalTitle: "Expanding Cosmic Grace",
    educationalContent: "Jupiter transits bring wealth, marriage opportunities, and wisdom expansion.",
    faqs: [
      { question: "How long does Jupiter stay in one sign?", answer: "Jupiter transits one sign roughly every 12 months." }
    ]
  },
  {
    id: "choghadia",
    slug: "choghadia",
    name: "Daily Choghadia Muhurat",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "🔮",
    shortDesc: "Live auspicious time slots for gold, travel & business.",
    metaTitle: "Daily Choghadia Muhurat | Auspicious Time Windows",
    metaDesc: "Check live Amrit, Shubh, Labh, and Char Choghadia time slots for auspicious work, travel, and investments.",
    badge: "🔮 Timing",
    educationalTitle: "Selecting Auspicious Vedic Hours",
    educationalContent: "Choghadia splits day and night into 8 equal windows each, helping you pick lucky slots like Amrit, Shubh, and Labh.",
    faqs: [
      { question: "Which Choghadia is best for financial deals?", answer: "Labh (Gain) and Shubh (Good) are optimal for business." }
    ]
  },
  {
    id: "sade-sati",
    slug: "sade-sati",
    name: "Sade Sati Phase Checker",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "🪐",
    shortDesc: "Saturn 7.5-year transit phase & Shanti remedies.",
    metaTitle: "Sade Sati Phase & Saturn Transit Checker",
    metaDesc: "Check if you are under Saturn's 7.5-year Sade Sati transit (1st, 2nd, or 3rd Dhaiya) and view Vedic remedies.",
    badge: "🪐 Shani Transit",
    educationalTitle: "Navigating Saturn's Cosmic Purification",
    educationalContent: "Sade Sati transits across the sign before, on, and after your natal Moon, teaching discipline and maturity.",
    faqs: [
      { question: "What is the peak phase of Sade Sati?", answer: "The 2nd Dhaiya (when Saturn transits directly over your Moon sign)." }
    ]
  },
  {
    id: "saturn-return",
    slug: "saturn-return",
    name: "Saturn Return Age Calculator",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "🪐",
    shortDesc: "Calculate age 27-30 maturity & legacy shifts.",
    metaTitle: "Saturn Return Age Calculator & Milestone Guide",
    metaDesc: "Calculate your 1st, 2nd, and 3rd Saturn Return milestone ages, career transformations, and survival remedies.",
    badge: "🪐 Milestone",
    educationalTitle: "Major Adulthood Initiation Cycles",
    educationalContent: "Saturn returns every 29.5 years initiating deep career accountability, mature growth, and life direction shifts.",
    faqs: [
      { question: "At what age does the 1st Saturn Return occur?", answer: "Between ages 27 and 30." }
    ]
  },
  {
    id: "kundali-houses",
    slug: "kundali-houses",
    name: "12 Kundali Houses Explorer",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "🏛️",
    shortDesc: "Explore all 12 Bhavas: wealth, marriage, career & moksha.",
    metaTitle: "12 Kundali Houses (Bhavas) Astrological Explorer",
    metaDesc: "Explore the 12 Houses of your horoscope governing wealth, health, marriage, career, and spiritual liberation.",
    badge: "🏛️ 12 Bhavas",
    educationalTitle: "The 12 Sacred Domains of Life",
    educationalContent: "Every Kundali is divided into 12 Bhavas (houses) governing distinct aspects of existence from birth (1st house) to liberation (12th house).",
    faqs: [
      { question: "Which house rules wealth?", answer: "The 2nd house rules accumulated wealth; the 11th house rules gains and income." }
    ]
  },
  {
    id: "love-compatibility",
    slug: "love-compatibility",
    name: "Zodiac Love Synastry Matcher",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "💖",
    shortDesc: "Zodiac element harmony & romantic chemistry score.",
    metaTitle: "Zodiac Love Synastry & Compatibility Calculator",
    metaDesc: "Calculate romantic compatibility, elemental chemistry, and synastry score between two zodiac signs.",
    badge: "💖 Love Synastry",
    educationalTitle: "Elemental Harmony in Relationships",
    educationalContent: "Comparing Fire, Earth, Air, and Water elements reveals deep underlying romantic chemistry.",
    faqs: [
      { question: "Are same-element signs naturally compatible?", answer: "Yes! Fire + Fire, Earth + Earth, Air + Air, and Water + Water share natural harmony." }
    ]
  },
  {
    id: "gemstone",
    slug: "gemstone",
    name: "Gemstone & Remedy Finder",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "💎",
    shortDesc: "Find your lucky Ratna, mantra & planetary remedies.",
    metaTitle: "Vedic Gemstone & Planetary Remedy Finder",
    metaDesc: "Discover your suitable Vedic gemstone (Ruby, Pearl, Emerald, Sapphire), finger wearing rules, and mantras.",
    badge: "💎 Ratna Healing",
    educationalTitle: "Vedic Gemstone Therapy (Ratna Vigyan)",
    educationalContent: "Wearing specific natural gemstones enhances favorable planetary frequencies to clear obstacles and attract health & wealth.",
    faqs: [
      { question: "Which gemstone rules Jupiter?", answer: "Yellow Sapphire (Pukhraj)." }
    ]
  },
  {
    id: "rahu-kaal",
    slug: "rahu-kaal",
    name: "Rahu Kaal Daily Tracker",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "🕒",
    shortDesc: "Avoid daily inauspicious 90-minute Rahu windows.",
    metaTitle: "Daily Rahu Kaal Tracker | Avoid Inauspicious Hours",
    metaDesc: "Track daily Rahu Kaal timing for your city to avoid starting major new projects or travels during Rahu hours.",
    badge: "🕒 Daily Avoid",
    educationalTitle: "Understanding Rahu's Daily Window",
    educationalContent: "Rahu Kaal is a 90-minute daily period ruled by Rahu where starting important new ventures is traditionally avoided.",
    faqs: [
      { question: "Does Rahu Kaal change every day?", answer: "Yes, it shifts depending on the day of the week and exact sunrise." }
    ]
  },
  {
    id: "abhijit-muhurat",
    slug: "abhijit-muhurat",
    name: "Abhijit Muhurat Finder",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "☀️",
    shortDesc: "Discover the most powerful daily midday winning slot.",
    metaTitle: "Abhijit Muhurat Finder | Daily Victorious Time Window",
    metaDesc: "Find daily Abhijit Muhurat (midday victory slot) to overcome all doshas and guarantee success in important tasks.",
    badge: "☀️ Victory Slot",
    educationalTitle: "The Supreme Victorious Time Window",
    educationalContent: "Abhijit Muhurat occurs around midday and is blessed by Lord Vishnu to destroy all negative planetary influences.",
    faqs: [
      { question: "Is Abhijit Muhurat safe even during minor doshas?", answer: "Yes! Abhijit Muhurat is universally auspicious for almost all tasks." }
    ]
  },
  {
    id: "hora-timing",
    slug: "hora-timing",
    name: "Hora Timing Calculator",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "⏳",
    shortDesc: "Calculate Sun, Moon, Mars, Mercury, Jupiter, Venus & Saturn hourly planetary horas.",
    metaTitle: "Vedic Hora Calculator | Hourly Planetary Rulers",
    metaDesc: "Calculate planetary Hora timing for each hour of the day to align activities with ruling planets.",
    badge: "⏳ Hourly Rulers",
    educationalTitle: "Hourly Planetary Rulerships",
    educationalContent: "Every hour of the day is ruled by one of the 7 major planets: Sun (authority), Moon (feelings), Mars (action), Mercury (business), Jupiter (wealth), Venus (love), Saturn (discipline).",
    faqs: [
      { question: "Which Hora is best for financial deals?", answer: "Jupiter (Guru) and Venus (Shukra) Horas." }
    ]
  },
  {
    id: "kaal-sarp-dosha",
    slug: "kaal-sarp-dosha",
    name: "Kaal Sarp Dosha Checker",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "🐍",
    shortDesc: "Check if all planets are hemmed between Rahu and Ketu.",
    metaTitle: "Kaal Sarp Dosha Checker | Types & Vedic Remedies",
    metaDesc: "Check if your birth chart has Kaal Sarp Dosha (Anant, Kulik, Vasuki, Shankhpal) and discover authentic Shanti remedies.",
    badge: "🐍 Rahu-Ketu Axis",
    educationalTitle: "Understanding the Snake Axis (Kaal Sarp)",
    educationalContent: "Kaal Sarp occurs when all 7 planets are hemmed on one side between Rahu and Ketu, creating intense karmic struggles followed by supreme spiritual breakthroughs.",
    faqs: [
      { question: "How many types of Kaal Sarp Dosha exist?", answer: "There are 12 major types named after sacred Nagas." }
    ]
  },
  {
    id: "manglik-dosha",
    slug: "manglik-dosha",
    name: "Manglik Dosha Checker",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "🔥",
    shortDesc: "Check Mars placement in 1st, 4th, 7th, 8th, 12th houses.",
    metaTitle: "Manglik Dosha (Kuja Dosha) Checker & Cancellations",
    metaDesc: "Check for Mars (Mangal) placement in 1st, 4th, 7th, 8th, or 12th houses and discover automatic cancellation rules.",
    badge: "🔥 Kuja Dosha",
    educationalTitle: "Demystifying Manglik / Kuja Dosha",
    educationalContent: "Manglik Dosha occurs when fiery Mars resides in key relationship houses. Understanding cancellation rules alleviates fear.",
    faqs: [
      { question: "When is Manglik Dosha cancelled?", answer: "When Mars is in its own sign, exalted, or matched with a Manglik partner." }
    ]
  },
  {
    id: "pitra-dosha",
    slug: "pitra-dosha",
    name: "Pitra Dosha Reader",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "📿",
    shortDesc: "Identify ancestral karmic debts & Tarpan remedies.",
    metaTitle: "Pitra Dosha Reader | Ancestral Blessings & Remedies",
    metaDesc: "Check for 9th house & Sun afflictions indicating Pitra Dosha and perform ancestral Tarpan remedies.",
    badge: "📿 Ancestral Karma",
    educationalTitle: "Honoring Ancestral Lineages",
    educationalContent: "Pitra Dosha indicates unresolved karmic debts to ancestors. Performing respectful offerings brings immense family prosperity.",
    faqs: [
      { question: "What is the simplest Pitra Dosha remedy?", answer: "Offering water and food during Pitru Paksha or Amavasya." }
    ]
  },
  {
    id: "shani-dhaiya",
    slug: "shani-dhaiya",
    name: "Shani Dhaiya Checker",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "🪐",
    shortDesc: "Check 2.5-year Saturn transit over 4th or 8th house.",
    metaTitle: "Shani Dhaiya Checker | 2.5-Year Saturn Transit",
    metaDesc: "Check if your Moon sign is experiencing Saturn's 4th (Small Panoti) or 8th house Dhaiya transit.",
    badge: "🪐 2.5 Yrs Transit",
    educationalTitle: "Saturn's 4th & 8th House Transits",
    educationalContent: "Shani Dhaiya occurs when Saturn transits 4 positions away (Kantaka Shani) or 8 positions away (Ashtama Shani) from your Moon.",
    faqs: [
      { question: "How long does Shani Dhaiya last?", answer: "Exactly 2.5 years." }
    ]
  },
  {
    id: "navamsha",
    slug: "navamsha",
    name: "Navamsha D9 Chart Explorer",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "✨",
    shortDesc: "Explore your D9 divisional chart for marriage & inner soul.",
    metaTitle: "Navamsha D9 Chart Explorer | Soul & Marriage Chart",
    metaDesc: "Explore your D9 Navamsha divisional chart to reveal your true soul strength and post-marriage fortune.",
    badge: "✨ D9 Divisional",
    educationalTitle: "The Fruits of the Birth Chart (D9)",
    educationalContent: "If the D1 natal chart is the tree, the D9 Navamsha chart is the fruit! It confirms the true strength of planets in the 2nd half of life.",
    faqs: [
      { question: "Why is D9 crucial for marriage?", answer: "Navamsha specifically unlocks marital harmony and soul purpose." }
    ]
  },
  {
    id: "atmakaraka",
    slug: "atmakaraka",
    name: "Atmakaraka Soul King Finder",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "👑",
    shortDesc: "Identify the planet with highest degree ruling your soul.",
    metaTitle: "Atmakaraka Finder | Soul King Planet in Jaimini",
    metaDesc: "Identify your Atmakaraka planet (highest degree in birth chart) to reveal your core soul lesson.",
    badge: "👑 Soul King",
    educationalTitle: "The King of Your Horoscope",
    educationalContent: "In Jaimini astrology, the planet holding the highest degree is your Atmakaraka—the king planet dictating your soul's desire.",
    faqs: [
      { question: "What if Sun is Atmakaraka?", answer: "The soul lesson centers on overcoming pride and embracing humble leadership." }
    ]
  },
  {
    id: "amatyakaraka",
    slug: "amatyakaraka",
    name: "Amatyakaraka Career Guide",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "💼",
    shortDesc: "Find the 2nd highest degree planet ruling career vocation.",
    metaTitle: "Amatyakaraka Guide | Career & Vocation Planet",
    metaDesc: "Find your Amatyakaraka planet (2nd highest degree in birth chart) to unlock your natural career talents.",
    badge: "💼 Career Planet",
    educationalTitle: "The Minister of Your Profession",
    educationalContent: "The Amatyakaraka acts as executive advisor to your soul, pointing directly toward your most prosperous career path.",
    faqs: [
      { question: "What if Mercury is Amatyakaraka?", answer: "High success in trading, writing, marketing, commerce, and media." }
    ]
  },
  {
    id: "daily-panchang",
    slug: "daily-panchang",
    name: "Panchang Daily Timing Guide",
    category: "vedic",
    categoryName: "🕉️ Vedic Jyotish & Timing",
    icon: "📅",
    shortDesc: "Tithi, Vara, Nakshatra, Yoga & Karana 5-part calendar.",
    metaTitle: "Daily Vedic Panchang | Tithi, Nakshatra, Yoga & Karana",
    metaDesc: "Check today's 5 Vedic limbs (Panchang): Tithi, Vara, Nakshatra, Yoga, and Karana for auspicious daily planning.",
    badge: "📅 5 Limbs",
    educationalTitle: "The 5 Sacred Limbs of Time",
    educationalContent: "Panchang combines 5 astronomical components to determine daily spiritual energy and timing alignment.",
    faqs: [
      { question: "What are the 5 limbs of Panchang?", answer: "Tithi (Lunar Day), Vara (Weekday), Nakshatra (Star), Yoga (Solar-Lunar angle), Karana (Half-Tithi)." }
    ]
  },

  // 🔢 Group 3: Numerology & Name Math (41-60)
  {
    id: "numerology",
    slug: "numerology",
    name: "Life Path Numerology",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "🔢",
    shortDesc: "Calculate Life Path 1-9 & Master Numbers 11, 22, 33.",
    metaTitle: "Life Path Numerology Calculator | Pythagorean Math",
    metaDesc: "Calculate your Life Path number from your birth date and unlock your core personality and life mission.",
    badge: "🔢 Life Path",
    educationalTitle: "Your Fundamental Numerical Vibration",
    educationalContent: "Your Life Path number represents your core traits, destiny path, and major lessons from birth to maturity.",
    faqs: [
      { question: "How is Life Path calculated?", answer: "By reducing your birth day, month, and year down to single digits or master numbers." }
    ]
  },
  {
    id: "destiny-number",
    slug: "destiny-number",
    name: "Expression Destiny Number",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "📜",
    shortDesc: "Chaldean name math to reveal expression archetype.",
    metaTitle: "Expression & Destiny Number Calculator | Name Math",
    metaDesc: "Calculate your Expression Destiny Number using Chaldean and Pythagorean name letter values.",
    badge: "📜 Name Math",
    educationalTitle: "Decoding the Power of Your Birth Name",
    educationalContent: "Every letter in your name vibrates with a numerical frequency. Your Destiny number reveals your natural talents and career expression.",
    faqs: [
      { question: "Should I use my full birth name?", answer: "Yes, your legal birth name yields your core Expression Destiny number." }
    ]
  },
  {
    id: "lifepath-compatibility",
    slug: "lifepath-compatibility",
    name: "Life Path Compatibility Matcher",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "🔢",
    shortDesc: "Compare two Life Path numbers for relationship synastry.",
    metaTitle: "Life Path Numerology Matcher & Compatibility",
    metaDesc: "Calculate Life Path numerology compatibility, relationship synergy score, and karmic advice.",
    badge: "🔢 Synastry",
    educationalTitle: "Numerical Harmony in Partnership",
    educationalContent: "Life Path compatibility measures how two individuals' numerical vibrations interact in romantic and business bonds.",
    faqs: [
      { question: "Are identical Life Path numbers compatible?", answer: "Yes! Identical numbers share mirror-soul harmony and mutual understanding." }
    ]
  },
  {
    id: "brand-numerology",
    slug: "brand-numerology",
    name: "Chaldean Brand & Name Math",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "📜",
    shortDesc: "Optimize business, company & brand name vibration.",
    metaTitle: "Chaldean Brand & Business Name Numerology",
    metaDesc: "Optimize your business, brand, domain, or product name using ancient Chaldean numerology math.",
    badge: "📜 Business Math",
    educationalTitle: "Commercial Success Through Name Numerology",
    educationalContent: "Chaldean numerology assigns values to letters to calculate lucky compound numbers for companies and product brands.",
    faqs: [
      { question: "Which compound numbers bring high business wealth?", answer: "Compound numbers like 14, 15, 19, 21, 24, 32, and 51." }
    ]
  },
  {
    id: "angel-numbers",
    slug: "angel-numbers",
    name: "Angel Numbers Decoder",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "⚡",
    shortDesc: "Decode 111, 222, 444, 777 manifestation codes.",
    metaTitle: "Angel Number Decoder & Cosmic Frequency Guide",
    metaDesc: "Decode 111, 222, 333, 444, 555, 777, 888 angel numbers and unlock manifestation frequencies.",
    badge: "⚡ 111 444 777",
    educationalTitle: "Cosmic Synchronicities & Number Codes",
    educationalContent: "Recurring number sequences are divine synchronicities indicating thoughts materializing rapidly into reality.",
    faqs: [
      { question: "What does seeing 111 or 1111 mean?", answer: "Instant manifestation portal! Focus strictly on desired goals." }
    ]
  },
  {
    id: "soul-urge-number",
    slug: "soul-urge-number",
    name: "Soul Urge Heart Number",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "❤️",
    shortDesc: "Calculated from name vowels (A, E, I, O, U) for heart desires.",
    metaTitle: "Soul Urge Number Calculator | Heart's Desire Math",
    metaDesc: "Calculate your Soul Urge Heart's Desire number from the vowels in your full name.",
    badge: "❤️ Heart's Desire",
    educationalTitle: "The Secret Longing of Your Heart",
    educationalContent: "Your Soul Urge number is derived strictly from the vowels of your name, revealing your deepest emotional motivations.",
    faqs: [
      { question: "Why are vowels used for Soul Urge?", answer: "Vowels represent inner breath, emotion, and private spiritual desires." }
    ]
  },
  {
    id: "personality-number",
    slug: "personality-number",
    name: "Personality Outer Number",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "🎭",
    shortDesc: "Calculated from name consonants for outer social mask.",
    metaTitle: "Personality Number Calculator | Outer Social Persona",
    metaDesc: "Calculate your Outer Personality number from the consonants in your full name.",
    badge: "🎭 Outer Mask",
    educationalTitle: "The First Impression of Your Name",
    educationalContent: "Your Personality number uses consonants to show how people perceive you before getting to know your inner self.",
    faqs: [
      { question: "How does it differ from Soul Urge?", answer: "Soul Urge is inner desire; Personality is outward social demeanor." }
    ]
  },
  {
    id: "birthday-number",
    slug: "birthday-number",
    name: "Birthday Number Talents",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "🎂",
    shortDesc: "Calculated from the exact day of month you were born.",
    metaTitle: "Birthday Number Calculator | Special Birth Day Gift",
    metaDesc: "Discover the specific talent and gift associated with the exact calendar day you were born (1 to 31).",
    badge: "🎂 Day Talent",
    educationalTitle: "Your Natural Born Gift",
    educationalContent: "The exact day of the month you were born (e.g. 7th, 14th, 28th) carries a specific standalone talent gift.",
    faqs: [
      { question: "Does birth day number change if born at night?", answer: "No, it uses the solar calendar day of birth." }
    ]
  },
  {
    id: "personal-year",
    slug: "personal-year",
    name: "Personal Year Cycle Calculator",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "🔄",
    shortDesc: "Calculate your 9-year personal vibration cycle for this year.",
    metaTitle: "Personal Year Cycle Calculator | 9-Year Numerology Wave",
    metaDesc: "Calculate your current Personal Year number (1 to 9) to align with annual growth themes.",
    badge: "🔄 Annual Cycle",
    educationalTitle: "Your 9-Year Lifecycle Rhythm",
    educationalContent: "Every year your personal vibration shifts from 1 (New Beginnings) through 9 (Completion & Release).",
    faqs: [
      { question: "What is a Personal Year 1?", answer: "A prime year for launching new businesses, relationships, and bold directions." }
    ]
  },
  {
    id: "personal-month",
    slug: "personal-month",
    name: "Personal Month Cycle Calculator",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "🌙",
    shortDesc: "Monthly numerology forecast for business & travel.",
    metaTitle: "Personal Month Numerology Forecast",
    metaDesc: "Calculate your current Personal Month number to plan monthly investments, focus, and travel.",
    badge: "🌙 Monthly Wave",
    educationalTitle: "Navigating Monthly Numerical Energies",
    educationalContent: "Personal Month numbers refine your annual theme down to specific 30-day focus windows.",
    faqs: [
      { question: "How is Personal Month calculated?", answer: "Personal Year + Calendar Month number." }
    ]
  },
  {
    id: "personal-day",
    slug: "personal-day",
    name: "Personal Day Frequency Calculator",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "☀️",
    shortDesc: "Daily numerology vibration for instant decision making.",
    metaTitle: "Personal Day Numerology Calculator | Daily Frequency",
    metaDesc: "Calculate today's Personal Day number for instant daily alignment and decision timing.",
    badge: "☀️ Daily Frequency",
    educationalTitle: "Your Daily Numerical Pulse",
    educationalContent: "Personal Day numbers offer micro-guidance for daily meetings, contract signing, and rest.",
    faqs: [
      { question: "What is a Personal Day 8?", answer: "Excellent day for money transactions, sales, and executive decisions." }
    ]
  },
  {
    id: "phone-numerology",
    slug: "phone-numerology",
    name: "Phone Number Numerology",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "📱",
    shortDesc: "Check if your mobile number attracts sales, love or peace.",
    metaTitle: "Phone Number Numerology Calculator | Lucky Mobile Math",
    metaDesc: "Analyze your mobile phone number digits to discover if it attracts business clients, love, or spiritual peace.",
    badge: "📱 Mobile Math",
    educationalTitle: "The Hidden Frequency of Your Mobile Number",
    educationalContent: "We receive calls daily on our mobile numbers. Calculating the single-digit sum reveals its commercial or personal energy.",
    faqs: [
      { question: "Which phone number sum is best for business sales?", answer: "Numbers reducing to 1, 5, 6, or 8." }
    ]
  },
  {
    id: "house-numerology",
    slug: "house-numerology",
    name: "House Number Numerology",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "🏠",
    shortDesc: "Calculate the energy vibration of your home address.",
    metaTitle: "House & Apartment Number Numerology Calculator",
    metaDesc: "Calculate your home or apartment address number to understand your living environment's atmosphere.",
    badge: "🏠 Home Energy",
    educationalTitle: "The Domestic Vibration of Your Home",
    educationalContent: "Your house or apartment number shapes domestic peace, family bonding, creative work, or quiet study.",
    faqs: [
      { question: "What does House Number 6 foster?", answer: "Deep family warmth, harmony, artistic comfort, and hosting guests." }
    ]
  },
  {
    id: "vehicle-numerology",
    slug: "vehicle-numerology",
    name: "Vehicle Number Numerology",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "🚗",
    shortDesc: "Check car & bike license plate number safety & luck.",
    metaTitle: "Vehicle License Plate Numerology Calculator",
    metaDesc: "Calculate car and motorcycle license plate numbers for smooth travel, safety, and lucky energy.",
    badge: "🚗 Vehicle Plate",
    educationalTitle: "Safety & Speed on the Road",
    educationalContent: "License plate numbers vibrate with speed and travel energy. Choosing friendly totals promotes smooth driving.",
    faqs: [
      { question: "Which numbers are favorable for vehicles?", answer: "Numbers summing to 3, 5, or 6." }
    ]
  },
  {
    id: "business-name-numerology",
    slug: "business-name-numerology",
    name: "Business Name Matcher",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "🏢",
    shortDesc: "Match company name with founder's Life Path number.",
    metaTitle: "Business Name & Founder Life Path Matcher",
    metaDesc: "Match your company name vibration with the founder's Life Path number for maximum corporate growth.",
    badge: "🏢 Corporate Match",
    educationalTitle: "Founder & Business Name Synergy",
    educationalContent: "Ensuring your business name number harmonizes with your personal Life Path prevents corporate friction.",
    faqs: [
      { question: "Can changing a brand spelling boost sales?", answer: "Yes! Adjusting letters can shift a business to a high-wealth compound number." }
    ]
  },
  {
    id: "baby-name-numerology",
    slug: "baby-name-numerology",
    name: "Baby Name Numerology",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "👶",
    shortDesc: "Select harmonious newborn names with lucky totals.",
    metaTitle: "Baby Name Numerology Calculator | Lucky Name Selection",
    metaDesc: "Find lucky, harmonious baby name options aligned with birth date numerology and family surnames.",
    badge: "👶 Newborn Names",
    educationalTitle: "Gifting Your Child a Harmonious Name",
    educationalContent: "Selecting a baby name that matches the child's birth date energy sets a supportive foundation for lifelong success.",
    faqs: [
      { question: "Should surname be included when calculating baby name?", answer: "Yes, the full legal name gives the complete Expression number." }
    ]
  },
  {
    id: "master-numbers",
    slug: "master-numbers",
    name: "Master Number 11 22 33 Reader",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "✨",
    shortDesc: "Explore Master Intuition (11), Master Architect (22), Master Teacher (33).",
    metaTitle: "Master Numbers 11, 22, 33 Numerology Reader",
    metaDesc: "Unlock the spiritual potential of Master Numbers 11 (Illuminator), 22 (Master Builder), and 33 (Master Teacher).",
    badge: "✨ 11 22 33",
    educationalTitle: "High-Frequency Master Numbers",
    educationalContent: "Master Numbers carry double-digit intensity requiring high maturity, intuition, and grand-scale vision.",
    faqs: [
      { question: "Why are Master Numbers not reduced?", answer: "They hold master spiritual potential and are preserved in reading." }
    ]
  },
  {
    id: "karmic-debt-number",
    slug: "karmic-debt-number",
    name: "Karmic Debt Number Finder",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "⚖️",
    shortDesc: "Identify Karmic Debt numbers 13, 14, 16, 19 in your chart.",
    metaTitle: "Karmic Debt Number Finder | 13, 14, 16, 19 Lessons",
    metaDesc: "Identify if your birth date or name contains Karmic Debt numbers 13 (Work), 14 (Freedom), 16 (Rebirth), or 19 (Independence).",
    badge: "⚖️ Karmic Debt",
    educationalTitle: "Balancing Past-Life Karmic Lessons",
    educationalContent: "Karmic Debt numbers highlight specific tests in discipline, ego balance, or relationships that lead to profound soul mastery when cleared.",
    faqs: [
      { question: "What is Karmic Debt 16?", answer: "The 'Phoenix Rebirth' debt—learning to dismantle false pride to build authentic truth." }
    ]
  },
  {
    id: "pinnacle-cycles",
    slug: "pinnacle-cycles",
    name: "Attainable Pinnacle Cycles",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "⛰️",
    shortDesc: "Calculate 4 major life pinnacle growth periods.",
    metaTitle: "4 Pinnacle Cycles Numerology Calculator",
    metaDesc: "Calculate the 4 major Pinnacle growth cycles of your life to prepare for major career and spiritual milestones.",
    badge: "⛰️ 4 Pinnacles",
    educationalTitle: "The 4 Great Seasons of Your Life",
    educationalContent: "Pinnacle cycles represent four distinct long-term developmental phases shaping youth, adulthood, maturity, and wisdom.",
    faqs: [
      { question: "How long does each Pinnacle last?", answer: "First Pinnacle lasts roughly 27 to 35 years depending on Life Path." }
    ]
  },
  {
    id: "challenge-numbers",
    slug: "challenge-numbers",
    name: "Challenge Number Finder",
    category: "numerology",
    categoryName: "🔢 Numerology & Name Math",
    icon: "🛡️",
    shortDesc: "Identify specific growth obstacles & overcoming strategies.",
    metaTitle: "Challenge Number Calculator | Overcoming Obstacles",
    metaDesc: "Identify your numerical Challenge numbers to overcome specific emotional and practical life obstacles.",
    badge: "🛡️ Growth Shield",
    educationalTitle: "Mastering Your Personal Challenges",
    educationalContent: "Challenge numbers highlight personal blind spots, giving you specific action steps to build emotional resilience.",
    faqs: [
      { question: "Can Challenge numbers be conquered?", answer: "Absolutely! Facing them transforms weaknesses into core strengths." }
    ]
  },

  // 🎴 Group 4: Tarot, Oracle & Guidance (61-75)
  {
    id: "horoscope",
    slug: "horoscope",
    name: "Daily Zodiac Horoscope",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "🌟",
    shortDesc: "Daily predictions for all 12 signs in love, money & health.",
    metaTitle: "Daily Zodiac Horoscope | Love, Career & Health",
    metaDesc: "Read today's authentic daily horoscope for Aries through Pisces covering romance, finances, and vitality.",
    badge: "🌟 Daily Horoscope",
    educationalTitle: "Daily Celestial Transits for All 12 Signs",
    educationalContent: "Our daily horoscope tracks real-time planetary transits across the 12 zodiac signs.",
    faqs: [
      { question: "Should I read for my Sun or Rising sign?", answer: "Reading for your Rising sign gives the most accurate house placement guidance!" }
    ]
  },
  {
    id: "moon-phase",
    slug: "moon-phase",
    name: "Birth Moon Phase Reader",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "🌖",
    shortDesc: "Discover birth Moon phase archetype & manifestation power.",
    metaTitle: "Birth Moon Phase & Manifestation Reader",
    metaDesc: "Discover your birth Moon phase archetype (New Moon, Full Moon, Gibbous) and manifestation superpower.",
    badge: "🌖 Lunar Phase",
    educationalTitle: "Your Birth Moon Phase Archetype",
    educationalContent: "Your birth Moon phase dictates your emotional operating style and reveals your optimal manifestation cycle.",
    faqs: [
      { question: "What does Full Moon birth indicate?", answer: "Heightened expressiveness, vivid intuition, and emotional charisma." }
    ]
  },
  {
    id: "tarot",
    slug: "tarot",
    name: "3-Card Tarot Reader",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "🎴",
    shortDesc: "Past, Present & Future 3-card spread guidance.",
    metaTitle: "3-Card Tarot Reader | Past, Present & Future",
    metaDesc: "Draw 3 interactive Major Arcana tarot cards for instant clarity on Past, Present, and Future scenarios.",
    badge: "🎴 3 Cards",
    educationalTitle: "The Wisdom of Major Arcana Tarot",
    educationalContent: "Tarot reflects subconscious wisdom. The 3-card spread illuminates where you come from, where you stand, and where you are headed.",
    faqs: [
      { question: "How often should I draw tarot cards?", answer: "Once daily or whenever facing a decision." }
    ]
  },
  {
    id: "north-node",
    slug: "north-node",
    name: "North Node Soul Mission",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "🚀",
    shortDesc: "Find North Node (Rahu) destiny & South Node (Ketu) past life.",
    metaTitle: "North Node & Life Purpose Finder | Karmic Rahu/Ketu",
    metaDesc: "Discover your North Node (Rahu) life mission and South Node (Ketu) past-life karmic patterns.",
    badge: "🚀 Karmic Destiny",
    educationalTitle: "Your Soul's Evolutionary Compass",
    educationalContent: "The North Node represents your unfamiliar growth zone in this lifetime, while the South Node marks your past-life comfort zone.",
    faqs: [
      { question: "What is South Node?", answer: "South Node (Ketu) represents past-life mastery and comfort zone habits." }
    ]
  },
  {
    id: "love-tarot",
    slug: "love-tarot",
    name: "Love Tarot Reading",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "💖",
    shortDesc: "3-card romantic relationship spread & partner feelings.",
    metaTitle: "Free Love Tarot Reading | Relationship Clarity Spread",
    metaDesc: "Draw 3 love tarot cards for instant clarity on your partner's feelings, relationship blocks, and romantic outcome.",
    badge: "💖 Love Spread",
    educationalTitle: "Romantic Clarity Through Love Tarot",
    educationalContent: "The Love Tarot spread illuminates emotional chemistry, subconscious blocks, and future romantic potential.",
    faqs: [
      { question: "Can Love Tarot help singles?", answer: "Yes! It reveals what energy to cultivate to attract true love." }
    ]
  },
  {
    id: "career-tarot",
    slug: "career-tarot",
    name: "Career Tarot Reading",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "💼",
    shortDesc: "3-card business, job transition & money spread.",
    metaTitle: "Career & Money Tarot Reading | Job Transition Spread",
    metaDesc: "Draw 3 career tarot cards for business timing, promotion opportunities, and financial guidance.",
    badge: "💼 Career Spread",
    educationalTitle: "Navigating Work & Financial Choices",
    educationalContent: "Career Tarot provides strategic insights into workplace dynamics, contract timing, and promotion opportunities.",
    faqs: [
      { question: "Which cards indicate financial success?", answer: "Cards like The Sun, The Empress, The Wheel of Fortune, and The World." }
    ]
  },
  {
    id: "yes-no-oracle",
    slug: "yes-no-oracle",
    name: "Yes/No Oracle Cards",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "🔮",
    shortDesc: "Instant 1-card Yes, No or Maybe answer for urgent questions.",
    metaTitle: "Yes / No Oracle Card Reader | Instant Answers",
    metaDesc: "Ask a specific question and draw an instant Yes, No, or Neutral oracle card with practical cosmic advice.",
    badge: "🔮 Instant Answer",
    educationalTitle: "Direct Clarity for Burning Questions",
    educationalContent: "When you need a quick, focused answer, the Yes/No Oracle provides direct intuitive guidance.",
    faqs: [
      { question: "How should I phrase my question?", answer: "Keep your question clear, positive, and focused on a single topic." }
    ]
  },
  {
    id: "past-life-tarot",
    slug: "past-life-tarot",
    name: "Past Life Tarot Reader",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "📜",
    shortDesc: "Uncover past life origins, karmic gifts & lessons.",
    metaTitle: "Past Life Tarot Reader | Karmic Origins & Gifts",
    metaDesc: "Draw 3 past life tarot cards to discover soul origin, past life talents, and active karmic lessons.",
    badge: "📜 Past Life",
    educationalTitle: "Unlocking Soul Memories",
    educationalContent: "Past Life Tarot reveals ancient soul gifts, karmic memories, and repetitive patterns you carry into this lifetime.",
    faqs: [
      { question: "How do past life lessons manifest today?", answer: "As unexplained phobias, instant affinity for certain cultures, or natural talents." }
    ]
  },
  {
    id: "nordic-runes",
    slug: "nordic-runes",
    name: "Runes Reading Guide",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "ᚱ",
    shortDesc: "Ancient Futhark rune casting for strength & wisdom.",
    metaTitle: "Ancient Nordic Runes Casting | Futhark Wisdom",
    metaDesc: "Cast ancient Elder Futhark runes (Fehu, Uruz, Thurisaz, Ansuz) for protection, strength, and warrior wisdom.",
    badge: "ᚱ Elder Futhark",
    educationalTitle: "The Ancient Sacred Runes of the North",
    educationalContent: "Runes are ancient Germanic symbol alphabets used for warrior guidance, protection, and elemental wisdom.",
    faqs: [
      { question: "What does Fehu rune represent?", answer: "Abundance, earned wealth, and mobile prosperity." }
    ]
  },
  {
    id: "crystal-matcher",
    slug: "crystal-matcher",
    name: "Crystal Energy Matcher",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "🔮",
    shortDesc: "Find your lucky healing crystal by zodiac & goal.",
    metaTitle: "Crystal Energy & Gemstone Matcher | Healing Stones",
    metaDesc: "Find your ideal healing crystal (Amethyst, Rose Quartz, Pyrite, Citrine) matched to your zodiac sign.",
    badge: "🔮 Crystal Healing",
    educationalTitle: "Vibrational Crystal Healing",
    educationalContent: "Crystals absorb and amplify specific electromagnetic frequencies. Matching your crystal to your zodiac balances your aura.",
    faqs: [
      { question: "Which crystal attracts money?", answer: "Pyrite and Citrine (The Merchant's Stone)." }
    ]
  },
  {
    id: "chakra-balance",
    slug: "chakra-balance",
    name: "Chakra Energy Balance Reader",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "🧘",
    shortDesc: "Assess 7 Chakra energy centers & meditation tips.",
    metaTitle: "7 Chakra Energy Balance Reader | Kundalini Alignment",
    metaDesc: "Assess your 7 Chakra energy centers (Root to Crown) and receive custom meditation & healing remedies.",
    badge: "🧘 7 Chakras",
    educationalTitle: "Aligning Your 7 Energy Wheels",
    educationalContent: "Chakras are vortexes of energy along the spine. Balancing Root, Sacral, Solar Plexus, Heart, Throat, Third Eye & Crown fosters total health.",
    faqs: [
      { question: "Which chakra rules communication?", answer: "The Vishuddha (Throat) Chakra." }
    ]
  },
  {
    id: "spirit-animal",
    slug: "spirit-animal",
    name: "Spirit Animal Finder",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "🦅",
    shortDesc: "Discover your totem animal guardian & power traits.",
    metaTitle: "Spirit Animal Finder | Shamanic Totem Guide",
    metaDesc: "Discover your primary Spirit Animal totem guardian (Eagle, Wolf, Bear, Owl) matched to your zodiac element.",
    badge: "🦅 Animal Totem",
    educationalTitle: "Connecting With Your Animal Spirit Totem",
    educationalContent: "Spirit animals represent instinctual wisdom guides offering protection, courage, and intuition during life transitions.",
    faqs: [
      { question: "What does the Wolf spirit animal represent?", answer: "Loyalty, sharp intuition, family protection, and solo freedom." }
    ]
  },
  {
    id: "aura-color",
    slug: "aura-color",
    name: "Aura Color Calculator",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "🌈",
    shortDesc: "Calculate your primary aura color & energy field.",
    metaTitle: "Aura Color Calculator | Electromagnetic Energy Field",
    metaDesc: "Calculate your primary Aura color (Emerald, Gold, Indigo, Violet, Ruby) and energy field vibration.",
    badge: "🌈 Aura Color",
    educationalTitle: "The Electromagnetic Glow of Your Soul",
    educationalContent: "Your aura is the luminous electromagnetic field surrounding your body reflecting your emotional and spiritual state.",
    faqs: [
      { question: "What does a Gold Aura signify?", answer: "High spiritual wisdom, leadership grace, and divine protection." }
    ]
  },
  {
    id: "higher-self-oracle",
    slug: "higher-self-oracle",
    name: "Higher Self Oracle",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "✨",
    shortDesc: "Receive intuitive channelled advice from your 5D soul.",
    metaTitle: "Higher Self Oracle | 5D Soul Guidance Channel",
    metaDesc: "Connect with your 5D Higher Self to receive channelled wisdom for peace, purpose, and relationship decisions.",
    badge: "✨ 5D Soul",
    educationalTitle: "Connecting With Your 5D Soul Wisdom",
    educationalContent: "Your Higher Self is the transcendent, omniscient aspect of your soul that remains connected to divine truth.",
    faqs: [
      { question: "How do I tune into my Higher Self?", answer: "Through quiet reflection, meditation, and trusting initial gut instincts." }
    ]
  },
  {
    id: "shadow-work",
    slug: "shadow-work",
    name: "Shadow Work Reflection Guide",
    category: "guidance",
    categoryName: "🔮 Tarot & Soul Guidance",
    icon: "🌑",
    shortDesc: "Uncover subconscious triggers & integrate hidden power.",
    metaTitle: "Shadow Work Astrology Guide | Jungian Integration",
    metaDesc: "Uncover your subconscious triggers, heal repressed emotions, and integrate your hidden shadow self.",
    badge: "🌑 Shadow Work",
    educationalTitle: "Jungian Shadow Integration in Astrology",
    educationalContent: "Shadow work involves exploring hidden or repressed aspects of self to reclaim wholeness, power, and self-love.",
    faqs: [
      { question: "Why is Shadow Work powerful?", answer: "Because integrating your shadow releases hidden creative energy and heals triggers." }
    ]
  },

  // 🌌 Group 5: Astrology Synastry & Relationships (76-90)
  {
    id: "marriage-age",
    slug: "marriage-age",
    name: "Soulmate Marriage Age Predictor",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "💍",
    shortDesc: "Predict probable marriage age timing windows in chart.",
    metaTitle: "Marriage Age Predictor | Vedic Timing Windows",
    metaDesc: "Calculate your most probable marriage age windows based on 7th house lord transits and Jupiter blessings.",
    badge: "💍 Marriage Timing",
    educationalTitle: "Timing Marriage in Vedic Astrology",
    educationalContent: "Marriage timing is activated when Jupiter or Venus transits over your 7th house or natal Moon sign during favorable Dasha periods.",
    faqs: [
      { question: "What age range is typical for marriage transits?", answer: "Common windows occur during Jupiter transits to 1st, 5th, 7th, or 9th houses." }
    ]
  },
  {
    id: "twin-flame-matcher",
    slug: "twin-flame-matcher",
    name: "Zodiac Twin Flame Matcher",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "🔥",
    shortDesc: "Check twin flame soul mirror resonance & intensity.",
    metaTitle: "Zodiac Twin Flame Matcher | Mirror Soul Chemistry",
    metaDesc: "Calculate twin flame soul mirror resonance, intensity score, and karmic growth lessons.",
    badge: "🔥 Twin Flame",
    educationalTitle: "The Intense Mirror Soul Connection",
    educationalContent: "Twin flame connections act as intense cosmic mirrors pushing both individuals toward rapid spiritual awakening.",
    faqs: [
      { question: "How does a Twin Flame differ from a Soulmate?", answer: "Soulmates bring peaceful comfort; Twin Flames trigger intense spiritual evolution." }
    ]
  },
  {
    id: "venus-mars-synastry",
    slug: "venus-mars-synastry",
    name: "Venus-Mars Attraction Chemistry",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "💞",
    shortDesc: "Compare Venus (love) & Mars (desire) cross-aspects.",
    metaTitle: "Venus-Mars Synastry Calculator | Romantic Passion",
    metaDesc: "Analyze Venus and Mars cross-placements between partners to evaluate romantic passion and physical attraction.",
    badge: "💞 Passion Chemistry",
    educationalTitle: "The Cosmic Dance of Love & Desire",
    educationalContent: "Venus represents emotional affection; Mars represents physical passion. Harmonious cross-aspects create magnetic chemistry.",
    faqs: [
      { question: "What is Venus conjunction Mars synastry?", answer: "An undeniable, magnetic physical and romantic attraction!" }
    ]
  },
  {
    id: "7th-house-spouse",
    slug: "7th-house-spouse",
    name: "7th House Ruler Spouse Reader",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "🏛️",
    shortDesc: "Deep dive into your 7th house lord sign & placement.",
    metaTitle: "7th House Lord Spouse Reader | Kalatra Bhava",
    metaDesc: "Deep dive into your 7th house lord sign and placement to discover your partner's exact nature.",
    badge: "🏛️ Kalatra Lord",
    educationalTitle: "The Master Key to Marriage Astrology",
    educationalContent: "The planet ruling your 7th house cusp dictates your spouse's core characteristics, profession, and physical aura.",
    faqs: [
      { question: "What if 7th house lord is in 10th house?", answer: "Your spouse will be highly career-focused and met through professional work." }
    ]
  },
  {
    id: "composite-chart",
    slug: "composite-chart",
    name: "Relationship Composite Chart",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "🧩",
    shortDesc: "Midpoint chart calculation for third entity of relationship.",
    metaTitle: "Relationship Composite Chart | Couples Midpoint Energy",
    metaDesc: "Calculate the composite midpoint chart between two partners to understand the relationship as a joint entity.",
    badge: "🧩 Composite Energy",
    educationalTitle: "The Chart of the Relationship Itself",
    educationalContent: "A Composite chart averages planetary positions between two partners, creating a unique third chart representing the relationship's combined destiny.",
    faqs: [
      { question: "How does Composite differ from Synastry?", answer: "Synastry compares two charts; Composite creates one joint relationship chart." }
    ]
  },
  {
    id: "elemental-compatibility",
    slug: "elemental-compatibility",
    name: "Elemental Harmony Matcher",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "🌊",
    shortDesc: "Fire, Earth, Air & Water cross-elemental breakdown.",
    metaTitle: "Elemental Harmony Matcher | Fire Earth Air Water",
    metaDesc: "Analyze elemental balance between two birth charts for long-term emotional and mental harmony.",
    badge: "🌊 4 Elements",
    educationalTitle: "Balancing the 4 Elements of Life",
    educationalContent: "Harmonizing Fire (spirit), Earth (body), Air (mind), and Water (emotion) ensures holistic balance in marriage.",
    faqs: [
      { question: "What happens when Fire matches Water?", answer: "Creates passion and emotion, requiring mutual patience to avoid boiling over." }
    ]
  },
  {
    id: "communication-compatibility",
    slug: "communication-compatibility",
    name: "Zodiac Communication Style",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "🗣️",
    shortDesc: "Mercury & Air sign alignment for couples dialogue.",
    metaTitle: "Zodiac Communication Compatibility Calculator",
    metaDesc: "Evaluate how you and your partner process thoughts and resolve arguments based on Mercury placements.",
    badge: "🗣️ Dialogue Sync",
    educationalTitle: "Resolving Misunderstandings Through Mercury",
    educationalContent: "Understanding your partner's Mercury sign eliminates friction during debates and fosters open, loving dialogue.",
    faqs: [
      { question: "Why do Air and Water Mercury signs debate differently?", answer: "Air uses logic and facts; Water uses emotional feeling and tone." }
    ]
  },
  {
    id: "intimacy-compatibility",
    slug: "intimacy-compatibility",
    name: "Zodiac Bedroom Chemistry",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "🔥",
    shortDesc: "Mars & Venus intimate connection & stamina reader.",
    metaTitle: "Zodiac Bedroom Chemistry & Intimacy Matcher",
    metaDesc: "Explore intimate compatibility, physical stamina, and romantic chemistry between zodiac signs.",
    badge: "🔥 Intimacy Match",
    educationalTitle: "Understanding Intimate Desires in Astrological Synastry",
    educationalContent: "Mars rules physical stamina while Venus rules sensory pleasure. Aligning both creates deep romantic satisfaction.",
    faqs: [
      { question: "Which signs are most passionate in physical intimacy?", answer: "Scorpio, Aries, Leo, and Taurus." }
    ]
  },
  {
    id: "breakup-recovery",
    slug: "breakup-recovery",
    name: "Breakup Recovery Astrologer",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "🩹",
    shortDesc: "Astrological guidance to heal heartbreak & release exes.",
    metaTitle: "Breakup Recovery Astrologer | Heartbreak Healing",
    metaDesc: "Receive astrological guidance, Saturn timing clarity, and Chiron healing remedies to recover from breakups.",
    badge: "🩹 Healing Heart",
    educationalTitle: "Healing Heartbreak Through Planetary Timing",
    educationalContent: "Breakups often coincide with South Node transits or Saturn lessons designed to clear space for your true soulmate.",
    faqs: [
      { question: "Why do breakups happen during certain transits?", answer: "Transits clear outdated karmic bonds so you can realign with your highest purpose." }
    ]
  },
  {
    id: "in-laws-compatibility",
    slug: "in-laws-compatibility",
    name: "In-Laws Compatibility Reader",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "🏡",
    shortDesc: "Analyze 4th & 10th house indicators for extended family.",
    metaTitle: "In-Laws Astrological Compatibility Reader",
    metaDesc: "Analyze 4th and 10th house placements to understand extended family dynamics and in-law relationships.",
    badge: "🏡 Family Dynamics",
    educationalTitle: "Harmonizing Extended Family Energies",
    educationalContent: "The 4th house rules your mother-in-law's energy while the 10th house rules your father-in-law's energy in marriage astrology.",
    faqs: [
      { question: "Which house rules in-laws in Vedic astrology?", answer: "The 10th house (4th from 7th) rules mother-in-law; 1st house rules father-in-law." }
    ]
  },
  {
    id: "friendship-compatibility",
    slug: "friendship-compatibility",
    name: "Friendship Zodiac Matcher",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "🤝",
    shortDesc: "11th house gains & best friend zodiac compatibility.",
    metaTitle: "Zodiac Friendship Compatibility Matcher",
    metaDesc: "Calculate 11th house friendship harmony, loyalty score, and fun compatibility with your best friends.",
    badge: "🤝 Best Friends",
    educationalTitle: "The Astrology of Lifelong Friendship",
    educationalContent: "The 11th house governs your social circles, community bonds, and trusted lifelong companions.",
    faqs: [
      { question: "Which signs make the most loyal friends?", answer: "Taurus, Cancer, Leo, and Aquarius." }
    ]
  },
  {
    id: "parent-child-astrology",
    slug: "parent-child-astrology",
    name: "Parent-Child Zodiac Guide",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "👨‍👩‍👧",
    shortDesc: "Understand your child's Moon sign & emotional needs.",
    metaTitle: "Parent-Child Zodiac & Moon Sign Guide",
    metaDesc: "Understand your child's Moon sign, emotional needs, and learning style for compassionate parenting.",
    badge: "👨‍👩‍👧 Parenting",
    educationalTitle: "Compassionate Parenting Through the Moon Sign",
    educationalContent: "A child's Moon sign reveals how they process fear, seek comfort, and feel loved by parents.",
    faqs: [
      { question: "How to parent a Water Moon child?", answer: "Provide gentle emotional reassurance and never dismiss their sensitive feelings." }
    ]
  },
  {
    id: "business-partner-compatibility",
    slug: "business-partner-compatibility",
    name: "Business Partner Synastry",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "🤝",
    shortDesc: "7th & 10th house co-founder corporate alignment.",
    metaTitle: "Business Partner & Co-Founder Synastry Matcher",
    metaDesc: "Evaluate business partner compatibility, trust score, and commercial success potential between co-founders.",
    badge: "🤝 Co-Founder",
    educationalTitle: "Corporate Partnership Astrology",
    educationalContent: "Co-founders require complementary Mercury (communication) and Saturn (duty) placements for long-term commercial growth.",
    faqs: [
      { question: "What is the most important factor in business synastry?", answer: "Saturn and Mercury alignment for legal trust and clear decision making." }
    ]
  },
  {
    id: "karmic-relationship",
    slug: "karmic-relationship",
    name: "Karma & Past Life Relationship",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "🌀",
    shortDesc: "Identify Rahu/Ketu & Saturn soul debts between partners.",
    metaTitle: "Karmic Relationship & Past Life Bond Finder",
    metaDesc: "Identify if your relationship is a karmic soul contract using Nodal conjunctions and Saturn aspects.",
    badge: "🌀 Karmic Bond",
    educationalTitle: "Recognizing Karmic Soul Contracts",
    educationalContent: "Karmic relationships feel instantly familiar but carry specific soul lessons that demand personal maturity to balance.",
    faqs: [
      { question: "Why do karmic relationships feel so intense?", answer: "Because they carry past-life emotional momentum that seeks resolution." }
    ]
  },
  {
    id: "soul-contract",
    slug: "soul-contract",
    name: "Soul Contract Reader",
    category: "synastry",
    categoryName: "🌌 Synastry & Relationships",
    icon: "📜",
    shortDesc: "Decode pre-birth agreements with loved ones.",
    metaTitle: "Soul Contract & Sacred Bond Reader",
    metaDesc: "Decode your pre-birth soul agreements with romantic partners, family members, and mentors.",
    badge: "📜 Soul Agreement",
    educationalTitle: "Pre-Birth Soul Agreements",
    educationalContent: "Before incarnating, souls agree to meet to teach each other compassion, strength, forgiveness, and unconditional love.",
    faqs: [
      { question: "Can a soul contract be fulfilled?", answer: "Yes, once the soul lesson is integrated with peace and gratitude." }
    ]
  },

  // 💼 Group 6: Career, Money & Financial Astrology (91-100)
  {
    id: "wealth-astrology",
    slug: "wealth-astrology",
    name: "Wealth & Financial Astrology",
    category: "career",
    categoryName: "💼 Career & Financial Astrology",
    icon: "💰",
    shortDesc: "Analyze 2nd & 11th houses for abundance & money yoga.",
    metaTitle: "Wealth & Financial Astrology Calculator | Dhan Yogas",
    metaDesc: "Analyze your 2nd house of assets and 11th house of income to uncover your natal financial wealth potential.",
    badge: "💰 Wealth Yogas",
    educationalTitle: "The Astrological Blueprint of Abundance",
    educationalContent: "Financial astrology evaluates Jupiter (expansion), Venus (wealth), and the 2nd/11th house lords to unlock major wealth timing.",
    faqs: [
      { question: "What is a Dhan Yoga?", answer: "A powerful combination between 2nd, 5th, 9th, and 11th house lords bringing high wealth." }
    ]
  },
  {
    id: "10th-house-career",
    slug: "10th-house-career",
    name: "10th House Career Vocation",
    category: "career",
    categoryName: "💼 Career & Financial Astrology",
    icon: "💼",
    shortDesc: "Identify ideal profession, status & corporate legacy.",
    metaTitle: "10th House Career Vocation & Job Calculator",
    metaDesc: "Discover your ideal professional vocation, leadership style, and career status using 10th house planetary analysis.",
    badge: "💼 10th House",
    educationalTitle: "Your Professional Vocation & Standing",
    educationalContent: "The 10th house (Karma Bhava) rules your executive position, public standing, career achievement, and life work.",
    faqs: [
      { question: "What if Sun is in 10th house?", answer: "High potential for executive leadership, government status, and public honor." }
    ]
  },
  {
    id: "2nd-11th-house-money",
    slug: "2nd-11th-house-money",
    name: "Money Attraction House Reader",
    category: "career",
    categoryName: "💼 Career & Financial Astrology",
    icon: "💵",
    shortDesc: "Compare liquid cash (2nd house) vs passive gains (11th house).",
    metaTitle: "Money Attraction House Reader | Assets vs Gains",
    metaDesc: "Compare your 2nd house of saved assets with your 11th house of passive income gains.",
    badge: "💵 Money Houses",
    educationalTitle: "Assets vs. Income Streams",
    educationalContent: "The 2nd house represents money in your bank account; the 11th house represents recurring business profits and passive revenue.",
    faqs: [
      { question: "Which planet rules 11th house gains?", answer: "The ruling planet of your 11th house cusp." }
    ]
  },
  {
    id: "business-launch-timing",
    slug: "business-launch-timing",
    name: "Best Business Launch Muhurat",
    category: "career",
    categoryName: "💼 Career & Financial Astrology",
    icon: "🚀",
    shortDesc: "Select lucky dates & times to launch companies.",
    metaTitle: "Business Launch Muhurat | Auspicious Corporate Dates",
    metaDesc: "Select optimal planetary timings to launch new websites, businesses, products, and marketing campaigns.",
    badge: "🚀 Corporate Launch",
    educationalTitle: "Electing Lucky Business Timings",
    educationalContent: "Launching a business during favorable Mercury, Jupiter, and Moon transits ensures smooth cash flow and public adoption.",
    faqs: [
      { question: "Should I launch a business during Mercury Retrograde?", answer: "Avoid starting new launches; instead, use retrograde for re-branding or internal review." }
    ]
  },
  {
    id: "financial-astrology-cycles",
    slug: "financial-astrology-cycles",
    name: "Stock Market Planetary Cycle",
    category: "career",
    categoryName: "💼 Career & Financial Astrology",
    icon: "📈",
    shortDesc: "Track Jupiter, Saturn & Rahu market macro cycles.",
    metaTitle: "Financial Astrology Cycles | Stock Market Timing",
    metaDesc: "Explore planetary transits influencing market trends, commodities, and economic cycles.",
    badge: "📈 Market Cycles",
    educationalTitle: "Macroeconomic Planetary Rhythms",
    educationalContent: "Financial astrology tracks Jupiter (bull market expansion) and Saturn (bear market consolidation) cycles across global markets.",
    faqs: [
      { question: "Which planet rules gold commodities?", answer: "The Sun and Jupiter rule gold." }
    ]
  },
  {
    id: "zodiac-career-finder",
    slug: "zodiac-career-finder",
    name: "Ideal Career Path By Zodiac",
    category: "career",
    categoryName: "💼 Career & Financial Astrology",
    icon: "🎯",
    shortDesc: "Find your ideal career field matched to your zodiac element.",
    metaTitle: "Zodiac Career Path Finder | Ideal Vocation Guide",
    metaDesc: "Discover the most rewarding career fields matched to your zodiac element and planetary strengths.",
    badge: "🎯 Vocation Guide",
    educationalTitle: "Aligning Your Job With Your Cosmic Nature",
    educationalContent: "Fire signs excel in leadership; Earth signs in finance & building; Air signs in media & tech; Water signs in healing & arts.",
    faqs: [
      { question: "What are ideal Earth sign careers?", answer: "Real estate, banking, engineering, architecture, and project management." }
    ]
  },
  {
    id: "workplace-astrology",
    slug: "workplace-astrology",
    name: "Work Stress Relief Astrologer",
    category: "career",
    categoryName: "💼 Career & Financial Astrology",
    icon: "🧘",
    shortDesc: "6th house workplace dynamics & stress management.",
    metaTitle: "Workplace Stress Relief Astrologer | 6th House",
    metaDesc: "Manage workplace dynamics, boss relationships, and work stress using 6th house planetary analysis.",
    badge: "🧘 Work Stress",
    educationalTitle: "Mastering 6th House Workplace Harmony",
    educationalContent: "The 6th house governs daily work routines, co-workers, and health balance.",
    faqs: [
      { question: "How to handle a difficult boss astrologically?", answer: "Look at your 10th house and Sun placement for strategies to earn respect." }
    ]
  },
  {
    id: "leadership-astrology",
    slug: "leadership-astrology",
    name: "Leadership Potential Reader",
    category: "career",
    categoryName: "💼 Career & Financial Astrology",
    icon: "👑",
    shortDesc: "Sun, Mars & Leo placement leadership score.",
    metaTitle: "Leadership Potential & Executive Astrologer",
    metaDesc: "Evaluate your executive leadership style, decision-making courage, and authority potential.",
    badge: "👑 Executive Authority",
    educationalTitle: "The Anatomy of Astrological Leadership",
    educationalContent: "Strong Sun (ego vision), Mars (executive action), and 10th house placements indicate executive authority.",
    faqs: [
      { question: "Can quiet signs be great leaders?", answer: "Yes! Scorpio and Capricorn leaders command immense respect through quiet mastery." }
    ]
  },
  {
    id: "freelance-corporate-astrology",
    slug: "freelance-corporate-astrology",
    name: "Freelance Vs Corporate Guide",
    category: "career",
    categoryName: "💼 Career & Financial Astrology",
    icon: "⚖️",
    shortDesc: "Determine whether solo business or corporate job fits you.",
    metaTitle: "Freelance vs. Corporate Job Astrology Guide",
    metaDesc: "Determine whether your birth chart favors solo entrepreneurship or a structured corporate career.",
    badge: "⚖️ Career Path",
    educationalTitle: "Solo Entrepreneurship vs. Corporate Hierarchy",
    educationalContent: "Strong 1st, 3rd, and 10th houses favor solo consulting; strong 6th and 10th houses favor corporate growth.",
    faqs: [
      { question: "Which planetary placement favors freelancing?", answer: "Strong Mercury, Rahu, and independent 1st/3rd house rulers." }
    ]
  },
  {
    id: "dhan-yoga-calculator",
    slug: "dhan-yoga-calculator",
    name: "Planetary Wealth Yoga Reader",
    category: "career",
    categoryName: "💼 Career & Financial Astrology",
    icon: "🪙",
    shortDesc: "Check for Laxmi, Kuber & Raj Yogas in your birth chart.",
    metaTitle: "Planetary Wealth Yoga Reader | Laxmi & Kuber Yogas",
    metaDesc: "Check your birth chart for special Vedic wealth combinations (Dhan Yogas, Laxmi Yoga, Gaja Kesari Yoga).",
    badge: "🪙 Wealth Yogas",
    educationalTitle: "The Sacred Wealth Yogas of Vedic Astrology",
    educationalContent: "Dhan Yogas occur when prosperity planets align with wealth houses, bestowing lifelong financial abundance.",
    faqs: [
      { question: "What is Gaja Kesari Yoga?", answer: "Jupiter and Moon in mutual Kendras (1st, 4th, 7th, 10th houses), bestowing fame and lasting wealth." }
    ]
  }
];
