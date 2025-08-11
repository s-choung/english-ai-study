// Day 10 vocabulary data
const day10Vocabulary = [
    {
        word: "modify",
        hints: ["change", "alter", "adjust", "adapt"],
        sentence: "We need to _____ the design to meet the client's requirements.",
        korean: "바꾸다, 조정하다",
        etymology: "Latin 'modus' (measure) + 'facere' (make) = 규격에 맞게 만들다"
    },
    {
        word: "initially",
        hints: ["at first", "originally", "primarily"],
        sentence: "_____, the project seemed impossible to complete.",
        korean: "처음에",
        etymology: "Initial (최초의) + -ly = 최초에"
    },
    {
        word: "critical",
        hints: ["most important", "crucial", "essential", "dangerous", "risky"],
        sentence: "This is a _____ moment in the company's history.",
        korean: "중요한, 위독한, 위험한",
        etymology: "Greek 'kritikos' (able to judge) = 판단할 수 있는"
    },
    {
        word: "luminous",
        hints: ["brilliant", "bright", "shining", "glowing"],
        sentence: "The _____ display could be seen from miles away.",
        korean: "빛나는",
        etymology: "Latin 'lumen' (light) = 빛을 내는"
    },
    {
        word: "facilitate",
        hints: ["ease", "make easy", "help", "assist", "aid"],
        sentence: "Technology can _____ communication between team members.",
        korean: "용이하게 하다 (쉽게하다)",
        etymology: "Latin 'facilis' (easy) = 쉽게 만들다"
    },
    {
        word: "refinement",
        hints: ["small improvement", "advancement", "enhancement"],
        sentence: "The latest software version includes several _____.",
        korean: "개선",
        etymology: "Re- (again) + fine (정교한) = 다시 정교하게 하다"
    },
    {
        word: "attribute",
        hints: ["characteristic", "trait", "quality", "property", "ascribe", "credit", "impute"],
        sentence: "Patience is an important _____ for a teacher.",
        korean: "특성, ~의 탓(덕) 으로 돌리다",
        etymology: "Latin 'ad-' (to) + 'tribuere' (assign) = 할당하다"
    },
    {
        word: "belch",
        hints: ["suddenly emit", "discharge", "erupt", "vent"],
        sentence: "The volcano began to _____ smoke and ash.",
        korean: "분출하다",
        etymology: "Old English 'bealcan' (eruct) = 트림하다, 분출하다"
    },
    {
        word: "underrate",
        hints: ["undervalue", "underestimate", "belittle"],
        sentence: "Don't _____ the importance of regular exercise.",
        korean: "과소평가하다",
        etymology: "Under- (아래) + rate (평가하다) = 낮게 평가하다"
    },
    {
        word: "immense",
        hints: ["large", "enormous", "huge", "tremendous"],
        sentence: "The project requires an _____ amount of resources.",
        korean: "거대한",
        etymology: "Latin 'immensus' (unmeasured) = 측정할 수 없을 만큼 큰"
    },
    {
        word: "virtue",
        hints: ["goodness", "merit", "desirable quality", "strength"],
        sentence: "Honesty is considered a great _____ in all cultures.",
        korean: "미덕, 장점",
        etymology: "Latin 'virtus' (manliness, excellence) = 남성다움, 우수함"
    },
    {
        word: "bustling",
        hints: ["busy", "lively"],
        sentence: "The _____ marketplace was full of vendors and customers.",
        korean: "붐비는, 떠들썩한",
        etymology: "Bustle (바쁘게 움직이다) + -ing = 바쁘게 움직이는"
    },
    {
        word: "distinct",
        hints: ["different", "separate", "discrete", "definite", "clear and recognizable"],
        sentence: "Each species has _____ characteristics.",
        korean: "다른, 별개의, 뚜렷한",
        etymology: "Latin 'dis-' (apart) + 'stinguere' (mark) = 구별하여 표시하다"
    },
    {
        word: "thriving",
        hints: ["prosperous", "successful", "flourishing"],
        sentence: "The _____ business expanded to three new locations.",
        korean: "번영하는",
        etymology: "Old Norse 'thrifask' (grasp for oneself) = 스스로 잡다"
    },
    {
        word: "obvious",
        hints: ["evident", "clear", "apparent", "conspicuous"],
        sentence: "It's _____ that she has been practicing piano regularly.",
        korean: "분명한",
        etymology: "Latin 'obvius' (in the way) = 길에 있는, 명백한"
    },
    {
        word: "exceptional",
        hints: ["extraordinary", "abnormal", "unusual"],
        sentence: "She showed _____ talent in mathematics from an early age.",
        korean: "이례적인",
        etymology: "Exception (예외) + -al = 예외적인"
    },
    {
        word: "cumbersome",
        hints: ["difficult to handle", "burdensome", "awkward"],
        sentence: "The old filing system was _____ and inefficient.",
        korean: "다루기 힘든",
        etymology: "Cumber (방해하다) + -some = 방해가 되는"
    },
    {
        word: "boon",
        hints: ["great benefit", "advantage"],
        sentence: "The new highway is a _____ for local businesses.",
        korean: "큰 이익, 혜택",
        etymology: "Old Norse 'bon' (prayer) = 기도, 축복"
    },
    {
        word: "optimum",
        hints: ["best", "most favorable", "supreme"],
        sentence: "Plants grow best under _____ conditions.",
        korean: "최고의",
        etymology: "Latin 'optimus' (best) = 가장 좋은"
    },
    {
        word: "uniformly",
        hints: ["evenly", "regularly", "consistently"],
        sentence: "The paint should be applied _____ across the surface.",
        korean: "균일하게, 한결같이",
        etymology: "Uniform (균일한) + -ly = 균일하게"
    },
    {
        word: "unleash",
        hints: ["release", "unloose"],
        sentence: "The storm will _____ powerful winds and heavy rain.",
        korean: "(속박을) 풀다",
        etymology: "Un- (반대) + leash (끈) = 끈을 풀다"
    },
    {
        word: "acquire",
        hints: ["obtain", "gain", "procure", "earn"],
        sentence: "Students _____ knowledge through study and practice.",
        korean: "얻다",
        etymology: "Latin 'ad-' (to) + 'quaerere' (seek) = 찾아서 얻다"
    },
    {
        word: "enigma",
        hints: ["mystery", "puzzle", "riddle"],
        sentence: "The ancient manuscript remains an _____ to scholars.",
        korean: "수수께끼",
        etymology: "Greek 'ainigma' (riddle) = 수수께끼"
    },
    {
        word: "steadfast",
        hints: ["unwavering", "firm", "enduring", "resolute"],
        sentence: "She remained _____ in her commitment to the cause.",
        korean: "변함없는, 단호한",
        etymology: "Stead (장소) + fast (고정된) = 한 자리에 고정된"
    },
    {
        word: "dainty",
        hints: ["delicate", "exquisite", "refined"],
        sentence: "The _____ teacup was decorated with tiny flowers.",
        korean: "우아한, 섬세한",
        etymology: "Old French 'deintie' (worthy) = 가치 있는"
    },
    {
        word: "anomaly",
        hints: ["irregularity", "abnormality", "exception"],
        sentence: "The warm weather in winter was a strange _____.",
        korean: "이례적인 것, 예외",
        etymology: "Greek 'an-' (not) + 'homalos' (even) = 고르지 않은"
    },
    {
        word: "splendid",
        hints: ["marvelous", "magnificent"],
        sentence: "The _____ sunset painted the sky in brilliant colors.",
        korean: "멋진",
        etymology: "Latin 'splendere' (shine) = 빛나다"
    },
    {
        word: "rapport",
        hints: ["bond", "relationship", "link", "tie"],
        sentence: "The teacher established good _____ with her students.",
        korean: "(친밀한) 관계",
        etymology: "French 'rapporter' (bring back) = 다시 가져오다"
    },
    {
        word: "question",
        hints: ["take a critical look at", "dispute"],
        sentence: "Some experts _____ the validity of the research findings.",
        korean: "~에 대해 이의를 제기하다",
        etymology: "Latin 'quaestio' (inquiry) = 질문, 의문을 제기하다"
    },
    {
        word: "scatter",
        hints: ["disperse", "dissipate", "distribute", "spread out", "widely spread"],
        sentence: "The wind will _____ the seeds across the field.",
        korean: "흩뿌리다",
        etymology: "Middle English 'scateren' (disperse) = 흩뜨리다"
    },
    {
        word: "escalate",
        hints: ["intensify", "increase", "mount", "rise"],
        sentence: "The conflict began to _____ when negotiations failed.",
        korean: "확대되다, 증가하다",
        etymology: "Spanish 'escala' (ladder) = 사다리처럼 올라가다"
    },
    {
        word: "temporary",
        hints: ["short-lived", "makeshift", "for a limited time", "transitory"],
        sentence: "This is just a _____ solution until we find something better.",
        korean: "일시적인",
        etymology: "Latin 'tempus' (time) = 시간에 제한된"
    },
    {
        word: "attest",
        hints: ["confirm", "support", "prove"],
        sentence: "The documents _____ to his qualifications.",
        korean: "증명하다, 입증하다",
        etymology: "Latin 'ad-' (to) + 'testari' (witness) = 증언하다"
    },
    {
        word: "fortify",
        hints: ["strengthen", "reinforce"],
        sentence: "The city walls were built to _____ the defenses.",
        korean: "강화하다",
        etymology: "Latin 'fortis' (strong) = 강하게 하다"
    },
    {
        word: "remove",
        hints: ["eliminate", "extract", "withdraw"],
        sentence: "Please _____ your shoes before entering the house.",
        korean: "제거하다",
        etymology: "Latin 're-' (back) + 'movere' (move) = 뒤로 옮기다"
    },
    {
        word: "end",
        hints: ["purpose", "goal", "aim"],
        sentence: "The _____ justifies the means in this situation.",
        korean: "목적, 목표",
        etymology: "Old English 'ende' (boundary, conclusion) = 경계, 목적"
    },
    {
        word: "plentiful",
        hints: ["abundant", "bountiful", "rich"],
        sentence: "Fresh water is _____ in this region.",
        korean: "풍부한",
        etymology: "Plenty (풍부함) + -ful = 풍부한"
    },
    {
        word: "make it",
        hints: ["arrive"],
        sentence: "I hope we can _____ to the meeting on time.",
        korean: "(제시간에) 도착하다",
        etymology: "Make (만들다) + it (그것) = 해내다, 도착하다"
    },
    {
        word: "devastate",
        hints: ["destroy", "demolish", "ravage", "ruin"],
        sentence: "The earthquake will _____ the entire coastal area.",
        korean: "완전히 파괴하다",
        etymology: "Latin 'de-' (completely) + 'vastare' (lay waste) = 완전히 황폐화하다"
    },
    {
        word: "eminently",
        hints: ["exceptionally", "highly", "extremely"],
        sentence: "She is _____ qualified for the position.",
        korean: "대단히, 현저히",
        etymology: "Latin 'eminere' (stand out) + -ly = 두드러지게"
    },
    {
        word: "subtraction",
        hints: ["decrease", "deduction", "reduction"],
        sentence: "The _____ of unnecessary expenses improved profits.",
        korean: "삭감, 공제",
        etymology: "Latin 'sub-' (under) + 'trahere' (draw) = 아래로 끌어내다"
    },
    {
        word: "as a rule of thumb",
        hints: ["in general"],
        sentence: "_____, it takes about an hour to complete this task.",
        korean: "경험적으로 보아 대게",
        etymology: "Rule of thumb (경험 법칙) = 실용적인 지침"
    },
    {
        word: "blur",
        hints: ["make less distinct", "obscure", "cloud"],
        sentence: "Tears began to _____ her vision.",
        korean: "흐리게 하다",
        etymology: "Origin uncertain, possibly imitative = 흐릿하게 하다"
    },
    {
        word: "relay",
        hints: ["transfer", "communicate", "transmit", "impart"],
        sentence: "Please _____ this message to the other team members.",
        korean: "전달하다",
        etymology: "Old French 'relai' (reserve pack of hounds) = 교대로 전달하다"
    },
    {
        word: "expandable",
        hints: ["able to be enlarged", "extendable"],
        sentence: "The _____ storage system can grow with your needs.",
        korean: "펼칠 수 잇는, 확장할 수 있는",
        etymology: "Expand (확장하다) + -able = 확장할 수 있는"
    },
    {
        word: "scrupulous",
        hints: ["careful", "fastidious", "meticulous", "honest", "moral"],
        sentence: "The accountant was _____ in checking every detail.",
        korean: "세심한, 꼼꼼한, 양심적인",
        etymology: "Latin 'scrupulus' (small sharp stone) = 작은 날카로운 돌"
    },
    {
        word: "approximately",
        hints: ["about", "roughly", "nearly"],
        sentence: "The project will take _____ six months to complete.",
        korean: "대략",
        etymology: "Latin 'ad-' (to) + 'proximus' (nearest) = 가장 가까운"
    },
    {
        word: "paradoxical",
        hints: ["seemingly contradictory", "ironic"],
        sentence: "It's _____ that the busiest people often have the most time.",
        korean: "역설적인",
        etymology: "Greek 'para-' (against) + 'doxa' (opinion) = 의견에 반하는"
    },
    {
        word: "source",
        hints: ["origin", "beginning", "derivation"],
        sentence: "We need to find the _____ of the problem.",
        korean: "근원, 기원",
        etymology: "Old French 'sorse' (spring of water) = 샘물"
    },
    {
        word: "adhere",
        hints: ["stick", "cleave", "cling"],
        sentence: "All employees must _____ to the company's safety policies.",
        korean: "부착되다, 달라붙다",
        etymology: "Latin 'ad-' (to) + 'haerere' (stick) = 달라붙다"
    },
    {
        word: "available",
        hints: ["accessible", "obtainable"],
        sentence: "The information is _____ on the company website.",
        korean: "구할 수 있는",
        etymology: "Avail (이용하다) + -able = 이용할 수 있는"
    },
    {
        word: "get rid of",
        hints: ["eliminate", "remove", "dispose of"],
        sentence: "We need to _____ these old computers.",
        korean: "~을 없애다",
        etymology: "Get (얻다) + rid (제거하다) + of = 제거하다"
    },
    {
        word: "repel",
        hints: ["drive away", "beat off"],
        sentence: "The fortress was able to _____ the enemy attack.",
        korean: "물리치다",
        etymology: "Latin 're-' (back) + 'pellere' (drive) = 뒤로 몰아내다"
    },
    {
        word: "maximize",
        hints: ["increase to the greatest possible degree"],
        sentence: "The company aims to _____ profits while minimizing costs.",
        korean: "극대화하다",
        etymology: "Maximum (최대) + -ize = 최대로 만들다"
    },
    {
        word: "outermost",
        hints: ["farthest away", "farthest", "most remote"],
        sentence: "The _____ planet in our solar system is Neptune.",
        korean: "가장 바깥의",
        etymology: "Outer (바깥의) + most (가장) = 가장 바깥의"
    },
    {
        word: "bind",
        hints: ["tie", "fasten"],
        sentence: "Please _____ the documents together with this clip.",
        korean: "묶다",
        etymology: "Old English 'bindan' (tie up) = 묶다"
    },
    {
        word: "visible",
        hints: ["perceptible"],
        sentence: "The mountain peak is _____ from our hotel room.",
        korean: "눈에 띄는, 명백한",
        etymology: "Latin 'visibilis' (able to be seen) = 볼 수 있는"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day10Vocabulary;
} else {
    window.day10Vocabulary = day10Vocabulary;
}