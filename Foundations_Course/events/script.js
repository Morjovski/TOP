const btn = document.querySelector("#button");

btn.addEventListener('click', function (e) {
    console.log(e);
});

const btnTarget = document.querySelector("#buttonTarget");

btnTarget.addEventListener("click", function(e) {
    console.log(e.target);
});

const btnBackgroundColor = document.querySelector("#buttonBackgroundColor");

btnBackgroundColor.addEventListener("click", function(e) {
    e.target.style.background = 'blue';
});

const btns = document.querySelectorAll("#container button");

btns.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});