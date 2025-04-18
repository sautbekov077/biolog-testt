// Банк всех вопросов (добавьте остальные 98 вопросов)
const allQuestions = [
    {
        question: "Қай органоид ақуызды синтездейді?",
        options: ["Митохондрия", "Рибосома", "Ядро", "Гольджи аппараты"],
        answer: 1
    },
    {
        question: "Жасушаның бөліну үдерісі қалай аталады?",
        options: ["Митоз", "Мейоз", "Фотосинтез", "Тотығу"],
        answer: 0
    },
    {
        question: "Акаралогия нені зерттейді?",
        options: ["Кенелерді", "Адамдарды", "Жануарларды", "Өсімдіктерді"],
        answer: 0 // индекс правильного ответа (0 = "")
    },
    {
        question: "Оргпниздердің көбею тиімділігін арттырады",
        options: ["Симбиоз", "Репродуктивті кооперация", "Комменсализм", "Селбестік"],
        answer: 1 // индекс правильного ответа (0 = "")
    },
    {
        question: "Мирмекология нені зерттейді?",
        options: ["Құрттарды ", "Өрмекшілерді", "Құмырсқаларды", "Балықтарды"],
        answer: 2 // индекс правильного ответа (0 = "")
    },
    {
        question: "Лепидоптерология нені зерттейді?",
        options: ["Көбелектерді", "Балықтарды", "Жәндіктерді", "Сүтқоректілерді"],
        answer: 0 // индекс правильного ответа (0 = "")
    },
    {
        question: "Жасушаның негізгі энергетикалық орталығы қай органелла болып табылады?",
        options: ["Ядро", "Митохондрия", "Рибосома", "Гольджи аппараты"],
        answer: 1 // индекс правильного ответа (0 = "")
    },
    {
        question: "Фотосинтез процесі қай органеллада жүреді?",
        options: ["Хлоропласт", "Лизосома", "Вакуоль", "Эндоплазмалық тор"],
        answer: 0 // индекс правильного ответа (0 = "")
    },
    {
        question: "Адамның қан тобы қандай затқа байланысты анықталады?",
        options: ["Эритроциттердің пішіні", "Антигендер мен антиденелер", "Тромбоциттер саны", "Лейкоциттердің құрамы"],
        answer: 1// индекс правильного ответа (0 = "")
    },
    {
        question: "ДНҚ молекуласының құрылымы қандай пішінге ие?",
        options: ["Бір тізбекті спираль", "Қос спираль", "Шеңбер", "Тік сызық"],
        answer: 1 // индекс правильного ответа (0 = "")
    },
    {
        question: "Адамның тыныс алу жүйесінде газ алмасу қай жерде жүреді?",
        options: ["Бронхтарда", "Альвеолаларда", "Трахеяда", "Көмекейде"],
        answer: 1 // индекс правильного ответа (0 = "")
    },
    {
        question: "Қандай гормон қандағы қант деңгейін реттейді?",
        options: ["Адреналин", "Инсулин", "Тироксин", "Кортизол"],
        answer: 1 // индекс правильного ответа (0 = "")
    },
    {
        question: "Жүйке жүйесінің негізгі құрылымдық бірлігі не деп аталады?",
        options: ["Нейрон", "Глия", "Аксон", "Дендрит"],
        answer: 0 // индекс правильного ответа (0 = "")
    },
    {
        question: "Тамырлы өсімдіктердің су мен қоректік заттарды тасымалдауға жауапты ұлпасы қалай аталады?",
        options: ["Паренхима", "Ксилема", "Эпидермис", "Колленхима"],
        answer: 1 // индекс правильного ответа (0 = "")
    },
    {
        question: "Адамның ас қорыту жүйесінде белоктар қай жерде ыдырай бастайды?",
        options: ["Ауыз қуысында", "Асқазанда", "Он елі ішекте", "Жіңішке ішекте"],
        answer: 1 // индекс правильного ответа (0 = "")
    },
    {
        question: "Қандай организмдер автотрофтыларға жатады?",
        options: ["Саңырауқұлақтар", "Жануарлар", "Өсімдіктер", "Бактериялардың барлығы"],
        answer: 2 // индекс правильного ответа (0 = "")
    },
    {
        question: "Адамның қан айналым жүйесінде оттегімен байытылған қан қай тамыр арқылы жүрекке қайтады?",
        options: ["Өкпе артериясы", "Өкпе венасы", "Қолқа", "Жүрекше венасы"],
        answer: 1 // индекс правильного ответа (0 = "")
    },
    {
        question: "ДНҚ-ның құрамында қандай азот негіздері бар?",
        options: ["Аденин, тимин, гуанин, цитозин", "Аденин, урацил, гуанин, цитозин", "Тимин, урацил, гуанин, цитозин", "Аденин, тимин, гуанин, урацил"],
        answer: 0
    },
    {
        question: "Фотосинтез процесінде бөлінетін газ қандай?",
        options: ["Көмірқышқыл газы", "Оттегі", "Азот", "Сутегі"],
        answer: 1
    },
    {
        question: "Адамның қан айналымында қанды жүректен алыс жеткізетін тамырлар қалай аталады?",
        options: ["Артериялар", "Веналар", "Капиллярлар", "Лимфа тамырлары"],
        answer: 0
    },
    {
        question: "Қандай органоид жасушаның энергия станциясы деп аталады?",
        options: ["Рибосома", "Митохондрия", "Ядро", "Лизосома"],
        answer: 1
    },
    {
        question: "Адамның иммундық жүйесінде антиденелерді қандай жасушалар өндіреді?",
        options: ["Эритроциттер", "Тромбоциттер", "В-лимфоциттер", "Нейтрофилдер"],
        answer: 2
    },
    {
        question: "Өсімдік жасушасында қандай органоид фотосинтезге жауап береді?",
        options: ["Митохондрия", "Хлоропласт", "Вакуоль", "Гольджи аппараты"],
        answer: 1
    },
    {
        question: "Қандай витамин күн сәулесінің әсерінен теріде түзіледі?",
        options: ["Витамин А", "Витамин В", "Витамин С", "Витамин D"],
        answer: 3
    },
    {
        question: "Адамның қаңқасында қанша сүйек бар?",
        options: ["150", "206", "250", "306"],
        answer: 1
    },
    {
        question: "Қандай процесс арқылы жасушалар бөлінеді?",
        options: ["Фотосинтез", "Митоз", "Фагоцитоз", "Осмос"],
        answer: 1
    },
    {
        question: "Адамның миының қай бөлігі ойлауға жауап береді?",
        options: ["Мишық", "Үлкен ми сыңарлары", "Ортаңғы ми", "Артқы ми"],
        answer: 1
    },
    {
        question: "Қандай гормон стресс кезінде бөлінеді?",
        options: ["Инсулин", "Адреналин", "Эстроген", "Тестостерон"],
        answer: 1
    },
    {
        question: "Адамның ас қорыту жүйесінде майлар қай жерде ыдырайды?",
        options: ["Асқазанда", "Он елі ішекте", "Жіңішке ішекте", "Тоқ ішекте"],
        answer: 2
    },
    {
        question: "Қандай өсімдіктерде тамыр жүйесі болмайды?",
        options: ["Мүктер", "Қырықжапырақтар", "Гүлді өсімдіктер", "Папоротниктер"],
        answer: 0
    },
    {
        question: "Адамның тыныс алу жүйесіндегі ең кішкентай құрылым қалай аталады?",
        options: ["Бронхиолалар", "Альвеолалар", "Бронхтар", "Трахея"],
        answer: 1
    },
    {
        question: "Қандай организмдер паразиттік тіршілік етеді?",
        options: ["Ағаштар", "Жалпақ құрттар", "Балықтар", "Құстар"],
        answer: 1
    },
    {
        question: "Қандай ұлпа өсімдіктердің өсуіне жауап береді?",
        options: ["Тірек ұлпа", "Өткізгіш ұлпа", "Меристемалық ұлпа", "Негізгі ұлпа"],
        answer: 2
    },
    {
        question: "Адамның миындағы есту орталығы қай бөлікте орналасқан?",
        options: ["Маңдай бөлігі", "Самай бөлігі", "Төбе бөлігі", "Желке бөлігі"],
        answer: 1
    },
    {
        question: "Қандай процесс арқылы өсімдіктер судағы минералдарды сіңіреді?",
        options: ["Фотосинтез", "Осмос", "Тыныс алу", "Транспирация"],
        answer: 1
    },
    {
        question: "Адамның қандағы ақ түйіршіктер қандай қызмет атқарады?",
        options: ["Оттегі тасымалдау", "Иммундық қорғаныс", "Қан ұюы", "Энергия сақтау"],
        answer: 1
    },
    {
        question: "Қандай зат фотосинтез үшін қажет?",
        options: ["Оттегі", "Көмірқышқыл газы", "Азот", "Сутегі"],
        answer: 1
    },
    {
        question: "Адамның қан тобын анықтау үшін қандай фактор маңызды?",
        options: ["Резус-фактор", "Гемоглобин деңгейі", "Лейкоциттер саны", "Тромбоциттер саны"],
        answer: 0
    },
    {
        question: "Қандай гормон қандағы кальций деңгейін реттейді?",
        options: ["Инсулин", "Тироксин", "Паратгормон", "Адреналин"],
        answer: 2
    },
    {
        question: "Адамның зәр шығару жүйесінде несеп қай жерде түзіледі?",
        options: ["Қуықта", "Бүйректе", "Несепағарда", "Несеп жолдарында"],
        answer: 1
    },
    {
        question: "Қандай организмдер экосистемада өндірушілер рөлін атқарады?",
        options: ["Саңырауқұлақтар", "Өсімдіктер", "Жануарлар", "Бактериялар"],
        answer: 1
    },
    {
        question: "Адамның терісінде витамин D түзілуі үшін қандай фактор қажет?",
        options: ["Күн сәулесі", "Ылғал", "Температура", "Ауа қысымы"],
        answer: 0
    },
    {
        question: "Қандай микроорганизмдер сүт өнімдерін ашу үшін пайдаланылады?",
        options: ["Вирустар", "Бактериялар", "Саңырауқұлақтар", "Протисттер"],
        answer: 1
    },
    {
        question: "Адамның құлақ құрылымының қай бөлігі дыбыс тербелістерін қабылдайды?",
        options: ["Сыртқы құлақ", "Ортаңғы құлақ", "Ішкі құлақ", "Құлақ арқауы"],
        answer: 2
    },
    {
        question: "Қандай өсімдіктер топырақтың құнарлылығын арттырады?",
        options: ["Бактероидтер", "Азот", "Микоризалар", "Барлық жауаптар дұрыс"],
        answer: 3
    },
    {
        question: "Адамның бауырының негізгі қызметі қандай?",
        options: ["Қанды сүзу", "Ас қорыту", "Зәр шығару", "Гормондар өндіру"],
        answer: 0
    },
    {
        question: "Қандай жануарлардың қаны суыққа байланысты түсі өзгермейді?",
        options: ["Құстар", "Сүтқоректілер", "Бауырымен жорғалаушылар", "Балықтар"],
        answer: 3
    },
    {
        question: "Фототропизм дегеніміз не?",
        options: ["Өсімдіктің жарыққа бағытталуы", "Суға бағытталу", "Тамырдың жерге бағытталуы", "Тірекке бағытталу"],
        answer: 0
    },
    {
        question: "Қандай витамин қан ұю процесіне қатысады?",
        options: ["Витамин А", "Витамин В", "Витамин С", "Витамин К"],
        answer: 3
    },
    {
        question: "Адамның нерв жүйесінде импульстарды өткізетін құрылым қалай аталады?",
        options: ["Нейрон", "Синапс", "Аксон", "Дендрит"],
        answer: 2
    },
    {
        question: "Қандай экожүйеде биомасса саны ең көп?",
        options: ["Шөл", "Тропикалық орман", "Дала", "Тундра"],
        answer: 1
    },
    {
        question: "Адамның эндокриндік жүйесінде қандай без инсулин өндіреді?",
        options: ["Ұйқы безі", "Қалқанша без", "Ұйқы безі", "Ұйқы безі"],
        answer: 2
    },
    {
        question: "Қандай процесстер көктемде өсімдіктердің өсуін ынталандырады?",
        options: ["Фотопериодизм", "Хемосинтез", "Гидролиз", "Ферментация"],
        answer: 0
    },
    {
        question: "Адамның қан айналымы жүйесінде қан қысымын қандай мүше реттейді?",
        options: ["Жүрек", "Бүйрек", "Бауыр", "Ми"],
        answer: 1
    },
    {
        question: "Қандай микроскоп электрондар ағынын пайдаланады?",
        options: ["Жарық микроскобы", "Электронды микроскоп", "Сканерлеуші микроскоп", "Атомдық күш микроскобы"],
        answer: 1
    },
    {
        question: "Адамның сүйек ұлпасында қандай жасушалар сүйекті құрайды?",
        options: ["Остеоциттер", "Хондроциттер", "Эритроциттер", "Фибробласттар"],
        answer: 0
    },
    {
        question: "Қандай экожүйеде түрлердің саны ең көп?",
        options: ["Тропикалық орман", "Дала", "Тайга", "Шөл"],
        answer: 0
    },
    {
        question: "Адамның ішек микрофлорасының негізгі қызметі қандай?",
        options: ["Витаминдер синтездеу", "Ас қорыту", "Зәр шығару", "Иммунитетті қолдау"],
        answer: 3
    },
    {
        question: "Қандай генетикалық заңдылықты Мендель ашқан?",
        options: ["Доминанттылық заңы", "Тәуелсіз үлестірім заңы", "Ұрпақтардың біркелкілігі заңы", "Барлық жауаптар дұрыс"],
        answer: 3
    },
    {
        question: "Адамның көзінде қандай пигмент түстерді қабылдауға жауап береді?",
        options: ["Меланин", "Родопсин", "Гемоглобин", "Кератин"],
        answer: 1
    },
    {
        question: "Қандай экожүйеде су айналымы ең жоғары?",
        options: ["Тропикалық орман", "Шөл", "Тундра", "Дала"],
        answer: 0
    },
    {
        question: "Адамның нерв жүйесінде қандай заттар импульстарды өткізеді?",
        options: ["Гормондар", "Нейромедиаторлар", "Ферменттер", "Антиденелер"],
        answer: 1
    },
    {
        question: "Қандай өсімдіктер топырақтан көмірқышқыл газын сіңіреді?",
        options: ["САМ өсімдіктері", "С3 өсімдіктері", "С4 өсімдіктері", "Барлық жауаптар дұрыс"],
        answer: 3
    },
    {
        question: "Адамның қатерлі ісіктерінің пайда болуына не себеп болады?",
        options: ["Вирустар", "Бактериялар", "ДНҚ-ның өзгеруі", "Гормондардың бұзылуы"],
        answer: 2
    },
    {
        question: "Қандай экологиялық факторлар биотикалық факторларға жатады?",
        options: ["Жауынгерлік", "Топырақтың құрамы", "Климат", "Су режимі"],
        answer: 0
    },
    {
        question: "Адамның миының қай бөлігі қозғалысқа жауап береді?",
        options: ["Мишық", "Үлкен ми сыңарлары", "Ортаңғы ми", "Артқы ми"],
        answer: 1
    },
    {
        question: "Қандай генетикалық әдіс ата-бабаларды анықтауға мүмкіндік береді?",
        options: ["ПЦР", "ДНҚ-анализ", "Кариотиптік анализ", "Гендік инженерия"],
        answer: 1
    },
    {
        question: "Қандай фермент асқазан сөлінде болады және белоктарды ыдыратады?",
        options: ["Амилаза", "Липаза", "Пепсин", "Трипсин"],
        answer: 2
    },
    {
        question: "Қандай жануарлардың жүрегінде артериялық және веналық қан араласады?",
        options: ["Балықтар", "Қосмекенділер", "Құстар", "Сүтқоректілер"],
        answer: 1
    },
    {
        question: "Фотосинтез процесінде жарық энергиясы қандай затқа айналады?",
        options: ["АТФ", "Глюкоза", "Хлорофилл", "Көмірқышқыл газы"],
        answer: 0
    },
    {
        question: "Қандай гормон адам организмінде кальций деңгейін төмендетеді?",
        options: ["Паратгормон", "Кальцитонин", "Тироксин", "Инсулин"],
        answer: 1
    },
    {
        question: "Қандай өсімдіктер топырақтағы ауыр металдарды жинай алады?",
        options: ["Гипераккумуляторлар", "Ксерофиттер", "Гидрофиттер", "Мезофиттер"],
        answer: 0
    },
    {
        question: "Адамның ДНҚ-сында қанша хромосома бар?",
        options: ["23", "46", "64", "92"],
        answer: 1
    },
    {
        question: "Қандай процесстер митоздың профаза кезеңінде болады?",
        options: ["Хромосомалардың конденсациясы", "Цитоплазманың бөлінуі", "Ядро қабықшасының қайта құрылуы", "Хромосомалардың орталықта жиналуы"],
        answer: 0
    },
    {
        question: "Қандай бактериялар атмосферадағы азотты бекіте алады?",
        options: ["Клостридиум", "Ризобиум", "Сальмонелла", "Стрептококк"],
        answer: 1
    },
    {
        question: "Адамның қан құрамындағы эритроциттердің өмір сүру ұзақтығы қанша?",
        options: ["7 күн", "30 күн", "120 күн", "1 жыл"],
        answer: 2
    },
    {
        question: "Қандай вирус АИДС ауруын тудырады?",
        options: ["Грипп вирусы", "Гепатит В", "ВИЧ", "Полиомиелит"],
        answer: 2
    },
    {
        question: "Қандай экожүйеде биомассаның төменгі деңгейлеріндегі энергия шығыны ең жоғары?",
        options: ["Тропикалық орман", "Дала", "Теңіз", "Шөл"],
        answer: 2
    },
    {
        question: "Адамның миының қай бөлігі рефлекстерді басқарады?",
        options: ["Үлкен ми", "Мишық", "Жұлын", "Ортаңғы ми"],
        answer: 2
    },
    {
        question: "Қандай генетикалық әдіс ДНҚ ретін анықтауға мүмкіндік береді?",
        options: ["Электрофорез", "ПЦР", "ДНҚ секвенциясы", "Гибридизация"],
        answer: 2
    },
    {
        question: "Қандай өсімдіктер тобына қырықжапырақтар жатады?",
        options: ["Жабық тұқымдылар", "Жалаңаш тұқымдылар", "Споралы өсімдіктер", "Гүлді өсімдіктер"],
        answer: 1
    },
    {
        question: "Адамның қатерлі ісігінің метастаздануы дегеніміз не?",
        options: ["Ісіктің өсуі", "Ісіктің жаңа ошақтарға таралуы", "Ісіктің ремиссиясы", "Ісіктің автономды өсуі"],
        answer: 1
    },
    {
        question: "Қандай экологиялық факторлар абиотикалық факторларға жатады?",
        options: ["Жарық", "Жыртқыштық", "Паразитизм", "Конкуренция"],
        answer: 0
    },
    {
        question: "Адамның қан түзілу мүшесі қайсы?",
        options: ["Бауыр", "Көкбауыр", "Лимфа түйіндері", "Барлық жауаптар дұрыс"],
        answer: 3
    },
    {
        question: "Қандай хромосомалық ауруда 47 хромосома болады?",
        options: ["Даун синдромы", "Тернер синдромы", "Клайнфельтер синдромы", "Фенилкетонурия"],
        answer: 0
    },
    {
        question: "Қандай процесстердің нәтижесінде жасушада АТФ түзіледі?",
        options: ["Гликолиз", "Цикл Кребса", "Тыныс алмасу тізбегі", "Барлық жауаптар дұрыс"],
        answer: 3
    },
    {
        question: "Қандай өсімдіктер топырақтың тұздылығын төмендете алады?",
        options: ["Галофиттер", "Ксерофиттер", "Мезофиттер", "Гидрофиттер"],
        answer: 0
    },
    {
        question: "Адамның эндокриндік жүйесінде қандай без эпифиз деп аталады?",
        options: ["Қалқанша без", "Ұйқы безі", "Ұйқы безі", "Ұйқы безі"],
        answer: 1
    },
    {
        question: "Қандай вирус Эбола геморрагиялық қызбасын тудырады?",
        options: ["Флавивирус", "Филовирус", "Ретровирус", "Аденовирус"],
        answer: 1
    },
    {
        question: "Қандай генетикалық заңдылық бойынша гендер тәуелсіз түрде үлестіріледі?",
        options: ["Мендельдің бірінші заңы", "Мендельдің екінші заңы", "Морган заңы", "Харди-Вайнберг заңы"],
        answer: 1
    },
    {
        question: "Қандай микроорганизмдер биогаз өндіру үшін пайдаланылады?",
        options: ["Метаногендер", "Ацетогендер", "Сульфатты тоздырушылар", "Денитрификаторлар"],
        answer: 0
    },
    {
        question: "Адамның қатерлі ісіктерінің химиялық терапиясында қандай заттар қолданылады?",
        options: ["Антибиотиктер", "Цитостатиктер", "Гормондар", "Витаминдер"],
        answer: 1
    },
    // Добавьте остальные вопросы в том же формате...
];

