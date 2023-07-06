//sinh_de2.js
// Mảng chứa các câu hỏi
var questions = [
    //1
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</b><br>If you have any problem, please call Ann. She'll always____________a sympathetic ear.",
      answers: ['A. bring','B. borrow', 'C. give', 'D. lend'],
      correctAnswerIndex: 3,
      difficulty: "Dễ"
    },
    //2
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</b><br>Everyone likes him,_______?",
      answers: ["A. doesn't he", "B. doesn't she", "C. don't they", "D. don't you"],
      correctAnswerIndex: 2,
      difficulty: "Trung bình"
    },
    //3
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</b><br>His brother refuses to even listen to anyone else's point of view. He is very_____.",
      answers: ["A. open-minded", "B. absent-minded", "C. narrow-minded", "D. kind-hearted"],
      correctAnswerIndex: 2,
      difficulty: "Trung bình"
    },
    //4
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</b><br>If I___________it was a formal party, I wouldn't have worn my old jeans and a jumper.",
      answers: ["A. knew", "B. could know", "C. had been knowing", "D. had known"],
      correctAnswerIndex: 3,
      difficulty: "Trung bình"
    },
    //5
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</b><br>I deeply regret______to her so severely last night. She was badly hurt.",
      answers: ["A. to speak", "B. to be speaking", "C. being spoken", "D. having spoken"],
      correctAnswerIndex: 3,
      difficulty: "Trung bình"
    },
    //6
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</b><br>Although the_________construction costs of environmentally friendly houses are very high, they are very economical in the long run.",
      answers: ["A. first", "B. introductory", "C. initial", "D. opening"],
      correctAnswerIndex: 2,
      difficulty: "Trung bình"
    },
    //7
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</b><br>Henry was a studious student. He needed no__________to work hard.",
      answers: ["A. encourage", "B. encouraged", "C. encouragement", "D. encouraging"],
      correctAnswerIndex: 2,
      difficulty: "Trung bình"
    },
    //8
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</b><br>I finally_______the cold that I had had all week.",
      answers: ["A. pass out", "B. get over", "C. come down with", "D. pull through"],
      correctAnswerIndex: 1,
      difficulty: "Trung bình"
    },
    //9
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</b><br>We________pay for the tickets as Josie won them in a competition.",
      answers: ["A. didn't have to", "B. hadn't to", "C. couldn't", "D. mustn't"],
      correctAnswerIndex: 0,
      difficulty: "Trung bình"
    },
    //10
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</b><br>They________enthusiastically when their teacher in.",
      answers: ["A. will discuss/will come", "B. will have discussed/comes", "C. were discussing/came", "D. discuss/comes"],
      correctAnswerIndex: 2,
      difficulty: "Trung bình"
    },
    //11
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</b><br>Why don't you_________these photos into your computer, because then you would have your own digital copies.",
      answers: ["A. change", "B. scan", "C. put", "D. give"],
      correctAnswerIndex: 1,
      difficulty: "Trung bình"
    },
    //12
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</b><br>The earthquake, and tsunami that followed, has killed over 1300 people, the majority of ______were in the city of Palu in Central Sulawesi, Indonesia.",
      answers: ["A. which", "B. them", "C. that", "D. whom"],
      correctAnswerIndex: 3,
      difficulty: "Trung bình"
    },
    //13
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the word whose underlined part is pronounced differently from that of the others.</b><br>",
      answers: ["A. approached", "B. supported", "C. noticed", "D. finished"],
      correctAnswerIndex: 1,
      difficulty: "Trung bình"
    },
    //14
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the word whose underlined part is pronounced differently from that of the others.</b>",
      answers: ["A. threaten", "B. through", "C. thunder", "D. them"],
      correctAnswerIndex: 3,
      difficulty: "Trung bình"
    },
    //15
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the word which is stressed differently from the rest.</b>",
      answers: ["A. prefer", "B. profile", "C. promote", "D. regret"],
      correctAnswerIndex: 1,
      difficulty: "Trung bình"
    },
    //16
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the word which is stressed differently from the rest.</b>",
      answers: ["A. assistant", "B. relevant", "C. argument", "D. attitude"],
      correctAnswerIndex: 0,
      difficulty: "Trung bình"
    },
    //17
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the underlined word or phrase in each sentence that needs correcting.</b><br><b><u>Having found</u></b> guilty <b><u>of</u></b> racketeering, the mobster <b><u>was sentenced</u></b> to <b><u>a number</u></b> of years in prison.",
      answers: ["A. Having found", "B. of", "C. was sentenced", "D. a number"],
      correctAnswerIndex: 0,
      difficulty: "Trung bình"
    },
    //18
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the underlined word or phrase in each sentence that needs correcting.</b><br><b><u>Most</u></b> people consider it women's <b><u>responsible</u></b> to take care <b><u>of</u></b> children and <b><u>do</u></b> housework.",
      answers: ["A. Most", "B. responsible", "C. of", "D. do"],
      correctAnswerIndex: 1,
      difficulty: "Trung bình"
    },
    //19
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the underlined word or phrase in each sentence that needs correcting.</b><br>They have made <b><u>a lot of </u></b>progress <b><u>until</u></b> the country <b><u>became</u></b> <b><u>independent</u></b>.",
      answers: ["A. a lot of", "B. until", "C. became", "D. independent"],
      correctAnswerIndex: 1,
      difficulty: "Trung bình"
    },
    //20
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the most suitable response to complete each of the following exchanges.</b><br>Marry and Janet are at the dancing club.<br>- Marry: “You are a great dancer. I wish I could do half as well as you.”<br>- Janet: “_______. I'm an awful dancer.”",
      answers: ["A. You're too kind.", "B. That's a nice compliment!", "C. You've got to be kidding!", "D. Oh, thank you very much"],
      correctAnswerIndex: 2,
      difficulty: "Trung bình"
    },
    //21
    {
      question: "<b>Mark the letter A, B, C or D on your answer sheet to indicate the most suitable response to complete each of the following exchanges.</b><br>Hoa and Laura are talking about their volunteer work.<br>- Hoa: “Thank you very much for helping the disadvantaged children here.”<br>- Laura: “_________.”",
      answers: ["A. That's nice of you!", "B. It's our pleasure.", "C. Sorry, we don't know.", "D. What a pity!"],
      correctAnswerIndex: 1,
      difficulty: "Trung bình"
    },
    //22
    {
      question: "<b>Mark the letter A, B, C, or D on your answer sheet to indicate the word or phrase that is OPPOSITE in meaning to the underlined part in each of the following questions.</b><br>Vietnamese have a strong sense of <b><u>hospitality</u></b> and feel embarrassed if they cannot show their guests full respect by preparing for their interval.",
      answers: ["A. difference", "B. unfriendliness", "C. generosity", "D. politeness"],
      correctAnswerIndex: 1,
      difficulty: "Trung bình"
    },
    //23
    {
      question: "<b>Mark the letter A, B, C, or D on your answer sheet to indicate the word or phrase that is OPPOSITE in meaning to the underlined part in each of the following questions.</b><br>If you <b><u>stick to your guns</u></b>, you refuse to change what you are saying or doing despite the opposition or criticism of other people.",
      answers: ["A. be changeable", "B. be persistent", "C. be inflexible", "D. be constant"],
      correctAnswerIndex: 0,
      difficulty: "Trung bình"
    },
    //24
    {
      question: "<b>Mark the letter A, B, C, or D on your answer sheet to indicate the word or phrase that is CLOSEST in meaning to the underlined part in each of the following questions.</b><br><b><u>Be careful!</u></b> The tree is going to fall.",
      answers: ["A. Look on", "B. Look up", "C. Look out", "D. Look after"],
      correctAnswerIndex: 2,
      difficulty: "Trung bình"
    },
    //25
    {
      question: "<b>Mark the letter A, B, C, or D on your answer sheet to indicate the word or phrase that is CLOSEST in meaning to the underlined part in each of the following questions.</b><br>The year 2000 can be considered as a milestone for the hearing-impaired as the Nippon Foundation<b><u> launched </u></b>a disability support project.",
      answers: ["A. send", "B. carried out", "C. began", "D. gave"],
      correctAnswerIndex: 2,
      difficulty: "Trung bình"
    },
    //26
    {
      question: "<b>Read the following passage and mark the letter A, B, C or D on your answer sheet to indicate the correct word for each of the blanks from 26 to 30</b><br>Just like any institution, a family also needs rules. Rules are very important because they keep things in (26)_______. For a family, rules are as necessary as food and clothing. The rules are very important because they remain peace and order in the family. For example, children should respect and listen to their parents.<br><br>If there are (27)________to be made, for examples, it is not only the parents who are going to decide especially if the children are already grown up. It would be better if everybody is involved in making the decision of important matter.<br><br>Rules are needed to maintain a harmonious relationship (28)___________family members.(26)_______",
      answers: ["A. need", "B. time", "C. order", "D. shape"],
      correctAnswerIndex: 2,
      difficulty: "Trung bình"
    },
    //27
    {
      question: "<b>Read the following passage and mark the letter A, B, C or D on your answer sheet to indicate the correct word for each of the blanks from 26 to 30.</b>",
      answers: ["A. ", "B. ", "C. ", "D. "],
      correctAnswerIndex: 1,
      difficulty: "Trung bình"
    },
    //28
    {
      question: "<b>Read the following passage and mark the letter A, B, C or D on your answer sheet to indicate the correct word for each of the blanks from 26 to 30.</b>Rules are needed to maintain a harmonious relationship (28)_________family members. Parents are there the pillars of the family and guide children to be responsible and practice good values. Rules teach children to become more responsible and have discipline not only at home but especially outside of the home. When there are rules to follow, children will know (29)_____they should do or should not do. Rules help to avoid conflict and misunderstanding that may lead to fights and aggression especially among children. Parents should set rules for the children to follow to avoid quarrels and fights. There are times when the children fight over simple matters and this happens if the parents do or not interfere but when parents set the rule and let the children follow, there will be (30)_____conflicts.",
      answers: ["A. in", "B. between", "C. inside", "D. among"],
      correctAnswerIndex: 3,
      difficulty: "Trung b├¼nh"
    },
    //29
    {
      question: "<b>Read the following passage and mark the letter A, B, C or D on your answer sheet to indicate the correct word for each of the blanks from 26 to 30.</b><br>Rules teach children to become more responsible and have discipline not only at home but especially outside of the home. When there are rules to follow, children will know (29)_____they should do or should not do. Rules help to avoid conflict and misunderstanding that may lead to fights and aggression especially among children. Parents should set rules for the children to follow to avoid quarrels and fights. There are times when the children fight over simple matters and this happens if the parents do or not interfere but when parents set the rule and let the children follow, there will be (30)_____conflicts.(29)_____",
      answers: ["A. which", "B. that", "C. how", "D. what"],
      correctAnswerIndex: 3,
      difficulty: "Trung b├¼nh"
    },
    //30
    {
      question: "<b>Read the following passage and mark the letter A, B, C or D on your answer sheet to indicate the correct word for each of the blanks from 26 to 30.</b><br>Rules teach children to become more responsible and have discipline not only at home but especially outside of the home. When there are rules to follow, children will know (29)_____they should do or should not do. Rules help to avoid conflict and misunderstanding that may lead to fights and aggression especially among children. Parents should set rules for the children to follow to avoid quarrels and fights. There are times when the children fight over simple matters and this happens if the parents do or not interfere but when parents set the rule and let the children follow, there will be (30)_____conflicts.(29)_____",
      answers: ["A. less", "B. more", "C. little", "D. fewer"],
      correctAnswerIndex: 3,
      difficulty: "Trung b├¼nh"
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