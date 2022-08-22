const choices = ["rock", "paper", "scissors"]
let playerScore = 0
    let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() *choices.length)]
};
const finalText = document.querySelector('h3');
const playerPoints = document.querySelector('.player')
const computerPoints = document.querySelector('.computer')
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const container = document.querySelector("#container");
const resultMessage = document.createElement('div');
resultMessage.classList.add('message');
container.appendChild(resultMessage);



function playRound(playerSelection, computerSelection) {

    
    if (((playerSelection)  === 'scissors') && (computerSelection === "scissors")) {
      resultMessage.textContent = "You tied!";
      computerPoints.textContent = "computer's Score " +computerScore;
        playerPoints.textContent = " Your score " +playerScore;
    } else if((playerSelection === "paper")  && (computerSelection === "paper")) {
        resultMessage.textContent = "You tied!";
        computerPoints.textContent = "computer's Score " +computerScore;
        playerPoints.textContent = " Your score " +playerScore;
    } else if ((playerSelection === "rock")  && (computerSelection === "rock")) {
        resultMessage.textContent = "You tied!";
        computerPoints.textContent = "computer's Score " +computerScore;
        playerPoints.textContent = " Your score " +playerScore;
    } else if ((playerSelection === "scissors")  && (computerSelection === "rock")) {
        resultMessage.textContent ="Computer wins the round!";
        computerScore++;
        computerPoints.textContent = "computer's Score " +computerScore;
        playerPoints.textContent = " Your score " +playerScore;
    } else if((playerSelection === "scissors") && (computerSelection === "paper")) {
        resultMessage.textContent ="You won the round!";
        playerScore++;
        computerPoints.textContent = "computer's Score " +computerScore;
        playerPoints.textContent = " Your score " +playerScore;
    } else if((playerSelection === "rock")  && (computerSelection === "paper")) {
        resultMessage.textContent ="Computer wins the round!";
        computerScore++;
        computerPoints.textContent = "computer's Score " +computerScore;
        playerPoints.textContent = " Your score " +playerScore;
}   else if((playerSelection === "rock")  && (computerSelection === "scissors")) {
    resultMessage.textContent ="You won the round!";
    playerScore++;
    computerPoints.textContent = "computer's Score " +computerScore;
    playerPoints.textContent = " Your score " +playerScore;
}  else if((playerSelection === "paper")  && (computerSelection === "rock")) {
    resultMessage.textContent ="You won the round!";
    playerScore++;
    computerPoints.textContent = "computer's Score " +computerScore;
    playerPoints.textContent = " Your score " +playerScore;
}  else if((playerSelection === "paper")  && (computerSelection === "scissors")) {
    resultMessage.textContent ="Computer wins the round!";
    computerScore++;
    computerPoints.textContent = "computer's Score " +computerScore;
    playerPoints.textContent = " Your score " +playerScore;
} else {
    resultMessage.textContent ="You made an error";
}};

const game = (playerScore, computerScore) => {
    if (playerScore === 5) { 
       finalText.textContent = "You won the game! Congratulations."
       finalText.style.color = "green"
        scissors.disabled = true;
        paper.disabled = true;
        rock.disabled = true;
    } else if(computerScore === 5) {
       finalText.textContent = "You lost the game! Maybe next time."
       finalText.style.color = "red"
        scissors.disabled = true;
        paper.disabled = true;
        rock.disabled = true;
    }
  };

  console.log(game(playerScore, computerScore))
          scissors.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const playerSelection = 'scissors';
            playRound(playerSelection, computerSelection)
            game(playerScore, computerScore);
          });

          paper.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const playerSelection = 'paper';
            playRound(playerSelection, computerSelection);
            game(playerScore, computerScore);
          });
          rock.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const playerSelection = 'rock';
            playRound(playerSelection, computerSelection);
            game(playerScore, computerScore);
          });
            

          