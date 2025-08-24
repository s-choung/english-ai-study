// Day 16 vocabulary data
const day16Vocabulary = [
    {
        word: "subsequently",
        hints: ["later", "afterward"],
        sentence: "The meeting was cancelled and _____ rescheduled for next week.",
        korean: "그 후에",
        etymology: "Latin 'sub' (under) + 'sequi' (follow) = following under, later"
    },
    {
        word: "explicit",
        hints: ["clear", "specific", "obvious", "unambiguous", "definite"],
        sentence: "The contract contains _____ instructions about payment terms.",
        korean: "분명한",
        etymology: "Latin 'ex' (out) + 'plicare' (fold) = folded out, clearly shown"
    },
    {
        word: "prevailing",
        hints: ["dominant", "widespread", "current", "existing"],
        sentence: "The _____ winds in this region blow from the west.",
        korean: "(의견 등이) 지배적인",
        etymology: "Latin 'prae' (before) + 'valere' (be strong) = be stronger"
    },
    {
        word: "rudimentary",
        hints: ["basic", "elementary", "fundamental", "primitive", "undeveloped"],
        sentence: "She has only _____ knowledge of computer programming.",
        korean: "기본적인, 미발달의",
        etymology: "Latin 'rudimentum' (first attempt) = beginning, basic element"
    },
    {
        word: "allude to",
        hints: ["suggest", "refer to", "imply", "indicate"],
        sentence: "The speech seemed to _____ recent political scandals.",
        korean: "~을 넌지시 언급하다 (암시하다)",
        etymology: "Latin 'ad' (to) + 'ludere' (play) = play toward, hint at"
    },
    {
        word: "assertive",
        hints: ["forceful", "dogmatic"],
        sentence: "She became more _____ in expressing her opinions.",
        korean: "자기주장이 강한, 독단적인",
        etymology: "Latin 'assertus' (claimed) = declared, maintained strongly"
    },
    {
        word: "fuse",
        hints: ["melt", "dissolve", "combine", "merge"],
        sentence: "The high temperature will _____ the metal components together.",
        korean: "녹다, 녹이다, 융합하다",
        etymology: "Latin 'fusus' (melted) = to melt, blend together"
    },
    {
        word: "transitory",
        hints: ["short-lived", "brief", "ephemeral", "fleeting"],
        sentence: "Fame in the entertainment industry is often _____.",
        korean: "일시적인",
        etymology: "Latin 'transitorius' (passing over) = passing through"
    },
    {
        word: "inviolable",
        hints: ["without exception", "allowing no exception", "sacred"],
        sentence: "The right to privacy should be considered _____.",
        korean: "(법 등이) 어길 수 없는, 신성한",
        etymology: "Latin 'in' (not) + 'violare' (violate) = cannot be violated"
    },
    {
        word: "supersede",
        hints: ["replace", "displace", "supplant", "substitute"],
        sentence: "Digital cameras have largely _____ film cameras.",
        korean: "대신하다",
        etymology: "Latin 'super' (above) + 'sedere' (sit) = sit above, replace"
    },
    {
        word: "abundant",
        hints: ["plentiful", "bountiful", "ample", "numerous"],
        sentence: "The region has _____ natural resources.",
        korean: "풍부한",
        etymology: "Latin 'abundare' (overflow) = flowing over, plentiful"
    },
    {
        word: "significant",
        hints: ["considerable", "substantial", "serious", "important", "essential"],
        sentence: "There was a _____ improvement in his performance.",
        korean: "상당한, 중요한",
        etymology: "Latin 'significare' (indicate) = having meaning, important"
    },
    {
        word: "elaboration",
        hints: ["development", "improvement"],
        sentence: "The proposal needs further _____ before presentation.",
        korean: "공들여 다듬기, 이론의 전개",
        etymology: "Latin 'elaboratus' (worked out) = carefully developed"
    },
    {
        word: "pristine",
        hints: ["unspoiled", "pure", "untouched"],
        sentence: "The national park maintains its _____ wilderness.",
        korean: "자연 그대로의, 오염되지 않은",
        etymology: "Latin 'pristinus' (former) = original, unspoiled state"
    },
    {
        word: "steadily",
        hints: ["consistently", "continuously", "constantly", "at an unvarying rate"],
        sentence: "The company's profits have grown _____ over the years.",
        korean: "끊임없이",
        etymology: "Stead (firm place) + -ily = in a firm manner"
    },
    {
        word: "hence",
        hints: ["therefore", "consequently", "thus"],
        sentence: "The roads are icy; _____, driving is dangerous.",
        korean: "따라서, 그러므로",
        etymology: "Middle English 'hennes' (from here) = from this place/time"
    },
    {
        word: "fabricate",
        hints: ["make", "produce", "build"],
        sentence: "The company will _____ the parts according to specifications.",
        korean: "만들어 내다",
        etymology: "Latin 'fabricare' (construct) = to make, construct"
    },
    {
        word: "meet",
        hints: ["deal with", "handle"],
        sentence: "The security team was trained to _____ any emergency.",
        korean: "(문제·위기에) 대처하다",
        etymology: "Old English 'metan' (encounter) = come face to face with"
    },
    {
        word: "devour",
        hints: ["eat", "consume", "gulp", "gobble"],
        sentence: "The hungry children will _____ their lunch in minutes.",
        korean: "게걸스럽게 먹다",
        etymology: "Latin 'devorare' (swallow down) = eat voraciously"
    },
    {
        word: "amiss",
        hints: ["wrong", "erroneous", "faulty"],
        sentence: "Something seems _____ with the calculations.",
        korean: "잘못된",
        etymology: "Old English 'on miss' (wrongly) = not as it should be"
    },
    {
        word: "figure out",
        hints: ["determine", "calculate", "work out"],
        sentence: "We need to _____ the best solution to this problem.",
        korean: "알아내다",
        etymology: "Figure (calculate) + out = calculate completely"
    },
    {
        word: "augment",
        hints: ["supplement"],
        sentence: "The company plans to _____ its workforce next quarter.",
        korean: "증가시키다",
        etymology: "Latin 'augere' (increase) = to make greater"
    },
    {
        word: "trespass",
        hints: ["invade", "encroach", "infringe"],
        sentence: "Signs warn visitors not to _____ on private property.",
        korean: "불법 침입하다",
        etymology: "Old French 'trespasser' (pass across) = cross unlawfully"
    },
    {
        word: "deduce",
        hints: ["conclude", "infer", "derive"],
        sentence: "From the evidence, we can _____ what happened.",
        korean: "추론하다",
        etymology: "Latin 'deducere' (lead down) = draw a conclusion"
    },
    {
        word: "quantify",
        hints: ["measure"],
        sentence: "It's difficult to _____ the impact of social media.",
        korean: "양을 재다, 측정하다",
        etymology: "Latin 'quantus' (how much) + 'facere' (make) = make measurable"
    },
    {
        word: "aggregation",
        hints: ["group", "body", "assemblage"],
        sentence: "The _____ of data from multiple sources is essential.",
        korean: "집단",
        etymology: "Latin 'aggregare' (add to) = gather together"
    },
    {
        word: "lax",
        hints: ["careless", "neglectful", "negligent"],
        sentence: "Security measures have become too _____ lately.",
        korean: "태만한",
        etymology: "Latin 'laxus' (loose) = not tight, slack"
    },
    {
        word: "pace",
        hints: ["speed", "rate", "tempo"],
        sentence: "The _____ of technological change is accelerating.",
        korean: "속도",
        etymology: "Latin 'passus' (step) = rate of stepping"
    },
    {
        word: "inspect",
        hints: ["examine", "scan", "check"],
        sentence: "Engineers will _____ the bridge for structural damage.",
        korean: "검사하다",
        etymology: "Latin 'inspicere' (look into) = examine closely"
    },
    {
        word: "keen",
        hints: ["sharp", "acute", "eager", "earnest"],
        sentence: "She has a _____ interest in environmental issues.",
        korean: "예리한, 열렬한",
        etymology: "Old English 'cene' (bold) = sharp, intense"
    },
    {
        word: "abandon",
        hints: ["desert", "give up", "forsake", "relinquish"],
        sentence: "The crew had to _____ the sinking ship.",
        korean: "버리다, 포기하다",
        etymology: "Old French 'abandoner' (surrender) = give up control"
    },
    {
        word: "prowess",
        hints: ["ability", "competence", "expertise"],
        sentence: "His athletic _____ earned him a scholarship.",
        korean: "뛰어난 솜씨",
        etymology: "Old French 'proesse' (prowess) = bravery, skill"
    },
    {
        word: "anyone can see",
        hints: ["it is clear", "it is apparent"],
        sentence: "_____ that she has been working very hard.",
        korean: "누가 봐도 알 수 있듯이",
        etymology: "Common English expression = obviously apparent"
    },
    {
        word: "coarse",
        hints: ["rough", "crude"],
        sentence: "The _____ texture of the fabric made it uncomfortable.",
        korean: "거친",
        etymology: "Middle English 'cors' (ordinary) = rough, unrefined"
    },
    {
        word: "impervious",
        hints: ["impermeable", "resistant", "impenetrable"],
        sentence: "The material is _____ to water and heat.",
        korean: "통과할 수 없는",
        etymology: "Latin 'in' (not) + 'pervius' (passable) = not allowing passage"
    },
    {
        word: "moderate",
        hints: ["lessen", "diminish", "gentle", "temperate", "mild"],
        sentence: "The medication will _____ the pain effectively.",
        korean: "누그러지다, 온건한, 온화한",
        etymology: "Latin 'moderare' (control) = keep within bounds"
    },
    {
        word: "stagnant",
        hints: ["inactive", "sluggish"],
        sentence: "The economy has remained _____ for several months.",
        korean: "활발하지 않은",
        etymology: "Latin 'stagnare' (form a pool) = not flowing, motionless"
    },
    {
        word: "drive",
        hints: ["propel", "force", "push", "impel", "compel", "ambition", "campaign", "effort"],
        sentence: "Her _____ for success motivated the entire team.",
        korean: "몰아가다, 추진력, 진취성, (조직적인) 운동",
        etymology: "Old English 'drifan' (urge forward) = push with force"
    },
    {
        word: "anxiety",
        hints: ["worry", "angst", "uneasiness"],
        sentence: "Public speaking causes her great _____.",
        korean: "걱정, 불안",
        etymology: "Latin 'anxius' (troubled) = troubled in mind"
    },
    {
        word: "allegedly",
        hints: ["supposedly", "reportedly"],
        sentence: "The politician _____ accepted bribes from contractors.",
        korean: "전해진 바에 의하면",
        etymology: "Latin 'allegare' (send forth) = assert without proof"
    },
    {
        word: "utilize",
        hints: ["employ", "use", "make use of"],
        sentence: "The company will _____ new technology to improve efficiency.",
        korean: "이용하다",
        etymology: "French 'utiliser' (use) = put to practical use"
    },
    {
        word: "differential",
        hints: ["uneven", "discriminatory"],
        sentence: "The _____ treatment of employees caused complaints.",
        korean: "차별적인",
        etymology: "Latin 'differre' (differ) = showing difference"
    },
    {
        word: "maintain",
        hints: ["preserve", "continue", "sustain", "keep", "claim", "assert", "contend"],
        sentence: "She continues to _____ her innocence despite the evidence.",
        korean: "유지하다, 주장하다",
        etymology: "Latin 'manu tenere' (hold in hand) = keep possession"
    },
    {
        word: "jointly",
        hints: ["together", "in conjunction with", "as one"],
        sentence: "The two companies _____ developed the new product.",
        korean: "함께, 공동으로",
        etymology: "Joint (connected) + -ly = in connection with"
    },
    {
        word: "catastrophic",
        hints: ["disastrous", "harmful", "tragic", "calamitous"],
        sentence: "The earthquake had _____ effects on the region.",
        korean: "비극적인, 파멸의",
        etymology: "Greek 'katastrophe' (overturning) = complete disaster"
    },
    {
        word: "aridity",
        hints: ["dryness", "waterlessness"],
        sentence: "The _____ of the desert makes agriculture impossible.",
        korean: "건조함",
        etymology: "Latin 'aridus' (dry) = lacking moisture"
    },
    {
        word: "paradoxically",
        hints: ["contradictorily", "surprisingly"],
        sentence: "_____, the busiest people often accomplish the most.",
        korean: "역설적으로",
        etymology: "Greek 'para' (against) + 'doxa' (opinion) = contrary to expectation"
    },
    {
        word: "archetypal",
        hints: ["ideal", "classic", "exemplary"],
        sentence: "He represents the _____ successful entrepreneur.",
        korean: "전형적인",
        etymology: "Greek 'arche' (original) + 'typos' (type) = original model"
    },
    {
        word: "purposely",
        hints: ["intentionally", "deliberately", "knowingly"],
        sentence: "She _____ arrived late to avoid the crowd.",
        korean: "고의로",
        etymology: "Purpose (intention) + -ly = with intention"
    },
    {
        word: "collision",
        hints: ["crash", "smash"],
        sentence: "The _____ between the two cars blocked traffic.",
        korean: "충돌",
        etymology: "Latin 'collidere' (strike together) = crash into"
    },
    {
        word: "implant",
        hints: ["insert", "embed"],
        sentence: "The surgeon will _____ the device during the operation.",
        korean: "심다, 끼워넣다",
        etymology: "Latin 'in' (into) + 'plantare' (plant) = place firmly"
    },
    {
        word: "standpoint",
        hints: ["perspective", "point of view"],
        sentence: "From an economic _____, the project is not viable.",
        korean: "관점, 견해",
        etymology: "Stand (position) + point (place) = position of view"
    },
    {
        word: "cue",
        hints: ["signal", "sign"],
        sentence: "The director gave the actor a _____ to begin speaking.",
        korean: "신호",
        etymology: "Latin 'quando' (when) = signal for action"
    },
    {
        word: "trappings",
        hints: ["decoration", "ornament", "adornment"],
        sentence: "The ceremony included all the _____ of a state occasion.",
        korean: "장식, 장신구",
        etymology: "Middle English 'trappe' (cloth) = decorative coverings"
    },
    {
        word: "spawn",
        hints: ["give rise to", "create", "produce"],
        sentence: "The success of the first film will _____ several sequels.",
        korean: "야기하다",
        etymology: "Anglo-French 'espaundre' (spread out) = produce offspring"
    },
    {
        word: "outbreak",
        hints: ["sudden increase", "upsurge"],
        sentence: "There was an _____ of flu cases during winter.",
        korean: "급격한 증가, (질병 등의)창궐",
        etymology: "Out (forth) + break (burst) = sudden eruption"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day16Vocabulary;
} else {
    window.day16Vocabulary = day16Vocabulary;
}