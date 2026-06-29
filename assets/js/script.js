/* =============================================
   VERBOS IRREGULARES — English File Pre-Int.
   ============================================= */
const VERBS = [
{inf:"be",      pInf:"/biː/",          es:"ser / estar",           ps:"was / were", pPs:"/wɒz/ /wɜː/",     pp:"been",        pPp:"/biːn/"},
{inf:"become",  pInf:"/bɪˈkʌm/",       es:"convertirse",           ps:"became",     pPs:"/bɪˈkeɪm/",        pp:"become",      pPp:"/bɪˈkʌm/"},
{inf:"begin",   pInf:"/bɪˈɡɪn/",       es:"comenzar",              ps:"began",      pPs:"/bɪˈɡæn/",         pp:"begun",       pPp:"/bɪˈɡʌn/"},
{inf:"break",   pInf:"/breɪk/",        es:"romper",                ps:"broke",      pPs:"/broʊk/",          pp:"broken",      pPp:"/ˈbroʊkən/"},
{inf:"bring",   pInf:"/brɪŋ/",         es:"traer",                 ps:"brought",    pPs:"/brɔːt/",          pp:"brought",     pPp:"/brɔːt/"},
{inf:"build",   pInf:"/bɪld/",         es:"construir",             ps:"built",      pPs:"/bɪlt/",           pp:"built",       pPp:"/bɪlt/"},
{inf:"buy",     pInf:"/baɪ/",          es:"comprar",               ps:"bought",     pPs:"/bɔːt/",           pp:"bought",      pPp:"/bɔːt/"},
{inf:"can",     pInf:"/kæn/",          es:"poder",                 ps:"could",      pPs:"/kʊd/",            pp:"–",           pPp:"–"},
{inf:"catch",   pInf:"/kætʃ/",         es:"atrapar / coger",       ps:"caught",     pPs:"/kɔːt/",           pp:"caught",      pPp:"/kɔːt/"},
{inf:"choose",  pInf:"/tʃuːz/",        es:"elegir",                ps:"chose",      pPs:"/tʃoʊz/",          pp:"chosen",      pPp:"/ˈtʃoʊzən/"},
{inf:"come",    pInf:"/kʌm/",          es:"venir",                 ps:"came",       pPs:"/keɪm/",           pp:"come",        pPp:"/kʌm/"},
{inf:"cost",    pInf:"/kɒst/",         es:"costar",                ps:"cost",       pPs:"/kɒst/",           pp:"cost",        pPp:"/kɒst/"},
{inf:"cut",     pInf:"/kʌt/",          es:"cortar",                ps:"cut",        pPs:"/kʌt/",            pp:"cut",         pPp:"/kʌt/"},
{inf:"do",      pInf:"/duː/",          es:"hacer",                 ps:"did",        pPs:"/dɪd/",            pp:"done",        pPp:"/dʌn/"},
{inf:"dream",   pInf:"/driːm/",        es:"soñar",                 ps:"dreamt",     pPs:"/dremt/",          pp:"dreamt",      pPp:"/dremt/"},
{inf:"drink",   pInf:"/drɪŋk/",        es:"beber",                 ps:"drank",      pPs:"/dræŋk/",          pp:"drunk",       pPp:"/drʌŋk/"},
{inf:"drive",   pInf:"/draɪv/",        es:"conducir / manejar",    ps:"drove",      pPs:"/droʊv/",          pp:"driven",      pPp:"/ˈdrɪvən/"},
{inf:"eat",     pInf:"/iːt/",          es:"comer",                 ps:"ate",        pPs:"/eɪt/",            pp:"eaten",       pPp:"/ˈiːtən/"},
{inf:"fall",    pInf:"/fɔːl/",         es:"caer",                  ps:"fell",       pPs:"/fɛl/",            pp:"fallen",      pPp:"/ˈfɔːlən/"},
{inf:"feel",    pInf:"/fiːl/",         es:"sentir",                ps:"felt",       pPs:"/fɛlt/",           pp:"felt",        pPp:"/fɛlt/"},
{inf:"find",    pInf:"/faɪnd/",        es:"encontrar",             ps:"found",      pPs:"/faʊnd/",          pp:"found",       pPp:"/faʊnd/"},
{inf:"fly",     pInf:"/flaɪ/",         es:"volar",                 ps:"flew",       pPs:"/fluː/",           pp:"flown",       pPp:"/floʊn/"},
{inf:"forget",  pInf:"/fəˈɡɛt/",       es:"olvidar",               ps:"forgot",     pPs:"/fəˈɡɒt/",         pp:"forgotten",   pPp:"/fəˈɡɒtən/"},
{inf:"get",     pInf:"/ɡɛt/",          es:"conseguir / obtener",   ps:"got",        pPs:"/ɡɒt/",            pp:"got",         pPp:"/ɡɒt/"},
{inf:"give",    pInf:"/ɡɪv/",          es:"dar",                   ps:"gave",       pPs:"/ɡeɪv/",           pp:"given",       pPp:"/ˈɡɪvən/"},
{inf:"go",      pInf:"/ɡoʊ/",          es:"ir",                    ps:"went",       pPs:"/wɛnt/",           pp:"gone",        pPp:"/ɡɒn/"},
{inf:"grow",    pInf:"/ɡroʊ/",         es:"crecer",                ps:"grew",       pPs:"/ɡruː/",           pp:"grown",       pPp:"/ɡroʊn/"},
{inf:"have",    pInf:"/hæv/",          es:"tener",                 ps:"had",        pPs:"/hæd/",            pp:"had",         pPp:"/hæd/"},
{inf:"hear",    pInf:"/hɪər/",         es:"oír / escuchar",        ps:"heard",      pPs:"/hɜːrd/",          pp:"heard",       pPp:"/hɜːrd/"},
{inf:"hit",     pInf:"/hɪt/",          es:"golpear",               ps:"hit",        pPs:"/hɪt/",            pp:"hit",         pPp:"/hɪt/"},
{inf:"hold",    pInf:"/hoʊld/",        es:"sostener / aguantar",   ps:"held",       pPs:"/hɛld/",           pp:"held",        pPp:"/hɛld/"},
{inf:"keep",    pInf:"/kiːp/",         es:"mantener / guardar",    ps:"kept",       pPs:"/kɛpt/",           pp:"kept",        pPp:"/kɛpt/"},
{inf:"know",    pInf:"/noʊ/",          es:"saber / conocer",       ps:"knew",       pPs:"/njuː/",           pp:"known",       pPp:"/noʊn/"},
{inf:"lay",     pInf:"/leɪ/",          es:"poner / tender",        ps:"laid",       pPs:"/leɪd/",           pp:"laid",        pPp:"/leɪd/"},
{inf:"learn",   pInf:"/lɜːrn/",        es:"aprender",              ps:"learnt",     pPs:"/lɜːrnt/",         pp:"learnt",      pPp:"/lɜːrnt/"},
{inf:"leave",   pInf:"/liːv/",         es:"dejar / salir",         ps:"left",       pPs:"/lɛft/",           pp:"left",        pPp:"/lɛft/"},
{inf:"lend",    pInf:"/lɛnd/",         es:"prestar",               ps:"lent",       pPs:"/lɛnt/",           pp:"lent",        pPp:"/lɛnt/"},
{inf:"let",     pInf:"/lɛt/",          es:"dejar / permitir",      ps:"let",        pPs:"/lɛt/",            pp:"let",         pPp:"/lɛt/"},
{inf:"lose",    pInf:"/luːz/",         es:"perder",                ps:"lost",       pPs:"/lɒst/",           pp:"lost",        pPp:"/lɒst/"},
{inf:"make",    pInf:"/meɪk/",         es:"hacer / fabricar",      ps:"made",       pPs:"/meɪd/",           pp:"made",        pPp:"/meɪd/"},
{inf:"meet",    pInf:"/miːt/",         es:"conocer / reunirse",    ps:"met",        pPs:"/mɛt/",            pp:"met",         pPp:"/mɛt/"},
{inf:"pay",     pInf:"/peɪ/",          es:"pagar",                 ps:"paid",       pPs:"/peɪd/",           pp:"paid",        pPp:"/peɪd/"},
{inf:"put",     pInf:"/pʊt/",          es:"poner / colocar",       ps:"put",        pPs:"/pʊt/",            pp:"put",         pPp:"/pʊt/"},
{inf:"read",    pInf:"/riːd/",         es:"leer",                  ps:"read",       pPs:"/rɛd/",            pp:"read",        pPp:"/rɛd/"},
{inf:"ring",    pInf:"/rɪŋ/",          es:"llamar / sonar",        ps:"rang",       pPs:"/ræŋ/",            pp:"rung",        pPp:"/rʌŋ/"},
{inf:"run",     pInf:"/rʌn/",          es:"correr",                ps:"ran",        pPs:"/ræn/",            pp:"run",         pPp:"/rʌn/"},
{inf:"say",     pInf:"/seɪ/",          es:"decir",                 ps:"said",       pPs:"/sɛd/",            pp:"said",        pPp:"/sɛd/"},
{inf:"see",     pInf:"/siː/",          es:"ver",                   ps:"saw",        pPs:"/sɔː/",            pp:"seen",        pPp:"/siːn/"},
{inf:"sell",    pInf:"/sɛl/",          es:"vender",                ps:"sold",       pPs:"/soʊld/",          pp:"sold",        pPp:"/soʊld/"},
{inf:"send",    pInf:"/sɛnd/",         es:"enviar / mandar",       ps:"sent",       pPs:"/sɛnt/",           pp:"sent",        pPp:"/sɛnt/"},
{inf:"set",     pInf:"/sɛt/",          es:"fijar / establecer",    ps:"set",        pPs:"/sɛt/",            pp:"set",         pPp:"/sɛt/"},
{inf:"sew",     pInf:"/soʊ/",          es:"coser",                 ps:"sewed",      pPs:"/soʊd/",           pp:"sewn",        pPp:"/soʊn/"},
{inf:"shake",   pInf:"/ʃeɪk/",         es:"sacudir / agitar",      ps:"shook",      pPs:"/ʃʊk/",            pp:"shaken",      pPp:"/ˈʃeɪkən/"},
{inf:"shine",   pInf:"/ʃaɪn/",         es:"brillar",               ps:"shone",      pPs:"/ʃɒn/",            pp:"shone",       pPp:"/ʃɒn/"},
{inf:"shoot",   pInf:"/ʃuːt/",         es:"disparar",              ps:"shot",       pPs:"/ʃɒt/",            pp:"shot",        pPp:"/ʃɒt/"},
{inf:"show",    pInf:"/ʃoʊ/",          es:"mostrar",               ps:"showed",     pPs:"/ʃoʊd/",           pp:"shown",       pPp:"/ʃoʊn/"},
{inf:"shrink",  pInf:"/ʃrɪŋk/",        es:"encoger",               ps:"shrank",     pPs:"/ʃræŋk/",          pp:"shrunk",      pPp:"/ʃrʌŋk/"},
{inf:"shut",    pInf:"/ʃʌt/",          es:"cerrar",                ps:"shut",       pPs:"/ʃʌt/",            pp:"shut",        pPp:"/ʃʌt/"},
{inf:"sing",    pInf:"/sɪŋ/",          es:"cantar",                ps:"sang",       pPs:"/sæŋ/",            pp:"sung",        pPp:"/sʌŋ/"},
{inf:"sink",    pInf:"/sɪŋk/",         es:"hundir / hundirse",     ps:"sank",       pPs:"/sæŋk/",           pp:"sunk",        pPp:"/sʌŋk/"},
{inf:"sit",     pInf:"/sɪt/",          es:"sentarse",              ps:"sat",        pPs:"/sæt/",            pp:"sat",         pPp:"/sæt/"},
{inf:"sleep",   pInf:"/sliːp/",        es:"dormir",                ps:"slept",      pPs:"/slɛpt/",          pp:"slept",       pPp:"/slɛpt/"},
{inf:"slide",   pInf:"/slaɪd/",        es:"deslizar",              ps:"slid",       pPs:"/slɪd/",           pp:"slid",        pPp:"/slɪd/"},
{inf:"sow",     pInf:"/soʊ/",          es:"sembrar",               ps:"sowed",      pPs:"/soʊd/",           pp:"sown",        pPp:"/soʊn/"},
{inf:"speak",   pInf:"/spiːk/",        es:"hablar",                ps:"spoke",      pPs:"/spoʊk/",          pp:"spoken",      pPp:"/ˈspoʊkən/"},
{inf:"spell",   pInf:"/spɛl/",         es:"deletrear",             ps:"spelt",      pPs:"/spɛlt/",          pp:"spelt",       pPp:"/spɛlt/"},
{inf:"spend",   pInf:"/spɛnd/",        es:"gastar / pasar tiempo", ps:"spent",      pPs:"/spɛnt/",          pp:"spent",       pPp:"/spɛnt/"},
{inf:"spill",   pInf:"/spɪl/",         es:"derramar",              ps:"spilt",      pPs:"/spɪlt/",          pp:"spilt",       pPp:"/spɪlt/"},
{inf:"split",   pInf:"/splɪt/",        es:"partir / dividir",      ps:"split",      pPs:"/splɪt/",          pp:"split",       pPp:"/splɪt/"},
{inf:"spoil",   pInf:"/spɔɪl/",        es:"estropear / mimar",     ps:"spoilt",     pPs:"/spɔɪlt/",         pp:"spoilt",      pPp:"/spɔɪlt/"},
{inf:"spread",  pInf:"/sprɛd/",        es:"extender / difundir",   ps:"spread",     pPs:"/sprɛd/",          pp:"spread",      pPp:"/sprɛd/"},
{inf:"stand",   pInf:"/stænd/",        es:"estar de pie",          ps:"stood",      pPs:"/stʊd/",           pp:"stood",       pPp:"/stʊd/"},
{inf:"steal",   pInf:"/stiːl/",        es:"robar",                 ps:"stole",      pPs:"/stoʊl/",          pp:"stolen",      pPp:"/ˈstoʊlən/"},
{inf:"sting",   pInf:"/stɪŋ/",         es:"picar / aguijonear",    ps:"stung",      pPs:"/stʌŋ/",           pp:"stung",       pPp:"/stʌŋ/"},
{inf:"stink",   pInf:"/stɪŋk/",        es:"apestar",               ps:"stank",      pPs:"/stæŋk/",          pp:"stunk",       pPp:"/stʌŋk/"},
{inf:"strike",  pInf:"/straɪk/",       es:"golpear / impactar",    ps:"struck",     pPs:"/strʌk/",          pp:"struck",      pPp:"/strʌk/"},
{inf:"swear",   pInf:"/swɛər/",        es:"jurar / maldecir",      ps:"swore",      pPs:"/swɔːr/",          pp:"sworn",       pPp:"/swɔːrn/"},
{inf:"sweep",   pInf:"/swiːp/",        es:"barrer",                ps:"swept",      pPs:"/swɛpt/",          pp:"swept",       pPp:"/swɛpt/"},
{inf:"swim",    pInf:"/swɪm/",         es:"nadar",                 ps:"swam",       pPs:"/swæm/",           pp:"swum",        pPp:"/swʌm/"},
{inf:"take",    pInf:"/teɪk/",         es:"tomar / llevar",        ps:"took",       pPs:"/tʊk/",            pp:"taken",       pPp:"/ˈteɪkən/"},
{inf:"teach",   pInf:"/tiːtʃ/",        es:"enseñar",               ps:"taught",     pPs:"/tɔːt/",           pp:"taught",      pPp:"/tɔːt/"},
{inf:"tear",    pInf:"/tɛər/",         es:"romper / rasgar",       ps:"tore",       pPs:"/tɔːr/",           pp:"torn",        pPp:"/tɔːrn/"},
{inf:"tell",    pInf:"/tɛl/",          es:"decir / contar",        ps:"told",       pPs:"/toʊld/",          pp:"told",        pPp:"/toʊld/"},
{inf:"think",   pInf:"/θɪŋk/",         es:"pensar",                ps:"thought",    pPs:"/θɔːt/",           pp:"thought",     pPp:"/θɔːt/"},
{inf:"throw",   pInf:"/θroʊ/",         es:"lanzar / tirar",        ps:"threw",      pPs:"/θruː/",           pp:"thrown",      pPp:"/θroʊn/"},
{inf:"tread",   pInf:"/trɛd/",         es:"pisar",                 ps:"trod",       pPs:"/trɒd/",           pp:"trodden",     pPp:"/ˈtrɒdən/"},
{inf:"understand",pInf:"/ˌʌndəˈstænd/",es:"entender",             ps:"understood",  pPs:"/ˌʌndəˈstʊd/",    pp:"understood",  pPp:"/ˌʌndəˈstʊd/"},
{inf:"wake",    pInf:"/weɪk/",         es:"despertar",             ps:"woke",       pPs:"/woʊk/",           pp:"woken",       pPp:"/ˈwoʊkən/"},
{inf:"wear",    pInf:"/wɛər/",         es:"llevar puesto / vestir",ps:"wore",       pPs:"/wɔːr/",           pp:"worn",        pPp:"/wɔːrn/"},
{inf:"weave",   pInf:"/wiːv/",         es:"tejer",                 ps:"wove",       pPs:"/woʊv/",           pp:"woven",       pPp:"/ˈwoʊvən/"},
{inf:"weep",    pInf:"/wiːp/",         es:"llorar",                ps:"wept",       pPs:"/wɛpt/",           pp:"wept",        pPp:"/wɛpt/"},
{inf:"win",     pInf:"/wɪn/",          es:"ganar",                 ps:"won",        pPs:"/wʌn/",            pp:"won",         pPp:"/wʌn/"},
{inf:"wring",   pInf:"/rɪŋ/",          es:"retorcer / escurrir",   ps:"wrung",      pPs:"/rʌŋ/",            pp:"wrung",       pPp:"/rʌŋ/"},
{inf:"write",   pInf:"/raɪt/",         es:"escribir",              ps:"wrote",      pPs:"/roʊt/",           pp:"written",     pPp:"/ˈrɪtən/"},
];

