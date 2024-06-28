var username = "sagar";
var password = "12345";

function checkLogin() {
    var usernameText = document.getElementById("username");
    var passwordText = document.getElementById("password");
    // var signUpBtn = document.getElementById("signUpBtn");

    var userText = usernameText.value;
    var passText = passwordText.value;
    
    // signUpBtn.addEventListener("click", function() {
        if(userText == username && passText == password) {
            alert("Login successfull");
            window.location.href = "home.html";
        }
        else {
            alert("Something went wrong");
        }
    // })
}
