// Day 8 vocabulary data
const day8Vocabulary = [
    {
        word: "furthermore",
        hints: ["in addition", "moreover"],
        sentence: "The project was completed on time; _____, it was under budget.",
        korean: "게다가",
        etymology: "Further (more distant) + more = 더 나아가"
    },
    {
        word: "proliferate",
        hints: ["multiply", "become numerous", "increase in number"],
        sentence: "Social media platforms continue to _____ rapidly.",
        korean: "증식하다",
        etymology: "Latin 'proles' (offspring) + 'ferre' (bear) = 자손을 낳다"
    },
    {
        word: "assess",
        hints: ["evaluate", "estimate", "judge", "appraise"],
        sentence: "Teachers need to _____ student progress regularly.",
        korean: "평가하다",
        etymology: "Latin 'ad-' (to) + 'sedere' (sit) = 곁에 앉아 판단하다"
    },
    {
        word: "spur",
        hints: ["stimulus", "incitement", "incentive", "stimulate", "prompt"],
        sentence: "The bonus system will _____ employees to work harder.",
        korean: "자극, 자극하다",
        etymology: "Old English 'spura' (pointed device) = 박차를 가하다"
    },
    {
        word: "eclectic",
        hints: ["diverse", "various", "manifold"],
        sentence: "The museum has an _____ collection of art from different periods.",
        korean: "다방면의",
        etymology: "Greek 'eklektikos' (selective) = 선택적인"
    },
    {
        word: "crucial",
        hints: ["decisive", "important", "essential", "vital", "acute"],
        sentence: "Timing is _____ for the success of this operation.",
        korean: "결정적인",
        etymology: "Latin 'crux' (cross) = 십자가처럼 중요한 지점"
    },
    {
        word: "intricate",
        hints: ["complex", "complicated", "elaborate", "tangled"],
        sentence: "The watch mechanism is extremely _____.",
        korean: "복잡한",
        etymology: "Latin 'intricare' (entangle) = 얽히게 하다"
    },
    {
        word: "palatial",
        hints: ["magnificent", "grand", "majestic", "splendid"],
        sentence: "They live in a _____ mansion overlooking the ocean.",
        korean: "웅장한",
        etymology: "Latin 'palatium' (palace) = 궁전 같은"
    },
    {
        word: "potent",
        hints: ["powerful", "strong", "influential"],
        sentence: "The medicine has a _____ effect on reducing pain.",
        korean: "강력한",
        etymology: "Latin 'potens' (powerful) = 힘이 있는"
    },
    {
        word: "extract",
        hints: ["draw", "derive", "remove"],
        sentence: "Scientists can _____ DNA from ancient fossils.",
        korean: "뽑아내다",
        etymology: "Latin 'ex-' (out) + 'trahere' (draw) = 끌어내다"
    },
    {
        word: "course through",
        hints: ["run through"],
        sentence: "Blood _____ our veins continuously.",
        korean: "~속을 흐르다",
        etymology: "Course (path) + through = 경로를 통해 흐르다"
    },
    {
        word: "criterion",
        hints: ["standard", "measure", "norm"],
        sentence: "Academic performance is the main _____ for admission.",
        korean: "기준",
        etymology: "Greek 'kriterion' (means of judging) = 판단의 기준"
    },
    {
        word: "enjoy",
        hints: ["experience"],
        sentence: "The company _____ great success in the international market.",
        korean: "재미를 보다",
        etymology: "Old French 'enjoir' (give joy to) = 기쁨을 주다"
    },
    {
        word: "inadvertently",
        hints: ["unintentionally", "accidentally", "unwittingly"],
        sentence: "She _____ deleted the important file.",
        korean: "무심코",
        etymology: "In- (not) + ad- (to) + vertere (turn) = 주의를 돌리지 않고"
    },
    {
        word: "peril",
        hints: ["danger", "jeopardy", "hazard"],
        sentence: "The mountain climbers faced great _____ during the storm.",
        korean: "위험",
        etymology: "Latin 'periculum' (trial, danger) = 시험, 위험"
    },
    {
        word: "arduous",
        hints: ["difficult", "strenuous", "laborious"],
        sentence: "Climbing Mount Everest is an _____ task.",
        korean: "힘든",
        etymology: "Latin 'arduus' (steep, difficult) = 가파른"
    },
    {
        word: "feat",
        hints: ["achievement", "accomplishment", "exploit"],
        sentence: "Landing on the moon was an incredible human _____.",
        korean: "위업",
        etymology: "Latin 'factum' (deed, act) = 행위"
    },
    {
        word: "friction",
        hints: ["conflict", "clash", "discord", "strife"],
        sentence: "There's been ongoing _____ between the two departments.",
        korean: "마찰",
        etymology: "Latin 'fricare' (rub) = 문지르다"
    },
    {
        word: "materialize",
        hints: ["appear", "emerge", "loom"],
        sentence: "The promised funding failed to _____.",
        korean: "나타나다",
        etymology: "Latin 'materia' (matter) + -ize = 물질화하다"
    },
    {
        word: "regulate",
        hints: ["adjust", "control"],
        sentence: "The thermostat helps _____ room temperature.",
        korean: "조절하다",
        etymology: "Latin 'regula' (rule) = 규칙으로 조정하다"
    },
    {
        word: "demise",
        hints: ["end", "fall", "collapse", "downfall"],
        sentence: "The _____ of the empire was gradual but inevitable.",
        korean: "종말",
        etymology: "Old French 'demettre' (dismiss) = 해임하다"
    },
    {
        word: "frankly",
        hints: ["honestly", "openly", "truthfully", "candidly"],
        sentence: "_____ speaking, I don't think this plan will work.",
        korean: "솔직히",
        etymology: "Frank (free, open) + -ly = 자유롭게"
    },
    {
        word: "immensely",
        hints: ["extremely", "excessively", "enormously", "incredibly"],
        sentence: "She enjoyed the concert _____.",
        korean: "굉장히",
        etymology: "Latin 'immensus' (unmeasured) + -ly = 측정할 수 없을 정도로"
    },
    {
        word: "deem",
        hints: ["consider", "regard", "believe"],
        sentence: "The committee _____ the proposal worthy of consideration.",
        korean: "생각하다",
        etymology: "Old English 'deman' (judge) = 판단하다"
    },
    {
        word: "consumption",
        hints: ["use", "utilization"],
        sentence: "Energy _____ has increased dramatically this year.",
        korean: "소비",
        etymology: "Latin 'consumere' (use up) = 다 써버리다"
    },
    {
        word: "suspend",
        hints: ["hang", "dangle", "swing"],
        sentence: "They decided to _____ the meeting until next week.",
        korean: "매달다",
        etymology: "Latin 'sub-' (under) + 'pendere' (hang) = 아래 매달다"
    },
    {
        word: "prevent",
        hints: ["preclude", "avoid", "impede", "avert"],
        sentence: "Regular exercise can _____ many health problems.",
        korean: "막다",
        etymology: "Latin 'prae-' (before) + 'venire' (come) = 앞서 오다"
    },
    {
        word: "authentic",
        hints: ["genuine", "true", "real"],
        sentence: "The museum displays only _____ artifacts.",
        korean: "진짜의",
        etymology: "Greek 'authentikos' (original) = 원본의"
    },
    {
        word: "redundant",
        hints: ["superfluous", "unnecessary", "wordy", "repetitious"],
        sentence: "The extra security measures seem _____ now.",
        korean: "불필요한",
        etymology: "Latin 'redundare' (overflow) = 넘쳐흐르다"
    },
    {
        word: "profuse",
        hints: ["abundant", "plentiful", "copious", "lavish"],
        sentence: "She offered _____ apologies for being late.",
        korean: "풍부한",
        etymology: "Latin 'profusus' (poured forth) = 쏟아져 나온"
    },
    {
        word: "ornament",
        hints: ["decorate", "adorn", "embellish"],
        sentence: "Beautiful flowers _____ the wedding venue.",
        korean: "장식하다",
        etymology: "Latin 'ornare' (equip, adorn) = 꾸미다"
    },
    {
        word: "demolish",
        hints: ["destroy", "wreck"],
        sentence: "They plan to _____ the old building next month.",
        korean: "파괴하다",
        etymology: "Latin 'de-' (down) + 'moliri' (construct) = 건설의 반대"
    },
    {
        word: "voracious",
        hints: ["insatiable", "greedy", "gluttonous"],
        sentence: "She has a _____ appetite for learning new languages.",
        korean: "탐욕적인",
        etymology: "Latin 'vorare' (devour) = 게걸스럽게 먹다"
    },
    {
        word: "as well as",
        hints: ["in addition to", "not to mention"],
        sentence: "The course covers grammar _____ pronunciation.",
        korean: "~뿐만 아니라",
        etymology: "As (equally) + well (good) + as = 똑같이 잘"
    },
    {
        word: "extreme",
        hints: ["intense", "severe", "excessive"],
        sentence: "The desert experiences _____ temperature variations.",
        korean: "극심한",
        etymology: "Latin 'extremus' (outermost) = 가장 바깥의"
    },
    {
        word: "reform",
        hints: ["betterment", "amend", "improve", "ameliorate"],
        sentence: "The government announced plans to _____ the education system.",
        korean: "개혁, 개선하다",
        etymology: "Latin 're-' (again) + 'formare' (form) = 다시 형성하다"
    },
    {
        word: "determinant",
        hints: ["cause", "factor"],
        sentence: "Education level is a major _____ of income.",
        korean: "결정 요인",
        etymology: "Latin 'determinare' (limit, fix) = 결정하다"
    },
    {
        word: "inclination",
        hints: ["tendency", "trend", "preference", "taste"],
        sentence: "She has a natural _____ toward music.",
        korean: "기호",
        etymology: "Latin 'inclinare' (lean toward) = 기울어지다"
    },
    {
        word: "inflation",
        hints: ["expansion", "swelling", "enlargement"],
        sentence: "Economic _____ affects the purchasing power of consumers.",
        korean: "팽창",
        etymology: "Latin 'inflare' (blow into) = 불어넣다"
    },
    {
        word: "routine",
        hints: ["ordinary", "normal", "conventional"],
        sentence: "The doctor performed a _____ check-up.",
        korean: "틀에 박힌",
        etymology: "French 'route' (road) = 정해진 길"
    },
    {
        word: "accessible",
        hints: ["reachable", "able to be reached", "obtainable"],
        sentence: "The library makes books _____ to all students.",
        korean: "얻을 수 있는",
        etymology: "Latin 'accessus' (approach) = 접근할 수 있는"
    },
    {
        word: "constituent",
        hints: ["component", "elemental"],
        sentence: "Water is a _____ element of all living organisms.",
        korean: "구성 요소의",
        etymology: "Latin 'constituere' (establish) = 구성하다"
    },
    {
        word: "insolent",
        hints: ["impertinent", "impudent", "rude"],
        sentence: "The student's _____ behavior shocked the teacher.",
        korean: "무례한",
        etymology: "Latin 'in-' (not) + 'solere' (be accustomed) = 예의에 맞지 않는"
    },
    {
        word: "to be sure",
        hints: ["certainly", "definitely", "surely"],
        sentence: "_____, the task will be challenging, but not impossible.",
        korean: "틀림없이",
        etymology: "To be (확실히) + sure (확신하는) = 확실히"
    },
    {
        word: "broadly",
        hints: ["generally", "mostly"],
        sentence: "The proposal was _____ accepted by the committee.",
        korean: "대체로",
        etymology: "Broad (넓은) + -ly = 넓게, 대체로"
    },
    {
        word: "echo",
        hints: ["reflect", "resound", "resonate", "imitate", "repeat", "reiterate"],
        sentence: "The senator's speech _____ the concerns of many citizens.",
        korean: "울리다, 흉내내다",
        etymology: "Greek 'echo' (sound) = 메아리"
    },
    {
        word: "shoddy",
        hints: ["inferior", "poor"],
        sentence: "The _____ construction caused the building to collapse.",
        korean: "질이 떨어지는",
        etymology: "Origin uncertain, possibly from 'shoddy wool' = 재생모직"
    },
    {
        word: "gear",
        hints: ["adjust", "adapt", "change"],
        sentence: "The company needs to _____ its strategy toward younger consumers.",
        korean: "맞게 조정하다",
        etymology: "Old Norse 'gervi' (equipment) = 장비, 조정하다"
    },
    {
        word: "absorb",
        hints: ["take in", "imbibe", "soak up"],
        sentence: "Plants _____ nutrients from the soil.",
        korean: "흡수하다",
        etymology: "Latin 'ab-' (from) + 'sorbere' (suck in) = 빨아들이다"
    },
    {
        word: "whereby",
        hints: ["through which", "by which"],
        sentence: "They established a system _____ complaints could be filed online.",
        korean: "~하는",
        etymology: "Where (어디서) + by (에 의해) = ~에 의해서"
    },
    {
        word: "assemble",
        hints: ["gather together", "bring together", "collect"],
        sentence: "Please _____ all the documents for the meeting.",
        korean: "모으다",
        etymology: "Latin 'ad-' (to) + 'simul' (together) = 함께 모으다"
    },
    {
        word: "liberate",
        hints: ["free", "release", "loosen"],
        sentence: "The new law will _____ many prisoners.",
        korean: "해방하다",
        etymology: "Latin 'liberare' (set free) = 자유롭게 하다"
    },
    {
        word: "rational",
        hints: ["logical", "sensible", "reasonable"],
        sentence: "We need to make a _____ decision based on facts.",
        korean: "합리적인",
        etymology: "Latin 'ratio' (reason) = 이성적인"
    },
    {
        word: "resistance",
        hints: ["opposition", "objection", "refusal to accept"],
        sentence: "There was strong _____ to the proposed changes.",
        korean: "반대",
        etymology: "Latin 're-' (back) + 'sistere' (stand) = 맞서다"
    },
    {
        word: "indefinite period",
        hints: ["a period whose end has not been determined"],
        sentence: "The project has been postponed for an _____.",
        korean: "무기한",
        etymology: "In- (not) + definite (확정된) + period = 확정되지 않은 기간"
    },
    {
        word: "ardent",
        hints: ["enthusiastic", "passionate", "fervent"],
        sentence: "She is an _____ supporter of environmental protection.",
        korean: "열렬한",
        etymology: "Latin 'ardere' (burn) = 타오르는"
    },
    {
        word: "extinct",
        hints: ["having died out", "defunct"],
        sentence: "Many species have become _____ due to habitat destruction.",
        korean: "멸종된",
        etymology: "Latin 'ex-' (out) + 'stinguere' (quench) = 꺼진"
    },
    {
        word: "be accompanied by",
        hints: ["occur together with"],
        sentence: "The promotion will _____ a significant salary increase.",
        korean: "~을 동반하다",
        etymology: "Accompany (함께 가다) + by = ~와 함께"
    },
    {
        word: "overestimated",
        hints: ["bigger than actual value"],
        sentence: "The cost of the project was greatly _____.",
        korean: "과대평가된",
        etymology: "Over- (지나치게) + estimate = 지나치게 평가하다"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day8Vocabulary;
} else {
    window.day8Vocabulary = day8Vocabulary;
}