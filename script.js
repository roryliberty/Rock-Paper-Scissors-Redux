const buttons = document.querySelectorAll(".button");
let playerSelection = "";
let computerSelection = "";
let round = 1;
let buttonPress;
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        buttonPress = (button.id);

        document.getElementById("round-number").innerHTML = round;
        
        console.log("buttonPress = " + buttonPress);
        
        getChoices(buttonPress);
        round += 1;
        playRound(playerSelection, computerSelection);
        if (playerScore === 5 && computerScore < 5) {
            document.getElementById("totals").innerHTML = ("YOU WIN! score: " + playerScore +
                " - " + computerScore);
        }   else if (computerScore === 5 && playerScore < 5) {
            document.getElementById("totals").innerHTML = ("YOU LOSE! score: " + playerScore +
                " - " + computerScore);
        }
    });
});

function getChoices(press) {
    let theButton = press;

    if (theButton === "btnRock") {
        playerSelection = "rock";                   
    } else if (theButton === "btnPaper") {
        playerSelection = "paper";
    } else if (theButton === "btnScissors") {
        playerSelection = "scissors";
    }

    document.getElementById("playerChoice").innerHTML = playerSelection;
    computerPlay();
    document.getElementById("computerChoice").innerHTML = computerSelection;
}

function computerPlay() {
    let rps = Math.floor(Math.random() * 3);

    if (rps === 0) {
        computerSelection = "rock";
    } else if (rps === 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let result = whoWon(playerSelection, computerSelection);

    if (result === "Win") {
        playerScore++;
    } else if (result === "Lose") {
        computerScore++;
    }

    document.getElementById("result").innerText = result + ": " + playerSelection + " / " + computerSelection;
    document.getElementById("totals").innerHTML = ("Total goes here: " + playerScore + " - " + computerScore);
}

function whoWon(player, computer) {
    if (player === "rock") {
        if (computer === "rock") {
            return "Tie";
        }   else if (computer === "paper") {
            return "Lose";
        }   else {
            return "Win";
        }
    }   else if (player === "paper") {
        if (computer === "rock") {
            return "Lose";
        }   else if (computer === "paper") {
            return "Tie";
        }   else {
            return "Win";
        }
    }   else {
        if (computer === "rock") {
            return "Lose";
        }   else if (computer === "paper") {
            return "Win";
        }   else {
            return "Tie";
        }
    }
}