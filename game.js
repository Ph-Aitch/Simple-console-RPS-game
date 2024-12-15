const choice = ["Rock", "Paper", "Scissors"]
// Scores and rounds number Setup
let humanScore = 0
let humanGames = 0
let computerScore = 0
let computerGames = 0
let round = 5

function getComputerChoice() { // to get random choice for the computer
    const rnd = Math.floor(Math.random() * choice.length)
    return choice[rnd]
}

function getHumanChoice() { // to get a valid input only from the user
    while (true) {
        try {
            const input = prompt(`round : ${i}\nchoose rock, paper or scissors`)
            const regx = /^rock$|^paper$|^scissors$/gim //this RegExp is an awesome thing to test input data
            if (regx.test(input.trim())) {
                return input.toLowerCase().trim()
            } else {
                throw new Error("you have to choose to continue");
            }
        } catch (err) {
            console.error(err);
        }
    }
} // This makes the user unable to press cancel button for the prompt while the game is running which is bad i know.


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice.toLowerCase()) {
        console.log(`human choice: ${humanChoice}\ncomputer choice: ${computerChoice}\nround result: Tie round! rock beats scissors\nhuman score: ${humanScore}  computer score : ${computerScore} round : ${i}`)
    } else if (humanChoice === "rock" && computerChoice.toLowerCase() === "scissors") {
        humanScore++
        console.log(`human choice: ${humanChoice}\ncomputer choice: ${computerChoice}\nround result: You win! rock beats scissors\nhuman score: ${humanScore}  computer score : ${computerScore} round : ${i}`)
    } else if (humanChoice === "rock" && computerChoice.toLowerCase() === "paper") {
        computerScore++
        console.log(`human choice: ${humanChoice}\ncomputer choice: ${computerChoice}\nround result: You lose! paper beats rock\nhuman score: ${humanScore}  computer score : ${computerScore} round : ${i}`)
    } else if (humanChoice === "paper" && computerChoice.toLowerCase() === "rock") {
        humanScore++
        console.log(`human choice: ${humanChoice}\ncomputer choice: ${computerChoice}\nround result: You win! paper beats rock\nhuman score: ${humanScore}  computer score : ${computerScore} round : ${i}`)
    } else if (humanChoice === "paper" && computerChoice.toLowerCase() === "scissors") {
        computerScore++
        console.log(`human choice: ${humanChoice}\ncomputer choice: ${computerChoice}\nround result: You lose! scissors beats paper\nhuman score: ${humanScore}  computer score : ${computerScore} round : ${i}`)
    } else if (humanChoice === "scissors" && computerChoice.toLowerCase() === "paper") {
        humanScore++
        console.log(`human choice: ${humanChoice}\ncomputer choice: ${computerChoice}\nround result: You win! scissors beats paper\nhuman score: ${humanScore}  computer score : ${computerScore} round : ${i}`)
    } else {
        computerScore++
        console.log(`human choice: ${humanChoice}\ncomputer choice: ${computerChoice}\nround result: You lose! rock beats scissors\nhuman score: ${humanScore}  computer score : ${computerScore} round : ${i}`)
    }
    // logic of rock paper scissors game and logging the result to the console
}

function reset() { 
    i = 1 
    humanScore = 0
    computerScore = 0
    let restart = confirm("would you love to play another game")
    if (restart) {
        playGame()
    } else {
        return
    }
    // reset function to start the game all over again if u want
}
let i = 1
function playGame() {
    if (i !== round) {
        while (i <= round ) {
            const humanChoice = getHumanChoice().trim().toLowerCase()
            const computerChoice = getComputerChoice()
            playRound(humanChoice, computerChoice)
            i++
        }
    }
    if (humanScore === computerScore) {
        console.log(`\n\nhuman score: ${humanScore}  computer score : ${computerScore}\nIt's a Tie game.`);
        reset()
    } else if (humanScore > computerScore) {
        console.log(`\n\nhuman score: ${humanScore}  computer score : ${computerScore}\nYou WON the game! YaaaaaY.`)
        humanGames++
        console.log(`computer won: ${computerGames} games\nhuman won: ${humanGames} games.`);
        reset()
    } else {
        console.log(`\n\nhuman score: ${humanScore}  computer score : ${computerScore}\nYou LOST the game!, computer won.`)
        computerGames++
        console.log(`computer won: ${computerGames} games\nhuman won: ${humanGames} games.`);
        reset()
    }
    // logic to play the game for multiple rounds and set the final result
}

playGame() //Enjoy!, i guess XD.