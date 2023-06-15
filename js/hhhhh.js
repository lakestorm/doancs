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
            alert("Vui lòng không để trống ")
        }
        else if(email== data.email && password==data.password){
            alert("Đăng nhập thành công")
            window.location.href="home.html"
        }else{
            alert("Sai email hoặc mật khẩu");
        }
    }