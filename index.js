let playerSelection;
let computerSelection;
let playerSelectionDiv = document.getElementById("playerSelectionDiv");
let computerSelectionDiv = document.getElementById("computerSelectionDiv");
let playerScoreDiv = document.getElementById("playerScoreDiv");
let computerScoreDiv = document.getElementById("computerScoreDiv");
let commentaryDiv = document.getElementById("commentaryDiv");
let winnerDiv = document.getElementById("winnerDiv");
let iconsDiv = document.getElementById("scissors")
winnerDiv.innerText = "the winner is: ";
let playerScore = 0;
let computerScore = 0;

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

    return "You Lose! Rock beats Scissors";
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
 
  playerSelectionDiv.innerText = "player selects: ";
  // get the element that is clicked from the window object.
  iconsDiv.onclick = (e) => {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();

    playerSelectionDiv.innerText = "player selects: " + playerSelection;
    computerSelectionDiv.innerText = "computer selects: " + computerSelection;
    
    let commentary = playRound(playerSelection,computerSelection);
    commentaryDiv.innerText = "commentary: " + commentary;
    playerScoreDiv.innerText = "player score: " + playerScore;
    computerScoreDiv.innerText = "computer score: " + computerScore;

    if(playerScore === 5){
      winnerDiv.innerText = "the winner: " + "player";
    }else if(computerScore === 5){
      winnerDiv.innerText = "the winner: " + "computer";
    }
  };

  
}

startGame();
