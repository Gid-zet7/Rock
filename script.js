



const playerSelection = prompt('Rock, Paper or Scissors?: ');
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let items = Array('rock', 'paper', 'scissors');
    let item = items[Math.floor(Math.random()*items.length)]; 
    return item;
    // console.log(item)

}

// const playerSelection = 'paper'
// const computerSelection = 'rock'


function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'paper' ) {
        console.log('You lose!, Paper beats rock');
        // return('You lose!, Paper beats rock');
        
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ) {
        console.log('You Win!, Rock beats scissors');
        // return('You Win!, Rock beats scissors');
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock' ) {
        console.log('You Win!, Paper beats rock');
        // return('You Win!, Paper beats rock');
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors' ) {
        console.log('You lose!, Scissors beats paper');
        // return('You lose!, Scissors beats paper');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock' ) {
        console.log('You lose!, Rock beats scissors');
        // return('You lose!, Rock beats scissors');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper' ) {
        console.log('You Win!, Scissors beats Paper ');
        // return('You lose!, Rock beats scissors');
    }
    else {
        console.log('It\'s a draw, try again');
        // return('It\'s a draw, try again');
    }
   
    
};

// playRound(playerSelection, computerSelection)






console.log(playerSelection, computerSelection)
playRound(playerSelection, computerSelection)