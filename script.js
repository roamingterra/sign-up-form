function checkPassword(){
    let password = document.getElementById('password').value;
    let passwordConfirmation = document.getElementById('password_confirmation').value;
    let message = document.getElementsByClassName('message').value;
    let submit = document.getElementById('submit');
    console.log(password);
    console.log(passwordConfirmation);
    console.log(password === passwordConfirmation)

    if(password !== passwordConfirmation){
        submit.disabled = true;
        message.textContent = "Passwords do not match";
        message.style.color = "red";
    }
    else{
        submit.disabled = false;
    }
}