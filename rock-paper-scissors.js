"use strict"

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let i = Math.floor(Math.random() * choices.length);
  return choices[i];
}

function playRound(playerSelection, computerSelection) {
  // Returns string containing the winner, or "tie" if tie
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection == computerSelection) {
    return "tie";
  }

  let result = playerSelection + "-" + computerSelection;
  switch (result) {
    case "rock-scissors":
    case "scissors-paper":
    case "paper-rock":
      return "player";
    default:
      return "computer";
  }
}

let nRounds = 5;
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < nRounds; i++) {
    let playerSelection = prompt("Choose:");
    let computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);

    if (winner == "player") {
      playerScore++;
    } else if (winner == "computer") {
      computerScore++;
    }

    let outputText;
    if (winner == "tie") {
      outputText = `round ${i+1} is a tie.`;
    } else {
      outputText = `${winner} wins round ${i+1}.`;
    }

    console.log(`Computer chose ${computerSelection}; ` + outputText);
  }

  if (playerScore == computerScore) {
    console.log("The game is a tie.");
  } else if (playerScore > computerScore) {
    console.log(`Player wins ${playerScore}-${computerScore}.`);
  } else {
    console.log(`Computer wins ${computerScore}-${playerScore}.`);
  }
}

game();