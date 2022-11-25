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
    let roundResult = document.createElement('li');
    let ans;

    if (user === comp) {
        roundResult.innerText = 'Round Tied!';
        ans = -1;
    }
    else if((user === 'rock' && comp === 'scissors') || (user === 'scissors' && comp === 'paper') || (user === 'paper' && comp === 'rock')){
        roundResult.innerText = `You Won this round! ${user} beats ${comp}`;
        ans = 1;
    }
    else{
        roundResult.innerText = `You Lost this round! ${comp} beats ${user}`;
        ans = 0;
    }

    history.append(roundResult);
    return ans;

}

function refresh() {    
    
}



// The following code adds events

let count = 0;
let userScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('button');
const history = document.querySelector('.round-history');
const score = document.querySelector('.score');

score.innerText = `${userScore} - ${compScore}`;


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

        score.innerText = `${userScore} - ${compScore}`;

        if(count === 5){
            const result = document.createElement('div');
        
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
            setTimeout(function () {
                location.reload()
            }, 800);
        }
    });
}




