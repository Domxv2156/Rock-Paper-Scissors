const choices = ["rock", "paper", "scissors"]


function getComputerChoice() {
    return choices[Math.floor(Math.random() *choices.length)]
}

function playerChoice() {
    let input = prompt("Enter Rock, Paper or Scissors");
    input = input.toLowerCase();
    if(input === "rock" && getComputerChoice() === "paper") {
alert('You lost!');
    }
    
}

console.log(playerChoice());
