let password = document.getElementById('password');
let passwordConfirmation = document.getElementById('password_confirmation');

function checkPassword(){
    if(password.value !== passwordConfirmation.value){
        passwordConfirmation.setCustomValidity("Passwords don't match");
    }
    else{
        passwordConfirmation.setCustomValidity("");
    }
}

password.onchange = checkPassword();
passwordConfirmation.onkeyup = checkPassword();