// Create a container div for the game elements
const gameContainer = document.createElement("div");
gameContainer.style.textAlign = "center";
gameContainer.style.marginTop = "50px";

// Create buttons for rock, paper, and scissors
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const restartButton = document.createElement("button");
const roundText = document.createElement("h3");
const resultText = document.createElement("h2");
const titleGame = document.createElement("h1");
const playerPointsText = document.createElement("h3");
const computerPointsText = document.createElement("h3");
const tiesText = document.createElement("h3");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
titleGame.textContent = "Play Rock Paper Scissors";
roundText.textContent = "Round Result: ";
resultText.textContent = "Final Result: ";
playerPointsText.textContent = "Player Points: ";
computerPointsText.textContent = "Computer Points: ";
tiesText.textContent = "Ties: ";
restartButton.textContent = "Restart";
restartButton.style.display = "hidden"; // Initially hidden

// Add event listeners to the buttons
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

restartButton.addEventListener("click", () => {
    restartGame();
});

// Append the buttons to the div


// Append the game elements to the container div
gameContainer.appendChild(titleGame);
gameContainer.appendChild(playerPointsText);
gameContainer.appendChild(computerPointsText);
gameContainer.appendChild(tiesText);
gameContainer.appendChild(roundText);
gameContainer.appendChild(resultText);
gameContainer.appendChild(restartButton);
gameContainer.appendChild(rockButton);
gameContainer.appendChild(paperButton);
gameContainer.appendChild(scissorsButton);
gameContainer.appendChild(restartButton);

// Append the div to the document body
document.body.appendChild(gameContainer);

// Variables to track points
let computerPoints = 0;
let playerPoints = 0;
let roundsPlayed = 0;
let ties = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundText.textContent = "Round Result: " + "It's a tie!";
        ties++;
        tiesText.textContent = "Ties: " + ties;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        roundText.textContent = "Round Result: " + "You Win!";
        playerPoints++;
        playerPointsText.textContent = "Player Points:" + playerPoints;
    } else {
        roundText.textContent = "Round Result: " + "You Lose!";
        computerPoints++;
        computerPointsText.textContent = "Computer Points: " + computerPoints;
    }

    roundsPlayed++;
    checkEndOfGame();
}

function checkEndOfGame() {
    if (roundsPlayed === 5) {
        endGame();
        restartButton.style.display = "visible"; // Show restart button after 5 rounds
        rockButton.style.visibility = "hidden"; // Hide rock button
        paperButton.style.visibility = "hidden"; // Hide paper button
        scissorsButton.style.visibility = "hidden"; // Hide scissors button
    }
}

function restartGame() {
    // Reset game variables and text content
    computerPoints = 0;
    playerPoints = 0;
    ties = 0;
    roundsPlayed = 0;
    playerPointsText.textContent = "Player Points: ";
    computerPointsText.textContent = "Computer Points: ";
    tiesText.textContent = "Ties: ";
    roundText.textContent = "Round Result: ";
    resultText.textContent = "Final Result: ";
    restartButton.style.display = "hidden"; // Hide restart button
    rockButton.style.visibility = "visible"; // Show rock button
    paperButton.style.visibility = "visible"; // Show paper button
    scissorsButton.style.visibility = "visible"; // Show scissors button
}

function endGame() {
    if (computerPoints > playerPoints) {
        resultText.textContent = "Final Result: " + "Computer Wins!";
    } else if (computerPoints === playerPoints) {
        resultText.textContent = "Final Result: " + "It's a tie! Nobody wins";
    } else {
        resultText.textContent = "Final Result: " + "Human Player Wins!";
    }
}

function getComputerChoice() {
    const computerAnswers = ["rock", "paper", "scissors"];
    return computerAnswers[Math.floor(Math.random() * computerAnswers.length)];
}
