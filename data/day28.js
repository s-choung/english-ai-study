// Day 28 vocabulary data
const day28Vocabulary = [
    {
        word: "abundance",
        hints: ["plenty", "large number", "profusion"],
        sentence: "The garden produced an _____ of vegetables.",
        korean: "다수",
        etymology: "From Latin abundantia 'fullness, plenty'"
    },
    {
        word: "onset",
        hints: ["beginning", "start", "commencement"],
        sentence: "The _____ of winter brought cold temperatures.",
        korean: "시작",
        etymology: "From on + set 'beginning'"
    },
    {
        word: "witness",
        hints: ["observe", "see", "look on"],
        sentence: "We _____ a remarkable transformation in the city.",
        korean: "목격하다",
        etymology: "From Old English witnes 'knowledge, testimony'"
    },
    {
        word: "mount",
        hints: ["grow", "increase", "multiply"],
        sentence: "Pressure began to _____ as the deadline approached.",
        korean: "증가하다",
        etymology: "From Latin mons 'mountain'"
    },
    {
        word: "reinforce",
        hints: ["strengthen", "support", "consolidate", "fortify"],
        sentence: "The experience _____ her belief in the cause.",
        korean: "강화하다",
        etymology: "From re- + enforce 'to make stronger'"
    },
    {
        word: "intense",
        hints: ["strong", "extreme", "fierce", "acute"],
        sentence: "The _____ heat made it difficult to work outside.",
        korean: "강렬한, 극심한",
        etymology: "From Latin intensus 'stretched, strained'"
    },
    {
        word: "involved",
        hints: ["complicated", "intricate", "tangled"],
        sentence: "The process is more _____ than it first appears.",
        korean: "복잡한",
        etymology: "From Latin involvere 'to roll into, wrap up'"
    },
    {
        word: "solely",
        hints: ["only", "purely", "exclusively", "entirely"],
        sentence: "The decision was based _____ on financial considerations.",
        korean: "오로지",
        etymology: "From sole + -ly 'alone'"
    },
    {
        word: "undergo",
        hints: ["experience", "go through", "suffer"],
        sentence: "The building will _____ major renovations.",
        korean: "(변화 등을) 겪다, 경험하다",
        etymology: "From Old English undergan 'to undergo'"
    },
    {
        word: "mechanism",
        hints: ["instrument", "device", "apparatus", "means", "method", "way"],
        sentence: "Scientists study the _____ behind climate change.",
        korean: "기계, 장치, 방법",
        etymology: "From Greek mēkhanē 'machine'"
    },
    {
        word: "speculate",
        hints: ["guess", "suppose", "hypothesize", "assume"],
        sentence: "Experts _____ about the cause of the accident.",
        korean: "추측하다",
        etymology: "From Latin speculari 'to spy out, observe'"
    },
    {
        word: "conclusively",
        hints: ["decisively", "definitively", "finally"],
        sentence: "The evidence _____ proves his innocence.",
        korean: "결정적으로",
        etymology: "From conclusive + -ly 'in a decisive manner'"
    },
    {
        word: "significantly",
        hints: ["considerably", "remarkably", "markedly"],
        sentence: "Profits increased _____ this year.",
        korean: "상당히",
        etymology: "From significant + -ly 'to a notable degree'"
    },
    {
        word: "adopt",
        hints: ["take up", "begin to use", "select"],
        sentence: "Many companies _____ new technologies to improve efficiency.",
        korean: "채택하다, 받아들이다",
        etymology: "From Latin adoptare 'to choose for oneself'"
    },
    {
        word: "staple",
        hints: ["basic item", "regular feature", "basic feature", "basic", "primary"],
        sentence: "Rice is a _____ food in many Asian countries.",
        korean: "주요상품, 주요소, 기본적인, 주요한",
        etymology: "From Middle Dutch stapel 'pillar, emporium'"
    },
    {
        word: "secrete",
        hints: ["release", "produce", "excrete", "conceal", "hide", "veil"],
        sentence: "Glands _____ hormones into the bloodstream.",
        korean: "분비하다, 숨기다",
        etymology: "From Latin secretus 'separate, hidden'"
    },
    {
        word: "pursue",
        hints: ["practice", "conduct", "perform"],
        sentence: "She decided to _____ a career in medicine.",
        korean: "실행하다, 수행하다",
        etymology: "From Latin prosequi 'to follow after'"
    },
    {
        word: "conserve",
        hints: ["keep", "protect", "save", "preserve"],
        sentence: "We must _____ water during the drought.",
        korean: "보존하다, 보호하다",
        etymology: "From Latin conservare 'to keep, preserve'"
    },
    {
        word: "toil",
        hints: ["work hard", "labor", "strive"],
        sentence: "Farmers _____ in the fields from dawn to dusk.",
        korean: "힘써 일하다",
        etymology: "From Latin tudiculare 'to stir, crush'"
    },
    {
        word: "approximate",
        hints: ["rough", "close", "near", "resemble"],
        sentence: "Can you give me an _____ cost for the repairs?",
        korean: "대략적인, 가까운, 비슷하다",
        etymology: "From Latin approximare 'to draw near'"
    },
    {
        word: "monumental",
        hints: ["huge", "massive", "great and significant"],
        sentence: "The project was a _____ undertaking.",
        korean: "엄청나게 큰, 기념비적인",
        etymology: "From Latin monumentum 'memorial'"
    },
    {
        word: "contract",
        hints: ["shorten", "constrict", "shrink"],
        sentence: "Metals _____ when cooled.",
        korean: "줄이다, 수축하다",
        etymology: "From Latin contractus 'drawn together'"
    },
    {
        word: "puzzling",
        hints: ["difficult to explain", "enigmatic", "mysterious"],
        sentence: "The disappearance remains a _____ mystery.",
        korean: "영문 모를",
        etymology: "From puzzle + -ing 'causing confusion'"
    },
    {
        word: "divest",
        hints: ["deprive", "strip", "despoil"],
        sentence: "The company decided to _____ itself of unprofitable assets.",
        korean: "빼앗다, 박탈하다",
        etymology: "From Latin divestire 'to undress'"
    },
    {
        word: "pacifier",
        hints: ["peacemaker", "arbitrator", "mediator", "intermediary"],
        sentence: "The United Nations acts as a _____ in international conflicts.",
        korean: "중재자",
        etymology: "From Latin pacificare 'to make peace'"
    },
    {
        word: "permanently",
        hints: ["forever", "eternally", "perpetually", "everlastingly"],
        sentence: "The damage to the ecosystem may be _____ irreversible.",
        korean: "영구히",
        etymology: "From permanent + -ly 'in a lasting manner'"
    },
    {
        word: "estimate",
        hints: ["assess", "evaluate", "judge", "calculate"],
        sentence: "Experts _____ the population at around 5 million.",
        korean: "평가하다, 추산하다",
        etymology: "From Latin aestimare 'to value, appraise'"
    },
    {
        word: "hurdle",
        hints: ["obstacle", "barrier", "hindrance", "impediment"],
        sentence: "Lack of funding is a major _____ to progress.",
        korean: "장애물",
        etymology: "From Old English hyrdel 'frame of intertwined twigs'"
    },
    {
        word: "relish",
        hints: ["enjoy", "like", "delight in", "revel in"],
        sentence: "She _____ the opportunity to travel abroad.",
        korean: "즐기다",
        etymology: "From Old French reles 'something remaining'"
    },
    {
        word: "simulate",
        hints: ["imitate", "pretend", "feign"],
        sentence: "The program can _____ real-world conditions.",
        korean: "흉내 내다, 가장하다",
        etymology: "From Latin simulare 'to copy, represent'"
    },
    {
        word: "hover",
        hints: ["drift", "float", "stay on the top"],
        sentence: "The helicopter _____ above the building.",
        korean: "맴돌다, 떠다니다",
        etymology: "From Middle English hoveren 'to linger'"
    },
    {
        word: "display",
        hints: ["show", "exhibit", "present"],
        sentence: "The museum _____ ancient artifacts.",
        korean: "보여 주다",
        etymology: "From Latin displicare 'to unfold'"
    },
    {
        word: "ominous",
        hints: ["foreboding", "portentous", "threatening"],
        sentence: "The dark clouds were an _____ sign of the approaching storm.",
        korean: "불길한, 험악한",
        etymology: "From Latin ominosus 'full of foreboding'"
    },
    {
        word: "stretch",
        hints: ["extend", "lengthen", "expand"],
        sentence: "The road _____ for miles through the desert.",
        korean: "늘이다",
        etymology: "From Old English streccan 'to stretch'"
    },
    {
        word: "concur",
        hints: ["agree", "assent", "consent"],
        sentence: "The committee members _____ with the proposal.",
        korean: "동의하다",
        etymology: "From Latin concurrere 'to run together, agree'"
    },
    {
        word: "crisis",
        hints: ["critical situation", "emergency", "disaster"],
        sentence: "The country faces an economic _____.",
        korean: "위기",
        etymology: "From Greek krisis 'decision, turning point'"
    },
    {
        word: "amplitude",
        hints: ["size", "extent", "magnitude"],
        sentence: "The _____ of the sound wave determines its volume.",
        korean: "크기, 규모",
        etymology: "From Latin amplitudo 'width, extent'"
    },
    {
        word: "disintegrate",
        hints: ["break down", "fall apart", "crumble"],
        sentence: "The old book began to _____ with age.",
        korean: "붕괴되다",
        etymology: "From dis- + integrate 'to break apart'"
    },
    {
        word: "liken to",
        hints: ["compare to", "relate to"],
        sentence: "Critics _____ his work to that of Picasso.",
        korean: "~에 비유하다",
        etymology: "From like + -en 'to make similar'"
    },
    {
        word: "immoral",
        hints: ["improper", "corrupt", "vicious"],
        sentence: "The act was considered _____ by society.",
        korean: "부도덕한",
        etymology: "From Latin immoralis 'not moral'"
    },
    {
        word: "instigate",
        hints: ["cause", "provoke", "trigger", "incite"],
        sentence: "The speech may _____ violence.",
        korean: "유발하다",
        etymology: "From Latin instigare 'to urge on'"
    },
    {
        word: "extraordinary",
        hints: ["exceptional", "unusual", "remarkable"],
        sentence: "She has _____ talent as a musician.",
        korean: "비범한",
        etymology: "From Latin extraordinarius 'out of the common order'"
    },
    {
        word: "resurgence",
        hints: ["comeback", "revival", "rebirth"],
        sentence: "There has been a _____ of interest in traditional crafts.",
        korean: "재기",
        etymology: "From Latin resurgere 'to rise again'"
    },
    {
        word: "patent",
        hints: ["evident", "obvious", "apparent", "manifest"],
        sentence: "His discomfort was _____ to everyone present.",
        korean: "명백한",
        etymology: "From Latin patens 'lying open'"
    },
    {
        word: "regular",
        hints: ["routine", "ordinary", "consistent"],
        sentence: "Maintain a _____ exercise schedule for best results.",
        korean: "정기적인, 일정한",
        etymology: "From Latin regularis 'containing rules'"
    },
    {
        word: "by virtue of",
        hints: ["because of", "thanks to", "on account of"],
        sentence: "He holds the position _____ his experience.",
        korean: "~덕분에(때문에)",
        etymology: "From virtue 'by means of'"
    },
    {
        word: "sever",
        hints: ["cut", "cut off", "part", "separate", "divide"],
        sentence: "The accident _____ the power lines.",
        korean: "자르다, 분리하다",
        etymology: "From Latin separare 'to separate'"
    },
    {
        word: "in conjunction with",
        hints: ["concomitant with", "together with", "along with"],
        sentence: "The drug is used _____ other treatments.",
        korean: "~과(와) 함께",
        etymology: "From conjunction 'joining together'"
    },
    {
        word: "confidence",
        hints: ["certainty", "assurance", "faith"],
        sentence: "She spoke with _____ about her abilities.",
        korean: "확신",
        etymology: "From Latin confidentia 'firmly trusting'"
    },
    {
        word: "distinguish",
        hints: ["differentiate", "tell apart", "discern"],
        sentence: "It's hard to _____ between the twins.",
        korean: "구별하다",
        etymology: "From Latin distinguere 'to separate'"
    },
    {
        word: "on the contrary",
        hints: ["conversely", "on the other hand"],
        sentence: "He's not lazy; _____, he works very hard.",
        korean: "그와는 반대로",
        etymology: "From contrary 'opposite'"
    },
    {
        word: "preponderance",
        hints: ["majority", "greater part", "bulk"],
        sentence: "The _____ of evidence supports the theory.",
        korean: "대부분",
        etymology: "From Latin praeponderare 'to outweigh'"
    },
    {
        word: "intermingle",
        hints: ["mix", "blend", "combine"],
        sentence: "Different cultures _____ in the city.",
        korean: "섞이다",
        etymology: "From inter- + mingle 'to mix together'"
    },
    {
        word: "merchandise",
        hints: ["goods", "product", "commodity"],
        sentence: "The store sells a variety of _____.",
        korean: "상품",
        etymology: "From Old French marchandise 'trade, commerce'"
    },
    {
        word: "delicate",
        hints: ["fragile", "brittle", "dainty", "exquisite", "fine"],
        sentence: "Handle the _____ glassware with care.",
        korean: "깨지기 쉬운, 섬세한",
        etymology: "From Latin delicatus 'giving pleasure, delightful'"
    },
    {
        word: "promising",
        hints: ["likely", "hopeful", "encouraging"],
        sentence: "The young athlete shows _____ potential.",
        korean: "유망한",
        etymology: "From promise + -ing 'showing signs of future success'"
    },
    {
        word: "gesture",
        hints: ["a movement made with the head, hand or arm", "signal"],
        sentence: "He made a _____ of welcome.",
        korean: "제스처, 몸짓",
        etymology: "From Latin gestura 'bearing, behavior'"
    }
];

// Make it available as a global variable for browser use
if (typeof window !== 'undefined') {
    window.day28Vocabulary = day28Vocabulary;
}

// Support both CommonJS and ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day28Vocabulary;
}
