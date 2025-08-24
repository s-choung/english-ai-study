// Day 13 vocabulary data
const day13Vocabulary = [
    {
        word: "merely",
        hints: ["only", "simply", "just"],
        sentence: "This is _____ the beginning of our journey.",
        korean: "단지",
        etymology: "From Latin merus 'pure, unmixed' + -ly"
    },
    {
        word: "decimate",
        hints: ["destroy", "kill", "devastate"],
        sentence: "The plague would _____ the population of Europe.",
        korean: "죽이다, 대량 파괴하다",
        etymology: "From Latin decimare 'to take a tenth' (kill one in ten)"
    },
    {
        word: "incentive",
        hints: ["motivation", "stimulus", "encouragement"],
        sentence: "The company offers financial _____ for good performance.",
        korean: "동기, 유인",
        etymology: "From Latin incentivus 'setting the tune'"
    },
    {
        word: "retrieve",
        hints: ["recover", "get back", "reclaim"],
        sentence: "I need to _____ my files from the backup drive.",
        korean: "되찾다",
        etymology: "From re- 'again' + Old French trouver 'to find'"
    },
    {
        word: "compress",
        hints: ["squeeze", "condense", "compact"],
        sentence: "The software can _____ large files for easier storage.",
        korean: "압축하다",
        etymology: "From Latin comprimere 'to press together'"
    },
    {
        word: "designate",
        hints: ["appoint", "specify", "assign"],
        sentence: "The board will _____ a new CEO next month.",
        korean: "지정하다, 명시하다",
        etymology: "From Latin designare 'to mark out'"
    },
    {
        word: "dissemination",
        hints: ["spread", "distribution", "circulation"],
        sentence: "The _____ of information is faster in the digital age.",
        korean: "보급, 전파",
        etymology: "From Latin disseminare 'to scatter seed'"
    },
    {
        word: "marked",
        hints: ["noticeable", "pronounced", "distinct"],
        sentence: "There has been a _____ improvement in her grades.",
        korean: "두드러진",
        etymology: "From mark + -ed 'having a distinguishing feature'"
    },
    {
        word: "hypothetical",
        hints: ["theoretical", "supposed", "imaginary"],
        sentence: "Let's consider a _____ situation to illustrate the point.",
        korean: "가상의",
        etymology: "From Greek hypothesis 'foundation, supposition'"
    },
    {
        word: "flow",
        hints: ["stream", "current", "movement"],
        sentence: "The _____ of traffic was heavy during rush hour.",
        korean: "흐름",
        etymology: "From Old English flowan 'to flow'"
    },
    {
        word: "precise",
        hints: ["exact", "accurate", "specific"],
        sentence: "Please give me the _____ measurements for the room.",
        korean: "정확한",
        etymology: "From Latin praecisus 'cut off, definite'"
    },
    {
        word: "stipulate",
        hints: ["require", "specify", "demand"],
        sentence: "The contract will _____ the terms of payment.",
        korean: "규정하다, 요구하다",
        etymology: "From Latin stipulari 'to demand a formal promise'"
    },
    {
        word: "perspective",
        hints: ["viewpoint", "outlook", "angle"],
        sentence: "Try to see the situation from a different _____.",
        korean: "관점",
        etymology: "From Latin perspicere 'to see through'"
    },
    {
        word: "enhance",
        hints: ["improve", "boost", "strengthen"],
        sentence: "Exercise can _____ your mental performance.",
        korean: "향상시키다",
        etymology: "From Old French enhaucier 'to raise, exalt'"
    },
    {
        word: "fundamental",
        hints: ["basic", "essential", "primary"],
        sentence: "Freedom of speech is a _____ human right.",
        korean: "근본적인",
        etymology: "From Latin fundamentum 'foundation'"
    },
    {
        word: "evident",
        hints: ["obvious", "clear", "apparent"],
        sentence: "It was _____ that she had been crying.",
        korean: "분명한",
        etymology: "From Latin evidens 'obvious, apparent'"
    },
    {
        word: "shift",
        hints: ["move", "transfer", "change"],
        sentence: "We need to _____ our focus to the new project.",
        korean: "옮기다, 전환하다",
        etymology: "From Old English sciftan 'to arrange, divide'"
    },
    {
        word: "unique among",
        hints: ["one of a kind in", "distinctive within"],
        sentence: "This species is _____ mammals for its egg-laying ability.",
        korean: "~중에서 유일무이한",
        etymology: "From Latin unicus 'single, sole'"
    },
    {
        word: "full-fledged",
        hints: ["fully developed", "complete", "mature"],
        sentence: "After years of training, she became a _____ doctor.",
        korean: "완전히 발달한",
        etymology: "From full + fledged 'having feathers for flight'"
    },
    {
        word: "laborious",
        hints: ["requiring effort", "arduous", "painstaking"],
        sentence: "Translating the ancient text was a _____ process.",
        korean: "힘든, 인내를 요하는",
        etymology: "From Latin labor 'toil, exertion'"
    },
    {
        word: "emit",
        hints: ["release", "discharge", "give off"],
        sentence: "The factory continues to _____ harmful gases.",
        korean: "내뿜다, 방출하다",
        etymology: "From Latin emittere 'to send out'"
    },
    {
        word: "stunning",
        hints: ["amazing", "striking", "impressive"],
        sentence: "The view from the mountain top was absolutely _____.",
        korean: "놀랄 만큼 멋진",
        etymology: "From stun + -ing 'causing amazement'"
    },
    {
        word: "tantalizing",
        hints: ["tempting", "enticing", "alluring"],
        sentence: "The _____ aroma of fresh bread filled the bakery.",
        korean: "흥미를 돋우는",
        etymology: "From Tantalus (Greek myth) 'to tease with unattainable'"
    },
    {
        word: "abandoned",
        hints: ["deserted", "forsaken", "left behind"],
        sentence: "They explored the _____ house at the edge of town.",
        korean: "버려진",
        etymology: "From Old French abandoner 'to surrender'"
    },
    {
        word: "transmit",
        hints: ["send", "convey", "communicate"],
        sentence: "Radio waves _____ information across vast distances.",
        korean: "전하다, 전송하다",
        etymology: "From Latin transmittere 'to send across'"
    },
    {
        word: "candidly",
        hints: ["frankly", "honestly", "openly"],
        sentence: "She spoke _____ about her mistakes.",
        korean: "솔직히",
        etymology: "From Latin candidus 'white, pure, sincere'"
    },
    {
        word: "compulsorily",
        hints: ["mandatorily", "obligatorily", "by requirement"],
        sentence: "Military service is _____ required in some countries.",
        korean: "의무적으로",
        etymology: "From Latin compellere 'to drive together, force'"
    },
    {
        word: "aid",
        hints: ["help", "assist", "support"],
        sentence: "International organizations provide _____ to disaster victims.",
        korean: "돕다, 원조",
        etymology: "From Latin adjutare 'to help'"
    },
    {
        word: "deliberation",
        hints: ["discussion", "consideration", "debate"],
        sentence: "After much _____, the jury reached a verdict.",
        korean: "숙고, 토의",
        etymology: "From Latin deliberare 'to consider carefully'"
    },
    {
        word: "preposterous",
        hints: ["absurd", "ridiculous", "outrageous"],
        sentence: "The idea that the earth is flat is _____.",
        korean: "터무니없는",
        etymology: "From Latin praeposterus 'reversed, absurd'"
    },
    {
        word: "sparse",
        hints: ["scattered", "thin", "scarce"],
        sentence: "Vegetation is _____ in the desert regions.",
        korean: "드문드문한",
        etymology: "From Latin sparsus 'scattered'"
    },
    {
        word: "occasionally",
        hints: ["sometimes", "periodically", "from time to time"],
        sentence: "I _____ visit my hometown to see old friends.",
        korean: "가끔",
        etymology: "From occasion + -ally 'happening at times'"
    },
    {
        word: "inconceivable",
        hints: ["unthinkable", "unimaginable", "impossible"],
        sentence: "It's _____ that such a mistake could happen twice.",
        korean: "상상도 할 수 없는",
        etymology: "From in- 'not' + conceive 'to think of'"
    },
    {
        word: "breeding",
        hints: ["reproduction", "mating", "propagation"],
        sentence: "Spring is the _____ season for many bird species.",
        korean: "번식",
        etymology: "From Old English bredan 'to produce offspring'"
    },
    {
        word: "overriding",
        hints: ["paramount", "primary", "most important"],
        sentence: "Safety is our _____ concern in this project.",
        korean: "가장 중요한",
        etymology: "From over + ride 'to prevail over'"
    },
    {
        word: "favor",
        hints: ["prefer", "support", "like better"],
        sentence: "Most voters _____ the new tax proposal.",
        korean: "선호하다, 더 좋아하다",
        etymology: "From Latin favere 'to show kindness to'"
    },
    {
        word: "sediment",
        hints: ["deposit", "residue", "settling matter"],
        sentence: "Rivers carry _____ to the ocean.",
        korean: "침전물",
        etymology: "From Latin sedimentum 'a settling'"
    },
    {
        word: "clever",
        hints: ["intelligent", "smart", "ingenious"],
        sentence: "She found a _____ solution to the complex problem.",
        korean: "영리한",
        etymology: "From Middle English 'quick to seize'"
    },
    {
        word: "consistently",
        hints: ["regularly", "steadily", "uniformly"],
        sentence: "She _____ arrives at work ten minutes early.",
        korean: "일관되게",
        etymology: "From consistent + -ly 'in a steady manner'"
    },
    {
        word: "rate",
        hints: ["evaluate", "assess", "judge"],
        sentence: "Critics _____ this as one of the year's best films.",
        korean: "평가하다",
        etymology: "From Latin rata 'reckoned, calculated'"
    },
    {
        word: "predominate",
        hints: ["prevail", "dominate", "be most common"],
        sentence: "Oak trees _____ in this forest.",
        korean: "우세하다",
        etymology: "From Latin prae 'before' + dominari 'to rule'"
    },
    {
        word: "realize",
        hints: ["understand", "recognize", "become aware of"],
        sentence: "I didn't _____ how late it was.",
        korean: "깨닫다",
        etymology: "From real + -ize 'to make real, understand'"
    },
    {
        word: "circuitous",
        hints: ["indirect", "roundabout", "winding"],
        sentence: "We took a _____ route to avoid the traffic.",
        korean: "우회하는",
        etymology: "From Latin circuitus 'a going around'"
    },
    {
        word: "owing to",
        hints: ["because of", "due to", "as a result of"],
        sentence: "The game was cancelled _____ bad weather.",
        korean: "~때문에",
        etymology: "From owe 'to be indebted' + to"
    },
    {
        word: "model",
        hints: ["example", "pattern", "prototype"],
        sentence: "This school serves as a _____ for educational reform.",
        korean: "모범, 견본",
        etymology: "From Latin modulus 'small measure, standard'"
    },
    {
        word: "with respect to",
        hints: ["regarding", "concerning", "about"],
        sentence: "I have some questions _____ your proposal.",
        korean: "~에 관하여",
        etymology: "From respect 'relation, reference'"
    },
    {
        word: "continuous",
        hints: ["uninterrupted", "ongoing", "constant"],
        sentence: "The machine requires _____ monitoring.",
        korean: "계속되는",
        etymology: "From Latin continuus 'uninterrupted'"
    },
    {
        word: "collaborate",
        hints: ["cooperate", "work together", "team up"],
        sentence: "The two companies will _____ on the new project.",
        korean: "협력하다",
        etymology: "From Latin col- 'together' + laborare 'to work'"
    },
    {
        word: "anonymous",
        hints: ["unnamed", "unidentified", "nameless"],
        sentence: "The donation was made by an _____ benefactor.",
        korean: "익명의",
        etymology: "From Greek anonymos 'without name'"
    },
    {
        word: "somewhat",
        hints: ["rather", "fairly", "to some degree"],
        sentence: "I'm _____ concerned about the test results.",
        korean: "어느 정도, 다소",
        etymology: "From some + what 'to some extent'"
    },
    {
        word: "damaging",
        hints: ["harmful", "destructive", "injurious"],
        sentence: "Smoking has _____ effects on your health.",
        korean: "해로운",
        etymology: "From damage + -ing 'causing harm'"
    },
    {
        word: "dramatically",
        hints: ["significantly", "remarkably", "strikingly"],
        sentence: "Prices have increased _____ over the past year.",
        korean: "극적으로",
        etymology: "From dramatic + -ally 'in a striking manner'"
    },
    {
        word: "heighten",
        hints: ["intensify", "increase", "amplify"],
        sentence: "The crisis served to _____ public awareness.",
        korean: "고조시키다",
        etymology: "From height + -en 'to make higher'"
    },
    {
        word: "share",
        hints: ["portion", "part", "quota"],
        sentence: "Everyone should pay their fair _____ of taxes.",
        korean: "몫, 부분",
        etymology: "From Old English scearu 'a cutting, division'"
    },
    {
        word: "shortly",
        hints: ["soon", "in a little while", "before long"],
        sentence: "The meeting will begin _____.",
        korean: "곧",
        etymology: "From short + -ly 'in a brief time'"
    },
    {
        word: "besides",
        hints: ["in addition to", "moreover", "furthermore"],
        sentence: "_____ being expensive, the car is also unreliable.",
        korean: "게다가, ~외에",
        etymology: "From beside + -s 'in addition to'"
    },
    {
        word: "seep",
        hints: ["leak", "ooze", "trickle"],
        sentence: "Water began to _____ through the cracks.",
        korean: "스며 나오다",
        etymology: "From Old English sipian 'to soak through'"
    },
    {
        word: "habit",
        hints: ["custom", "routine", "practice"],
        sentence: "Reading before bed is a good _____ to develop.",
        korean: "습관",
        etymology: "From Latin habitus 'condition, appearance'"
    }
];

// Also make it available as a global variable for compatibility
if (typeof window !== 'undefined') {
    window.day13Vocabulary = day13Vocabulary;
}

export default day13Vocabulary;