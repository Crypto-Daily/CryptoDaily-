const questions = [
  {
    question: "What does 'Forex' stand for?",
    options: ["Foreign Exchange", "Forward Exit", "Financial Exercise", "For Example"],
    correct: 0
  },
  {
    question: "What is a pip?",
    options: ["A currency pair", "A type of trade", "Smallest price move", "A chart pattern"],
    correct: 2
  },
    {
    question: "What is a pip?",
    options: ["A currency pair", "A type of trade", "Smallest price move", "A chart pattern"],
    correct: 2
  },
  {
    question: "Which pair is most traded?",
    options: ["GBP/JPY", "EUR/USD", "USD/CHF", "AUD/NZD"],
    correct: 1
  },
  {
    question: "What is leverage in forex?",
    options: ["A trading robot", "Borrowed capital", "A type of indicator", "A profit method"],
    correct: 3
  }
  
  
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;

  const answersList = document.getElementById("answers");
  answersList.innerHTML = "";

  q.options.forEach((option, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="answer" value="${i}"> ${option}</label>`;
    answersList.appendChild(li);
  });
}

function nextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Please choose an answer!");
    return;
  }

  const answer = parseInt(selected.value);
  if (answer === questions[current].correct) {
    score++;
  }

  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `${score} / ${questions.length}`;
  }
}

function restartQuiz() {
  current = 0;
  score = 0;
  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("result").style.display = "none";
  loadQuestion();
}

window.onload = loadQuestion;

const questions = [
  {
    question: "What does 'Forex' stand for?",
    answers: ["Foreign Exchange", "For Example", "Forward Exit", "Financial Extra"],
    correct: 0
  },
  {
    question: "What is a pip in forex?",
    answers: ["A trading robot", "Smallest price move", "Big investment", "Profit unit"],
    correct: 1
  },
  {
    question: "Which pair is most traded?",
    answers: ["USD/JPY", "EUR/GBP", "EUR/USD", "AUD/USD"],
    correct: 2
  },
  {
    question: "Which pair is most traded?",
    answers: ["USD/JPY", "EUR/GBP", "EUR/USD", "AUD/USD"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const answersList = document.getElementById("answers");
  answersList.innerHTML = "";
  
  q.answers.forEach((answer, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="answer" value="${i}"> ${answer}</label>`;
    answersList.appendChild(li);
  });
}

function nextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Please choose an answer.");
    return;
  }

  const answerIndex = parseInt(selected.value);
  if (answerIndex === questions[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  score = 0;
  currentQuestion = 0;
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";
  loadQuestion();
}

// Start quiz on page load
window.onload = loadQuestion;
function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btn = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    dots.style.display = "none";
    btn.textContent = "Read less";
  } else {
    moreText.style.display = "none";
    dots.style.display = "inline";
    btn.textContent = "Read more";
  }
}