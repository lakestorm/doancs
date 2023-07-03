// dethi.js

// Mảng chứa các câu hỏi
var questions = [
  {
    question: 'Cơ quan nào sau đây của thực vật sống trên cạn có chức năng hút nước từ đất?',
    answers: ["A. Rễ.", "B. Thân", "C. Hoa", "D. Lá"],
    correctAnswerIndex: 0,
    difficulty: "Dễ"
  },
  {
    question: "Động vật nào sau đây hô hấp bằng mang?",
    answers: ["A. Thằn lằn", "B. Ếch đồng", "C. Cá chép", "D. Sư tử"],
    correctAnswerIndex: 2,
    difficulty: "Dễ"
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswerIndex: 2,
    difficulty: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswerIndex: 2,
    difficulty: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswerIndex: 2,
    difficulty: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correctAnswerIndex: 2,
    difficulty: ""
  },
];

// Biến chỉ mục câu hỏi hiện tại
var currentQuestionIndex = 0;

// Hiển thị câu hỏi và các đáp án tương ứng
function showQuestion() {
  var questionContainer = document.getElementById("question");
  var question = questions[currentQuestionIndex];
  
  var questionHTML = `
    <div class="question" id="question${currentQuestionIndex + 1}">
      <h3>Câu ${currentQuestionIndex + 1}: (Độ khó: ${question.difficulty})</h3>
      <p class="title">${question.question}</p>
      ${generateAnswerOptions(question.answers)}
      <input type="button" value="XEM KẾT QUẢ" onclick="checkAnswer('question${currentQuestionIndex + 1}', ${question.correctAnswerIndex})" class="check">
      <p id="result${currentQuestionIndex + 1}"></p>
    </div>
  `;
  
  questionContainer.innerHTML = questionHTML;
}

// Tạo các lựa chọn đáp án
function generateAnswerOptions(answers) {
  var optionsHTML = "";
  for (var i = 0; i < answers.length; i++) {
    optionsHTML += `
      <input type="radio" name="question${currentQuestionIndex + 1}" value="${answers[i]}"> ${answers[i]}<br>
    `;
  }
  return optionsHTML;
}

// Kiểm tra đáp án và hiển thị kết quả
function checkAnswer(questionId, correctAnswerIndex) {
  var selectedOption = document.querySelector(`input[name=${questionId}]:checked`);
  var resultElement = document.getElementById(`result${questionId.slice(-1)}`);
  
  if (selectedOption && selectedOption.value === questions[currentQuestionIndex].answers[correctAnswerIndex]) {
    resultElement.textContent = "Đáp án đúng!";
  } else {
    resultElement.textContent = "Đáp án sai!";
  }
}

// Chuyển đến câu hỏi trước
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

// Chuyển đến câu hỏi tiếp theo
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
}

// Gọi hàm showQuestion để hiển thị câu hỏi ban đầu
showQuestion();
