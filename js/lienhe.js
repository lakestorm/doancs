document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var feedback = document.getElementById("yc").value;
  
   
    
    
    document.getElementById("successMessage").classList.add("success-background");
    document.getElementById("successMessage").textContent = "Cảm ơn bạn đã góp ý . Ý kiến của bạn đã được gửi thành công!";
    
    
    document.getElementById("yc").value = "";
  });
  