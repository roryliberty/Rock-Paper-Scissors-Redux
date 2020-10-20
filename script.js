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
    });
});

function getChoices(press) {
    let theButton = press;
    if (theButton === "btnRock") {
        playerSelection = "rock";
        document.getElementById("playerChoice").innerHTML = playerSelection;
        computerPlay();
        document.getElementById("computerChoice").innerHTML = computerSelection;                    
    } else if (theButton === "btnPaper") {
        playerSelection = "paper";
        document.getElementById("playerChoice").innerHTML = playerSelection;
        computerPlay();
        document.getElementById("computerChoice").innerHTML = computerSelection;
    } else if (theButton === "btnScissors") {
        playerSelection = "scissors";
        document.getElementById("playerChoice").innerHTML = playerSelection;
        computerPlay();
        document.getElementById("computerChoice").innerHTML = computerSelection;
    }
}

function computerPlay() {
    let rps = Math.floor(Math.random() * 3);

    if (rps == 0) {
        computerSelection = "rock";
    } else if (rps == 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
}

function playRound(playerSelection, computerSelection) {    
    if (playerSelection === "rock" && computerSelection === "rock") {
        document.getElementById("result").innerHTML = "Tie: rock/rock";
    }else if (playerSelection === "rock" && computerSelection === "scissors") {
        document.getElementById("result").innerHTML = "Win: rock/scissors";
        playerScore += 1;
    }else if (playerSelection === "rock" && computerSelection === "paper") {
        document.getElementById("result").innerHTML = "Lose: rock/paper";
        computerScore +=1;
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        document.getElementById("result").innerHTML = "Lose: scissors/rock";
        computerScore += 1;
    }else if (playerSelection === "scissors" && computerSelection === "scissors") {
        document.getElementById("result").innerHTML = "Tie: scissors/scissors"
    }else if (playerSelection === "scissors" && computerSelection === "paper") {
        document.getElementById("result").innerHTML = "Win: scissors/paper";
        playerScore += 1;
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        document.getElementById("result").innerHTML = "Win: paper/rock";
        playerScore += 1;
    }else if (playerSelection === "paper" && computerSelection === "scissors") {
        document.getElementById("result").innerHTML = "Lose: paper/scissors";
        computerScore += 1;
    }else if (playerSelection === "paper" && computerSelection === "paper") {
        document.getElementById("result").innerHTML = "Tie: paper/paper";
    }else {
        return;
    }

    document.getElementById("totals").innerHTML = ("Total goes here: " + playerScore +
            " - " + computerScore);
}