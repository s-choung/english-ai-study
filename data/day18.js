// Day 18 vocabulary data
const day18Vocabulary = [
    {
        word: "initiative",
        hints: ["enterprise", "ambition", "drive"],
        sentence: "She showed great _____ in organizing the community event.",
        korean: "진취성",
        etymology: "Latin 'initiare' (begin) = power to begin action"
    },
    {
        word: "provided that",
        hints: ["if", "once", "on the condition that", "supposing"],
        sentence: "You can attend the meeting _____ you finish your work.",
        korean: "만약 ~이라면",
        etymology: "Provide (supply) + that = on the condition that"
    },
    {
        word: "phenomenal",
        hints: ["extraordinary", "remarkable"],
        sentence: "The athlete's performance was absolutely _____.",
        korean: "경이적인",
        etymology: "Greek 'phainomenon' (appearance) = remarkable appearance"
    },
    {
        word: "likewise",
        hints: ["similarly", "in the same way", "also", "as well"],
        sentence: "He enjoyed the concert; _____, his wife found it entertaining.",
        korean: "마찬가지로, 똑같이, 또한",
        etymology: "Like (similar) + wise (manner) = in a similar manner"
    },
    {
        word: "tangible",
        hints: ["material", "physical", "concrete", "substantial"],
        sentence: "The new policy produced _____ improvements in efficiency.",
        korean: "유형의, 실재하는",
        etymology: "Latin 'tangere' (touch) = able to be touched"
    },
    {
        word: "absurd",
        hints: ["ridiculous", "preposterous", "ludicrous"],
        sentence: "It's _____ to think we can finish this project in one day.",
        korean: "터무니없는",
        etymology: "Latin 'absurdus' (out of tune) = unreasonable"
    },
    {
        word: "inclement",
        hints: ["unfavorable", "harsh", "severe"],
        sentence: "The _____ weather forced us to cancel the outdoor event.",
        korean: "(날씨가) 혹독한",
        etymology: "Latin 'in' (not) + 'clemens' (mild) = not mild"
    },
    {
        word: "overly",
        hints: ["excessively", "inordinately", "unduly"],
        sentence: "He was _____ critical of the new employee's work.",
        korean: "지나치게",
        etymology: "Over (beyond) + -ly = beyond proper limits"
    },
    {
        word: "consume",
        hints: ["expend", "use up", "completely use", "exhaust", "destroy", "devastate", "demolish", "eat", "devour"],
        sentence: "The fire will _____ the entire forest if not controlled.",
        korean: "소비하다, 소멸시키다, 먹다",
        etymology: "Latin 'con' (completely) + 'sumere' (take) = use up completely"
    },
    {
        word: "overall",
        hints: ["general", "total", "comprehensive"],
        sentence: "The _____ performance of the team was excellent.",
        korean: "전반적인",
        etymology: "Over (above) + all = covering everything"
    },
    {
        word: "promote",
        hints: ["encourage", "advance", "further", "forward"],
        sentence: "The campaign aims to _____ environmental awareness.",
        korean: "촉진하다",
        etymology: "Latin 'pro' (forward) + 'movere' (move) = move forward"
    },
    {
        word: "proliferation",
        hints: ["increase", "growth", "multiplication"],
        sentence: "The _____ of smartphones has changed communication.",
        korean: "급증",
        etymology: "Latin 'proles' (offspring) + 'ferre' (bear) = rapid multiplication"
    },
    {
        word: "copious",
        hints: ["plentiful", "abundant", "ample", "bountiful"],
        sentence: "She took _____ notes during the important lecture.",
        korean: "풍부한",
        etymology: "Latin 'copia' (abundance) = existing in large quantities"
    },
    {
        word: "negligible",
        hints: ["insignificant", "slight", "minor", "trivial"],
        sentence: "The cost increase was _____ compared to the benefits.",
        korean: "사소한",
        etymology: "Latin 'negligere' (neglect) = so small as to be neglected"
    },
    {
        word: "notably",
        hints: ["particularly", "especially", "in particular"],
        sentence: "The weather was terrible, _____ during the morning hours.",
        korean: "특히",
        etymology: "Notable (worthy of note) + -ly = in a noteworthy manner"
    },
    {
        word: "inhibit",
        hints: ["hinder", "restrict", "limit", "restrain", "ban", "prohibit", "forbid"],
        sentence: "Stress can _____ the body's ability to heal properly.",
        korean: "금지하다",
        etymology: "Latin 'in' (in) + 'habere' (hold) = hold back"
    },
    {
        word: "worshiper",
        hints: ["people participating in a religious service"],
        sentence: "The temple was filled with devoted _____.",
        korean: "예배자",
        etymology: "Worship (reverence) + -er = one who worships"
    },
    {
        word: "pool",
        hints: ["combine", "put together", "combination", "group"],
        sentence: "The companies decided to _____ their resources.",
        korean: "모으다, 기업, 연합",
        etymology: "Old English 'pol' (small body of water) = collective resource"
    },
    {
        word: "at the urging of",
        hints: ["at the recommendation of"],
        sentence: "_____ his advisor, he changed his major to engineering.",
        korean: "~의 권고로",
        etymology: "Urge (push strongly) = at strong recommendation"
    },
    {
        word: "ornamental",
        hints: ["decorative", "beautifying", "embellishing"],
        sentence: "The garden featured many _____ plants and flowers.",
        korean: "장식용의",
        etymology: "Latin 'ornare' (adorn) = serving as decoration"
    },
    {
        word: "regime",
        hints: ["government", "administration", "authorities"],
        sentence: "The new _____ promised significant political reforms.",
        korean: "정권, 체제",
        etymology: "French 'régime' (rule) = system of government"
    },
    {
        word: "acclaim",
        hints: ["praise", "compliment", "applaud"],
        sentence: "The novel received critical _____ from literary reviewers.",
        korean: "격찬하다",
        etymology: "Latin 'ad' (to) + 'clamare' (shout) = shout approval"
    },
    {
        word: "comprehensible",
        hints: ["understandable", "apprehensible", "knowable"],
        sentence: "The professor made complex theories _____ to students.",
        korean: "이해할 수 있는",
        etymology: "Latin 'comprehendere' (grasp) = able to be grasped"
    },
    {
        word: "disparity",
        hints: ["inequality", "imbalance", "disproportion"],
        sentence: "There's a significant _____ in wages between the two positions.",
        korean: "차이, 불균형",
        etymology: "Latin 'dis' (apart) + 'par' (equal) = lack of equality"
    },
    {
        word: "bold",
        hints: ["daring", "brave", "courageous"],
        sentence: "The CEO made a _____ decision to expand internationally.",
        korean: "용감한",
        etymology: "Old English 'beald' (confident) = showing courage"
    },
    {
        word: "noteworthy",
        hints: ["important", "notable", "significant"],
        sentence: "Her contribution to the project was truly _____.",
        korean: "주목할 만한",
        etymology: "Note (observe) + worthy = deserving attention"
    },
    {
        word: "spectacular",
        hints: ["magnificent", "splendid", "impressive"],
        sentence: "The fireworks display was absolutely _____.",
        korean: "장관인, 눈부신",
        etymology: "Latin 'spectare' (watch) = impressive to watch"
    },
    {
        word: "extracted from",
        hints: ["taken out of", "drawn out of"],
        sentence: "The oil is _____ deep underground reserves.",
        korean: "~에서 뽑아낸",
        etymology: "Latin 'ex' (out) + 'trahere' (draw) = drawn out from"
    },
    {
        word: "tantalize",
        hints: ["tempt"],
        sentence: "The aroma of fresh bread will _____ hungry customers.",
        korean: "애타게 하다",
        etymology: "Greek 'Tantalos' (mythical king) = torment with unattainable desires"
    },
    {
        word: "allied",
        hints: ["related", "linked", "connected"],
        sentence: "The two companies formed _____ partnerships for growth.",
        korean: "관련된",
        etymology: "Old French 'alier' (bind) = joined together"
    },
    {
        word: "authoritative",
        hints: ["official", "authorized"],
        sentence: "We need an _____ source for this important information.",
        korean: "권위있는, 믿을만한",
        etymology: "Latin 'auctoritas' (influence) = having official power"
    },
    {
        word: "moral",
        hints: ["lesson", "message", "teaching"],
        sentence: "The _____ of the story teaches us about honesty.",
        korean: "교훈",
        etymology: "Latin 'moralis' (concerning character) = lesson about conduct"
    },
    {
        word: "compatible",
        hints: ["consistent", "congruous", "consonant"],
        sentence: "The new software is _____ with all operating systems.",
        korean: "일치하는, 양립할 수 있는",
        etymology: "Latin 'com' (together) + 'pati' (suffer) = able to coexist"
    },
    {
        word: "buildup",
        hints: ["accumulation"],
        sentence: "The _____ of tension led to the eventual conflict.",
        korean: "축적",
        etymology: "Build (construct) + up = gradual accumulation"
    },
    {
        word: "stress",
        hints: ["emphasize", "highlight", "underline", "emphasis", "accent"],
        sentence: "The teacher will _____ the importance of punctuality.",
        korean: "강조하다, 중점, 강조",
        etymology: "Latin 'strictus' (drawn tight) = apply pressure"
    },
    {
        word: "respective",
        hints: ["particular", "individual"],
        sentence: "The students returned to their _____ classrooms.",
        korean: "각각의, 개별적인",
        etymology: "Latin 'respectus' (regard) = relating to each separately"
    },
    {
        word: "peculiarity",
        hints: ["feature", "characteristic", "quality"],
        sentence: "The odd _____ of his behavior puzzled everyone.",
        korean: "(기이한) 특징, 특성",
        etymology: "Latin 'peculiaris' (private) = distinctive characteristic"
    },
    {
        word: "rely upon",
        hints: ["depend upon", "resort to"],
        sentence: "We cannot _____ outdated technology for this project.",
        korean: "~에 의존하다",
        etymology: "Latin 're' (back) + 'ligare' (bind) = bind oneself to"
    },
    {
        word: "rapid",
        hints: ["fast", "quick", "speedy", "swift"],
        sentence: "The _____ development of technology surprises everyone.",
        korean: "빠른",
        etymology: "Latin 'rapidus' (snatching) = moving with great speed"
    },
    {
        word: "saturate",
        hints: ["soak", "drench", "wet thoroughly"],
        sentence: "The heavy rain will _____ the dry soil.",
        korean: "흠뻑 적시다",
        etymology: "Latin 'saturare' (fill full) = fill completely"
    },
    {
        word: "constitution",
        hints: ["form", "structure"],
        sentence: "The _____ of the committee includes five members.",
        korean: "구성, 구조",
        etymology: "Latin 'constituere' (establish) = way something is formed"
    },
    {
        word: "efface",
        hints: ["wipe out", "erase", "expunge"],
        sentence: "Time will gradually _____ the painful memories.",
        korean: "지우다, 없애다",
        etymology: "French 'effacer' (remove face) = make invisible"
    },
    {
        word: "manageable",
        hints: ["controllable", "affordable", "easy to handle"],
        sentence: "The workload became more _____ after hiring assistants.",
        korean: "관리하기 쉬운",
        etymology: "Manage (control) + -able = able to be controlled"
    },
    {
        word: "approach",
        hints: ["come close", "move toward", "come toward", "near", "reach", "method", "way"],
        sentence: "We need a different _____ to solve this problem.",
        korean: "접근하다, 접근법",
        etymology: "Latin 'ad' (to) + 'propiare' (come near) = come closer"
    },
    {
        word: "routinely",
        hints: ["commonly", "regularly", "habitually"],
        sentence: "The machines are _____ inspected for safety issues.",
        korean: "일상적으로",
        etymology: "Route (regular course) + -ly = in a regular manner"
    },
    {
        word: "adapt",
        hints: ["adjust", "acclimate", "conform"],
        sentence: "Animals must _____ to changes in their environment.",
        korean: "적응하다",
        etymology: "Latin 'ad' (to) + 'aptare' (fit) = make suitable"
    },
    {
        word: "implication",
        hints: ["consequence", "result"],
        sentence: "The _____ of this decision will affect everyone.",
        korean: "결과",
        etymology: "Latin 'implicare' (entangle) = something implied"
    },
    {
        word: "unambiguous",
        hints: ["clear", "distinct", "definite"],
        sentence: "The instructions must be _____ to avoid confusion.",
        korean: "분명한",
        etymology: "Un- (not) + ambiguous (unclear) = completely clear"
    },
    {
        word: "rigor",
        hints: ["harshness", "strictness", "rigidness", "hardship", "adversity"],
        sentence: "The _____ of military training prepared them well.",
        korean: "엄격함, 고초, 어려움",
        etymology: "Latin 'rigor' (stiffness) = strict precision"
    },
    {
        word: "contentious",
        hints: ["disputed", "controversial", "argumentative"],
        sentence: "The _____ issue divided the community in half.",
        korean: "논쟁을 불러일으키는",
        etymology: "Latin 'contentus' (striving) = causing disagreement"
    },
    {
        word: "competent",
        hints: ["adept", "skilled", "capable"],
        sentence: "She is a _____ manager who handles crises well.",
        korean: "유능한",
        etymology: "Latin 'competere' (strive together) = having ability"
    },
    {
        word: "incredible",
        hints: ["unbelievable", "inconceivable", "unimaginable"],
        sentence: "The magician performed an _____ trick for the audience.",
        korean: "믿기 힘든",
        etymology: "Latin 'in' (not) + 'credere' (believe) = not believable"
    },
    {
        word: "string",
        hints: ["series", "chain"],
        sentence: "A _____ of unfortunate events led to the failure.",
        korean: "일련",
        etymology: "Old English 'streng' (cord) = connected sequence"
    },
    {
        word: "decompose",
        hints: ["decay", "rot"],
        sentence: "Organic matter will naturally _____ in the soil.",
        korean: "부패하다",
        etymology: "Latin 'de' (down) + 'componere' (put together) = break down"
    },
    {
        word: "lateral",
        hints: ["side"],
        sentence: "The _____ movement of the crab surprised the children.",
        korean: "측면의",
        etymology: "Latin 'latus' (side) = relating to the side"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day18Vocabulary;
} else {
    window.day18Vocabulary = day18Vocabulary;
}