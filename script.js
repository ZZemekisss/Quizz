const questions = [
  {
    question: 'Какая планета Солнечной системы является самой горячей?',
    answers: ['Меркурий', 'Венера', 'Марс', 'Юпитер'],
    index: 1, // Венера
    explanation: 'Из-за крайне плотной атмосферы из углекислого газа и мощного парникового эффекта температура на Венере превышает 460°C, что делает её горячее Меркурия.'
  },
  {
    question: 'Как называется наша Галактика?',
    answers: ['Андромеда', 'Млечный Путь', 'Большое Магелланово Облако', 'Сомбреро'],
    index: 1, // Млечный Путь
    explanation: 'Наша Солнечная система находится в галактике Млечный Путь, которая представляет собой спиральную галактику с перемычкой.'
  },
  {
    question: 'Кто был первым человеком, совершившим полет в космическое пространство?',
    answers: ['Нил Армстронг', 'Алексей Леонов', 'Юрий Гагарин', 'Джон Гленн'],
    index: 2, // Юрий Гагарин
    explanation: '12 апреля 1961 года советский космонавт Юрий Гагарин первым в мире совершил полет в космос на корабле «Восток-1».'
  },
  {
    question: 'Какая планета Солнечной системы известна своими огромными и яркими кольцами?',
    answers: ['Уран', 'Сатурн', 'Нептун', 'Юпитер'],
    index: 1, // Сатурн
    explanation: 'Кольца есть у всех газовых гигантов, но именно у Сатурна они самые масштабные, заметные и состоят преимущественно из миллиардов частиц льда и пыли.'
  },
  {
    question: 'Какое небесное тело в 2006 году официально перестали считать полноценной планетой?',
    answers: ['Плутон', 'Церера', 'Эрида', 'Хаумеа'],
    index: 0, // Плутон
    explanation: 'Международный астрономический союз в 2006 году изменил определение планеты, из-за чего Плутон был переведен в статус карликовых планет.'
  },
  {
    question: 'Сколько времени требуется солнечному свету, чтобы долететь до Земли?',
    answers: ['Около 8 секунд', 'Около 8 минут', 'Около 8 часов', 'Мгновенно'],
    index: 1, // Около 8 минут
    explanation: 'Расстояние от Солнца до Земли составляет около 150 млн км. Свет, двигаясь со скоростью 300 000 км/с, преодолевает его примерно за 8 минут и 20 секунд.'
  },
  {
    question: 'Какая планета Солнечной системы имеет самый большой вулкан, названный Олимп?',
    answers: ['Марс', 'Венера', 'Меркурий', 'Сатурн'],
    index: 0, // Марс
    explanation: 'Потухший вулкан Олимп на Марсе имеет высоту более 21 километра, что делает его самой высокой горой на планетах Солнечной системы.'
  },
  {
    question: 'Какая звезда является ближайшей к нашей Солнечной системе?',
    answers: ['Сириус', 'Полярная звезда', 'Проксима Центавра', 'Бетельгейзе'],
    index: 2, // Проксима Центавра
    explanation: 'Проксима Центавра — это красный карлик, расположенный на расстоянии примерно 4,24 световых года от Земли.'
  },
  {
    question: 'Как называется область пространства с настолько сильной гравитацией, что её не может покинуть даже свет?',
    answers: ['Белая дыра', 'Черная дыра', 'Квазар', 'Туманность'],
    index: 1, // Черная дыра
    explanation: 'Черная дыра обладает настолько мощным гравитационным полем, что вторая космическая скорость для неё превышает скорость света.'
  },
  {
    question: 'Какая планета Солнечной системы вращается вокруг Солнца «лежа на боку»?',
    answers: ['Нептун', 'Сатурн', 'Уран', 'Юпитер'],
    index: 2, // Уран
    explanation: 'Угол наклона оси вращения Урана составляет около 98 градусов. Он буквально катится по своей орбите, поворачиваясь к Солнцу то одним полюсом, то другим.'
  },
  {
    question: 'Какой космический телескоп, запущенный в 2021 году, стал преемником легендарного «Хаббла»?',
    answers: ['Джеймс Уэбб', 'Кеплер', 'Чандра', 'Спитцер'],
    index: 0, // Джеймс Уэбб
    explanation: 'Телескоп «Джеймс Уэбб» оснащен огромным зеркалом и работает в инфракрасном диапазоне, позволяя заглянуть в самые ранние эпохи существования Вселенной.'
  },
  {
    question: 'Какое естественное небесное тело является единственным спутником Земли?',
    answers: ['Фобос', 'Луна', 'Титан', 'Европа'],
    index: 1, // Луна
    explanation: 'Луна — единственный постоянный естественный спутник Земли и пятый по величине спутник в Солнечной системе.'
  },
  {
    question: 'Как называется крупнейший спутник Сатурна, обладающий плотной атмосферой и озерами из жидкого метана?',
    answers: ['Ио', 'Ганимед', 'Каллисто', 'Титан'],
    index: 3, // Титан
    explanation: 'Титан — единственный спутник в Солнечной системе с плотной атмосферой. На его поверхности текут реки и существуют озера из жидкого метана и этана.'
  },
  {
    question: 'В каком созвездии находится Полярная звезда, указывающая на север?',
    answers: ['Большая Медведица', 'Малая Медведица', 'Орион', 'Кассиопея'],
    index: 1, // Малая Медведица
    explanation: 'Полярная звезда расположена на самом конце «ковша» созвездия Малая Медведица.'
  },
  {
    question: 'Как называется граница черной дыры, за которую никакой объект или сигнал уже не может вернуться назад?',
    answers: ['Точка сингулярности', 'Сфера Шварцшильда', 'Горизонт событий', 'Гравитационный радиус'],
    index: 2, // Горизонт событий
    explanation: 'Горизонт событий — это воображаемая граница в пространстве-времени, разделяющая события, которые можно увидеть извне, от тех, что навсегда скрыты внутри.'
  }
];

