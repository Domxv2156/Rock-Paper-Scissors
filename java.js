const choices = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() *choices.length)]
}



function playerChoice(playerSelection, computerSelection) {
    let input = prompt("Enter Rock, Paper or Scissors");
    input = input.toLowerCase(); 
     if(input === "rock" && getComputerChoice() === "paper") {
    computerScore++
return 'You lost!';
    }
    else if(input === "paper" && getComputerChoice() === "scissors") {
        computerScore++
        return 'You lost!'; }
        else if(input === "scissors" && getComputerChoice() === "rock") {
            computerScore++
            return 'you lost!';
        } else if(input === "rock" && getComputerChoice() === "rock") {
            return 'tie!';
        } else if(input === "scissors" && getComputerChoice() === "scissors") {
            return 'tie!'; }
            else if(input === "paper" && getComputerChoice() === "paper") {
                return 'tie!';
             } else if(input === "paper" && getComputerChoice() === "rock") {
                playerScore++
                return 'You won!'; }
                else if(input === "rock" && getComputerChoice() === "scissors") {
                    playerScore++
                    return 'You won!'; }
                    else if(input === "scissors" && getComputerChoice() === "paper") {
                        playerScore++
                        return 'You won!'; }
                        else {
                           return 'Enter either rock, paper or scissors.';
                        }
             }
   const playerSelection = 'rock'

          const game = () => {
            for(let i =0; i < 5; i++) {
                const computerSelection = getComputerChoice()
                playerChoice(playerSelection, computerSelection)
            }
            if (playerScore < computerScore) {
                return 'you lost to the computer!'; }
                else if (playerScore > computerScore) {
                    return 'you beat the computer, nice!';
                }
                
            
          }



            console.log(game());