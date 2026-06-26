let heading = document.getElementById("heading");
let btn = document.getElementById("signupbtn");
let email = document.getElementById("email");
let pwd = document.getElementById("password");
let name = document.getElementById("text");
let pwdCount = document.getElementById("charCount");

btn.onclick = function(event){
    event.preventDefault();
    let uName = name.value;
    let uEmail = email.value;
    let uPwd = pwd.value;
    let user = document.querySelector('input[name="p"]:checked');
    if(uName==""|| uEmail==""||uPwd == ""){
        message.innerText = "Please fill all the fields.";
        message.style.color = "red";
    }
    else if(user ==null){
        message.innerText = "Please select the user type.";
        message.style.color = "red";
    }
    else{

        heading.innerText = "Welcome " + uName + "!";
        heading.style.color = "white";
        message.innerText = "Account created successfully.";
        message.style.color = "green";

        btn.innerText = "Registered ✓";
        btn.disabled = true;
    }
    if(user==null){
        console.log("Please select the user type");
    }
};
pwd.addEventListener("input", function(){

    let len= pwd.value.length;
    pwdCount.innerText = len;
    if(len == 0){

        strength.innerText = "";

    }
    else if(len < 6){

        strength.innerText = "🔴 Weak";
        strength.style.color = "red";

    }
    else if(len < 10){

        strength.innerText = "🟡 Medium";
        strength.style.color = "orange";

    }
    else{

        strength.innerText = "🟢 Strong";
        strength.style.color = "green";

    }
})

