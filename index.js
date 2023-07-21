const playerSelection = "Rock";
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

console.log("player select: " + playerSelection);
console.log("computer select: " + computerSelection);

function getComputerChoice() {
  let e = Math.floor(Math.random() * 3);
  if (e === 0) {
    return "Rock";
  } else if (e === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// this function return the result based on the player and computer choice:
function playRound(playerSelection, ComputerSelection) {
  /* the playerSelection Rock option cases */
  if (playerSelection === "Rock" && ComputerSelection === "Rock") {
    playerScore = playerScore + 1;
    computerScore = computerScore + 1;
    return "You are evan";
  } else if (playerSelection === "Rock" && ComputerSelection === "Paper") {
    computerScore = computerScore + 1;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Rock" && ComputerSelection === "Scissors") {
    playerScore = playerScore + 1;
    return "You Won! Rock beats Scissors";
  }

  /* the playerSelection Paper option cases */
  if (playerSelection === "Paper" && ComputerSelection === "Rock") {
    playerScore = playerScore + 1;
    return "You Won ! Paper beats Rock";
  } else if (playerSelection === "Paper" && ComputerSelection === "Paper") {
    playerScore = playerScore + 1;
    computerScore = computerScore + 1;
    return "You are evan";
  } else if (playerSelection === "Paper" && ComputerSelection === "Scissors") {
    computerScore = computerScore + 1;

    return "You Lose! Scissors beats Paper";
  }

  /* the playerSelection Scissors option cases */
  if (playerSelection === "Scissors" && ComputerSelection === "Rock") {
    computerScore = computerScore + 1;

    return "You Lose! Scissors beats Rock";
  } else if (playerSelection === "Scissors" && ComputerSelection === "Paper") {
    playerScore = playerScore + 1;
    return "You Won! Scissors beats Paper";
  } else if (
    playerSelection === "Scissors" &&
    ComputerSelection === "Scissors"
  ) {
    playerScore = playerScore + 1;
    computerScore = computerScore + 1;
    return "You are evan! ";
  }
}

// the startGame()
function startGame() {
  playRound(playerSelection, getComputerChoice());
 

  console.log("player score: " + playerScore);
  console.log("computer score: " + computerScore);
}

startGame();
