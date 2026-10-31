const choices = ["rock", "paper", "scissors"];
const totalRounds = 5;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const message = document.getElementById("message");
const scoreboard = document.getElementById("scoreboard");

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  roundsPlayed++;

  if (humanChoice === computerChoice) {
    message.textContent = `It's a draw! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    message.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  scoreboard.textContent =
    `Round ${roundsPlayed} of ${totalRounds} — ` +
    `You: ${humanScore}, Computer: ${computerScore}`;

  if (roundsPlayed === totalRounds) {
    if (humanScore > computerScore) {
      message.textContent += " You won the game!";
    } else if (computerScore > humanScore) {
      message.textContent += " You lost the game.";
    } else {
      message.textContent += " The game is a draw.";
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

scoreboard.textContent =
  `Round 0 of ${totalRounds} — You: ${humanScore}, Computer: ${computerScore}`;
