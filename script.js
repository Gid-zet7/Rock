

let playerSelection = prompt("Choose rock, paper, or scissors.").toLowerCase();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)]; 

}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      computerScore++;
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
      console.log(`Score: Player ${playerScore} - ${computerScore} Computer`);
    }
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie game!");
    }
}



game();




