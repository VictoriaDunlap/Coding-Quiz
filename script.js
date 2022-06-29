var container = document.querySelector(".container")
var questionContainer = document.getElementById("questionContainer")
var startBtn = document.getElementById("startBtn");
var answerBtns = document.getElementById("answerBtn")
var btnGrid = document.querySelector("btnGrid")
var btn = document.querySelector("btn")
var controls = document.querySelector("controls")
// var nextBtn = document.getElementById("nextBtn")
var timerElem = document.querySelector("timerElem")
var questionId = document.getElementById("question")
// question.hidden();

var shuffledQuestions, currentQuestionIndex

var questionToAnswer = [ // array to circulate through q's/a's
    {
        questiion: 'What are the desired results in a program?',
        answers: [
            {text: 'output', correct:true},
            {text: 'input', correct:false},
            {text: 'display', correct:false},
            {text: 'function', correct:false}
        ],
        // correctAnswer: "output", // if it matches the chosen answer, then you move forward 
    }
]

// function hideQuestion() {
//     // var question = document.getElementById("question");
//     if (questionToAnswer.style.display === "none") {
//         questionToAnswer.style.display = "block";
//     } else {
//         questionToAnswer.style.display = "none";
//     }
// }

//   hideQuestion(questionToAnswer);


startBtn.addEventListener('click', startQuiz);

function startQuiz() { // starts quiz 
    startBtn.classList.add('hide');
    shuffledQuestions = questionToAnswer.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
    // var startBtn = document.getElementById("startBtn"); // var that grabs the id 
    // startBtn.addEventListener('click', (event) => { // event for onclick to start quiz
    //     var usersAnswer = document.querySelectorAll('btn'); // var that grabs whatever btn the user chooses
    //     console.log(startBtn, usersAnswer);
        console.log("Started");
        // i think i need a function that brings in the object and sifts through the answer that is chosen to compare to the correct answer
        // if answer chosen is correct it moves to another question and the page logs a point 
        // if answer chosen is wrong it moves to another question and subtracts 15 seconds from the timer 
    }
//     )
// }

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(questionToAnswer) {
    questionId.innerText = questionToAnswer.questionToAnswer
}

function selectAnswer(){

}

function timer() { // timer element function 
    var secondsLeft = 75;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerElem.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    })
}

function sendMessage() { // message that has people add initials and send them to the scoreboard
    timerElem.textContent = "Nice! please enter your initials below to see the score board.";
    input.setAttribute("type", "text");
    document.body.appendChild(input);
}

// Commonly used data types DO NOT include... strings, booleans, alerts, numbers
// The condition of an if/else statement is enclosed within... quotes, curly brackets, parantheses, square brackets
// Arrays in Javascript can be used to store... numbers and strings, other arrays, booleans, all of the above
// String values must be enclosed within ____ when being assigned to variables. commas, curly brackets, quotes, parantheses
// A very useful tool during development and debugging printing content to the debugger... Javascript, Terminal, onsole log, for loops  