// Day 29 vocabulary data
const day29Vocabulary = [
    {
        word: "analogous",
        hints: ["similar", "comparable", "like", "parallel"],
        sentence: "The heart is _____ to a pump in the way it works.",
        korean: "유사한",
        etymology: "From Greek analogos 'proportionate'"
    },
    {
        word: "repercussion",
        hints: ["effect", "consequence", "result"],
        sentence: "The decision will have serious _____ for the economy.",
        korean: "(사건·행동 등의) 영향",
        etymology: "From Latin repercutere 'to cause to rebound'"
    },
    {
        word: "impart",
        hints: ["give", "provide", "bestow", "offer", "grant"],
        sentence: "Teachers _____ knowledge to their students.",
        korean: "주다, 부여하다",
        etymology: "From Latin impartire 'to share'"
    },
    {
        word: "foster",
        hints: ["encourage", "promote", "nurture"],
        sentence: "The program aims to _____ creativity in children.",
        korean: "조장하다",
        etymology: "From Old English fōstor 'food, nourishment'"
    },
    {
        word: "elongate",
        hints: ["stretch", "lengthen", "extend", "prolong"],
        sentence: "The shadows _____ as the sun sets.",
        korean: "늘이다",
        etymology: "From Latin elongare 'to remove to a distance'"
    },
    {
        word: "in tandem with",
        hints: ["in association with", "in conjunction with"],
        sentence: "The company works _____ local communities.",
        korean: "~와 협력하여",
        etymology: "From tandem 'at length, together'"
    },
    {
        word: "transition",
        hints: ["change", "alteration", "shift"],
        sentence: "The country is undergoing a _____ to democracy.",
        korean: "변화, 변천",
        etymology: "From Latin transire 'to go across'"
    },
    {
        word: "scarce",
        hints: ["limited", "short in supply", "not readily available", "rare"],
        sentence: "Water is becoming increasingly _____ in the region.",
        korean: "부족한, 희귀한",
        etymology: "From Old French escars 'restricted'"
    },
    {
        word: "clear",
        hints: ["apparent", "obvious", "lucid", "remove", "clean"],
        sentence: "Please _____ the table after dinner.",
        korean: "분명한, 치우다",
        etymology: "From Latin clarus 'clear, bright'"
    },
    {
        word: "relentless",
        hints: ["continuous", "unceasing", "persistent"],
        sentence: "The _____ rain caused severe flooding.",
        korean: "끊임없는",
        etymology: "From relent + -less 'not yielding'"
    },
    {
        word: "intrinsic",
        hints: ["inherent", "innate", "essential"],
        sentence: "The gem has _____ value regardless of market prices.",
        korean: "고유의, 타고난",
        etymology: "From Latin intrinsecus 'inwardly'"
    },
    {
        word: "compact",
        hints: ["dense", "thick", "smaller", "pocket-sized", "little", "compress", "condense"],
        sentence: "The device is _____ enough to fit in your pocket.",
        korean: "빽빽한, 작은, 압축하다",
        etymology: "From Latin compactus 'put together'"
    },
    {
        word: "predominantly",
        hints: ["mainly", "primarily", "mostly", "largely"],
        sentence: "The population is _____ young.",
        korean: "주로, 대부분",
        etymology: "From predominant + -ly 'in a prevailing manner'"
    },
    {
        word: "widespread",
        hints: ["prevalent", "broadly accepted", "common"],
        sentence: "There is _____ support for the new policy.",
        korean: "광범위한, 널리 퍼진",
        etymology: "From wide + spread 'extended over a large area'"
    },
    {
        word: "perishable",
        hints: ["likely to decay", "likely to spoil", "spoilable", "not permanent"],
        sentence: "Store _____ goods in the refrigerator.",
        korean: "잘 상하는, 썩기 쉬운, 영속하지 않는",
        etymology: "From Latin perire 'to pass away'"
    },
    {
        word: "myriad",
        hints: ["multitude", "millions", "countless", "innumerable", "numerous"],
        sentence: "The forest contains a _____ of plant species.",
        korean: "무수히 많음, 무수한",
        etymology: "From Greek myrias 'ten thousand'"
    },
    {
        word: "found",
        hints: ["establish", "create", "set up"],
        sentence: "The university was _____ in 1850.",
        korean: "창설하다, 설립하다",
        etymology: "From Latin fundare 'to lay the bottom'"
    },
    {
        word: "swiftly",
        hints: ["quickly", "speedily", "rapidly"],
        sentence: "The company responded _____ to the crisis.",
        korean: "빠르게",
        etymology: "From swift + -ly 'in a quick manner'"
    },
    {
        word: "crucially",
        hints: ["decisively", "critically", "definitively"],
        sentence: "The evidence was _____ important to the case.",
        korean: "결정적으로",
        etymology: "From crucial + -ly 'in a critical manner'"
    },
    {
        word: "scope",
        hints: ["extent", "range", "reach"],
        sentence: "The _____ of the project is quite ambitious.",
        korean: "범위",
        etymology: "From Greek skopos 'target, aim'"
    },
    {
        word: "projection",
        hints: ["estimate", "calculation", "forecast", "prediction"],
        sentence: "The _____ shows continued growth next year.",
        korean: "추정, 예상",
        etymology: "From Latin projicere 'to throw forth'"
    },
    {
        word: "feature",
        hints: ["characteristic", "attribute", "quality"],
        sentence: "The main _____ of the product is its durability.",
        korean: "특징",
        etymology: "From Latin factura 'a making, formation'"
    },
    {
        word: "employ",
        hints: ["use", "utilize", "make use of"],
        sentence: "The company _____ advanced technology in production.",
        korean: "사용하다",
        etymology: "From Latin implicare 'to enfold, involve'"
    },
    {
        word: "proportion",
        hints: ["percentage", "rate", "size", "magnitude"],
        sentence: "A large _____ of students passed the exam.",
        korean: "비율, 크기, 규모",
        etymology: "From Latin proportio 'comparative relation'"
    },
    {
        word: "misleading",
        hints: ["deceptive", "unreliable", "delusive"],
        sentence: "The advertisement contains _____ information.",
        korean: "현혹시키는",
        etymology: "From mis- + leading 'causing error'"
    },
    {
        word: "seamless",
        hints: ["perfectly smooth", "flawless"],
        sentence: "The transition was _____ and unnoticeable.",
        korean: "아주 매끄러운",
        etymology: "From seam + -less 'without joints'"
    },
    {
        word: "embellishment",
        hints: ["decoration", "ornamentation", "adornment"],
        sentence: "The dress was simple with minimal _____.",
        korean: "장식(물)",
        etymology: "From Old French embellir 'to make beautiful'"
    },
    {
        word: "sterile",
        hints: ["barren", "unproductive", "infertile"],
        sentence: "The soil is _____ and unable to support crops.",
        korean: "척박한",
        etymology: "From Latin sterilis 'barren'"
    },
    {
        word: "in response to",
        hints: ["in reaction to"],
        sentence: "The policy was changed _____ public demand.",
        korean: "~에 대한 대응으로",
        etymology: "From response 'answer, reply'"
    },
    {
        word: "from time to time",
        hints: ["occasionally", "now and then"],
        sentence: "We meet for coffee _____ to catch up.",
        korean: "가끔",
        etymology: "From time to time 'at intervals'"
    },
    {
        word: "ambiguous",
        hints: ["open to various interpretations", "uncertain", "obscure"],
        sentence: "The instructions were _____ and confusing.",
        korean: "모호한",
        etymology: "From Latin ambiguus 'doubtful'"
    },
    {
        word: "out of sight",
        hints: ["hidden", "invisible"],
        sentence: "Keep the medication _____ of children.",
        korean: "보이지 않는 곳에",
        etymology: "From sight 'vision, view'"
    },
    {
        word: "perplexed",
        hints: ["puzzled", "bewildered", "confused"],
        sentence: "She looked _____ by the question.",
        korean: "당혹스러운",
        etymology: "From Latin perplexus 'entangled, confused'"
    },
    {
        word: "despondent",
        hints: ["unhappy", "discouraged", "depressed"],
        sentence: "He felt _____ after losing his job.",
        korean: "낙담한",
        etymology: "From Latin despondere 'to give up, lose heart'"
    },
    {
        word: "collide",
        hints: ["hit each other", "crash", "strike"],
        sentence: "The two cars _____ at the intersection.",
        korean: "충돌하다",
        etymology: "From Latin collidere 'to strike together'"
    },
    {
        word: "assessment",
        hints: ["evaluation", "appraisal", "judgment"],
        sentence: "The teacher's _____ of student progress was thorough.",
        korean: "평가",
        etymology: "From Latin assidere 'to sit beside'"
    },
    {
        word: "vital",
        hints: ["essential", "important", "significant"],
        sentence: "Regular exercise is _____ for good health.",
        korean: "매우 중요한",
        etymology: "From Latin vitalis 'of life'"
    },
    {
        word: "shrivel",
        hints: ["dry up", "wither", "wilt"],
        sentence: "The plants will _____ without water.",
        korean: "시들다",
        etymology: "From Old Norse skrukka 'to shrink'"
    },
    {
        word: "dissent",
        hints: ["oppose", "object", "express disagreement"],
        sentence: "One member of the jury _____ from the verdict.",
        korean: "이의를 제기하다",
        etymology: "From Latin dissentire 'to disagree'"
    },
    {
        word: "elegant",
        hints: ["sophisticated", "graceful", "refined"],
        sentence: "The ballroom had an _____ design.",
        korean: "품위 있는, 세련된",
        etymology: "From Latin elegans 'choice, fine'"
    },
    {
        word: "qualify",
        hints: ["meet the requirement", "entitle", "empower"],
        sentence: "You must _____ for the position by passing the exam.",
        korean: "자격을 갖추다; 자격을 주다",
        etymology: "From Latin qualis 'of what kind'"
    },
    {
        word: "evolve",
        hints: ["develop", "progress", "advance"],
        sentence: "Technology continues to _____ rapidly.",
        korean: "(서서히) 발전하다, 진화하다",
        etymology: "From Latin evolvere 'to unroll'"
    },
    {
        word: "despite",
        hints: ["in spite of", "notwithstanding"],
        sentence: "_____ the rain, they continued the game.",
        korean: "~에도 불구하고",
        etymology: "From Latin despectus 'a looking down on'"
    },
    {
        word: "emergence",
        hints: ["appearance", "advent", "rise"],
        sentence: "The _____ of new technologies has changed our lives.",
        korean: "출현",
        etymology: "From Latin emergere 'to rise up'"
    },
    {
        word: "surplus",
        hints: ["excess", "redundance", "extra goods"],
        sentence: "The country has a _____ of agricultural products.",
        korean: "과잉, 잉여물",
        etymology: "From Latin super 'over' + plus 'more'"
    },
    {
        word: "distant",
        hints: ["faraway", "remote", "far"],
        sentence: "They moved to a _____ country.",
        korean: "먼",
        etymology: "From Latin distare 'to stand apart'"
    },
    {
        word: "aim",
        hints: ["goal", "objective", "purpose", "attempt"],
        sentence: "The _____ of the project is to reduce pollution.",
        korean: "목적, 목표, 목표하다, 겨냥하다",
        etymology: "From Latin aestimare 'to estimate'"
    },
    {
        word: "in the ascendant",
        hints: ["rising in importance"],
        sentence: "The political party is currently _____.",
        korean: "(인기·세력 등이) 상승중인",
        etymology: "From ascendant 'rising'"
    },
    {
        word: "draw",
        hints: ["attract", "engage", "pull"],
        sentence: "The concert _____ a large crowd.",
        korean: "(마음·이목 등을) 끌다",
        etymology: "From Old English dragan 'to drag, pull'"
    },
    {
        word: "overlie",
        hints: ["cover", "overspread"],
        sentence: "A layer of dust _____ the furniture.",
        korean: "~위에 가로놓이다",
        etymology: "From over + lie 'to rest upon'"
    },
    {
        word: "signature",
        hints: ["identifying mark", "characteristic"],
        sentence: "The dish is a _____ recipe of the restaurant.",
        korean: "서명",
        etymology: "From Latin signare 'to sign'"
    },
    {
        word: "devoid of",
        hints: ["lacking in", "destitute of"],
        sentence: "The statement was _____ truth.",
        korean: "~이 없는, 결여된",
        etymology: "From Old French desvuidier 'to empty'"
    },
    {
        word: "vessel",
        hints: ["ship", "boat", "craft"],
        sentence: "The _____ sailed across the ocean.",
        korean: "배, 선박",
        etymology: "From Latin vascellum 'small vase'"
    },
    {
        word: "be incorporated in",
        hints: ["be part of"],
        sentence: "New features will _____ the next version.",
        korean: "포함되다, 편입되다",
        etymology: "From Latin incorporare 'to form into a body'"
    },
    {
        word: "trauma",
        hints: ["damage", "injury", "shock"],
        sentence: "The accident caused severe physical _____.",
        korean: "외상, 외상성 상해",
        etymology: "From Greek trauma 'wound'"
    }
];

// Make it available as a global variable for browser use
if (typeof window !== 'undefined') {
    window.day29Vocabulary = day29Vocabulary;
}

// Support both CommonJS and ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day29Vocabulary;
}
