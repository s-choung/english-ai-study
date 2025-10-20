// Day 25 vocabulary data
const day25Vocabulary = [
    {
        word: "inevitable",
        hints: ["unavoidable", "certain", "inescapable"],
        sentence: "Change is _____ in any organization.",
        korean: "불가피한",
        etymology: "From Latin inevitabilis 'unavoidable'"
    },
    {
        word: "consequent",
        hints: ["resultant", "resulting", "eventual", "ensuing"],
        sentence: "The drought and _____ crop failure led to famine.",
        korean: "결과로서 일어나는",
        etymology: "From Latin consequens 'following as a result'"
    },
    {
        word: "decimation",
        hints: ["destruction", "devastation"],
        sentence: "The war caused the _____ of the civilian population.",
        korean: "대량 파괴, 대량 살해",
        etymology: "From Latin decimare 'to take a tenth'"
    },
    {
        word: "evoke",
        hints: ["arouse", "cause", "draw", "produce", "induce"],
        sentence: "The old photographs _____ memories of childhood.",
        korean: "불러일으키다",
        etymology: "From Latin evocare 'to call out'"
    },
    {
        word: "vulnerable",
        hints: ["easily damaged", "susceptible", "weak", "open to attack"],
        sentence: "The city is _____ to flooding during heavy rains.",
        korean: "취약한",
        etymology: "From Latin vulnerare 'to wound'"
    },
    {
        word: "elaborate",
        hints: ["detailed", "more complex", "complicated", "make detail"],
        sentence: "Could you _____ on your proposal?",
        korean: "정교한, 복잡한, 자세히 설명하다",
        etymology: "From Latin elaborare 'to work out'"
    },
    {
        word: "enigmatic",
        hints: ["mysterious", "puzzling"],
        sentence: "The Mona Lisa's smile is famously _____.",
        korean: "불가사의한, 이해할 수 없는",
        etymology: "From Greek ainigma 'riddle'"
    },
    {
        word: "coincide with",
        hints: ["correspond to", "accord with"],
        sentence: "The festival _____ the harvest season.",
        korean: "일치하다",
        etymology: "From Latin co- 'together' + incidere 'to fall upon'"
    },
    {
        word: "seemingly",
        hints: ["apparently", "ostensibly"],
        sentence: "The problem is _____ simple but actually quite complex.",
        korean: "외견상으로, 겉보기에는",
        etymology: "From seem + -ing + -ly 'appearing to be'"
    },
    {
        word: "wrought",
        hints: ["created", "formed", "manufactured"],
        sentence: "The gate was made of _____ iron.",
        korean: "만들어진",
        etymology: "From Old English geworht 'worked, made'"
    },
    {
        word: "obstacle",
        hints: ["barrier", "hindrance", "impediment", "obstruction"],
        sentence: "Lack of funding is a major _____ to progress.",
        korean: "장애물",
        etymology: "From Latin obstaculum 'something standing in the way'"
    },
    {
        word: "lucrative",
        hints: ["profitable", "gainful", "advantageous"],
        sentence: "She found a _____ opportunity in real estate.",
        korean: "수익성이 좋은, 유리한",
        etymology: "From Latin lucrari 'to gain'"
    },
    {
        word: "extensive",
        hints: ["widespread", "large", "wide", "broad", "far-reaching"],
        sentence: "The library has an _____ collection of rare books.",
        korean: "광범위한, 넓은",
        etymology: "From Latin extensus 'stretched out'"
    },
    {
        word: "dampen",
        hints: ["moisten", "wet", "soak", "saturate"],
        sentence: "Rain began to _____ the ground.",
        korean: "적시다",
        etymology: "From damp + -en 'to make wet'"
    },
    {
        word: "opaque",
        hints: ["unclear", "obscure", "impenetrable"],
        sentence: "The _____ glass prevented anyone from seeing inside.",
        korean: "불분명한, (유리·액체등이)불투명한",
        etymology: "From Latin opacus 'shaded, dark'"
    },
    {
        word: "endorse",
        hints: ["support", "subscribe", "back", "advocate", "sign"],
        sentence: "The committee voted to _____ the new policy.",
        korean: "지지하다, 서명(배서)하다",
        etymology: "From Latin in- 'on' + dorsum 'back'"
    },
    {
        word: "advent",
        hints: ["arrival", "coming", "introduction", "appearance"],
        sentence: "The _____ of the internet changed communication forever.",
        korean: "출현, 도래",
        etymology: "From Latin adventus 'arrival'"
    },
    {
        word: "severely",
        hints: ["intensely", "seriously", "sharply"],
        sentence: "The building was _____ damaged by the earthquake.",
        korean: "격렬하게, 심하게",
        etymology: "From Latin severus 'stern, serious'"
    },
    {
        word: "immutable",
        hints: ["unchangeable", "invariable", "unalterable"],
        sentence: "The laws of physics are _____.",
        korean: "불변의",
        etymology: "From Latin immutabilis 'unchangeable'"
    },
    {
        word: "yardstick",
        hints: ["measure", "criterion", "benchmark", "standard"],
        sentence: "Success is often measured by the _____ of wealth.",
        korean: "기준, 척도",
        etymology: "From yard (unit of measure) + stick"
    },
    {
        word: "preserve",
        hints: ["protect", "save", "retain", "maintain", "conserve"],
        sentence: "We must _____ our natural resources for future generations.",
        korean: "보호하다, 보존하다",
        etymology: "From Latin praeservare 'to guard beforehand'"
    },
    {
        word: "conviction",
        hints: ["strong belief", "strong opinion", "faith"],
        sentence: "He spoke with _____ about the importance of education.",
        korean: "(강한) 신념",
        etymology: "From Latin convincere 'to overcome, prove'"
    },
    {
        word: "hallmark",
        hints: ["feature", "distinguishing trait", "sure signal"],
        sentence: "Attention to detail is the _____ of quality craftsmanship.",
        korean: "특징",
        etymology: "From Goldsmiths' Hall in London + mark"
    },
    {
        word: "timid",
        hints: ["shy", "fearful", "cowardly"],
        sentence: "The _____ child hid behind her mother.",
        korean: "소심한, 겁 많은",
        etymology: "From Latin timidus 'fearful'"
    },
    {
        word: "robust",
        hints: ["strong", "vigorous", "healthy", "stalwart"],
        sentence: "The economy showed _____ growth this quarter.",
        korean: "튼튼한, 강한",
        etymology: "From Latin robustus 'strong, firm'"
    },
    {
        word: "discard",
        hints: ["throw away", "abandon", "reject", "dispose of", "cast aside"],
        sentence: "Please _____ any expired food items.",
        korean: "버리다",
        etymology: "From Old French descarter 'to discard'"
    },
    {
        word: "complicated",
        hints: ["complex", "intricate", "elaborate"],
        sentence: "The instructions were too _____ to follow.",
        korean: "복잡한",
        etymology: "From Latin complicare 'to fold together'"
    },
    {
        word: "apart from",
        hints: ["besides", "except for", "excluding"],
        sentence: "_____ a few minor errors, the report was excellent.",
        korean: "~을 제외하고",
        etymology: "From apart + from 'separate from'"
    },
    {
        word: "graduate to",
        hints: ["progress to", "advance to", "proceed to"],
        sentence: "After mastering basics, students _____ more advanced topics.",
        korean: "(더 높은 단계로) 나아가다, 승진하다",
        etymology: "From Latin gradus 'step, degree'"
    },
    {
        word: "demonstrate",
        hints: ["indicate", "show", "manifest"],
        sentence: "The results _____ a clear pattern.",
        korean: "나타내다, 보여주다",
        etymology: "From Latin demonstrare 'to point out'"
    },
    {
        word: "deluxe",
        hints: ["lavish", "luxurious", "opulent", "rich"],
        sentence: "They stayed in a _____ hotel suite.",
        korean: "호화로운",
        etymology: "From French de luxe 'of luxury'"
    },
    {
        word: "dispute",
        hints: ["argue", "contend", "argument", "disagreement", "debate"],
        sentence: "The two countries are in a territorial _____.",
        korean: "논쟁하다, 논쟁",
        etymology: "From Latin disputare 'to discuss, argue'"
    },
    {
        word: "convention",
        hints: ["usually practiced custom", "tradition", "rule"],
        sentence: "It is a social _____ to shake hands when meeting someone.",
        korean: "관례, 관습",
        etymology: "From Latin conventio 'agreement, assembly'"
    },
    {
        word: "rival",
        hints: ["competing", "competitive", "conflicting", "competitor", "antagonist", "opponent", "compete with", "match"],
        sentence: "The two companies are _____ in the smartphone market.",
        korean: "경쟁하는, 경쟁자, ~와 경쟁하다",
        etymology: "From Latin rivalis 'one using the same stream'"
    },
    {
        word: "modulate",
        hints: ["adjust", "regulate", "tune"],
        sentence: "The singer can _____ her voice to fit any genre.",
        korean: "조절하다, 조정하다",
        etymology: "From Latin modulari 'to measure, regulate'"
    },
    {
        word: "universal",
        hints: ["used everywhere", "general"],
        sentence: "The desire for happiness is _____.",
        korean: "전 세계적인, 보편적인",
        etymology: "From Latin universalis 'of the whole'"
    },
    {
        word: "equivalent",
        hints: ["equal", "comparable", "even", "commensurate"],
        sentence: "One kilometer is _____ to 0.62 miles.",
        korean: "동등한, 상응하는",
        etymology: "From Latin aequivalere 'to be equal in value'"
    },
    {
        word: "sparsely",
        hints: ["thinly", "widely scattered"],
        sentence: "The desert region is _____ populated.",
        korean: "드문드문, 밀도가 낮게",
        etymology: "From sparse + -ly 'in a scattered manner'"
    },
    {
        word: "exceed",
        hints: ["go beyond", "surpass", "have a greater number than"],
        sentence: "The project costs _____ the budget.",
        korean: "넘다, 초과하다",
        etymology: "From Latin excedere 'to go beyond'"
    },
    {
        word: "linger",
        hints: ["remain", "stay"],
        sentence: "The smell of coffee _____ in the kitchen.",
        korean: "남다",
        etymology: "From Old English lengan 'to prolong'"
    },
    {
        word: "innovative",
        hints: ["original", "inventive", "creative", "ingenious"],
        sentence: "The company is known for its _____ products.",
        korean: "독창적인",
        etymology: "From Latin innovare 'to renew, alter'"
    },
    {
        word: "antiquity",
        hints: ["ancient times", "distant past"],
        sentence: "These artifacts date back to _____.",
        korean: "고대",
        etymology: "From Latin antiquitas 'ancient times'"
    },
    {
        word: "impending",
        hints: ["approaching", "imminent"],
        sentence: "Dark clouds signaled the _____ storm.",
        korean: "임박한",
        etymology: "From Latin impendere 'to hang over'"
    },
    {
        word: "doctrine",
        hints: ["tenet", "principle", "dogma"],
        sentence: "The religious _____ guides their daily lives.",
        korean: "교리, 원칙",
        etymology: "From Latin doctrina 'teaching, learning'"
    },
    {
        word: "contribute",
        hints: ["donate", "endow", "pitch in with", "conduce"],
        sentence: "Many factors _____ to climate change.",
        korean: "기부하다; 공헌하다",
        etymology: "From Latin contribuere 'to bring together'"
    },
    {
        word: "cease",
        hints: ["stop", "halt", "end", "terminate"],
        sentence: "The fighting _____ after the peace treaty was signed.",
        korean: "멈추다, 끝나다",
        etymology: "From Latin cessare 'to delay, stop'"
    },
    {
        word: "prior to",
        hints: ["before", "previous to", "ahead of"],
        sentence: "_____ the invention of printing, books were handwritten.",
        korean: "~보다 전에",
        etymology: "From Latin prior 'former, earlier'"
    },
    {
        word: "groom",
        hints: ["clean", "tidy"],
        sentence: "The horse was carefully _____ before the show.",
        korean: "(깔끔하게) 다듬다",
        etymology: "From Old English guma 'man, servant'"
    },
    {
        word: "diversity",
        hints: ["variety", "difference"],
        sentence: "The company values _____ in its workforce.",
        korean: "다양성; 차이",
        etymology: "From Latin diversitas 'difference, variety'"
    },
    {
        word: "correlate",
        hints: ["match", "connect", "link"],
        sentence: "Studies _____ exercise with better health.",
        korean: "(서로) 연관시키다",
        etymology: "From cor- 'together' + relate"
    },
    {
        word: "elite",
        hints: ["upper class", "upper crust", "aristocracy", "gentry"],
        sentence: "Only the _____ were invited to the exclusive event.",
        korean: "최상류층",
        etymology: "From French élite 'selection, choice'"
    },
    {
        word: "stratify",
        hints: ["layer"],
        sentence: "Society tends to _____ based on wealth and status.",
        korean: "층을 이루다",
        etymology: "From Latin stratum 'layer' + -fy"
    },
    {
        word: "lessen",
        hints: ["reduce", "abate", "diminish"],
        sentence: "The pain should _____ after taking the medication.",
        korean: "줄이다",
        etymology: "From less + -en 'to make less'"
    },
    {
        word: "upset",
        hints: ["disturb", "agitate", "unsettle", "worry"],
        sentence: "The sudden news _____ her plans for the weekend.",
        korean: "불안하게 하다",
        etymology: "From up- + set 'to disturb'"
    },
    {
        word: "accrete",
        hints: ["come together", "accumulate"],
        sentence: "Dust particles _____ to form planets over millions of years.",
        korean: "하나로 합쳐지다",
        etymology: "From Latin accrescere 'to grow'"
    },
    {
        word: "uninterrupted",
        hints: ["steady", "ceaseless", "incessant"],
        sentence: "The machine ran for 24 hours of _____ operation.",
        korean: "연속적인, 끊임없는",
        etymology: "From un- 'not' + interrupted"
    }
];

// Make it available as a global variable for browser use
if (typeof window !== 'undefined') {
    window.day25Vocabulary = day25Vocabulary;
}

// Support both CommonJS and ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day25Vocabulary;
}
