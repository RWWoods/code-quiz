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
var index = -1;
var questions = document.getElementById("initialText").textContent;

var option1 = answerButtons.children[0].textContent;
var option2 = answerButtons.children[1].textContent;
var option3 = answerButtons.children[2].textContent;
var option4 = answerButtons.children[3].textContent;
var question1 = "Question One"
var question2 = "Question Two"
var question3 = "Question Three"
var question4 = "Question Four"
var questionArray = [question1, question2, question3, question4]
var answerArray = document.getElementsByClassName("list-group-item");
questions.innerHTML = questionArray[0];
var answer1 = document.getElementById("answer1").textContent;
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var optionsArray = [answer1, answer2, answer3, answer4]
var answerQ1 = ["option1", "option2", "option3", "option4"]
var answerQ2 = ["red", "blue", "green", "grey"]
var answerQ3 = ["dog", "cat", "pig", "cow"]
var answerQ4 = ["Joe", "Bob", "Dave", "Bill"]
var answerArray = [answerQ1, answerQ2, answerQ3, answerQ4]

console.log(answer1);


startButton.addEventListener("click", startQuiz);
answerButtons.addEventListener("click", nextQuestion);
function nextQuestion() {
++index;
    if (index >= questionArray.length) {
        alert("all questions are done!");       
    } else {
        document.getElementById("initialText").innerHTML = questionArray[index]

    }
console.log("hello");

}

function startQuiz() {
    console.log("hello");
    event.preventDefault;
}
    
console.log(optionsArray);
console.log(answerArray);