// Настройки теста
const QUESTIONS_IN_TEST = 50; // Сколько вопросов показывать
let questions = []; // Текущий набор вопросов
let currentQuestion = 0; // Текущий вопрос
let score = 0; // Количество правильных ответов
const app = document.getElementById('app'); // Основной контейнер
const progressCircle = document.getElementById('progressCircle'); // Круглый прогресс

// Перемешивание массива без изменения исходных данных
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Перемешивание вариантов ответов с сохранением правильного
function shuffleQuestion(question) {
    const correctAnswerText = question.options[question.answer];
    const shuffledOptions = shuffleArray(question.options);
    return {
        ...question,
        options: shuffledOptions,
        answer: shuffledOptions.indexOf(correctAnswerText)
    };
}

// Обновление круглого прогресса
function updateProgressCircle(percent) {
    progressCircle.innerHTML = `<span>${percent}%</span>`;
    progressCircle.style.background = `conic-gradient(#3aafa9 ${percent}%, #2b7a78 ${percent}%)`;
}

// Начало теста
function startTest() {
    // Выбираем случайные вопросы и перемешиваем только порядок вариантов
    questions = shuffleArray(allQuestions)
        .slice(0, QUESTIONS_IN_TEST)
        .map(question => shuffleQuestion(question));
    
    currentQuestion = 0;
    score = 0;
    progressCircle.style.display = 'flex';
    renderQuestion();
}

