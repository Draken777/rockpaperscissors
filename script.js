
function getComputerChoice() {
    const random = Math.floor(Math.random()*3);
    if(random === 0){
        return "rock";
    }
    else if(random ===1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let user = prompt("Enter rock, paper or scissors: ").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(user)) {
        user = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return user;
}

function playRound(user, computer) {
    user = user.toLowerCase();

    if(user === computer) {
        console.log("Tie!");
    }
    else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        console.log("You Win! ");
        humanScore++;
    }
    else {
        console.log("You Lose! ")
        computerScore++;
    }
}

function playGame() {
    
    humanScore = 0;
    computerScore = 0;

    console.log("Welcome to Rock, Paper, Scissors!");
    console.log("The game will be played over 5 rounds.");

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Scores -> You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer is the overall winner!");
    } else {
        console.log("It's a tie game!");
    }
}

let humanScore =0;
let computerScore =0;

playGame();