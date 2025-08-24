// Day 12 vocabulary data
const day12Vocabulary = [
    {
        word: "duration",
        hints: ["span", "length", "term"],
        sentence: "The _____ of the movie is two hours.",
        korean: "(지속되는) 기간",
        etymology: "From Latin durare 'to last, endure'"
    },
    {
        word: "massive",
        hints: ["huge", "enormous", "very large", "tremendous", "colossal"],
        sentence: "The company announced a _____ investment in renewable energy.",
        korean: "대규모의, 거대한",
        etymology: "From Latin massa 'lump, bulk' + -ive"
    },
    {
        word: "feasible",
        hints: ["practicable", "viable", "possible", "achievable", "most likely"],
        sentence: "The plan seems _____ given our current resources.",
        korean: "실행 가능한",
        etymology: "From Latin facere 'to do, make' + -ible"
    },
    {
        word: "vibrant",
        hints: ["active", "vivacious", "energetic", "vivid", "bright", "brilliant"],
        sentence: "The city has a _____ arts and culture scene.",
        korean: "활기 넘치는, (색 등이) 선명한",
        etymology: "From Latin vibrare 'to vibrate, move rapidly'"
    },
    {
        word: "accumulation",
        hints: ["buildup", "collection", "stock"],
        sentence: "The _____ of wealth takes time and patience.",
        korean: "축적",
        etymology: "From Latin accumulare 'to heap up'"
    },
    {
        word: "link",
        hints: ["connection", "bond", "tie", "connect", "relate", "associate"],
        sentence: "Scientists found a _____ between diet and heart disease.",
        korean: "관계, 유대, 관련짓다",
        etymology: "From Old Norse hlenkr 'chain'"
    },
    {
        word: "informally",
        hints: ["commonly", "casually"],
        sentence: "The committee met _____ to discuss the proposal.",
        korean: "비공식적으로",
        etymology: "From in- 'not' + formal + -ly"
    },
    {
        word: "sovereign",
        hints: ["master", "monarch", "ruler"],
        sentence: "The _____ ruled the kingdom for forty years.",
        korean: "군주",
        etymology: "From Latin superanus 'chief, principal'"
    },
    {
        word: "key",
        hints: ["important", "central", "essential", "tone"],
        sentence: "Education is _____ to economic development.",
        korean: "중요한, (악곡의) 조",
        etymology: "From Old English caeg 'instrument for opening locks'"
    },
    {
        word: "eventually",
        hints: ["in the end", "finally", "ultimately", "later", "in (due) time"],
        sentence: "If you keep practicing, you will _____ succeed.",
        korean: "결국",
        etymology: "From Latin eventus 'outcome' + -ally"
    },
    {
        word: "persistent",
        hints: ["continuous", "enduring", "long-lasting", "constant"],
        sentence: "Her _____ efforts finally paid off.",
        korean: "지속되는",
        etymology: "From Latin persistere 'to continue steadfastly'"
    },
    {
        word: "corroborate",
        hints: ["confirm", "verify", "substantiate"],
        sentence: "The witness was able to _____ the defendant's alibi.",
        korean: "확증하다",
        etymology: "From Latin corroborare 'to strengthen'"
    },
    {
        word: "inaugurate",
        hints: ["introduce", "initiate", "begin", "commence"],
        sentence: "The president will _____ the new policy next month.",
        korean: "개시하다, 시작하다",
        etymology: "From Latin inaugurare 'to consecrate by augury'"
    },
    {
        word: "further",
        hints: ["additional", "extra", "supplementary"],
        sentence: "We need _____ information before making a decision.",
        korean: "추가적인",
        etymology: "From Old English furthor 'to a greater extent'"
    },
    {
        word: "concentrate on",
        hints: ["focus on", "pay attention to"],
        sentence: "Students should _____ their studies during exam week.",
        korean: "~에 집중하다",
        etymology: "From Latin con- 'together' + centrum 'center'"
    },
    {
        word: "moreover",
        hints: ["additionally", "in addition", "as well", "besides"],
        sentence: "The plan is expensive; _____, it's impractical.",
        korean: "게다가",
        etymology: "From more + over 'beyond that'"
    },
    {
        word: "execute",
        hints: ["perform", "carry out", "fulfill", "implement", "produce"],
        sentence: "The team will _____ the plan next quarter.",
        korean: "수행하다, (미술품 등을) 제작하다",
        etymology: "From Latin exsequi 'to follow out, accomplish'"
    },
    {
        word: "urbane",
        hints: ["cultivated", "sophisticated", "polished", "refined"],
        sentence: "His _____ manner impressed everyone at the dinner party.",
        korean: "세련된",
        etymology: "From Latin urbanus 'of the city, refined'"
    },
    {
        word: "boast",
        hints: ["show off", "brag", "swagger", "pride oneself on", "proudly possess"],
        sentence: "The city can _____ several world-class museums.",
        korean: "자랑하다, (자랑거리로서) 가지고 있다",
        etymology: "From Anglo-Norman bost 'bragging'"
    },
    {
        word: "envision",
        hints: ["imagine", "conceive", "visualize"],
        sentence: "Can you _____ a world without the internet?",
        korean: "마음속에 그리다, 상상하다",
        etymology: "From en- 'in' + vision 'sight'"
    },
    {
        word: "intermediate",
        hints: ["in-between", "between extremes", "median"],
        sentence: "This course is designed for _____ level students.",
        korean: "중간의",
        etymology: "From Latin inter 'between' + medius 'middle'"
    },
    {
        word: "frightful",
        hints: ["alarming", "fearsome"],
        sentence: "The storm caused _____ damage to the coastal towns.",
        korean: "무서운",
        etymology: "From fright + -ful 'full of fear'"
    },
    {
        word: "irrevocable",
        hints: ["permanent", "irreversible", "unchangeable"],
        sentence: "Once signed, the contract is _____.",
        korean: "돌이킬 수 없는",
        etymology: "From Latin ir- 'not' + revocare 'to call back'"
    },
    {
        word: "disintegration",
        hints: ["breaking apart", "collapse"],
        sentence: "The _____ of the empire took several decades.",
        korean: "분해, 붕괴",
        etymology: "From dis- 'apart' + integrate 'make whole'"
    },
    {
        word: "burgeoning",
        hints: ["rapidly expanding", "growing", "escalating"],
        sentence: "The city has a _____ tech industry.",
        korean: "급증하는",
        etymology: "From Old French bourgeonner 'to bud, sprout'"
    },
    {
        word: "terrestrial",
        hints: ["earthly", "worldly"],
        sentence: "Scientists study both _____ and marine ecosystems.",
        korean: "지상의, 육지의",
        etymology: "From Latin terra 'earth' + -ial"
    },
    {
        word: "adorn",
        hints: ["decorate", "beautify", "ornament"],
        sentence: "Flowers _____ the tables at the wedding reception.",
        korean: "꾸미다",
        etymology: "From Latin adornare 'to equip, embellish'"
    },
    {
        word: "revolution",
        hints: ["fundamental change", "innovation"],
        sentence: "The industrial _____ transformed society.",
        korean: "변혁, 혁명",
        etymology: "From Latin revolutio 'a turn around'"
    },
    {
        word: "randomness",
        hints: ["lack of pattern"],
        sentence: "The _____ of the lottery makes it impossible to predict.",
        korean: "무작위성",
        etymology: "From random + -ness 'state of being without pattern'"
    },
    {
        word: "superficial",
        hints: ["external", "not deep", "exterior"],
        sentence: "His knowledge of the subject is only _____.",
        korean: "표면적인",
        etymology: "From Latin superficies 'surface'"
    },
    {
        word: "diversion",
        hints: ["distraction"],
        sentence: "Reading serves as a pleasant _____ from work stress.",
        korean: "주의 전환물",
        etymology: "From Latin divertere 'to turn aside'"
    },
    {
        word: "originate from",
        hints: ["come from", "derive from", "stem from"],
        sentence: "Many English words _____ Latin and Greek.",
        korean: "~에서 비롯되다",
        etymology: "From Latin origo 'beginning, source'"
    },
    {
        word: "intimate",
        hints: ["close", "familiar"],
        sentence: "They have been _____ friends since childhood.",
        korean: "친밀한",
        etymology: "From Latin intimus 'inmost, deepest'"
    },
    {
        word: "blossom",
        hints: ["flourish", "bloom", "thrive"],
        sentence: "Her career began to _____ after she moved to the city.",
        korean: "번영하다",
        etymology: "From Old English blostm 'flower'"
    },
    {
        word: "groundwork",
        hints: ["foundation", "basis", "footing"],
        sentence: "We need to lay the _____ for future success.",
        korean: "토대, 기초",
        etymology: "From ground + work 'foundation work'"
    },
    {
        word: "trivial",
        hints: ["small", "frivolous", "unimportant", "insignificant"],
        sentence: "Don't waste time on _____ matters.",
        korean: "사소한",
        etymology: "From Latin trivialis 'commonplace, ordinary'"
    },
    {
        word: "posterity",
        hints: ["future generations", "next generations"],
        sentence: "We must preserve the environment for _____.",
        korean: "후대",
        etymology: "From Latin posterus 'coming after'"
    },
    {
        word: "aggravate",
        hints: ["make worse", "worsen", "exacerbate"],
        sentence: "Stress can _____ existing health problems.",
        korean: "악화시키다",
        etymology: "From Latin aggravare 'to make heavier'"
    },
    {
        word: "obtainable",
        hints: ["available", "accessible", "attainable"],
        sentence: "The information is easily _____ online.",
        korean: "얻을 수 있는",
        etymology: "From obtain + -able 'capable of being obtained'"
    },
    {
        word: "extent",
        hints: ["range", "scope", "stretch"],
        sentence: "The full _____ of the damage is still unknown.",
        korean: "범위",
        etymology: "From Latin extentus 'stretched out'"
    },
    {
        word: "ingenious",
        hints: ["inventive", "creative", "innovative", "(very) clever"],
        sentence: "She came up with an _____ solution to the problem.",
        korean: "기발한, 독창적인",
        etymology: "From Latin ingenium 'inborn talent'"
    },
    {
        word: "burst",
        hints: ["break open", "break out"],
        sentence: "The dam might _____ if the pressure increases.",
        korean: "터지다",
        etymology: "From Old English berstan 'to break suddenly'"
    },
    {
        word: "outlying",
        hints: ["far from the center", "remote", "distant"],
        sentence: "The company has offices in several _____ areas.",
        korean: "외진, 중심에서 떨어진",
        etymology: "From out + lying 'situated away from'"
    },
    {
        word: "revolve around",
        hints: ["focus on", "center on"],
        sentence: "The discussion will _____ the budget proposal.",
        korean: "~을 중심으로 돌다",
        etymology: "From Latin revolvere 'to roll back'"
    },
    {
        word: "meticulously",
        hints: ["carefully", "precisely"],
        sentence: "She _____ checked every detail of the report.",
        korean: "꼼꼼히",
        etymology: "From Latin meticulosus 'fearful, timid' (hence careful)"
    },
    {
        word: "utilitarian",
        hints: ["practical", "pragmatic", "functional"],
        sentence: "The building's design is purely _____.",
        korean: "실용적인",
        etymology: "From utility + -arian 'useful, practical'"
    },
    {
        word: "constitute",
        hints: ["make up", "comprise", "compose"],
        sentence: "Women _____ 60% of the workforce.",
        korean: "구성하다",
        etymology: "From Latin constituere 'to establish, set up'"
    },
    {
        word: "reciprocal",
        hints: ["mutual"],
        sentence: "Trust requires _____ respect between partners.",
        korean: "상호 간의",
        etymology: "From Latin reciprocus 'returning the same way'"
    },
    {
        word: "tendency",
        hints: ["inclination", "trend", "proneness"],
        sentence: "He has a _____ to arrive late.",
        korean: "경향",
        etymology: "From Latin tendere 'to stretch, aim'"
    },
    {
        word: "artifact",
        hints: ["object", "item", "article"],
        sentence: "The museum displays ancient _____ from Egypt.",
        korean: "인공 유물",
        etymology: "From Latin arte 'by skill' + factum 'made'"
    },
    {
        word: "expedite",
        hints: ["accelerate", "speed up", "urge", "rush"],
        sentence: "We need to _____ the shipping process.",
        korean: "신속히 처리하다, 촉진시키다",
        etymology: "From Latin expedire 'to free from entanglement'"
    },
    {
        word: "scenario",
        hints: ["situation", "sequence of events"],
        sentence: "Let's consider the worst-case _____.",
        korean: "(사건의) 시나리오",
        etymology: "From Italian scenario 'outline of a plot'"
    },
    {
        word: "define",
        hints: ["identify"],
        sentence: "We need to clearly _____ our goals.",
        korean: "분명히 하다",
        etymology: "From Latin definire 'to limit, determine'"
    },
    {
        word: "propulsion",
        hints: ["moving forward", "thrust", "impetus"],
        sentence: "Rocket _____ systems use controlled explosions.",
        korean: "추진, 추진력",
        etymology: "From Latin propellere 'to drive forward'"
    },
    {
        word: "resolute",
        hints: ["firm", "determined", "steadfast", "unwavering"],
        sentence: "She remained _____ in her decision despite criticism.",
        korean: "확고한",
        etymology: "From Latin resolvere 'to loosen, release' (hence decided)"
    },
    {
        word: "phase",
        hints: ["period", "stage", "step"],
        sentence: "The project is entering its final _____.",
        korean: "시기, 단계",
        etymology: "From Greek phasis 'appearance, phase of moon'"
    },
    {
        word: "fairly",
        hints: ["reasonably", "moderately", "pretty", "impartially"],
        sentence: "The test was _____ easy compared to last year's.",
        korean: "꽤, 공정하게",
        etymology: "From fair + -ly 'in a just or moderate manner'"
    }
];

// Make it available as a global variable for browser use
if (typeof window !== 'undefined') {
    window.day12Vocabulary = day12Vocabulary;
}

// Support both CommonJS and ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day12Vocabulary;
}