const signUpLabels = document.querySelectorAll(".form-elem input");
const invalidMsg = document.querySelectorAll('.form-elem .invalid-msg');
const password = document.querySelector('#pwd');
const passwordConfirm = document.querySelector('#pwd-confirm');

signUpLabels.forEach((formInput, index) => {
    formInput.addEventListener('input', () => {
        if (!formInput.checkValidity()) {
            formInput.classList.add('invalid');
            invalidMsg[index].style.opacity = '1';
        } else {
            formInput.classList.remove('invalid');
            invalidMsg[index].style.opacity = '0';
        }
    });
});

passwordConfirm.addEventListener('input', () => {
    const pwd = password.textContent;
    const pwdConfirm = passwordConfirm.textContent;

    if (pwdConfirm != pwd) {
        pwdConfirm.classList.add('invalid');
    } else {
        pwdConfirm.classList.remove('invalid');
    }
});