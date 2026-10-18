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

function getHumanChoice() {
  return prompt("Choose rock, paper, or scissors").toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice.toLowerCase();
    const humanDisplay = humanSelection[0].toUpperCase() + humanSelection.slice(1);
    const computerDisplay = computerChoice[0].toUpperCase() + computerChoice.slice(1);

    if (humanSelection === computerChoice) {
      console.log(`It's a draw! You both chose ${humanDisplay}`);
      alert("It's a draw!")
    } else if (
      (humanSelection === "rock" && computerChoice === "scissors") ||
      (humanSelection === "paper" && computerChoice === "rock") ||
      (humanSelection === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanDisplay} beats ${computerDisplay}`);
      alert("You won this round")
    } else {
      computerScore++;
      console.log(`You lose! ${computerDisplay} beats ${humanDisplay}`);
      alert("You lost this round")
    }
  }

  for (let round = 0; round < 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game ended in a draw!");
  }
}

playGame();
