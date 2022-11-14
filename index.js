const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3);
    let choice = '';

    if (num === 0) {
        choice = 'rock';
    }
    else if(num === 1){
        choice = 'paper';
    }
    else{
        choice = 'scissors'
    }

    return choice;
}

const playRound = (user, comp) => {
    if (user === comp) {
        console.log('Game Tied!');
    }
    else if((user === 'rock' && comp === 'scissors') || (user === 'scissors' && comp === 'paper') || (user === 'paper' && comp === 'rock')){
        console.log(`You Won! ${user} beats ${comp}`);
    }
    else{
        console.log(`You Lost! ${comp} beats ${user}`);
    }
}

let userChoice = prompt('What is your choice?');
userChoice = userChoice.toLocaleLowerCase();

playRound(userChoice, getComputerChoice());

