function sigup (e) {
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