const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerMove());
  });
});

function getComputerMove() {
  const moves = ["rock", "paper", "scissors"];
  const computerMove = moves[Math.floor(Math.random() * moves.length)];
  return computerMove;
}

function playRound(playerChoice, computerChoice) {
  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    alert("Invalid move.");
    return;
  }
  let outcome = "";
  if (playerChoice === computerChoice) {
    outcome = "It's a tie!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    outcome = "Sorry, paper covers rock.";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    outcome = "Yay! Paper covers rock!";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    outcome = "Sorry, rock beats scissors.";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    outcome = "Yay! Rock beats scissors!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    outcome = "Yay! Scissors cuts paper!";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    outcome = "Sorry, scissors cuts paper.";
  }

  const container = document.querySelector("#container");
  const gameResults = document.querySelector("#game-results");

  const playerSection = document.createElement("p");
  playerSection.classList.add("playerSection");
  playerSection.textContent = "You chose: " + playerChoice;

  const computerSection = document.createElement("p");
  computerSection.classList.add("computerSection");
  computerSection.textContent = "The computer chose: " + computerChoice;

  const results = document.createElement("p");
  results.classList.add("results");
  results.textContent = outcome;

  gameResults.innerHTML = "";
  gameResults.appendChild(playerSection);
  gameResults.appendChild(computerSection);
  gameResults.appendChild(results);

  return {
    playerChoice,
    computerChoice,
  };
}

// function game() {
// 	for (let round = 0; round < 5; round++) {
// 		playRound();
// 	}
// }
