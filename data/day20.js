// Day 20 vocabulary data
const day20Vocabulary = [
    {
        word: "harness",
        hints: ["utilize", "put to use", "employ"],
        sentence: "Scientists hope to _____ solar energy more efficiently.",
        korean: "(자연의 힘 등을) 이용하다",
        etymology: "Old French 'harneis' (armor) = put equipment to use"
    },
    {
        word: "prestige",
        hints: ["high regard", "status"],
        sentence: "The university has great _____ in academic circles.",
        korean: "명성, 위신",
        etymology: "Latin 'praestigiae' (illusions) = impressive reputation"
    },
    {
        word: "radically",
        hints: ["extremely", "completely", "essentially"],
        sentence: "The new technology will _____ change how we work.",
        korean: "철저하게; 근본적으로",
        etymology: "Latin 'radix' (root) + -ly = from the root, fundamentally"
    },
    {
        word: "exhibit",
        hints: ["show", "display", "present", "demonstrate", "set forth"],
        sentence: "The patient began to _____ symptoms of the disease.",
        korean: "보이다, 나타내다",
        etymology: "Latin 'ex' (out) + 'habere' (hold) = hold out for viewing"
    },
    {
        word: "deposit",
        hints: ["lay", "place", "lay down", "set down", "leave behind"],
        sentence: "Please _____ your luggage in the designated area.",
        korean: "놓다, 두다",
        etymology: "Latin 'de' (down) + 'ponere' (place) = place down"
    },
    {
        word: "shatter",
        hints: ["break", "destroy", "smash"],
        sentence: "The loud noise will _____ the peaceful atmosphere.",
        korean: "산산이 부수다",
        etymology: "Middle English 'schateren' (scatter) = break into pieces"
    },
    {
        word: "barren",
        hints: ["infertile", "sterile", "lifeless", "unable to sustain life"],
        sentence: "The _____ desert landscape stretched for miles.",
        korean: "척박한, 불모의",
        etymology: "Old French 'baraigne' (sterile) = unable to produce"
    },
    {
        word: "consent",
        hints: ["agree", "assent"],
        sentence: "All parties must _____ to the new agreement.",
        korean: "동의하다",
        etymology: "Latin 'con' (together) + 'sentire' (feel) = feel together"
    },
    {
        word: "give rise to",
        hints: ["cause", "produce", "provoke", "bring about"],
        sentence: "Poor planning can _____ serious problems later.",
        korean: "~을 초래하다",
        etymology: "Give (cause) + rise (emergence) = cause to emerge"
    },
    {
        word: "size up",
        hints: ["evaluate", "measure", "assess", "appraise"],
        sentence: "The detective tried to _____ the suspect carefully.",
        korean: "평가하다",
        etymology: "Size (measure) + up = measure and evaluate"
    },
    {
        word: "mimic",
        hints: ["imitate", "copy", "reproduce"],
        sentence: "Children often _____ their parents' behavior.",
        korean: "흉내 내다, 모방하다",
        etymology: "Latin 'mimicus' (of mime) = imitate like an actor"
    },
    {
        word: "contiguous",
        hints: ["neighboring", "adjacent", "adjoining"],
        sentence: "The two _____ properties share a common fence.",
        korean: "인접한",
        etymology: "Latin 'con' (together) + 'tangere' (touch) = touching together"
    },
    {
        word: "engage",
        hints: ["involve", "reserve", "book", "hire"],
        sentence: "The company will _____ a consultant for this project.",
        korean: "참여시키다, (대화 등에) 끌어들이다, (방, 좌석등을) 예약하다, 고용하다",
        etymology: "Old French 'engager' (pledge) = bind by pledge"
    },
    {
        word: "initial",
        hints: ["first", "original", "earliest"],
        sentence: "The _____ response to the product was very positive.",
        korean: "최초의",
        etymology: "Latin 'initialis' (beginning) = at the beginning"
    },
    {
        word: "essential",
        hints: ["fundamental", "indispensable", "required"],
        sentence: "Water is _____ for all forms of life.",
        korean: "근본적인, 필수적인",
        etymology: "Late Latin 'essentialis' (of essence) = of fundamental nature"
    },
    {
        word: "pertinent",
        hints: ["relevant", "related", "germane"],
        sentence: "Please provide only _____ information for the report.",
        korean: "관련된",
        etymology: "Latin 'pertinere' (reach to) = having connection"
    },
    {
        word: "traumatic",
        hints: ["highly stressful", "upsetting", "disturbing"],
        sentence: "The accident was a _____ experience for everyone.",
        korean: "정신적 충격이 큰",
        etymology: "Greek 'trauma' (wound) = causing psychological wound"
    },
    {
        word: "on the whole",
        hints: ["in general", "generally", "overall", "by and large"],
        sentence: "_____, the project was considered a success.",
        korean: "대체로",
        etymology: "On (regarding) + whole (entirety) = considering everything"
    },
    {
        word: "dispersal",
        hints: ["distribution", "scattering"],
        sentence: "The _____ of seeds helps plants spread to new areas.",
        korean: "확산, 분산",
        etymology: "Latin 'dis' (apart) + 'spargere' (scatter) = scatter apart"
    },
    {
        word: "sought-after",
        hints: ["desired", "desirable", "in demand"],
        sentence: "She is a _____ expert in environmental science.",
        korean: "수요가 많은, 인기 있는",
        etymology: "Sought (past of seek) + after = much desired"
    },
    {
        word: "expand",
        hints: ["enlarge", "increase", "swell", "bloat"],
        sentence: "The company plans to _____ into international markets.",
        korean: "확장시키다, 확장하다",
        etymology: "Latin 'ex' (out) + 'pandere' (spread) = spread out"
    },
    {
        word: "mastery",
        hints: ["control", "expertise"],
        sentence: "Her _____ of the piano is truly impressive.",
        korean: "통제력, 지배, 전문적 지식",
        etymology: "Old French 'maistrie' (dominance) = having control or skill"
    },
    {
        word: "perpetually",
        hints: ["continually", "incessantly", "ceaselessly"],
        sentence: "The machine runs _____ without stopping.",
        korean: "끊임없이",
        etymology: "Latin 'perpetuus' (continuous) + -ly = continuously"
    },
    {
        word: "evacuate",
        hints: ["move out"],
        sentence: "Residents must _____ the area before the hurricane hits.",
        korean: "대피하다, 비우고 떠나다",
        etymology: "Latin 'e' (out) + 'vacuus' (empty) = make empty"
    },
    {
        word: "excrete",
        hints: ["expel", "discharge", "eject"],
        sentence: "The kidneys _____ waste products from the blood.",
        korean: "배설하다, 방출하다",
        etymology: "Latin 'ex' (out) + 'crescere' (grow) = separate out"
    },
    {
        word: "gradually",
        hints: ["slowly", "little by little"],
        sentence: "The patient's condition improved _____ over time.",
        korean: "서서히",
        etymology: "Latin 'gradus' (step) + -ly = step by step"
    },
    {
        word: "affluent",
        hints: ["plentiful", "abundant", "wealthy", "rich", "well-off"],
        sentence: "The _____ neighborhood has large, expensive homes.",
        korean: "풍부한, 부유한",
        etymology: "Latin 'ad' (to) + 'fluere' (flow) = flowing toward"
    },
    {
        word: "stationary",
        hints: ["unmoving", "motionless", "immobile"],
        sentence: "The car remained _____ while the engine warmed up.",
        korean: "움직이지 않는",
        etymology: "Latin 'stationarius' (of a post) = remaining in place"
    },
    {
        word: "cling to",
        hints: ["stick to", "hold tightly", "adhere to"],
        sentence: "Children often _____ their parents in new situations.",
        korean: "~에 달라붙다",
        etymology: "Old English 'clingan' (stick) = hold fast to"
    },
    {
        word: "endow",
        hints: ["donate", "grant", "provide", "endue"],
        sentence: "The wealthy businessman will _____ a scholarship fund.",
        korean: "기부하다, (능력, 재능 등을) 부여하다",
        etymology: "Old French 'endouer' (provide) = provide with gift"
    },
    {
        word: "verging on",
        hints: ["bordering on"],
        sentence: "His enthusiasm was _____ fanaticism at times.",
        korean: "~에 가까운, 거의 ~인",
        etymology: "Latin 'vergere' (incline) = approaching border of"
    },
    {
        word: "contemptuous",
        hints: ["scornful", "disdainful"],
        sentence: "She gave him a _____ look after his rude comment.",
        korean: "업신여기는",
        etymology: "Latin 'contemptus' (despised) = showing disdain"
    },
    {
        word: "accelerate",
        hints: ["increase in speed", "speed up"],
        sentence: "The car began to _____ as it entered the highway.",
        korean: "속도를 높이다",
        etymology: "Latin 'ad' (to) + 'celer' (swift) = make swifter"
    },
    {
        word: "confirm",
        hints: ["ascertain", "verify"],
        sentence: "Please _____ your attendance at tomorrow's meeting.",
        korean: "확인하다",
        etymology: "Latin 'con' (together) + 'firmare' (strengthen) = make firm"
    },
    {
        word: "harsh",
        hints: ["severe", "rigorous", "inclement"],
        sentence: "The _____ winter conditions made travel difficult.",
        korean: "가혹한",
        etymology: "Middle English 'harsk' (rough) = unpleasantly rough"
    },
    {
        word: "mere subsistence",
        hints: ["basic living necessaries"],
        sentence: "Many families live on _____ in developing countries.",
        korean: "최저 생계 수단, 생필품",
        etymology: "Mere (only) + subsistence (basic living) = bare survival"
    },
    {
        word: "adherent",
        hints: ["supporter", "advocate"],
        sentence: "She is a strong _____ of environmental protection.",
        korean: "지지자",
        etymology: "Latin 'adhaerere' (stick to) = one who sticks to belief"
    },
    {
        word: "invaluable",
        hints: ["precious", "priceless", "valuable"],
        sentence: "Her experience proved _____ to the team's success.",
        korean: "매우 귀중한",
        etymology: "In- (not) + valuable = beyond value"
    },
    {
        word: "successive",
        hints: ["sequential", "consecutive", "serial"],
        sentence: "The team won five _____ championships.",
        korean: "연속적인",
        etymology: "Latin 'succedere' (follow after) = following in order"
    },
    {
        word: "coating",
        hints: ["layer", "film"],
        sentence: "The metal has a protective _____ to prevent rust.",
        korean: "코팅, 칠, 입힌 것",
        etymology: "Coat (cover) + -ing = covering layer"
    },
    {
        word: "resume",
        hints: ["restart", "begin again", "recommence"],
        sentence: "We will _____ the meeting after a short break.",
        korean: "다시 시작하다",
        etymology: "Latin 're' (again) + 'sumere' (take) = take up again"
    },
    {
        word: "dual",
        hints: ["double", "twofold"],
        sentence: "The device has a _____ purpose for work and entertainment.",
        korean: "이중의",
        etymology: "Latin 'dualis' (of two) = having two parts"
    },
    {
        word: "composite",
        hints: ["mixture", "compound"],
        sentence: "The new material is a _____ of plastic and metal.",
        korean: "합성물",
        etymology: "Latin 'com' (together) + 'ponere' (place) = placed together"
    },
    {
        word: "illuminate",
        hints: ["light", "brighten", "clarify"],
        sentence: "The streetlights _____ the dark pathway.",
        korean: "밝게 하다; 명확하게 하다",
        etymology: "Latin 'in' (in) + 'lumen' (light) = fill with light"
    },
    {
        word: "allure",
        hints: ["attract", "invite", "appeal", "lure"],
        sentence: "The exotic destination will _____ many tourists.",
        korean: "매혹하다",
        etymology: "Old French 'alurer' (attract) = draw by attraction"
    },
    {
        word: "rekindle",
        hints: ["renew", "arouse", "reawaken"],
        sentence: "The reunion helped _____ their old friendship.",
        korean: "다시 불붙이다, 되살아나게 하다",
        etymology: "Re- (again) + kindle (ignite) = ignite again"
    },
    {
        word: "devastation",
        hints: ["destruction", "demolition", "ruin"],
        sentence: "The earthquake caused widespread _____ in the city.",
        korean: "파괴",
        etymology: "Latin 'de' (completely) + 'vastare' (lay waste) = complete destruction"
    },
    {
        word: "tentative",
        hints: ["uncertain", "unsure"],
        sentence: "We made _____ plans for the weekend trip.",
        korean: "망설이는, 불확실한",
        etymology: "Latin 'tentare' (try) = done by trial"
    },
    {
        word: "suppose",
        hints: ["assume", "presume", "surmise"],
        sentence: "I _____ the meeting will start on time.",
        korean: "추측하다",
        etymology: "Old French 'supposer' (assume) = place under as basis"
    },
    {
        word: "primitive",
        hints: ["early", "primeval", "simple", "rudimentary"],
        sentence: "The _____ tools were made from stone and wood.",
        korean: "초기의, 발달되지 않은",
        etymology: "Latin 'primus' (first) = of earliest time"
    },
    {
        word: "interrupt",
        hints: ["break off"],
        sentence: "Please don't _____ while someone else is speaking.",
        korean: "중단시키다",
        etymology: "Latin 'inter' (between) + 'rumpere' (break) = break between"
    },
    {
        word: "conform",
        hints: ["comply", "obey", "follow"],
        sentence: "All students must _____ to the dress code policy.",
        korean: "따르다",
        etymology: "Latin 'con' (together) + 'forma' (shape) = shape together"
    },
    {
        word: "combine",
        hints: ["incorporate", "mix", "unite"],
        sentence: "We should _____ our efforts to achieve better results.",
        korean: "결합시키다",
        etymology: "Late Latin 'combinare' (two by two) = join together"
    },
    {
        word: "terminal",
        hints: ["final", "last"],
        sentence: "The patient is in the _____ stage of the illness.",
        korean: "마지막의",
        etymology: "Latin 'terminus' (boundary) = at the end"
    },
    {
        word: "point out",
        hints: ["state", "indicate", "show"],
        sentence: "Let me _____ the main advantages of this approach.",
        korean: "지적하다, 언급하다",
        etymology: "Point (direct attention) + out = direct attention to"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day20Vocabulary;
} else {
    window.day20Vocabulary = day20Vocabulary;
}