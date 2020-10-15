const buttons = document.querySelectorAll(".button");
let playerSelection = "";
let round = 0;

function roundCount() {
    for (i = 0; i <= 3; i++) {
        round++;
        document.getElementById("round-number").innerHTML = round;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.id);

        if (e.target.id === "btnRock") {
            console.log("Rock chosen by Player");
            playerPlay("rock");                      
            console.log(playerSelection);
        } else if (e.target.id === "btnPaper") {
            console.log("Paper chosen by Player");
            playerPlay("paper");
            console.log(playerSelection);
        } else if (e.target.id === "btnScissors") {
            console.log("Scissors chosen by Player");
            playerPlay("scissors");
            console.log(playerSelection);
        }

        roundCount();
        console.log(round);
    });
});

function playerPlay(selection) {
    playerSelection = selection;
    return playerSelection;
}

function computerPlay() {
    let rps = Math.floor(Math.random() * 3);

    if (rps == 0) {
        return "rock"
    } else if (rps == 1) {
        return "paper"
    } else {
        return "scissors"
    }
} 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie!"
    }
}