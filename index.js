let playerSelection = "Rock";
let computerChoice = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

console.log("player select: " + playerSelection);
console.log("computer select: " + computerChoice);



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

function playRound(playerSelection, ComputerSelection) {
  /* the playerSelection Rock option cases */
  if (playerSelection === "Rock" && ComputerSelection === "Rock") {
    return "You are evan";
  } else if (playerSelection === "Rock" && ComputerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Rock" && ComputerSelection === "Scissors") {
    return "You Won! Rock beats Scissors";
  }

  /* the playerSelection Paper option cases */
  if (playerSelection === "Paper" && ComputerSelection === "Rock") {
    return "You Won ! Paper beats Rock";
  } else if (playerSelection === "Paper" && ComputerSelection === "Paper") {
    return "You are evan";
  } else if (playerSelection === "Paper" && ComputerSelection === "Scissors") {
    return "You Lose! Scissors beats Paper";
  }

  /* the playerSelection Scissors option cases */
  if (playerSelection === "Scissors" && ComputerSelection === "Rock") {
    return "You Lose! Scissors beats Rock";
  } else if (playerSelection === "Scissors" && ComputerSelection === "Paper") {
    return "You Won! Scissors beats Paper";
  } else if (
    playerSelection === "Scissors" &&
    ComputerSelection === "Scissors"
  ) {
    return "You are evan! ";
  }
}

let round = playRound(playerSelection, computerChoice);


function playGame() {
  
  if (round === "You Won ! Paper beats Rock") {
    playerScore++;
    

  }
  if (round === "You Won! Rock beats Scissors") {
    playerScore++;
  }
  if (round === "You Won! Scissors beats Paper") {
    playerScore++;
  }
  if (round === "You Lose! Paper beats Rock") {
    computerScore++;
  }
  if (round === "You Lose! Scissors beats Paper") {
    computerScore++;
  }
  if (round === "You Lose! Scissors beats Rock") {
    computerScore++;
  }



}

console.log("player score: " + playerScore);
console.log("computer score: " + computerScore);

