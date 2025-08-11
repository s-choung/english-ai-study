// Day 6 vocabulary data (your existing data)
const day6Vocabulary = [
    {
        word: "disperse",
        hints: ["scatter", "dissipate", "spread", "disseminate"],
        sentence: "The crowd began to _____ after the event ended.",
        korean: "퍼뜨리다",
        etymology: "Latin 'dis-' (apart) + 'spargere' (to scatter) = 분산하다"
    },
    {
        word: "adjacent",
        hints: ["nearby", "neighboring", "adjoining"],
        sentence: "The hotel is _____ to the shopping center.",
        korean: "인접한",
        etymology: "Latin 'ad-' (to) + 'jacere' (to lie) = 가까이 놓여있는"
    },
    {
        word: "sequence",
        hints: ["progression", "series", "string", "succession", "order"],
        sentence: "Please arrange the events in chronological _____.",
        korean: "연속, 순서",
        etymology: "Latin 'sequi' (to follow) = 따라오는 것들"
    },
    {
        word: "detect",
        hints: ["discover", "find", "identify", "recognize", "sense"],
        sentence: "The sensor can _____ even the smallest changes in temperature.",
        korean: "발견하다",
        etymology: "Latin 'de-' (away) + 'tegere' (to cover) = 덮개를 벗기다"
    },
    {
        word: "flexible",
        hints: ["pliable", "bendable", "adaptable", "adjustable"],
        sentence: "The company has a _____ work schedule for employees.",
        korean: "유연한",
        etymology: "Latin 'flectere' (to bend) = 구부릴 수 있는"
    },
    {
        word: "surpass",
        hints: ["exceed", "outrun", "be higher than", "excel"],
        sentence: "Her performance will _____ all expectations.",
        korean: "능가하다",
        etymology: "French 'sur-' (over) + 'passer' (to pass) = 넘어서다"
    },
    {
        word: "invariable",
        hints: ["constant", "consistent", "unchanging"],
        sentence: "The laws of physics remain _____ across the universe.",
        korean: "변함없는",
        etymology: "Latin 'in-' (not) + 'variare' (to change) = 변하지 않는"
    },
    {
        word: "dramatic",
        hints: ["striking", "significant", "impressive"],
        sentence: "There was a _____ increase in sales this quarter.",
        korean: "극적인, 인상적인",
        etymology: "Greek 'drama' (action) = 행동과 같은, 극적인"
    },
    {
        word: "master",
        hints: ["learn thoroughly", "learn", "acquire", "control", "manage"],
        sentence: "It takes years to _____ a new language.",
        korean: "습득하다, 제어하다",
        etymology: "Latin 'magister' (teacher) = 가르치는 사람처럼 알다"
    },
    {
        word: "assimilate",
        hints: ["absorb", "take in", "digest"],
        sentence: "New immigrants often struggle to _____ into the local culture.",
        korean: "흡수하다",
        etymology: "Latin 'ad-' (to) + 'similis' (like) = 같아지게 하다"
    },
    {
        word: "overwhelming",
        hints: ["powerful", "enormous", "compelling", "tremendous"],
        sentence: "The support from the community was _____.",
        korean: "압도적인",
        etymology: "Over + whelm (to cover completely) = 완전히 덮다"
    },
    {
        word: "curious",
        hints: ["inquisitive", "questioning", "inquiring", "strange", "mysterious", "extraordinary"],
        sentence: "The child was _____ about how the machine worked.",
        korean: "호기심이 강한, 이상한",
        etymology: "Latin 'cura' (care) = 관심을 갖는"
    },
    {
        word: "alteration",
        hints: ["change", "modification"],
        sentence: "The dress required several _____ before the wedding.",
        korean: "변화",
        etymology: "Latin 'alter' (other) = 다른 것으로 만들기"
    },
    {
        word: "consequence",
        hints: ["result", "effect", "ramification", "outcome", "importance", "significance"],
        sentence: "The _____ of his actions became clear later.",
        korean: "결과, 중요성",
        etymology: "Latin 'con-' (with) + 'sequi' (to follow) = 따라오는 것"
    },
    {
        word: "deceive",
        hints: ["mislead", "delude", "cheat"],
        sentence: "He tried to _____ the investigators with false evidence.",
        korean: "속이다",
        etymology: "Latin 'de-' (away) + 'capere' (to take) = 잘못된 방향으로 이끌다"
    },
    {
        word: "ample",
        hints: ["sizable", "large", "spacious", "vast", "plentiful", "abundant", "more than enough"],
        sentence: "There is _____ space for everyone in the auditorium.",
        korean: "넓은, 풍부한",
        etymology: "Latin 'amplus' (large, spacious) = 큰"
    },
    {
        word: "resilient",
        hints: ["quick to recover", "easy to recover"],
        sentence: "Children are remarkably _____ after experiencing trauma.",
        korean: "금방 회복하는",
        etymology: "Latin 're-' (back) + 'salire' (to jump) = 다시 튀어오르다"
    },
    {
        word: "detach",
        hints: ["separate", "disconnect", "disengage"],
        sentence: "Please _____ the cable before moving the equipment.",
        korean: "분리하다",
        etymology: "French 'dé-' (un-) + 'tacher' (to fasten) = 고정을 풀다"
    },
    {
        word: "account",
        hints: ["description", "report", "narrative"],
        sentence: "The witness gave a detailed _____ of the incident.",
        korean: "기술, 보고",
        etymology: "Latin 'ad-' (to) + 'computare' (to calculate) = 계산하여 말하다"
    },
    {
        word: "equilibrium",
        hints: ["balance", "symmetry"],
        sentence: "The ecosystem maintains a delicate _____ between predators and prey.",
        korean: "균형",
        etymology: "Latin 'aequi-' (equal) + 'libra' (balance) = 같은 균형"
    },
    {
        word: "surmise",
        hints: ["infer", "guess", "speculate", "suspect"],
        sentence: "From the evidence, we can _____ what happened.",
        korean: "추측하다",
        etymology: "Latin 'sur-' (over) + 'mittere' (to send) = 위에서 보내다, 추측하다"
    },
    {
        word: "unsuitable",
        hints: ["inappropriate", "unfit", "improper"],
        sentence: "This location is _____ for a children's playground.",
        korean: "적합하지 않은",
        etymology: "Un- (not) + suitable = 적합하지 않은"
    },
    {
        word: "imaginative",
        hints: ["creative", "inventive", "original"],
        sentence: "The artist's _____ approach impressed the critics.",
        korean: "창의적인",
        etymology: "Latin 'imago' (image) = 상상할 수 있는"
    },
    {
        word: "imposing",
        hints: ["impressive", "striking"],
        sentence: "The cathedral has an _____ presence in the city center.",
        korean: "인상적인",
        etymology: "Latin 'im-' (upon) + 'ponere' (to place) = 위에 놓다, 인상을 주다"
    },
    {
        word: "vitality",
        hints: ["energy", "liveliness", "vigor"],
        sentence: "Despite her age, she maintains remarkable _____.",
        korean: "활력",
        etymology: "Latin 'vita' (life) = 생명력"
    },
    {
        word: "vehicle",
        hints: ["means", "medium", "instrument"],
        sentence: "Art can be a _____ for expressing social criticism.",
        korean: "수단, 매체",
        etymology: "Latin 'vehere' (to carry) = 운반하는 것"
    },
    {
        word: "hitherto",
        hints: ["previously", "so far", "until now"],
        sentence: "The research reveals facts _____ unknown to science.",
        korean: "지금까지",
        etymology: "Hither (here) + to = 여기까지"
    },
    {
        word: "plague",
        hints: ["cause a problem for", "bother", "annoy"],
        sentence: "Technical difficulties continue to _____ the project.",
        korean: "괴롭히다",
        etymology: "Latin 'plaga' (blow, wound) = 상처를 주다"
    },
    {
        word: "domain",
        hints: ["area", "field"],
        sentence: "Mathematics is not my _____ of expertise.",
        korean: "영역",
        etymology: "Latin 'dominus' (lord) = 주인의 영토"
    },
    {
        word: "indifferent",
        hints: ["uninterested", "unconcerned", "careless"],
        sentence: "She remained _____ to the criticism around her.",
        korean: "무관심한",
        etymology: "Latin 'in-' (not) + 'differre' (to differ) = 차이를 두지 않는"
    },
    {
        word: "champion",
        hints: ["support", "promote", "advocate", "endorse"],
        sentence: "The senator will _____ the new environmental bill.",
        korean: "옹호하다",
        etymology: "Latin 'campus' (field) = 경기장에서 싸우는 사람"
    },
    {
        word: "deteriorate",
        hints: ["get worse", "degenerate"],
        sentence: "The patient's condition began to _____ rapidly.",
        korean: "악화되다",
        etymology: "Latin 'de-' (down) + 'terior' (worse) = 더 나빠지다"
    },
    {
        word: "assault",
        hints: ["attack", "aggress", "assail"],
        sentence: "The army will _____ the enemy fortress at dawn.",
        korean: "공격하다",
        etymology: "Latin 'ad-' (to) + 'salire' (to jump) = 뛰어들어 공격하다"
    },
    {
        word: "appropriate",
        hints: ["suitable", "proper", "applicable"],
        sentence: "Please wear _____ attire for the formal dinner.",
        korean: "적절한",
        etymology: "Latin 'ad-' (to) + 'proprius' (one's own) = 자신에게 맞는"
    },
    {
        word: "adept",
        hints: ["skillful", "proficient", "deft", "adroit"],
        sentence: "She is _____ at solving complex mathematical problems.",
        korean: "능숙한",
        etymology: "Latin 'adipisci' (to reach) = 도달한, 숙련된"
    },
    {
        word: "indeed",
        hints: ["in truth", "in fact"],
        sentence: "The results were, _____, better than expected.",
        korean: "사실은",
        etymology: "In + deed (action) = 실제로"
    },
    {
        word: "pursuit",
        hints: ["interest", "pastime", "hobby"],
        sentence: "Photography is his favorite _____ in his spare time.",
        korean: "취미",
        etymology: "Latin 'pro-' (forward) + 'sequi' (to follow) = 앞으로 따라가다"
    },
    {
        word: "incite",
        hints: ["stimulate", "provoke", "inflame", "spur"],
        sentence: "The speech was designed to _____ the crowd to action.",
        korean: "자극하다",
        etymology: "Latin 'in-' (into) + 'citare' (to move) = 움직이게 하다"
    },
    {
        word: "guarantee",
        hints: ["ensure", "secure", "warrant"],
        sentence: "The company will _____ the quality of their products.",
        korean: "보장하다",
        etymology: "Germanic 'warjan' (to protect) = 보호하다"
    },
    {
        word: "prosperity",
        hints: ["economic well-being", "wealth", "fortune"],
        sentence: "The country enjoyed a period of great _____ after the war.",
        korean: "번영",
        etymology: "Latin 'pro-' (forward) + 'spes' (hope) = 앞으로의 희망"
    },
    {
        word: "primarily",
        hints: ["mostly", "mainly", "chiefly", "originally", "at first", "initially"],
        sentence: "The program is _____ designed for advanced students.",
        korean: "주로, 처음에",
        etymology: "Latin 'primus' (first) = 첫 번째로"
    },
    {
        word: "erupt",
        hints: ["explode", "burst", "blow up"],
        sentence: "The volcano is expected to _____ within the next few days.",
        korean: "폭발하다",
        etymology: "Latin 'e-' (out) + 'rumpere' (to break) = 터져 나오다"
    },
    {
        word: "trace",
        hints: ["evidence", "vestige", "imprint", "mark"],
        sentence: "Archaeologists found no _____ of ancient civilization here.",
        korean: "자취, 흔적",
        etymology: "Latin 'trahere' (to draw) = 그어진 선"
    },
    {
        word: "prestigious",
        hints: ["highly regarded", "esteemed", "respected"],
        sentence: "She graduated from a _____ university.",
        korean: "명성이 있는",
        etymology: "Latin 'praestigiae' (illusions) = 환상을 만드는, 인상적인"
    },
    {
        word: "shape",
        hints: ["affect", "form", "influence"],
        sentence: "Early experiences _____ our personality throughout life.",
        korean: "형성하다",
        etymology: "Old English 'scapan' (to create) = 만들다"
    },
    {
        word: "inflict",
        hints: ["cause", "administer", "exact"],
        sentence: "The storm will _____ severe damage on the coastal areas.",
        korean: "가하다",
        etymology: "Latin 'in-' (upon) + 'fligere' (to strike) = 때리다"
    },
    {
        word: "portion",
        hints: ["part", "segment", "fragment"],
        sentence: "Each student received a _____ of the assignment.",
        korean: "부분",
        etymology: "Latin 'portio' (share) = 몫"
    },
    {
        word: "coincidence",
        hints: ["chance happening"],
        sentence: "Meeting you here is quite a _____!",
        korean: "우연의 일치",
        etymology: "Latin 'co-' (together) + 'incidere' (to fall upon) = 함께 일어나다"
    },
    {
        word: "propel",
        hints: ["push", "force", "drive", "impel"],
        sentence: "The rocket engines _____ the spacecraft into orbit.",
        korean: "몰아대다",
        etymology: "Latin 'pro-' (forward) + 'pellere' (to drive) = 앞으로 밀다"
    },
    {
        word: "thoroughly",
        hints: ["completely", "entirely"],
        sentence: "The detective _____ investigated every clue.",
        korean: "철저히, 완전히",
        etymology: "Through + -ly = 완전히 통과하여"
    },
    {
        word: "contemplate",
        hints: ["consider", "ponder"],
        sentence: "She sat quietly to _____ her next move.",
        korean: "곰곰이 생각하다",
        etymology: "Latin 'con-' (with) + 'templum' (temple) = 신전에서 깊이 생각하다"
    },
    {
        word: "unethical",
        hints: ["improper", "immoral"],
        sentence: "The company's business practices were deemed _____.",
        korean: "비윤리적인",
        etymology: "Un- (not) + ethical = 윤리적이지 않은"
    },
    {
        word: "replicate",
        hints: ["reproduce", "copy", "duplicate"],
        sentence: "Scientists were unable to _____ the experimental results.",
        korean: "복제하다",
        etymology: "Latin 're-' (again) + 'plicare' (to fold) = 다시 접다, 복제하다"
    },
    {
        word: "hasty",
        hints: ["hurried", "rushed"],
        sentence: "Don't make a _____ decision without considering all options.",
        korean: "서두르는",
        etymology: "Old French 'haste' (speed) = 서두르는"
    },
    {
        word: "representative",
        hints: ["indicative", "typical", "exemplary"],
        sentence: "This sample is _____ of the entire population.",
        korean: "나타내는",
        etymology: "Latin 're-' (again) + 'praesent' (present) = 다시 나타내는"
    },
    {
        word: "range",
        hints: ["scope", "spectrum", "extent"],
        sentence: "The course covers a wide _____ of topics.",
        korean: "범위",
        etymology: "Old French 'rengier' (to put in a row) = 줄지어 놓다"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day6Vocabulary;
} else {
    window.day6Vocabulary = day6Vocabulary;
}