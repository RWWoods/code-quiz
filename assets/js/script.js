// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


var startButton = document.getElementById("startButton");
var quiz = document.getElementById("quizBox");
var answerButtons = document.getElementById("answers");
var questionNum = 0;
var choiceOptions = answerButtons.children;
var questions = document.getElementById("initialText").textContent;
var optionsArray = [answerButtons.children];
var option1 = answerButtons.children[0].textContent;
var option2 = answerButtons.children[1].textContent;
var option3 = answerButtons.children[2].textContent;
var option4 = answerButtons.children[3].textContent;
var question1 = "Question One"
var question2 = "Question Two"
var question3 = "Question Three"
var question4 = "Question Four"
var questionArray = [question1, question2, question3, question4]



startButton.addEventListener("click", startQuiz);
answerButtons.addEventListener("click", nextQuestion);
function nextQuestion() {


}

function startQuiz() {
    console.log("hello");
    event.preventDefault;
}
    
console.log(questions);

