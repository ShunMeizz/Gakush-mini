const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice, computerChoice, result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
    //console.log(randomNumber);

    if(randomNumber === 1){
        computerChoice = 'rock';
    }else if(randomNumber === 2){
        computerChoice = 'paper';
    }else{
        computerChoice = 'scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(userChoice === computerChoice){
        result = 'It\'s a draw'
    }
    if(userChoice === 'rock'){
        if(computerChoice==='paper'){
            result = 'You lose';
        }
        if(computerChoice==='scissors'){
            result = 'You win';
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice==='rock'){
            result = 'You win';
        }
        if(computerChoice==='scissors'){
            result = 'You lose';
        }
    }
    if(userChoice === 'scissors'){
        if(computerChoice==='rock'){
            result = 'You lose';
        }
        if(computerChoice==='paper'){
            result = 'You win';
        }
    }
    resultDisplay.innerHTML = result;  

}
