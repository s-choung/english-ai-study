// Day 7 vocabulary data
const day7Vocabulary = [
    {
        word: "dominate",
        hints: ["control", "govern", "rule", "be widespread in"],
        sentence: "The tech company continues to _____ the smartphone market.",
        korean: "지배하다, 압도적으로 우세하다",
        etymology: "Latin 'dominus' (lord, master) = 주인처럼 지배하다"
    },
    {
        word: "ratio",
        hints: ["proportion", "rate", "percentage"],
        sentence: "The _____ of students to teachers in this school is 15:1.",
        korean: "비율",
        etymology: "Latin 'ratio' (reckoning, calculation) = 계산된 비율"
    },
    {
        word: "duplicate",
        hints: ["copy", "reproduce", "imitate", "repeat"],
        sentence: "Please _____ this document for the meeting.",
        korean: "복제하다, 되풀이하다",
        etymology: "Latin 'duplicare' (double) = 두 배로 만들다"
    },
    {
        word: "barely",
        hints: ["hardly", "scarcely", "almost not", "just", "only just"],
        sentence: "She could _____ contain her excitement about the promotion.",
        korean: "거의 ~않게, 간신히",
        etymology: "Bare (naked, minimal) + -ly = 최소한으로"
    },
    {
        word: "strew",
        hints: ["scatter", "sprinkle", "disperse"],
        sentence: "The wind will _____ the autumn leaves across the yard.",
        korean: "흩뿌리다",
        etymology: "Old English 'streowian' (to scatter) = 뿌리다"
    },
    {
        word: "legitimately",
        hints: ["properly", "lawfully", "legally"],
        sentence: "The company acquired the land _____ through proper channels.",
        korean: "정당하게",
        etymology: "Latin 'legitimus' (lawful) + -ly = 법적으로"
    },
    {
        word: "encapsulate",
        hints: ["summarize", "sum up", "condense"],
        sentence: "This quote perfectly _____ the author's main argument.",
        korean: "요약하다",
        etymology: "Latin 'capsula' (small box) = 작은 상자에 담다"
    },
    {
        word: "relatively",
        hints: ["comparatively", "by comparison"],
        sentence: "The exam was _____ easy compared to last year's.",
        korean: "비교적으로",
        etymology: "Latin 'relativus' (having reference) + -ly = 비교하여"
    },
    {
        word: "hazard",
        hints: ["risk", "danger", "peril", "jeopardy"],
        sentence: "Smoking poses a serious health _____ to everyone.",
        korean: "위험",
        etymology: "Arabic 'az-zahr' (dice) = 주사위처럼 불확실한 위험"
    },
    {
        word: "paramount",
        hints: ["supreme", "prime", "chief"],
        sentence: "Safety is of _____ importance in this laboratory.",
        korean: "최고의",
        etymology: "Old French 'par' (by) + 'amont' (above) = 위에 있는"
    },
    {
        word: "unwieldy",
        hints: ["difficult to manage", "awkward"],
        sentence: "The large package was _____ and hard to carry.",
        korean: "다루기 힘든",
        etymology: "Un- (not) + wield (handle) + -y = 다루기 어려운"
    },
    {
        word: "subsequent",
        hints: ["succeeding", "following", "later", "following in time"],
        sentence: "The first meeting went well, and _____ discussions were productive.",
        korean: "그 다음의",
        etymology: "Latin 'sub-' (under) + 'sequi' (follow) = 뒤따라오는"
    },
    {
        word: "striking",
        hints: ["noticeable", "remarkable", "attention getting"],
        sentence: "There was a _____ resemblance between the two sisters.",
        korean: "현저한",
        etymology: "Strike (hit, impress) + -ing = 인상을 주는"
    },
    {
        word: "extended",
        hints: ["long lasting", "prolonged"],
        sentence: "The patient required an _____ period of recovery.",
        korean: "장기간에 걸친",
        etymology: "Latin 'ex-' (out) + 'tendere' (stretch) = 늘어뜨린"
    },
    {
        word: "ephemeral",
        hints: ["short lived", "living for a short time", "temporary"],
        sentence: "The beauty of cherry blossoms is _____ but unforgettable.",
        korean: "단명하는",
        etymology: "Greek 'ephemeros' (lasting a day) = 하루만 지속되는"
    },
    {
        word: "rigid",
        hints: ["strict", "exact", "severe", "rigorous", "stiff", "hard", "firm"],
        sentence: "The school has _____ rules about student behavior.",
        korean: "엄격한, 굳은",
        etymology: "Latin 'rigidus' (stiff, hard) = 굳어진"
    },
    {
        word: "chief",
        hints: ["major", "main", "primary", "principal"],
        sentence: "The _____ reason for the delay was bad weather.",
        korean: "주요한",
        etymology: "Old French 'chief' (head) = 머리, 주요한"
    },
    {
        word: "severity",
        hints: ["seriousness"],
        sentence: "The _____ of the storm surprised everyone.",
        korean: "심함",
        etymology: "Latin 'severus' (stern, serious) = 엄한 정도"
    },
    {
        word: "typical of",
        hints: ["characteristic of", "representative of"],
        sentence: "This behavior is _____ teenagers going through adolescence.",
        korean: "~을 대표하는",
        etymology: "Greek 'typos' (type) + -ical = 유형을 나타내는"
    },
    {
        word: "enable",
        hints: ["allow", "permit", "facilitate"],
        sentence: "This software will _____ you to edit videos easily.",
        korean: "가능하게 하다",
        etymology: "En- (make) + able = 할 수 있게 만들다"
    },
    {
        word: "empirical",
        hints: ["based on observation", "experimental"],
        sentence: "The theory needs _____ evidence to be accepted.",
        korean: "실험상의",
        etymology: "Greek 'empeiria' (experience) = 경험에 기반한"
    },
    {
        word: "controversy",
        hints: ["dispute", "debate", "disagreement", "contention"],
        sentence: "The new policy sparked considerable _____.",
        korean: "논쟁",
        etymology: "Latin 'contra-' (against) + 'vertere' (turn) = 반대로 돌다"
    },
    {
        word: "accomplish",
        hints: ["achieve", "execute", "work out", "put through"],
        sentence: "She managed to _____ all her goals this year.",
        korean: "성취하다",
        etymology: "Latin 'ad-' (to) + 'complere' (fill up) = 완성하다"
    },
    {
        word: "set",
        hints: ["fixed", "settled", "situate", "place", "put"],
        sentence: "The meeting time is _____ for 3 PM tomorrow.",
        korean: "고정된, 놓다",
        etymology: "Old English 'settan' (cause to sit) = 놓다, 정하다"
    },
    {
        word: "lag",
        hints: ["delay"],
        sentence: "There's always a slight _____ when streaming videos online.",
        korean: "지연",
        etymology: "Scandinavian origin, meaning 'go slowly' = 늦어지다"
    },
    {
        word: "exude",
        hints: ["give off", "release", "emit"],
        sentence: "The flowers _____ a sweet fragrance in the evening.",
        korean: "발산하다",
        etymology: "Latin 'ex-' (out) + 'sudare' (sweat) = 밖으로 내보내다"
    },
    {
        word: "interplay",
        hints: ["interaction", "reciprocity"],
        sentence: "The _____ between music and emotion is fascinating.",
        korean: "상호 작용",
        etymology: "Inter- (between) + play = 서로 간의 작용"
    },
    {
        word: "precede",
        hints: ["come before", "antecede", "forerun"],
        sentence: "A brief introduction will _____ the main presentation.",
        korean: "~에 앞서다",
        etymology: "Latin 'prae-' (before) + 'cedere' (go) = 앞서 가다"
    },
    {
        word: "manipulation",
        hints: ["deliberate alteration"],
        sentence: "The photo showed signs of digital _____.",
        korean: "조작",
        etymology: "Latin 'manus' (hand) + 'pleo' (fill) = 손으로 조작하다"
    },
    {
        word: "dry",
        hints: ["arid", "rainless", "parched"],
        sentence: "The desert climate is extremely _____ year-round.",
        korean: "건조한",
        etymology: "Old English 'dryge' (without moisture) = 물기 없는"
    },
    {
        word: "assist with",
        hints: ["help with", "aid", "support"],
        sentence: "The nurse will _____ the surgery preparation.",
        korean: "~을 돕다",
        etymology: "Latin 'ad-' (to) + 'sistere' (stand) = 곁에 서서 돕다"
    },
    {
        word: "acute",
        hints: ["severe", "intense", "extreme"],
        sentence: "The patient experienced _____ pain in her abdomen.",
        korean: "극심한",
        etymology: "Latin 'acutus' (sharp, pointed) = 날카로운"
    },
    {
        word: "scrutiny",
        hints: ["close observation", "examination", "inspection"],
        sentence: "The financial records came under intense _____.",
        korean: "정밀 검사",
        etymology: "Latin 'scrutari' (search, examine) = 자세히 살피다"
    },
    {
        word: "article",
        hints: ["object", "item", "thing"],
        sentence: "Each _____ of clothing must be properly labeled.",
        korean: "물품",
        etymology: "Latin 'articulus' (small joint) = 작은 부분"
    },
    {
        word: "recompense",
        hints: ["repayment", "compensation"],
        sentence: "The company offered financial _____ for the damages.",
        korean: "보상",
        etymology: "Latin 're-' (back) + 'compensare' (balance) = 균형을 맞춰주다"
    },
    {
        word: "reflect",
        hints: ["show", "indicate", "display", "demonstrate", "meditate", "think", "consider", "ponder"],
        sentence: "The test scores _____ the students' hard work.",
        korean: "나타내다, 숙고하다",
        etymology: "Latin 're-' (back) + 'flectere' (bend) = 뒤로 굽히다"
    },
    {
        word: "immeasurably",
        hints: ["greatly", "extremely"],
        sentence: "The new treatment improved her quality of life _____.",
        korean: "대단히",
        etymology: "Im- (not) + measure + -ably = 측정할 수 없을 정도로"
    },
    {
        word: "rudiments",
        hints: ["basics", "elements", "fundamentals"],
        sentence: "Students must master the _____ before advancing.",
        korean: "기초",
        etymology: "Latin 'rudimentum' (first attempt) = 최초의 시도"
    },
    {
        word: "mortality",
        hints: ["death"],
        sentence: "The _____ rate from this disease has decreased significantly.",
        korean: "사망",
        etymology: "Latin 'mortalis' (subject to death) = 죽을 수밖에 없는"
    },
    {
        word: "awkward",
        hints: ["clumsy", "unskillful"],
        sentence: "He felt _____ at the formal dinner party.",
        korean: "서투른",
        etymology: "Middle English 'awke' (turned wrong way) = 잘못 돌린"
    },
    {
        word: "constrain",
        hints: ["oblige", "bind", "force", "pressure", "inhibit", "restrain", "restrict"],
        sentence: "Budget limitations _____ our expansion plans.",
        korean: "강요하다, 억제하다",
        etymology: "Latin 'con-' (together) + 'stringere' (bind tight) = 단단히 묶다"
    },
    {
        word: "turmoil",
        hints: ["unrest", "agitation", "stir"],
        sentence: "The country was in political _____ for months.",
        korean: "소란",
        etymology: "Origin uncertain, possibly from 'turn' + 'moil' (toil) = 뒤섞인 혼란"
    },
    {
        word: "property",
        hints: ["characteristic", "character", "quality", "estate", "possession", "havings"],
        sentence: "This material has the _____ of being waterproof.",
        korean: "특성, 재산",
        etymology: "Latin 'proprius' (one's own) = 자신의 것"
    },
    {
        word: "fuel",
        hints: ["give energy to", "encourage"],
        sentence: "Success stories _____ her determination to continue.",
        korean: "연료를 공급하다",
        etymology: "Old French 'feuaille' (firewood) = 불을 지피는 것"
    },
    {
        word: "majestic",
        hints: ["magnificent", "grand", "august"],
        sentence: "The _____ mountain range took our breath away.",
        korean: "위엄 있는",
        etymology: "Latin 'majestas' (greatness, dignity) = 위대함"
    },
    {
        word: "preeminent",
        hints: ["outstanding", "distinguished", "foremost"],
        sentence: "She is considered the _____ expert in her field.",
        korean: "뛰어난",
        etymology: "Latin 'prae-' (before) + 'eminere' (stand out) = 앞서 두드러지는"
    },
    {
        word: "crude",
        hints: ["rough", "primitive", "raw", "unrefined"],
        sentence: "The _____ oil needs to be processed before use.",
        korean: "가공하지 않은",
        etymology: "Latin 'crudus' (raw, rough) = 익지 않은"
    },
    {
        word: "variety",
        hints: ["diversity", "multiplicity", "type", "species", "sort", "kind"],
        sentence: "The garden has a wide _____ of colorful flowers.",
        korean: "다양성, 종류",
        etymology: "Latin 'varietas' (difference, diversity) = 다양함"
    },
    {
        word: "typically",
        hints: ["usually", "normally", "ordinarily"],
        sentence: "Students _____ spend 2-3 hours on homework daily.",
        korean: "보통",
        etymology: "Greek 'typos' (type) + -ically = 유형적으로"
    },
    {
        word: "supplementary",
        hints: ["additional", "extra"],
        sentence: "The textbook includes _____ materials for advanced students.",
        korean: "추가의",
        etymology: "Latin 'supplementum' (something added) = 보충하는 것"
    },
    {
        word: "reduce",
        hints: ["decrease", "diminish", "cut"],
        sentence: "We need to _____ our carbon footprint.",
        korean: "감소시키다",
        etymology: "Latin 're-' (back) + 'ducere' (lead) = 뒤로 이끌다"
    },
    {
        word: "subject",
        hints: ["participant", "expose"],
        sentence: "The research _____ completed all the required tests.",
        korean: "피실험자, 겪게 하다",
        etymology: "Latin 'sub-' (under) + 'jacere' (throw) = 아래 놓인"
    },
    {
        word: "flee",
        hints: ["run away from", "escape", "abscond"],
        sentence: "Many people had to _____ their homes during the flood.",
        korean: "도망치다",
        etymology: "Old English 'fleon' (run away) = 달아나다"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day7Vocabulary;
} else {
    window.day7Vocabulary = day7Vocabulary;
}