// Day 9 vocabulary data
const day9Vocabulary = [
    {
        word: "initiate",
        hints: ["start", "begin", "originate", "commence"],
        sentence: "The company will _____ a new training program next month.",
        korean: "시작하다",
        etymology: "Latin 'initiare' (begin) = 시작하다"
    },
    {
        word: "tremendous",
        hints: ["great", "large", "gigantic", "huge"],
        sentence: "The earthquake caused _____ damage to the city.",
        korean: "엄청난",
        etymology: "Latin 'tremendus' (fearful) = 두려워할 만한"
    },
    {
        word: "breakthrough",
        hints: ["advance", "progress"],
        sentence: "Scientists made a major _____ in cancer research.",
        korean: "큰 발전",
        etymology: "Break (깨다) + through (통과하다) = 돌파하다"
    },
    {
        word: "cope with",
        hints: ["deal with", "manage", "handle"],
        sentence: "She learned to _____ stress through meditation.",
        korean: "~을 다루다",
        etymology: "Middle Dutch 'copen' (buy, trade) = 거래하다, 대처하다"
    },
    {
        word: "inducement",
        hints: ["incentive", "incitement", "lure"],
        sentence: "The salary increase was an _____ to stay with the company.",
        korean: "유인",
        etymology: "Latin 'inducere' (lead in) = 이끌어들이다"
    },
    {
        word: "irreversible",
        hints: ["irreparable", "irrevocable", "irremediable"],
        sentence: "The environmental damage appears to be _____.",
        korean: "돌이킬 수 없는",
        etymology: "Ir- (not) + re- (back) + verse (turn) = 되돌릴 수 없는"
    },
    {
        word: "comprise",
        hints: ["include", "encompass", "consist of", "be made up of", "be composed of"],
        sentence: "The committee _____ representatives from five different departments.",
        korean: "포함하다, 구성하다",
        etymology: "Latin 'com-' (together) + 'prehendere' (grasp) = 함께 잡다"
    },
    {
        word: "culmination",
        hints: ["high point", "apex", "pinnacle"],
        sentence: "The concert was the _____ of months of preparation.",
        korean: "정점",
        etymology: "Latin 'culmen' (top, summit) = 꼭대기"
    },
    {
        word: "allegiance",
        hints: ["loyalty", "fidelity", "commitment", "dedication"],
        sentence: "Citizens pledge _____ to their country.",
        korean: "충성, 헌신",
        etymology: "Old French 'ligeance' (feudal obligation) = 봉건적 의무"
    },
    {
        word: "notable",
        hints: ["remarkable", "outstanding", "important"],
        sentence: "There was a _____ improvement in her performance.",
        korean: "주목할 만한",
        etymology: "Latin 'notabilis' (noteworthy) = 주목할 만한"
    },
    {
        word: "idiosyncrasy",
        hints: ["peculiarity", "eccentricity", "oddity"],
        sentence: "Everyone has their own _____ and quirks.",
        korean: "특이한점, 특징",
        etymology: "Greek 'idios' (own) + 'synkrasis' (mixture) = 개인만의 특성"
    },
    {
        word: "minute",
        hints: ["tiny", "very small", "diminutive"],
        sentence: "Even _____ details matter in this precision work.",
        korean: "아주 작은",
        etymology: "Latin 'minutus' (small) = 작게 만든"
    },
    {
        word: "markedly",
        hints: ["significantly", "noticeably", "considerably", "substantially"],
        sentence: "The patient's condition improved _____.",
        korean: "현저하게",
        etymology: "Mark (표시) + -edly = 표시될 정도로"
    },
    {
        word: "phenomenon",
        hints: ["occurrence", "incident"],
        sentence: "Global warming is a concerning environmental _____.",
        korean: "현상",
        etymology: "Greek 'phainomenon' (appearing) = 나타나는 것"
    },
    {
        word: "disseminate",
        hints: ["spread", "disperse", "distribute"],
        sentence: "Social media helps _____ information quickly.",
        korean: "퍼뜨리다",
        etymology: "Latin 'dis-' (apart) + 'seminare' (sow) = 씨를 뿌리다"
    },
    {
        word: "current",
        hints: ["present", "existing"],
        sentence: "What is your _____ address?",
        korean: "현재의",
        etymology: "Latin 'currere' (run) = 흐르는, 현재의"
    },
    {
        word: "detrimental",
        hints: ["harmful", "injurious", "damaging", "pernicious"],
        sentence: "Smoking is _____ to your health.",
        korean: "해로운",
        etymology: "Latin 'detrimentum' (damage) = 손상"
    },
    {
        word: "presume",
        hints: ["believe", "accept as true"],
        sentence: "I _____ you have finished your homework.",
        korean: "추정하다, ~라고 생각하다",
        etymology: "Latin 'prae-' (before) + 'sumere' (take) = 미리 받아들이다"
    },
    {
        word: "anarchy",
        hints: ["disorder", "chaos", "disorganization"],
        sentence: "The country fell into _____ after the government collapsed.",
        korean: "무질서, 혼란; 무정부 상태",
        etymology: "Greek 'an-' (without) + 'arkhos' (ruler) = 통치자가 없는"
    },
    {
        word: "snake",
        hints: ["wind", "meander", "curve", "twist"],
        sentence: "The river _____ through the valley.",
        korean: "구불구불 가다",
        etymology: "Old English 'snaca' = 뱀처럼 구불거리다"
    },
    {
        word: "sophisticated",
        hints: ["complex", "highly developed"],
        sentence: "The new software has a _____ user interface.",
        korean: "정교한",
        etymology: "Greek 'sophos' (wise) = 지혜로운, 세련된"
    },
    {
        word: "derive",
        hints: ["originate", "trace", "obtain", "gain"],
        sentence: "Many English words _____ from Latin.",
        korean: "유래하다, 얻다",
        etymology: "Latin 'de-' (from) + 'rivus' (stream) = 강에서 끌어오다"
    },
    {
        word: "sole",
        hints: ["only", "single", "solitary"],
        sentence: "She was the _____ survivor of the accident.",
        korean: "유일한",
        etymology: "Latin 'solus' (alone) = 홀로인"
    },
    {
        word: "embellish",
        hints: ["decorate", "make attractive", "adorn", "beautify", "ornament"],
        sentence: "She likes to _____ her stories with interesting details.",
        korean: "장식하다",
        etymology: "Old French 'embellir' (make beautiful) = 아름답게 하다"
    },
    {
        word: "antagonize",
        hints: ["anger", "aggravate", "counteract"],
        sentence: "His rude comments will _____ the other team members.",
        korean: "반감, 적대감을 일으키다; 반대로 작용, 대항하다",
        etymology: "Greek 'anti-' (against) + 'agonizesthai' (struggle) = 맞서 싸우다"
    },
    {
        word: "yearn",
        hints: ["long", "desire", "crave", "pine"],
        sentence: "She _____ for her homeland after years abroad.",
        korean: "갈망하다",
        etymology: "Old English 'giernan' (desire eagerly) = 간절히 원하다"
    },
    {
        word: "permit",
        hints: ["allow", "let", "approve"],
        sentence: "The rules do not _____ smoking in this area.",
        korean: "허락하다",
        etymology: "Latin 'per-' (through) + 'mittere' (send) = 통과시키다"
    },
    {
        word: "scarcity",
        hints: ["lack", "shortage", "insufficiency", "deficiency"],
        sentence: "The _____ of water is a major problem in desert regions.",
        korean: "부족",
        etymology: "Old French 'escarcete' (restriction) = 제한"
    },
    {
        word: "renounce",
        hints: ["give up", "relinquish", "reject"],
        sentence: "He decided to _____ his claim to the throne.",
        korean: "포기하다, 버리다; 거부하다",
        etymology: "Latin 're-' (back) + 'nuntiare' (announce) = 다시 선언하다"
    },
    {
        word: "keep in check",
        hints: ["limit", "control", "restrict", "restrain"],
        sentence: "The government needs to _____ inflation.",
        korean: "제어하다, 억제하다",
        etymology: "Keep (유지하다) + in check (억제상태로) = 억제하다"
    },
    {
        word: "subsistence",
        hints: ["survival", "existence", "living"],
        sentence: "Many families live at _____ level in developing countries.",
        korean: "생존",
        etymology: "Latin 'sub-' (under) + 'sistere' (stand) = 아래서 버티다"
    },
    {
        word: "annually",
        hints: ["each year", "yearly", "every year"],
        sentence: "The company reviews salaries _____.",
        korean: "매년",
        etymology: "Latin 'annus' (year) + -ally = 해마다"
    },
    {
        word: "emerge",
        hints: ["appear", "loom", "spring up", "come out", "develop"],
        sentence: "A new leader will _____ from this crisis.",
        korean: "나타나다",
        etymology: "Latin 'e-' (out) + 'mergere' (dip) = 물에서 나오다"
    },
    {
        word: "customary",
        hints: ["habitual", "traditional", "typical", "accustomed"],
        sentence: "It's _____ to shake hands when meeting someone.",
        korean: "습관적인",
        etymology: "Custom (관습) + -ary = 관습적인"
    },
    {
        word: "widely",
        hints: ["extensively", "broadly"],
        sentence: "The book is _____ read by students.",
        korean: "널리",
        etymology: "Wide (넓은) + -ly = 넓게"
    },
    {
        word: "assign",
        hints: ["specify", "designate", "appoint"],
        sentence: "The teacher will _____ homework for the weekend.",
        korean: "지정하다",
        etymology: "Latin 'ad-' (to) + 'signare' (mark) = 표시하여 주다"
    },
    {
        word: "equivocal",
        hints: ["ambiguous", "vague", "obscure", "uncertain"],
        sentence: "His _____ response left everyone confused.",
        korean: "모호한",
        etymology: "Latin 'aequus' (equal) + 'vocare' (call) = 두 가지로 부를 수 있는"
    },
    {
        word: "release",
        hints: ["free", "liberate", "loose", "emit", "give off", "discharge", "exude"],
        sentence: "The prisoner will be _____ next month.",
        korean: "석방하다, 방출하다",
        etymology: "Old French 'relaissier' (leave behind) = 놓아주다"
    },
    {
        word: "essentially",
        hints: ["basically", "fundamentally", "primarily"],
        sentence: "The two proposals are _____ the same.",
        korean: "본질적으로",
        etymology: "Essence (본질) + -ially = 본질적으로"
    },
    {
        word: "oversee",
        hints: ["supervise", "control", "superintend"],
        sentence: "The manager will _____ the entire project.",
        korean: "감독하다",
        etymology: "Over (위에서) + see (보다) = 위에서 감시하다"
    },
    {
        word: "rapidly",
        hints: ["quickly", "fast"],
        sentence: "Technology is advancing _____.",
        korean: "빨리",
        etymology: "Rapid (빠른) + -ly = 빠르게"
    },
    {
        word: "acknowledge",
        hints: ["recognize", "admit", "accept"],
        sentence: "The company must _____ its mistakes.",
        korean: "인정하다",
        etymology: "Ac- (to) + knowledge (알다) = 알고 있음을 인정하다"
    },
    {
        word: "rough",
        hints: ["uneven", "rugged", "bumpy", "coarse"],
        sentence: "The _____ road made driving difficult.",
        korean: "거친",
        etymology: "Old English 'ruh' (hairy, rough) = 거친"
    },
    {
        word: "preclude",
        hints: ["prevent", "stop", "hinder", "rule out", "exclude"],
        sentence: "Bad weather may _____ outdoor activities.",
        korean: "막다, 배제하다",
        etymology: "Latin 'prae-' (before) + 'claudere' (close) = 미리 막다"
    },
    {
        word: "portable",
        hints: ["able to be carried", "mobile", "movable"],
        sentence: "This _____ device is perfect for traveling.",
        korean: "휴대용의",
        etymology: "Latin 'portare' (carry) + -able = 운반할 수 있는"
    },
    {
        word: "presumable",
        hints: ["probable", "likely", "possible"],
        sentence: "It's _____ that he will arrive late.",
        korean: "그럴듯한",
        etymology: "Presume (추정하다) + -able = 추정할 만한"
    },
    {
        word: "calculatedly",
        hints: ["deliberately", "intentionally", "knowingly"],
        sentence: "She _____ ignored his phone calls.",
        korean: "계획적으로",
        etymology: "Calculate (계산하다) + -edly = 계산된 대로"
    },
    {
        word: "deviation",
        hints: ["departure", "divergence", "aberration"],
        sentence: "Any _____ from the plan must be approved.",
        korean: "일탈",
        etymology: "Latin 'de-' (away) + 'via' (road) = 길에서 벗어나다"
    },
    {
        word: "hairline",
        hints: ["slight", "thin"],
        sentence: "There's a _____ crack in the vase.",
        korean: "아주 가느다란",
        etymology: "Hair (머리카락) + line (선) = 머리카락처럼 가는 선"
    },
    {
        word: "formulate",
        hints: ["develop", "devise", "forge", "state", "specify", "express"],
        sentence: "Scientists need to _____ a new hypothesis.",
        korean: "만들어내다, 고안하다; 명확히 말하다, 설명하다",
        etymology: "Formula (공식) + -ate = 공식화하다"
    },
    {
        word: "astute",
        hints: ["insightful", "shrewd", "clever", "sharp"],
        sentence: "She made an _____ observation about the market trends.",
        korean: "통찰력 있는",
        etymology: "Latin 'astutus' (crafty) = 교활한, 영리한"
    },
    {
        word: "reliable",
        hints: ["dependable", "trustworthy", "credible"],
        sentence: "He's a _____ employee who never misses deadlines.",
        korean: "신뢰할 수 있는",
        etymology: "Rely (의존하다) + -able = 의존할 수 있는"
    },
    {
        word: "take precedence over",
        hints: ["be more important than", "come before"],
        sentence: "Safety should _____ profit in any business.",
        korean: "~보다 우선하다",
        etymology: "Precedence (우선권) = 앞서는 것"
    },
    {
        word: "allusion",
        hints: ["reference", "mention", "implication", "suggestion"],
        sentence: "The poem contains an _____ to Shakespeare.",
        korean: "(간접적인) 언급, 암시",
        etymology: "Latin 'ad-' (to) + 'ludere' (play) = 놀리듯 언급하다"
    },
    {
        word: "locomotion",
        hints: ["movement", "motion"],
        sentence: "Fish have adapted various forms of _____ for swimming.",
        korean: "이동 능력",
        etymology: "Latin 'locus' (place) + 'motio' (movement) = 장소 이동"
    },
    {
        word: "principally",
        hints: ["mainly"],
        sentence: "The damage was _____ caused by the storm.",
        korean: "주로",
        etymology: "Principal (주요한) + -ly = 주로"
    },
    {
        word: "rebellion",
        hints: ["uprising", "revolt"],
        sentence: "The _____ was quickly suppressed by government forces.",
        korean: "반란",
        etymology: "Latin 're-' (against) + 'bellum' (war) = 맞서 싸우다"
    },
    {
        word: "revive",
        hints: ["recover"],
        sentence: "The economy began to _____ after the recession.",
        korean: "회복하다",
        etymology: "Latin 're-' (again) + 'vivere' (live) = 다시 살아나다"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day9Vocabulary;
} else {
    window.day9Vocabulary = day9Vocabulary;
}