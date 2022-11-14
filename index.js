// get a choice from the computer by getting a random integer value from 0 to 2
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


// plays one round of the game
const playRound = (user, comp) => {
    if (user === comp) {
        console.log('Round Tied!');
        return -1;
    }
    else if((user === 'rock' && comp === 'scissors') || (user === 'scissors' && comp === 'paper') || (user === 'paper' && comp === 'rock')){
        console.log(`You Won this round! ${user} beats ${comp}`);
        return 1;
    }
    else{
        console.log(`You Lost this round! ${comp} beats ${user}`);
        return 0;
    }
}


// plays playRound() five time and keeps count of the score
const game = () => {
    let user = 0;
    let comp = 0;

    for(let index = 0; index < 5; index++){
        let userChoice = prompt('What is your choice?');
        userChoice = userChoice.toLocaleLowerCase();
        compChoice = getComputerChoice();
        let result = playRound(userChoice, compChoice);

        if(result === 1){
            user++;
        }
        else if(result === 0){
            comp++;
        }
    }

    if (user === comp) {
        console.log('GAME TIED!!');
    }
    else if (user > comp){
        console.log('You WON the game!!');
    }
    else{
        console.log('You LOST the game!!');
    }
}



game();     // calling game()





