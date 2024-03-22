// CSS related code


const buttonsSpace = document.querySelector('#buttons-space');
const result = document.querySelector('#result-text');
const score = document.querySelector('#score')
const main = document.querySelector('#main')

let wins = 0;
let losses = 0;
let draws = 0;

function checkEndState(){
    if(wins == 5 || losses == 5){
        console.log('happened!')
        while (main.firstChild){
            main.removeChild(main.firstChild)
        }
        main.textContent = `You ${(wins == 5) ? `Won :)` : `Lost :()`}. Since I'm lazy and haven't created a restart button yet. Refresh to Play Again!`
    }
}


buttonsSpace.addEventListener('click', (event) => {
    let target = event.target;
    let playerInput = undefined;

    switch(target.id){
        case 'rock':
            playerInput = 'rock';
        case 'paper':
            rplayerInput = 'paper';
        case 'scissors':
            playerInput = 'scissors';
    }

    let currentResult = playRound(playerInput);
    (currentResult == 1) ? wins++ : (currentResult == -1) ? losses++ : draws++;
    score.textContent = `Wins: ${wins} | Losses: ${losses} ] Draws: ${draws}`
    checkEndState()
})


// Game Related Code

function getComputerChoice(){
    let rpsChoices = ['rock', 'paper','scissors'];
    return rpsChoices[(Math.floor(Math.random() * 3))]
}

function playRound(playerSelection, computerSelection = getComputerChoice()){
    let playerInput = playerSelection;
    let winningHand = (playerInput == "paper") ? "rock" : (playerInput == "rock") ? "scissors" : "paper";

    if(playerSelection == computerSelection){result.textContent = `You both played ${playerSelection}. It's a Draw!`;return 0}
    else if(winningHand == computerSelection){result.textContent = `You win! The opponent played ${winningHand}`;return 1}
    else{result.textContent =`You lost :( The opponent played ${computerSelection}`;return -1}
}





// function playGame(currentInput){
//     let numberOfRounds = parseInt(prompt("Enter an odd number of rounds"));
//     let counter = {win: 0, loss: 0, draw: 0};
    
//     if(numberOfRounds % 2 == 1){
//         for (i = numberOfRounds -1; i >= 0; i--){
//             // let currentInput = prompt("Do you play Rock, Paper or Scissors?");
//             let currentResult = currentInput;
//             (currentResult == 1) ? counter.win++ : (currentResult == -1) ? counter.loss++ : counter.draw++;
//         }
//     }
//     let finalMessage = `The Match ended with a ${(counter.win == counter.loss) ? 'Draw' : (counter.win > counter.loss) ? 'Win' : "Loss"}
//     The final score was: Wins: ${counter.win}, Draws: ${counter.draw} and Losses: ${counter.loss}`

//     return finalMessage
// }
