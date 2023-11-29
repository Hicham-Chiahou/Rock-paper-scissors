let playerSelection;
let computerSelection;
let playerSelectionDiv = document.getElementById("playerSelectionDiv");
let computerSelectionDiv = document.getElementById("computerSelectionDiv");
let playerScoreDiv = document.getElementById("playerScoreDiv");
let computerScoreDiv = document.getElementById("computerScoreDiv");
let commentaryDiv = document.getElementById("commentaryDiv");
let winnerDiv = document.getElementById("winnerDiv");
let iconScissorsDiv = document.getElementById("scissors")
let iconRockDiv = document.getElementById("rock")
let iconPaperDiv = document.getElementById("paper")
winnerDiv.innerText = "the winner is: ";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let e = Math.floor(Math.random() * 3);
  if (e === 0) {
    return "rock";
  } else if (e === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// this function return the result based on the player and computer choice:
function playRound(playerSelection, ComputerSelection) {
  /* the playerSelection Rock option cases */
  if (playerSelection === "rock" && ComputerSelection === "rock") {
    playerScore = playerScore + 1;
    computerScore = computerScore + 1;
    return "You are evan";
  } else if (playerSelection === "rock" && ComputerSelection === "paper") {
    computerScore = computerScore + 1;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && ComputerSelection === "scissors") {
    playerScore = playerScore + 1;
    return "You Won! Rock beats scissors";
  }

  /* the playerSelection Paper option cases */
  if (playerSelection === "paper" && ComputerSelection === "rock") {
    playerScore = playerScore + 1;
    return "You Won ! Paper beats Rock";
  } else if (playerSelection === "paper" && ComputerSelection === "paper") {
    playerScore = playerScore + 1;
    computerScore = computerScore + 1;
    return "You are evan";
  } else if (playerSelection === "paper" && ComputerSelection === "scissors") {
    computerScore = computerScore + 1;

    return "You Lose! scissors beats Paper";
  }

  /* the playerSelection scissors option cases */
  if (playerSelection === "scissors" && ComputerSelection === "rock") {
    computerScore = computerScore + 1;

    return "You Lose! Rock beats scissors";
  } 
  else if (playerSelection === "scissors" && ComputerSelection === "paper") {
    playerScore = playerScore + 1;
    return "You Won! scissors beats Paper";
  } else if (
    playerSelection === "scissors" &&
    ComputerSelection === "scissors"
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
  iconScissorsDiv.onclick = (e) => {
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
      document.getElementById("buttons-div").style.pointerEvents = "none";

    }else if(computerScore === 5){
      winnerDiv.innerText = "the winner: " + "computer";
      document.getElementById("buttons-div").style.pointerEvents = "none";

    }
    
  };

  iconPaperDiv.onclick = (e) => {
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
      document.getElementById("buttons-div").style.pointerEvents = "none";

    }else if(computerScore === 5){
      winnerDiv.innerText = "the winner: " + "computer";
      document.getElementById("buttons-div").style.pointerEvents = "none";

    }
    
  };

  iconRockDiv.onclick = (e) => {
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
      document.getElementById("buttons-div").style.pointerEvents = "none";

    }else if(computerScore === 5){
      winnerDiv.innerText = "the winner: " + "computer";
      document.getElementById("buttons-div").style.pointerEvents = "none";

    }
    
  };



  
}

startGame();
