var currentQuestion = 1;
var totalQuestions = document.querySelectorAll('.question').length;

var previousBtn = document.getElementById('previousBtn');
var nextBtn = document.getElementById('nextBtn');

function showQuestion(questionNumber) {
  var questions = document.getElementById('questions');
  
  for (var i = 0; i < totalQuestions; i++) {
    var question = document.getElementById('question' + (i + 1));
    
    if (i + 1 === questionNumber) {
      question.style.display = 'block';
    } else {
      question.style.display = 'none';
    }
  }
  
  currentQuestion = parseInt(questionNumber);
  updateButtons();
  clearResults();
}

function previousQuestion() {
  if (currentQuestion > 1) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}

function nextQuestion() {
  if (currentQuestion < totalQuestions) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
}

function checkAnswer(question, correctAnswer) {
  var selectedAnswer = document.querySelector('input[name="' + question + '"]:checked').value;
  var resultElement = document.getElementById('result' + question.slice(-1));
  
  if (selectedAnswer === correctAnswer) {
    resultElement.innerHTML = "ĐÚNG!";
    resultElement.className = "correct";
  } else {
    resultElement.innerHTML = "SAI!";
    resultElement.className = "incorrect";
  }
}

function clearResults() {
  for (var i = 0; i < totalQuestions; i++) {
    var result = document.getElementById('result' + (i + 1));
    result.innerHTML = '';
    result.className = '';
  }
}

function updateButtons() {
  previousBtn.disabled = (currentQuestion === 1);
  nextBtn.disabled = (currentQuestion === totalQuestions);
}

showQuestion(currentQuestion);