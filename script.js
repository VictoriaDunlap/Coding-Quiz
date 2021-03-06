var container = document.querySelector(".container")
var questionContainer = document.getElementById("questionContainer")
var startBtn = document.getElementById("startBtn");
var answerBtns = document.getElementById("answerBtn")
var btnGrid = document.querySelector("btnGrid")
var btn = document.querySelector("btn")
var controls = document.querySelector("controls")
// var nextBtn = document.getElementById("nextBtn")
var timerElem = document.querySelector("#timerElem")
var questionId = document.getElementById("question")
var scores = document.getElementById("scores")
// question.hidden();

// var shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startQuiz);

function startQuiz() { // starts quiz 
    startBtn.classList.add('hide');
    shuffledQuestions = questionToAnswer.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
    timer();
    console.log("Started");
}

var questionToAnswer = [ // array to circulate through q's/a's
    {
        question: 'What are the desired results in a program?',
        answers: [
            {text: 'output', correct:true},
            {text: 'input', correct:false},
            {text: 'display', correct:false},
            {text: 'function', correct:false}
        ],
    }
]

function setNextQuestion() { // sets next question  
    reset()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) { // shows question based on correct answer or not 
    questionId.innerText = question.question
    question.answers.forEach(answers => {
        var button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtns.appendChild(button)
    })

}

function reset() {
   while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild)
   }
}

function selectAnswer(event){
    var selectedbtn = event.target
    var correct = selectedbtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtns.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.add('correct')
    } else {
        element.add('wrong')
    }
}

function clearStatusClass(element) {
    element.remove('correct')
    element.remove('wrong')
}

function timer() { // timer element function 
    var spanTimer = document.createElement('span')
    var secondsLeft = 75;
    setInterval(function() {
        secondsLeft--;
        spanTimer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval();
            sendMessage();
        }
        timerElem.appendChild(spanTimer)
    }, 1000)

}

function sendMessage() { // message that has people add initials and send them to the scoreboard
    questionContainer.textContent = "Nice! please enter your initials below to see the score board.";
    input.setAttribute("type", "text");
    document.body.appendChild(input);
    questionContainer.appendChild(scores);
    
}

// Commonly used data types DO NOT include... strings, booleans, alerts, numbers
// The condition of an if/else statement is enclosed within... quotes, curly brackets, parantheses, square brackets
// Arrays in Javascript can be used to store... numbers and strings, other arrays, booleans, all of the above
// String values must be enclosed within ____ when being assigned to variables. commas, curly brackets, quotes, parantheses
// A very useful tool during development and debugging printing content to the debugger... Javascript, Terminal, onsole log, for loops  


// function hideQuestion() {
//     // var question = document.getElementById("question");
//     if (questionToAnswer.style.display === "none") {
//         questionToAnswer.style.display = "block";
//     } else {
//         questionToAnswer.style.display = "none";
//     }
// }

//   hideQuestion(questionToAnswer);

  // var startBtn = document.getElementById("startBtn"); // var that grabs the id 
    // startBtn.addEventListener('click', (event) => { // event for onclick to start quiz
    //     var usersAnswer = document.querySelectorAll('btn'); // var that grabs whatever btn the user chooses
    //     console.log(startBtn, usersAnswer);
 
    // if answer chosen is correct it moves to another question and the page logs a point 
    // if answer chosen is wrong it moves to another question and subtracts 15 seconds from the timer 