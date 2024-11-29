let humanChoice = ""; // Store the human's choice
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let round = 0;
let totalRounds = 5;

// Function to generate the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Function to play a single round
function playRound(human, computer) {
    if (human === computer) {
        return "It's a tie!";
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        humanScore++;
        return `You win! ${human} beats ${computer}.`;
    } else {
        computerScore++;
        return `You lose! ${computer} beats ${human}.`;
    }
}

// Function to update the round result
function updateResult(message) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>${message}</p>
        <p>Scores -> You: ${humanScore}, Computer: ${computerScore}</p>
        <p>Round: ${round}/${totalRounds}</p>
    `;
}

// Start game setup
document.getElementById("start-game").addEventListener("click", () => {
    const roundsInput = document.getElementById("rounds").value;
    totalRounds = parseInt(roundsInput, 10) || 5;

    if (totalRounds <= 0 || isNaN(totalRounds)) {
        alert("Please enter a valid number of rounds (minimum 1).");
        return;
    }

    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";
});

// Add event listeners to choice buttons
document.getElementById("rock").addEventListener("click", () => {
    humanChoice = "rock";
    document.getElementById("play-round").disabled = false;
});

document.getElementById("paper").addEventListener("click", () => {
    humanChoice = "paper";
    document.getElementById("play-round").disabled = false;
});

document.getElementById("scissors").addEventListener("click", () => {
    humanChoice = "scissors";
    document.getElementById("play-round").disabled = false;
});

// Add event listener to the Play Round button
document.getElementById("play-round").addEventListener("click", () => {
    if (!humanChoice) {
        alert("Please select Rock, Paper, or Scissors before playing!");
        return;
    }

    // Increment the round counter
    round++;

    // Generate computer's choice and play the round
    computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    updateResult(result);

    // Reset human choice and disable the Play Round button
    humanChoice = "";
    document.getElementById("play-round").disabled = true;

    // Check if all rounds are completed
    if (round === totalRounds) {
        let finalMessage;
        if (humanScore > computerScore) {
            finalMessage = "Congratulations! You are the overall winner!";
        } else if (computerScore > humanScore) {
            finalMessage = "Sorry! The computer is the overall winner!";
        } else {
            finalMessage = "It's a tie game!";
        }

        // Display the final result in a popup
        alert(`Game Over!\n\n${finalMessage}\n\nFinal Scores -> You: ${humanScore}, Computer: ${computerScore}`);
        resetGame();
    }
});

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    humanChoice = "";
    computerChoice = "";
    totalRounds = 5;
    document.getElementById("setup").style.display = "block";
    document.getElementById("game").style.display = "none";
    document.getElementById("result").innerHTML = "";
    document.getElementById("play-round").disabled = true;
}