let divQuiz = document.getElementById('quiz');
let currentQuestionIndex = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let score = 2;


function setquestion() {
  divQuiz.innerHTML = '';  

  let count = document.createElement('p');
  count.className = "count";
  count.textContent = `${currentQuestionIndex+1}/${questions.length}`
  divQuiz.appendChild(count)

  let title = document.createElement('h2');
  title.textContent = questions[currentQuestionIndex].question;
  divQuiz.appendChild(title);

  // Отрендерили кнопки ответов
  for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
    let button = document.createElement('button');
    button.textContent = questions[currentQuestionIndex].answers[i];
    
    button.onclick = function() {
      checkAnswer(i, questions[currentQuestionIndex].index);
    };

    divQuiz.appendChild(button);
  }

  let exitBtn = document.createElement('button');
  exitBtn.onclick = exitQuizTable; 
  exitBtn.textContent = 'Выход';
  exitBtn.className = "exitBtn"; 
  divQuiz.appendChild(exitBtn); 
};

function checkAnswer(selectedIndex, correctIndex) {
  if (selectedIndex === correctIndex) {
    rightAnswers++;
    currentQuestionIndex++;
    
    divQuiz.innerHTML = `<h1>Верно!✅</h1>  <h1>${questions[currentQuestionIndex - 1].explanation}</h1><button onclick="setquestion()">Далее</button>`;

} else {
  currentQuestionIndex++;
    wrongAnswers++;

  divQuiz.innerHTML = `<h1>Неверно!❌</h1> <h1>Верный ответ: ${questions[currentQuestionIndex - 1].answers[questions[currentQuestionIndex - 1].index]}</h1><h1> ${questions[currentQuestionIndex - 1].explanation}</h1><button onclick="setquestion()">Далее</button>`;
}

};



function endQuiz(){
    currentQuestionIndex = questions.length
    divQuiz.innerHTML = `<h2>Тест пройден! 🎉</h2>
    <h2>Ваш результат составил ${rightAnswers}/${questions.length}, вы допустили ${wrongAnswers} ошибок.</h2><h3>Ваша оценка: ${calculateScore()}</h3> <button onclick="startAgain()">Ещё разок?</button>`;
}

let calculateScore = () => {
    let errorPercent =[ (wrongAnswers / questions.length) * 100, (rightAnswers / questions.length) * 100 ];
    if (errorPercent[0] <=20 && errorPercent[1]>=80) {
        score = '5 😁'; // 0 ошибок
    } else if (errorPercent[0] <=40 && errorPercent[1]>=60) {
        score = '4 🙂'; // От 1 до 2 ошибок (для 5 вопросов)
    } else if (errorPercent[0] <=50 && errorPercent[1]>=50) {
        score = '3 😑'; // От 3 до 4 ошибок (для 5 вопросов)
    } else {
        score = '2 😞'; // 5 и более ошибок на весь тест
    }
    
    return score;
};
function exitQuizTable(){
    divQuiz.innerHTML = '<h2>Уже уходите? Может вы хотели бы продолжить викторину?</h2>';
    let btnYes = document.createElement('button');
    btnYes.textContent = 'Да, хочу продолжить.';
    btnYes.onclick = setquestion;

    let btnNo = document.createElement('button');
    btnNo.textContent = 'Нет, хочу выйти.';
    btnNo.onclick = endQuiz;

    divQuiz.appendChild(btnYes);
    divQuiz.appendChild(btnNo);
}
function startAgain(){
 currentQuestionIndex = 0;
 rightAnswers = 0;
 wrongAnswers = 0;
 score = 0;
 setquestion()
}
// Запускаем тест
setquestion();
