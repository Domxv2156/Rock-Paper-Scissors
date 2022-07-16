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
    else if(input === "paper" && getComputerChoice() === "scissors") {
        alert('You lost!'); }
        else if(input === "scissors" && getComputerChoice() === "rock") {
            alert('you lost!');
        } else if(input === "rock" && getComputerChoice() === "rock") {
            alert('tie!');
        } else if(input === "scissors" && getComputerChoice() === "scissors") {
            alert('tie!'); }
            else if(input === "paper" && getComputerChoice() === "paper") {
                alert('tie!');
             } else if(input === "paper" && getComputerChoice() === "rock") {
                alert('You won!'); }
                else if(input === "rock" && getComputerChoice() === "scissors") {
                    alert('You won!'); }
                    else if(input === "scissors" && getComputerChoice() === "paper") {
                        alert('You won!'); }
                        else {
                           alert('Enter either rock, paper or scissors.');
                        }
               
    
}

console.log(playerChoice());
