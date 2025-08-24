// Day 17 vocabulary data
const day17Vocabulary = [
    {
        word: "prolonged",
        hints: ["lengthy", "extended", "protracted"],
        sentence: "The _____ drought caused severe damage to crops.",
        korean: "오래 계속되는",
        etymology: "Latin 'pro' (forward) + 'longus' (long) = extended in time"
    },
    {
        word: "relative",
        hints: ["comparable"],
        sentence: "The _____ importance of each factor must be considered.",
        korean: "상대적인",
        etymology: "Latin 'relativus' (having reference) = in relation to something else"
    },
    {
        word: "ultimate",
        hints: ["eventual", "final", "supreme", "fundamental", "basic", "primary"],
        sentence: "The _____ goal of the project is to reduce pollution.",
        korean: "최종의, 궁극적인, 근본적인",
        etymology: "Latin 'ultimus' (farthest) = final, most extreme"
    },
    {
        word: "brittle",
        hints: ["easily broken", "breakable", "fragile"],
        sentence: "The old paper had become _____ and yellow with age.",
        korean: "부서지기 쉬운, 깨지기 쉬운",
        etymology: "Middle English 'britel' (fragile) = easily broken"
    },
    {
        word: "pioneer",
        hints: ["leader", "founder", "first develop", "first start", "first use", "introduce"],
        sentence: "She was a _____ in the field of computer science.",
        korean: "선구자, 개척하다",
        etymology: "French 'pionnier' (foot soldier) = one who goes first"
    },
    {
        word: "heritage",
        hints: ["inheritance", "legacy", "tradition"],
        sentence: "The museum preserves the cultural _____ of the region.",
        korean: "유산, 전통",
        etymology: "Old French 'heritage' (inheritance) = what is inherited"
    },
    {
        word: "impetus",
        hints: ["motivation", "stimulus", "spur", "impulse"],
        sentence: "The crisis provided the _____ for major reform.",
        korean: "자극",
        etymology: "Latin 'impetus' (attack) = driving force, momentum"
    },
    {
        word: "threshold",
        hints: ["limit", "margin"],
        sentence: "We are on the _____ of a major breakthrough.",
        korean: "한계점, 기준점",
        etymology: "Old English 'threscold' (doorway) = point of entering"
    },
    {
        word: "intensify",
        hints: ["reinforce", "strengthen", "enhance"],
        sentence: "The storm began to _____ as it moved inland.",
        korean: "강화하다",
        etymology: "Latin 'intensus' (stretched) + 'facere' (make) = make more intense"
    },
    {
        word: "orchestrate",
        hints: ["coordinate", "organize"],
        sentence: "The manager will _____ the entire marketing campaign.",
        korean: "조직하다",
        etymology: "Greek 'orchestra' (dancing place) = arrange systematically"
    },
    {
        word: "hamper",
        hints: ["obstruct", "impede", "hinder", "restrict", "prevent"],
        sentence: "Bad weather will _____ our travel plans.",
        korean: "방해하다",
        etymology: "Middle English 'hamperen' (confine) = restrict movement"
    },
    {
        word: "inhospitable",
        hints: ["unfavorable", "unfriendly", "not suitable", "uninhabitable"],
        sentence: "The desert climate is _____ to most plant life.",
        korean: "불친절한, 살기에 부적당한",
        etymology: "Latin 'in' (not) + 'hospitabilis' (welcoming) = not welcoming"
    },
    {
        word: "roughly",
        hints: ["approximately", "nearly", "about"],
        sentence: "The project will take _____ six months to complete.",
        korean: "대략",
        etymology: "Rough (not smooth) + -ly = approximately"
    },
    {
        word: "prevalent",
        hints: ["common", "general", "widespread"],
        sentence: "This disease is _____ in tropical regions.",
        korean: "일반적인, 널리퍼진",
        etymology: "Latin 'praevalens' (very strong) = having superior strength"
    },
    {
        word: "orientation",
        hints: ["perspective", "inclination", "disposition", "introduction", "induction"],
        sentence: "New employees must attend a _____ session.",
        korean: "성향, 경향, 오리엔테이션",
        etymology: "Latin 'oriens' (east) = direction, positioning"
    },
    {
        word: "converge",
        hints: ["come together", "meet", "move closer", "gather"],
        sentence: "All the roads _____ at the town center.",
        korean: "모이다",
        etymology: "Latin 'con' (together) + 'vergere' (incline) = come together"
    },
    {
        word: "inflate",
        hints: ["swell", "bloat", "expand", "enlarge"],
        sentence: "The balloon will _____ as we add more air.",
        korean: "부풀다, 부풀리다",
        etymology: "Latin 'inflare' (blow into) = fill with air"
    },
    {
        word: "terrain",
        hints: ["land", "landscape", "territory", "area"],
        sentence: "The rocky _____ made hiking difficult.",
        korean: "지역, 지형",
        etymology: "Latin 'terra' (earth) = ground, land surface"
    },
    {
        word: "critically",
        hints: ["fundamentally", "decisively", "crucially"],
        sentence: "The patient is _____ injured and needs surgery.",
        korean: "결정적으로",
        etymology: "Greek 'kritikos' (able to judge) + -ly = in a crucial manner"
    },
    {
        word: "in earnest",
        hints: ["seriously", "earnestly", "solemnly"],
        sentence: "They began working _____ on the new project.",
        korean: "진지하게",
        etymology: "Earnest (serious) = with serious intent"
    },
    {
        word: "agile",
        hints: ["nimble", "quick", "active"],
        sentence: "The _____ athlete easily avoided the tackle.",
        korean: "민첩한",
        etymology: "Latin 'agilis' (easily moved) = quick in motion"
    },
    {
        word: "standstill",
        hints: ["complete stop", "halt"],
        sentence: "Traffic came to a complete _____ during rush hour.",
        korean: "정지, 멈춤",
        etymology: "Stand (remain) + still (motionless) = complete stop"
    },
    {
        word: "persuasively",
        hints: ["convincingly", "compellingly"],
        sentence: "She argued _____ for the new policy changes.",
        korean: "설득력 있게",
        etymology: "Latin 'persuadere' (convince) + -ly = in a convincing manner"
    },
    {
        word: "miraculous",
        hints: ["amazing", "astonishing", "marvelous", "unbelievable"],
        sentence: "The patient made a _____ recovery from the accident.",
        korean: "기적적인, 놀라운",
        etymology: "Latin 'miraculum' (wonder) = causing wonder"
    },
    {
        word: "intangible",
        hints: ["nonmaterial", "impalpable", "incorporeal"],
        sentence: "The company's reputation is an _____ but valuable asset.",
        korean: "무형의",
        etymology: "Latin 'in' (not) + 'tangere' (touch) = cannot be touched"
    },
    {
        word: "secure",
        hints: ["obtain", "get", "acquire", "procure", "safe"],
        sentence: "We need to _____ funding for the research project.",
        korean: "확보하다, 안전한",
        etymology: "Latin 'securus' (free from care) = safe, obtain"
    },
    {
        word: "subsist",
        hints: ["survive", "endure", "exist"],
        sentence: "The family had to _____ on very little income.",
        korean: "생존하다",
        etymology: "Latin 'subsistere' (stand firm) = continue to exist"
    },
    {
        word: "undoubtedly",
        hints: ["certainly", "definitely", "without question"],
        sentence: "This is _____ the best solution to the problem.",
        korean: "확실히",
        etymology: "Un- (not) + doubt (uncertainty) + -ly = certainly"
    },
    {
        word: "dispose of",
        hints: ["get rid of"],
        sentence: "We need to properly _____ the hazardous waste.",
        korean: "~을 처리하다",
        etymology: "Latin 'disponere' (arrange) + of = arrange removal"
    },
    {
        word: "archive",
        hints: ["official document", "record"],
        sentence: "The historical documents are stored in the _____.",
        korean: "공식 기록",
        etymology: "Greek 'archeion' (government house) = place of records"
    },
    {
        word: "regenerate",
        hints: ["renew", "revive", "revitalize"],
        sentence: "The forest will _____ naturally after the fire.",
        korean: "재건하다, 재생시키다",
        etymology: "Latin 're' (again) + 'generare' (create) = create again"
    },
    {
        word: "mode",
        hints: ["method", "form", "fashion", "style"],
        sentence: "The device operates in several different _____.",
        korean: "방식, 형태",
        etymology: "Latin 'modus' (manner) = way of doing"
    },
    {
        word: "commemorate",
        hints: ["celebrate", "memorialize"],
        sentence: "The statue was built to _____ the war heroes.",
        korean: "기념하다",
        etymology: "Latin 'commemorare' (recall) = call to remembrance"
    },
    {
        word: "imprecise",
        hints: ["inexact", "inaccurate"],
        sentence: "The measurements were too _____ for scientific use.",
        korean: "부정확한",
        etymology: "Latin 'in' (not) + 'praecisus' (cut short) = not exact"
    },
    {
        word: "state",
        hints: ["indicate", "specify", "express"],
        sentence: "Please _____ your name and address clearly.",
        korean: "명시하다",
        etymology: "Latin 'status' (condition) = express condition"
    },
    {
        word: "anticipate",
        hints: ["expect", "foresee", "predict", "forecast"],
        sentence: "We _____ heavy traffic during the holiday weekend.",
        korean: "예상하다",
        etymology: "Latin 'ante' (before) + 'capere' (take) = take beforehand"
    },
    {
        word: "henceforth",
        hints: ["from now on", "hereafter"],
        sentence: "_____, all meetings will be held on Mondays.",
        korean: "지금부터는",
        etymology: "Hence (from here) + forth (forward) = from this time forward"
    },
    {
        word: "transparent",
        hints: ["clear", "obvious", "lucid", "limpid"],
        sentence: "The company's policies should be _____ to all employees.",
        korean: "투명한, 명백한",
        etymology: "Latin 'trans' (through) + 'parere' (appear) = appear through"
    },
    {
        word: "prominence",
        hints: ["importance", "greatness"],
        sentence: "The actor rose to _____ after his award-winning performance.",
        korean: "중요성",
        etymology: "Latin 'prominere' (jut out) = standing out"
    },
    {
        word: "incorporate",
        hints: ["include", "combine", "integrate"],
        sentence: "We will _____ your suggestions into the final plan.",
        korean: "통합하다",
        etymology: "Latin 'in' (into) + 'corpus' (body) = unite into one body"
    },
    {
        word: "meticulous",
        hints: ["careful", "thorough", "precise"],
        sentence: "She is _____ in her attention to detail.",
        korean: "꼼꼼한",
        etymology: "Latin 'metus' (fear) = fearful of making errors"
    },
    {
        word: "dismantle",
        hints: ["take apart", "disassemble", "break down"],
        sentence: "Workers will _____ the old factory equipment.",
        korean: "분해하다",
        etymology: "Old French 'des' (apart) + 'manteler' (cloak) = remove covering"
    },
    {
        word: "lavish",
        hints: ["rich", "deluxe", "luxurious"],
        sentence: "The wedding reception was a _____ affair.",
        korean: "풍부한, 호화로운",
        etymology: "Old French 'lavasse' (downpour) = abundant like rain"
    },
    {
        word: "dynamic",
        hints: ["active", "energetic", "vigorous", "robust", "energy", "power", "driving force"],
        sentence: "The city has a _____ economy with many new businesses.",
        korean: "역동적인, 원동력, 힘",
        etymology: "Greek 'dynamis' (power) = characterized by energy"
    },
    {
        word: "overlook",
        hints: ["miss", "fail to notice"],
        sentence: "Don't _____ the small details in your report.",
        korean: "간과하다",
        etymology: "Over (above) + look = look over and miss"
    },
    {
        word: "dormant",
        hints: ["inactive", "torpid"],
        sentence: "The volcano has been _____ for over a century.",
        korean: "활동하지 않는, 휴면중인",
        etymology: "Latin 'dormire' (sleep) = in a sleeping state"
    },
    {
        word: "exempt",
        hints: ["free", "immune", "not subject to", "excused"],
        sentence: "Students are _____ from paying certain fees.",
        korean: "면제된",
        etymology: "Latin 'eximere' (take out) = removed from obligation"
    },
    {
        word: "as a whole",
        hints: ["generally", "overall", "all together", "by and large"],
        sentence: "The project, _____, was a great success.",
        korean: "전체적으로",
        etymology: "As (in the manner of) + whole (complete) = altogether"
    },
    {
        word: "rather",
        hints: ["instead", "somewhat", "slightly"],
        sentence: "I would _____ stay home than go to the party.",
        korean: "오히려, 좀, 약간",
        etymology: "Old English 'hrathor' (earlier) = more willingly"
    },
    {
        word: "justify",
        hints: ["support", "prove", "give a rational basis of"],
        sentence: "Can you _____ spending so much money on this project?",
        korean: "옹호하다, (정당성을) 증명하다",
        etymology: "Latin 'justus' (just) + 'facere' (make) = make just"
    },
    {
        word: "chaotic",
        hints: ["disorganized", "disordered", "anarchic"],
        sentence: "The traffic was _____ during the morning rush hour.",
        korean: "무질서한",
        etymology: "Greek 'chaos' (void) = complete disorder"
    },
    {
        word: "commence",
        hints: ["begin", "start", "originate", "initiate"],
        sentence: "The graduation ceremony will _____ at 2 PM.",
        korean: "시작하다",
        etymology: "Latin 'com' (together) + 'initiare' (begin) = begin together"
    },
    {
        word: "improvised",
        hints: ["unplanned", "unprepared", "unrehearsed"],
        sentence: "His _____ speech was surprisingly effective.",
        korean: "즉흥의",
        etymology: "Latin 'improvisus' (unforeseen) = done without preparation"
    },
    {
        word: "stem from",
        hints: ["originate from", "derive from", "arise from"],
        sentence: "Many of our problems _____ poor communication.",
        korean: "~에서 유래하다",
        etymology: "Stem (main part) + from = originate from main source"
    },
    {
        word: "judiciously",
        hints: ["wisely", "sensibly", "prudently"],
        sentence: "She _____ invested her savings in diverse portfolios.",
        korean: "현명하게, 분별 있게",
        etymology: "Latin 'judicium' (judgment) + -ly = with good judgment"
    },
    {
        word: "tolerate",
        hints: ["accept", "allow", "permit"],
        sentence: "The school will not _____ bullying behavior.",
        korean: "용인하다, 허용하다",
        etymology: "Latin 'tolerare' (bear) = bear with patience"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day17Vocabulary;
} else {
    window.day17Vocabulary = day17Vocabulary;
}