// get a choice from the computer by getting a random integer value from 0 to 2
const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3);
    let choice = '';

    if (num === 0) {
        choice = 'rock';
    }
    else if (num === 1) {
        choice = 'paper';
    }
    else {
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
    else if ((user === 'rock' && comp === 'scissors') || (user === 'scissors' && comp === 'paper') || (user === 'paper' && comp === 'rock')) {
        roundResult = `You Won this round! ${user} beats ${comp}`;
        ans = 1;
    }
    else {
        roundResult = `You Lost this round! ${comp} beats ${user}`;
        ans = 0;
    }

    history.innerText = roundResult;
    return ans;

}


////*   The following code adds events   *////


let count = 0;  // takes count of the rounds and resets after 5 rounds
let userScore = 0;  // takes count of user score
let compScore = 0;  // takes count of computer score

// selects the different classes and tags
const buttons = document.querySelectorAll('button');
const history = document.querySelector('.round-history');
const score = document.querySelector('.score');

// creating a new div element to store the final result in
const result = document.createElement('div');
result.classList.add('final-result');   // adding final-reult class to it

// initialization of round-history
history.innerText = "";

// putting score of 0-0 on the window
score.innerText = `${userScore} - ${compScore}`;

// loop to add event to all three buttons
for (let button of buttons) {
    button.addEventListener('click', function (e) {

        result.innerText = "";  // initialization of final-result

        let userChoice = this.innerText.toLowerCase();  // converting the player choice to lowercase
        let compChoice = getComputerChoice();   // getting computer choice
        count++;    // incrementing round count
        let roundResult = playRound(userChoice, compChoice);    // playing a round and storing result

        if (roundResult === 1) {
            userScore++;
        }
        else if (roundResult === 0) {
            compScore++;
        }

        score.innerText = `${userScore} - ${compScore}`;    // changing score on window based on the result

        // if number of rounds is five (five rounds match only)
        if (count === 5) {

            // shows final result on the window
            if (userScore === compScore) {
                result.innerText = "GAME TIDED!!";
            }
            else if (userScore > compScore) {
                result.innerText = "YOU WON THE GAME!";
            }
            else {
                result.innerText = "YOU LOST THE GAME!";
            }

            history.insertAdjacentElement('afterend', result);

            // re-intializing the value of counters for next game
            count = 0;
            userScore = 0;
            compScore = 0;
        }
    });
}




