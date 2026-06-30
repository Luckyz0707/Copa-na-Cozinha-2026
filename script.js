const fallbackImages = [
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=80"
];

const recipeData = [
  {
    group: "A", country: "México", flag: "🇲🇽", dish: "Tacos al pastor", difficulty: "Média", time: "55 min", servings: "4 porções", wiki: "Tacos_al_pastor",
    summary: "Clássico de rua mexicano com carne marinada, abacaxi caramelizado e tortilhas quentes.",
    ingredients: ["600 g de pernil ou copa-lombo em fatias finas", "3 colheres de pasta de achiote", "2 pimentas guajillo hidratadas", "120 ml de suco de abacaxi", "12 tortilhas de milho", "Cebola, coentro, limão e abacaxi para servir"],
    steps: ["Bata achiote, pimenta, suco de abacaxi, alho, vinagre e sal até virar marinada espessa.", "Cubra a carne e deixe descansar por pelo menos 30 minutos.", "Doure as fatias em frigideira muito quente até formar bordas tostadas.", "Aqueça as tortilhas e corte o abacaxi em cubos pequenos.", "Monte com carne, cebola, coentro, abacaxi e limão."],
    tip: "Fogo alto é o segredo para lembrar o sabor do espeto vertical tradicional."
  },
  {
    group: "A", country: "África do Sul", flag: "🇿🇦", dish: "Bobotie", difficulty: "Média", time: "1h10", servings: "6 porções", wiki: "Bobotie",
    summary: "Assado de carne com curry suave, frutas secas e cobertura cremosa de ovos.",
    ingredients: ["700 g de carne moída", "1 cebola grande picada", "2 colheres de curry em pó", "2 fatias de pão demolhadas em leite", "2 colheres de chutney ou geleia de damasco", "3 ovos, 250 ml de leite e folhas de louro"],
    steps: ["Refogue cebola, alho e curry até perfumar.", "Junte a carne e cozinhe até perder a cor rosada.", "Misture pão espremido, chutney, uvas-passas, sal e pimenta.", "Transfira para refratário e cubra com ovos batidos no leite.", "Asse até a cobertura firmar e ficar dourada."],
    tip: "Sirva com arroz amarelo e banana fatiada para equilibrar o curry."
  },
  {
    group: "A", country: "Coreia do Sul", flag: "🇰🇷", dish: "Bibimbap", difficulty: "Média", time: "50 min", servings: "4 porções", wiki: "Bibimbap",
    summary: "Tigela coreana de arroz, legumes salteados, proteína, ovo e molho gochujang.",
    ingredients: ["3 xícaras de arroz cozido", "1 cenoura em tiras", "1 abobrinha em tiras", "200 g de espinafre", "300 g de carne ou cogumelos", "4 ovos e molho gochujang"],
    steps: ["Tempere cada legume separadamente com sal, óleo de gergelim e alho.", "Salteie os legumes rapidamente para manter cor e textura.", "Grelhe a carne ou os cogumelos com shoyu e gergelim.", "Frite os ovos com gema macia.", "Monte arroz, vegetais, proteína, ovo e gochujang em tigelas."],
    tip: "Misture tudo só na hora de comer para manter o contraste de cores."
  },
  {
    group: "A", country: "Tchéquia", flag: "🇨🇿", dish: "Svíčková", difficulty: "Avançada", time: "2h20", servings: "6 porções", wiki: "Svíčková",
    summary: "Carne bovina ao molho cremoso de raízes, típica em refeições festivas tchecas.",
    ingredients: ["1 kg de lagarto ou alcatra", "2 cenouras, 1 salsão e 1 cebola", "250 ml de creme de leite", "1 colher de mostarda", "Louro, pimenta-da-jamaica e tomilho", "Knedlíky ou pão para acompanhar"],
    steps: ["Sele a carne de todos os lados e reserve.", "Doure os legumes picados com manteiga e especiarias.", "Volte a carne, cubra parcialmente com caldo e cozinhe até amaciar.", "Bata os legumes com o caldo e passe por peneira.", "Finalize com creme, mostarda e ajuste sal e acidez."],
    tip: "O molho deve ficar liso, levemente adocicado e bem envolvente."
  },
  {
    group: "B", country: "Canadá", flag: "🇨🇦", dish: "Poutine", difficulty: "Fácil", time: "35 min", servings: "4 porções", wiki: "Poutine",
    summary: "Batatas fritas com queijo coalho fresco e molho gravy quente.",
    ingredients: ["800 g de batatas cortadas em palitos", "200 g de queijo coalho ou cheese curds", "2 colheres de manteiga", "2 colheres de farinha", "500 ml de caldo de carne", "Pimenta-do-reino e sal"],
    steps: ["Lave as batatas para retirar excesso de amido e seque muito bem.", "Frite em temperatura média, descanse e frite de novo até dourar.", "Prepare o gravy com manteiga, farinha e caldo, mexendo até engrossar.", "Tempere o molho com pimenta e pouco sal.", "Cubra as batatas com queijo e finalize com gravy bem quente."],
    tip: "O molho quente deve amolecer o queijo sem derretê-lo por completo."
  },
  {
    group: "B", country: "Suíça", flag: "🇨🇭", dish: "Fondue de queijo", difficulty: "Fácil", time: "30 min", servings: "4 porções", wiki: "Fondue",
    summary: "Queijos derretidos com vinho branco, servidos com pão e legumes.",
    ingredients: ["250 g de gruyère ralado", "250 g de emmental ralado", "1 dente de alho", "180 ml de vinho branco seco", "1 colher de amido de milho", "Noz-moscada e pão em cubos"],
    steps: ["Esfregue alho na panela e aqueça o vinho sem ferver forte.", "Misture os queijos com amido para evitar grumos.", "Adicione queijo aos poucos, mexendo em oito até derreter.", "Tempere com noz-moscada e pimenta.", "Mantenha aquecido e sirva com pão, batata e legumes."],
    tip: "Se separar, pingue vinho quente e mexa vigorosamente até reemulsionar."
  },
  {
    group: "B", country: "Bósnia e Herzegovina", flag: "🇧🇦", dish: "Ćevapi", difficulty: "Média", time: "55 min", servings: "4 porções", wiki: "Ćevapi",
    summary: "Pequenos cilindros grelhados de carne, servidos com cebola e pão macio.",
    ingredients: ["500 g de carne bovina moída", "250 g de cordeiro ou porco moído", "2 dentes de alho amassados", "1 colher de páprica", "1 colher de bicarbonato", "Pão somun, cebola e iogurte para servir"],
    steps: ["Misture carnes, alho, páprica, sal, pimenta e bicarbonato sem sovar demais.", "Descanse a massa por 30 minutos na geladeira.", "Modele cilindros pequenos e uniformes.", "Grelhe em chapa quente até dourar por fora e ficar suculento.", "Sirva no pão aquecido com cebola crua e molho de iogurte."],
    tip: "O descanso ajuda a textura ficar firme sem ressecar."
  },
  {
    group: "B", country: "Catar", flag: "🇶🇦", dish: "Machboos", difficulty: "Média", time: "1h15", servings: "6 porções", wiki: "Machboos",
    summary: "Arroz aromático do Golfo com frango, cardamomo, limão seco e especiarias.",
    ingredients: ["1 frango em pedaços", "2 xícaras de arroz basmati", "1 cebola picada", "2 tomates picados", "Cardamomo, canela, cravo e limão seco", "Amêndoas ou castanhas para finalizar"],
    steps: ["Lave o basmati e deixe de molho por 20 minutos.", "Doure o frango com cebola e especiarias.", "Adicione tomate, limão seco e água para formar caldo.", "Retire o frango quando cozinhar e use o caldo para o arroz.", "Doure o frango no forno e sirva sobre o arroz com castanhas."],
    tip: "Fure o limão seco antes de entrar no caldo para liberar aroma."
  },
  {
    group: "C", country: "Brasil", flag: "🇧🇷", dish: "Feijoada", difficulty: "Avançada", time: "3h", servings: "8 porções", wiki: "Feijoada",
    summary: "Feijão preto cozido lentamente com carnes, servido com arroz, couve, farofa e laranja.",
    ingredients: ["700 g de feijão preto", "500 g de costelinha e carne-seca dessalgadas", "300 g de linguiça calabresa", "2 folhas de louro", "Cebola, alho e cheiro-verde", "Arroz, couve, farofa e laranja para servir"],
    steps: ["Dessalgue as carnes na véspera, trocando a água algumas vezes.", "Cozinhe feijão com louro até começar a amaciar.", "Adicione as carnes mais firmes primeiro e as linguiças depois.", "Faça um refogado de alho e cebola e misture à panela.", "Cozinhe até o caldo engrossar e sirva com os acompanhamentos."],
    tip: "Laranja e couve dão frescor ao prato e equilibram a gordura."
  },
  {
    group: "C", country: "Marrocos", flag: "🇲🇦", dish: "Tajine de frango", difficulty: "Média", time: "1h20", servings: "5 porções", wiki: "Tajine",
    summary: "Frango cozido lentamente com especiarias, limão confit, azeitonas e ervas.",
    ingredients: ["1 kg de sobrecoxas", "1 cebola fatiada", "1 limão confit ou raspas e suco de limão", "120 g de azeitonas verdes", "Gengibre, cúrcuma, cominho e canela", "Coentro e salsinha"],
    steps: ["Tempere o frango com sal, especiarias, alho e azeite.", "Doure os pedaços e reserve.", "Refogue cebola até ficar macia e volte o frango à panela.", "Adicione pouca água, tampe e cozinhe em fogo baixo.", "Finalize com limão, azeitonas e ervas frescas."],
    tip: "O cozimento baixo concentra o molho sem deixar o frango seco."
  },
  {
    group: "C", country: "Escócia", flag: "🏴", dish: "Cullen skink", difficulty: "Fácil", time: "45 min", servings: "4 porções", wiki: "Cullen_skink",
    summary: "Sopa cremosa escocesa de peixe defumado, batata e leite.",
    ingredients: ["350 g de peixe branco defumado", "500 g de batata em cubos", "1 alho-poró fatiado", "700 ml de leite", "1 colher de manteiga", "Cebolinha e pimenta-do-reino"],
    steps: ["Cozinhe o peixe no leite por poucos minutos e reserve o leite aromatizado.", "Refogue alho-poró na manteiga até murchar.", "Adicione batatas e o leite do cozimento.", "Cozinhe até as batatas desmancharem parcialmente.", "Desfie o peixe, volte à sopa e finalize com cebolinha."],
    tip: "Amasse parte da batata para engrossar sem precisar de farinha."
  },
  {
    group: "C", country: "Haiti", flag: "🇭🇹", dish: "Griot", difficulty: "Média", time: "1h30", servings: "5 porções", wiki: "Griot_(food)",
    summary: "Cubos de porco marinados em cítricos, cozidos e depois dourados.",
    ingredients: ["800 g de pernil em cubos", "Suco de 2 laranjas azedas ou limão", "1 pimenta scotch bonnet opcional", "Alho, tomilho e cebola", "Óleo para dourar", "Pikliz ou vinagrete picante"],
    steps: ["Marine a carne com cítricos, alho, ervas, sal e pimenta.", "Cozinhe a carne na própria marinada com um pouco de água.", "Quando amaciar, escorra e seque os cubos.", "Doure em óleo quente até criar crosta.", "Sirva com pikliz, arroz ou banana frita."],
    tip: "Secar bem a carne antes de dourar garante crocância."
  },
  {
    group: "D", country: "Estados Unidos", flag: "🇺🇸", dish: "Mac and cheese", difficulty: "Fácil", time: "40 min", servings: "6 porções", wiki: "Macaroni_and_cheese",
    summary: "Massa curta envolvida em molho cremoso de queijo e gratinada.",
    ingredients: ["500 g de macarrão cotovelo", "3 colheres de manteiga", "3 colheres de farinha", "700 ml de leite", "350 g de cheddar ralado", "Farinha panko ou pão ralado"],
    steps: ["Cozinhe o macarrão um minuto a menos que o ponto indicado.", "Faça um roux com manteiga e farinha.", "Adicione leite aos poucos, mexendo até engrossar.", "Derreta o queijo no molho e ajuste sal e pimenta.", "Misture à massa, cubra com panko e gratine."],
    tip: "Um pouco de mostarda realça o sabor do cheddar."
  },
  {
    group: "D", country: "Paraguai", flag: "🇵🇾", dish: "Sopa paraguaya", difficulty: "Fácil", time: "50 min", servings: "8 porções", wiki: "Sopa_paraguaya",
    summary: "Bolo salgado de milho, queijo e cebola, tradicional apesar do nome de sopa.",
    ingredients: ["2 xícaras de farinha de milho", "3 ovos", "300 g de queijo meia-cura", "1 cebola grande", "400 ml de leite", "3 colheres de manteiga"],
    steps: ["Refogue a cebola na manteiga até ficar translúcida.", "Misture farinha de milho, leite, ovos e queijo esfarelado.", "Incorpore a cebola refogada e ajuste sal.", "Despeje em assadeira untada.", "Asse até crescer levemente e dourar por cima."],
    tip: "Deixe a massa úmida; ela firma bastante depois de assada."
  },
  {
    group: "D", country: "Austrália", flag: "🇦🇺", dish: "Meat pie", difficulty: "Média", time: "1h20", servings: "6 porções", wiki: "Meat_pie_(Australia_and_New_Zealand)",
    summary: "Torta individual de carne com recheio espesso e massa dourada.",
    ingredients: ["600 g de carne bovina em cubos pequenos", "1 cebola picada", "2 colheres de farinha", "300 ml de caldo de carne", "1 colher de molho inglês", "Massa folhada e massa curta"],
    steps: ["Doure a carne em etapas para não juntar água.", "Refogue cebola e polvilhe farinha para engrossar.", "Adicione caldo, molho inglês e cozinhe até ficar cremoso.", "Forre formas com massa, recheie e cubra com folhada.", "Pincele ovo e asse até a tampa crescer e dourar."],
    tip: "O recheio precisa esfriar antes de entrar na massa."
  },
  {
    group: "D", country: "Turquia", flag: "🇹🇷", dish: "Menemen", difficulty: "Fácil", time: "25 min", servings: "3 porções", wiki: "Menemen_(food)",
    summary: "Ovos cremosos cozidos com tomate, pimentão e azeite.",
    ingredients: ["4 ovos", "3 tomates maduros picados", "1 pimentão verde", "1 cebola pequena opcional", "2 colheres de azeite", "Páprica, pimenta e pão para servir"],
    steps: ["Refogue pimentão e cebola no azeite até amaciar.", "Adicione tomates e cozinhe até virar molho rústico.", "Tempere com sal, páprica e pimenta.", "Quebre os ovos e mexa delicadamente para ficar cremoso.", "Sirva imediatamente com pão."],
    tip: "Desligue o fogo com os ovos ainda brilhantes; eles terminam no calor da panela."
  },
  {
    group: "E", country: "Alemanha", flag: "🇩🇪", dish: "Schnitzel", difficulty: "Fácil", time: "35 min", servings: "4 porções", wiki: "Schnitzel",
    summary: "Filé fino empanado e frito até ficar dourado e crocante.",
    ingredients: ["4 bifes finos de porco ou vitela", "1 xícara de farinha", "2 ovos batidos", "2 xícaras de farinha de rosca", "Óleo ou manteiga clarificada", "Limão e salada de batata"],
    steps: ["Bata os bifes entre plásticos até ficarem finos.", "Tempere com sal e pimenta.", "Passe em farinha, ovo e farinha de rosca sem apertar.", "Frite em gordura quente, movimentando a panela.", "Escorra e sirva com limão."],
    tip: "A crosta fica mais leve quando a farinha de rosca não é compactada."
  },
  {
    group: "E", country: "Curaçao", flag: "🇨🇼", dish: "Keshi yena", difficulty: "Média", time: "1h15", servings: "6 porções", wiki: "Keshi_yena",
    summary: "Queijo recheado com frango temperado, azeitonas e frutas secas.",
    ingredients: ["500 g de queijo gouda ou edam", "500 g de frango desfiado", "1 cebola e 1 pimentão", "2 colheres de extrato de tomate", "Azeitonas, alcaparras e passas", "Molho de pimenta a gosto"],
    steps: ["Refogue cebola, pimentão, tomate e temperos.", "Misture frango, azeitonas, alcaparras e passas.", "Forre uma forma com fatias de queijo.", "Coloque o recheio e cubra com mais queijo.", "Asse em banho-maria até derreter e firmar."],
    tip: "O contraste salgado-doce é parte da personalidade do prato."
  },
  {
    group: "E", country: "Costa do Marfim", flag: "🇨🇮", dish: "Attiéké com peixe", difficulty: "Média", time: "55 min", servings: "4 porções", wiki: "Attiéké",
    summary: "Cuscuz de mandioca fermentada servido com peixe grelhado e salada fresca.",
    ingredients: ["500 g de attiéké", "4 filés ou postas de peixe", "1 cebola roxa", "2 tomates", "Suco de limão e pimenta", "Azeite, sal e cheiro-verde"],
    steps: ["Tempere o peixe com limão, alho, sal e pimenta.", "Hidrate o attiéké e aqueça no vapor até ficar solto.", "Grelhe o peixe até dourar dos dois lados.", "Faça salada com cebola, tomate, limão e azeite.", "Sirva o attiéké com peixe e salada por cima."],
    tip: "Solte o attiéké com garfo para manter a textura leve."
  },
  {
    group: "E", country: "Equador", flag: "🇪🇨", dish: "Encebollado", difficulty: "Média", time: "1h", servings: "5 porções", wiki: "Encebollado",
    summary: "Sopa costeira de peixe, mandioca e cebola roxa curtida.",
    ingredients: ["600 g de atum fresco ou peixe firme", "700 g de mandioca", "1 cebola roxa fatiada", "2 tomates", "Cominho, coentro e limão", "Chips de banana ou pipoca para servir"],
    steps: ["Cozinhe mandioca com tomate, cominho e coentro até amaciar.", "Cozinhe o peixe no caldo e retire em lascas grandes.", "Amasse parte da mandioca para engrossar.", "Curta a cebola roxa com limão e sal.", "Sirva a sopa com peixe, cebola e acompanhamentos crocantes."],
    tip: "A cebola curtida traz a acidez que acorda o caldo."
  },
  {
    group: "F", country: "Países Baixos", flag: "🇳🇱", dish: "Stamppot", difficulty: "Fácil", time: "45 min", servings: "4 porções", wiki: "Stamppot",
    summary: "Purê rústico de batata com couve, servido com linguiça defumada.",
    ingredients: ["1 kg de batatas", "250 g de couve fatiada", "80 g de manteiga", "120 ml de leite quente", "4 linguiças defumadas", "Mostarda para servir"],
    steps: ["Cozinhe as batatas em água salgada até ficarem macias.", "Adicione a couve nos minutos finais para murchar.", "Escorra e amasse com manteiga e leite.", "Doure ou aqueça as linguiças.", "Sirva o purê rústico com linguiça e mostarda."],
    tip: "Não bata demais; a textura tradicional é rústica."
  },
  {
    group: "F", country: "Japão", flag: "🇯🇵", dish: "Katsudon", difficulty: "Média", time: "45 min", servings: "4 porções", wiki: "Katsudon",
    summary: "Tigela de arroz coberta com porco empanado, ovo e caldo adocicado.",
    ingredients: ["4 bifes de lombo suíno", "Farinha, ovo e panko para empanar", "4 porções de arroz japonês", "1 cebola fatiada", "150 ml de dashi ou caldo", "Shoyu, mirin, açúcar e 4 ovos"],
    steps: ["Empane os bifes em farinha, ovo e panko.", "Frite até dourar e corte em tiras.", "Cozinhe cebola com dashi, shoyu, mirin e açúcar.", "Adicione o tonkatsu e cubra com ovos batidos.", "Sirva sobre arroz quente assim que o ovo firmar levemente."],
    tip: "O ovo deve ficar macio, criando molho para o arroz."
  },
  {
    group: "F", country: "Suécia", flag: "🇸🇪", dish: "Köttbullar", difficulty: "Fácil", time: "50 min", servings: "5 porções", wiki: "Swedish_meatballs",
    summary: "Almôndegas suecas com molho cremoso, purê e geleia de lingonberry.",
    ingredients: ["500 g de carne bovina e suína moída", "1 cebola ralada", "1/2 xícara de farinha de rosca", "1 ovo", "250 ml de creme de leite", "Caldo de carne e noz-moscada"],
    steps: ["Hidrate a farinha de rosca com um pouco de leite.", "Misture carnes, cebola, ovo, temperos e molde bolinhas.", "Doure as almôndegas em frigideira.", "Na mesma panela, faça molho com caldo e creme.", "Volte as almôndegas ao molho e cozinhe até ficarem macias."],
    tip: "Ralar a cebola deixa a almôndega suculenta sem pedaços grandes."
  },
  {
    group: "F", country: "Tunísia", flag: "🇹🇳", dish: "Brik", difficulty: "Média", time: "35 min", servings: "4 porções", wiki: "Brik",
    summary: "Massa fina recheada com ovo, atum e ervas, frita até ficar estaladiça.",
    ingredients: ["4 folhas de malsouka ou massa filo", "4 ovos", "1 lata de atum escorrido", "Batata cozida amassada opcional", "Salsinha, alcaparras e harissa", "Óleo para fritura"],
    steps: ["Misture atum, batata, ervas, harissa e sal.", "Coloque uma porção no centro da massa e abra um espaço para o ovo.", "Quebre o ovo com cuidado e dobre a massa.", "Frite imediatamente até dourar dos dois lados.", "Sirva com limão."],
    tip: "A gema cremosa é o charme; frite rápido em óleo quente."
  },
  {
    group: "G", country: "Egito", flag: "🇪🇬", dish: "Koshari", difficulty: "Média", time: "1h", servings: "6 porções", wiki: "Koshary",
    summary: "Mistura egípcia de arroz, lentilha, macarrão, molho de tomate e cebola crocante.",
    ingredients: ["1 xícara de arroz", "1 xícara de lentilha", "1 xícara de macarrão pequeno", "2 xícaras de molho de tomate", "2 cebolas fatiadas", "Cominho, alho e vinagre"],
    steps: ["Cozinhe arroz, lentilha e macarrão separadamente.", "Frite cebolas até ficarem bem crocantes.", "Prepare molho de tomate com alho, cominho e vinagre.", "Monte camadas de arroz, lentilha e macarrão.", "Cubra com molho e cebola crocante."],
    tip: "O vinagre no molho dá o toque ácido característico."
  },
  {
    group: "G", country: "Irã", flag: "🇮🇷", dish: "Ghormeh sabzi", difficulty: "Avançada", time: "2h30", servings: "6 porções", wiki: "Ghormeh_sabzi",
    summary: "Ensopado persa de ervas, carne, feijão e limão seco.",
    ingredients: ["800 g de carne em cubos", "2 xícaras de salsinha, coentro e cebolinha", "1 xícara de feijão vermelho cozido", "2 limões secos perfurados", "1 cebola picada", "Cúrcuma e óleo"],
    steps: ["Refogue as ervas picadas em óleo até escurecerem e perfumarem.", "Doure cebola, cúrcuma e carne em outra panela.", "Junte ervas, feijão, limão seco e água.", "Cozinhe em fogo baixo até a carne ficar macia.", "Ajuste sal e sirva com arroz."],
    tip: "A cor escura vem do refogado paciente das ervas."
  },
  {
    group: "G", country: "Bélgica", flag: "🇧🇪", dish: "Moules-frites", difficulty: "Fácil", time: "40 min", servings: "4 porções", wiki: "Moules-frites",
    summary: "Mexilhões ao vapor com vinho branco, acompanhados de batatas fritas.",
    ingredients: ["1,5 kg de mexilhões limpos", "2 talos de alho-poró ou salsão", "1 cebola", "200 ml de vinho branco", "Batatas para fritar", "Manteiga, salsinha e pimenta"],
    steps: ["Frite as batatas em duas etapas para ficarem crocantes.", "Refogue cebola e alho-poró na manteiga.", "Adicione mexilhões e vinho, tampe a panela.", "Cozinhe até as conchas abrirem.", "Finalize com salsinha e sirva com as fritas."],
    tip: "Descarte mexilhões que não abrirem depois do cozimento."
  },
  {
    group: "G", country: "Nova Zelândia", flag: "🇳🇿", dish: "Hāngī moderno", difficulty: "Avançada", time: "2h", servings: "6 porções", wiki: "Hāngī",
    summary: "Versão doméstica do cozimento maori com carnes e legumes assados lentamente.",
    ingredients: ["800 g de cordeiro ou frango", "600 g de kumara ou batata-doce", "2 cenouras", "1 repolho pequeno", "Alecrim, sal e pimenta", "Caldo ou vinho branco"],
    steps: ["Tempere carne e legumes com sal, pimenta e ervas.", "Monte tudo em assadeira funda com um pouco de caldo.", "Cubra muito bem com papel-alumínio para prender vapor.", "Asse em temperatura baixa até a carne ficar macia.", "Abra no final para dourar levemente."],
    tip: "A assadeira bem vedada imita o cozimento no vapor do hāngī tradicional."
  },
  {
    group: "H", country: "Espanha", flag: "🇪🇸", dish: "Paella valenciana", difficulty: "Avançada", time: "1h20", servings: "6 porções", wiki: "Paella",
    summary: "Arroz espanhol com açafrão, frango, legumes e a crosta dourada chamada socarrat.",
    ingredients: ["2 xícaras de arroz bomba ou arbório", "700 g de frango em pedaços", "Vagem, tomate e pimentão", "1 pitada de açafrão", "5 xícaras de caldo quente", "Azeite, páprica e limão"],
    steps: ["Doure bem o frango na paellera ou frigideira larga.", "Refogue legumes, tomate e páprica.", "Adicione arroz e açafrão, espalhando em camada uniforme.", "Cubra com caldo e cozinhe sem mexer.", "Aumente o fogo no final para formar socarrat."],
    tip: "Depois que o arroz entra, mexer demais impede a crosta."
  },
  {
    group: "H", country: "Cabo Verde", flag: "🇨🇻", dish: "Cachupa", difficulty: "Avançada", time: "2h40", servings: "8 porções", wiki: "Cachupa",
    summary: "Ensopado cabo-verdiano de milho, feijão, legumes e carne ou peixe.",
    ingredients: ["500 g de milho para canjica", "300 g de feijão", "500 g de carne, linguiça ou peixe", "Mandioca, batata-doce e abóbora", "Couve ou repolho", "Cebola, alho e louro"],
    steps: ["Deixe milho e feijão de molho por algumas horas.", "Cozinhe milho e feijão até começarem a amaciar.", "Adicione carnes e legumes mais firmes.", "Cozinhe lentamente até o caldo ficar encorpado.", "Finalize com folhas verdes e ajuste tempero."],
    tip: "No dia seguinte, a cachupa refogada vira um café da manhã clássico."
  },
  {
    group: "H", country: "Arábia Saudita", flag: "🇸🇦", dish: "Kabsa", difficulty: "Média", time: "1h15", servings: "6 porções", wiki: "Kabsa",
    summary: "Arroz especiado com frango, tomate, cardamomo e frutas secas.",
    ingredients: ["1 frango em pedaços", "2 xícaras de arroz basmati", "1 cebola e 2 tomates", "Cardamomo, canela, cravo e louro", "Uvas-passas e amêndoas", "Caldo quente"],
    steps: ["Doure o frango com cebola e especiarias.", "Junte tomates e cozinhe até formar molho.", "Adicione caldo e cozinhe o frango.", "Retire o frango, coloque o arroz no caldo e tampe.", "Sirva com frango dourado, passas e amêndoas."],
    tip: "Tostar as especiarias por poucos segundos libera muito aroma."
  },
  {
    group: "H", country: "Uruguai", flag: "🇺🇾", dish: "Chivito", difficulty: "Fácil", time: "35 min", servings: "4 porções", wiki: "Chivito_(sandwich)",
    summary: "Sanduíche uruguaio generoso com bife, queijo, presunto, ovo e salada.",
    ingredients: ["4 bifes finos de contrafilé", "4 pães tipo hambúrguer", "4 fatias de presunto", "4 fatias de queijo", "4 ovos", "Alface, tomate, maionese e azeitonas"],
    steps: ["Tempere e grelhe rapidamente os bifes.", "Frite os ovos e aqueça presunto e queijo.", "Toste os pães na chapa.", "Monte com maionese, bife, presunto, queijo, ovo e salada.", "Prense por alguns segundos para unir tudo."],
    tip: "Bife fino deixa o sanduíche alto, mas fácil de morder."
  },
  {
    group: "I", country: "França", flag: "🇫🇷", dish: "Ratatouille", difficulty: "Fácil", time: "55 min", servings: "5 porções", wiki: "Ratatouille",
    summary: "Legumes mediterrâneos cozidos ou assados com tomate, alho e ervas.",
    ingredients: ["1 berinjela", "2 abobrinhas", "2 pimentões", "4 tomates", "1 cebola", "Azeite, alho, tomilho e manjericão"],
    steps: ["Corte os legumes em pedaços parecidos.", "Refogue cebola e alho em azeite.", "Adicione legumes por ordem de firmeza.", "Cozinhe até ficarem macios, mas definidos.", "Finalize com ervas frescas e azeite."],
    tip: "Para visual de festa, fatie tudo fino e asse em espiral sobre molho de tomate."
  },
  {
    group: "I", country: "Senegal", flag: "🇸🇳", dish: "Thieboudienne", difficulty: "Avançada", time: "1h50", servings: "6 porções", wiki: "Thieboudienne",
    summary: "Arroz senegalês cozido em molho vermelho com peixe e legumes.",
    ingredients: ["1 peixe inteiro ou 800 g de postas", "2 xícaras de arroz quebrado", "2 colheres de extrato de tomate", "Cenoura, repolho, mandioca e berinjela", "Salsinha, alho e pimenta", "Óleo e limão"],
    steps: ["Tempere o peixe com pasta de ervas, alho e pimenta.", "Doure o peixe rapidamente e reserve.", "Cozinhe legumes no molho de tomate temperado.", "Retire os legumes e cozinhe o arroz no caldo.", "Sirva arroz, peixe e legumes juntos."],
    tip: "O sabor do prato está no caldo compartilhado entre peixe, legumes e arroz."
  },
  {
    group: "I", country: "Iraque", flag: "🇮🇶", dish: "Masgouf", difficulty: "Média", time: "1h10", servings: "4 porções", wiki: "Masgouf",
    summary: "Peixe aberto e assado com tempero ácido, inspirado nas margens do Tigre.",
    ingredients: ["1 carpa ou peixe inteiro aberto", "2 colheres de pasta de tamarindo", "2 tomates picados", "1 cebola picada", "Azeite, cúrcuma e pimenta", "Limão e ervas"],
    steps: ["Abra o peixe em borboleta ou peça ao peixeiro para preparar.", "Misture tamarindo, azeite, alho, cúrcuma, sal e pimenta.", "Espalhe a pasta sobre o peixe.", "Asse em grelha ou forno alto até dourar.", "Finalize com tomate, cebola, limão e ervas."],
    tip: "Carvão dá sabor especial, mas forno bem quente funciona muito bem."
  },
  {
    group: "I", country: "Noruega", flag: "🇳🇴", dish: "Fårikål", difficulty: "Fácil", time: "2h", servings: "6 porções", wiki: "Fårikål",
    summary: "Cozido norueguês simples de cordeiro, repolho e pimenta-do-reino.",
    ingredients: ["1 kg de cordeiro em pedaços", "1 repolho grande em gomos", "2 colheres de farinha opcional", "1 colher de pimenta-do-reino em grãos", "Sal", "Batatas cozidas para servir"],
    steps: ["Intercale camadas de cordeiro e repolho em panela grossa.", "Tempere cada camada com sal e pimenta.", "Adicione pouca água e tampe.", "Cozinhe em fogo baixo até a carne soltar do osso.", "Sirva com batatas e o caldo da panela."],
    tip: "A simplicidade é intencional; use bom cordeiro e cozinhe sem pressa."
  },
  {
    group: "J", country: "Argentina", flag: "🇦🇷", dish: "Empanadas salteñas", difficulty: "Média", time: "1h20", servings: "12 unidades", wiki: "Empanada",
    summary: "Empanadas assadas com recheio suculento de carne, cominho e páprica.",
    ingredients: ["12 discos de massa para empanada", "500 g de carne cortada na faca", "2 cebolas", "1 batata cozida em cubos", "2 ovos cozidos", "Cominho, páprica, azeitonas e cebolinha"],
    steps: ["Refogue cebola até ficar doce e translúcida.", "Adicione carne, cominho, páprica e sal, cozinhando rapidamente.", "Misture batata, ovo, azeitona e cebolinha.", "Recheie os discos e feche com repulgue.", "Asse até dourar e sirva quente."],
    tip: "Recheio frio facilita fechar as empanadas sem rasgar."
  },
  {
    group: "J", country: "Argélia", flag: "🇩🇿", dish: "Cuscuz argelino", difficulty: "Média", time: "1h25", servings: "6 porções", wiki: "Couscous",
    summary: "Sêmola vaporizada com caldo de legumes, grão-de-bico e cordeiro.",
    ingredients: ["500 g de cuscuz marroquino", "700 g de cordeiro ou frango", "Grão-de-bico cozido", "Cenoura, abobrinha e nabo", "Tomate, cebola e harissa", "Cominho, canela e coentro"],
    steps: ["Doure a carne com cebola e especiarias.", "Adicione tomate, água e legumes mais firmes.", "Hidrate a sêmola com caldo e azeite.", "Solte os grãos com garfo e vaporize até ficar leve.", "Sirva a sêmola com carne, legumes e caldo."],
    tip: "Vaporizar a sêmola deixa o cuscuz solto e macio."
  },
  {
    group: "J", country: "Áustria", flag: "🇦🇹", dish: "Wiener schnitzel", difficulty: "Fácil", time: "35 min", servings: "4 porções", wiki: "Wiener_schnitzel",
    summary: "Versão austríaca clássica do schnitzel, tradicionalmente com vitela.",
    ingredients: ["4 escalopes de vitela", "Farinha de trigo", "2 ovos batidos", "Farinha de rosca fina", "Manteiga clarificada ou óleo", "Limão e salada de batatas"],
    steps: ["Afine os escalopes com cuidado para ficarem uniformes.", "Tempere e passe em farinha, ovo e rosca.", "Frite em gordura quente até inflar e dourar.", "Escorra rapidamente em grade.", "Sirva com limão e salada de batatas."],
    tip: "Movimentar a frigideira ajuda a gordura banhar a superfície."
  },
  {
    group: "J", country: "Jordânia", flag: "🇯🇴", dish: "Mansaf", difficulty: "Avançada", time: "2h10", servings: "6 porções", wiki: "Mansaf",
    summary: "Cordeiro com molho de iogurte jameed, arroz e amêndoas.",
    ingredients: ["1,2 kg de cordeiro", "2 xícaras de arroz", "500 ml de iogurte ou jameed diluído", "Cardamomo, louro e canela", "Pão fino tipo shrak", "Amêndoas tostadas e salsinha"],
    steps: ["Cozinhe o cordeiro com especiarias até ficar macio.", "Prepare arroz soltinho com parte do caldo.", "Aqueça o iogurte diluído sem ferver agressivamente.", "Junte cordeiro ao molho e cozinhe alguns minutos.", "Monte pão, arroz, cordeiro, molho e amêndoas."],
    tip: "Mexa o molho de iogurte sempre para não talhar."
  },
  {
    group: "K", country: "Portugal", flag: "🇵🇹", dish: "Bacalhau à Brás", difficulty: "Fácil", time: "40 min", servings: "4 porções", wiki: "Bacalhau_à_Brás",
    summary: "Bacalhau desfiado com cebola, ovos cremosos, batata palha e azeitonas.",
    ingredients: ["500 g de bacalhau dessalgado e desfiado", "2 cebolas fatiadas", "4 ovos", "250 g de batata palha", "Azeitonas pretas", "Salsinha, azeite e pimenta"],
    steps: ["Refogue cebola lentamente em bastante azeite.", "Junte o bacalhau e cozinhe por poucos minutos.", "Adicione batata palha e envolva rapidamente.", "Baixe o fogo e misture ovos batidos até ficarem cremosos.", "Finalize com salsinha e azeitonas."],
    tip: "Tire do fogo antes dos ovos secarem; o calor residual termina o ponto."
  },
  {
    group: "K", country: "RD Congo", flag: "🇨🇩", dish: "Moambe de frango", difficulty: "Média", time: "1h20", servings: "6 porções", wiki: "Moambe_chicken",
    summary: "Frango em molho de palma ou amendoim, servido com arroz, fufu ou banana.",
    ingredients: ["1 frango em pedaços", "1 cebola picada", "300 ml de molho de palma ou leite de coco com amendoim", "2 tomates", "Alho, gengibre e pimenta", "Arroz ou fufu para acompanhar"],
    steps: ["Tempere e doure o frango em óleo.", "Refogue cebola, alho, gengibre e tomate.", "Volte o frango e cubra com molho de palma.", "Cozinhe lentamente até o molho engrossar.", "Sirva com acompanhamento neutro para absorver o molho."],
    tip: "Amendoim batido ajuda a aproximar a textura quando o molho de palma não está disponível."
  },
  {
    group: "K", country: "Uzbequistão", flag: "🇺🇿", dish: "Plov", difficulty: "Média", time: "1h30", servings: "6 porções", wiki: "Pilaf",
    summary: "Arroz cozido com cordeiro, cenoura, cebola e cominho.",
    ingredients: ["700 g de cordeiro em cubos", "2 xícaras de arroz", "3 cenouras em palitos", "2 cebolas", "1 cabeça de alho inteira", "Cominho, óleo e sal"],
    steps: ["Lave o arroz até a água sair quase clara.", "Doure cordeiro e cebola em panela grossa.", "Adicione cenoura, cominho e sal.", "Cubra com água e coloque a cabeça de alho no centro.", "Adicione arroz por cima e cozinhe sem mexer até secar."],
    tip: "As camadas são importantes: carne embaixo, arroz em cima."
  },
  {
    group: "K", country: "Colômbia", flag: "🇨🇴", dish: "Ajiaco", difficulty: "Média", time: "1h25", servings: "6 porções", wiki: "Ajiaco",
    summary: "Sopa bogotana de frango, três batatas, milho, guascas e creme.",
    ingredients: ["700 g de peito ou sobrecoxa de frango", "3 tipos de batata em cubos", "2 espigas de milho", "Guascas ou ervas frescas", "Alcaparras", "Creme de leite e abacate"],
    steps: ["Cozinhe o frango em água com cebola e alho.", "Retire e desfie o frango.", "Adicione batatas e milho ao caldo.", "Cozinhe até parte das batatas desmanchar e engrossar.", "Volte o frango e sirva com creme, alcaparras e abacate."],
    tip: "Batatas de texturas diferentes criam corpo natural no caldo."
  },
  {
    group: "L", country: "Inglaterra", flag: "🏴", dish: "Shepherd's pie", difficulty: "Fácil", time: "1h", servings: "6 porções", wiki: "Shepherd's_pie",
    summary: "Recheio de cordeiro com legumes coberto por purê gratinado.",
    ingredients: ["700 g de cordeiro moído", "1 cebola, 1 cenoura e ervilhas", "2 colheres de extrato de tomate", "250 ml de caldo", "900 g de batatas", "Manteiga, leite e queijo opcional"],
    steps: ["Cozinhe batatas e prepare purê com manteiga e leite.", "Refogue cordeiro com cebola e cenoura.", "Adicione extrato, caldo e ervilhas, cozinhando até engrossar.", "Coloque o recheio em refratário e cubra com purê.", "Faça ranhuras com garfo e gratine até dourar."],
    tip: "Use cordeiro para shepherd's pie; com carne bovina vira cottage pie."
  },
  {
    group: "L", country: "Croácia", flag: "🇭🇷", dish: "Peka", difficulty: "Avançada", time: "2h30", servings: "6 porções", wiki: "Peka_(dish)",
    summary: "Carne e batatas assadas lentamente sob tampa, com ervas e vinho.",
    ingredients: ["1,2 kg de cordeiro, vitela ou polvo", "1 kg de batatas", "2 cebolas", "Alecrim e louro", "150 ml de vinho branco", "Azeite, sal e pimenta"],
    steps: ["Tempere carne e batatas com azeite, ervas, sal e pimenta.", "Arrume tudo em assadeira pesada com cebolas.", "Adicione vinho e cubra muito bem.", "Asse lentamente até ficar macio.", "Destampe no final para dourar e concentrar os sucos."],
    tip: "Uma panela de ferro com tampa aproxima o efeito da peka tradicional."
  },
  {
    group: "L", country: "Gana", flag: "🇬🇭", dish: "Jollof rice", difficulty: "Média", time: "1h05", servings: "6 porções", wiki: "Jollof_rice",
    summary: "Arroz cozido em molho intenso de tomate, pimenta e especiarias.",
    ingredients: ["2 xícaras de arroz parboilizado", "4 tomates ou passata", "1 pimentão vermelho", "1 cebola", "Pimenta, gengibre e tomilho", "Frango grelhado para servir"],
    steps: ["Bata tomate, pimentão, cebola, alho e gengibre.", "Cozinhe a base em óleo até perder acidez e concentrar.", "Tempere com tomilho, pimenta e caldo.", "Adicione o arroz lavado e cozinhe tampado em fogo baixo.", "Solte os grãos e sirva com frango."],
    tip: "A base de tomate precisa fritar bem antes do arroz entrar."
  },
  {
    group: "L", country: "Panamá", flag: "🇵🇦", dish: "Sancocho panamenho", difficulty: "Fácil", time: "1h15", servings: "6 porções", wiki: "Sancocho",
    summary: "Caldo de frango com inhame, milho e muito coentro.",
    ingredients: ["1 frango em pedaços", "600 g de inhame ou ñame", "2 espigas de milho", "1 cebola", "Alho, orégano e coentro", "Limão e arroz branco para servir"],
    steps: ["Tempere o frango com alho, sal, orégano e limão.", "Cozinhe com cebola e água até formar caldo.", "Adicione inhame e milho e cozinhe até amaciar.", "Amasse alguns pedaços de inhame para engrossar.", "Finalize com coentro fresco e sirva com arroz."],
    tip: "Coentro entra no final para manter perfume fresco."
  }
];

