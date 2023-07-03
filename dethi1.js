// dethi.js

// Mảng chứa các câu hỏi
var questions = [
    {
      question: '<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>+</mo><mroot><mn>123</mn><mn>3</mn></mroot></math>',
      answers: ["A. Cl<u>i</u>ck", "B. Cl<u>i</u>ck", "C. Cl<u>i</u>ck", "D. Cl<u>i</u>ck"],
      correctAnswerIndex: 1,
      difficulty: "Dễ"
    },
    {
      question: "Câu hỏi 2",
      answers: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
      correctAnswerIndex: 0,
      difficulty: "Trung bình"
    },
    // Thêm câu hỏi khác vào đây
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
  