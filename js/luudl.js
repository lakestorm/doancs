function saveData() {
    event.preventDefault();
    var input1Value = document.getElementById("input1").value;
    var input2Value = document.getElementById("input2").value;
    var input3Value = document.getElementById("input3").value;
    var input4Value = document.getElementById("input4").value;
    var input5Value = document.getElementById("input5").value;
    var input6Value = document.getElementById("input6").value;
    var input7Value = document.getElementById("input7").value;
  
    // Lưu dữ liệu vào localStorage
    localStorage.setItem("input1", input1Value);
    localStorage.setItem("input2", input2Value);
    localStorage.setItem("input3", input3Value);
    localStorage.setItem("input4", input4Value);
    localStorage.setItem("input5", input5Value);
    localStorage.setItem("input6", input6Value);
    localStorage.setItem("input7", input7Value);
  }
  
  // Khôi phục dữ liệu từ localStorage khi tải lại trang
  document.addEventListener("DOMContentLoaded", function() {
    var input1Value = localStorage.getItem("input1");
    var input2Value = localStorage.getItem("input2");
    var input3Value = localStorage.getItem("input3");
    var input4Value = localStorage.getItem("input4");
    var input5Value = localStorage.getItem("input5");
    var input6Value = localStorage.getItem("input6");
    var input7Value = localStorage.getItem("input7");
  
    document.getElementById("input1").value = input1Value;
    document.getElementById("input2").value = input2Value;
    document.getElementById("input3").value = input3Value;
    document.getElementById("input4").value = input4Value;
    document.getElementById("input5").value = input5Value;
    document.getElementById("input6").value = input6Value;
    document.getElementById("input7").value = input7Value;
  });
  