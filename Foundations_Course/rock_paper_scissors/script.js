function getComputerChoice(choices) {

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

    let choices = ['rock', 'paper', 'scissors'];

    let result;
    let score = 0;
    let playerSelect;

    for (let i = 0; i < 5; i++) {
        
        do {
            playerSelect = prompt('Enter your choice (Rock, Paper or Scissors').toLowerCase();
        } while (!choices.includes(playerSelect));
        
        
        result = gameRound(playerSelect, getComputerChoice(choices));

        if (result[1] === true) {
            score++;
        } else if (result[1] === false) {
            score--;
        }
        
        console.log(result[0]);
    }

    if (score > 0) {
        console.log('Player win!');
    } else {
        console.log('Computer win!');
    }
}

game();