/* =============================================
   ORACIONES PARA QUIZ "COMPLETA LA ORACIÓN"
   Extraídas del English File Pre-Intermediate
   ============================================= */
const SENTENCES = [
  // PAST SIMPLE
  {template:"She ___ sightseeing every morning during the holiday.", verb:"go",    form:"ps", answer:"went",    full:"She went sightseeing every morning during the holiday."},
  {template:"He ___ his passport at the airport and missed the flight.", verb:"lose",  form:"ps", answer:"lost",    full:"He lost his passport at the airport and missed the flight."},
  {template:"They ___ a fantastic hotel near the beach.", verb:"find",  form:"ps", answer:"found",   full:"They found a fantastic hotel near the beach."},
  {template:"I ___ a postcard to my family from Paris.", verb:"send",  form:"ps", answer:"sent",    full:"I sent a postcard to my family from Paris."},
  {template:"She ___ her phone on the bus yesterday.", verb:"leave", form:"ps", answer:"left",    full:"She left her phone on the bus yesterday."},
  {template:"We ___ by plane to Madrid for the long weekend.", verb:"fly",   form:"ps", answer:"flew",    full:"We flew by plane to Madrid for the long weekend."},
  {template:"He ___ English at a school in London for three months.", verb:"teach", form:"ps", answer:"taught",  full:"He taught English at a school in London for three months."},
  {template:"She ___ that the hotel was fully booked.", verb:"find",  form:"ps", answer:"found",   full:"She found that the hotel was fully booked."},
  {template:"They ___ the match 3–0 and the fans went crazy.", verb:"win",   form:"ps", answer:"won",     full:"They won the match 3–0 and the fans went crazy."},
  {template:"He ___ his new neighbours at the party last Saturday.", verb:"meet",  form:"ps", answer:"met",     full:"He met his new neighbours at the party last Saturday."},
  {template:"She ___ three languages when she was a child.", verb:"speak", form:"ps", answer:"spoke",   full:"She spoke three languages when she was a child."},
  {template:"I ___ a really good book on the flight.", verb:"read",  form:"ps", answer:"read",    full:"I read a really good book on the flight."},
  {template:"He ___ his old car to buy a new one.", verb:"sell",  form:"ps", answer:"sold",    full:"He sold his old car to buy a new one."},
  {template:"The alarm ___ at six o'clock every morning.", verb:"ring",  form:"ps", answer:"rang",    full:"The alarm rang at six o'clock every morning."},
  {template:"She ___ a beautiful dress to the graduation ceremony.", verb:"wear",  form:"ps", answer:"wore",    full:"She wore a beautiful dress to the graduation ceremony."},
  {template:"He ___ his lunch in the park and listened to music.", verb:"eat",   form:"ps", answer:"ate",     full:"He ate his lunch in the park and listened to music."},
  {template:"The children ___ in the sea for hours at the beach.", verb:"swim",  form:"ps", answer:"swam",    full:"The children swam in the sea for hours at the beach."},
  {template:"She ___ a lot of money on clothes when she visited New York.", verb:"spend", form:"ps", answer:"spent",   full:"She spent a lot of money on clothes when she visited New York."},
  {template:"He ___ his girlfriend some flowers and a card.", verb:"give",  form:"ps", answer:"gave",    full:"He gave his girlfriend some flowers and a card."},
  {template:"They ___ their tent next to a beautiful lake.", verb:"put",   form:"ps", answer:"put",     full:"They put their tent next to a beautiful lake."},
  {template:"The dog ___ the ball and returned it to its owner.", verb:"catch", form:"ps", answer:"caught",  full:"The dog caught the ball and returned it to its owner."},
  {template:"She ___ her wallet at home and couldn't pay for dinner.", verb:"leave", form:"ps", answer:"left",    full:"She left her wallet at home and couldn't pay for dinner."},
  {template:"He ___ five kilometres every morning before work.", verb:"run",   form:"ps", answer:"ran",     full:"He ran five kilometres every morning before work."},
  {template:"The manager ___ the team to play better in the second half.", verb:"tell",  form:"ps", answer:"told",    full:"The manager told the team to play better in the second half."},
  {template:"She ___ about her holiday in a blog post.", verb:"write", form:"ps", answer:"wrote",   full:"She wrote about her holiday in a blog post."},
  {template:"He ___ a coffee before the meeting to feel more awake.", verb:"drink", form:"ps", answer:"drank",   full:"He drank a coffee before the meeting to feel more awake."},
  {template:"The students ___ about their future plans after the exam.", verb:"think", form:"ps", answer:"thought", full:"The students thought about their future plans after the exam."},
  {template:"She ___ her keys in her bag and couldn't find them.", verb:"keep",  form:"ps", answer:"kept",    full:"She kept her keys in her bag and couldn't find them."},
  {template:"He ___ her to the airport because she had heavy luggage.", verb:"drive", form:"ps", answer:"drove",   full:"He drove her to the airport because she had heavy luggage."},
  {template:"They ___ up early to catch the first train.", verb:"wake",  form:"ps", answer:"woke",    full:"They woke up early to catch the first train."},

  // PAST PARTICIPLE (Present Perfect)
  {template:"I have never ___ sushi before — it was delicious!", verb:"eat",   form:"pp", answer:"eaten",      full:"I have never eaten sushi before — it was delicious!"},
  {template:"She has ___ three languages since she was a child.", verb:"speak",  form:"pp", answer:"spoken",     full:"She has spoken three languages since she was a child."},
  {template:"Have you ever ___ a motorbike along the coast?", verb:"drive",  form:"pp", answer:"driven",     full:"Have you ever driven a motorbike along the coast?"},
  {template:"He has ___ her a message but she hasn't replied yet.", verb:"send",  form:"pp", answer:"sent",       full:"He has sent her a message but she hasn't replied yet."},
  {template:"They have ___ to Brazil twice for the carnival.", verb:"fly",   form:"pp", answer:"flown",      full:"They have flown to Brazil twice for the carnival."},
  {template:"She has ___ her passport — she can't find it anywhere.", verb:"lose",  form:"pp", answer:"lost",       full:"She has lost her passport — she can't find it anywhere."},
  {template:"I have already ___ the tickets online for the concert.", verb:"buy",   form:"pp", answer:"bought",     full:"I have already bought the tickets online for the concert."},
  {template:"Have you ever ___ in a five-star hotel?", verb:"sleep",  form:"pp", answer:"slept",      full:"Have you ever slept in a five-star hotel?"},
  {template:"He has ___ his essay three times but it still has mistakes.", verb:"write",  form:"pp", answer:"written",    full:"He has written his essay three times but it still has mistakes."},
  {template:"She has ___ a lot of interesting people at the conference.", verb:"meet",  form:"pp", answer:"met",        full:"She has met a lot of interesting people at the conference."},
  {template:"I haven't ___ the washing-up yet — sorry!", verb:"do",    form:"pp", answer:"done",       full:"I haven't done the washing-up yet — sorry!"},
  {template:"Has he ___ you about the new job offer?", verb:"tell",  form:"pp", answer:"told",       full:"Has he told you about the new job offer?"},
  {template:"She has ___ her mind and decided to stay.", verb:"make",  form:"pp", answer:"made",       full:"She has made her mind and decided to stay."},
  {template:"They have ___ the apartment since they got married.", verb:"keep",  form:"pp", answer:"kept",       full:"They have kept the apartment since they got married."},
  {template:"I've ___ that film twice — it's amazing!", verb:"see",   form:"pp", answer:"seen",       full:"I've seen that film twice — it's amazing!"},
  {template:"She has ___ her bike to work every day this month.", verb:"ride",   form:"pp", answer:"ridden",     full:"She has ridden her bike to work every day this month."},
  {template:"Have you ___ the new shopping centre yet?", verb:"find",  form:"pp", answer:"found",      full:"Have you found the new shopping centre yet?"},
  {template:"He has ___ everything he knows about cooking to his daughter.", verb:"teach",  form:"pp", answer:"taught",     full:"He has taught everything he knows about cooking to his daughter."},
  {template:"I've never ___ a spider — I'm terrified of them!", verb:"hold",   form:"pp", answer:"held",       full:"I've never held a spider — I'm terrified of them!"},
  {template:"She has ___ all her savings on the trip around the world.", verb:"spend",  form:"pp", answer:"spent",      full:"She has spent all her savings on the trip around the world."},

  // PAST SIMPLE — verbos nuevos
  {template:"She ___ the alarm for six o'clock so she wouldn't miss the flight.", verb:"set",    form:"ps", answer:"set",     full:"She set the alarm for six o'clock so she wouldn't miss the flight."},
  {template:"My grandmother ___ a beautiful dress for the wedding by hand.", verb:"sew",    form:"ps", answer:"sewed",   full:"My grandmother sewed a beautiful dress for the wedding by hand."},
  {template:"The earthquake ___ the buildings so hard that windows broke.", verb:"shake",  form:"ps", answer:"shook",   full:"The earthquake shook the buildings so hard that windows broke."},
  {template:"The sun ___ so brightly that we couldn't look at it directly.", verb:"shine",  form:"ps", answer:"shone",   full:"The sun shone so brightly that we couldn't look at it directly."},
  {template:"The hunter ___ at the target and missed by just a few centimetres.", verb:"shoot",  form:"ps", answer:"shot",    full:"The hunter shot at the target and missed by just a few centimetres."},
  {template:"The tour guide ___ us around the old city and explained its history.", verb:"show",   form:"ps", answer:"showed",  full:"The tour guide showed us around the old city and explained its history."},
  {template:"His jumper ___ in the wash because the temperature was too high.", verb:"shrink", form:"ps", answer:"shrank",  full:"His jumper shrank in the wash because the temperature was too high."},
  {template:"The heavy rain ___ the road and cars couldn't pass.", verb:"sink",   form:"ps", answer:"sank",    full:"The heavy rain sank the road and cars couldn't pass."},
  {template:"The child ___ down the snowy hill on a plastic tray, laughing all the way.", verb:"slide",  form:"ps", answer:"slid",    full:"The child slid down the snowy hill on a plastic tray, laughing all the way."},
  {template:"The farmer ___ seeds early in spring to get a good harvest.", verb:"sow",    form:"ps", answer:"sowed",   full:"The farmer sowed seeds early in spring to get a good harvest."},
  {template:"The teacher ___ the word on the board so the students could copy it.", verb:"spell",  form:"ps", answer:"spelt",   full:"The teacher spelt the word on the board so the students could copy it."},
  {template:"He ___ his coffee all over his laptop when he heard the news.", verb:"spill",  form:"ps", answer:"spilt",   full:"He spilt his coffee all over his laptop when he heard the news."},
  {template:"They ___ the bill equally between the four of them at the restaurant.", verb:"split",  form:"ps", answer:"split",   full:"They split the bill equally between the four of them at the restaurant."},
  {template:"The bad weather ___ our plans for a picnic in the park.", verb:"spoil",  form:"ps", answer:"spoilt",  full:"The bad weather spoilt our plans for a picnic in the park."},
  {template:"The news ___ quickly through the small town.", verb:"spread",  form:"ps", answer:"spread",  full:"The news spread quickly through the small town."},
  {template:"A bee ___ him on the arm while he was gardening.", verb:"sting",  form:"ps", answer:"stung",   full:"A bee stung him on the arm while he was gardening."},
  {template:"The old cheese ___ so much that we had to throw it away.", verb:"stink",  form:"ps", answer:"stank",   full:"The old cheese stank so much that we had to throw it away."},
  {template:"The workers ___ to demand better pay and working conditions.", verb:"strike", form:"ps", answer:"struck",  full:"The workers struck to demand better pay and working conditions."},
  {template:"He ___ he would never eat fast food again after feeling so ill.", verb:"swear",  form:"ps", answer:"swore",   full:"He swore he would never eat fast food again after feeling so ill."},
  {template:"She ___ the floor quickly before the guests arrived.", verb:"sweep",  form:"ps", answer:"swept",   full:"She swept the floor quickly before the guests arrived."},
  {template:"He ___ his shirt when he pulled it off too quickly.", verb:"tear",   form:"ps", answer:"tore",    full:"He tore his shirt when he pulled it off too quickly."},
  {template:"She accidentally ___ on the cat's tail and it ran away.", verb:"tread",  form:"ps", answer:"trod",    full:"She accidentally trod on the cat's tail and it ran away."},
  {template:"The old woman ___ a warm scarf using wool she had collected.", verb:"weave",  form:"ps", answer:"wove",    full:"The old woman wove a warm scarf using wool she had collected."},
  {template:"She ___ when she read the final chapter of the book.", verb:"weep",   form:"ps", answer:"wept",    full:"She wept when she read the final chapter of the book."},
  {template:"He ___ the wet towel before hanging it on the line.", verb:"wring",  form:"ps", answer:"wrung",   full:"He wrung the wet towel before hanging it on the line."},

  // PAST PARTICIPLE — verbos nuevos
  {template:"Have you ___ a date for the meeting yet?", verb:"set",    form:"pp", answer:"set",     full:"Have you set a date for the meeting yet?"},
  {template:"She has never ___ anything by hand — she always buys clothes.", verb:"sew",    form:"pp", answer:"sewn",    full:"She has never sewn anything by hand — she always buys clothes."},
  {template:"The city has been ___ by several earthquakes over the years.", verb:"shake",  form:"pp", answer:"shaken",  full:"The city has been shaken by several earthquakes over the years."},
  {template:"The sun has ___ all day — perfect weather for the beach.", verb:"shine",  form:"pp", answer:"shone",   full:"The sun has shone all day — perfect weather for the beach."},
  {template:"The film has ___ to the top of the box office this weekend.", verb:"shoot",  form:"pp", answer:"shot",    full:"The film has shot to the top of the box office this weekend."},
  {template:"The museum has ___ a new exhibition about ancient Egypt.", verb:"show",   form:"pp", answer:"shown",   full:"The museum has shown a new exhibition about ancient Egypt."},
  {template:"That jumper has ___ so much in the wash it no longer fits.", verb:"shrink", form:"pp", answer:"shrunk",  full:"That jumper has shrunk so much in the wash it no longer fits."},
  {template:"The old boat has ___ to the bottom of the lake.", verb:"sink",   form:"pp", answer:"sunk",    full:"The old boat has sunk to the bottom of the lake."},
  {template:"The door has ___ shut and we can't open it from outside.", verb:"slide",  form:"pp", answer:"slid",    full:"The door has slid shut and we can't open it from outside."},
  {template:"The gardener has already ___ the seeds for next season.", verb:"sow",    form:"pp", answer:"sown",    full:"The gardener has already sown the seeds for next season."},
  {template:"I've never ___ that word correctly — I always make mistakes.", verb:"spell",  form:"pp", answer:"spelt",   full:"I've never spelt that word correctly — I always make mistakes."},
  {template:"Someone has ___ juice on the carpet and left a stain.", verb:"spill",  form:"pp", answer:"spilt",   full:"Someone has spilt juice on the carpet and left a stain."},
  {template:"The group has ___ into two teams for the competition.", verb:"split",  form:"pp", answer:"split",   full:"The group has split into two teams for the competition."},
  {template:"The milk has ___ — you should have kept it in the fridge.", verb:"spoil",  form:"pp", answer:"spoilt",  full:"The milk has spoilt — you should have kept it in the fridge."},
  {template:"The rumour has ___ all over school and everyone knows now.", verb:"spread",  form:"pp", answer:"spread",  full:"The rumour has spread all over school and everyone knows now."},
  {template:"I've been ___ by a jellyfish — my arm really hurts!", verb:"sting",  form:"pp", answer:"stung",   full:"I've been stung by a jellyfish — my arm really hurts!"},
  {template:"That fridge has ___ for days — we need to clean it out.", verb:"stink",  form:"pp", answer:"stunk",   full:"That fridge has stunk for days — we need to clean it out."},
  {template:"Lightning has ___ the old tree at the edge of the garden.", verb:"strike", form:"pp", answer:"struck",  full:"Lightning has struck the old tree at the edge of the garden."},
  {template:"She has ___ she will never lend him money again.", verb:"swear",  form:"pp", answer:"sworn",   full:"She has sworn she will never lend him money again."},
  {template:"Has anyone ___ the corridor? It's covered in dust.", verb:"sweep",  form:"pp", answer:"swept",   full:"Has anyone swept the corridor? It's covered in dust."},
  {template:"He has ___ all the pages out of the notebook by accident.", verb:"tear",   form:"pp", answer:"torn",    full:"He has torn all the pages out of the notebook by accident."},
  {template:"You have ___ on my foot three times already!", verb:"tread",  form:"pp", answer:"trodden", full:"You have trodden on my foot three times already!"},
  {template:"She has ___ rugs for twenty years and her work is stunning.", verb:"weave",  form:"pp", answer:"woven",   full:"She has woven rugs for twenty years and her work is stunning."},
  {template:"He has ___ every night this week — the film really moved him.", verb:"weep",   form:"pp", answer:"wept",    full:"He has wept every night this week — the film really moved him."},
  {template:"She has ___ the cloth so tightly that it won't drip at all.", verb:"wring",  form:"pp", answer:"wrung",   full:"She has wrung the cloth so tightly that it won't drip at all."},
];

