const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const message = document.getElementById("message");
const scoreboard = document.getElementById("scoreboard");
 message.textContent = "";
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}


let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
  const humanDisplay = humanChoice[0].toUpperCase() + humanChoice.slice(1);
  const computerDisplay =
    computerChoice[0].toUpperCase() + computerChoice.slice(1);

  if (humanChoice === computerChoice) {
    message.textContent = `It's a draw! You both chose ${humanDisplay}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    message.textContent = `You win! ${humanDisplay} beats ${computerDisplay}`;
  } else {
    computerScore++;
    message.textContent = `You lose! ${computerDisplay} beats ${humanDisplay}`;
  }
  currentRound++;

  if (currentRound === 5) {
  if (humanScore > computerScore) {
    message.textContent = "You won the game!";
  } else if (humanScore < computerScore) {
    message.textContent = "You lost the game!";
  } else {
    message.textContent = "The game ended in a draw!";
  }

  rockButton.disabled = true;
  scissorsButton.disabled = true;
  paperButton.disabled = true;
}
scoreboard.textContent =
  "you have played " +
  currentRound +
  " out of 5 rounds, Your Score = " +
  humanScore +
  " , Computer Score = " +
  computerScore;
}





rockButton.addEventListener("click", function(){playRound("rock")} );
paperButton.addEventListener("click",function() {playRound("paper")});
scissorsButton.addEventListener("click",function() {playRound("scissors")});

scoreboard.textContent =
  "you have played 0 out of 5 rounds, Your Score = " +
  humanScore +
  " , Computer Score = " +
  computerScore;
