// Day 27 vocabulary data
const day27Vocabulary = [
    {
        word: "remnant",
        hints: ["leftover", "remains", "trace", "relic"],
        sentence: "Archaeologists found _____ of an ancient civilization.",
        korean: "나머지, 잔존물",
        etymology: "From Latin remanere 'to remain'"
    },
    {
        word: "indispensable",
        hints: ["essential", "necessary", "requisite"],
        sentence: "Adam considered compromise an _____ tool in a federal system.",
        korean: "필수적인",
        etymology: "From Latin indispensabilis 'not able to be dispensed with'"
    },
    {
        word: "undermine",
        hints: ["weaken", "attenuate", "sabotage"],
        sentence: "Lack of trust can _____ a relationship.",
        korean: "악화시키다",
        etymology: "From under + mine 'to dig beneath'"
    },
    {
        word: "fashion",
        hints: ["way", "manner", "mode", "shape", "create", "make"],
        sentence: "Shoppers are asked to line up in an orderly _____ at the checkout counter.",
        korean: "방식, 만들다, 형성하다",
        etymology: "From Latin factio 'a making'"
    },
    {
        word: "prolong",
        hints: ["extend", "lengthen", "protract"],
        sentence: "Richard Nixon was convinced that the antiwar movement _____ the war.",
        korean: "연장하다",
        etymology: "From Latin prolongare 'to lengthen'"
    },
    {
        word: "adequate",
        hints: ["sufficient", "satisfactory", "enough"],
        sentence: "Joseph's research cannot be completed without _____ funding.",
        korean: "충분한",
        etymology: "From Latin adaequatus 'made equal to'"
    },
    {
        word: "halt",
        hints: ["stop", "cease", "end"],
        sentence: "The traffic guard _____ Susan and her friends at the crosswalk until the light turned green.",
        korean: "정지시키다",
        etymology: "From German halten 'to stop, hold'"
    },
    {
        word: "controversial",
        hints: ["debatable", "disputed", "producing disagreement"],
        sentence: "The decision to close the park was _____.",
        korean: "논쟁의 여지가 있는",
        etymology: "From Latin controversia 'dispute'"
    },
    {
        word: "match",
        hints: ["equal", "rival", "parallel", "accord", "harmonize"],
        sentence: "The Australian economy is unable to _____ China's in terms of size and value.",
        korean: "맞먹다, 필적하다, 조화시키다",
        etymology: "From Old English gemæcca 'mate, companion'"
    },
    {
        word: "enduring",
        hints: ["lasting", "surviving", "everlasting", "perpetual"],
        sentence: "Michelangelo's paintings and sculptures had an _____ impact on the art world.",
        korean: "지속되는, 영속적인",
        etymology: "From Latin indurare 'to make hard'"
    },
    {
        word: "restrict",
        hints: ["limit", "confine", "restrain"],
        sentence: "The legislation _____ the sale of soft drinks in cafeterias during school hours.",
        korean: "제한하다",
        etymology: "From Latin restrictus 'drawn back, confined'"
    },
    {
        word: "encompass",
        hints: ["include", "contain", "embrace"],
        sentence: "Hawaii _____ eight major islands and numerous smaller ones.",
        korean: "포함하다",
        etymology: "From en- 'in' + compass 'circle around'"
    },
    {
        word: "consider",
        hints: ["contemplate", "take into account", "think about"],
        sentence: "We need to _____ all options before making a decision.",
        korean: "곰곰이 생각하다, 고려하다",
        etymology: "From Latin considerare 'to examine'"
    },
    {
        word: "integrate",
        hints: ["unite", "unify", "synthesize", "interconnect", "consolidate"],
        sentence: "The company plans to _____ new technology into existing systems.",
        korean: "통합하다",
        etymology: "From Latin integrare 'to make whole'"
    },
    {
        word: "startling",
        hints: ["surprising", "astonishing", "alarming"],
        sentence: "The investigation revealed _____ new evidence.",
        korean: "놀라운",
        etymology: "From startle + -ing 'causing surprise'"
    },
    {
        word: "unaccounted for",
        hints: ["not explained", "unexplained"],
        sentence: "The cause of the explosion at the textile factory is still _____ despite weeks of investigation.",
        korean: "설명되지 않은",
        etymology: "From un- + accounted + for"
    },
    {
        word: "manifest",
        hints: ["indicate", "reveal", "demonstrate", "obvious", "clear", "definite", "evident"],
        sentence: "Heart disease _____ itself with a variety of symptoms, the most common being chest pain and shortness of breath.",
        korean: "나타내다, 명백한",
        etymology: "From Latin manifestus 'clear, evident'"
    },
    {
        word: "fragile",
        hints: ["easily broken", "delicate", "weak"],
        sentence: "Handle the glass carefully as it is extremely _____.",
        korean: "깨지기 쉬운, 약한",
        etymology: "From Latin fragilis 'easily broken'"
    },
    {
        word: "faithful",
        hints: ["accurate", "exact", "precise", "veracious"],
        sentence: "Many studies have shown that witnesses rarely give _____ accounts of accidents or crimes.",
        korean: "(사실 등에) 충실한, 정확한",
        etymology: "From faith + -ful 'full of faith'"
    },
    {
        word: "faith",
        hints: ["conviction", "assurance", "belief"],
        sentence: "She has _____ in her ability to succeed.",
        korean: "확신",
        etymology: "From Latin fides 'trust, belief'"
    },
    {
        word: "concede",
        hints: ["admit", "accept as true", "acknowledge", "grant"],
        sentence: "Since all the evidence contradicted his idea, the scientist _____ that his theory was wrong.",
        korean: "인정하다, 허락하다",
        etymology: "From Latin concedere 'to yield, give way'"
    },
    {
        word: "threaten",
        hints: ["endanger", "menace", "imperil", "jeopardize"],
        sentence: "Excessive logging _____ many animal and plant species in the rainforest.",
        korean: "위태롭게 하다",
        etymology: "From Old English threat 'pressure, coercion'"
    },
    {
        word: "revolutionize",
        hints: ["fundamentally change", "completely change", "transform"],
        sentence: "The internet has _____ the way we communicate.",
        korean: "혁신을 일으키다",
        etymology: "From revolution + -ize 'to cause a revolution in'"
    },
    {
        word: "haphazard",
        hints: ["random", "chance", "casual"],
        sentence: "The books were arranged in a _____ manner.",
        korean: "무계획적인, 우연한",
        etymology: "From hap (luck) + hazard"
    },
    {
        word: "mainstay",
        hints: ["important part", "anchor", "buttress"],
        sentence: "Tourism is the _____ of the local economy.",
        korean: "주요 의지물, 대들보",
        etymology: "From main + stay 'principal support'"
    },
    {
        word: "wholly",
        hints: ["completely", "entirely", "fully", "thoroughly"],
        sentence: "I am _____ in agreement with your proposal.",
        korean: "완전히",
        etymology: "From whole + -ly 'completely'"
    },
    {
        word: "edible",
        hints: ["eatable", "fit to eat", "safe to eat"],
        sentence: "Not all mushrooms are _____, some are poisonous.",
        korean: "먹을 수 있는",
        etymology: "From Latin edibilis 'eatable'"
    },
    {
        word: "legible",
        hints: ["recognizable", "readable", "clear"],
        sentence: "The handwriting was barely _____.",
        korean: "알아볼 수 있는",
        etymology: "From Latin legibilis 'that can be read'"
    },
    {
        word: "scrutinize",
        hints: ["examine", "inspect", "investigate", "probe"],
        sentence: "The auditor will _____ all financial records.",
        korean: "(세밀히) 조사하다",
        etymology: "From Latin scrutari 'to search'"
    },
    {
        word: "in essence",
        hints: ["essentially", "fundamentally", "basically", "in substance"],
        sentence: "_____, the two theories are saying the same thing.",
        korean: "본질적으로",
        etymology: "From essence 'fundamental nature'"
    },
    {
        word: "beneficial",
        hints: ["useful", "helpful", "advantageous", "profitable"],
        sentence: "Exercise is _____ to your health.",
        korean: "유익한",
        etymology: "From Latin beneficium 'kindness, favor'"
    },
    {
        word: "distribute",
        hints: ["parcel out", "spread", "allot", "apportion"],
        sentence: "The organization will _____ food to those in need.",
        korean: "분배하다",
        etymology: "From Latin distribuere 'to divide, distribute'"
    },
    {
        word: "heir",
        hints: ["inheritor", "successor", "beneficiary"],
        sentence: "The prince is the _____ to the throne.",
        korean: "상속인",
        etymology: "From Latin heres 'heir'"
    },
    {
        word: "specifically",
        hints: ["specially", "especially", "particularly"],
        sentence: "The course was designed _____ for beginners.",
        korean: "특별히",
        etymology: "From specific + -ally 'in a particular manner'"
    },
    {
        word: "costly",
        hints: ["expensive", "high priced", "dear"],
        sentence: "The mistake proved to be _____.",
        korean: "돈이 많이 드는",
        etymology: "From cost + -ly 'involving great cost'"
    },
    {
        word: "yield",
        hints: ["produce", "generate", "give", "cede", "surrender", "hand over"],
        sentence: "The investment should _____ good returns.",
        korean: "산출하다, 넘겨주다, 양도하다",
        etymology: "From Old English gieldan 'to pay, repay'"
    },
    {
        word: "channel",
        hints: ["direct", "guide", "convey"],
        sentence: "You should _____ your energy into productive activities.",
        korean: "(관심·노력 등을) 돌리다, 쏟다",
        etymology: "From Latin canalis 'pipe, groove'"
    },
    {
        word: "necessary",
        hints: ["required", "requisite", "essential", "indispensable"],
        sentence: "It is _____ to follow safety procedures.",
        korean: "필요한, 필수의",
        etymology: "From Latin necessarius 'unavoidable'"
    },
    {
        word: "retrospect",
        hints: ["look back", "review", "recollection"],
        sentence: "In _____, we should have acted sooner.",
        korean: "회고하다, 추억하다",
        etymology: "From Latin retrospicere 'to look back'"
    },
    {
        word: "overview",
        hints: ["summary", "outline", "synopsis"],
        sentence: "The report provides an _____ of current market trends.",
        korean: "개요",
        etymology: "From over + view 'general survey'"
    },
    {
        word: "occasional",
        hints: ["infrequent", "sporadic", "intermittent"],
        sentence: "He makes _____ visits to his hometown.",
        korean: "가끔의",
        etymology: "From Latin occasio 'opportunity'"
    },
    {
        word: "respectively",
        hints: ["separately", "individually", "each"],
        sentence: "Gold and silver won first and second place, _____.",
        korean: "각각",
        etymology: "From respective + -ly 'each in turn'"
    },
    {
        word: "entice",
        hints: ["tempt", "allure", "seduce"],
        sentence: "The company uses discounts to _____ customers.",
        korean: "유혹하다",
        etymology: "From Old French enticier 'to provoke'"
    },
    {
        word: "choose",
        hints: ["opt", "select", "pick"],
        sentence: "You can _____ any color you like.",
        korean: "선택하다",
        etymology: "From Old English ceosan 'to choose'"
    },
    {
        word: "work out at",
        hints: ["be calculated at", "amount to"],
        sentence: "The total cost _____ $5000.",
        korean: "계산되다",
        etymology: "From work out 'to calculate'"
    },
    {
        word: "enlist",
        hints: ["enroll", "join", "sign up", "recruit"],
        sentence: "Many young people _____ in the military.",
        korean: "입대하다, (신병을) 모집하다",
        etymology: "From en- + list 'to enroll'"
    },
    {
        word: "diminish",
        hints: ["reduce", "decrease", "lessen", "cut", "abate"],
        sentence: "The pain will _____ over time.",
        korean: "줄이다",
        etymology: "From Latin diminuere 'to make smaller'"
    },
    {
        word: "norm",
        hints: ["rule", "standard", "usual pattern"],
        sentence: "Working from home has become the new _____.",
        korean: "규범",
        etymology: "From Latin norma 'rule, pattern'"
    },
    {
        word: "ostentatious",
        hints: ["showy", "pretentious", "flashy"],
        sentence: "Her _____ display of wealth annoyed her neighbors.",
        korean: "과시하는",
        etymology: "From Latin ostentare 'to display'"
    },
    {
        word: "desert",
        hints: ["abandon", "forsake", "leave"],
        sentence: "The soldier was punished for _____ his post.",
        korean: "(사람·장소 등을) 버리다",
        etymology: "From Latin deserere 'to abandon'"
    },
    {
        word: "dwelling",
        hints: ["living quarters", "habitation", "residence", "home"],
        sentence: "The ancient _____ was well preserved.",
        korean: "거주지",
        etymology: "From Old English dwellan 'to remain'"
    },
    {
        word: "homogenize",
        hints: ["remove variation within", "make uniform"],
        sentence: "The process will _____ the mixture.",
        korean: "동질화하다",
        etymology: "From Greek homogenes 'of the same kind'"
    },
    {
        word: "up",
        hints: ["increase", "raise", "augment", "multiply"],
        sentence: "The store decided to _____ its prices.",
        korean: "(가격 등을) 올리다, 증가시키다",
        etymology: "From Old English up 'to a higher position'"
    },
    {
        word: "displace",
        hints: ["supplant", "replace", "move out of position"],
        sentence: "Digital cameras have _____ film cameras.",
        korean: "대체하다, 옮기다",
        etymology: "From Old French desplacer 'to move from usual place'"
    },
    {
        word: "numerous",
        hints: ["very many", "countless", "innumerable"],
        sentence: "There are _____ reasons for the delay.",
        korean: "매우 많은",
        etymology: "From Latin numerosus 'numerous'"
    },
    {
        word: "discharge",
        hints: ["release", "emit", "excrete"],
        sentence: "The factory _____ waste into the river.",
        korean: "방출하다",
        etymology: "From Old French descharger 'to unload'"
    },
    {
        word: "defend",
        hints: ["guard", "protect", "shield"],
        sentence: "The army was sent to _____ the border.",
        korean: "방어하다, 지키다",
        etymology: "From Latin defendere 'to ward off'"
    },
    {
        word: "compose",
        hints: ["make up", "constitute", "form"],
        sentence: "Women _____ 60% of the workforce.",
        korean: "구성하다",
        etymology: "From Latin componere 'to put together'"
    }
];

// Make it available as a global variable for browser use
if (typeof window !== 'undefined') {
    window.day27Vocabulary = day27Vocabulary;
}

// Support both CommonJS and ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day27Vocabulary;
}
