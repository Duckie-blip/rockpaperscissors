



function getComputerChoice() {
    let rand = Math.random()
    if (rand < 0.33)
        return "rock"
        
    if (rand <= 0.66) {
        return "paper"
    }
    else {
        
        return "scissors"
    }

}


let choice = parseInt(prompt("input 1: rock, 2: scissors, 3: paper"))
function getHumanChoice(choice) {
    if (choice === 1)
        return "rock"
    if (choice === 2) {
        return "scissors"
    }
    if (choice === 3){
        return "paper"
    }
}
var humanScore = 0
var computerScore = 0

function playRound(getHumanChoice, getComputerChoice) {

    if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
        humanScore ++ 
        console.log("You win! Rock beats scissors")
    } else if (getHumanChoice === "scissors" && getComputerChoice === "paper") {
        humanScore ++ 
        console.log("You win. scissors beats paper")
    } else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
        humanScore ++ 
        console.log("You win! paper beats rock")

    } else if (getHumanChoice === "rock" && getComputerChoice === "paper") {
        computerScore ++
        console.log("you lose!")
    } else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
        computerScore ++
        console.log("you lose!")
    } else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
        computerScore ++
        console.log("you lose")
    } else if (getHumanChoice === getComputerChoice) {
        console.log("Tie")
    } 
    console.log("Score: Human " + humanScore + " - " + computerScore + " Computer")

}


const humanSelection = getHumanChoice(choice);
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection)

function playGame() {
    for (let i = 0; i < 5; i++) {
        let choice = parseInt(prompt("Round " + (i+1)))
        const humanSelection = getHumanChoice(choice);
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)

    }
    

}


playGame()