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
    alert("Dang ki thanh cong");
}
    function login (e) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password =document.getElementById("password").value;
        var user =localStorage.getItem(email);
        var data =JSON.parse(user);
        if(email== data.email && password==data.password){
            alert("dang nhap thanh cong")
            window.location.href="home.html"
        }else{
            alert("Sai email hoac mat khau");
        }
    }