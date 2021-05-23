var startBtn = document.querySelector("#startbtn");
var countTimer = document.querySelector("#timer");
var heading = document.querySelector(".heading");
var timer = document.querySelector(".timer-bar");
var quiz = document.querySelector("#questions");
var qTitle = document.querySelector("#questionTitle");
var qAnswers = document.querySelector("#answers");
var leaderboard = document.querySelector("#leaderboard");
var highScore = 0;
var hidden = document.querySelector(".hide");
var questionIndex = 0;
var seconds = 60;
var timeInterval;

var questions = [
  
  {
    Q: " Which of the following is an advantage of using JavaScript?",
    A: [" Less server interaction", " Increased interactivity", "Immediate feedback to the visitors" , "All the above"],
    correctAnswer: "All the above",
  },

  {
    Q: "A list of strings or objects in JavaScript is called a(n)...",
    A: ["toUpperCase()", "toUpper()", "changeCase(case)", "None of the above."],
    correctAnswer: "toUpperCase",
  },
  
  {
    Q:
      "Which of the following function of Array object calls a function for each element in the array?",
    A: ["concat()", "every()", "forEach()", "filter()"],
    correctAnswer: "forEach()",
  },
  
  {
    Q: "Which of the following function of Array object represents the source code of an object?",
    A: ["splice()", " toSource()"],
    correctAnswer: " toSource()",
  },
];
startBtn.addEventListener("click", startQuiz);
function startQuiz() {
  heading.style.display = "none";
  timer.style.display = "block";
  quiz.style.display = "block";
  startTimer();
  renderQuestion();
}
function renderQuestion() {
  var currentQuestion = questions[questionIndex];
  qTitle.textContent = currentQuestion.Q;
  qAnswers.innerHTML = "";
  for (var i = 0; i < currentQuestion.A.length; i++) {
    var answer = currentQuestion.A[i];
    var btn = document.createElement("button");
    btn.textContent = answer;
    qAnswers.append(btn);
  }
}
qAnswers.addEventListener("click", function (e) {
  var currentQuestion = questions[questionIndex];
  if (!e.target.matches("button")) return;
  var val = e.target.textContent;
  if (currentQuestion.correctAnswer === val) {
    seconds += 5;
  }
  else {
    seconds -= 15;
  }
  questionIndex++;
  if (questionIndex === questions.length) {
    endGame();
  } else {
    renderQuestion();
  }
});
function startTimer() {
  timeInterval = setInterval(function () {
    if (seconds > 1) {
      countTimer.textContent = seconds + " seconds remaining";
      seconds--;
    } else if (seconds === 1) {
      countTimer.textContent = seconds + " second remaining";
      seconds--;
    } else {
      countTimer.textContent = "";
      endGame();
    }
  }, 1000);
}
function endGame() {
   
}

//local storage 