const recipes = recipeData.map((recipe, index) => ({
  ...recipe,
  fallbackImage: fallbackImages[index % fallbackImages.length],
  videoUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${recipe.dish} receita tradicional video aula`)}`,
  recipeUrl: `https://www.google.com/search?q=${encodeURIComponent(`${recipe.dish} receita tradicional`)}`,
  infoUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(recipe.wiki).replaceAll("%2F", "/")}`
}));

const feedbacks = [
  { name: "Marina", rating: 5, text: "Fiz a paella no domingo de jogo e a família inteira pediu replay." },
  { name: "Caio", rating: 5, text: "A aula do bibimbap deixou tudo muito claro. Visual lindo e fácil de seguir." },
  { name: "Renata", rating: 4, text: "Gostei dos filtros por grupo. Já montei um menu completo para assistir às partidas." }
];

const grid = document.querySelector("#recipeGrid");
const groupFilter = document.querySelector("#groupFilter");
const difficultyFilter = document.querySelector("#difficultyFilter");
const searchInput = document.querySelector("#searchInput");
const dialog = document.querySelector("#recipeDialog");
const dialogContent = document.querySelector("#dialogContent");
const lessonSelect = document.querySelector("#lessonSelect");
const lessonRecipe = document.querySelector("#lessonRecipe");
const lessonCountry = document.querySelector("#lessonCountry");
const lessonSteps = document.querySelector("#lessonSteps");
const tutorialLink = document.querySelector("#tutorialLink");
const recipeLink = document.querySelector("#recipeLink");
const videoFrame = document.querySelector(".video-frame");
const playButton = document.querySelector("#playButton");
const feedbackList = document.querySelector("#feedbackList");
const feedbackForm = document.querySelector("#feedbackForm");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function imageFor(recipe) {
  return recipe.image || recipe.fallbackImage;
}

function initFilters() {
  [...new Set(recipes.map(recipe => recipe.group))].forEach(group => {
    const option = document.createElement("option");
    option.value = group;
    option.textContent = `Grupo ${group}`;
    groupFilter.append(option);
  });

  recipes.forEach((recipe, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${recipe.country} - ${recipe.dish}`;
    lessonSelect.append(option);
  });
}

