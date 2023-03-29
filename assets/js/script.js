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
var answerButtons = document.getElementById("answers");
var isCorrect = document.getElementById("yesNo");
var index = -1;
var questions = document.getElementById("initialText").textContent;
var question1 = "Question One"
var question2 = "Question Two"
var question3 = "Question Three"
var question4 = "Question Four"
var questionArray = [question1, question2, question3, question4]
var answerQ1 = ["option1", "red", "dog", "Joe"]
var answerQ2 = ["option2", "blue", "cat", "Bob"]
var answerQ3 = ["option3", "green", "pig", "Dave"]
var answerQ4 = ["option4", "grey", "cow", "Bill"]
var timerEl = document.getElementById("top");
var timeLeft = 60;






startButton.addEventListener("click", startQuiz);
answerButtons.addEventListener("click", nextQuestion);
answerButtons.setAttribute("class", "visually-hidden");
isCorrect.setAttribute("class", "visually-hidden");


function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            answerButtons.setAttribute("class", "visually-hidden")
            
        }
    }, 1000);
}


function nextQuestion() {

    ++index;
    if (index >= questionArray.length) {
        alert("all questions are done!");
    } else {
        document.getElementById("initialText").innerHTML = questionArray[index]
        document.getElementById("answer1").innerHTML = answerQ1[index]
        document.getElementById("answer2").innerHTML = answerQ2[index]
        document.getElementById("answer3").innerHTML = answerQ3[index]
        document.getElementById("answer4").innerHTML = answerQ4[index]
    }
    console.log("hello");

}

function startQuiz(event) {
    event.preventDefault();
    answerButtons.removeAttribute("class", "visually-hidden");
    startButton.setAttribute("class", "visually-hidden")
    nextQuestion()
    countdown();
}
