// Day 1 Vocabulary Data
const day1Vocabulary = [
    {
        word: "Magnify",
        hints: ["enlarge", "increase", "amplify", "intensify"],
        sentence: "The microscope can _____ objects up to 1000 times.",
        korean: "확대하다",
        etymology: "Latin 'magnus' (great) + '-fy' (to make) = 크게 만들다"
    },
    {
        word: "Exploit",
        hints: ["utilize", "use", "make use of", "take advantage of"],
        sentence: "Human rights activists have led protests against companies that _____ child labor.",
        korean: "부당하게 이용하다",
        etymology: "Latin 'explicare' (unfold) → 펼쳐서 사용하다 → 이용하다"
    },
    {
        word: "Account for (1)",
        hints: ["make up", "comprise", "constitute"],
        sentence: "Coffee exports _____ nearly 60 percent of Ethiopia's gross national product.",
        korean: "(부분, 비율)을 차지한다",
        etymology: "Account (계산/설명) + for = 계산에 포함되다 → 차지하다"
    },
    {
        word: "Account for (2)",
        hints: ["explain", "justify", "give a reason for"],
        sentence: "The suspect couldn't _____ his whereabouts last night.",
        korean: "설명하다",
        etymology: "Account (계산/설명) + for = ~에 대한 설명을 하다"
    },
    {
        word: "Account for (3)",
        hints: ["cause"],
        sentence: "Unsafe working conditions at the construction site _____ a number of serious injuries.",
        korean: "원인이 되다",
        etymology: "Account (계산/설명) + for = ~의 원인을 설명하다 → 원인이 되다"
    },
    {
        word: "Particular",
        hints: ["specific", "special"],
        sentence: "She has a _____ interest in ancient history.",
        korean: "특별한",
        etymology: "Latin 'particula' (small part) → 특정 부분의 → 특별한"
    },
    {
        word: "Prominent (1)",
        hints: ["noticeable", "conspicuous", "outstanding", "remarkable"],
        sentence: "Mt. Fuji is a _____ natural landmark in Japan.",
        korean: "눈에 뛰는",
        etymology: "Latin 'prominere' (pro- 앞으로 + -minere 튀어나오다) = 돌출된"
    },
    {
        word: "Prominent (2)",
        hints: ["important", "leading", "notable"],
        sentence: "William Shakespeare is one of the most _____ figures in the history of English literature.",
        korean: "중요한",
        etymology: "눈에 띄게 튀어나온 → 두드러진 → 중요한"
    },
    {
        word: "Replenish",
        hints: ["refill", "restore", "renew"],
        sentence: "The travelers _____ their supplies of water before crossing the desert.",
        korean: "보충하다",
        etymology: "Re- (다시) + Latin 'plenus' (가득한) = 다시 가득 채우다"
    },
    {
        word: "Indigenous",
        hints: ["native", "aboriginal"],
        sentence: "The government ignored environmental complaints by _____ groups.",
        korean: "토착의",
        etymology: "Latin 'indigena' (in- 안에 + -genus 태어난) = 그 땅에서 태어난"
    },
    {
        word: "Pinpoint (1)",
        hints: ["locate exactly", "clearly identify"],
        sentence: "With GPS technology, it is possible to _____ a person's position anywhere on the planet.",
        korean: "(위치 등을) 정확히 찾아내다",
        etymology: "Pin (핀) + point (점) = 핀으로 찍듯이 정확히 가리키다"
    },
    {
        word: "Pinpoint (2)",
        hints: ["precise", "exact", "accurate"],
        sentence: "After years of training, baseball pitchers develop _____ control of the ball.",
        korean: "정확한",
        etymology: "핀 끝처럼 작고 정확한 점 → 극도로 정확한"
    },
    {
        word: "Annihilate",
        hints: ["destroy", "completely remove", "exterminate"],
        sentence: "An asteroid impact 65.5 million years ago nearly _____ all living things on the planet.",
        korean: "전멸시키다",
        etymology: "Latin 'ad-' (to) + 'nihil' (nothing) = 무(無)로 만들다"
    },
    {
        word: "Conversely",
        hints: ["on the other hand", "contrarily"],
        sentence: "Texting is growing more popular as a form of communication, while, _____, phone calls are becoming less common.",
        korean: "반대로",
        etymology: "Latin 'conversus' (turned around) + -ly = 뒤집어서, 반대로"
    },
    {
        word: "Investigate",
        hints: ["examine", "inquire into", "look into"],
        sentence: "The police will _____ the crime scene after they interview the witnesses.",
        korean: "조사하다",
        etymology: "Latin 'in-' (into) + 'vestigare' (track) = 흔적을 따라가다 → 조사하다"
    },
    {
        word: "Assure",
        hints: ["convince", "persuade", "satisfy", "guarantee"],
        sentence: "The lawyer _____ Tim that all his rights would be respected.",
        korean: "확신시키다; 보장하다",
        etymology: "Latin 'ad-' (to) + 'securus' (secure) = 안전하게 하다 → 확신시키다"
    },
    {
        word: "Entire",
        hints: ["whole", "total", "complete"],
        sentence: "Fire destroyed the _____ factory, but the owner plans to rebuild it.",
        korean: "전체의, 전부의",
        etymology: "Latin 'integer' (untouched, whole) → 손대지 않은, 온전한"
    },
    {
        word: "Compensate for (1)",
        hints: ["make up for", "atone for", "make amends for"],
        sentence: "The chemical company was ordered to pay millions of dollars to _____ polluting the river.",
        korean: "~을 보상하다",
        etymology: "Com- (함께) + pensare (무게를 달다) = 균형을 맞추다 → 보상하다"
    },
    {
        word: "Compensate for (2)",
        hints: ["balance", "offset"],
        sentence: "The manager _____ the unfair distribution of duties by assigning more work to certain staff.",
        korean: "상쇄하다",
        etymology: "저울의 균형을 맞추듯 한쪽의 부족을 다른 쪽으로 메우다"
    },
    {
        word: "Postulate",
        hints: ["hypothesize", "suppose", "claim", "propose"],
        sentence: "Isaac Newton _____ that gravity pulls objects toward the Earth.",
        korean: "(자명한 일로) 가정하다; 주장하다",
        etymology: "Latin 'postulare' (demand, claim) → 요구하다 → 전제로 삼다"
    },
    {
        word: "Afford",
        hints: ["give", "offer", "provide", "grant"],
        sentence: "George's high marks in high school _____ him many opportunities to enter a good university.",
        korean: "주다, 제공하다",
        etymology: "Old English 'geforthian' (further, accomplish) → 제공하다"
    },
    {
        word: "Conclusive",
        hints: ["definitive", "final", "enough to settle the issue", "clear"],
        sentence: "The experiment failed to provide any _____ evidence of the theory's validity.",
        korean: "결정적인, 확실한",
        etymology: "Latin 'concludere' (close, end) + -ive = 끝을 맺는 → 결정적인"
    },
    {
        word: "Unsophisticated",
        hints: ["simple", "uncomplicated", "not complex"],
        sentence: "The inventor used _____ technology in his flying machine, and it crashed soon after takeoff.",
        korean: "단순한, 복잡하지 않은",
        etymology: "Un- (not) + sophisticated (세련된) = 세련되지 않은 → 단순한"
    },
    {
        word: "Justified",
        hints: ["right", "legitimate", "just", "reasonable"],
        sentence: "The CEO felt _____ in firing the dishonest employee.",
        korean: "정당한",
        etymology: "Latin 'justus' (just) + -fy → 정의에 맞게 하다 → 정당화된"
    },
    {
        word: "Deliberate (1)",
        hints: ["intentional", "designed", "planned"],
        sentence: "The film's action scenes were _____ attempts to grab the attention of a specific audience.",
        korean: "의도적인 계획적인",
        etymology: "Latin 'de-' (완전히) + 'librare' (저울질하다) = 신중히 따진 → 의도적인"
    },
    {
        word: "Deliberate (2)",
        hints: ["careful", "cautious", "thoughtful"],
        sentence: "After a long and _____ discussion, the committee decided to approve the new policy.",
        korean: "신중한",
        etymology: "저울질하듯 신중하게 생각하는"
    },
    {
        word: "Depend on",
        hints: ["rely on", "count on"],
        sentence: "Children _____ their parents for guidance and support.",
        korean: "의지하다",
        etymology: "De- (from) + pendere (hang) = ~에 매달리다 → 의지하다"
    },
    {
        word: "Substantiate",
        hints: ["confirm", "prove", "authenticate", "verify"],
        sentence: "Robert Peary was unable to _____ that he had reached the North Pole in 1909.",
        korean: "입증하다",
        etymology: "Latin 'substantia' (substance) + -ate = 실체를 부여하다 → 입증하다"
    },
    {
        word: "Successively",
        hints: ["one after another", "sequentially"],
        sentence: "The magazine editor spoke with each applicant _____ to discuss their qualifications for the job.",
        korean: "잇따라서",
        etymology: "Latin 'succedere' (follow after) + -ive + -ly = 연속적으로"
    },
    {
        word: "Pervasive",
        hints: ["widespread", "prevalent"],
        sentence: "Smartphone usage has become so _____ that it's rare to see someone without a device in hand.",
        korean: "퍼지는, 만연하는",
        etymology: "Latin 'per-' (through) + 'vadere' (go) = 두루 퍼지는"
    },
    {
        word: "Strenuous",
        hints: ["intense", "arduous", "laborious"],
        sentence: "Ian's muscles were very sore after his _____ workout at the gym.",
        korean: "격렬한, 힘든",
        etymology: "Latin 'strenuus' (active, vigorous) → 활발한 → 격렬한"
    },
    {
        word: "Sleek",
        hints: ["smooth", "silky"],
        sentence: "Octopuses usually have _____ skin, but it can become rough or bumpy when frightened.",
        korean: "매끄러운",
        etymology: "Middle Dutch 'sliken' (make smooth) → 매끄럽게 하다"
    },
    {
        word: "Invoke",
        hints: ["call upon", "pray to", "conjure"],
        sentence: "The Aztecs sometimes _____ their gods to bring a good harvest.",
        korean: "빌다, 기원하다",
        etymology: "Latin 'in-' (upon) + 'vocare' (call) = ~에게 부르짖다 → 기원하다"
    },
    {
        word: "Impressive",
        hints: ["striking", "remarkable"],
        sentence: "Her _____ performance earned a standing ovation.",
        korean: "인상적인",
        etymology: "Im- (in) + press (누르다) + -ive = 마음에 새겨지는 → 인상적인"
    },
    {
        word: "Conjunction",
        hints: ["combination", "union"],
        sentence: "The abundant sea life near South Africa is due to the _____ of the two major ocean currents.",
        korean: "결합",
        etymology: "Latin 'con-' (together) + 'jungere' (join) = 함께 연결하다"
    },
    {
        word: "Astoundingly",
        hints: ["incredibly", "surprisingly", "shockingly", "astonishingly"],
        sentence: "The fall colors in the mountains are _____ beautiful.",
        korean: "몹시 놀랍게도",
        etymology: "Astound (깜짝 놀라게 하다) + -ing + -ly = 놀랍게도"
    },
    {
        word: "Aftermath",
        hints: ["result", "outcome", "consequence", "aftereffect"],
        sentence: "In the _____ of the storm, the community came together to clean up and rebuild the damaged areas.",
        korean: "여파, 결과",
        etymology: "After + math (mowing) = 풀을 벤 후 → 사건 이후의 결과"
    },
    {
        word: "Promptly",
        hints: ["quickly", "instantly", "straightaway"],
        sentence: "Please respond _____ to the emergency signal.",
        korean: "신속하게",
        etymology: "Latin 'promptus' (ready, quick) + -ly = 즉시, 신속하게"
    },
    {
        word: "Subdue",
        hints: ["defeat", "conquer", "vanquish"],
        sentence: "In 530 AD, Roman forces _____ the Persian army in Mesopotamia.",
        korean: "정복하다",
        etymology: "Latin 'sub-' (under) + 'ducere' (lead) = 아래로 이끌다 → 굴복시키다"
    },
    {
        word: "Extant",
        hints: ["surviving", "in existence", "existing", "living", "remaining"],
        sentence: "Only a few _____ copies of the manuscript remain.",
        korean: "현존하는",
        etymology: "Latin 'ex-' (out) + 'stare' (stand) = 밖으로 서 있는 → 남아있는"
    },
    {
        word: "Sedentary",
        hints: ["stationary", "settled"],
        sentence: "Rosa's obesity is partly due to her _____ occupation.",
        korean: "주로 앉아 있는, 정착성의",
        etymology: "Latin 'sedere' (sit) + -ary = 앉아있는 성질의"
    },
    {
        word: "Eliminate",
        hints: ["get rid of", "remove", "discard"],
        sentence: "We need to _____ all sources of contamination.",
        korean: "제거하다",
        etymology: "Latin 'e-' (out) + 'limen' (threshold) = 문밖으로 내보내다 → 제거하다"
    },
    {
        word: "Perfect",
        hints: ["refine", "improve", "develop"],
        sentence: "Before moving to the U.S., Sofia wants to _____ her English skills.",
        korean: "개선하다, 완벽하게 하다",
        etymology: "Latin 'per-' (완전히) + 'facere' (make) = 완전하게 만들다"
    },
    {
        word: "Genuine",
        hints: ["true", "real", "authentic"],
        sentence: "Sofia always keeps a _____ copy of the business contract in her files.",
        korean: "진짜의",
        etymology: "Latin 'genus' (birth, race) → 태생적인 → 진짜의"
    },
    {
        word: "Dominant",
        hints: ["prevailing", "prominent", "supreme", "chief", "ruling"],
        sentence: "The _____ species in this ecosystem is the oak tree.",
        korean: "우세한",
        etymology: "Latin 'dominari' (rule) → 지배하는 → 우세한"
    },
    {
        word: "Unrivaled",
        hints: ["unequaled", "unparalleled", "matchless", "peerless"],
        sentence: "The skill of Renaissance painters is _____ even today.",
        korean: "독보적, 비할 데 없는",
        etymology: "Un- (not) + rival (경쟁자) + -ed = 경쟁자가 없는"
    },
    {
        word: "Paradox",
        hints: ["contradiction", "absurdity"],
        sentence: "He faced the _____ of needing a job to gain experience, yet requiring experience to get a job.",
        korean: "모순된 말",
        etymology: "Greek 'para-' (against) + 'doxa' (opinion) = 상식에 반하는 것"
    },
    {
        word: "Neglect (1)",
        hints: ["ignore", "disregard"],
        sentence: "Don't _____ your health while pursuing your career.",
        korean: "무시하다",
        etymology: "Latin 'nec-' (not) + 'legere' (choose) = 선택하지 않다 → 무시하다"
    },
    {
        word: "Neglect (2)",
        hints: ["fail", "forget"],
        sentence: "She tends to _____ her household chores when she's busy with work.",
        korean: "잊다",
        etymology: "돌보지 않다 → 잊어버리다"
    },
    {
        word: "Recall",
        hints: ["remember", "recollect"],
        sentence: "I can't _____ where I put my keys.",
        korean: "기억하다",
        etymology: "Re- (back) + call = 다시 불러내다 → 기억해내다"
    },
    {
        word: "Ascend",
        hints: ["rise", "climb", "mount", "go up"],
        sentence: "The hot air balloon began to _____ into the sky.",
        korean: "오르다",
        etymology: "Latin 'ad-' (to) + 'scandere' (climb) = 위로 올라가다"
    },
    {
        word: "Solid",
        hints: ["substantial", "fixed", "sturdy", "robust"],
        sentence: "We need _____ evidence before making accusations.",
        korean: "확고한",
        etymology: "Latin 'solidus' (firm, whole) → 단단한 → 확고한"
    },
    {
        word: "Contour",
        hints: ["outline"],
        sentence: "The _____ of the Atlantic coast are very irregular.",
        korean: "윤곽, 외형",
        etymology: "Italian 'contorno' (outline) → 둘레선 → 윤곽"
    },
    {
        word: "Inhabit",
        hints: ["live in", "occupy", "dwell in"],
        sentence: "Several species of birds _____ the dense forest near the lake.",
        korean: "거주하다",
        etymology: "Latin 'in-' (in) + 'habitare' (dwell) = 안에 살다"
    },
    {
        word: "Irrevocably",
        hints: ["permanently", "irreversibly", "irretrievably"],
        sentence: "During World War 2, many historical buildings in London were _____ damaged.",
        korean: "돌이킬 수 없게",
        etymology: "Ir- (not) + re- (back) + vocare (call) + -ly = 다시 부를 수 없게"
    },
    {
        word: "Superficially",
        hints: ["apparently", "not deeply", "externally", "on the surface"],
        sentence: "The team-building workshop was _____ a success, but in reality, the office workers still had low morale.",
        korean: "표면적으로",
        etymology: "Latin 'super-' (above) + 'facies' (face) + -ly = 표면상으로"
    },
    {
        word: "Stunted",
        hints: ["underdeveloped", "hindered", "hampered"],
        sentence: "The lack of sunlight and nutrients _____ the growth of the houseplants.",
        korean: "발달이 저해된, 성장을 멈춘",
        etymology: "Stunt (성장을 방해하다) + -ed = 성장이 방해받은"
    },
    {
        word: "Malleable",
        hints: ["flexible"],
        sentence: "When heated to high temperatures, iron and steel become _____.",
        korean: "융통성있는, 변형이 잘 되는",
        etymology: "Latin 'malleus' (hammer) + -able = 망치질할 수 있는 → 변형 가능한"
    },
    {
        word: "Mean (1)",
        hints: ["signify", "express", "indicate"],
        sentence: "What does this symbol _____ in mathematics?",
        korean: "의미하다, 나타내다",
        etymology: "Old English 'mænan' (intend, signify) → 의미하다"
    },
    {
        word: "Mean (2)",
        hints: ["average"],
        sentence: "The _____ temperature in July is 28 degrees Celsius.",
        korean: "평균",
        etymology: "Latin 'medianus' (middle) → 중간값 → 평균"
    },
    {
        word: "Exclude",
        hints: ["keep out", "leave out"],
        sentence: "The new policy will _____ anyone under 18 from participating.",
        korean: "배제하다",
        etymology: "Latin 'ex-' (out) + 'claudere' (close) = 밖으로 닫아내다 → 배제하다"
    },
    {
        word: "Mature",
        hints: ["get older", "grow up", "age"],
        sentence: "Children _____ at different rates.",
        korean: "성숙해지다",
        etymology: "Latin 'maturus' (ripe) → 익은 → 성숙한"
    },
    {
        word: "Pillar",
        hints: ["column", "post"],
        sentence: "The ancient temple was supported by massive stone _____.",
        korean: "기둥",
        etymology: "Latin 'pila' (pier, pillar) → 돌기둥"
    },
    {
        word: "Encroachment",
        hints: ["(gradual) invasion", "intrusion"],
        sentence: "The rapid _____ of urban development into the countryside poses a threat to local wildlife habitats.",
        korean: "침입, 침해",
        etymology: "En- (in) + Old French 'crochier' (hook) = 갈고리로 끌어당기듯 침범하다"
    },
    {
        word: "No wonder",
        hints: ["unsurprisingly", "unsurprising"],
        sentence: "_____ everyone recommends this restaurant—the food is absolutely delicious!",
        korean: "놀랄 일이 아닌",
        etymology: "No + wonder (경이) = 놀랄 것이 없는 → 당연한"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day1Vocabulary;
} else {
    window.day1Vocabulary = day1Vocabulary;
}