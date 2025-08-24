// Day 11 vocabulary data
const day11Vocabulary = [
    {
        word: "plausible",
        hints: ["possible", "believable", "likely", "probable"],
        sentence: "His explanation seemed _____ until we checked the facts.",
        korean: "그럴듯한",
        etymology: "From Latin plausibilis 'worthy of approval' (from plaudere 'to clap')"
    },
    {
        word: "transform",
        hints: ["convert", "change", "alter"],
        sentence: "Technology can _____ the way we live and work.",
        korean: "변형시키다, 바꾸다",
        etymology: "From Latin trans 'across' + formare 'to form'"
    },
    {
        word: "counterpart",
        hints: ["complement", "equivalent"],
        sentence: "The Japanese company met with its American _____ to discuss the merger.",
        korean: "(쌍을 이루는) 한쪽; 동등한 것",
        etymology: "From counter 'opposite' + part 'portion'"
    },
    {
        word: "nevertheless",
        hints: ["in spite of that", "however", "still", "yet", "nonetheless"],
        sentence: "The weather was terrible; _____, we decided to go hiking.",
        korean: "그럼에도 불구하고",
        etymology: "From never + the + less 'not any the less'"
    },
    {
        word: "pronounced",
        hints: ["notable", "striking", "marked", "significant", "noticeable", "distinct", "strong"],
        sentence: "There was a _____ difference in quality between the two products.",
        korean: "현저한 (뚜렷이 드러나다)",
        etymology: "From Latin pronuntiare 'to proclaim publicly'"
    },
    {
        word: "celebrated",
        hints: ["famous", "renowned", "well-known"],
        sentence: "The museum features works by _____ artists from around the world.",
        korean: "유명한",
        etymology: "From Latin celebrare 'to honor, frequented by crowds'"
    },
    {
        word: "exceedingly",
        hints: ["highly", "extremely", "excessively", "hugely"],
        sentence: "The test was _____ difficult, and few students passed.",
        korean: "대단히",
        etymology: "From exceed + -ingly 'going beyond normal limits'"
    },
    {
        word: "chancy",
        hints: ["risky", "perilous", "dangerous"],
        sentence: "Investing all your money in one stock is a _____ decision.",
        korean: "위험한",
        etymology: "From chance + -y 'dependent on chance'"
    },
    {
        word: "vertical",
        hints: ["upright", "up-and-down", "erect"],
        sentence: "The climbers faced a nearly _____ rock face.",
        korean: "수직의",
        etymology: "From Latin vertex 'highest point, summit'"
    },
    {
        word: "persist",
        hints: ["continue", "last", "endure", "remain"],
        sentence: "If symptoms _____ for more than a week, see a doctor.",
        korean: "지속되다",
        etymology: "From Latin persistere 'to continue steadfastly'"
    },
    {
        word: "magnitude",
        hints: ["extent", "size", "degree", "measure", "amount"],
        sentence: "Scientists measured the _____ of the earthquake.",
        korean: "규모, 정도",
        etymology: "From Latin magnus 'great' + -tude 'state of'"
    },
    {
        word: "discern",
        hints: ["identify", "detect", "distinguish"],
        sentence: "It was difficult to _____ the truth from all the rumors.",
        korean: "파악하다, 알아내다",
        etymology: "From Latin discernere 'to separate, distinguish'"
    },
    {
        word: "generate",
        hints: ["produce", "create"],
        sentence: "Solar panels _____ electricity from sunlight.",
        korean: "만들어 내다",
        etymology: "From Latin generare 'to beget, produce'"
    },
    {
        word: "eccentric",
        hints: ["unusual", "bizarre", "peculiar", "odd"],
        sentence: "The _____ millionaire lived alone in a castle with 50 cats.",
        korean: "별난, 특이한",
        etymology: "From Greek ekkentros 'out of center'"
    },
    {
        word: "alternative",
        hints: ["substitute", "different", "choice", "option"],
        sentence: "We need to find an _____ solution to this problem.",
        korean: "대안이 되는; 대안",
        etymology: "From Latin alternare 'to do by turns'"
    },
    {
        word: "strategy",
        hints: ["plan", "method", "scheme"],
        sentence: "The company developed a new marketing _____ to increase sales.",
        korean: "전략, 방법",
        etymology: "From Greek strategia 'generalship, command'"
    },
    {
        word: "refine",
        hints: ["improve", "perfect"],
        sentence: "The chef continues to _____ her recipes.",
        korean: "개선하다",
        etymology: "From re- 'again' + fine 'make pure'"
    },
    {
        word: "precious",
        hints: ["valuable", "dear", "priceless"],
        sentence: "Time is _____ and should not be wasted.",
        korean: "귀중한",
        etymology: "From Latin pretiosus 'of great value'"
    },
    {
        word: "subtle",
        hints: ["hard to recognize", "hardly perceived", "slight"],
        sentence: "There was a _____ hint of garlic in the sauce.",
        korean: "미묘한, 감지하기 어려운",
        etymology: "From Latin subtilis 'fine, delicate'"
    },
    {
        word: "conducive to",
        hints: ["favorable to", "helpful for", "beneficial to"],
        sentence: "A quiet environment is _____ studying.",
        korean: "~에 도움이 되는",
        etymology: "From Latin conducere 'to lead together'"
    },
    {
        word: "preoccupied with",
        hints: ["concentrated on", "absorbed in", "immersed in"],
        sentence: "She was so _____ her work that she forgot to eat lunch.",
        korean: "~에 몰두한",
        etymology: "From pre- 'before' + occupy 'to seize'"
    },
    {
        word: "swift",
        hints: ["quick", "speedy", "fleet"],
        sentence: "The company made a _____ decision to enter the new market.",
        korean: "재빠른",
        etymology: "From Old English 'moving quickly'"
    },
    {
        word: "menace",
        hints: ["threaten", "intimidate", "frighten"],
        sentence: "The storm clouds began to _____ the coastal towns.",
        korean: "위협하다",
        etymology: "From Latin minari 'to threaten'"
    },
    {
        word: "akin to",
        hints: ["similar to", "like"],
        sentence: "Her writing style is _____ that of Virginia Woolf.",
        korean: "~과 유사한",
        etymology: "From a- 'of' + kin 'family, related'"
    },
    {
        word: "expend",
        hints: ["use", "use up", "spend", "consume"],
        sentence: "Athletes _____ enormous amounts of energy during competition.",
        korean: "(시간/에너지 등을) 쓰다",
        etymology: "From Latin expendere 'to weigh out, pay'"
    },
    {
        word: "belittle",
        hints: ["disregard", "underestimate"],
        sentence: "Don't _____ your achievements; you worked hard for them.",
        korean: "경시하다",
        etymology: "From be- 'cause to be' + little 'small'"
    },
    {
        word: "commend",
        hints: ["admire", "praise", "compliment"],
        sentence: "The manager will _____ employees for their excellent work.",
        korean: "칭찬하다",
        etymology: "From Latin commendare 'to entrust, praise'"
    },
    {
        word: "sue",
        hints: ["take a strong legal action against", "charge"],
        sentence: "The company decided to _____ for breach of contract.",
        korean: "고소하다",
        etymology: "From Latin sequi 'to follow' (pursue in court)"
    },
    {
        word: "innovation",
        hints: ["new development", "novelty", "new idea"],
        sentence: "The smartphone was a major _____ in communication technology.",
        korean: "혁신, 새로 도입된 것",
        etymology: "From Latin innovare 'to renew, alter'"
    },
    {
        word: "fragmentation",
        hints: ["destruction", "disintegration", "disruption"],
        sentence: "The _____ of the empire led to centuries of conflict.",
        korean: "붕괴, 분열",
        etymology: "From Latin fragmentum 'a piece broken off'"
    },
    {
        word: "mainly",
        hints: ["principally", "generally", "primarily", "chiefly"],
        sentence: "The restaurant serves _____ Italian food.",
        korean: "주로",
        etymology: "From main + -ly 'in a principal manner'"
    },
    {
        word: "sufficient",
        hints: ["enough", "adequate", "ample"],
        sentence: "Do we have _____ funds to complete the project?",
        korean: "충분한",
        etymology: "From Latin sufficere 'to supply, suffice'"
    },
    {
        word: "abnormally",
        hints: ["unusually", "oddly", "exceptionally", "atypically"],
        sentence: "The patient's heart rate was _____ high.",
        korean: "이례적으로, 이상하게",
        etymology: "From ab- 'away from' + normal + -ly"
    },
    {
        word: "barrier",
        hints: ["bar", "obstacle", "obstruction"],
        sentence: "Language can be a _____ to international business.",
        korean: "장애물, 장벽",
        etymology: "From Old French barriere 'obstacle, gatekeeper'"
    },
    {
        word: "gigantic",
        hints: ["huge", "immense", "colossal"],
        sentence: "The company built a _____ warehouse outside the city.",
        korean: "거대한",
        etymology: "From Greek gigas 'giant' + -ic"
    },
    {
        word: "reproduce",
        hints: ["copy", "duplicate", "imitate", "breed", "multiply", "propagate"],
        sentence: "Scientists can now _____ the conditions of early Earth.",
        korean: "복제하다, 번식하다",
        etymology: "From re- 'again' + produce 'bring forth'"
    },
    {
        word: "allow",
        hints: ["enable", "permit", "let"],
        sentence: "The new policy will _____ employees to work from home.",
        korean: "허락하다",
        etymology: "From Old French alouer 'approve, sanction'"
    },
    {
        word: "penetrate",
        hints: ["pierce", "go through", "enter"],
        sentence: "Sunlight could barely _____ the thick forest canopy.",
        korean: "꿰뚫다",
        etymology: "From Latin penetrare 'to put into, enter'"
    },
    {
        word: "device",
        hints: ["mechanism", "apparatus", "appliance"],
        sentence: "This _____ can measure air quality in real-time.",
        korean: "장치, 기구",
        etymology: "From Latin divisus 'divided, separated' (plan, scheme)"
    },
    {
        word: "divergent",
        hints: ["varying", "different", "dissimilar"],
        sentence: "The committee members had _____ opinions on the issue.",
        korean: "(의견 등이) 다른, 갈라지는",
        etymology: "From Latin divergere 'to go in different directions'"
    },
    {
        word: "flaw",
        hints: ["defect", "fault", "blemish", "shortcoming"],
        sentence: "The inspector found a serious _____ in the building's design.",
        korean: "결점",
        etymology: "From Old Norse flaga 'stone slab' (crack in stone)"
    },
    {
        word: "buffer",
        hints: ["protect", "cushion"],
        sentence: "Trees can _____ homes from strong winds.",
        korean: "보호하다, 완화하다",
        etymology: "From buff 'to strike' (something that lessens shock)"
    },
    {
        word: "refute",
        hints: ["disprove", "rebut", "prove false"],
        sentence: "The scientist was able to _____ the outdated theory.",
        korean: "논박하다",
        etymology: "From Latin refutare 'to repel, rebut'"
    },
    {
        word: "domestic",
        hints: ["household", "home", "family"],
        sentence: "The company focuses on _____ markets rather than international ones.",
        korean: "가정의",
        etymology: "From Latin domus 'house'"
    },
    {
        word: "on the spur of the moment",
        hints: ["without planning", "on impulse"],
        sentence: "We decided to go to the beach _____.",
        korean: "충동적으로",
        etymology: "From spur 'stimulus' + moment 'instant'"
    },
    {
        word: "temperate",
        hints: ["moderate", "mild", "clement"],
        sentence: "The region enjoys a _____ climate year-round.",
        korean: "(기후 등이) 온화한",
        etymology: "From Latin temperare 'to moderate, restrain'"
    },
    {
        word: "consistent with",
        hints: ["in agreement with", "congruent with"],
        sentence: "Your actions should be _____ your words.",
        korean: "~과 일치하는",
        etymology: "From Latin consistere 'to stand firm together'"
    },
    {
        word: "splendor",
        hints: ["magnificence", "grandeur", "majesty"],
        sentence: "The palace was restored to its former _____.",
        korean: "장려함, 화려함",
        etymology: "From Latin splendere 'to shine brightly'"
    },
    {
        word: "prosper",
        hints: ["succeed", "flourish", "thrive"],
        sentence: "Small businesses can _____ with the right support.",
        korean: "번창하다, 성공하다",
        etymology: "From Latin prosperare 'to cause to succeed'"
    },
    {
        word: "brew",
        hints: ["develop", "loom", "be on the way"],
        sentence: "A storm appears to be _____ on the horizon.",
        korean: "일어나려고 하다",
        etymology: "From Old English breowan 'to brew, prepare'"
    },
    {
        word: "persevere",
        hints: ["continue", "carry on", "persist"],
        sentence: "You must _____ through difficulties to achieve success.",
        korean: "인내하며 계속하다",
        etymology: "From Latin perseverare 'to continue steadfastly'"
    },
    {
        word: "bias",
        hints: ["prejudice"],
        sentence: "The study was conducted without _____ toward any group.",
        korean: "편견",
        etymology: "From French biais 'slant, oblique'"
    },
    {
        word: "administer",
        hints: ["manage", "supervise", "conduct", "give", "provide"],
        sentence: "The nurse will _____ the medication twice daily.",
        korean: "관리하다, (약 등을) 주다",
        etymology: "From Latin administrare 'to assist, manage'"
    },
    {
        word: "groundless",
        hints: ["unfounded", "baseless"],
        sentence: "Their fears proved to be completely _____.",
        korean: "근거 없는",
        etymology: "From ground + -less 'without foundation'"
    },
    {
        word: "arouse",
        hints: ["stimulate", "provoke", "incite"],
        sentence: "The mysterious letter began to _____ her curiosity.",
        korean: "자극하다",
        etymology: "From a- 'to' + rouse 'to stir up'"
    },
    {
        word: "occupy",
        hints: ["engross", "engage", "absorb"],
        sentence: "Work tends to _____ most of my time during the week.",
        korean: "(주의, 마음을) 끌다",
        etymology: "From Latin occupare 'to seize, take possession'"
    },
    {
        word: "virtual",
        hints: ["almost", "complete"],
        sentence: "The lack of rain has created a _____ drought.",
        korean: "거의~과 다름없는, 사실상의",
        etymology: "From Latin virtus 'excellence, potency'"
    },
    {
        word: "unexplored",
        hints: ["uncovered"],
        sentence: "Much of the ocean floor remains _____.",
        korean: "탐험되지 않은, 논의되지 않은",
        etymology: "From un- 'not' + explored 'investigated'"
    },
    {
        word: "tuned to",
        hints: ["in agreement with"],
        sentence: "The marketing campaign was carefully _____ our target audience.",
        korean: "~과 일치된",
        etymology: "From tune 'to adjust to correct pitch'"
    }
];

// Also make it available as a global variable for compatibility
if (typeof window !== 'undefined') {
    window.day11Vocabulary = day11Vocabulary;
}

export default day11Vocabulary;