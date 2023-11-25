function getComputerChoice() {

    let choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * 3)];
}

function gameRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase();
    let playerLength = playerChoice.length;
    let computerLength = computerChoice.length;

    if (playerLength === 4 && computerLength === 8) {
        return [`You win! ${playerChoice} beats ${computerChoice}`, true];
    } else if (computerLength === 4 && playerLength === 8) {
        return [`You lose! ${computerChoice} beats ${playerChoice}`, false];
    } else if (playerLength < computerLength) {
        return [`You lose! ${computerChoice} beats ${playerChoice}`, false];
    } else if (playerLength > computerLength) {
        return [`You win! ${playerChoice} beats ${computerChoice}`, true];
    } else {
        return ['Tie!']
    }
}



function game() {

    let result;
    let playerChoice;
    let playerScore = 0;
    let computerScore = 0;

    let buttons = document.querySelectorAll('.btn');
    let divResult = document.querySelector('.result .who-win');
    let scores = document.querySelector('.result .scores');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            playerChoice = button.textContent;

            result = gameRound(playerChoice, getComputerChoice());

            if (result[1] === true) {
                playerScore++;
            } else if (result[1] === false) {
                computerScore++;
            }

            divResult.innerText = result[0];
            scores.innerHTML = `<br>Computer: ${computerScore}<br>Player: ${playerScore}`;

            if (playerScore === 5) {
                divResult.innerText = 'Player win!';
                alert('Player win!');
            } else if (computerScore === 5) {
                divResult.innerText = 'Computer win!';
                alert('Computer win!');
            }

            if (playerScore === 5 || computerScore === 5) {
                playerScore = 0;
                computerScore = 0;
            };
        });
    });
}

game();