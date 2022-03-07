const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
let smallText = document.createElement("small");
smallText.textContent = "* Passwords do not match";
smallText.style.cssText = "font-size: 10px; color: red; text-shadow: 2px black;"
const check = function(e) {
    if(password.value !== passwordConfirm.value){
        password.after(smallText);
        password.setCustomValidity("Invalid field");
        passwordConfirm.setCustomValidity("Invalid field");
    }
    else {
        smallText.remove();
        password.setCustomValidity("");
        passwordConfirm.setCustomValidity("");
    }
}   

password.addEventListener(onkeyup,check);