// Отображение вопроса
function renderQuestion() {
    const question = questions[currentQuestion];
    const progressPercent = Math.round(((currentQuestion + 1) / questions.length) * 100);
    
    updateProgressCircle(progressPercent);
    
    app.innerHTML = `
        <h1>Биологиядан тестілеу (${QUESTIONS_IN_TEST} сұрақ)</h1>
        <div class="progress-bar">
            <div class="progress" style="width: ${progressPercent}%"></div>
        </div>
        <h2 class="question">${question.question}</h2>
        <div class="options-grid">
            ${question.options.map((option, index) => `
                <button class="option-btn" 
                        onclick="checkAnswer(${index})"
                        data-answer="${index === question.answer}">
                    ${option}
                </button>
            `).join('')}
        </div>
    `;
}

// Проверка ответа
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const optionButtons = document.querySelectorAll('.option-btn');
    const isCorrect = selectedIndex === question.answer;
    
    // Подсветка ответов
    optionButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.answer === "true") {
            btn.style.border = "3px solid #4caf50";
            btn.style.background = "rgba(76, 175, 80, 0.1)";
        } else if (parseInt(btn.getAttribute('onclick').match(/\d+/)[0]) === selectedIndex && !isCorrect) {
            btn.style.border = "3px solid #f44336";
            btn.style.background = "rgba(244, 67, 54, 0.1)";
        }
    });
    
    if (isCorrect) score++;
    
    // Задержка перед следующим вопросом
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

// Показ результатов
function showResults() {
    const percent = Math.round((score / questions.length) * 100);
    updateProgressCircle(percent);
    
    app.innerHTML = `
        <h2>Тест аяқатлды!</h2>
        <div class="results">
            <p>Дұрыс жауаптар саны: <strong.${questions.length}</strong>/<strong>${score}</strong></p>
            <p>Нәтижеңіз: <strong>${percent}%</strong></p>
        </div>
        <button onclick="startTest()">Қайта тапсыру</button>
    `;
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    progressCircle.style.display = 'none';
    app.innerHTML = `
        <h1>Биология пәнінен тест сұрақтары</h1>
        <p>Тестте ${QUESTIONS_IN_TEST} сұрақ бар. Әр сұраққа жауап беріңіз.</p>
        <p>Тест аяқталғаннан кейін нәтижелеріңізді көресіз.</p>
        <button onclick="startTest()">Тестілеуді бастау</button>
    `;
});