//sinh_de2.js
// Mảng chứa các câu hỏi
var questions = [
  //1
  {
    question: 'Rễ cây có thể hấp thụ nitơ ở dạng nào sau đây?',
    answers: ['A. <math><msub><mi>N</mi><mn>2</mn></msub></math>', 'B. <math><msub><mi>N</mi><mn>2</mn></msub><mi>O</mi></math>', 'C. <math ><mi>N</mi><mi>O</mi></math>', 'D. <math><mi>N</mi><msup><mi>H</mi><mrow><mo>+</mo><mn>4</mn></mrow></msup></math>'],
    correctAnswerIndex: 3,
    difficulty: "Dễ"
  },
  //2
  {
    question: "Động vật nào sau đây có tim 2 ngăn?",
    answers: ["A. Ếch đồng", "B. Cá chép", "C. Mèo", "D. Thỏ"],
    correctAnswerIndex: 1,
    difficulty: "Trung bình"
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
  },
  //11
  {
    question: "Một quần thể thực vật gồm 400 cây có kiểu gen AA, 400 cây có kiểu gen Aa và 200 cây có kiểu gen aa. Tần số kiểu gen Aa của quần thể này là",
    answers: ["A. 0,4", "B. 0,5", "C. 0,6", "D. 0,2"],
    correctAnswerIndex: 0,
    difficulty: "Trung bình"
  },
  //12
  {
    question: "Từ cây có kiểu gen aaBbDD, bằng phương pháp nuôi cấy hạt phấn trong ống nghiệm có thể tạo ra dòng cây đơn bội có kiểu gen nào sau đây?",
    answers: ["A. aBD", "B. aBd", "C. Abd", "D. ABD"],
    correctAnswerIndex: 0,
    difficulty: "Dễ"
  },
  //13
  {
    question: "Theo thuyết tiến hóa hiện đại, nhân tố nào sau đây có thể tạo ra các alen mới cho quần thể?",
    answers: ["A. Chọn lọc tự nhiên", "B. Giao phối không ngẫu nhiên", "C. Các yếu tố ngẫu nhiên", "D. Đột biến"],
    correctAnswerIndex: 3,
    difficulty: "Trung bình"
  },
  //14
  {
    question: "Theo thuyết tiến hóa hiện đại, nhân tố nào sau đây làm thay đổi tần số alen của quần thể theo hướng xác định?",
    answers: ["A. Đột biến", "B. Di - nhập gen", "C. Các yếu tố ngẫu nhiên", "D. Chọn lọc ngẫu nhiên"],
    correctAnswerIndex: 3,
    difficulty: "Trung bình"
  },
  //15
  {
    question: "Trong lịch sử phát triển của sinh giới qua các đại địa chất, thực vật có hạt xuất hiện ở đại nào?",
    answers: ["A. Đại Tân Sinh", "B. Đại trung sinh", "C. Đại cổ sinh", "D. Đại nguyên sinh"],
    correctAnswerIndex: 2,
    difficulty: "Khó"
  },
  //16
  {
    question: "Quần thể sinh vật không có đặc trưng nào sau đây?",
    answers: ["A. Thành phần loài", "B. Kích thước quần thể", "C. Mật độ cá thể", "D. Nhóm tuổi (còn gọi là cấu trúc tuổi)"],
    correctAnswerIndex: 0,
    difficulty: "Trung bình"
  },
  //17
  {
    question: "Ví dụ nào sau đây là quần thể sinh vật?",
    answers: ["A. Tập hợp voọc mông trắng ở khu bảo tồn đất ngập nước Vân Long.", "B. Tập hợp cây cỏ trên đồng cỏ.", "C. Tập hợp chim trong vườn bách thảo.", "D. Tập hợp cá trong Hồ Tây"],
    correctAnswerIndex: 0,
    difficulty: "Dễ"
  },
  //18
  {
    question: "Trong hệ sinh thái, nhóm sinh vật nào sau đây là sinh vật tự dưỡng?",
    answers: ["A. Thực vật", "B. Nấm hoại sinh", "C. Vi khuẩn phân giải", "D. Giun đất"],
    correctAnswerIndex: 0,
    difficulty: "Trung bình"
  },
  //19
  {
    question: "Sự phân tầng của thực vật trong quần xã rừng mưa nhiệt đới chủ yếu là do sự khác nhau về nhu cầu",
    answers: ["A. ánh sáng", "B. nước", "C. các nguyên tố khoáng", "D. không khí"],
    correctAnswerIndex: 0,
    difficulty: "Dễ"
  },
  //20
  {
    question: "Trong một chuỗi thức ăn mở đầu bằng sinh vật sản xuất, sinh vật nào sau đây thuộc bậc dinh dưỡng cấp 2?",
    answers: ["A. Sinh vật tiêu thụ bậc 1", "B. Sinh vật tiêu thụ bậc 2", "C. Sinh vật sản xuất", "D. Sinh vật tiêu thụ bậc 3"],
    correctAnswerIndex: 2,
    difficulty: "Dễ"
  },
  //21
  {
    question: "Ôxi được giải phóng trong quá trình quang hợp ở thực vật có nguồn gốc từ phân tử nào sau đây?",
    answers: ['A. <math><msub><mi>C</mi><mn>6</mn></msub><msub><mi>H</mi><mn>12</mn></msub><msub><mi>O</mi><mn>6</mn></msub></math>', 'B. <math><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi></math>', 'C. <math><mi>C</mi><msub><mi>O</mi><mn>2</mn></msub></math>','D. <math><msub><mi>C</mi><mn>5</mn></msub><msub><mi>H</mi><mn>10</mn></msub><msub><mi>O</mi><mn>5</mn></msub></math>'],
    correctAnswerIndex: 1,
    difficulty: "Rất Khó"
  },
  //22
  {
    question: "Thói quen nào sau đây có lợi cho người bị huyết áp cao?",
    answers: ["A. Thường xuyên tập thể dục một cách khoa học.", "B. Thường xuyên ăn thức ăn có nồng độ NaCl cao.", "C. Thường xuyên ăn thức ăn có nhiều dầu mỡ.", "D. Thường xuyên thức khuya và làm việc căng thẳng."],
    correctAnswerIndex: 0,
    difficulty: "Dễ"
  },
  //23
  {
    question: "Trong quá trình nhân đôi ADN, nuclêôtit loại A trên mạch khuôn liên kết với loại nuclêôtit nào ở môi trường nội bào?",
    answers: ["A. G", "B. T", "C. X", "D. A"],
    correctAnswerIndex: 1,
    difficulty: "Dễ"
  },
  //24
  {
    question: "Ở thực vật, thể ba mang bộ NST nào sau đây?",
    answers: ["A. 2n - 1", "B. n", "C. 2n + 1", "D. 3n"],
    correctAnswerIndex: 2,
    difficulty: "Dễ"
  },
  //25
  {
    question: "Cho biết mỗi gen quy định 1 tính trạng, các alen trội là trội hoàn toàn. Theo lí thuyết, phép lai nào sau đây cho đời con có tỉ lệ kiểu hình 1:1:1:1?",
    answers: ["A. AaBb × AaBb.", "B. Aabb × AaBb.", "C. Aabb × aaBb.", "D. AaBb × aaBb."],
    correctAnswerIndex: 2,
    difficulty: "Trung bình"
  },
  //26
  {
    question: "Hiện tượng nào sau đây chắc chắn không làm thay đổi tần số alen của 1 quần thể?",
    answers: ["A. Có sự giao phối ngẫu nhiên giữa các cá thể trong quần thể.", "B. Có sự trao đổi các cá thể giữa quần thể đang xét với 1 quần thể lân cận cùng loài.", "C. Có sự đào thải những cá thể kém thích nghi trong quần thể.", "D. Có sự tấn công của 1 loài vi sinh vật gây bệnh dẫn đến giảm kích thước quần thể."],
    correctAnswerIndex: 0,
    difficulty: "Khó"
  },
  //27
  {
    question: "Một loài cá chỉ sống được trong khoảng nhiệt độ từ 5°C đến 42°C. Đối với loài cá này, khoảng nhiệt độ từ 5°C đến 42°C được gọi là",
    answers: ["A.giới hạn sinh thái về nhiệt độ.", "B. khoảng thuận lợi.", "C. khoảng chống chịu.", "D. giới hạn dưới về nhiệt độ."],
    correctAnswerIndex: 0,
    difficulty: "Dễ"
  },
  //28
  {
    question: "Cho chuỗi thức ăn: Cây ngô → Sâu ăn lá ngô →Nhái → Rắn hổ mang → Diều hâu. Trong chuỗi thức ăn này, loài nào là sinh vật tiêu thụ bậc 3?",
    answers: ["A. Cây ngô", "B. Sâu ăn lá ngô", "C. Nhái", "D. Rắn hổ mang"],
    correctAnswerIndex: 3,
    difficulty: "Dễ"
  },
  //29
  {
    question: "Phép lai P: cây tứ bội Aaaa cây tứ bội Aaaa, thu được F1. Cho biết cây tứ bội giảm phân chỉ cho giao tử lưỡng bội có khả năng thụ tinh. Theo lí thuyết, ở F1 kiểu gen AAaa chiếm tỉ lệ",
    answers: ["A. 1/2", "B. 3/4", "C. 2/3", "D. 1/4"],
    correctAnswerIndex: 3,
    difficulty: "Khó"
  },
  //30
  {
    question: "Một loài thực vật giao phấn ngẫu nhiên, alen A bị đột biến thành alen a, alen B bị đột biến thành alen b. Cho biết mỗi gen quy định 1 tính trạng, các alen trội là trội hoàn toàn. Cơ thể có kiểu gen nào sau đây là thể đột biến?",
    answers: ["A. aaBB", "B. AaBB", "C. AABb", "D. AaBb"],
    correctAnswerIndex: 0,
    difficulty: "Rất Khó"
  },
  //31
  {
    question: "Alen M bị đột biến điểm thành alen m. Theo lí thuyết, alen M và alen m",
    answers: ["A. chắc chắn có số nuclêôtit bằng nhau.", "B. luôn có số liên kết hiđrô bằng nhau.", "C. có thể có tỉ lệ (A + T)/(G+X) bằng nhau.", "D. luôn có chiều dài bằng nhau."],
    correctAnswerIndex: 3,
    difficulty: "Rất Khó"
  },
  //32
  {
    question: 'Phép lai P : <math><mi>A</mi><mi>a</mi><mfrac><mrow><mi>B</mi><mi>D</mi></mrow><mrow><mi>b</mi><mi>d</mi></mrow></mfrac><mo>&#xd7;</mo><mi>A</mi><mi>a</mi><mfrac><mrow><mi>B</mi><mi>d</mi></mrow><mrow><mi>b</mi><mi>d</mi></mrow></mfrac></math> thu được F1 . Cho biết mỗi gen quy định 1 tính trạng, các alen trội là trội hoàn toàn và xảy ra hoán vị gen với tần số 40%. Theo lí thuyết, ở F1 số cá thể dị hợp 3 cặp gen chiếm tỉ lệ',
    answers: ["A. 37,5%", "B. 25,0%", "C. 12,5%", "D. 17,5%"],
    correctAnswerIndex: 2,
    difficulty: "Rất Khó"
  },
  //33
  {
    question: "Một loài thực vật, xét 1 gen có 3 alen: alen A quy định hoa đỏ, alen A2 quy định hoa vàng, alen A3 quy định hoa trắng. Phép lai P: cây hoa đỏ 1 cây hoa vàng, thu được F1 có 50% cây hoa đỏ : 25% cây hoa vàng : 25% cây hoa trắng. F1 giao phấn ngẫu nhiên, thu được F2. Theo lí thuyết, ở F2 số cây hoa vàng chiếm tỉ lệ",
    answers: ["A. 5/16", "B. 3/4", "C. 1/2", "D. 3/16"],
    correctAnswerIndex: 0,
    difficulty: "Rất Khó"
  },
  //34
  {
    question: "Một loài thực vật, xét 2 cặp gen (A, a và B, b), mỗi gen quy định 1 tính trạng, các alen trội là trội hoàn toàn. Phép lai P: 2 cây có kiểu hình trội về 2 tính trạng và đều dị hợp 1 cặp gen giao phấn với nhau, thu được F1 chỉ có 1 loại kiểu hình. Theo lí thuyết, ở F1 số cây có 3 alen trội chiếm tỉ lệ",
    answers: ["A. 1/2", "B. 1/4", "C. 3/4", "D. 1/8"],
    correctAnswerIndex: 0,
    difficulty: "Rất Khó"
  },
  //35
  {
    question: 'Ở ruồi giấm, mỗi gen quy định một tính trạng, các alen trội là trội hoàn toàn. Cho phép lai P: <math><mfrac><mrow><mi>A</mi><mi>b</mi></mrow><mrow><mi>a</mi><mi>B</mi></mrow></mfrac><msup><mi>X</mi><mi>D</mi></msup><msup><mi>X</mi><mi>d</mi></msup><mo>&#xd7;</mo><mfrac><mrow><mi>A</mi><mi>B</mi></mrow><mrow><mi>a</mi><mi>b</mi></mrow></mfrac><msup><mi>X</mi><mi>D</mi></msup><mi>Y</mi></math> thu được F1 có số cá thể mang kiểu hình lặn về 3 tính trạng chiếm 1,25%. Theo lí thuyết, ở F1 số cá thể có kiểu hình trội về 3 tính trạng chiếm tỉ lệ',
    answers: ["A. 37,50%", "B. 41,25%", "C. 25,00%", "D. 52,50%"],
    correctAnswerIndex: 1,
    difficulty: "Rất Khó"
  },
  //36
  {
    question: "Ở gà, màu lông do 1 gen có 2 alen quy định, alen trội là trội hoàn toàn. Phép lai P: gà trống lông đen x gà mái lông vằn, thu được F1 có tỉ lệ 1 gà trống lông vằn : 1 gà mái lông đen. F1 giao phối ngẫu nhiên, thu được F2, F2 giao phối ngẫu nhiên, thu được F3. Theo lí thuyết, trong tổng số gà trống lông vằn ở F3, số gà có kiểu gen đồng hợp chiếm tỉ lệ",
    answers: ["A. 25%", "B. 50%", "C. 20%", "D. 75%"],
    correctAnswerIndex: 2,
    difficulty: "Rất Khó"
  },
  //37
  {
    question: "Một loài thực vật có bộ NST 2n = 6. Xét 3 cặp gen (A, a; B, b và D, d) phân li độc lập. Cho các phát biểu sau: <br>I. Các thể lưỡng bội của loài này có thể có tối đa 27 loại kiểu gen.<br>II. Các thể ba của loài này có thể có các kiểu gen: AaaBbDd, AABBbDd, aaBBDdd.<br>III. Các thể tam bội phát sinh từ loài này có tối đa 125 loại kiểu gen.<br>IV. Các thể một của loài này có tối đa 108 loại kiểu gen.<br>Theo lí thuyết, có bao nhiêu phát biểu đúng trong các phát biểu trên?",
    answers: ["A. 3", "B. 4", "C. 1", "D. 2"],
    correctAnswerIndex: 3,
    difficulty: "Rất Khó"
  },
  //38
  {
    question: "Một quần thể thực vật giao phấn ngẫu nhiên, alen A quy định thân cao trội hoàn toàn so với alen a quy định thân thấp; alen B quy định hoa đỏ trội hoàn toàn so với alen b quy định hoa trắng. Thế hệ P của quần thể này có thành phần kiểu gen là 0,4 AaBb : 0,6 aaBb. Cho biết các giao tử có 2 alen lặn không có khả năng thụ tinh và quần thể không chịu tác động của các nhân tố tiến hóa khác. Theo lí thuyết, ở F1 số cây thân cao, hoa đỏ chiếm tỉ lệ",
    answers: ["A. 17/36", "B. 2/3", "C. 9/11", "D. 19/36"],
    correctAnswerIndex: 3,
    difficulty: "Rất Khó"
  },
  //39
  {
    question: "Một loài thực vật, màu hoa do 1 gen có 2 alen quy định; hình dạng quả do 2 cặp gen phân li độc lập cùng quy định. Phép lai P: hai cây giao phấn với nhau, thu được F1 có 40,5% cây hoa đỏ, quả tròn : 34,5% cây hoa đỏ, quả dài : 15,75% cây hoa trắng, quả tròn : 9,25% cây hoa trắng, quả dài. Cho biết hoán vị gen xảy ra ở cả quá trình phát sinh giao tử đực và giao tử cái với tần số bằng nhau. Theo lí thuyết, phát biểu nào sau đây sai?",
    answers: ["A. F1 có thể có 3% số cây hoa đỏ, quả dài đồng hợp 3 cặp gen", "B. F1 có tối đa 11 loại kiểu gen quy định cây hoa đỏ, quả dài.", "C. F1 có 6 loại kiểu gen quy định cây hoa trắng, quả dài.", "D. Tần số hoán vị gen có thể là 20%."],
    correctAnswerIndex: 2,
    difficulty: "Rất Khó"
  },
  //40
  {
    question: "Cho phả hệ sau: Cho biết mỗi bệnh đều do 1 trong 2 alen của 1 gen quy định; gen quy định bệnh P nằm trên NST thường; gen quy định bệnh Q nằm ở vùng không tương đồng trên NST giới tính X; người số 7 không mang alen gây bệnh P và không mang alen gây bệnh Q. Cho các phát biểu sau:<br>I. Xác định được tối đa kiểu gen của 3 người.<br>II. Người số 3 và người số 8 có thể có kiểu gen giống nhau.<br>III. Xác suất sinh con đầu lòng là con trai chỉ bị bệnh P của cặp 10 - 11 là 1/32.<br>IV. Xác suất sinh con đầu lòng không mang alen gây bệnh P và không mang alen gây bệnh Q của cặp 10 - 11 là 5/16.<br>Theo lí thuyết, có bao nhiêu phát biểu đúng trong các phát biểu trên?",
    answers: ["A. 1", "B. 3", "C. 4", "D. 2"],
    correctAnswerIndex: 2,
    difficulty: "Rất Khó"
  },
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
  } else {
    resultElement.textContent = "Đáp án sai!";
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