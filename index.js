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



// The following code adds events

let count = 0;
let userScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click', function(e) {
        let userChoice = this.innerText.toLowerCase();
        let compChoice = getComputerChoice();
        count++;
        let result = playRound(userChoice, compChoice);

        if(result === 1){
            userScore++;
        }
        else if(result === 0){
            compScore++;
        }

        if(count === 5){
            console.log(userScore+ ' ' + compScore)
            if(userScore === compScore){
                console.log("GAME TIDED!!");
            }
            else if(userScore > compScore){
                console.log("YOU WON THE GAME!");
            }
            else{
                console.log("YOU LOST THE GAME!");
            }
            count = 0;
            userScore = 0;
            compScore = 0;
        }
    });
}




