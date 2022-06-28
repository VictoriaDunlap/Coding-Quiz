var container = document.querySelector(".container")
var questionContainer = document.getElementById("questionContainer")

var answerBtn = document.getElementById("answerBtn")
var btnGrid = document.querySelector("btnGrid")
var btn = document.querySelector("btn")
var controls = document.querySelector("controls")
// var nextBtn = document.getElementById("nextBtn")
var timerElem = document.querySelector("timerElem")

// question.hidden();

function hideQuestion() {
    var question = document.getElementById("question");
    if (question.style.display === "none") {
        question.style.display = "block";
    } else {
        question.style.display = "none";
    }
  }

var questionToAnswer = [ // object to circulate through q's/a's
    {
        id: 'What are the desired results in a program?',
        answers: {
            filler: "output, input, function, display",   
        },
        correctAnswer: "output", // if it matches the chosen answer, then you move forward 
    }
]


function startQuiz() { // starts quiz 
    var startBtn = document.getElementById("startBtn"); // var that grabs the id 
    startBtn.addEventListener('click', (event) => { // event for onclick to start quiz
        var usersAnswer = document.querySelectorAll('btn'); // var that grabs whatever btn the user chooses
        console.log(startBtn, usersAnswer);

        // i think i need a function that brings in the object and sifts through the answer that is chosen to compare to the correct answer
        // if answer chosen is correct it moves to another question and the page logs a point 
        // if answer chosen is wrong it moves to another question and subtracts 15 seconds from the timer 
    }
    )
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