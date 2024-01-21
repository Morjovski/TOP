const signUpLabels = document.querySelectorAll(".form-elem input");
const invalidMsg = document.querySelectorAll('.form-elem .validation-msg');
const password = document.querySelector('#pwd');
const passwordConfirm = document.querySelector('#pwd-confirm');

signUpLabels.forEach((formInput, index) => {
    formInput.addEventListener('focusout', () => {
        if (formInput.checkValidity()) {
            formInput.classList.remove('invalid');
            invalidMsg[index].style.opacity = '0';
        } else {
            formInput.classList.add('invalid');
            invalidMsg[index].style.opacity = '1';
        };
    });
});

passwordConfirm.addEventListener('input', () => {
    const pwd = password.value;
    const pwdConfirm = passwordConfirm.value;
    
    if (pwdConfirm == pwd) {
        passwordConfirm.classList.remove('invalid');
    } else {
        passwordConfirm.classList.add('invalid');
    }
});
