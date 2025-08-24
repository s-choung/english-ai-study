// Day 19 vocabulary data
const day19Vocabulary = [
    {
        word: "forage",
        hints: ["seek for food", "search", "hunt", "rummage", "feed", "fodder", "food"],
        sentence: "The animals must _____ for food during the harsh winter.",
        korean: "(식량 등을) 찾아다니다, 사료, 먹이",
        etymology: "Old French 'fourrage' (fodder) = search for food"
    },
    {
        word: "erect",
        hints: ["build", "construct", "raise", "set up"],
        sentence: "Workers will _____ a new monument in the town square.",
        korean: "세우다, 건설하다",
        etymology: "Latin 'erigere' (raise up) = set upright"
    },
    {
        word: "integral",
        hints: ["essential", "crucial", "indispensable", "complete"],
        sentence: "Teamwork is an _____ part of our company culture.",
        korean: "필수적인, 완전한, 빠진것이 없는",
        etymology: "Latin 'integer' (whole) = essential to completeness"
    },
    {
        word: "precisely",
        hints: ["exactly", "accurately", "correctly", "with precision"],
        sentence: "The surgery must be performed _____ to avoid complications.",
        korean: "정확하게",
        etymology: "Latin 'praecisus' (cut short) + -ly = with exact accuracy"
    },
    {
        word: "handle",
        hints: ["process", "manage", "deal with"],
        sentence: "She knows how to _____ difficult customer complaints.",
        korean: "처리하다",
        etymology: "Old English 'handlian' (touch) = manage with hands"
    },
    {
        word: "objective",
        hints: ["purpose", "aim", "goal", "unbiased", "impartial"],
        sentence: "The main _____ of the research is to find a cure.",
        korean: "목적, 목표, 편견없는",
        etymology: "Medieval Latin 'objectivus' (presented to the mind) = aim or goal"
    },
    {
        word: "deviate",
        hints: ["depart", "turn aside", "diverge", "stray"],
        sentence: "Don't _____ from the original plan without approval.",
        korean: "벗어나다",
        etymology: "Latin 'de' (away) + 'via' (road) = turn away from path"
    },
    {
        word: "vigor",
        hints: ["energy", "strength", "vitality"],
        sentence: "The elderly man still exercises with great _____.",
        korean: "활력, 힘",
        etymology: "Latin 'vigor' (liveliness) = active strength"
    },
    {
        word: "decisive",
        hints: ["significant", "definitive", "definite"],
        sentence: "The _____ factor in our success was good leadership.",
        korean: "결정적인, 명백한",
        etymology: "Latin 'decidere' (cut off) = settling an issue"
    },
    {
        word: "primordial",
        hints: ["beginning", "original", "earliest"],
        sentence: "Scientists study _____ life forms from ancient oceans.",
        korean: "최초의",
        etymology: "Latin 'primordialis' (first of all) = existing from beginning"
    },
    {
        word: "cluster",
        hints: ["gather", "group", "assemble"],
        sentence: "Stars tend to _____ together in galaxies.",
        korean: "(떼를 지어) 모이다, 모으다",
        etymology: "Old English 'clyster' (bunch) = come together in groups"
    },
    {
        word: "revise",
        hints: ["change", "modify", "alter", "edit", "correct"],
        sentence: "Please _____ your essay before submitting it.",
        korean: "수정하다, 변경하다",
        etymology: "Latin 're' (again) + 'videre' (see) = look at again"
    },
    {
        word: "obscure",
        hints: ["unclear", "uncertain", "hidden", "dim", "faint"],
        sentence: "The meaning of the ancient text remains _____.",
        korean: "흐릿한, 불분명한",
        etymology: "Latin 'obscurus' (dark) = hidden from view"
    },
    {
        word: "rebound",
        hints: ["recover", "rally", "bounce back", "recovery", "return"],
        sentence: "The economy is expected to _____ next year.",
        korean: "다시 일어서다, 회복하다, 회복",
        etymology: "Re- (back) + bound (leap) = spring back"
    },
    {
        word: "thus",
        hints: ["consequently", "therefore", "accordingly"],
        sentence: "The experiment failed; _____, we need new methods.",
        korean: "따라서",
        etymology: "Old English 'thus' (in this way) = in this manner"
    },
    {
        word: "minutely",
        hints: ["in detail", "meticulously"],
        sentence: "The detective examined the crime scene _____.",
        korean: "자세하게",
        etymology: "Latin 'minutus' (small) + -ly = in small detail"
    },
    {
        word: "tend",
        hints: ["take care of", "look after", "care for", "foster"],
        sentence: "Nurses _____ to patients throughout the night.",
        korean: "돌보다",
        etymology: "Latin 'tendere' (stretch) = give attention to"
    },
    {
        word: "impact",
        hints: ["influence", "effect", "repercussion"],
        sentence: "The new policy will have a significant _____ on students.",
        korean: "영향",
        etymology: "Latin 'impactus' (pushed against) = forceful effect"
    },
    {
        word: "luxuriant",
        hints: ["rich", "abundant", "exuberant", "opulent"],
        sentence: "The rainforest has _____ vegetation and wildlife.",
        korean: "무성한",
        etymology: "Latin 'luxuriare' (be abundant) = growing abundantly"
    },
    {
        word: "altogether",
        hints: ["fully", "completely", "entirely", "totally", "wholly"],
        sentence: "The project was _____ successful beyond expectations.",
        korean: "완전히",
        etymology: "All (entire) + together = completely"
    },
    {
        word: "astounding",
        hints: ["amazing", "astonishing", "surprising"],
        sentence: "The magician's performance was absolutely _____.",
        korean: "놀라운",
        etymology: "Latin 'ex' (out) + 'tonare' (thunder) = strike with wonder"
    },
    {
        word: "propagation",
        hints: ["spread", "dissemination"],
        sentence: "The _____ of new ideas happens quickly online.",
        korean: "보급, 전파",
        etymology: "Latin 'propagare' (extend) = spread or multiply"
    },
    {
        word: "encroach",
        hints: ["trespass", "invade", "intrude"],
        sentence: "Urban development continues to _____ on natural habitats.",
        korean: "침입하다",
        etymology: "Old French 'encrochier' (seize) = advance beyond boundaries"
    },
    {
        word: "bizarre",
        hints: ["strange", "odd", "erratic", "exotic", "irregular"],
        sentence: "The artist's _____ sculptures puzzled many visitors.",
        korean: "이상한, 기괴한",
        etymology: "French 'bizarre' (handsome) = strikingly unconventional"
    },
    {
        word: "elevate",
        hints: ["raise", "lift", "heave", "hoist"],
        sentence: "The new position will _____ her status in the company.",
        korean: "들어올리다",
        etymology: "Latin 'elevare' (lift up) = raise to higher position"
    },
    {
        word: "superb",
        hints: ["excellent", "outstanding", "magnificent"],
        sentence: "The chef prepared a _____ five-course dinner.",
        korean: "훌륭한",
        etymology: "Latin 'superbus' (proud) = of excellent quality"
    },
    {
        word: "accommodate",
        hints: ["lodge", "make room for", "hold", "adjust to", "suit", "adapt", "fit"],
        sentence: "The hotel can _____ up to 200 guests.",
        korean: "수용하다, 적응하다, 맞추다",
        etymology: "Latin 'ad' (to) + 'commodus' (suitable) = make suitable"
    },
    {
        word: "infinite",
        hints: ["limitless", "unlimited", "immeasurable", "boundless"],
        sentence: "The universe appears to be _____ in size.",
        korean: "무한한",
        etymology: "Latin 'in' (not) + 'finis' (end) = without end"
    },
    {
        word: "glimpse into",
        hints: ["brief view into", "quick look into"],
        sentence: "The documentary offers a _____ the artist's creative process.",
        korean: "~을 흘끗 봄",
        etymology: "Middle English 'glimsen' (shine faintly) = brief view"
    },
    {
        word: "mold",
        hints: ["shape", "form", "fashion"],
        sentence: "Teachers help _____ young minds and character.",
        korean: "형성하다, 만들다",
        etymology: "Old English 'molde' (earth) = give shape to"
    },
    {
        word: "wary",
        hints: ["cautious", "distrustful", "watchful"],
        sentence: "Investors remain _____ of risky market conditions.",
        korean: "경계하는",
        etymology: "Old English 'waer' (aware) = carefully watchful"
    },
    {
        word: "expansion",
        hints: ["spread", "growth"],
        sentence: "The company's _____ into new markets was successful.",
        korean: "팽창, 확장",
        etymology: "Latin 'expandere' (spread out) = act of expanding"
    },
    {
        word: "autonomy",
        hints: ["self-rule", "independence"],
        sentence: "The region was granted greater political _____.",
        korean: "자치(권)",
        etymology: "Greek 'autos' (self) + 'nomos' (law) = self-governance"
    },
    {
        word: "complaint",
        hints: ["protest", "grievance"],
        sentence: "The customer filed a formal _____ about poor service.",
        korean: "불만, 항의",
        etymology: "Old French 'complainte' (lamentation) = expression of dissatisfaction"
    },
    {
        word: "subordinate",
        hints: ["secondary", "subject", "dependent"],
        sentence: "The _____ clauses provide additional information.",
        korean: "종속적인",
        etymology: "Latin 'sub' (under) + 'ordinare' (arrange) = placed below"
    },
    {
        word: "thrive",
        hints: ["do well", "prosper", "flourish"],
        sentence: "Plants _____ in warm, sunny environments.",
        korean: "번성하다",
        etymology: "Old Norse 'thrifask' (grasp for oneself) = grow vigorously"
    },
    {
        word: "by and large",
        hints: ["for the most part", "on the whole"],
        sentence: "_____, the conference was well-organized and informative.",
        korean: "대체로",
        etymology: "Nautical term meaning 'in all directions' = generally speaking"
    },
    {
        word: "unique to",
        hints: ["existing only in", "exclusive to"],
        sentence: "This species is _____ the Amazon rainforest.",
        korean: "~특유의",
        etymology: "Latin 'unicus' (one) + to = belonging only to"
    },
    {
        word: "annual",
        hints: ["yearly"],
        sentence: "The company holds its _____ meeting every December.",
        korean: "연간의",
        etymology: "Latin 'annus' (year) = occurring once per year"
    },
    {
        word: "frigid",
        hints: ["cold", "freezing", "frosty"],
        sentence: "The _____ winter temperatures froze the lake solid.",
        korean: "몹시 추운",
        etymology: "Latin 'frigidus' (cold) = extremely cold"
    },
    {
        word: "appreciate",
        hints: ["recognize", "understand", "perceive"],
        sentence: "I _____ the complexity of this mathematical problem.",
        korean: "인식하다",
        etymology: "Latin 'appretiare' (set a price) = recognize worth"
    },
    {
        word: "apparatus",
        hints: ["equipment", "device"],
        sentence: "The laboratory has sophisticated _____ for research.",
        korean: "기구, 장치",
        etymology: "Latin 'apparatus' (prepared) = equipment prepared for use"
    },
    {
        word: "engender",
        hints: ["cause", "bring about", "generate"],
        sentence: "Good leadership can _____ trust and cooperation.",
        korean: "야기하다",
        etymology: "Old French 'engendrer' (beget) = bring into being"
    },
    {
        word: "adverse",
        hints: ["negative", "unfavorable", "not favorable", "harmful"],
        sentence: "The medication may cause _____ reactions in some patients.",
        korean: "부정적인",
        etymology: "Latin 'adversus' (turned against) = acting against"
    },
    {
        word: "accomplished",
        hints: ["skilled", "proficient"],
        sentence: "She is an _____ pianist who performs internationally.",
        korean: "숙련된",
        etymology: "Accomplish (complete) + -ed = having achieved skill"
    },
    {
        word: "conceal",
        hints: ["hide", "cover", "obscure"],
        sentence: "The spy tried to _____ important documents.",
        korean: "숨기다, 감추다",
        etymology: "Latin 'con' (completely) + 'celare' (hide) = hide completely"
    },
    {
        word: "uniform",
        hints: ["consistent", "even", "invariable"],
        sentence: "The company maintains _____ quality across all products.",
        korean: "일정한, 한결같은",
        etymology: "Latin 'uni' (one) + 'forma' (form) = having one form"
    },
    {
        word: "complement",
        hints: ["supplement"],
        sentence: "The wine is a perfect _____ to the cheese.",
        korean: "금상첨화격 요소, 보완물",
        etymology: "Latin 'complere' (fill up) = complete by addition"
    },
    {
        word: "refrain from",
        hints: ["avoid", "abstain from", "keep from"],
        sentence: "Please _____ using your phone during the meeting.",
        korean: "~을 삼가다",
        etymology: "Old French 'refrener' (bridle) = hold back from"
    },
    {
        word: "column",
        hints: ["pillar", "post"],
        sentence: "The ancient temple had marble _____ supporting the roof.",
        korean: "기둥",
        etymology: "Latin 'columna' (pillar) = vertical structural support"
    },
    {
        word: "underscore",
        hints: ["emphasize", "reinforce", "underline", "accentuate"],
        sentence: "The incident will _____ the need for better security.",
        korean: "강조하다",
        etymology: "Under (beneath) + score (mark) = emphasize by marking"
    },
    {
        word: "inspire",
        hints: ["motivate", "fire the imagination of"],
        sentence: "Great teachers _____ students to achieve their potential.",
        korean: "영감을 주다",
        etymology: "Latin 'inspirare' (breathe into) = fill with creative spirit"
    },
    {
        word: "swell",
        hints: ["increase", "expand", "enlarge"],
        sentence: "The river will _____ during the rainy season.",
        korean: "팽창하다, 팽창시키다",
        etymology: "Old English 'swellan' (grow big) = become larger"
    },
    {
        word: "deficient",
        hints: ["not enough", "insufficient", "inadequate"],
        sentence: "The diet was _____ in essential vitamins.",
        korean: "부족한",
        etymology: "Latin 'deficere' (fail) = falling short"
    },
    {
        word: "indiscriminately",
        hints: ["randomly"],
        sentence: "The disease spread _____ throughout the population.",
        korean: "무차별로, 가리지 않고",
        etymology: "In- (not) + discriminate (distinguish) + -ly = without distinction"
    },
    {
        word: "to some extent",
        hints: ["within limits"],
        sentence: "The new policy will _____ address our concerns.",
        korean: "어느 정도까지",
        etymology: "Some (partial) + extent (degree) = to a certain degree"
    },
    {
        word: "hierarchical",
        hints: ["arranged in order of"],
        sentence: "The company has a _____ structure with clear ranks.",
        korean: "계급제의",
        etymology: "Greek 'hierarches' (high priest) = arranged by rank"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day19Vocabulary;
} else {
    window.day19Vocabulary = day19Vocabulary;
}