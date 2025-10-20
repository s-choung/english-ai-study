// Day 26 vocabulary data
const day26Vocabulary = [
    {
        word: "offset",
        hints: ["counterbalance", "compensate for", "neutralize"],
        sentence: "The solar panels help _____ electricity costs.",
        korean: "상쇄하다",
        etymology: "From off + set 'to balance against'"
    },
    {
        word: "assume",
        hints: ["take on", "undertake", "suppose", "presume"],
        sentence: "She will _____ responsibility for the project.",
        korean: "떠맡다; 생각하다",
        etymology: "From Latin assumere 'to take up'"
    },
    {
        word: "periodically",
        hints: ["regularly", "at intervals", "from time to time"],
        sentence: "The system backs up data _____ throughout the day.",
        korean: "정기적으로; 때때로",
        etymology: "From Greek periodikos 'periodical'"
    },
    {
        word: "cite",
        hints: ["quote", "mention", "refer to"],
        sentence: "The author _____ several studies to support her argument.",
        korean: "언급하다",
        etymology: "From Latin citare 'to summon, call'"
    },
    {
        word: "commonly",
        hints: ["usually", "generally", "ordinarily"],
        sentence: "This plant is _____ found in tropical regions.",
        korean: "보통, 일반적으로",
        etymology: "From common + -ly 'in a usual manner'"
    },
    {
        word: "locate",
        hints: ["find", "discover", "position", "place"],
        sentence: "Scientists were able to _____ the source of the contamination.",
        korean: "찾아내다, 발견하다; 두다",
        etymology: "From Latin locare 'to place'"
    },
    {
        word: "impose",
        hints: ["force", "inflict", "establish"],
        sentence: "The government may _____ new taxes next year.",
        korean: "강요하다",
        etymology: "From Latin imponere 'to place upon'"
    },
    {
        word: "prerequisite",
        hints: ["requirement", "necessity", "precondition"],
        sentence: "Math skills are a _____ for this engineering course.",
        korean: "필요조건",
        etymology: "From pre- 'before' + requisite"
    },
    {
        word: "immunity",
        hints: ["exemption", "protection", "resistance"],
        sentence: "Vaccination provides _____ against certain diseases.",
        korean: "면제",
        etymology: "From Latin immunitas 'exemption from service'"
    },
    {
        word: "proper",
        hints: ["appropriate", "suitable", "correct"],
        sentence: "Always use _____ safety equipment when working.",
        korean: "적절한",
        etymology: "From Latin proprius 'one's own, particular'"
    },
    {
        word: "embark on",
        hints: ["begin", "start", "commence"],
        sentence: "They decided to _____ a new business venture.",
        korean: "시작하다",
        etymology: "From em- 'in' + bark (ship)"
    },
    {
        word: "probe",
        hints: ["investigate", "examine", "explore", "inquiry", "investigation"],
        sentence: "Journalists _____ into the scandal.",
        korean: "조사하다, 찾다; 탐구, 탐사",
        etymology: "From Latin probare 'to test, prove'"
    },
    {
        word: "exhaust",
        hints: ["deplete", "use up", "tire out", "fatigue"],
        sentence: "The long hike _____ all our energy.",
        korean: "고갈시키다; 지치게하다",
        etymology: "From Latin exhaustus 'drained out'"
    },
    {
        word: "exclusive",
        hints: ["sole", "only", "unique"],
        sentence: "The newspaper has an _____ interview with the president.",
        korean: "유일한",
        etymology: "From Latin excludere 'to shut out'"
    },
    {
        word: "manipulate",
        hints: ["handle", "control", "operate", "influence"],
        sentence: "The software allows you to _____ images easily.",
        korean: "다루다, 조종하다; 조작하다, 속이다",
        etymology: "From Latin manipulus 'handful'"
    },
    {
        word: "ongoing",
        hints: ["continuing", "in progress", "current"],
        sentence: "The investigation is still _____.",
        korean: "계속 진행중인",
        etymology: "From on + going 'continuing'"
    },
    {
        word: "primary",
        hints: ["main", "principal", "chief", "fundamental"],
        sentence: "The _____ goal is to increase efficiency.",
        korean: "기본적인",
        etymology: "From Latin primarius 'of the first rank'"
    },
    {
        word: "interval",
        hints: ["gap", "space", "period", "break"],
        sentence: "There will be a short _____ between acts.",
        korean: "간격; 기간",
        etymology: "From Latin intervallum 'space between'"
    },
    {
        word: "spark",
        hints: ["trigger", "ignite", "provoke"],
        sentence: "The incident _____ a nationwide debate.",
        korean: "유발하다",
        etymology: "From Old English spearca 'glowing particle'"
    },
    {
        word: "tenacity",
        hints: ["persistence", "determination", "perseverance"],
        sentence: "Her _____ helped her overcome many obstacles.",
        korean: "완고함, 고집",
        etymology: "From Latin tenax 'holding fast'"
    },
    {
        word: "distinctive",
        hints: ["characteristic", "unique", "particular"],
        sentence: "The building has a _____ architectural style.",
        korean: "특유의, 특색 있는",
        etymology: "From Latin distinguere 'to distinguish'"
    },
    {
        word: "collaborative",
        hints: ["cooperative", "joint", "collective"],
        sentence: "The project requires a _____ effort from all departments.",
        korean: "공동의, 협력적인",
        etymology: "From Latin collaborare 'to work together'"
    },
    {
        word: "deeply ingrained",
        hints: ["firmly established", "deep-rooted"],
        sentence: "These cultural practices are _____ in society.",
        korean: "깊이 배어든, 뿌리박힌",
        etymology: "From deep + ingrained 'embedded'"
    },
    {
        word: "instantaneous",
        hints: ["immediate", "instant", "prompt"],
        sentence: "The reaction was almost _____.",
        korean: "즉각적인",
        etymology: "From Latin instant- 'pressing upon'"
    },
    {
        word: "agitate",
        hints: ["shake", "stir", "disturb"],
        sentence: "_____ the mixture thoroughly before use.",
        korean: "뒤흔들다, 휘젓다",
        etymology: "From Latin agitare 'to set in motion'"
    },
    {
        word: "in profile",
        hints: ["sideways", "from the side"],
        sentence: "The photograph shows her face _____.",
        korean: "옆모습으로",
        etymology: "From Italian profilo 'side view'"
    },
    {
        word: "especially",
        hints: ["particularly", "specifically", "notably"],
        sentence: "The climate is mild, _____ in winter.",
        korean: "특히",
        etymology: "From Latin specialis 'particular'"
    },
    {
        word: "creative",
        hints: ["imaginative", "inventive", "original"],
        sentence: "She found a _____ solution to the problem.",
        korean: "창의적인",
        etymology: "From Latin creare 'to create'"
    },
    {
        word: "rim",
        hints: ["edge", "border", "margin"],
        sentence: "The cup has a gold _____ around the top.",
        korean: "가장자리",
        etymology: "From Old English rima 'border, edge'"
    },
    {
        word: "anxious",
        hints: ["worried", "concerned", "eager"],
        sentence: "She was _____ about the test results.",
        korean: "걱정하는; 열망하는",
        etymology: "From Latin anxius 'worried, uneasy'"
    },
    {
        word: "require",
        hints: ["need", "demand", "call for"],
        sentence: "This position _____ at least five years of experience.",
        korean: "요구하다, 필요로하다",
        etymology: "From Latin requirere 'to seek, ask for'"
    },
    {
        word: "handy",
        hints: ["convenient", "useful", "practical"],
        sentence: "A flashlight is _____ to have during power outages.",
        korean: "편리한",
        etymology: "From hand + -y 'useful'"
    },
    {
        word: "rare",
        hints: ["uncommon", "unusual", "scarce"],
        sentence: "This is a _____ opportunity to study abroad.",
        korean: "드문",
        etymology: "From Latin rarus 'thinly sown, sparse'"
    },
    {
        word: "diligently",
        hints: ["carefully", "industriously", "assiduously"],
        sentence: "The student worked _____ on her thesis.",
        korean: "열심히, 애써서",
        etymology: "From Latin diligent- 'loving, careful'"
    },
    {
        word: "mutually exclusive",
        hints: ["incompatible", "contradictory"],
        sentence: "The two options are _____ and cannot both be true.",
        korean: "상호 배타적인",
        etymology: "From mutual + exclusive"
    },
    {
        word: "vacant",
        hints: ["empty", "unoccupied", "available"],
        sentence: "The apartment has been _____ for three months.",
        korean: "비어 있는",
        etymology: "From Latin vacare 'to be empty'"
    },
    {
        word: "represent",
        hints: ["depict", "portray", "symbolize"],
        sentence: "The dove _____ peace.",
        korean: "묘사하다, 나타내다",
        etymology: "From Latin repraesentare 'to show, exhibit'"
    },
    {
        word: "conclude",
        hints: ["infer", "deduce", "determine"],
        sentence: "From the evidence, we can _____ that the theory is correct.",
        korean: "결론을 내리다",
        etymology: "From Latin concludere 'to shut up, end'"
    },
    {
        word: "enactment",
        hints: ["legislation", "establishment", "implementation"],
        sentence: "The _____ of new laws requires parliamentary approval.",
        korean: "제정",
        etymology: "From enact + -ment 'making into law'"
    },
    {
        word: "impede",
        hints: ["hinder", "obstruct", "block"],
        sentence: "Heavy snow may _____ travel plans.",
        korean: "방해하다",
        etymology: "From Latin impedire 'to shackle'"
    },
    {
        word: "humble",
        hints: ["modest", "unassuming", "simple"],
        sentence: "Despite his success, he remained _____.",
        korean: "초라한, 겸손한",
        etymology: "From Latin humilis 'lowly, humble'"
    },
    {
        word: "premise",
        hints: ["assumption", "proposition", "hypothesis"],
        sentence: "The argument is based on a false _____.",
        korean: "전제, 가정",
        etymology: "From Latin praemissa 'sent before'"
    },
    {
        word: "jettison",
        hints: ["discard", "abandon", "throw away"],
        sentence: "The company had to _____ its expansion plans.",
        korean: "버리다",
        etymology: "From Latin jactare 'to throw'"
    },
    {
        word: "segregate",
        hints: ["separate", "isolate", "divide"],
        sentence: "The policy aimed to _____ recycling from regular waste.",
        korean: "분리하다, 격리하다",
        etymology: "From Latin segregare 'to set apart from the flock'"
    },
    {
        word: "innumerable",
        hints: ["countless", "numerous", "myriad"],
        sentence: "There are _____ stars in the galaxy.",
        korean: "무수한",
        etymology: "From Latin innumerabilis 'countless'"
    },
    {
        word: "havoc",
        hints: ["destruction", "devastation", "chaos"],
        sentence: "The storm wreaked _____ on the coastal town.",
        korean: "대파괴",
        etymology: "From Old French havot 'plundering'"
    },
    {
        word: "dwindle",
        hints: ["decrease", "diminish", "decline"],
        sentence: "Attendance at the meetings began to _____.",
        korean: "줄어들다",
        etymology: "From Old English dwinan 'to waste away'"
    },
    {
        word: "concept",
        hints: ["idea", "notion", "conception"],
        sentence: "The _____ of time is difficult to explain.",
        korean: "개념",
        etymology: "From Latin conceptus 'conceived'"
    },
    {
        word: "sensational",
        hints: ["spectacular", "amazing", "extraordinary"],
        sentence: "The performance received _____ reviews.",
        korean: "굉장한, 놀라운",
        etymology: "From sensation + -al"
    },
    {
        word: "convincing",
        hints: ["persuasive", "compelling", "believable"],
        sentence: "She presented a _____ argument for the proposal.",
        korean: "설득력 있는",
        etymology: "From Latin convincere 'to overcome'"
    },
    {
        word: "insight",
        hints: ["understanding", "perception", "awareness"],
        sentence: "The study provides valuable _____ into human behavior.",
        korean: "통찰력, 이해",
        etymology: "From in- + sight 'inner vision'"
    },
    {
        word: "naively",
        hints: ["innocently", "simply", "ingenuously"],
        sentence: "He _____ believed everything he was told.",
        korean: "솔직하게, 순진하게",
        etymology: "From French naïf 'natural, simple'"
    },
    {
        word: "vague",
        hints: ["unclear", "indefinite", "ambiguous"],
        sentence: "His explanation was too _____ to be helpful.",
        korean: "모호한, 불분명한",
        etymology: "From Latin vagus 'wandering, uncertain'"
    },
    {
        word: "associated",
        hints: ["connected", "related", "linked"],
        sentence: "Smoking is _____ with various health problems.",
        korean: "관련된",
        etymology: "From Latin associare 'to unite with'"
    },
    {
        word: "amplification",
        hints: ["expansion", "elaboration", "development"],
        sentence: "The theory needs further _____ and clarification.",
        korean: "부연설명",
        etymology: "From Latin amplificare 'to enlarge'"
    }
];

// Make it available as a global variable for browser use
if (typeof window !== 'undefined') {
    window.day26Vocabulary = day26Vocabulary;
}

// Support both CommonJS and ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day26Vocabulary;
}