function renderRecipes() {
  const term = searchInput.value.trim().toLowerCase();
  const group = groupFilter.value;
  const difficulty = difficultyFilter.value;
  const filtered = recipes.filter(recipe => {
    const searchable = `${recipe.country} ${recipe.dish} ${recipe.summary}`.toLowerCase();
    const matchesTerm = searchable.includes(term);
    const matchesGroup = group === "all" || recipe.group === group;
    const matchesDifficulty = difficulty === "all" || recipe.difficulty === difficulty;
    return matchesTerm && matchesGroup && matchesDifficulty;
  });

  grid.innerHTML = filtered.map(recipe => {
    const sourceIndex = recipes.indexOf(recipe);
    const image = imageFor(recipe);
    return `
      <article class="recipe-card">
        <div class="recipe-photo-wrap">
          <img class="recipe-photo" src="${image}" alt="Foto de exemplo de ${escapeHtml(recipe.dish)}" loading="lazy" onerror="this.onerror=null;this.src='${recipe.fallbackImage}'">
          <span class="group-ribbon">Grupo ${recipe.group}</span>
          <span class="flag" aria-hidden="true">${recipe.flag}</span>
        </div>
        <div class="recipe-card-body">
          <p class="country">${recipe.country}</p>
          <h3>${recipe.dish}</h3>
          <p class="recipe-summary">${recipe.summary}</p>
          <ul class="ingredient-preview">
            ${recipe.ingredients.slice(0, 3).map(item => `<li>${item}</li>`).join("")}
          </ul>
          <div class="meta">
            <span>${recipe.time}</span>
            <span>${recipe.difficulty}</span>
            <span>${recipe.servings}</span>
          </div>
          <div class="card-actions">
            <button class="button primary" data-open="${sourceIndex}">Ver receita</button>
            <a class="button video-button" href="${recipe.videoUrl}" target="_blank" rel="noopener">Vídeo</a>
            <button class="button ghost" data-lesson="${sourceIndex}">Aula guiada</button>
            <a class="button ghost" href="${recipe.recipeUrl}" target="_blank" rel="noopener">Link</a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  if (!filtered.length) {
    grid.innerHTML = `<p>Nenhuma receita encontrada com esses filtros.</p>`;
  }
}

function openRecipe(index) {
  const recipe = recipes[index];
  const image = imageFor(recipe);
  dialogContent.innerHTML = `
    <div class="dialog-media">
      <img src="${image}" alt="Foto de exemplo de ${escapeHtml(recipe.dish)}" onerror="this.onerror=null;this.src='${recipe.fallbackImage}'">
      <div>
        <p class="kicker">Grupo ${recipe.group} · ${recipe.country}</p>
        <h2>${recipe.flag} ${recipe.dish}</h2>
        <p>${recipe.summary}</p>
        <div class="dialog-meta">
          <span>${recipe.time}</span>
          <span>${recipe.difficulty}</span>
          <span>${recipe.servings}</span>
        </div>
      </div>
    </div>
    <div class="dialog-body">
      <section>
        <h3>Ingredientes</h3>
        <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section>
        <h3>Modo de preparo detalhado</h3>
        <ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol>
      </section>
      <section class="dialog-tip">
        <h3>Dica de cozinha</h3>
        <p>${recipe.tip}</p>
      </section>
      <section class="dialog-links">
        <h3>Vídeos e links</h3>
        <a class="button video-button" href="${recipe.videoUrl}" target="_blank" rel="noopener">Videoaula no YouTube</a>
        <a class="button ghost" href="${recipe.recipeUrl}" target="_blank" rel="noopener">Buscar receita completa</a>
        <a class="button ghost" href="${recipe.infoUrl}" target="_blank" rel="noopener">Origem do prato</a>
      </section>
    </div>
  `;
  dialog.showModal();
}

function setLesson(index, shouldScroll = true) {
  const recipe = recipes[index];
  const image = imageFor(recipe);
  lessonSelect.value = index;
  lessonRecipe.textContent = recipe.dish;
  lessonCountry.textContent = `${recipe.country} · Grupo ${recipe.group}`;
  lessonSteps.innerHTML = recipe.steps.map((step, stepIndex) => `<li><strong>${String(stepIndex + 1).padStart(2, "0")}</strong> ${step}</li>`).join("");
  tutorialLink.href = recipe.videoUrl;
  recipeLink.href = recipe.recipeUrl;
  videoFrame.style.backgroundImage = `linear-gradient(140deg, rgba(8, 59, 45, .90), rgba(214, 40, 57, .46)), url("${image}")`;
  if (shouldScroll) {
    document.querySelector("#aulas").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderFeedbacks() {
  feedbackList.innerHTML = feedbacks.map(item => `
    <article class="feedback-card">
      <div class="stars">${"★".repeat(item.rating)}${"☆".repeat(5 - item.rating)}</div>
      <h3>${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("");
}

async function loadRecipeImages() {
  await Promise.allSettled(recipes.map(async recipe => {
    const endpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(recipe.wiki)}`;
    const response = await fetch(endpoint);
    if (!response.ok) return;
    const data = await response.json();
    recipe.image = data.originalimage?.source || data.thumbnail?.source || recipe.fallbackImage;
  }));
  renderRecipes();
  setLesson(Number(lessonSelect.value || 0), false);
}

grid.addEventListener("click", event => {
  const openIndex = event.target.dataset.open;
  const lessonIndex = event.target.dataset.lesson;
  if (openIndex) openRecipe(Number(openIndex));
  if (lessonIndex) setLesson(Number(lessonIndex));
});

document.querySelector(".close-dialog").addEventListener("click", () => dialog.close());
[groupFilter, difficultyFilter, searchInput].forEach(control => control.addEventListener("input", renderRecipes));
lessonSelect.addEventListener("change", event => setLesson(Number(event.target.value)));
playButton.addEventListener("click", () => window.open(tutorialLink.href, "_blank", "noopener"));

feedbackForm.addEventListener("submit", event => {
  event.preventDefault();
  feedbacks.unshift({
    name: document.querySelector("#nameInput").value,
    rating: Number(document.querySelector("#ratingInput").value),
    text: document.querySelector("#commentInput").value
  });
  feedbackForm.reset();
  renderFeedbacks();
});

initFilters();
renderRecipes();
setLesson(0, false);
renderFeedbacks();
loadRecipeImages();
