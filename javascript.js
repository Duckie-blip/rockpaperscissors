
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

    if (humanScore === 5) {
        console.log("Nice! You win!")
        winnerDiv.textContent = "Nice! You win!"
        humanScore = 0
        computerScore = 0
    } else if (computerScore === 5) {
        console.log("You lose!")
        winnerDiv.textContent = "You lose!"
        humanScore = 0
        computerScore = 0
    }
    scoreDiv.textContent = "Score: Human " + humanScore + " - " + computerScore + " Computer"
}


const buttonRock = document.createElement("button")
const buttonPaper = document.createElement("button")
const buttonScissors = document.createElement("button")

buttonPaper.textContent = "Paper"
buttonRock.textContent = "Rock"
buttonScissors.textContent = "Scissors"


buttonRock.addEventListener("click", function() {
    playRound("rock", getComputerChoice())
})

buttonPaper.addEventListener("click", function() {
    playRound("paper", getComputerChoice())
})

buttonScissors.addEventListener("click", function() {
    playRound("scissors", getComputerChoice())
})


const div = document.createElement("div")
div.appendChild(buttonRock)
div.appendChild(buttonPaper)
div.appendChild(buttonScissors)

const scoreDiv = document.createElement("div")
scoreDiv.textContent = "Score: Human " + humanScore + " - " + computerScore + " Computer"
div.appendChild(scoreDiv)

document.body.appendChild(div)

const winnerDiv = document.createElement("div")
div.appendChild(winnerDiv)