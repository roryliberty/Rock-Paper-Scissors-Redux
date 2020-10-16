const buttons = document.querySelectorAll(".button");
const play = document.getElementById("btnPlay");
let playerSelection = "";
let computerSelection = "";
let round = 0;

document.getElementById("round-number").innerHTML = round;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.id);
        
        if (e.target.id === "btnRock") {
            playerPlay("rock");
            document.getElementById("playerChoice").innerHTML = playerSelection;
            computerPlay();
            document.getElementById("computerChoice").innerHTML = computerSelection;                    
        } else if (e.target.id === "btnPaper") {
            playerPlay("paper");
            document.getElementById("playerChoice").innerHTML = playerSelection;
            computerPlay();
            document.getElementById("computerChoice").innerHTML = computerSelection;
        } else if (e.target.id === "btnScissors") {
            playerPlay("scissors");
            document.getElementById("playerChoice").innerHTML = playerSelection;
            computerPlay();
            document.getElementById("computerChoice").innerHTML = computerSelection;
        }
        
        playRound(playerSelection, computerSelection);
    });
});

function playerPlay(selection) {
    playerSelection = selection;
    return playerSelection;
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
// maybe I can use case: instead of if/else loop 
function playRound(playerSelection, computerSelection) {    
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("Tie: rock/rock");
        document.getElementById("result").innerHTML = "Tie: rock/rock";
    }else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Win: rock/scissors");
        document.getElementById("result").innerHTML = "Win: rock/scissors";
    }else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Lose: rock/paper");
        document.getElementById("result").innerHTML = "Lose: rock/paper"
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Lose: scissors/rock");
        document.getElementById("result").innerHTML = "Lose: scissors/rock"
    }else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("Tie: scissors/scissors");
        document.getElementById("result").innerHTML = "Tie: scissors/scissors"
    }else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Win: scissors/paper");
        document.getElementById("result").innerHTML = "Win: scissors/paper"
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Win: paper/rock");
        document.getElementById("result").innerHTML = "Win: paper/rock"
    }else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Lose: paper/scissors");
        document.getElementById("result").innerHTML = "Lose: paper/scissors"
    }else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Tie: paper/paper");
        document.getElementById("result").innerHTML = "Tie: paper/paper"
    }else {
        return;
    }
}