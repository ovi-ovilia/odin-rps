function getComputerChoice(){
    let rpsChoices = ["rock", "paper","scissors"];
    return rpsChoices[(Math.floor(Math.random() * 3))]
}

function playRound(playerSelection, computerSelection = getComputerChoice()){
    let playerInput = playerSelection.toLowerCase();
    let winningHand = (playerInput == "paper") ? "rock" : (playerInput == "rock") ? "scissors" : "paper";

    if(playerSelection == computerSelection){console.log(`You both played ${playerSelection}. It's a Draw!`);return 0}
    else if(winningHand == computerSelection){console.log(`You win! The opponent played ${winningHand}`);return 1}
    else{console.log(`You lost :( The opponent played ${computerSelection}`);return -1}
}

function playGame(){
    let numberOfRounds = parseInt(prompt("Enter an odd number of rounds"));
    let counter = {win: 0, loss: 0, draw: 0};
    if(numberOfRounds % 2 == 1){
        for (i = numberOfRounds -1; i >= 0; i--){
            let currentInput = prompt("Do you play Rock, Paper or Scissors?");
            let currentResult = playRound(currentInput);
            (currentResult == 1) ? counter.win++ : (currentResult == -1) ? counter.loss++ : counter.draw++;
        }
    }
    let finalMessage = `The Match ended with a ${(counter.win == counter.loss) ? 'Draw' : (counter.win > counter.loss) ? 'Win' : "Loss"}
    The final score was: Wins: ${counter.win}, Draws: ${counter.draw} and Losses: ${counter.loss}`

    return finalMessage
}

console.log(playGame())