function computerPlay(n) {
    if (n <= 0.3) {
        return "rock";
    }
    else if (n <= 0.6 && n >= 0.31) {
        return "paper";
    }
    else if (n <= 1 && n >= 0.61) {
        return "scissors";
    }
    else {
        return "I dont feel like playing this round";
    }
}

let n = Math.random();
computerPlay(n);



function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "ITS A TIE! Good job";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "HAHA I WIN AND YOU LOSE!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "NOOOOO YOU WON! YOU MUST BE CHEATING!!!";
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "ITS A TIE! Good job";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "HAHA I WIN AND YOU LOSE!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "NOOOOO YOU WON! YOU MUST BE CHEATING!!!";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "ITS A TIE! Good job";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "HAHA I WIN AND YOU LOSE!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "NOOOOO YOU WON! YOU MUST BE CHEATING!!!";
    }
    else {
        return "I dont feel like playing this round";
    }
}
let playerSelection = window.prompt("choose rock paper or scissors").toLowerCase();
let computerSelection = computerPlay(n);

function game() {
        let playerSelection = window.prompt("choose rock paper or scissors").toLowerCase();
        playRound();
        console.log(playerSelection, computerSelection);
        console.log(playRound(playerSelection,computerSelection));
}

for (let i = 0; i < 5; i++) {
    game();
}