/* =============================================
   CONFIGURACIÓN
   ============================================= */
const APP_URL = 'https://mxdanico.github.io/verbquest';

/* =============================================
   ESTADO GLOBAL
   ============================================= */
let audioCtx   = null;
let tFilter    = 'all';
let quizType   = 'classic';   // 'classic' | 'sentence'
let gameMode   = 'ps';
let totalQ     = 10;
let filterKey  = 'all';
let questions  = [];
let idx        = 0;
let score      = 0;
let okCount    = 0;
let badCount   = 0;
let lives      = 3;
let streak     = 0;
let wrongLog   = [];
let answered   = false;
let hintUsed   = false;
let lastScore  = 0;
let lastOk     = 0;
let lastBad    = 0;
let lastTotal  = 0;
let lastPct    = 0;
let lastRank   = '';
let lastEmoji  = '';
let lastWasErrorMode = false; /* true cuando el quiz que terminó era de errores */
let currentSentenceFull = '';

/* =============================================
   INDEXEDDB — puente SW ↔ página
   El SW no puede leer localStorage, así que
   sincronizamos errores y timestamp en IDB.
   ============================================= */
const VQ_DB = (() => {
  let _db = null;
  function open() {
    if (_db) return Promise.resolve(_db);
    return new Promise((res, rej) => {
      const r = indexedDB.open('verbquest-store', 1);
      r.onupgradeneeded = e => e.target.result.createObjectStore('kv', { keyPath: 'k' });
      r.onsuccess  = e => { _db = e.target.result; res(_db); };
      r.onerror    = () => rej(r.error);
    });
  }
  function set(k, v) {
    return open().then(db => new Promise((res, rej) => {
      const tx = db.transaction('kv', 'readwrite');
      tx.objectStore('kv').put({ k, v });
      tx.oncomplete = res; tx.onerror = rej;
    }));
  }
  function del(k) {
    return open().then(db => new Promise((res, rej) => {
      const tx = db.transaction('kv', 'readwrite');
      tx.objectStore('kv').delete(k);
      tx.oncomplete = res; tx.onerror = rej;
    }));
  }
  return { set, del };
})();

/* Sincroniza errores + timestamp en IDB para que el SW pueda leerlos */
function syncErrorsToIDB() {
  try {
    const errs = getStoredErrors();
    if (errs.length > 0) {
      VQ_DB.set('vq-errors', errs);
      /* Solo actualiza el timestamp si aún no existe (primera vez que aparecen errores) */
      const stored = localStorage.getItem('vq-errors-ts');
      if (!stored) {
        const now = Date.now();
        localStorage.setItem('vq-errors-ts', now);
        VQ_DB.set('vq-errors-ts', now);
      } else {
        VQ_DB.set('vq-errors-ts', parseInt(stored, 10));
      }
    } else {
      /* Sin errores: limpiar IDB y timestamp */
      VQ_DB.del('vq-errors');
      VQ_DB.del('vq-errors-ts');
      localStorage.removeItem('vq-errors-ts');
    }
  } catch(e) {}
}

