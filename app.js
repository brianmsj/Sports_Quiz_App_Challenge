// We want to create a quiz, with 10 questions. Each question will have 4 multiple choice answers.
// If we use the state programming message.


//create our state object. We will not have any text inputs to this quiz, so we will initially place the objects of the questions and answers in the state object.

var questionObjects = [

  {
    question: "How many players on a basketball roster?",
    Choices: ['5', '7', '12', '10'],
    answer: 2,
  },
  {
    question: "Who has won the most tennis major championships?",
    Choices: ["Roger Federer", "Rafael Nadal", "Pete Sampras", "Andre Agassi"],
    answer: 0,
  },
  {
    question: "Who won the first superbowl?",
    Choices: ['49ers', 'Packers', 'Bengals', 'Bears'],
    answer: 1,
  },
  {
    question: "In Golf, what is meant by the term birdie?",
    Choices: ["1 under par", "1 over par", "2 under par", "2 over par"],
    answer: 0,
  },
  {
    question: "Who holds the record for most home runs in a season?",
    Choices: ["Mark Mcquire", "Barry Bonds", "Sammy Sosa", "Hank Aaron"],
    answer: 1,
  },
]

// create z-index answer box when a player answers a question.

var currentQuestion = 0;
var correctQuestion = 0;

var state = {
  questions: questionObjects,

  correctAnswer: function(choice) {
    var question = state.questions[currentQuestion].Choices;
    if (currentQuestion + 1 === state.questions.length) {
        finalDisplay(state);

    }

    if (question[choice] === question[state.questions[currentQuestion].answer]) {
      correctQuestion += 1
      alert('You got it right');
    } else {
      alert('you got it wrong');
    }
    currentQuestion += 1;
    initialDisplay(state);
  },



}


// write down all the numbers in choices, see if they are equal to answer: 12
// function correctAnswer(state) {
//   var correctAnswer = state.questions[0].answer[0];
//   for (var i = 0; i < state.questions[0].Choices.length; i++) {
//       if (state.questions.Choices[i] === correctAnswer) {
//         return correctAnswer;
//       }
//   }
// };
// display elements functions

function initialDisplay (state) {
   state.questions[0]
   $('.question').text(state.questions[currentQuestion].question);
   $('.answer-a').text(state.questions[currentQuestion].Choices[0]);
   $('.answer-b').text(state.questions[currentQuestion].Choices[1]);
   $('.answer-c').text(state.questions[currentQuestion].Choices[2]);
   $('.answer-d').text(state.questions[currentQuestion].Choices[3]);
   $('.current-question').text(currentQuestion + 1);
   $('.correct-answer').text(correctQuestion);
   $('.current-question-footer').text(currentQuestion);
}

function finalDisplay (state) {
   $('.multiple-choice').addClass('hidden');
   $('.questions-answers').addClass('hidden');
   $('.overall-score-screen').removeClass('hidden');
   $('.correct-answer').text(correctQuestion);
   $('.current-question-footer').text(currentQuestion + 1);
}

function resetDisplay (state) {
  $('.multiple-choice').removeClass('hidden');
  $('.questions-answers').removeClass('hidden');
  $('.overall-score-screen').addClass('hidden');
}


function initializeEventListeners() {

  $('.start-quiz').click(function() {
    $('.home-screen').addClass('hidden');
    $('.multiple-choice').removeClass('hidden');
    $('.questions-answers').removeClass('hidden');
    initialDisplay(state);
  });
  $('.multiple-choice').on('click', '.top-left-button', function (){
    choice = 0;
    state.correctAnswer(choice);

  });

  $('.multiple-choice').on('click', '.bottom-left-button', function (){
    choice = 1;
    state.correctAnswer(choice);
  });

  $('.multiple-choice').on('click', '.bottom-right-button', function (){
    choice = 2;
    state.correctAnswer(choice);
  });

  $('.multiple-choice').on('click', '.top-right-button', function (){
    choice = 3;
    state.correctAnswer(choice);
  });

  $('.replay-quiz').click(function () {
     currentQuestion = 0;
     correctQuestion = 0;
     resetDisplay(state);
     initialDisplay(state);
  })


}

$(function() {
  initializeEventListeners();
  // console.log(correctAnswer(state));

});
