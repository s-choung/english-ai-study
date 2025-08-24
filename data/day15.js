// Day 15 vocabulary data
const day15Vocabulary = [
    {
        word: "intact",
        hints: ["undamaged", "unbroken", "whole", "complete", "unaffected"],
        sentence: "The ancient vase remained _____ despite the earthquake.",
        korean: "손상되지 않은",
        etymology: "From Latin intactus 'untouched'"
    },
    {
        word: "albeit",
        hints: ["although", "though", "even though"],
        sentence: "The plan succeeded, _____ with some difficulties.",
        korean: "비록 ~이지만",
        etymology: "From all be it 'although it be'"
    },
    {
        word: "complex",
        hints: ["intricate", "complicated", "elaborate", "involved", "group of buildings", "system"],
        sentence: "The problem is more _____ than we initially thought.",
        korean: "복잡한, 복합 건물; 복합체",
        etymology: "From Latin complexus 'surrounding, encompassing'"
    },
    {
        word: "conventional",
        hints: ["traditional", "customary", "standard", "usual"],
        sentence: "She prefers _____ medicine over alternative treatments.",
        korean: "정통적인, 통례의",
        etymology: "From Latin conventio 'agreement, assembly'"
    },
    {
        word: "reasonable",
        hints: ["sensible", "rational", "logical", "sufficient"],
        sentence: "The hotel offers _____ prices for its excellent service.",
        korean: "합리적인, (가격이) 적당한",
        etymology: "From Latin ratio 'reckoning' + -able"
    },
    {
        word: "attainment",
        hints: ["achievement", "accomplishment", "fulfillment"],
        sentence: "Educational _____ is highly valued in this society.",
        korean: "성취",
        etymology: "From Old French ataindre 'to reach, achieve'"
    },
    {
        word: "progressively",
        hints: ["increasingly"],
        sentence: "The disease _____ worsened over time.",
        korean: "점진적으로",
        etymology: "From Latin progressus 'advance' + -ively"
    },
    {
        word: "drawback",
        hints: ["disadvantage", "problem", "defect", "shortcoming"],
        sentence: "The main _____ of this plan is its high cost.",
        korean: "결점",
        etymology: "From draw + back 'something that holds back'"
    },
    {
        word: "suppress",
        hints: ["hold back", "restrain", "stop by force"],
        sentence: "The government tried to _____ the rebellion.",
        korean: "억제하다, 참다, 진압하다",
        etymology: "From Latin supprimere 'to press down'"
    },
    {
        word: "incidentally",
        hints: ["by the way"],
        sentence: "_____, did you hear about the new policy?",
        korean: "덧붙여 말하자면, 그런데",
        etymology: "From incident + -ally 'happening alongside'"
    },
    {
        word: "tactic",
        hints: ["strategy", "maneuver"],
        sentence: "The company adopted a new marketing _____.",
        korean: "전략",
        etymology: "From Greek taktikos 'of arrangement'"
    },
    {
        word: "substantial",
        hints: ["(fairly) large", "considerable", "significant", "noticeable"],
        sentence: "They made a _____ profit from the investment.",
        korean: "상당한",
        etymology: "From Latin substantia 'being, essence'"
    },
    {
        word: "verify",
        hints: ["confirm", "establish the truth of", "validate"],
        sentence: "Please _____ your email address to continue.",
        korean: "입증하다, 확인하다",
        etymology: "From Latin verus 'true' + facere 'to make'"
    },
    {
        word: "sustained",
        hints: ["constant", "continued", "uninterrupted", "prolonged"],
        sentence: "The economy showed _____ growth over five years.",
        korean: "지속적인",
        etymology: "From Latin sustinere 'to hold up'"
    },
    {
        word: "radical",
        hints: ["fundamental", "basic", "extreme", "drastic"],
        sentence: "The new CEO made _____ changes to the company structure.",
        korean: "근본적인, 극단적인, 과격한",
        etymology: "From Latin radix 'root'"
    },
    {
        word: "prime",
        hints: ["peak", "high-quality", "superior", "main"],
        sentence: "Location is the _____ consideration when buying property.",
        korean: "최고의, 주요한",
        etymology: "From Latin primus 'first'"
    },
    {
        word: "grasp",
        hints: ["understand", "catch", "comprehend", "apprehend"],
        sentence: "It took time to fully _____ the concept.",
        korean: "이해하다, 파악하다",
        etymology: "From Middle English graspen 'to seize'"
    },
    {
        word: "prominently",
        hints: ["very noticeably", "conspicuously", "notably"],
        sentence: "Her name was displayed _____ on the poster.",
        korean: "눈에 띄게",
        etymology: "From Latin prominere 'to jut out' + -ly"
    },
    {
        word: "precipitate",
        hints: ["bring about", "cause", "give rise to", "trigger"],
        sentence: "The scandal could _____ a political crisis.",
        korean: "재촉하다, 촉발하다",
        etymology: "From Latin praecipitare 'to throw headlong'"
    },
    {
        word: "interlock",
        hints: ["link", "connect", "join"],
        sentence: "The gears _____ to create smooth movement.",
        korean: "서로 맞물리다",
        etymology: "From inter- 'between' + lock"
    },
    {
        word: "accordingly",
        hints: ["consequently", "for that reason"],
        sentence: "The rules changed, and we adjusted our plans _____.",
        korean: "그에 따라서",
        etymology: "From according + -ly 'in accordance with'"
    },
    {
        word: "relevant",
        hints: ["applicable", "pertinent", "germane"],
        sentence: "Please provide only _____ information.",
        korean: "관련된, 적절한",
        etymology: "From Latin relevare 'to raise up, relieve'"
    },
    {
        word: "remarkably",
        hints: ["surprisingly"],
        sentence: "She recovered _____ quickly from the surgery.",
        korean: "놀랍게도, 현저하게",
        etymology: "From remark + -ably 'worthy of notice'"
    },
    {
        word: "disputable",
        hints: ["challengeable", "debatable", "arguable"],
        sentence: "The ownership of the land is still _____.",
        korean: "논란의 여지가 있는",
        etymology: "From Latin disputare 'to discuss'"
    },
    {
        word: "ambitious",
        hints: ["desiring success", "aspiring"],
        sentence: "She has _____ plans for her career.",
        korean: "야심 있는",
        etymology: "From Latin ambitio 'going around' (canvassing for votes)"
    },
    {
        word: "congeal",
        hints: ["solidify", "harden", "stiffen", "condense"],
        sentence: "The blood will _____ when exposed to air.",
        korean: "굳다, 응고하다",
        etymology: "From Latin congelare 'to freeze together'"
    },
    {
        word: "cautious",
        hints: ["careful", "wary", "prudent", "discreet"],
        sentence: "Be _____ when crossing the busy street.",
        korean: "신중한, 조심성 있는",
        etymology: "From Latin cautio 'caution, care'"
    },
    {
        word: "realm",
        hints: ["area", "field", "sphere", "domain"],
        sentence: "This discovery opens new possibilities in the _____ of medicine.",
        korean: "영역, 범위",
        etymology: "From Old French reaume 'kingdom'"
    },
    {
        word: "dam",
        hints: ["block", "obstruct"],
        sentence: "Beavers _____ streams to create ponds.",
        korean: "(둑으로) 막다",
        etymology: "From Middle English 'to stop up'"
    },
    {
        word: "flattery",
        hints: ["praise"],
        sentence: "She saw through his obvious _____.",
        korean: "아첨",
        etymology: "From Old French flater 'to stroke, caress'"
    },
    {
        word: "amplify",
        hints: ["increase", "magnify", "enlarge", "expand"],
        sentence: "The microphone will _____ your voice.",
        korean: "확대하다, 증폭하다",
        etymology: "From Latin amplificare 'to enlarge'"
    },
    {
        word: "dimension",
        hints: ["size", "magnitude"],
        sentence: "We need to consider every _____ of this problem.",
        korean: "차원, 크기, 규모",
        etymology: "From Latin dimensio 'measuring'"
    },
    {
        word: "deplete",
        hints: ["exhaust", "empty", "use up", "reduce"],
        sentence: "Overfishing will _____ the ocean's resources.",
        korean: "다 써버리다, 고갈시키다",
        etymology: "From Latin deplere 'to empty out'"
    },
    {
        word: "characteristic",
        hints: ["distinctive", "peculiar", "special", "quality", "feature", "trait"],
        sentence: "Patience is a _____ of good teachers.",
        korean: "특유의, 특징, 특성",
        etymology: "From Greek kharakter 'engraved mark'"
    },
    {
        word: "ice sheet",
        hints: ["glacier"],
        sentence: "The Antarctic _____ contains most of Earth's fresh water.",
        korean: "대륙 빙하",
        etymology: "From ice + sheet 'large expanse of ice'"
    },
    {
        word: "spectator",
        hints: ["viewer", "onlooker"],
        sentence: "Thousands of _____ watched the match.",
        korean: "관객, 구경꾼",
        etymology: "From Latin spectare 'to watch'"
    },
    {
        word: "bountifully",
        hints: ["abundantly", "copiously", "plentifully", "exuberantly"],
        sentence: "The harvest came in _____ this year.",
        korean: "풍부하게",
        etymology: "From bounty + -fully 'generously'"
    },
    {
        word: "suffer paralysis",
        hints: ["lose the ability to move"],
        sentence: "The accident caused him to _____ in his legs.",
        korean: "마비를 겪다",
        etymology: "From Latin paralysis 'disabling of nerves'"
    },
    {
        word: "variation",
        hints: ["variance", "fluctuation", "difference"],
        sentence: "There is considerable _____ in test scores.",
        korean: "변동, 차이",
        etymology: "From Latin variare 'to change'"
    },
    {
        word: "periphery",
        hints: ["edge", "boundary", "border", "fringe"],
        sentence: "The shops are located on the _____ of town.",
        korean: "주변, 가장자리",
        etymology: "From Greek periphereia 'circumference'"
    },
    {
        word: "apparently",
        hints: ["seemingly", "ostensibly", "outwardly"],
        sentence: "She was _____ unaware of the problem.",
        korean: "외관상으로는, 분명히",
        etymology: "From apparent + -ly 'evidently'"
    },
    {
        word: "far-reaching",
        hints: ["extensive", "widespread", "broad"],
        sentence: "The decision will have _____ consequences.",
        korean: "광범위한",
        etymology: "From far + reaching 'extending widely'"
    },
    {
        word: "embody",
        hints: ["incarnate", "represent", "manifest", "contain", "incorporate"],
        sentence: "She seems to _____ all the qualities we're looking for.",
        korean: "구체적으로 나타내다, 포함하다",
        etymology: "From em- 'in' + body 'to give form to'"
    },
    {
        word: "evade",
        hints: ["escape", "avoid", "elude", "dodge", "shun"],
        sentence: "The criminal managed to _____ capture for months.",
        korean: "피하다",
        etymology: "From Latin evadere 'to go out, escape'"
    },
    {
        word: "against",
        hints: ["next to", "beside"],
        sentence: "Place the ladder _____ the wall.",
        korean: "~에 붙여, ~에 기대어",
        etymology: "From again + -st 'in opposition to'"
    },
    {
        word: "due to",
        hints: ["caused by", "owing to", "attributable to"],
        sentence: "The flight was delayed _____ bad weather.",
        korean: "~로 인한, ~에 기인하는",
        etymology: "From due 'owed' + to"
    },
    {
        word: "classify",
        hints: ["categorize", "arrange", "assort"],
        sentence: "Scientists _____ animals into different species.",
        korean: "분류하다",
        etymology: "From Latin classis 'class' + facere 'to make'"
    },
    {
        word: "oblige",
        hints: ["force", "require", "compel"],
        sentence: "The law will _____ companies to reduce emissions.",
        korean: "강요하다, 의무를 지우다",
        etymology: "From Latin obligare 'to bind'"
    },
    {
        word: "identical",
        hints: ["same", "indistinguishable", "equal"],
        sentence: "The twins wore _____ outfits.",
        korean: "동일한",
        etymology: "From Latin idem 'the same'"
    },
    {
        word: "intimately",
        hints: ["closely"],
        sentence: "The two subjects are _____ connected.",
        korean: "친밀하게, 밀접하게",
        etymology: "From Latin intimus 'inmost' + -ly"
    },
    {
        word: "questionable",
        hints: ["doubtful", "suspicious", "dubious"],
        sentence: "The accuracy of his statement is _____.",
        korean: "의심스러운",
        etymology: "From question + -able 'open to doubt'"
    },
    {
        word: "spot",
        hints: ["detect", "see", "find"],
        sentence: "Can you _____ the difference between these two pictures?",
        korean: "발견하다, 알아채다",
        etymology: "From Middle English 'to mark with spots'"
    },
    {
        word: "immerse",
        hints: ["cover", "plunge", "dip"],
        sentence: "_____ the vegetables in cold water.",
        korean: "(물에) 잠그다, 담그다",
        etymology: "From Latin immergere 'to dip into'"
    },
    {
        word: "not in consensus with",
        hints: ["not in agreement with"],
        sentence: "His views are _____ the majority opinion.",
        korean: "(의견이) ~와 일치하지 않는",
        etymology: "From Latin consensus 'agreement'"
    },
    {
        word: "tempted to",
        hints: ["inclined to"],
        sentence: "I was _____ accept the offer immediately.",
        korean: "~하고 싶어지다",
        etymology: "From Latin temptare 'to test, try'"
    },
    {
        word: "inception",
        hints: ["beginning"],
        sentence: "The company has grown rapidly since its _____.",
        korean: "시작, 개시",
        etymology: "From Latin incipere 'to begin'"
    }
];

// Also make it available as a global variable for compatibility
if (typeof window !== 'undefined') {
    window.day15Vocabulary = day15Vocabulary;
}

export default day15Vocabulary;