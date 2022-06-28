var container = document.querySelector(".container")
var questionContainer = document.getElementById("questionContainer")
var question = document.getElementById("question")
var answerBtn = document.getElementById("answerBtn")
var btnGrid = document.querySelector("btnGrid")
var btn = document.querySelector("btn")
var controls = document.querySelector("controls")
var nextBtn = document.getElementById("nextBtn")


var question = [
    {
        id: 1,
        answers: {
            filler: "future string"  
        },
        correctAnswer: "correct", // if it matches the chosen answer, then you move forward 
    }
]


function startQuiz() {
    var startBtn = document.getElementById("startBtn");
    startBtn.addEventListener('click', (event) => {
        var usersAnswer = document.querySelectorAll('btn')
        console.log(startBtn, usersAnswer)
    }
    )
}