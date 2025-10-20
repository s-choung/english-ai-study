// Day 23 vocabulary data
const day23Vocabulary = [
    {
        word: "configuration",
        hints: ["arrangement", "shape", "form", "conformation"],
        sentence: "The _____ of the furniture can be easily changed.",
        korean: "배치, (배치) 형태",
        etymology: "From Latin configurare 'to shape after a pattern'"
    },
    {
        word: "induce",
        hints: ["bring about", "cause", "stimulate", "persuade", "convince"],
        sentence: "The medication can _____ sleep in patients with insomnia.",
        korean: "야기하다, 유발하다, 설득하다",
        etymology: "From Latin inducere 'to lead in'"
    },
    {
        word: "attain",
        hints: ["reach", "arrive at", "achieve", "accomplish", "realize"],
        sentence: "She worked hard to _____ her goal of becoming a doctor.",
        korean: "(목적지·고령 등에) 도달하다, 성취하다, 얻다",
        etymology: "From Latin attingere 'to reach, touch'"
    },
    {
        word: "erratic",
        hints: ["irregular", "unpredictable", "uneven"],
        sentence: "His _____ behavior made his colleagues worried.",
        korean: "불규칙한",
        etymology: "From Latin erraticus 'wandering, straying'"
    },
    {
        word: "eventual",
        hints: ["ultimate", "final"],
        sentence: "The _____ outcome exceeded all expectations.",
        korean: "최종적인",
        etymology: "From Latin eventus 'outcome'"
    },
    {
        word: "mandate",
        hints: ["order", "command", "instruction"],
        sentence: "The government issued a _____ for all citizens to wear masks.",
        korean: "명령, 지시",
        etymology: "From Latin mandatum 'command, order'"
    },
    {
        word: "prosperous",
        hints: ["flourishing", "thriving", "blooming", "financially successful", "wealthy", "affluent"],
        sentence: "The region became _____ through trade.",
        korean: "번영하는, 부유한",
        etymology: "From Latin prosperus 'doing well'"
    },
    {
        word: "requisite",
        hints: ["necessity", "requirement", "essential", "required", "necessary"],
        sentence: "Experience is a _____ for this position.",
        korean: "필수품, 필요조건, 필수의",
        etymology: "From Latin requisitus 'sought after, required'"
    },
    {
        word: "partake of",
        hints: ["consume", "share"],
        sentence: "All guests are invited to _____ the feast.",
        korean: "함께 먹다, 함께 하다",
        etymology: "From part + take 'to take part in'"
    },
    {
        word: "pledge",
        hints: ["promise", "oath", "vow", "undertaking"],
        sentence: "The candidate made a _____ to reduce taxes.",
        korean: "약속, 맹세",
        etymology: "From Old French plege 'security, bail'"
    },
    {
        word: "contend",
        hints: ["argue", "assert", "maintain"],
        sentence: "The lawyer _____ that his client was innocent.",
        korean: "주장하다",
        etymology: "From Latin contendere 'to stretch, strive'"
    },
    {
        word: "confine",
        hints: ["boundary", "limit", "cramp", "enclose", "cage"],
        sentence: "The prisoner was _____ to his cell.",
        korean: "경계, 범위, 가두다, 제한하다",
        etymology: "From Latin confinis 'bordering, adjacent'"
    },
    {
        word: "dictate",
        hints: ["require", "suggest", "prescribe", "determine"],
        sentence: "Circumstances _____ our choice of action.",
        korean: "(권위를 갖고) 지시하다, 받아쓰게 하다, 좌우하다, 결정하다",
        etymology: "From Latin dictare 'to say often, prescribe'"
    },
    {
        word: "durable",
        hints: ["long-lasting", "lasting", "enduring"],
        sentence: "This material is very _____ and will last for years.",
        korean: "오래가는",
        etymology: "From Latin durabilis 'lasting'"
    },
    {
        word: "collectively",
        hints: ["together", "all together", "unitedly"],
        sentence: "The team worked _____ to solve the problem.",
        korean: "공동으로",
        etymology: "From Latin collectivus 'gathered together'"
    },
    {
        word: "furnish",
        hints: ["provide", "supply", "offer"],
        sentence: "The company will _____ all necessary equipment.",
        korean: "제공하다",
        etymology: "From Old French furnir 'to furnish, accomplish'"
    },
    {
        word: "alter",
        hints: ["change", "modify", "metamorphose"],
        sentence: "Climate change may _____ weather patterns significantly.",
        korean: "변경하다, 바꾸다",
        etymology: "From Latin alter 'other'"
    },
    {
        word: "determine",
        hints: ["decide", "resolve", "conclude", "figure out", "calculate"],
        sentence: "Scientists are trying to _____ the cause of the disease.",
        korean: "결정하다, 측정하다",
        etymology: "From Latin determinare 'to set bounds to'"
    },
    {
        word: "haul",
        hints: ["draw", "pull", "drag", "heave"],
        sentence: "They had to _____ the heavy boxes up the stairs.",
        korean: "끌고 가다, 끌다",
        etymology: "From Old French haler 'to pull'"
    },
    {
        word: "approximation",
        hints: ["nearness", "closeness", "proximity"],
        sentence: "This is just an _____ of the actual cost.",
        korean: "근접성, 가까움",
        etymology: "From Latin approximare 'to draw near'"
    },
    {
        word: "found wanting",
        hints: ["judged inadequate"],
        sentence: "The proposal was _____ and rejected by the committee.",
        korean: "부족하다고 여겨지는",
        etymology: "From Old English findan 'to find' + wantian 'to lack'"
    },
    {
        word: "classic",
        hints: ["typical", "exemplary", "model"],
        sentence: "This is a _____ example of Renaissance architecture.",
        korean: "전형적인, 대표적인",
        etymology: "From Latin classicus 'of the highest class'"
    },
    {
        word: "grossly",
        hints: ["excessively"],
        sentence: "The estimate was _____ inaccurate.",
        korean: "지나치게",
        etymology: "From Latin grossus 'thick, coarse'"
    },
    {
        word: "vivid",
        hints: ["bright", "brilliant", "graphic", "lifelike"],
        sentence: "She had a _____ memory of her childhood.",
        korean: "선명한, 생생한",
        etymology: "From Latin vividus 'lively, vigorous'"
    },
    {
        word: "artificial",
        hints: ["synthetic", "man-made"],
        sentence: "The flowers are made of _____ materials.",
        korean: "인조의, 인공의",
        etymology: "From Latin artificialis 'belonging to art'"
    },
    {
        word: "transplant",
        hints: ["place in another context", "remove", "relocate"],
        sentence: "The surgeon will _____ the organ to the recipient.",
        korean: "이동시키다",
        etymology: "From Latin transplantare 'to plant elsewhere'"
    },
    {
        word: "camouflage",
        hints: ["hide", "disguise", "conceal"],
        sentence: "Animals use colors to _____ themselves from predators.",
        korean: "위장하다, 감추다",
        etymology: "From French camoufler 'to disguise'"
    },
    {
        word: "implement",
        hints: ["tool", "instrument", "appliance"],
        sentence: "Farmers use various _____ to work the land.",
        korean: "도구, 기구",
        etymology: "From Latin implere 'to fill up, fulfill'"
    },
    {
        word: "excavate",
        hints: ["dig out", "dig up", "unearth", "disinter"],
        sentence: "Archaeologists _____ the ancient ruins carefully.",
        korean: "파내다, 발굴하다",
        etymology: "From Latin excavare 'to hollow out'"
    },
    {
        word: "disgust",
        hints: ["distaste", "nausea", "aversion"],
        sentence: "The spoiled food filled her with _____.",
        korean: "혐오감, 불쾌감",
        etymology: "From Latin disgustare 'to distaste'"
    },
    {
        word: "secluded",
        hints: ["remote", "hidden", "isolated", "solitary"],
        sentence: "They found a _____ spot for their picnic.",
        korean: "외딴",
        etymology: "From Latin secludere 'to shut off, separate'"
    },
    {
        word: "engulf",
        hints: ["swallow"],
        sentence: "Flames _____ the building within minutes.",
        korean: "(불·파도 등이) 삼켜버리다",
        etymology: "From en- 'in' + gulf 'abyss'"
    },
    {
        word: "chronic",
        hints: ["persistent", "constant", "incessant"],
        sentence: "He suffers from _____ back pain.",
        korean: "만성적인, 장기간에 걸친",
        etymology: "From Greek khronikos 'of time'"
    },
    {
        word: "magnificent",
        hints: ["superb", "gorgeous", "beautiful", "splendid"],
        sentence: "The palace was a _____ structure.",
        korean: "굉장히 멋진",
        etymology: "From Latin magnificus 'great, noble'"
    },
    {
        word: "truism",
        hints: ["self-evident truth", "commonplace", "cliché"],
        sentence: "It's a _____ that practice makes perfect.",
        korean: "뻔한 말, 자명한 이치",
        etymology: "From true + -ism 'obvious truth'"
    },
    {
        word: "accidental",
        hints: ["unintentional", "inadvertent", "unintended"],
        sentence: "The discovery was completely _____.",
        korean: "우연한",
        etymology: "From Latin accidentalis 'happening by chance'"
    },
    {
        word: "invent",
        hints: ["devise", "originate"],
        sentence: "Thomas Edison _____ the light bulb.",
        korean: "발명하다",
        etymology: "From Latin invenire 'to find, discover'"
    },
    {
        word: "inherent in",
        hints: ["characteristic of"],
        sentence: "Risk is _____ any business venture.",
        korean: "~에 내재된",
        etymology: "From Latin inhaerere 'to stick in'"
    },
    {
        word: "expose",
        hints: ["make visible", "exhibit", "uncover", "subject"],
        sentence: "The investigation _____ serious flaws in the system.",
        korean: "드러내다, 노출시키다",
        etymology: "From Latin exponere 'to set forth'"
    },
    {
        word: "perpetuate",
        hints: ["continue", "immortalize", "eternize"],
        sentence: "The monument _____ the memory of fallen soldiers.",
        korean: "영속시키다",
        etymology: "From Latin perpetuare 'to make perpetual'"
    },
    {
        word: "be inclined to",
        hints: ["tend to"],
        sentence: "People _____ believe what they want to believe.",
        korean: "~하는 경향이 있다",
        etymology: "From Latin inclinare 'to lean, bend'"
    },
    {
        word: "illusory",
        hints: ["misleading", "deceptive", "delusive"],
        sentence: "The sense of security was _____ at best.",
        korean: "착각을 일으키는",
        etymology: "From Latin illusorius 'mocking, illusory'"
    },
    {
        word: "heyday",
        hints: ["high point", "golden age", "prime", "florescence"],
        sentence: "The 1960s were the _____ of rock and roll.",
        korean: "전성기",
        etymology: "From hey (exclamation) + day"
    },
    {
        word: "proficient",
        hints: ["skilled", "skillful", "expert", "adept"],
        sentence: "She is _____ in three languages.",
        korean: "능숙한",
        etymology: "From Latin proficere 'to make progress'"
    },
    {
        word: "amply",
        hints: ["generously", "bountifully", "lavishly"],
        sentence: "The evidence _____ demonstrates the theory.",
        korean: "풍부하게",
        etymology: "From Latin amplus 'large, abundant'"
    },
    {
        word: "desolate",
        hints: ["deserted", "bleak", "dreary"],
        sentence: "The _____ landscape stretched for miles.",
        korean: "황량한",
        etymology: "From Latin desolatus 'abandoned'"
    },
    {
        word: "more subtle",
        hints: ["less noticeable"],
        sentence: "The changes were _____ than we expected.",
        korean: "더 포착하기 어려운",
        etymology: "From Latin subtilis 'fine, delicate'"
    },
    {
        word: "disrupt",
        hints: ["interfere with", "interrupt", "upset"],
        sentence: "The protest _____ traffic in the city center.",
        korean: "방해하다",
        etymology: "From Latin disrumpere 'to break apart'"
    },
    {
        word: "forerunner",
        hints: ["predecessor", "antecedent"],
        sentence: "This device was a _____ to the modern computer.",
        korean: "선조, 선구자",
        etymology: "From fore- 'before' + runner"
    },
    {
        word: "immediate",
        hints: ["instant", "prompt", "on-the-spot", "nearest", "neighboring", "adjacent"],
        sentence: "The problem requires _____ attention.",
        korean: "즉각적인, 인접한",
        etymology: "From Latin immediatus 'without anything between'"
    },
    {
        word: "wield",
        hints: ["exercise", "use", "handle"],
        sentence: "The king _____ absolute power over his subjects.",
        korean: "(권력·무기 등을) 휘두르다, 행사하다",
        etymology: "From Old English wieldan 'to control, govern'"
    },
    {
        word: "crush",
        hints: ["discourage", "deflate"],
        sentence: "The defeat _____ their hopes of winning the championship.",
        korean: "(희망·사기를) 꺾다",
        etymology: "From Old French croissir 'to break'"
    },
    {
        word: "manner",
        hints: ["way", "fashion", "mode"],
        sentence: "She completed the task in a professional _____.",
        korean: "방법, 방식",
        etymology: "From Latin manuarius 'of the hand'"
    },
    {
        word: "uneasy",
        hints: ["apprehensive", "unstable", "disturbed", "ill at ease"],
        sentence: "He felt _____ about the upcoming exam.",
        korean: "불안한, 불안정한",
        etymology: "From Old English un- 'not' + easy"
    }
];

// Make it available as a global variable for browser use
if (typeof window !== 'undefined') {
    window.day23Vocabulary = day23Vocabulary;
}

// Support both CommonJS and ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day23Vocabulary;
}
