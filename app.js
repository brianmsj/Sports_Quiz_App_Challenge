// We want to create a quiz, with 10 questions. Each question will have 4 multiple choice answers.
// If we use the state programming message.


//create our state object. We will not have any text inputs to this quiz, so we will initially place the objects of the questions and answers in the state object.

var questionObjects = [

  {
    question: "How many players on a basketball roster?",
    Choices: ['5', '7', '12', '10'],
    answer: 2,
  },
]

// create z-index answer box when a player answers a question.

var currentQuestion = 0;

var state = {
  questions: questionObjects,

  correctAnswer: function(choice) {
    var question = state.questions[0].Choices;

    if (question[choice] === question[state.questions[0].answer]) {
      alert('You got it right');
    } else {
      alert('you got it wrong');
    }
    currentQuestion += 1;

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
   $('.question').text(state.questions[0].question);
   $('.answer-a').text(state.questions[0].Choices[0]);
   $('.answer-b').text(state.questions[0].Choices[1]);
   $('.answer-c').text(state.questions[0].Choices[2]);
   $('.answer-d').text(state.questions[0].Choices[3]);
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

}

$(function() {
  initializeEventListeners();
  // console.log(correctAnswer(state));

});
