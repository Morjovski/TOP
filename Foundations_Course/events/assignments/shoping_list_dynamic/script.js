let ul = document.querySelector('ul');
let input = document.querySelector('input');
let btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    let text = input.value;
    input.value = '';

    let li = document.createElement('li');
    let span = document.createElement('span');
    let button = document.createElement('button');

    li.appendChild(span);
    li.appendChild(button);

    span.textContent = text;
    button.textContent = 'delete';

    ul.appendChild(li);

    button.addEventListener('click', () => {
        ul.removeChild(li);
    });

    input.focus();
});

