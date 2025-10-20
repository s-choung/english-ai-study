// Day 24 vocabulary data
const day24Vocabulary = [
    {
        word: "sustain",
        hints: ["support", "bear", "uphold", "maintain", "continue"],
        sentence: "The pillars _____ the weight of the entire building.",
        korean: "떠받치다, 지탱하다, 지속하다, 유지하다",
        etymology: "From Latin sustinere 'to hold up, support'"
    },
    {
        word: "subsequence",
        hints: ["succession", "next in a series"],
        sentence: "The _____ of events led to significant changes.",
        korean: "연속, 이어서 일어나는 것",
        etymology: "From Latin subsequens 'following after'"
    },
    {
        word: "accumulate",
        hints: ["gather", "collect", "compile", "gradually increase in number"],
        sentence: "Snow began to _____ on the sidewalks.",
        korean: "(서서히) 모으다",
        etymology: "From Latin accumulare 'to heap up'"
    },
    {
        word: "assert",
        hints: ["claim", "maintain", "declare", "forcefully establish", "contend"],
        sentence: "The witness _____ that he saw the suspect at the scene.",
        korean: "주장하다",
        etymology: "From Latin asserere 'to claim, maintain'"
    },
    {
        word: "progressive",
        hints: ["advanced", "liberal", "increasing", "continuous"],
        sentence: "The company has a _____ approach to employee benefits.",
        korean: "진보적인, 점진적인",
        etymology: "From Latin progressus 'a going forward'"
    },
    {
        word: "strikingly",
        hints: ["remarkably", "noticeably"],
        sentence: "The two paintings are _____ similar.",
        korean: "눈에 띄게",
        etymology: "From strike + -ing + -ly 'in a manner that strikes'"
    },
    {
        word: "comparable",
        hints: ["analogous", "similar", "equivalent", "alike"],
        sentence: "Her skills are _____ to those of a professional.",
        korean: "비슷한, 동등한",
        etymology: "From Latin comparare 'to match, pair'"
    },
    {
        word: "hinder",
        hints: ["interfere with", "hamper", "stunt", "impede"],
        sentence: "Bad weather _____ our progress on the project.",
        korean: "방해하다",
        etymology: "From Old English hindrian 'to harm, injure'"
    },
    {
        word: "concern",
        hints: ["worry", "interest", "regard", "care"],
        sentence: "Environmental protection is a major _____ for the organization.",
        korean: "걱정시키다, 관심(사)",
        etymology: "From Latin concernere 'to relate to'"
    },
    {
        word: "presumably",
        hints: ["supposedly", "probably", "thought it to be", "it can be assumed"],
        sentence: "She is _____ still at work since her car is in the parking lot.",
        korean: "아마",
        etymology: "From Latin praesumere 'to take beforehand'"
    },
    {
        word: "ritual",
        hints: ["ceremonial"],
        sentence: "The tribe performed a _____ dance before the harvest.",
        korean: "의식적인",
        etymology: "From Latin ritualis 'relating to rites'"
    },
    {
        word: "unresolved",
        hints: ["undecided", "undetermined", "unsettled"],
        sentence: "The conflict remains _____ despite numerous negotiations.",
        korean: "미정의",
        etymology: "From un- 'not' + resolved"
    },
    {
        word: "convey",
        hints: ["transmit", "communicate", "deliver", "impact"],
        sentence: "The painting _____ a sense of melancholy.",
        korean: "전달하다",
        etymology: "From Latin conviare 'to escort, convoy'"
    },
    {
        word: "devise",
        hints: ["invent", "create", "design", "contrive"],
        sentence: "Engineers _____ a new method to purify water.",
        korean: "고안하다",
        etymology: "From Latin dividere 'to divide'"
    },
    {
        word: "astonish",
        hints: ["amaze", "surprise", "astound", "shock"],
        sentence: "The magician's trick _____ the audience.",
        korean: "깜짝 놀라게 하다",
        etymology: "From Latin ex- 'out' + tonare 'to thunder'"
    },
    {
        word: "stringent",
        hints: ["strict", "rigorous", "tight"],
        sentence: "The government imposed _____ regulations on food safety.",
        korean: "엄한",
        etymology: "From Latin stringere 'to draw tight'"
    },
    {
        word: "vastly",
        hints: ["greatly", "enormously", "immensely", "exceedingly"],
        sentence: "Technology has improved _____ over the past decade.",
        korean: "대단히",
        etymology: "From Latin vastus 'immense, extensive'"
    },
    {
        word: "to a large extent",
        hints: ["for the most part", "mainly", "largely"],
        sentence: "Success depends _____ on hard work.",
        korean: "대체로",
        etymology: "From extent 'degree, scope'"
    },
    {
        word: "updated",
        hints: ["newer"],
        sentence: "The _____ version of the software includes bug fixes.",
        korean: "최신의",
        etymology: "From up- + date 'bring to current time'"
    },
    {
        word: "impulse",
        hints: ["stimulus", "basic motivation", "impetus"],
        sentence: "He acted on _____ rather than careful thought.",
        korean: "자극(제)",
        etymology: "From Latin impellere 'to drive against'"
    },
    {
        word: "evidence",
        hints: ["proof", "verification"],
        sentence: "There is no _____ to support that claim.",
        korean: "증거",
        etymology: "From Latin evidentia 'clearness, proof'"
    },
    {
        word: "conjuncture",
        hints: ["combination", "connection", "juncture"],
        sentence: "The _____ of circumstances led to an unexpected outcome.",
        korean: "결합, 접합",
        etymology: "From Latin conjungere 'to join together'"
    },
    {
        word: "aberrant",
        hints: ["abnormal", "deviant", "eccentric", "erratic"],
        sentence: "The patient exhibited _____ behavior.",
        korean: "정도를 벗어난",
        etymology: "From Latin aberrare 'to wander away'"
    },
    {
        word: "firmly",
        hints: ["securely", "fixedly"],
        sentence: "The post was _____ anchored in concrete.",
        korean: "단단히",
        etymology: "From firm + -ly 'in a solid manner'"
    },
    {
        word: "invariably",
        hints: ["always", "without exception", "constantly"],
        sentence: "He _____ arrives late to meetings.",
        korean: "언제나, 예외 없이",
        etymology: "From invariable + -ly 'not changing'"
    },
    {
        word: "sacred",
        hints: ["holy", "divine"],
        sentence: "The temple is a _____ place of worship.",
        korean: "신성한",
        etymology: "From Latin sacer 'holy, consecrated'"
    },
    {
        word: "cramped",
        hints: ["confined", "restricted"],
        sentence: "The apartment felt _____ with too much furniture.",
        korean: "비좁은, 제한된",
        etymology: "From cramp 'to confine, restrict'"
    },
    {
        word: "outdated",
        hints: ["old-fashioned", "antiquated", "archaic", "outmoded"],
        sentence: "The _____ equipment needs to be replaced.",
        korean: "구식의",
        etymology: "From out- + dated 'no longer current'"
    },
    {
        word: "self-confident",
        hints: ["assured", "self-assured"],
        sentence: "She is a _____ speaker who captivates her audience.",
        korean: "자신감 있는",
        etymology: "From self + confident 'having belief in oneself'"
    },
    {
        word: "allay",
        hints: ["reduce", "relieve", "soothe"],
        sentence: "The doctor tried to _____ the patient's fears.",
        korean: "완화시키다",
        etymology: "From Old English alecgan 'to put down'"
    },
    {
        word: "authenticity",
        hints: ["genuineness", "realness"],
        sentence: "Experts verified the _____ of the ancient manuscript.",
        korean: "진짜",
        etymology: "From Greek authentikos 'genuine'"
    },
    {
        word: "masked",
        hints: ["concealed", "covered"],
        sentence: "Her smile _____ her true feelings.",
        korean: "가면을 쓴, 감춘",
        etymology: "From mask 'covering for the face'"
    },
    {
        word: "fracture",
        hints: ["rupture", "crack", "gap", "cleft"],
        sentence: "The earthquake caused a _____ in the foundation.",
        korean: "균열, 갈라진 틈",
        etymology: "From Latin frangere 'to break'"
    },
    {
        word: "scanty",
        hints: ["scarce", "sparse", "thin", "short", "meager"],
        sentence: "The _____ evidence was insufficient for a conviction.",
        korean: "부족한",
        etymology: "From scant 'barely sufficient'"
    },
    {
        word: "debris",
        hints: ["fragment", "wreckage", "remains", "dreg"],
        sentence: "Workers cleared _____ from the construction site.",
        korean: "파편, 잔해",
        etymology: "From French débris 'remains, waste'"
    },
    {
        word: "unexpectedly",
        hints: ["surprisingly", "unpredictably"],
        sentence: "The weather changed _____ in the afternoon.",
        korean: "뜻밖에",
        etymology: "From un- 'not' + expected + -ly"
    },
    {
        word: "marginally",
        hints: ["slightly", "somewhat", "a little"],
        sentence: "Profits increased _____ this quarter.",
        korean: "조금",
        etymology: "From marginal + -ly 'at the edge'"
    },
    {
        word: "infrequent",
        hints: ["uncommon", "rare", "unusual"],
        sentence: "Snowfall is _____ in this region.",
        korean: "드문",
        etymology: "From in- 'not' + frequent"
    },
    {
        word: "capacity",
        hints: ["ability", "talent", "flair"],
        sentence: "She has the _____ to lead the team effectively.",
        korean: "능력, 재능",
        etymology: "From Latin capacitas 'breadth, capacity'"
    },
    {
        word: "conceive",
        hints: ["imagine", "envision", "visualize"],
        sentence: "It's difficult to _____ of a time before the internet.",
        korean: "상상하다",
        etymology: "From Latin concipere 'to take in, conceive'"
    },
    {
        word: "immobile",
        hints: ["unable to move", "motionless"],
        sentence: "The injured bird lay _____ on the ground.",
        korean: "움직이지 못하는, 정지한",
        etymology: "From Latin immobilis 'immovable'"
    },
    {
        word: "milestone",
        hints: ["significant event", "important event"],
        sentence: "Graduating from college was a major _____ in her life.",
        korean: "획기적인 사건",
        etymology: "From mile + stone 'marker stone on road'"
    },
    {
        word: "tempting",
        hints: ["attractive", "appealing", "inviting", "appetizing"],
        sentence: "The dessert display looked very _____.",
        korean: "매력적인",
        etymology: "From Latin temptare 'to test, try'"
    },
    {
        word: "antagonistic",
        hints: ["hostile", "adversarial"],
        sentence: "The two groups have an _____ relationship.",
        korean: "적대하는, 대립하는",
        etymology: "From Greek antagonistes 'opponent'"
    },
    {
        word: "prized",
        hints: ["outstanding", "prominent", "valued"],
        sentence: "The _____ possession was a family heirloom.",
        korean: "뛰어난, 소중한",
        etymology: "From prize 'something valued'"
    },
    {
        word: "cognitive",
        hints: ["mental"],
        sentence: "The study examines _____ development in children.",
        korean: "인지(력)의, 정신적 작용의",
        etymology: "From Latin cognoscere 'to get to know'"
    },
    {
        word: "refuge",
        hints: ["shelter", "place of safety", "sanctuary"],
        sentence: "The hikers sought _____ from the storm in a cave.",
        korean: "피난처",
        etymology: "From Latin refugium 'a place to flee to'"
    },
    {
        word: "full sweep",
        hints: ["whole range"],
        sentence: "The exhibition showed the _____ of her artistic talent.",
        korean: "모든 범위",
        etymology: "From full + sweep 'complete range'"
    },
    {
        word: "notwithstanding",
        hints: ["despite", "in spite of"],
        sentence: "_____ the difficulties, they completed the project.",
        korean: "~에도 불구하고",
        etymology: "From not + withstanding 'resisting'"
    },
    {
        word: "trap",
        hints: ["catch", "capture"],
        sentence: "The explorers were _____ by the rising floodwaters.",
        korean: "잡다",
        etymology: "From Old English traeppe 'snare'"
    },
    {
        word: "methodical",
        hints: ["systematic", "organized"],
        sentence: "His _____ approach ensured no detail was overlooked.",
        korean: "체계적인",
        etymology: "From Greek methodos 'method'"
    },
    {
        word: "emergency",
        hints: ["crisis", "exigency"],
        sentence: "In case of _____, call 911 immediately.",
        korean: "위기, 비상 사태",
        etymology: "From Latin emergere 'to rise out'"
    },
    {
        word: "gain",
        hints: ["increase", "rise", "growth", "augmentation"],
        sentence: "There was a significant _____ in productivity.",
        korean: "증가",
        etymology: "From Old French gaignier 'to earn, gain'"
    },
    {
        word: "signal",
        hints: ["cue", "indicate", "communicate", "gesture", "motion"],
        sentence: "The bell _____ the end of class.",
        korean: "신호를 보내다",
        etymology: "From Latin signalis 'of a sign'"
    },
    {
        word: "issue",
        hints: ["matter", "point", "question"],
        sentence: "Climate change is a critical _____ facing the world.",
        korean: "문제, 논점",
        etymology: "From Latin exire 'to go out'"
    },
    {
        word: "obliterate",
        hints: ["delete", "erase", "efface"],
        sentence: "The explosion _____ all evidence of the building.",
        korean: "지우다",
        etymology: "From Latin oblitterare 'to erase'"
    },
    {
        word: "in addition",
        hints: ["moreover"],
        sentence: "_____ to his regular duties, he volunteers at the hospital.",
        korean: "게다가",
        etymology: "From Latin additionem 'adding to'"
    },
    {
        word: "at the same time",
        hints: ["simultaneously"],
        sentence: "The two events occurred _____ in different locations.",
        korean: "동시에, 함께",
        etymology: "From same + time 'occurring together'"
    },
    {
        word: "voracious predator",
        hints: ["strong competitor"],
        sentence: "The shark is a _____ of the ocean.",
        korean: "탐욕스러운 포식자",
        etymology: "From Latin vorare 'to devour'"
    }
];

// Make it available as a global variable for browser use
if (typeof window !== 'undefined') {
    window.day24Vocabulary = day24Vocabulary;
}

// Support both CommonJS and ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day24Vocabulary;
}