/* Solicitar permiso de notificaciones y registrar Periodic Sync */
async function initNotifications() {
  if (!('serviceWorker' in navigator) || !('Notification' in window)) return;

  try {
    const reg = await navigator.serviceWorker.ready;

    /* Pedir permiso solo si aún no se ha decidido */
    if (Notification.permission === 'default') {
      /* Esperar un momento para no interrumpir la carga inicial */
      setTimeout(async () => {
        const perm = await Notification.requestPermission();
        if (perm === 'granted') registerPeriodicSync(reg);
      }, 4000);
    } else if (Notification.permission === 'granted') {
      registerPeriodicSync(reg);
    }
  } catch(e) {}
}

async function registerPeriodicSync(reg) {
  try {
    if (!('periodicSync' in reg)) return;
    const status = await navigator.permissions.query({ name: 'periodic-background-sync' });
    if (status.state !== 'granted') return;
    await reg.periodicSync.register('vq-errors-reminder', {
      minInterval: 60 * 60 * 1000, /* el SW comprueba cada hora como mínimo */
    });
  } catch(e) {}
}
(function initTheme() {
  const saved   = localStorage.getItem('vq-theme');
  const toggle  = document.getElementById('themeToggle');
  if (saved === 'light') {
    document.body.classList.add('light');
    if (toggle) toggle.checked = false;   // sol = unchecked
  } else {
    if (toggle) toggle.checked = true;    // luna = checked (dark por defecto)
  }
})();

/* Aplica el tema según el estado del checkbox */
function applyTheme(isDark) {
  const toggle = document.getElementById('themeToggle');
  if (isDark) {
    document.body.classList.remove('light');
    localStorage.setItem('vq-theme', 'dark');
    if (toggle) toggle.checked = true;
  } else {
    document.body.classList.add('light');
    localStorage.setItem('vq-theme', 'light');
    if (toggle) toggle.checked = false;
  }
  playClick();
}

/* Cambio por click / teclado (checkbox nativo) */
document.getElementById('themeToggle').addEventListener('change', function() {
  applyTheme(this.checked);
});

/* ── Swipe / drag sobre el label del toggle ── */
(function initToggleSwipe() {
  const label     = document.querySelector('.toggle-sky');
  const THRESHOLD = 30;   // px mínimos para considerar swipe
  let startX      = null;
  let startY      = null;
  let isDragging  = false;

  label.addEventListener('touchstart', function(e) {
    const t  = e.touches[0];
    startX   = t.clientX;
    startY   = t.clientY;
    isDragging = false;
  }, { passive: true });

  label.addEventListener('touchmove', function(e) {
    if (startX === null) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    // Si el movimiento horizontal supera al vertical, es un swipe horizontal
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
      isDragging = true;
      e.preventDefault();   // evita scroll accidental mientras desliza
    }
  }, { passive: false });

  label.addEventListener('touchend', function(e) {
    if (startX === null) return;
    const dx       = e.changedTouches[0].clientX - startX;
    const isDark   = !document.body.classList.contains('light');

    if (isDragging && Math.abs(dx) >= THRESHOLD) {
      // Swipe detectado
      if (dx > 0 && !isDark) {
        // Desliza derecha → activar modo noche (ya está en noche, no hacer nada)
        applyTheme(true);
      } else if (dx < 0 && isDark) {
        // Desliza izquierda → activar modo día
        applyTheme(false);
      }
      // Prevenir que el touchend dispare también el click del label
      e.preventDefault();
    }
    // Si NO fue swipe, el click nativo del label ya maneja el cambio

    startX     = null;
    startY     = null;
    isDragging = false;
  }, { passive: false });

  /* Soporte mouse (desktop drag) */
  let mouseStartX = null;
  let mouseDragging = false;

  label.addEventListener('mousedown', function(e) {
    mouseStartX   = e.clientX;
    mouseDragging = false;
  });

  label.addEventListener('mousemove', function(e) {
    if (mouseStartX === null) return;
    if (Math.abs(e.clientX - mouseStartX) > 8) mouseDragging = true;
  });

  label.addEventListener('mouseup', function(e) {
    if (mouseStartX === null) return;
    const dx     = e.clientX - mouseStartX;
    const isDark = !document.body.classList.contains('light');

    if (mouseDragging && Math.abs(dx) >= THRESHOLD) {
      e.preventDefault();
      if (dx > 0 && !isDark) applyTheme(true);
      else if (dx < 0 && isDark) applyTheme(false);
    }
    mouseStartX   = null;
    mouseDragging = false;
  });

  /* Evitar que un drag largo dispare el click del label */
  label.addEventListener('click', function(e) {
    if (mouseDragging) e.preventDefault();
  });
})();

/* =============================================
   AUDIO (Web Audio API — sonidos UI)
   ============================================= */
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}
function playTone(freq, dur, type='sine', vol=0.3) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const g   = ctx.createGain();
    osc.connect(g); g.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    g.gain.setValueAtTime(vol, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + dur);
  } catch(e) {}
}
function playCorrect() {
  playTone(523,.12,'sine',.25);
  setTimeout(()=>playTone(659,.12,'sine',.25),100);
  setTimeout(()=>playTone(784,.22,'sine',.3),200);
}
function playWrong() {
  playTone(350,.1,'sawtooth',.2);
  setTimeout(()=>playTone(280,.18,'sawtooth',.2),100);
}
function playClick() {
  playTone(800,.06,'sine',.12);
}
function playStart() {
  [392,523,659].forEach((f,i)=>setTimeout(()=>playTone(f,.12,'triangle',.2),i*90));
}
function playResult(pct) {
  if (pct===100) {
    [523,659,784,1047,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f,.15,'sine',.3),i*100));
  } else if (pct>=60) {
    [523,659,784].forEach((f,i)=>setTimeout(()=>playTone(f,.15,'sine',.25),i*100));
  } else {
    playTone(392,.3,'triangle',.2);
  }
}

/* =============================================
   TEXT-TO-SPEECH (Web Speech API)
   ============================================= */
function speak(text, onEnd) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-US';
  utt.rate = 0.88;
  utt.pitch = 1;
  if (onEnd) utt.onend = onEnd;
  window.speechSynthesis.speak(utt);
}

function speakVerb(inf, ps, pp) {
  const parts = [inf];
  if (ps && ps !== '–') parts.push(ps.split('/')[0].trim());
  if (pp && pp !== '–' && pp !== ps) parts.push(pp.split('/')[0].trim());
  speak(parts.join(', '));
}

function speakWord(word) {
  if (!word || word === '–') return;
  speak(word.split('/')[0].trim());
}

function speakSentenceFull() {
  if (currentSentenceFull) speak(currentSentenceFull);
}

/* Pronuncia el verbo infinitivo que está actualmente en la verb-card del quiz clásico */
function speakCurrentVerb() {
  const inf = document.getElementById('vcVerb').textContent.trim();
  if (!inf || inf === '–') return;
  const v = VERBS.find(x => x.inf === inf);
  if (v) {
    const btn = document.getElementById('vcTtsBtn');
    btn.classList.add('speaking');
    speak(inf, () => btn.classList.remove('speaking'));
  } else {
    speak(inf);
  }
}

/* =============================================
   ERRORES GUARDADOS (localStorage)
   ============================================= */
function getStoredErrors() {
  try {
    return JSON.parse(localStorage.getItem('vq-errors') || '[]');
  } catch(e) { return []; }
}
function saveStoredErrors(arr) {
  try { localStorage.setItem('vq-errors', JSON.stringify(arr)); } catch(e) {}
}
function addError(verbInf, form) {
  const errs = getStoredErrors();
  const key  = verbInf + ':' + form;
  if (!errs.find(e => e.key === key)) {
    errs.push({ key, verbInf, form });
  }
  saveStoredErrors(errs);
  syncErrorsToIDB();
}
function removeError(verbInf, form) {
  let errs = getStoredErrors();
  errs = errs.filter(e => e.key !== (verbInf + ':' + form));
  saveStoredErrors(errs);
  syncErrorsToIDB();
}
function updateErrorsUI() {
  const errs = getStoredErrors();
  const n    = errs.length;
  // Banner en teoría
  const banner = document.getElementById('errorsBanner');
  if (banner) {
    banner.style.display = n > 0 ? 'flex' : 'none';
    const bt = document.getElementById('errorsBannerText');
    if (bt) bt.textContent = `📌 Tienes ${n} verbo${n===1?'':'s'} por repasar`;
  }
  // Quick access en quiz
  const eq = document.getElementById('errorsQuick');
  if (eq) {
    eq.style.display = n > 0 ? 'flex' : 'none';
    const sub = document.getElementById('errorsQuickSub');
    if (sub) sub.textContent = `${n} verbo${n===1?'':'s'} guardado${n===1?'':'s'} para repasar`;
  }
}
function goToErrorsMode() {
  switchTab('quiz');
  startErrorsMode();
}
function startErrorsMode() {
  const errs = getStoredErrors();
  if (!errs.length) { alert('¡No tienes errores guardados! 🎉'); return; }
  playStart();
  const pool = errs.map(e => {
    const v = VERBS.find(x => x.inf === e.verbInf);
    if (!v) return null;
    return { v, type: e.form };
  }).filter(Boolean);
  if (!pool.length) { alert('No se encontraron verbos.'); return; }
  questions = shuffle(pool);
  idx=0; score=0; okCount=0; badCount=0; lives=3; streak=0; wrongLog=[]; answered=false;
  quizType = 'classic';
  lastWasErrorMode = true;
  try { localStorage.setItem('vq-last-mode', 'errors'); } catch(e) {}
  showScreen('quizScreen');
  loadQ();
}

/* =============================================
   TEORÍA — RENDER
   ============================================= */
function selTf(f, el) {
  tFilter = f;
  document.querySelectorAll('.tf').forEach(b=>b.classList.remove('on'));
  el.classList.add('on');
  renderTheory();
}
function getTheoryList() {
  const q = (document.getElementById('tSearch')||{value:''}).value.trim().toLowerCase();
  return VERBS.filter(v => {
    const c = v.inf[0].toLowerCase();
    const fOk = tFilter==='all'
      || (tFilter==='a-f' && c>='a' && c<='f')
      || (tFilter==='g-m' && c>='g' && c<='m')
      || (tFilter==='n-z' && c>='n' && c<='z');
    const sOk = !q
      || v.inf.includes(q)
      || v.es.toLowerCase().includes(q)
      || v.ps.toLowerCase().includes(q)
      || v.pp.toLowerCase().includes(q);
    return fOk && sOk;
  });
}
function renderTheory() {
  const list = getTheoryList();
  document.getElementById('theoryList').innerHTML = list.map((v,i)=>`
    <div class="vt-row"
         style="animation:fadeUp .25s ease ${i*.018}s both"
         data-inf="${v.inf}" data-ps="${v.ps}" data-pp="${v.pp}">
      <div>
        <div class="vr-word">${v.inf}</div>
        <div class="vr-pron">${v.pInf}</div>
      </div>
      <div class="vr-es">${v.es}</div>
      <div class="vr-ps">
        <div class="vr-word">${v.ps}</div>
        <div class="vr-pron">${v.pPs}</div>
      </div>
      <div class="vr-pp">
        <div class="vr-word ${v.pp==='–'?'vr-dash':''}">${v.pp}</div>
        <div class="vr-pron">${v.pp!=='–'?v.pPp:''}</div>
      </div>
    </div>`).join('');

  document.getElementById('theoryCount').innerHTML =
    `<span style="font-size:.72rem;opacity:.8">Mantén presionado una celda para escucharla 🔊</span> · Mostrando <strong>${list.length}</strong> de <strong>${VERBS.length}</strong>`;

  /* Long-press por celda individual: cada columna pronuncia solo su forma */
  document.querySelectorAll('#theoryList .vt-row').forEach(row => {
    const cells = row.querySelectorAll(':scope > div');
    const inf = row.dataset.inf;
    const ps  = row.dataset.ps;
    const pp  = row.dataset.pp;

    /* Celda 0 → infinitivo */
    initLongPress(cells[0], () => {
      speakWord(inf);
      showTtsPop(`🔊 ${inf}`);
    });
    /* Celda 1 → español (pronuncia infinitivo igual, la columna es solo referencia) */
    initLongPress(cells[1], () => {
      speakWord(inf);
      showTtsPop(`🔊 ${inf}`);
    });
    /* Celda 2 → Past Simple */
    initLongPress(cells[2], () => {
      if (ps && ps !== '–') { speakWord(ps); showTtsPop(`🔊 ${ps}`); }
    });
    /* Celda 3 → Past Participle */
    initLongPress(cells[3], () => {
      if (pp && pp !== '–') { speakWord(pp); showTtsPop(`🔊 ${pp}`); }
    });
  });
}

/* =============================================
   LONG PRESS — helper reutilizable
   Dispara callback tras 500ms de press sostenido
   Funciona con touch y mouse
   ============================================= */
