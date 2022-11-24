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

    
    userChoice = userChoice.toLocaleLowerCase();
    compChoice = getComputerChoice();
    let result = playRound(userChoice, compChoice);

    if(result === 1){
        user++;
    }
    else if(result === 0){
        comp++;
    }

    if(count === 5){
        if(user === comp){
            console.log("GAME TIDED!!");
        }
        else if(user > comp){
            console.log("YOU WON THE GAME!");
        }
        else{
            console.log("YOU LOST THE GAME!");
        }

        count = 0;
    }
}



// The following code adds events

let userChoice = null;
let count = 0;
const buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click', function(e) {
        userChoice = this.innerText;
        count++;
        game();
    });
}




