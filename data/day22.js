// Day 22 vocabulary data (review of day 21)
const day22Vocabulary = [
    {
        word: "flourish",
        hints: ["thrive", "prosper", "blossom", "do well"],
        sentence: "The city's arts scene began to _____ after the new cultural center opened.",
        korean: "번창하다",
        etymology: "From Latin florere 'to bloom, flower'"
    },
    {
        word: "dissipate",
        hints: ["disperse", "scatter"],
        sentence: "The morning fog began to _____ as the sun rose.",
        korean: "(구름·안개 등을) 흩뜨리다, 흩어지다",
        etymology: "From Latin dissipare 'to scatter, disperse'"
    },
    {
        word: "profound",
        hints: ["great", "significant", "deep", "fundamental", "far-reaching"],
        sentence: "The discovery had a _____ impact on medical science.",
        korean: "엄청난, 깊은, 심오한, 폭넓은",
        etymology: "From Latin profundus 'deep, vast'"
    },
    {
        word: "intriguing",
        hints: ["interesting but not completely understood", "fascinating"],
        sentence: "The scientist presented an _____ hypothesis about climate change.",
        korean: "매우 흥미로운",
        etymology: "From Latin intricare 'to entangle, perplex'"
    },
    {
        word: "considerably",
        hints: ["significantly", "appreciably", "fairly"],
        sentence: "Prices have increased _____ over the past year.",
        korean: "상당히",
        etymology: "From Latin considerare 'to examine, contemplate'"
    },
    {
        word: "ingenuity",
        hints: ["creativeness", "inventiveness", "cleverness"],
        sentence: "The engineer's _____ helped solve the complex problem.",
        korean: "창의력; 교묘함",
        etymology: "From Latin ingenium 'innate quality, talent'"
    },
    {
        word: "conquer",
        hints: ["defeat", "prevail", "triumph"],
        sentence: "The team worked hard to _____ their fears.",
        korean: "이기다",
        etymology: "From Latin conquirere 'to search for, procure'"
    },
    {
        word: "fragment",
        hints: ["piece", "flake", "particle", "part", "break apart", "shatter", "divide"],
        sentence: "The archaeologists found _____ of ancient pottery.",
        korean: "조각, 부분, 산산히 부수다, 부서지다",
        etymology: "From Latin fragmentum 'a piece broken off'"
    },
    {
        word: "spell",
        hints: ["a certain period of time"],
        sentence: "We experienced a _____ of unusually warm weather.",
        korean: "한동안",
        etymology: "From Old English spellian 'to tell, relate'"
    },
    {
        word: "facet",
        hints: ["aspect", "phase"],
        sentence: "We need to consider every _____ of the problem.",
        korean: "측면",
        etymology: "From French facette 'small face'"
    },
    {
        word: "mundane",
        hints: ["ordinary", "banal", "commonplace"],
        sentence: "She longed for adventure beyond her _____ daily routine.",
        korean: "일상적인, 평범한",
        etymology: "From Latin mundanus 'of the world'"
    },
    {
        word: "dense",
        hints: ["crowded", "thick", "compact"],
        sentence: "The _____ forest made it difficult to see far ahead.",
        korean: "밀집한, 빽빽한",
        etymology: "From Latin densus 'thick, crowded'"
    },
    {
        word: "random",
        hints: ["unplanned", "unpredictable", "chance"],
        sentence: "The survey selected participants in a _____ manner.",
        korean: "무작위의, 우연한",
        etymology: "From Old French randon 'speed, violence'"
    },
    {
        word: "mere",
        hints: ["nothing more than", "insignificant"],
        sentence: "It was a _____ coincidence that we met.",
        korean: "단지 ~에 불과한, 하찮은",
        etymology: "From Latin merus 'pure, unmixed'"
    },
    {
        word: "persistence",
        hints: ["continuation", "ceaselessness"],
        sentence: "His _____ in pursuing his goals was admirable.",
        korean: "지속",
        etymology: "From Latin persistere 'to continue steadfastly'"
    },
    {
        word: "intrusive",
        hints: ["interfering", "meddlesome"],
        sentence: "The _____ questions made her uncomfortable.",
        korean: "개입하는, 참견하는",
        etymology: "From Latin intrudere 'to thrust in'"
    },
    {
        word: "culminate in",
        hints: ["reach completion in", "reach the highest point in"],
        sentence: "Years of research _____ a groundbreaking discovery.",
        korean: "~에서 절정에 달하다",
        etymology: "From Latin culmen 'summit, top'"
    },
    {
        word: "stabilize",
        hints: ["hold in place", "support"],
        sentence: "The government took measures to _____ the economy.",
        korean: "안정시키다, 고정시키다",
        etymology: "From Latin stabilis 'firm, steadfast'"
    },
    {
        word: "prompt",
        hints: ["cause", "bring about", "induce", "stimulate"],
        sentence: "The incident _____ a thorough investigation.",
        korean: "유발하다; 자극하다",
        etymology: "From Latin promptus 'brought forth, ready'"
    },
    {
        word: "distinction",
        hints: ["difference", "divergence", "contrast"],
        sentence: "There is a clear _____ between the two concepts.",
        korean: "차이",
        etymology: "From Latin distinctio 'separation, difference'"
    },
    {
        word: "constant",
        hints: ["unchangeable", "steady", "stationary"],
        sentence: "The temperature remained _____ throughout the day.",
        korean: "변함없는, 일정한",
        etymology: "From Latin constare 'to stand firm'"
    },
    {
        word: "appreciation",
        hints: ["understanding", "comprehension"],
        sentence: "She has a deep _____ of classical music.",
        korean: "이해",
        etymology: "From Latin appretiare 'to set a price on'"
    },
    {
        word: "sophistication",
        hints: ["expertise"],
        sentence: "The software demonstrates a high level of _____ in its design.",
        korean: "지식",
        etymology: "From Greek sophistēs 'wise man, expert'"
    },
    {
        word: "pronouncement",
        hints: ["statement", "declaration", "proclamation"],
        sentence: "The judge made a formal _____ on the case.",
        korean: "선언, 발표",
        etymology: "From Latin pronuntiare 'to announce, proclaim'"
    },
    {
        word: "flag",
        hints: ["lessen", "weaken", "fade", "wither"],
        sentence: "Her enthusiasm began to _____ after several setbacks.",
        korean: "시들다, 줄다",
        etymology: "From Middle English flaggen 'to droop, hang loose'"
    },
    {
        word: "ambivalent",
        hints: ["mixed", "unsure", "undecided"],
        sentence: "He felt _____ about accepting the job offer.",
        korean: "상반된 감정을 가진",
        etymology: "From Latin ambi- 'both' + valere 'be strong'"
    },
    {
        word: "term",
        hints: ["call", "name", "designate", "denominate"],
        sentence: "This phenomenon is _____ 'cognitive dissonance' in psychology.",
        korean: "칭하다",
        etymology: "From Latin terminus 'boundary, end'"
    },
    {
        word: "flawed",
        hints: ["incorrect", "defective", "imperfect"],
        sentence: "The study was _____ due to its small sample size.",
        korean: "결함이 있는",
        etymology: "From Old Norse flaga 'stone slab'"
    },
    {
        word: "reminisce",
        hints: ["recollect", "remember", "recall", "look back"],
        sentence: "The old friends gathered to _____ about their college days.",
        korean: "회상하다",
        etymology: "From Latin reminisci 'to remember'"
    },
    {
        word: "destitute of",
        hints: ["lacking", "empty of", "deficient in"],
        sentence: "The region is _____ natural resources.",
        korean: "~이 없는",
        etymology: "From Latin destituere 'to abandon, forsake'"
    },
    {
        word: "regrettably",
        hints: ["unfortunately", "lamentably", "sadly"],
        sentence: "_____, we cannot accept your application at this time.",
        korean: "유감스럽게도",
        etymology: "From Old French regreter 'to bewail'"
    },
    {
        word: "principle",
        hints: ["basic method", "original method"],
        sentence: "The _____ behind this technology is quite simple.",
        korean: "원리",
        etymology: "From Latin principium 'beginning, origin'"
    },
    {
        word: "contain",
        hints: ["include", "comprise"],
        sentence: "This package _____ all the necessary materials.",
        korean: "포함하다",
        etymology: "From Latin continere 'to hold together'"
    },
    {
        word: "juncture",
        hints: ["connection", "junction", "link"],
        sentence: "At this critical _____, we must make a decision.",
        korean: "연결, 집합",
        etymology: "From Latin jungere 'to join'"
    },
    {
        word: "discount",
        hints: ["ignore", "disregard"],
        sentence: "We cannot _____ the possibility of failure.",
        korean: "무시하다",
        etymology: "From Old French desconter 'to deduct'"
    },
    {
        word: "or so",
        hints: ["roughly"],
        sentence: "The project will take a week _____.",
        korean: "~정도",
        etymology: "From Old English or 'early, before'"
    },
    {
        word: "dejected",
        hints: ["depressed", "downhearted"],
        sentence: "She looked _____ after hearing the bad news.",
        korean: "낙담한",
        etymology: "From Latin deicere 'to cast down'"
    },
    {
        word: "proposal",
        hints: ["idea", "offer", "proposition", "suggestion"],
        sentence: "The committee will review your _____ next week.",
        korean: "제안",
        etymology: "From Latin proponere 'to put forward'"
    },
    {
        word: "for all",
        hints: ["in spite of", "with all", "despite"],
        sentence: "_____ his wealth, he was not happy.",
        korean: "~에도 불구하고",
        etymology: "From Old English for eall 'completely'"
    },
    {
        word: "uniquely",
        hints: ["exceptionally", "distinctively"],
        sentence: "This species is _____ adapted to desert conditions.",
        korean: "독특하게",
        etymology: "From Latin unicus 'single, sole'"
    },
    {
        word: "criticize",
        hints: ["find fault with", "blame", "condemn", "censure"],
        sentence: "The report _____ the government's handling of the crisis.",
        korean: "비난하다",
        etymology: "From Greek kritikos 'able to judge'"
    },
    {
        word: "erode",
        hints: ["wear down", "wear away", "wear out"],
        sentence: "Wind and water slowly _____ the rock formations.",
        korean: "침식시키다, 침식되다",
        etymology: "From Latin erodere 'to gnaw away'"
    },
    {
        word: "tension",
        hints: ["strain", "pressure"],
        sentence: "There was obvious _____ between the two groups.",
        korean: "긴장, 압박",
        etymology: "From Latin tendere 'to stretch'"
    },
    {
        word: "ancient",
        hints: ["early", "old", "prehistoric", "antique"],
        sentence: "Archaeologists discovered _____ ruins in the valley.",
        korean: "고대의",
        etymology: "From Latin antiquus 'former, old'"
    },
    {
        word: "inherently",
        hints: ["essentially", "intrinsically"],
        sentence: "The system is _____ flawed and needs to be redesigned.",
        korean: "본질적으로",
        etymology: "From Latin inhaerere 'to stick in, cling to'"
    },
    {
        word: "sporadic",
        hints: ["occasional", "intermittent", "irregular", "infrequent"],
        sentence: "There were _____ outbreaks of violence throughout the region.",
        korean: "때때로 일어나는",
        etymology: "From Greek sporadikos 'scattered'"
    },
    {
        word: "apex",
        hints: ["crest", "peak", "acme", "pinnacle"],
        sentence: "The athlete reached the _____ of her career.",
        korean: "정점",
        etymology: "From Latin apex 'summit, tip'"
    },
    {
        word: "though",
        hints: ["however", "nevertheless", "yet", "still", "although", "while", "albeit"],
        sentence: "The task was difficult; we completed it, _____.",
        korean: "그렇지만, ~이지만",
        etymology: "From Old English þeah 'nevertheless'"
    },
    {
        word: "infer",
        hints: ["conclude", "derive", "reason", "deduce"],
        sentence: "From the evidence, we can _____ that the theory is correct.",
        korean: "추론하다",
        etymology: "From Latin inferre 'to bring in, deduce'"
    },
    {
        word: "core",
        hints: ["central idea", "center", "heart"],
        sentence: "This principle is at the _____ of our philosophy.",
        korean: "핵심",
        etymology: "From Latin cor 'heart'"
    },
    {
        word: "mutation",
        hints: ["change", "variation", "alteration"],
        sentence: "Scientists observed a genetic _____ in the population.",
        korean: "돌연변이 과정, 변화, 변형",
        etymology: "From Latin mutare 'to change'"
    },
    {
        word: "thrill",
        hints: ["excitement", "exhilaration", "frisson"],
        sentence: "The roller coaster ride gave her a _____ of excitement.",
        korean: "흥분, 전율",
        etymology: "From Old English thyrlian 'to pierce'"
    },
    {
        word: "mutilate",
        hints: ["damage", "injure", "disable"],
        sentence: "The vandals _____ the historic statue.",
        korean: "못쓰게 만들다",
        etymology: "From Latin mutilare 'to cut off, maim'"
    },
    {
        word: "rigidly",
        hints: ["strictly", "rigorously", "severely"],
        sentence: "The rules were _____ enforced.",
        korean: "엄격하게",
        etymology: "From Latin rigidus 'stiff, rigid'"
    },
    {
        word: "matter",
        hints: ["substance", "material", "stuff", "issue"],
        sentence: "This is a serious _____ that requires attention.",
        korean: "물질, 사안",
        etymology: "From Latin materia 'substance, matter'"
    },
    {
        word: "contradicting",
        hints: ["opposing"],
        sentence: "The witnesses gave _____ accounts of the event.",
        korean: "서로 대립하는",
        etymology: "From Latin contradicere 'to speak against'"
    },
    {
        word: "unwilling",
        hints: ["reluctant"],
        sentence: "He was _____ to compromise on his principles.",
        korean: "마지못해 하는, 꺼리는",
        etymology: "From Old English un- 'not' + willan 'to wish'"
    }
];

// Make it available as a global variable for browser use
if (typeof window !== 'undefined') {
    window.day22Vocabulary = day22Vocabulary;
}

// Support both CommonJS and ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day22Vocabulary;
}