function initLongPress(el, callback) {
  let timer  = null;
  let startX = 0;
  let startY = 0;

  function start(clientX, clientY) {
    startX = clientX;
    startY = clientY;
    el.classList.add('pressing');
    timer = setTimeout(() => {
      el.classList.remove('pressing');
      callback();
    }, 500);
  }
  function cancel() {
    clearTimeout(timer);
    timer = null;
    el.classList.remove('pressing');
  }

  /* Touch */
  el.addEventListener('touchstart', e => {
    start(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  el.addEventListener('touchmove', e => {
    const dx = Math.abs(e.touches[0].clientX - startX);
    const dy = Math.abs(e.touches[0].clientY - startY);
    if (dx > 10 || dy > 10) cancel();
  }, { passive: true });
  el.addEventListener('touchend', cancel);
  el.addEventListener('touchcancel', cancel);

  /* Mouse */
  el.addEventListener('mousedown', e => { if (e.button === 0) start(e.clientX, e.clientY); });
  el.addEventListener('mousemove', e => {
    if (Math.abs(e.clientX - startX) > 10 || Math.abs(e.clientY - startY) > 10) cancel();
  });
  el.addEventListener('mouseup', cancel);
  el.addEventListener('mouseleave', cancel);

  /* Prevenir menú contextual en móvil durante long press */
  el.addEventListener('contextmenu', e => e.preventDefault());
}

/* =============================================
   POPUP TTS (pronunciación confirmada)
   Mismo comportamiento visual que las rachas pero azul/verde
   ============================================= */
function showTtsPop(text) {
  const el = document.getElementById('ttsPop');
  if (!el) return;
  el.textContent = text;
  el.classList.remove('go');
  void el.offsetWidth; /* forzar reflow para reiniciar animación */
  el.classList.add('go');
  clearTimeout(el._hideTimer);
  el._hideTimer = setTimeout(() => el.classList.remove('go'), 1200);
}

/* =============================================
   QUIZ — CONFIGURACIÓN
   ============================================= */
function selQuizType(t, el) {
  quizType = t;
  document.querySelectorAll('.type-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  playClick();
}
function selMode(m, el) {
  gameMode = m;
  document.querySelectorAll('.mode-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  playClick();
}
function selQ(n, el) {
  totalQ = n;
  document.querySelectorAll('.qbtn').forEach(b=>b.classList.remove('sel'));
  el.classList.add('sel');
  playClick();
}
function selFilter(f, el) {
  filterKey = f;
  document.querySelectorAll('.fbtn').forEach(b=>b.classList.remove('sel'));
  el.classList.add('sel');
  playClick();
}

/* =============================================
   SHUFFLE / BUILD QUESTIONS
   ============================================= */
function shuffle(a) {
  const r=[...a];
  for(let i=r.length-1;i>0;i--){
    const j=0|Math.random()*(i+1);
    [r[i],r[j]]=[r[j],r[i]];
  }
  return r;
}
function applyF(list) {
  if(filterKey==='all') return list;
  return list.filter(v=>{
    const c=v.inf[0].toLowerCase();
    if(filterKey==='a-f') return c>='a'&&c<='f';
    if(filterKey==='g-m') return c>='g'&&c<='m';
    return c>='n'&&c<='z';
  });
}
function buildQ() {
  const pool=shuffle(applyF(VERBS));
  if(!pool.length) return [];
  const isAll = totalQ >= pool.length * 2;
  const limit = isAll ? pool.length * 2 : Math.min(totalQ, pool.length * 2);
  const out=[];
  for(let i=0;out.length<limit;i++){
    const v=pool[i%pool.length];
    let type=gameMode==='ps'?'ps':gameMode==='pp'?'pp':Math.random()<0.5?'ps':'pp';
    if(type==='pp'&&v.pp==='–') type='ps';
    out.push({v,type});
    if(i>limit*5) break;
  }
  return out.slice(0,limit);
}

/* =============================================
   QUIZ — BUILD SENTENCE QUESTIONS
   ============================================= */
function buildSentenceQ() {
  // Filtrar oraciones según modo (ps / pp / both)
  let pool = SENTENCES.filter(s => {
    if (gameMode === 'ps')   return s.form === 'ps';
    if (gameMode === 'pp')   return s.form === 'pp';
    return true; // both / survival
  });
  if (!pool.length) pool = [...SENTENCES];
  pool = shuffle(pool);
  const limit = Math.min(totalQ >= pool.length ? pool.length : totalQ, pool.length);
  return pool.slice(0, limit);
}

/* =============================================
   QUIZ — START
   ============================================= */
function startGame() {
  playStart();
  idx=0; score=0; okCount=0; badCount=0; lives=3; streak=0; wrongLog=[]; answered=false;
  lastWasErrorMode = false;
  try { localStorage.setItem('vq-last-mode', 'normal'); } catch(e) {}

  if (quizType === 'sentence') {
    questions = buildSentenceQ();
    if (!questions.length) { alert('No hay oraciones disponibles.'); return; }
    showScreen('sentenceScreen');
    loadSentenceQ();
  } else {
    questions = buildQ();
    if (!questions.length) { alert('No hay verbos con ese filtro.'); return; }
    showScreen('quizScreen');
    loadQ();
  }
}

/* =============================================
   QUIZ CLÁSICO — LÓGICA
   ============================================= */
function loadQ() {
  answered=false; hintUsed=false;
  const {v,type}=questions[idx];
  document.getElementById('progressBar').style.width=(idx/questions.length*100)+'%';
  document.getElementById('qNum').textContent=idx+1;
  document.getElementById('qTotal').textContent=questions.length;
  document.getElementById('scoreDisp').textContent=score;
  const lr=document.getElementById('livesRow');
  lr.innerHTML=gameMode==='survival'?'❤️'.repeat(Math.max(0,lives))+'🖤'.repeat(Math.max(0,3-lives)):'';
  document.getElementById('vcVerb').textContent=v.inf;
  document.getElementById('vcPron').textContent=v.pInf;
  document.getElementById('vcMeaning').textContent=v.es;
  const badge=document.getElementById('vcBadge');
  badge.textContent=type==='ps'?'📝 ¿Cuál es el Past Simple?':'🎓 ¿Cuál es el Past Participle?';
  badge.className='vc-badge '+(type==='ps'?'badge-ps':'badge-pp');
  const inp=document.getElementById('ansInput');
  inp.value=''; inp.className='answer-input'; inp.disabled=false;
  inp.placeholder=type==='ps'?'Escribe el pasado simple…':'Escribe el participio pasado…';
  setTimeout(()=>inp.focus(),80);
  document.getElementById('btnCheck').disabled=true;
  document.getElementById('btnNext').className='btn-next';
  document.getElementById('feedback').className='feedback';
  document.getElementById('hintText').textContent='';
  document.getElementById('hintBtn').disabled=false;
  /* Resetear botón TTS del verbo */
  const vcBtn = document.getElementById('vcTtsBtn');
  if (vcBtn) vcBtn.classList.remove('speaking');
}
function norm(s){ return s.trim().toLowerCase().replace(/\s*\/\s*/g,'/').replace(/[^a-z\/\s]/g,'').trim(); }
function isOk(user,correct){
  if(correct==='–') return false;
  const u=norm(user);
  return correct.toLowerCase().split('/').map(x=>x.trim())
    .some(v2=>v2===u||v2.replace(/\s/g,'')===u.replace(/\s/g,''));
}
function checkAnswer(){
  if(answered) return;
  answered=true;
  const {v,type}=questions[idx];
  const user=document.getElementById('ansInput').value;
  const correct=type==='ps'?v.ps:v.pp;
  const pronC=type==='ps'?v.pPs:v.pPp;
  const right=isOk(user,correct);
  const inp=document.getElementById('ansInput');
  inp.disabled=true;
  inp.className='answer-input '+(right?'ok':'err');
  const fb=document.getElementById('feedback');
  const pts=hintUsed?5:10+(streak>=3&&!hintUsed?5:0);
  if(right){
    playCorrect();
    streak++; score+=pts; okCount++;
    removeError(v.inf, type);
    fb.className='feedback ok show';
    document.getElementById('fbIcon').textContent='✅';
    const t=document.getElementById('fbTitle');
    t.className='fb-title ok';
    t.textContent=(streak>=3&&!hintUsed)?`🔥 ¡${streak} en racha! +${pts} pts`:`¡Correcto! +${pts} pts`;
    document.getElementById('fbDetail').innerHTML=
      `<strong>${v.inf}</strong> → ${type==='ps'?'Past Simple':'Participio'}: <strong style="color:var(--accent)">${correct}</strong>`;
    document.getElementById('fbPron').textContent=pronC;
    document.getElementById('scoreDisp').textContent=score;
    if((streak===3||streak===5||streak===10)&&!hintUsed) showStreak(streak);
    if(Math.random()<0.18) confetti();
    /* Popup TTS + pronunciación de la forma correcta */
    setTimeout(() => {
      showTtsPop('🔊');
      speakWord(correct);
    }, 350);
  } else {
    playWrong();
    streak=0; badCount++;
    addError(v.inf, type);
    fb.className='feedback err show';
    document.getElementById('fbIcon').textContent='❌';
    const t=document.getElementById('fbTitle');
    t.className='fb-title err';
    t.textContent=user.trim()?'Incorrecto':'Sin respuesta';
    document.getElementById('fbDetail').innerHTML=
      `La respuesta correcta es: <strong style="color:var(--accent)">${correct}</strong>`;
    document.getElementById('fbPron').textContent=pronC;
    wrongLog.push({v,type,correct,pronC,given:user.trim()});
    if(gameMode==='survival'){
      lives--;
      document.getElementById('livesRow').innerHTML=
        '❤️'.repeat(Math.max(0,lives))+'🖤'.repeat(Math.max(0,3-lives));
    }
    /* Sin popup TTS en respuesta incorrecta */
  }
  document.getElementById('btnCheck').disabled=true;
  document.getElementById('btnNext').className='btn-next show';
  if(gameMode==='survival'&&lives<=0) setTimeout(()=>showResults(),1400);
}
function nextQ(){
  idx++;
  if(idx>=questions.length||(gameMode==='survival'&&lives<=0)) showResults();
  else loadQ();
}
function showHint(){
  const {v,type}=questions[idx];
  const correct=type==='ps'?v.ps:v.pp;
  const first=correct.replace(/\s*\/\s*.*/,'')[0];
  document.getElementById('hintText').textContent=`💡 Empieza con "${first.toUpperCase()}"…`;
  document.getElementById('hintBtn').disabled=true;
  hintUsed=true;
}
function onTyping(){
  document.getElementById('btnCheck').disabled=!document.getElementById('ansInput').value.trim();
}
function onKey(e){
  if(e.key==='Enter'){
    if(!answered&&document.getElementById('ansInput').value.trim()) checkAnswer();
    else if(answered) nextQ();
  }
}

/* =============================================
   QUIZ "COMPLETA LA ORACIÓN" — LÓGICA
   ============================================= */
function loadSentenceQ() {
  answered = false;
  const s = questions[idx];

  // Barra progreso
  document.getElementById('sProgressBar').style.width=(idx/questions.length*100)+'%';
  document.getElementById('sQNum').textContent=idx+1;
  document.getElementById('sQTotal').textContent=questions.length;
  document.getElementById('sScoreDisp').textContent=score;

  // Vidas survival
  const slr = document.getElementById('sLivesRow');
  slr.innerHTML = gameMode==='survival'
    ? '❤️'.repeat(Math.max(0,lives))+'🖤'.repeat(Math.max(0,3-lives)) : '';

  // Oración con blank
  const blankHtml = `<span class="sc-blank" id="scBlank">___</span>`;
  const sentHtml  = s.template.replace('___', blankHtml);
  document.getElementById('scSentence').innerHTML = sentHtml;

  // Guardar oración completa para TTS
  currentSentenceFull = s.full;
  document.getElementById('scTtsRow').style.display = 'none';

  // Reset feedback
  document.getElementById('sFeedback').className = 'feedback';
  document.getElementById('sBtnNext').className  = 'btn-next';

  // Generar 3 opciones: la correcta + 2 distractores
  const correctVerb = VERBS.find(v => v.inf === s.verb);
  const correctAns  = s.answer;
  const correctForm = s.form;

  // Distractores: otras formas del mismo verbo o verbos similares
  const distractors = buildDistractors(correctVerb, correctAns, correctForm);

  const options = shuffle([
    { word: correctAns, form: correctForm, isCorrect: true,  verb: correctVerb },
    { word: distractors[0].word, form: distractors[0].form, isCorrect: false, verb: distractors[0].verb },
    { word: distractors[1].word, form: distractors[1].form, isCorrect: false, verb: distractors[1].verb },
  ]);

  const optsEl = document.getElementById('scOptions');
  optsEl.innerHTML = options.map((opt, i) => {
    const formLabel = opt.form === 'ps' ? 'Past Simple' : opt.form === 'pp' ? 'Past Part.' : 'Infinitive';
    const badgeClass = opt.form === 'ps' ? 'badge-ps2' : opt.form === 'pp' ? 'badge-pp2' : 'badge-inf';
    /* Guardamos la palabra en data-word para el long-press */
    return `
      <button class="sc-option" id="scOpt${i}"
              data-word="${opt.word.replace(/"/g,'&quot;')}"
              data-correct="${opt.isCorrect}"
              data-verb="${opt.verb ? opt.verb.inf : ''}">
        <div class="sc-option-verb">
          <div class="sc-opt-inf">${opt.verb ? opt.verb.inf : ''}</div>
          <div class="sc-opt-word">${opt.word}</div>
        </div>
        <span class="sc-option-badge ${badgeClass}">${formLabel}</span>
      </button>`;
  }).join('');

  /* Asignar click normal y long-press a cada opción */
  options.forEach((opt, i) => {
    const btn = document.getElementById('scOpt' + i);
    if (!btn) return;

    /* Click corto → seleccionar respuesta */
    btn.addEventListener('click', () => {
      selectSentenceOpt(i, opt.isCorrect, opt.word, opt.verb ? opt.verb.inf : '');
    });

    /* Long press → pronunciar la palabra con popup TTS */
    initLongPress(btn, () => {
      speakWord(opt.word);
      showTtsPop(`🔊 ${opt.word}`);
    });
  });
}

function buildDistractors(correctVerb, correctAns, correctForm) {
  const result = [];
  // Distractor 1: otra forma del mismo verbo
  if (correctForm === 'ps') {
    // usar el pp como distractor, o el infinitivo
    const alt = (correctVerb.pp !== '–' && correctVerb.pp !== correctAns)
      ? { word: correctVerb.pp, form: 'pp', verb: correctVerb }
      : { word: correctVerb.inf, form: 'inf', verb: correctVerb };
    result.push(alt);
  } else {
    const alt = (correctVerb.ps !== correctAns)
      ? { word: correctVerb.ps, form: 'ps', verb: correctVerb }
      : { word: correctVerb.inf, form: 'inf', verb: correctVerb };
    result.push(alt);
  }
  // Distractor 2: verbo diferente, misma forma — nunca igual a la correcta ni al distractor 1
  const usedWords = new Set([correctAns.toLowerCase(), result[0].word.toLowerCase()]);
  const others = shuffle(VERBS.filter(v => v.inf !== correctVerb.inf));
  for (const v of others) {
    const word = correctForm === 'ps' ? v.ps : v.pp;
    if (word && word !== '–' && !usedWords.has(word.toLowerCase())) {
      result.push({ word, form: correctForm, verb: v });
      break;
    }
  }
  // fallback seguro: infinitivo de un verbo diferente que no esté ya usado
  if (result.length < 2) {
    for (const v of others) {
      if (!usedWords.has(v.inf.toLowerCase())) {
        result.push({ word: v.inf, form: 'inf', verb: v });
        break;
      }
    }
  }
  return result;
}

function selectSentenceOpt(i, isCorrect, word, verbInf) {
  if (answered) return;
  answered = true;
  playClick();

  // Deshabilitar todas las opciones
  document.querySelectorAll('.sc-option').forEach(b => b.disabled = true);

  // Marcar seleccionada
  const btn = document.getElementById('scOpt' + i);
  btn.classList.add(isCorrect ? 'correct' : 'wrong');

  // Llenar el blank
  const blank = document.getElementById('scBlank');
  if (blank) {
    blank.textContent = word;
    blank.classList.add(isCorrect ? 'filled-ok' : 'filled-err');
  }

  const fb  = document.getElementById('sFeedback');
  const pts = 10 + (streak >= 3 ? 5 : 0);

  if (isCorrect) {
    playCorrect();
    streak++; okCount++;
    score += pts;

    removeError(verbInf, questions[idx].form);

    fb.className = 'feedback ok show';
    document.getElementById('sFbIcon').textContent = '✅';
    const t = document.getElementById('sFbTitle');
    t.className = 'fb-title ok';
    t.textContent = streak >= 3 ? `🔥 ¡${streak} en racha! +${pts} pts` : `¡Correcto! +${pts} pts`;
    document.getElementById('sFbDetail').innerHTML =
      `<strong>${verbInf}</strong>: la forma correcta era <strong style="color:var(--accent)">${word}</strong>`;
    document.getElementById('sScoreDisp').textContent = score;

    // Mostrar TTS de oración completa
    document.getElementById('scTtsRow').style.display = 'flex';

    if ((streak === 3 || streak === 5 || streak === 10)) showStreak(streak);
    if (Math.random() < 0.18) confetti();
  } else {
    playWrong();
    streak = 0; badCount++;
    addError(verbInf, questions[idx].form);

    fb.className = 'feedback err show';
    document.getElementById('sFbIcon').textContent = '❌';
    const t = document.getElementById('sFbTitle');
    t.className = 'fb-title err';
    t.textContent = 'Incorrecto';
    document.getElementById('sFbDetail').innerHTML =
      `La respuesta correcta era: <strong style="color:var(--accent)">${questions[idx].answer}</strong>`;

    // Highlight correct option
    document.querySelectorAll('.sc-option').forEach(b => {
      const w = b.querySelector('.sc-opt-word');
      if (w && w.textContent === questions[idx].answer) b.classList.add('correct');
    });

    wrongLog.push({
      v: VERBS.find(v=>v.inf===questions[idx].verb) || {inf:questions[idx].verb, pInf:'', es:''},
      type: questions[idx].form,
      correct: questions[idx].answer,
      pronC: '',
      given: word
    });

    if (gameMode === 'survival') {
      lives--;
      document.getElementById('sLivesRow').innerHTML =
        '❤️'.repeat(Math.max(0,lives)) + '🖤'.repeat(Math.max(0,3-lives));
    }
  }

  document.getElementById('sBtnNext').className = 'btn-next show';
  if (gameMode === 'survival' && lives <= 0) setTimeout(()=>showResults(), 1400);
}

function nextSentenceQ() {
  idx++;
  if (idx >= questions.length || (gameMode === 'survival' && lives <= 0)) showResults();
  else loadSentenceQ();
}

/* =============================================
   RESULTADOS
   ============================================= */
function showResults() {
  showScreen('resultScreen');
  updateErrorsUI();
  const pct = Math.round(okCount / questions.length * 100);
  lastScore = score; lastOk = okCount; lastBad = badCount;
  lastTotal = questions.length; lastPct = pct;
  setTimeout(()=>playResult(pct), 400);
  document.getElementById('rPts').textContent  = score;
  document.getElementById('rOk').textContent   = okCount;
  document.getElementById('rBad').textContent  = badCount;
  let emoji, title, sub, rankTxt, rankGrad;
  if      (pct===100){ emoji='🏆'; title='¡Perfecto!';     sub='Dominaste todos los verbos';    rankTxt='🥇 Maestro del Inglés';   rankGrad='linear-gradient(135deg,#e67e22,#c0390b)'; }
  else if (pct>= 80) { emoji='🎉'; title='¡Excelente!';    sub='Casi los tienes todos';          rankTxt='🥈 Nivel Avanzado';       rankGrad='linear-gradient(135deg,#1e7abf,#8e44ad)'; }
  else if (pct>= 60) { emoji='💪'; title='¡Bien hecho!';   sub='Sigue practicando';              rankTxt='🥉 Nivel Intermedio';     rankGrad='linear-gradient(135deg,#2e8b3a,#1e7abf)'; }
  else if (pct>= 40) { emoji='📚'; title='¡Tú puedes!';    sub='Repasa los verbos marcados';    rankTxt='📖 Nivel Básico';          rankGrad='linear-gradient(135deg,#e67e22,#c0392b)'; }
  else               { emoji='🔄'; title='¡No te rindas!'; sub='La práctica hace al maestro';   rankTxt='🌱 Principiante';          rankGrad='linear-gradient(135deg,#c0392b,#7b241c)'; }
  lastEmoji=emoji; lastRank=rankTxt;
  document.getElementById('resEmoji').textContent = emoji;
  document.getElementById('resTitle').textContent = title;
  document.getElementById('resSub').textContent   = sub + ` · ${pct}% correcto`;
  const rc = document.getElementById('rankChip');
  rc.textContent  = rankTxt;
  rc.style.background = rankGrad;
  rc.style.color  = '#fff';
  const ws = document.getElementById('wrongSection');
  if (wrongLog.length) {
    ws.innerHTML = `<div class="wlog-title">Para repasar (${wrongLog.length})</div>
    <div class="wlog-scroll">${wrongLog.map(w=>`
      <div class="wi">
        <div class="wi-top">
          <span>${w.v.inf}</span><span class="wi-pron">${w.v.pInf}</span>
          <span style="color:var(--muted);font-size:.7rem">${w.v.es}</span>
        </div>
        <div class="wi-ans">
          ${w.type==='ps'?'Past Simple':'Participio'}: <span>${w.correct}</span>
          ${w.pronC?`<span class="wi-pron">${w.pronC}</span>`:''}
          ${w.given?`· Tú: <span class="given">${w.given}</span>`:''}
        </div>
      </div>`).join('')}</div>`;
  } else {
    ws.innerHTML = '';
  }
  if (pct >= 80) confetti(50);
}

/* =============================================
   CANVAS PARA COMPARTIR
   ============================================= */
function rrect(ctx, x, y, w, h, r, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y);
  ctx.quadraticCurveTo(x+w,y,x+w,y+r); ctx.lineTo(x+w,y+h-r);
  ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h); ctx.lineTo(x+r,y+h);
  ctx.quadraticCurveTo(x,y+h,x,y+h-r); ctx.lineTo(x,y+r);
  ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath();
  if(fill){ctx.fillStyle=fill;ctx.fill();}
  if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke();}
}
function buildShareCanvas() {
  const isLight = document.body.classList.contains('light');
  const W=1080, H=580;
  const cv=document.createElement('canvas');
  cv.width=W; cv.height=H;
  const ctx=cv.getContext('2d');
  const T = isLight ? {
    bg0:'#e8f4ff', bg1:'#e0f0e8', bg2:'#f5f5f5',
    glowG:'rgba(46,139,58,0.12)', glowB:'rgba(30,122,191,0.10)',
    border:'rgba(0,0,0,0.08)',
    headerFill0:'rgba(30,122,191,0.18)', headerFill1:'rgba(46,139,58,0.12)',
    headerSep:'rgba(0,0,0,0.08)',
    logoColor:'#1a3a5c', subtitleColor:'rgba(0,0,0,0.38)',
    subTextColor:'rgba(0,0,0,0.50)',
    boxFill:'rgba(0,0,0,0.04)', boxStroke:'rgba(0,0,0,0.10)',
    statLabel:'rgba(0,0,0,0.40)',
    barTrack:'rgba(0,0,0,0.08)', barPct:'rgba(0,0,0,0.35)',
    footerColor:'rgba(30,122,191,0.85)',
    accentLine0:'#2e8b3a', accentLine1:'#1e7abf',
  } : {
    bg0:'#0d1b2a', bg1:'#0f2a1a', bg2:'#091020',
    glowG:'rgba(46,139,58,0.20)', glowB:'rgba(30,122,191,0.16)',
    border:'rgba(255,255,255,0.08)',
    headerFill0:'rgba(30,122,191,0.25)', headerFill1:'rgba(46,139,58,0.18)',
    headerSep:'rgba(255,255,255,0.10)',
    logoColor:'#eaf2fb', subtitleColor:'rgba(255,255,255,0.45)',
    subTextColor:'rgba(255,255,255,0.60)',
    boxFill:'rgba(255,255,255,0.06)', boxStroke:'rgba(255,255,255,0.12)',
    statLabel:'rgba(255,255,255,0.45)',
    barTrack:'rgba(255,255,255,0.10)', barPct:'rgba(255,255,255,0.38)',
    footerColor:'rgba(30,122,191,0.80)',
    accentLine0:'#2e8b3a', accentLine1:'#1e7abf',
  };
  const bg=ctx.createLinearGradient(0,0,W,H);
  bg.addColorStop(0,T.bg0); bg.addColorStop(0.55,T.bg1); bg.addColorStop(1,T.bg2);
  ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
  const gG=ctx.createRadialGradient(0,0,0,0,0,500);
  gG.addColorStop(0,T.glowG); gG.addColorStop(1,'rgba(46,139,58,0)');
  ctx.fillStyle=gG; ctx.fillRect(0,0,W,H);
  const gB=ctx.createRadialGradient(W,H,0,W,H,520);
  gB.addColorStop(0,T.glowB); gB.addColorStop(1,'rgba(30,122,191,0)');
  ctx.fillStyle=gB; ctx.fillRect(0,0,W,H);
  rrect(ctx,14,14,W-28,H-28,24,null,T.border);
  const hGrad=ctx.createLinearGradient(0,0,W,0);
  hGrad.addColorStop(0,T.headerFill0); hGrad.addColorStop(0.5,T.headerFill1); hGrad.addColorStop(1,T.headerFill0);
  const hr=22;
  ctx.beginPath();
  ctx.moveTo(14+hr,14); ctx.lineTo(W-14-hr,14);
  ctx.quadraticCurveTo(W-14,14,W-14,14+hr); ctx.lineTo(W-14,86);
  ctx.lineTo(14,86); ctx.lineTo(14,14+hr);
  ctx.quadraticCurveTo(14,14,14+hr,14); ctx.closePath();
  ctx.fillStyle=hGrad; ctx.fill();
  ctx.beginPath(); ctx.moveTo(14,86); ctx.lineTo(W-14,86);
  ctx.strokeStyle=T.headerSep; ctx.lineWidth=1; ctx.stroke();
  ctx.font='bold 30px "Segoe UI Emoji","Segoe UI",Arial,sans-serif';
  ctx.fillStyle=T.logoColor; ctx.textAlign='left';
  ctx.fillText('🎓 VerbQuest', 44, 60);
  ctx.font='20px "Segoe UI",Arial,sans-serif';
  ctx.fillStyle=T.subtitleColor; ctx.textAlign='right';
  ctx.fillText('English File · Verbos Irregulares', W-44, 60);
  ctx.font='120px "Segoe UI Emoji",serif';
  ctx.textAlign='center'; ctx.fillText(lastEmoji, 130, 230);
  const tGrad=ctx.createLinearGradient(240,130,750,130);
  tGrad.addColorStop(0,'#2e8b3a'); tGrad.addColorStop(1,'#1e7abf');
  ctx.font='bold 70px "Segoe UI",Arial,sans-serif';
  ctx.fillStyle=tGrad; ctx.textAlign='left';
  let titleTxt='¡No te rindas!';
  if(lastPct===100) titleTxt='¡Perfecto!';
  else if(lastPct>=80) titleTxt='¡Excelente!';
  else if(lastPct>=60) titleTxt='¡Bien hecho!';
  else if(lastPct>=40) titleTxt='¡Tú puedes!';
  ctx.fillText(titleTxt, 240, 200);
  ctx.font='30px "Segoe UI",Arial,sans-serif';
  ctx.fillStyle=T.subTextColor;
  ctx.fillText(`${lastPct}% correcto · ${lastOk} de ${lastTotal} preguntas`, 240, 248);
  const chipX=240,chipY=274,chipW=400,chipH=54;
  const chipG=ctx.createLinearGradient(chipX,0,chipX+chipW,0);
  if(lastPct===100){chipG.addColorStop(0,'#e67e22');chipG.addColorStop(1,'#c0390b');}
  else if(lastPct>=80){chipG.addColorStop(0,'#1e7abf');chipG.addColorStop(1,'#8e44ad');}
  else if(lastPct>=60){chipG.addColorStop(0,'#2e8b3a');chipG.addColorStop(1,'#1e7abf');}
  else if(lastPct>=40){chipG.addColorStop(0,'#e67e22');chipG.addColorStop(1,'#c0392b');}
  else{chipG.addColorStop(0,'#c0392b');chipG.addColorStop(1,'#7b241c');}
  rrect(ctx,chipX,chipY,chipW,chipH,27,chipG,null);
  ctx.font='bold 26px "Segoe UI Emoji","Segoe UI",Arial,sans-serif';
  ctx.fillStyle='#fff'; ctx.textAlign='center';
  ctx.fillText(lastRank, chipX+chipW/2, chipY+36);
  const stats=[
    {label:'Puntos',    val:String(lastScore), color:'#e67e22'},
    {label:'Correctas', val:String(lastOk),    color:'#2e8b3a'},
    {label:'Errores',   val:String(lastBad),   color:'#c0392b'},
  ];
  const bW=150,bH=112,bY=360,bX0=240,gap=18;
  stats.forEach((s,i)=>{
    const bx=bX0+i*(bW+gap);
    rrect(ctx,bx,bY,bW,bH,18,T.boxFill,T.boxStroke);
    ctx.font='bold 52px "Segoe UI",Arial,sans-serif';
    ctx.fillStyle=s.color; ctx.textAlign='center';
    ctx.fillText(s.val, bx+bW/2, bY+65);
    ctx.font='18px "Segoe UI",Arial,sans-serif';
    ctx.fillStyle=T.statLabel;
    ctx.fillText(s.label.toUpperCase(), bx+bW/2, bY+90);
  });
  const barX=240,barY=500,barTW=480,barH=14;
  rrect(ctx,barX,barY,barTW,barH,7,T.barTrack,null);
  if(lastPct>0){
    const filled=barTW*(lastPct/100);
    const pG=ctx.createLinearGradient(barX,0,barX+filled,0);
    pG.addColorStop(0,'#2e8b3a'); pG.addColorStop(1,'#1e7abf');
    rrect(ctx,barX,barY,filled,barH,7,pG,null);
  }
  ctx.font='16px "Segoe UI",Arial,sans-serif';
  ctx.fillStyle=T.barPct; ctx.textAlign='left';
  ctx.fillText(`${lastPct}%`, barX+barTW+14, barY+12);
  const lG=ctx.createLinearGradient(0,100,0,H-20);
  lG.addColorStop(0,T.accentLine0); lG.addColorStop(0.5,T.accentLine1); lG.addColorStop(1,T.accentLine0);
  ctx.strokeStyle=lG; ctx.lineWidth=5;
  ctx.beginPath(); ctx.moveTo(42,104); ctx.lineTo(42,H-20); ctx.stroke();
  ctx.font='22px "Segoe UI",Arial,sans-serif';
  ctx.fillStyle=T.footerColor; ctx.textAlign='left';
  ctx.fillText(`¿Puedes superarme? 👉 ${APP_URL.replace('https://','')}`, 240, H-22);
  return cv;
}
function canvasToFile(cv, name) {
  return new Promise(res => cv.toBlob(b => res(new File([b], name, {type:'image/png'})), 'image/png'));
}
async function shareWhatsApp() {
  playClick();
  const msgText = `🎓 *VerbQuest · Verbos Irregulares*\n\n🏅 Rango: *${lastRank}*\n⭐ Puntos: *${lastScore}*\n✅ Correctas: *${lastOk} de ${lastTotal}*\n📊 Resultado: *${lastPct}%*\n\n¿Puedes superarme? 😏\n👉 ${APP_URL}`;
  const cv = buildShareCanvas();
  if (navigator.canShare) {
    try {
      const file = await canvasToFile(cv, 'verbquest-resultado.png');
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], text: msgText });
        return;
      }
    } catch(e) {}
  }
  _showSharePanel(cv, msgText, APP_URL);
}
function _showSharePanel(cv, msgText, appUrl) {
  cv.toBlob(blob => {
    const imgUrl = URL.createObjectURL(blob);
    let imgEl = document.getElementById('shareImgPreview');
    if (!imgEl) {
      imgEl = document.createElement('img');
      imgEl.id = 'shareImgPreview';
      imgEl.style.cssText = 'width:100%;border-radius:12px;margin-bottom:.7rem;display:block;box-shadow:0 4px 20px rgba(0,0,0,.4)';
      const box = document.getElementById('shareTextBox');
      if (box) box.parentNode.insertBefore(imgEl, box);
    }
    imgEl.src = imgUrl;
    const textBox = document.getElementById('shareTextBox');
    if (textBox) textBox.textContent = msgText;
    if (!document.getElementById('btnDownloadImg')) {
      const a = document.createElement('a');
      a.id = 'btnDownloadImg'; a.className = 'btn-copy';
      a.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:.3rem;text-decoration:none';
      a.textContent = '⬇️ Guardar imagen';
      const row = document.querySelector('.share-copy-row');
      if (row) row.prepend(a);
    }
    const dlBtn = document.getElementById('btnDownloadImg');
    if (dlBtn) { dlBtn.href = imgUrl; dlBtn.download = 'verbquest-resultado.png'; }
    document.getElementById('sharePreview').classList.add('show');
    window.open('https://wa.me/?text=' + encodeURIComponent(msgText), '_blank');
  }, 'image/png');
}
function copyShareText() {
  const text = document.getElementById('shareTextBox').textContent;
  const btn  = document.getElementById('btnCopy');
  const markCopied = () => {
    btn.textContent = '✅ ¡Copiado!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '📋 Copiar texto'; btn.classList.remove('copied'); }, 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(markCopied).catch(() => {
      /* Clipboard API falló — intentar selección manual */
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta); ta.focus(); ta.select();
      try { document.execCommand('copy'); markCopied(); } catch(e) {}
      document.body.removeChild(ta);
    });
  } else {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.focus(); ta.select();
    try { document.execCommand('copy'); markCopied(); } catch(e) {}
    document.body.removeChild(ta);
  }
}
function closeSharePreview() {
  document.getElementById('sharePreview').classList.remove('show');
}

