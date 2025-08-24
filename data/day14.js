// Day 14 vocabulary data
const day14Vocabulary = [
    {
        word: "lethal",
        hints: ["deadly", "fatal", "mortal"],
        sentence: "The snake's venom is _____ to humans.",
        korean: "치명적인",
        etymology: "From Latin letalis 'deadly' (from letum 'death')"
    },
    {
        word: "modest",
        hints: ["moderate", "humble", "small"],
        sentence: "She lives in a _____ apartment downtown.",
        korean: "그리 크지 않은, 겸손한",
        etymology: "From Latin modestus 'keeping measure, moderate'"
    },
    {
        word: "component",
        hints: ["part", "element", "ingredient"],
        sentence: "Each _____ of the machine serves a specific purpose.",
        korean: "구성 요소",
        etymology: "From Latin componere 'to put together'"
    },
    {
        word: "exploitation",
        hints: ["misuse", "abuse", "manipulation"],
        sentence: "The _____ of natural resources threatens the environment.",
        korean: "부당한 이용",
        etymology: "From Latin explicare 'to unfold' (later 'to use selfishly')"
    },
    {
        word: "relic",
        hints: ["remnant", "artifact", "vestige"],
        sentence: "The museum displays ancient _____ from Roman times.",
        korean: "유물",
        etymology: "From Latin reliquiae 'remains'"
    },
    {
        word: "profoundly",
        hints: ["deeply", "intensely", "thoroughly"],
        sentence: "The experience _____ changed her perspective on life.",
        korean: "깊이, 심오하게",
        etymology: "From Latin profundus 'deep, bottomless' + -ly"
    },
    {
        word: "deflect",
        hints: ["redirect", "divert", "turn aside"],
        sentence: "The shield can _____ incoming projectiles.",
        korean: "방향을 바꾸다",
        etymology: "From Latin deflectere 'to bend away'"
    },
    {
        word: "highlight",
        hints: ["emphasize", "stress", "feature"],
        sentence: "The report will _____ the main findings.",
        korean: "강조하다",
        etymology: "From high + light 'to bring to prominence'"
    },
    {
        word: "exert",
        hints: ["apply", "exercise", "use"],
        sentence: "Parents _____ a strong influence on their children.",
        korean: "힘을 가하다, 행사하다",
        etymology: "From Latin exserere 'to put forth'"
    },
    {
        word: "potential",
        hints: ["possible", "prospective", "latent"],
        sentence: "Every student has the _____ to succeed.",
        korean: "잠재적인",
        etymology: "From Latin potentia 'power, ability'"
    },
    {
        word: "recurring",
        hints: ["repeated", "regular", "persistent"],
        sentence: "She has _____ nightmares about the accident.",
        korean: "되풀이되는",
        etymology: "From Latin re- 'again' + currere 'to run'"
    },
    {
        word: "meager",
        hints: ["insufficient", "scanty", "sparse"],
        sentence: "They survived on _____ rations during the siege.",
        korean: "불충분한",
        etymology: "From Latin macer 'lean, thin'"
    },
    {
        word: "prevail",
        hints: ["triumph", "succeed", "predominate"],
        sentence: "Justice will _____ in the end.",
        korean: "우세하다, 널리 퍼지다",
        etymology: "From Latin praevalere 'to be stronger'"
    },
    {
        word: "exclusively",
        hints: ["solely", "only", "entirely"],
        sentence: "This club is _____ for members.",
        korean: "오로지, 독점적으로",
        etymology: "From Latin excludere 'to shut out' + -ively"
    },
    {
        word: "consensus",
        hints: ["agreement", "harmony", "accord"],
        sentence: "The committee reached a _____ after hours of debate.",
        korean: "합의",
        etymology: "From Latin consentire 'to agree'"
    },
    {
        word: "now and then",
        hints: ["occasionally", "sometimes", "periodically"],
        sentence: "I still think about my college days _____.",
        korean: "가끔",
        etymology: "From now + and + then 'at intervals'"
    },
    {
        word: "discrete",
        hints: ["separate", "distinct", "individual"],
        sentence: "The system consists of several _____ components.",
        korean: "별개의",
        etymology: "From Latin discretus 'separated'"
    },
    {
        word: "anchor",
        hints: ["secure", "fix", "fasten"],
        sentence: "We need to _____ the tent firmly to the ground.",
        korean: "고정시키다",
        etymology: "From Latin ancora 'anchor'"
    },
    {
        word: "improbable",
        hints: ["unlikely", "doubtful", "questionable"],
        sentence: "It seems _____ that they will win the championship.",
        korean: "있음직하지 않은",
        etymology: "From Latin im- 'not' + probabilis 'provable'"
    },
    {
        word: "pragmatic",
        hints: ["practical", "realistic", "sensible"],
        sentence: "We need a _____ approach to solve this problem.",
        korean: "실용적인",
        etymology: "From Greek pragmatikos 'fit for business'"
    },
    {
        word: "undisputed",
        hints: ["unchallenged", "unquestioned", "accepted"],
        sentence: "She is the _____ champion of the tournament.",
        korean: "모두가 인정하는",
        etymology: "From un- 'not' + disputed 'questioned'"
    },
    {
        word: "allocation",
        hints: ["distribution", "assignment", "apportionment"],
        sentence: "The _____ of resources needs to be fair.",
        korean: "할당",
        etymology: "From Latin allocare 'to place, assign'"
    },
    {
        word: "inconclusive",
        hints: ["indecisive", "uncertain", "indefinite"],
        sentence: "The test results were _____.",
        korean: "결정적이지 않은",
        etymology: "From in- 'not' + conclusive 'decisive'"
    },
    {
        word: "withstand",
        hints: ["resist", "endure", "bear"],
        sentence: "The fortress can _____ any attack.",
        korean: "견디다",
        etymology: "From with + stand 'to stand against'"
    },
    {
        word: "cornerstone",
        hints: ["foundation", "basis", "keystone"],
        sentence: "Trust is the _____ of any relationship.",
        korean: "토대, 초석",
        etymology: "From corner + stone 'foundation stone'"
    },
    {
        word: "marvelous",
        hints: ["wonderful", "amazing", "spectacular"],
        sentence: "The view from the mountain was absolutely _____.",
        korean: "놀라운",
        etymology: "From Latin mirabilis 'wonderful'"
    },
    {
        word: "clue",
        hints: ["hint", "indication", "evidence"],
        sentence: "The detective found an important _____ at the scene.",
        korean: "단서",
        etymology: "From clew 'ball of thread' (used to guide through maze)"
    },
    {
        word: "unintentionally",
        hints: ["accidentally", "inadvertently", "unwittingly"],
        sentence: "I _____ hurt her feelings with my comment.",
        korean: "의도치 않게",
        etymology: "From un- + intentional + -ly"
    },
    {
        word: "peak",
        hints: ["summit", "top", "pinnacle"],
        sentence: "Tourism reaches its _____ during summer months.",
        korean: "정점",
        etymology: "From Middle English peke 'pointed top'"
    },
    {
        word: "continual",
        hints: ["constant", "persistent", "ongoing"],
        sentence: "The _____ noise from construction is disturbing.",
        korean: "끊임없는",
        etymology: "From Latin continuus 'uninterrupted'"
    },
    {
        word: "thorough",
        hints: ["complete", "comprehensive", "exhaustive"],
        sentence: "The inspector conducted a _____ examination.",
        korean: "철저한",
        etymology: "From Old English thuruh 'through'"
    },
    {
        word: "accurate",
        hints: ["precise", "correct", "exact"],
        sentence: "Please provide _____ measurements for the project.",
        korean: "정확한",
        etymology: "From Latin accuratus 'done with care'"
    },
    {
        word: "mobilize",
        hints: ["organize", "assemble", "rally"],
        sentence: "The government will _____ troops for the emergency.",
        korean: "동원하다",
        etymology: "From Latin mobilis 'movable' + -ize"
    },
    {
        word: "given that",
        hints: ["considering", "since", "in view of"],
        sentence: "_____ it's raining, we should cancel the picnic.",
        korean: "~을 고려하면",
        etymology: "From give 'to grant' + that"
    },
    {
        word: "cargo",
        hints: ["freight", "load", "shipment"],
        sentence: "The ship carries _____ across the Atlantic.",
        korean: "화물",
        etymology: "From Spanish cargo 'load, burden'"
    },
    {
        word: "solitary",
        hints: ["alone", "isolated", "single"],
        sentence: "He lives a _____ life in the mountains.",
        korean: "외딴, 고독한",
        etymology: "From Latin solitarius 'alone, lonely'"
    },
    {
        word: "slightly",
        hints: ["somewhat", "a little", "marginally"],
        sentence: "The temperature is _____ higher today.",
        korean: "약간",
        etymology: "From slight + -ly 'to a small degree'"
    },
    {
        word: "deliberately",
        hints: ["intentionally", "purposely", "on purpose"],
        sentence: "She _____ ignored his phone calls.",
        korean: "일부러, 고의로",
        etymology: "From Latin deliberare 'to consider carefully'"
    },
    {
        word: "unthinkable",
        hints: ["inconceivable", "impossible", "unimaginable"],
        sentence: "Such behavior was _____ in the past.",
        korean: "상상도 할 수 없는",
        etymology: "From un- 'not' + thinkable"
    },
    {
        word: "coinage",
        hints: ["new word", "neologism", "invention"],
        sentence: "The term 'blog' is a recent _____ in English.",
        korean: "신조어",
        etymology: "From coin 'to create' + -age"
    },
    {
        word: "obligation",
        hints: ["duty", "responsibility", "commitment"],
        sentence: "Parents have an _____ to care for their children.",
        korean: "의무",
        etymology: "From Latin obligare 'to bind'"
    },
    {
        word: "reconcile",
        hints: ["resolve", "settle", "harmonize"],
        sentence: "The couple decided to _____ their differences.",
        korean: "화해시키다",
        etymology: "From Latin reconciliare 'to bring together again'"
    },
    {
        word: "severe",
        hints: ["harsh", "strict", "extreme"],
        sentence: "The storm caused _____ damage to the coast.",
        korean: "엄한, 심각한",
        etymology: "From Latin severus 'serious, strict'"
    },
    {
        word: "foremost",
        hints: ["leading", "primary", "principal"],
        sentence: "She is the _____ expert in this field.",
        korean: "으뜸가는",
        etymology: "From fore 'before' + most 'greatest'"
    },
    {
        word: "surge",
        hints: ["rise", "increase", "rush"],
        sentence: "There was a sudden _____ in demand for the product.",
        korean: "급증하다",
        etymology: "From Latin surgere 'to rise'"
    },
    {
        word: "hasten",
        hints: ["hurry", "accelerate", "rush"],
        sentence: "We must _____ to complete the project on time.",
        korean: "재촉하다, 서두르다",
        etymology: "From haste + -en 'to make quick'"
    },
    {
        word: "tentatively",
        hints: ["hesitantly", "cautiously", "uncertainly"],
        sentence: "She _____ agreed to the proposal.",
        korean: "머뭇거리며",
        etymology: "From Latin tentare 'to try, test' + -ively"
    },
    {
        word: "scorn",
        hints: ["disdain", "contempt", "ridicule"],
        sentence: "He treated their suggestions with _____.",
        korean: "비웃다, 경멸",
        etymology: "From Old French escarn 'mockery'"
    },
    {
        word: "throughout",
        hints: ["during", "all through", "everywhere in"],
        sentence: "It rained _____ the night.",
        korean: "~동안 내내",
        etymology: "From through + out 'in every part'"
    },
    {
        word: "pitfall",
        hints: ["danger", "trap", "hazard"],
        sentence: "There are many _____ in starting a new business.",
        korean: "위험, 함정",
        etymology: "From pit + fall 'trap for catching animals'"
    },
    {
        word: "coupled with",
        hints: ["combined with", "along with", "together with"],
        sentence: "His talent, _____ hard work, led to success.",
        korean: "~과 결합된",
        etymology: "From couple 'to join' + with"
    },
    {
        word: "huge",
        hints: ["enormous", "vast", "immense"],
        sentence: "The company made a _____ profit last year.",
        korean: "거대한",
        etymology: "From Old French ahuge 'enormous'"
    },
    {
        word: "span",
        hints: ["period", "duration", "extent"],
        sentence: "The bridge has a _____ of 500 meters.",
        korean: "기간, 폭",
        etymology: "From Old English spann 'distance between extended thumb and finger'"
    },
    {
        word: "hollow",
        hints: ["empty", "vacant", "void"],
        sentence: "The tree trunk was completely _____.",
        korean: "속이 빈",
        etymology: "From Old English holh 'cavity'"
    },
    {
        word: "appreciable",
        hints: ["noticeable", "considerable", "significant"],
        sentence: "There has been an _____ improvement in quality.",
        korean: "주목할 만한",
        etymology: "From appreciate + -able 'capable of being perceived'"
    },
    {
        word: "shield",
        hints: ["protect", "guard", "defend"],
        sentence: "Parents try to _____ their children from harm.",
        korean: "보호하다",
        etymology: "From Old English scield 'protection'"
    },
    {
        word: "spearhead",
        hints: ["lead", "pioneer", "initiate"],
        sentence: "She will _____ the new marketing campaign.",
        korean: "앞장서다",
        etymology: "From spear + head 'pointed front of attack'"
    },
    {
        word: "methodically",
        hints: ["systematically", "orderly", "carefully"],
        sentence: "He _____ organized all the documents.",
        korean: "체계적으로",
        etymology: "From Greek methodos 'pursuit of knowledge' + -ically"
    },
    {
        word: "manage to",
        hints: ["succeed in", "accomplish", "achieve"],
        sentence: "Despite the difficulties, we _____ finish on time.",
        korean: "간신히 ~하다",
        etymology: "From Latin manus 'hand' (handle, succeed)"
    }
];

// Also make it available as a global variable for compatibility
if (typeof window !== 'undefined') {
    window.day14Vocabulary = day14Vocabulary;
}

export default day14Vocabulary;