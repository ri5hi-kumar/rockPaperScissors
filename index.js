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
    let roundResult;
    let ans;

    if (user === comp) {
        roundResult = 'Round Tied!';
        ans = -1;
    }
    else if((user === 'rock' && comp === 'scissors') || (user === 'scissors' && comp === 'paper') || (user === 'paper' && comp === 'rock')){
        roundResult = `You Won this round! ${user} beats ${comp}`;
        ans = 1;
    }
    else{
        roundResult = `You Lost this round! ${comp} beats ${user}`;
        ans = 0;
    }

    history.innerText = roundResult;
    return ans;

}


// The following code adds events

let count = 0;
let userScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('button');
const history = document.querySelector('.round-history');
const score = document.querySelector('.score');

const result = document.createElement('div');
result.classList.add('final-result');

history.innerText = "";
result.innerText = "";

score.innerText = `${userScore} - ${compScore}`;


for(let button of buttons){
    button.addEventListener('click', function(e) {

        result.innerText = "";
        
        let userChoice = this.innerText.toLowerCase();
        let compChoice = getComputerChoice();
        count++;
        let roundResult = playRound(userChoice, compChoice);

        if(roundResult === 1){
            userScore++;
        }
        else if(roundResult === 0){
            compScore++;
        }

        score.innerText = `${userScore} - ${compScore}`;

        if(count === 5){
        
            if(userScore === compScore){
                result.innerText = "GAME TIDED!!";
            }
            else if(userScore > compScore){
                result.innerText = "YOU WON THE GAME!";
            }
            else{
                result.innerText = "YOU LOST THE GAME!";
            }

            history.insertAdjacentElement('afterend', result);
            count = 0;
            userScore = 0;
            compScore = 0;
        }
    });
}