/* =============================================
   NAV / SCREENS
   ============================================= */
/* =============================================
   MODAL DE CONFIRMACIÓN — ABANDONAR QUIZ
   ============================================= */
function isQuizActive() {
  const activeScreen = document.querySelector('#pageQuiz .screen.active');
  if (!activeScreen) return false;
  const id = activeScreen.id;
  return (id === 'quizScreen' || id === 'sentenceScreen') && questions.length > 0 && idx < questions.length;
}

function showQuitModal(onConfirm) {
  const isLight    = document.body.classList.contains('light');
  const bg         = isLight ? '#ffffff'              : '#1a2a3a';
  const overlayBg  = isLight ? 'rgba(0,0,0,0.45)'    : 'rgba(0,0,0,0.68)';
  const textColor  = isLight ? '#1a3a5c'              : '#eaf2fb';
  const subColor   = isLight ? '#4a5568'              : 'rgba(255,255,255,0.68)';
  const divider    = isLight ? 'rgba(0,0,0,0.08)'     : 'rgba(255,255,255,0.08)';
  const shadow     = isLight ? '0 8px 40px rgba(0,0,0,0.16)' : '0 8px 40px rgba(0,0,0,0.55)';
  const pillBg     = isLight ? 'rgba(30,122,191,0.10)' : 'rgba(30,122,191,0.18)';
  const pillColor  = isLight ? '#1e6091'              : '#7ec8f7';

  /* Datos reales del quiz en curso */
  const currentQ   = idx + 1;
  const totalQs    = questions.length;
  const isSurvival = lives < 99;
  const livesLeft  = lives;
  const streakNow  = streak;
  const scoreNow   = score;

  /* Overlay */
  const overlay = document.createElement('div');
  overlay.id = 'quitModalOverlay';
  overlay.style.cssText = `
    position:fixed;inset:0;background:${overlayBg};
    z-index:99998;display:flex;align-items:center;justify-content:center;
    animation:qmFadeIn .25s ease;padding:1rem;box-sizing:border-box;
  `;

  /* Tarjeta */
  const card = document.createElement('div');
  card.style.cssText = `
    background:${bg};border-radius:24px;padding:1.8rem 1.6rem 1.5rem;
    max-width:320px;width:100%;text-align:center;
    box-shadow:${shadow};position:relative;z-index:99999;
    animation:qmSlideUp .3s cubic-bezier(.34,1.56,.64,1);
  `;

  /* Filas de datos del quiz actual */
  const streakRow  = streakNow > 0
    ? `<div style="display:flex;align-items:center;justify-content:space-between;padding:.45rem 0;border-bottom:1px solid ${divider}">
         <span style="color:${subColor};font-size:.88rem">🔥 Racha</span>
         <span style="font-weight:800;color:#e67e22;font-size:.95rem">${streakNow} seguidas</span>
       </div>` : '';

  const livesRow   = isSurvival
    ? `<div style="display:flex;align-items:center;justify-content:space-between;padding:.45rem 0;border-bottom:1px solid ${divider}">
         <span style="color:${subColor};font-size:.88rem">❤️ Vidas</span>
         <span style="font-weight:800;color:#e74c3c;font-size:.95rem">${'❤️'.repeat(livesLeft)}</span>
       </div>` : '';

  card.innerHTML = `
    <style>
      @keyframes qmFadeIn{from{opacity:0}to{opacity:1}}
      @keyframes qmSlideUp{from{opacity:0;transform:translateY(40px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}
      #quitModalOverlay .qm-btn{
        width:100%;padding:.78rem 1rem;border:none;border-radius:99px;
        font-size:1rem;font-weight:800;font-family:'Nunito',sans-serif;
        cursor:pointer;letter-spacing:.02em;transition:transform .15s,box-shadow .15s;
      }
      #quitModalOverlay .qm-btn:active{transform:scale(.97)}
      #quitModalOverlay .qm-btn-stay{
        background:linear-gradient(135deg,#1e7abf,#2e8b3a);color:#fff;
        box-shadow:0 4px 16px rgba(30,122,191,.35);margin-bottom:.75rem;
      }
      #quitModalOverlay .qm-btn-stay:hover{transform:scale(1.03);box-shadow:0 6px 22px rgba(30,122,191,.45)}
      #quitModalOverlay .qm-btn-quit{
        background:transparent;color:#e74c3c;
        border:2px solid rgba(231,76,60,.35);
      }
      #quitModalOverlay .qm-btn-quit:hover{background:rgba(231,76,60,.08)}
    </style>

    <div style="font-size:2rem;margin-bottom:.5rem">⚠️</div>

    <div style="font-size:1.35rem;font-weight:900;font-family:'Fredoka One',cursive;
                color:${textColor};margin-bottom:.3rem;line-height:1.25">
      ¿Abandonar el quiz?
    </div>
    <div style="font-size:.875rem;color:${subColor};font-family:'Nunito',sans-serif;
                margin-bottom:1.1rem;line-height:1.5">
      Perderás todo el progreso de esta sesión.
    </div>

    <!-- Datos en tiempo real -->
    <div style="background:${pillBg};border-radius:14px;padding:.6rem .9rem;
                margin-bottom:1.3rem;text-align:left;font-family:'Nunito',sans-serif">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:.45rem 0;border-bottom:1px solid ${divider}">
        <span style="color:${subColor};font-size:.88rem">📋 Pregunta</span>
        <span style="font-weight:800;color:${pillColor};font-size:.95rem">${currentQ} de ${totalQs}</span>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:.45rem 0;border-bottom:1px solid ${divider}">
        <span style="color:${subColor};font-size:.88rem">⭐ Puntos</span>
        <span style="font-weight:800;color:${pillColor};font-size:.95rem">${scoreNow}</span>
      </div>
      ${streakRow}
      ${livesRow}
    </div>

    <button class="qm-btn qm-btn-stay"  id="qmBtnStay">🎮 Seguir jugando</button>
    <button class="qm-btn qm-btn-quit"  id="qmBtnQuit">Salir del quiz</button>
  `;

  overlay.appendChild(card);
  document.body.appendChild(overlay);

  /* Cerrar al tocar fuera */
  overlay.addEventListener('click', e => { if (e.target === overlay) closeQuitModal(); });

  /* Seguir jugando */
  document.getElementById('qmBtnStay').addEventListener('click', closeQuitModal);

  /* Confirmar salida */
  document.getElementById('qmBtnQuit').addEventListener('click', () => {
    closeQuitModal(() => onConfirm());
  });
}

