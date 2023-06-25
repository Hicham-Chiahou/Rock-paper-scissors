function getComputerChoice() {

  let e = Math.floor(Math.random() * 3);
  if (e === 0) {
    console.log("Rock");
  } else if (e === 1) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
  
}

getComputerChoice();
