// We want to create a quiz, with 10 questions. Each question will have 4 multiple choice answers.
// If we use the state programming message.


//create our state object. We will not have any text inputs to this quiz, so we will initially place the objects of the questions and answers in the state object.

var questionObjects = [

  { 
    question: "How many players on a basketball roster?",
    Choices: ['5', '7', '12', '10'],
    answer: "12",
  },
]



var state = {
  questions: questionObjects,
}





function initializeEventListeners() {

  $('.start-quiz').click(function() {
    $('.home-screen').addClass('hidden');
    $('.multiple-choice').removeClass('hidden');
  });

}

$(function() {
  initializeEventListeners();

});