function closeQuitModal(cb) {
  const overlay = document.getElementById('quitModalOverlay');
  if (!overlay) { if (cb) cb(); return; }
  overlay.style.animation = 'qmFadeIn .2s ease reverse forwards';
  setTimeout(() => { overlay.remove(); if (cb) cb(); }, 200);
}

function switchTab(tab) {
  playClick();

  if (tab === 'theory' && isQuizActive()) {
    showQuitModal(() => {
      /* Reset estado del quiz */
      questions = []; idx = 0; score = 0; streak = 0;
      okCount = 0; badCount = 0; lives = 3; wrongLog = [];
      answered = false; hintUsed = false;
      /* Ir a teoría */
      document.querySelectorAll('.page,.quiz-page').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      document.getElementById('pageTheory').classList.add('active');
      document.getElementById('tabTheory').classList.add('active');
      showScreen('startScreen');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    return;
  }

  document.querySelectorAll('.page,.quiz-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  if (tab === 'theory') {
    document.getElementById('pageTheory').classList.add('active');
    document.getElementById('tabTheory').classList.add('active');
  } else {
    document.getElementById('pageQuiz').classList.add('active');
    document.getElementById('tabQuiz').classList.add('active');
    showScreen('startScreen');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function playAgain() {
  /* Leer fuente de verdad desde localStorage para no depender de variable en memoria */
  let wasErrors = lastWasErrorMode;
  try { wasErrors = localStorage.getItem('vq-last-mode') === 'errors'; } catch(e) {}

  if (wasErrors) {
    const errs = getStoredErrors();
    if (errs.length) {
      startErrorsMode();
    } else {
      showErrorsClearedCard();
    }
  } else {
    startGame();
  }
}

/* =============================================
   TARJETA "ERRORES COMPLETADOS"
   Reemplaza el alert() nativo — respeta modo oscuro/claro
   ============================================= */
function showErrorsClearedCard() {
  const isLight = document.body.classList.contains('light');

  /* Colores según tema */
  const bg        = isLight ? '#ffffff' : '#1a2a3a';
  const overlay   = isLight ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.65)';
  const textColor = isLight ? '#1a3a5c' : '#eaf2fb';
  const subColor  = isLight ? '#555' : 'rgba(255,255,255,0.7)';
  const btnBg     = isLight
    ? 'linear-gradient(135deg,#1e7abf,#2e8b3a)'
    : 'linear-gradient(135deg,#1e7abf,#2e8b3a)';
  const shadow    = isLight
    ? '0 8px 40px rgba(0,0,0,0.18)'
    : '0 8px 40px rgba(0,0,0,0.55)';

  /* Overlay */
  const overlay_el = document.createElement('div');
  overlay_el.id = 'errClearedOverlay';
  overlay_el.style.cssText = `
    position:fixed;inset:0;background:${overlay};
    z-index:99998;display:flex;align-items:center;justify-content:center;
    animation:ecFadeIn .3s ease;
  `;

  /* Tarjeta */
  const card = document.createElement('div');
  card.style.cssText = `
    background:${bg};border-radius:24px;padding:2rem 1.8rem 1.6rem;
    max-width:320px;width:90%;text-align:center;
    box-shadow:${shadow};position:relative;z-index:99999;
    animation:ecSlideUp .35s cubic-bezier(.34,1.56,.64,1);
  `;

  /* SVG bandera EE.UU. ondeando */
  card.innerHTML = `
    <style>
      @keyframes ecFadeIn{from{opacity:0}to{opacity:1}}
      @keyframes ecSlideUp{from{opacity:0;transform:translateY(40px) scale(.93)}to{opacity:1;transform:translateY(0) scale(1)}}
      @keyframes flagWave{
        0%{d:path("M0,0 Q20,-6 40,0 Q60,6 80,0 L80,50 Q60,56 40,50 Q20,44 0,50 Z")}
        25%{d:path("M0,0 Q20,6 40,0 Q60,-6 80,0 L80,50 Q60,44 40,50 Q20,56 0,50 Z")}
        50%{d:path("M0,0 Q20,-4 40,2 Q60,8 80,2 L80,52 Q60,46 40,52 Q20,58 0,52 Z")}
        75%{d:path("M0,0 Q20,4 40,-2 Q60,-8 80,-2 L80,48 Q60,54 40,48 Q20,42 0,48 Z")}
        100%{d:path("M0,0 Q20,-6 40,0 Q60,6 80,0 L80,50 Q60,56 40,50 Q20,44 0,50 Z")}
      }
      #flagPath{animation:flagWave 2s ease-in-out infinite}
      .ec-btn{
        margin-top:1.4rem;padding:.75rem 2rem;
        background:${btnBg};color:#fff;border:none;
        border-radius:99px;font-size:1rem;font-weight:800;
        font-family:'Nunito',sans-serif;cursor:pointer;
        letter-spacing:.03em;width:100%;
        box-shadow:0 4px 16px rgba(30,122,191,.35);
        transition:transform .15s,box-shadow .15s;
      }
      .ec-btn:hover{transform:scale(1.04);box-shadow:0 6px 22px rgba(30,122,191,.45)}
      .ec-btn:active{transform:scale(.97)}
    </style>

    <svg viewBox="0 0 80 50" width="160" height="100"
         style="display:block;margin:0 auto .2rem;filter:drop-shadow(0 4px 12px rgba(0,0,0,.25))">
      <defs>
        <clipPath id="flagClip">
          <path id="flagPath" d="M0,0 Q20,-6 40,0 Q60,6 80,0 L80,50 Q60,56 40,50 Q20,44 0,50 Z"/>
        </clipPath>
      </defs>
      <!-- Franjas rojas y blancas -->
      <g clip-path="url(#flagClip)">
        <rect width="80" height="50" fill="#B22234"/>
        <rect y="3.85"  width="80" height="3.85" fill="#fff"/>
        <rect y="7.7"   width="80" height="3.85" fill="#B22234"/>
        <rect y="11.55" width="80" height="3.85" fill="#fff"/>
        <rect y="15.4"  width="80" height="3.85" fill="#B22234"/>
        <rect y="19.25" width="80" height="3.85" fill="#fff"/>
        <rect y="23.1"  width="80" height="3.85" fill="#B22234"/>
        <rect y="26.95" width="80" height="3.85" fill="#fff"/>
        <rect y="30.8"  width="80" height="3.85" fill="#B22234"/>
        <rect y="34.65" width="80" height="3.85" fill="#fff"/>
        <rect y="38.5"  width="80" height="3.85" fill="#B22234"/>
        <rect y="42.35" width="80" height="3.85" fill="#fff"/>
        <rect y="46.15" width="80" height="3.85" fill="#B22234"/>
        <!-- Cantón azul -->
        <rect width="32" height="26.95" fill="#3C3B6E"/>
        <!-- Estrellas 5×4 + 4×5 = 50 estrellas simplificadas como puntos -->
        <g fill="#fff" font-size="3.2" text-anchor="middle">
          ${(()=>{
            const stars=[];
            for(let r=0;r<9;r++){
              const cols = r%2===0 ? 6 : 5;
              const xStart = r%2===0 ? 2.4 : 5.0;
              for(let c=0;c<cols;c++){
                stars.push(`<circle cx="${xStart+c*5.2}" cy="${2.8+r*2.8}" r="1.1"/>`);
              }
            }
            return stars.join('');
          })()}
        </g>
      </g>
      <!-- Asta -->
      <rect x="-1" y="-2" width="1.5" height="56" fill="#8B6914" rx=".5"/>
    </svg>

    <div style="font-size:1.55rem;font-weight:900;font-family:'Fredoka One',cursive;
                color:${textColor};margin:.6rem 0 .3rem;line-height:1.2">
      🎉 ¡Sin errores pendientes!
    </div>
    <div style="font-size:.92rem;color:${subColor};font-family:'Nunito',sans-serif;
                line-height:1.5;margin-bottom:.2rem">
      Dominaste todos los verbos de tu lista de errores. ¡Sigue así!
    </div>
    <button class="ec-btn" id="ecAcceptBtn">Aceptar</button>
  `;

  overlay_el.appendChild(card);
  document.body.appendChild(overlay_el);

  document.getElementById('ecAcceptBtn').addEventListener('click', () => {
    overlay_el.style.animation = 'ecFadeIn .2s ease reverse forwards';
    setTimeout(() => {
      overlay_el.remove();
      goToStart();
    }, 200);
  });

  /* Cerrar también al tocar el overlay fuera de la tarjeta */
  overlay_el.addEventListener('click', e => {
    if (e.target === overlay_el) {
      overlay_el.style.animation = 'ecFadeIn .2s ease reverse forwards';
      setTimeout(() => { overlay_el.remove(); goToStart(); }, 200);
    }
  });
}

function goToStart(){ showScreen('startScreen'); }
function showScreen(id){
  document.querySelectorAll('#pageQuiz .screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
function showStreak(n){
  const el=document.getElementById('streakPop');
  el.textContent=`🔥 ${n} seguidas!`;
  el.classList.add('go');
  setTimeout(()=>el.classList.remove('go'),1100);
}
function confetti(n=22){
  // English File colors
  const cols=['#1e7abf','#2e8b3a','#e67e22','#c0392b','#8e44ad','#ffffff','#1a3a5c'];
  for(let i=0;i<n;i++){
    setTimeout(()=>{
      const el=document.createElement('div');
      el.className='cf';
      el.style.cssText=`left:${Math.random()*100}vw;width:${6+Math.random()*9}px;height:${6+Math.random()*9}px;background:${cols[0|Math.random()*cols.length]};animation-duration:${1.6+Math.random()*2}s;animation-delay:${Math.random()*.4}s`;
      document.body.appendChild(el);
      setTimeout(()=>el.remove(),4200);
    },i*45);
  }
}

/* =============================================
   INIT
   ============================================= */
renderTheory();
updateErrorsUI();
syncErrorsToIDB();   /* sincronizar estado inicial de errores con IDB */
initNotifications(); /* solicitar permiso y registrar Periodic Sync */

/* ── Guardia para el botón Atrás del navegador / Android ── */
history.pushState({ vq: true }, '');
window.addEventListener('popstate', () => {
  if (isQuizActive()) {
    /* Reponer la entrada de historial para que el botón atrás siga funcionando */
    history.pushState({ vq: true }, '');
    showQuitModal(() => {
      questions = []; idx = 0; score = 0; streak = 0;
      okCount = 0; badCount = 0; lives = 3; wrongLog = [];
      answered = false; hintUsed = false;
      showScreen('startScreen');
    });
  }
});

/* El Service Worker se registra desde index.html como sw.js externo
   para garantizar compatibilidad con PWA instalada (Blob URL no persiste) */
