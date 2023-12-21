const flexGrid = document.querySelector('.flex-grid');
const button = document.createElement('button');
const firstChild = document.documentElement.firstChild;

let userInput = 16;

button.textContent = 'Click me!';
button.className = 'create-grid';
button.setAttribute('style', 'border: none; margin: 10px; padding: 10px; cursor: pointer; border-radius: 5px;')

button.addEventListener('click', () => {

    do {
        userInput = prompt('Enter a number of squares per side (100 is maximum):');
    } while (userInput > 100 || isNaN(userInput) || userInput < 1);

    while (flexGrid.firstChild) {
        flexGrid.removeChild(flexGrid.firstChild);
    };

    createGrid(userInput);
});

button.addEventListener('mouseover', () => {
    button.style.background = '#B0A8B9';
});

button.addEventListener('mouseleave', () => {
    button.style.background = '';
});

document.documentElement.insertBefore(button, firstChild);

function createGrid(userInput) {
    for (let i = 0; i < userInput; i++) {
        for (let j = 0; j < userInput; j++) {
            let grid = document.createElement('div');
            let elementsInRow = 100 / userInput;
            grid.className = 'grid-elem';
            grid.setAttribute('style', `flex: 0 0 ${elementsInRow}%; border: solid 1px rgba(0, 0, 0, 0.5); height: ${elementsInRow}vw`)
            grid.addEventListener('mouseover', () => {
                grid.style.background = '#121212';
            });
            flexGrid.appendChild(grid);
        };
    };
};

createGrid(userInput);



