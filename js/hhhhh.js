function signup (e) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password =document.getElementById("password").value;

    var user ={
        email: email,
        password: password,

    }
    var json =JSON.stringify(user);
    localStorage.setItem(email ,json);
    alert("Đăng kí thành công");
}
    function login (e) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password =document.getElementById("password").value;
        var user =localStorage.getItem(email);
        var data =JSON.parse(user);
        if(user==null){
            alert("Vui lòng không để trống")
        }
        else if(email== data.email && password==data.password){
            alert("Đăng nhập thành công")
            window.location.href="nhacuatoi.html"
        }else{
            alert("Sai email hoặc mật khẩu");
        }
    }
    function checkemail(){
        var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
        var email = document.getElementById("email").value;
        if (regExp.test(email)) 
            alert('Email hợp lệ!'); 
          else 
              alert('email không hợp lệ!');
      }
      function checkpassword(){
        var regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        var password = document.getElementById("password").value;
        if (regExp.test(password)) 
            alert('Mật khẩu hợp lệ'); 
          else 
              alert('Mật khẩu tối thiểu tám ký tự, ít nhất một chữ cái và một số');
      }

      function matchpass(){  
          
        var firstpassword = document.getElementById("password").value;
        var secondpassword = document.getElementById("password2").value;
        
        if(firstpassword==secondpassword){  
            alert("Nhập đúng")
        }  
        else{  
        alert("Không giống mật khẩu gốc");  
        return false;  
        }  
        }  

        function checkPassword() {
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("password2").value;
            
            // Kiểm tra xem hai mật khẩu có khớp nhau hay không
            if (password !== password2) {
              document.getElementById("error").innerText = "Mật khẩu không khớp.";
              return;
            }
            
            // Xử lý khi mật khẩu khớp
            // ...
          }