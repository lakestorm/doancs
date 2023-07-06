//sinh_de2.js
// Mảng chứa các câu hỏi
var questions = [
    //1
    {
      question: 'Cho số phức <math><mi>z</mi><mo>=</mo><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi></math> với a,b là các số thực bất kỳ. Mệnh đề nào sau đây đúng?',
      answers: ['A. <math><mi>z</mi><mo>&#x2212;</mo><mover><mi>z</mi><mo>&#x2212;</mo></mover></math> không phải là số thực', 'B. Phần ảo của <math><mi>z</mi></math> là <math><mi>bi</mi></math>', 'C. Môđun của <math><msup><mi>z</mi><mn>2</mn></msup></math> là <math><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></math>', 'D. Số z và <math><mover><mi>z</mi><mo>&#x2212;</mo></mover></math> có môđun khác nhau'],
      correctAnswerIndex: 3,
      difficulty: "Dễ"
    },
    //2
    {
      question: "Giả sử <math><mi>F</mi><mi> </mi><mo>(</mo><mi> </mi><mi>x</mi><mi> </mi><mo>)</mo><mi> </mi></math> là một nguyên hàm của hàm số <math><mi>f</mi><mi> </mi><mo>(</mo><mi> </mi><mi>x</mi><mi> </mi><mo>)</mo><mi> </mi><mo>=</mo><mi> </mi><mfrac><mn>1</mn><mrow><mn>3</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac></math> trên khoảng (<math><mfenced><mrow><mo>&#x2212;</mo><mi>&#x221e;</mi><mi>;</mi><mo>-</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></mfenced></math>. Mệnh đề nào sau đây )",
      answers: ["A. <math><mi>F</mi><mi> </mi><mo>(</mo><mi> </mi><mi>x</mi><mi> </mi><mo>)</mo><mi> </mi><mo>=</mo><mi> </mi><mi>l</mi><mi>n</mi><mi> </mi><mo>(</mo><mi> </mi><mo>&#x2212;</mo><mi> </mi><mn>3</mn><mi> </mi><mi>x</mi><mi> </mi><mo>&#x2212;</mo><mi> </mi><mn>1</mn><mi> </mi><mo>)</mo><mi> </mi><mo>+</mo><mi> </mi><mi>C</mi><mi> </mi></math>", "B. <math><mi> </mi><mi> </mi><mi>F</mi><mi> </mi><mo>(</mo><mi> </mi><mi>x</mi><mi> </mi><mo>)</mo><mi> </mi><mo>=</mo><mi> </mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mi> </mi><mi>l</mi><mi>n</mi><mi> </mi><mo>(</mo><mi> </mi><mn>3</mn><mi> </mi><mi>x</mi><mi> </mi><mo>+</mo><mi> </mi><mn>1</mn><mi> </mi><mo>)</mo><mi> </mi><mo>+</mo><mi> </mi><mi>C</mi><mi> </mi></math>", "C. <math><mi> </mi><mi> </mi><mi>F</mi><mi> </mi><mo>(</mo><mi> </mi><mi>x</mi><mi> </mi><mo>)</mo><mi> </mi><mo>=</mo><mi> </mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mi> </mi><mi>l</mi><mi>n</mi><mi> </mi><mo>(</mo><mi> </mi><mo>-</mo><mn>3</mn><mi> </mi><mi>x</mi><mi> </mi><mo>-</mo><mi> </mi><mn>1</mn><mi> </mi><mo>)</mo><mi> </mi><mo>+</mo><mi> </mi><mi>C</mi><mi> </mi></math>", "D. <math><mi> </mi><mi> </mi><mi>F</mi><mi> </mi><mo>(</mo><mi> </mi><mi>x</mi><mi> </mi><mo>)</mo><mi> </mi><mo>=</mo><mi> </mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mi> </mi><mi>l</mi><mi>n</mi><mi> </mi><mo>(</mo><mi> </mi><mn>3</mn><mi> </mi><mi>x</mi><mi> </mi><mo>+</mo><mi> </mi><mn>1</mn><mi> </mi><mo>)</mo><mi> </mi><mo>+</mo><mi> </mi><mi>C</mi><mi> </mi></math>"],
      correctAnswerIndex: 1,
      difficulty: "Rất Khó"
    },
    //3
    {
      question: "Phân tử nào sau đây được dùng làm khuôn cho quá trình dịch mã?",
      answers: ["A. ADN", "B. tARN", "C. mARN", "D. Protein"],
      correctAnswerIndex: 2,
      difficulty: "Trung bình"
    },
    //4
    {
      question: "Một loài thực vật, xét 2 cặp NST kí hiệu là D, d và E, e. Cơ thể có bộ NST nào sau đây là thể một?",
      answers: ["A. DEE", "B. DDdEe", "C. Ddeee", "D. DdEe"],
      correctAnswerIndex: 0,
      difficulty: "Trung bình"
    },
    //5
    {
      question: "Dạng đột biến nào sau đây làm thay đổi trình tự phân bố các gen nhưng không làm thay đổi chiều dài của NST?",
      answers: ["A. Đảo đoạn NST", "B. Mất đoạn NST", "C. Thêm 1 cặp nucleotit", "D. Mất 1 cặp nucleotit"],
      correctAnswerIndex: 0,
      difficulty: "Dễ"
    },
    //6
    {
      question: "Ở tế bào động vật, bào quan nào sau đây chứa gen di truyền theo dòng mẹ?",
      answers: ["A. Ti thể", "B. Riboxom", "C. Không bào", "D. Lưới nội chất"],
      correctAnswerIndex: 0,
      difficulty: "Trung bình"
    },
    //7
    {
      question: "Cho biết alen B quy định thân cao trội hoàn toàn so với alen b quy định thân thấp. Theo lí thuyết, phép lai nào sau đây cho đời con có tỉ lệ kiểu hình 3:1?",
      answers: ["A. Bb x Bb", "B. Bb x bb", "C. BB x Bb", "D. BB x bb"],
      correctAnswerIndex: 0,
      difficulty: "Dễ"
    },
    //8
    {
      question: "Cơ thể có kiểu gen nào sau đây gọi là thể dị hợp 2 cặp gen?",
      answers: ["A. aaBb", "B. AaBb", "C. Aabb", "D. AAbb"],
      correctAnswerIndex: 1,
      difficulty: "Dễ"
    },
    //9
    {
      question: "Một loài thực vật có 12 nhóm gen liên kết. Theo lí thuyết, bộ NST lưỡng bội của loài này là: ",
      answers: ["A. 2n = 12", "B. 2n = 24", "C. 2n = 36", "D. 2n = 6"],
      correctAnswerIndex: 1,
      difficulty: "Dễ"
    },
    //10
    {
      question: "Theo lí thuyết, quá trình giảm phân ở cơ thể có kiểu gen nào sau đây tạo ra giao tử ab?",
      answers: ["A. AaBB", "B. Aabb", "C. AAbb", "D. aaBB"],
      correctAnswerIndex: 1,
      difficulty: "Dễ"
    }
  ];
  
  
  
  // Biến chỉ mục câu hỏi hiện tại
  var currentQuestionIndex = 0;
  
  // Hiển thị thông tin câu hỏi, số lượng câu hỏi và nút chuyển câu hỏi
  function showQuestion() {
    var questionContainer = document.getElementById("question-container");
    var question = questions[currentQuestionIndex];
    var totalQuestions = questions.length;
  
    var questionHTML = `
      <div class="question" id="question-${currentQuestionIndex + 1}">
        <h3>Câu ${currentQuestionIndex + 1}/${totalQuestions} (Độ khó: ${question.difficulty})</h3>
        <p class="title">${question.question}</p>
        ${generateAnswerOptions(question.answers)}
        <input type="button" value="XEM KẾT QUẢ" onclick="checkAnswer(${currentQuestionIndex + 1}, ${question.correctAnswerIndex})" class="check">
        <p id="result-${currentQuestionIndex + 1}"></p>
      </div>
      <div class="question-navigation"> 
        ${generateQuestionButtons(totalQuestions)}
      </div>
    `;
  
    questionContainer.innerHTML = questionHTML;
  }
  
  // Tạo các lựa chọn đáp án
  function generateAnswerOptions(answers) {
    var optionsHTML = "";
    for (var i = 0; i < answers.length; i++) {
      optionsHTML += `
        <input type="radio" name="question-${currentQuestionIndex + 1}" value="${answers[i]}"> ${answers[i]}<br>
      `;
    }
    return optionsHTML;
  }
  
  // Tạo các nút câu hỏi
  function generateQuestionButtons(totalQuestions) {
    var buttonsHTML = "";
    for (var i = 0; i < totalQuestions; i++) {
      buttonsHTML += `
        <button class="ttcau" onclick="goToQuestionIndex(${i})" ${currentQuestionIndex === i ? 'class="active"' : ''}>${i + 1}</button>
      `;
    }
    return buttonsHTML;
  }
  
  // Kiểm tra đáp án và hiển thị kết quả
  function checkAnswer(questionIndex, correctAnswerIndex) {
    var selectedOption = document.querySelector(`input[name=question-${questionIndex}]:checked`);
    var resultElement = document.getElementById(`result-${questionIndex}`);
  
    if (selectedOption && selectedOption.value === questions[questionIndex - 1].answers[correctAnswerIndex]) {
      resultElement.textContent = "Đáp án đúng!";
      resultElement.classList.remove('wrong-answer');
      resultElement.classList.add('correct-answer');
    } else {
      resultElement.textContent = "Đáp án sai!";
      resultElement.classList.remove('correct-answer');
      resultElement.classList.add('wrong-answer');
    }
  }
  
  // Chuyển đến câu hỏi trước đó
  function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion();
    }
  }
  
  // Chuyển đến câu hỏi tiếp theo
  function goToNextQuestion() {
    var totalQuestions = questions.length;
    if (currentQuestionIndex < totalQuestions - 1) {
      currentQuestionIndex++;
      showQuestion();
    }
  }
  
  // Chuyển đến câu hỏi theo chỉ mục
  function goToQuestionIndex(index) {
    if (index >= 0 && index < questions.length) {
      currentQuestionIndex = index;
      showQuestion();
    }
  }
  
  // Chuyển đến câu hỏi cụ thể
  function goToQuestion() {
    var gotoQuestionInput = document.getElementById("goto-question-input");
    var questionNumber = parseInt(gotoQuestionInput.value);
    if (!isNaN(questionNumber) && questionNumber >= 1 && questionNumber <= questions.length) {
      currentQuestionIndex = questionNumber - 1;
      showQuestion();
    }
  }
  
  // Gọi hàm showQuestion để hiển thị câu hỏi ban đầu
  showQuestion();