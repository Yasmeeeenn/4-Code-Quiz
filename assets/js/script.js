var timeEl = document.querySelector("#timer");
var secondsLeft = 60
//sets timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent =  "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        endOfQuiz();
      }
    }, 1000);
    //displays first question on start
    var firstQuestion = document.querySelector("#q1");
    firstQuestion.style.display = 'block';
    var startSignal = document.querySelector("#start");
    startSignal.style.display = "none";

  };



//list of questions
var questions = [
  {
    question: "Commonly used data types DO NOT include: ",
    answer: "alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed within ____. ",
    answer: "parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answer: "allAbove"
  },
  {
    queston: "String values must be enclosed within ____ when being assigned to variables. ",
    answer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answer: "consoleLog"
  }
];


var corrIncrrEl = document.querySelector("#corrIncrr");
var currentQuestion = 0;
var score = 0;

function checkAnswer(){
  var userAnswer = document.querySelector('input[name="q' + (currentQuestion + 1) + '"]:checked').value;
  if (userAnswer === questions[currentQuestion].answer) {
    score++; // Increase score if answer is correct
    corrIncrrEl.textContent = "Correct";
    displayScore();
  } else {
    secondsLeft -= 10; // Subtract time if answer is wrong
    corrIncrrEl.textContent = "Incorrect";
   
  }
  currentQuestion++; // Go to the next question
  if (currentQuestion < questions.length) {
    //Display the next question
    displayQuestion();
  } else {
    endOfQuiz();
  }
}
//displays next question
function displayQuestion() {
  var questionEl = document.getElementById("q" + (currentQuestion + 1));
  questionEl.style.display = "block";
  var questionElPrev = document.getElementById("q" + (currentQuestion - 1));
  questionElPrev.style.display= "none";
}
//displays the score
function displayScore() {
  var resultEl = document.getElementById("score");
  resultEl.innerHTML = "Your score is: " + score;
}
//removes all questions from display
function endOfQuiz(){
  var questionElAll = document.querySelectorAll(".question");
  questionElAll.forEach(questionElAll =>{
    questionElAll.style.display = "none"
  });
  var quizComplete = document.querySelector("#quizComplete");
  quizComplete.style.display = "block";
  displayScore();// this isnt working 
}


