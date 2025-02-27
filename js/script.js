const buttons = document.querySelectorAll(".btn")
const result = document.querySelector(".result")
const score = document.querySelector(".score")
const main = document.querySelector(".main")

let userScore = 0
let computerScore = 0

let computerOptions = ["rock", "paper", "scissors"]

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let userChoice = button.getAttribute('data-btn').toLowerCase()
        let randomIndex = Math.floor(Math.random() * computerOptions.length)
        let computerChoice = computerOptions[randomIndex]

        let winner = operation(userChoice, computerChoice)

        result.innerHTML = `Your Choice: ${userChoice}
                            <br/>
                            Computer Choice: ${computerChoice}
                            <br/>
                            Overall Result: ${winner}`

        score.innerHTML = `<b>Score:</b> You ➡ <b>${userScore}</b> - <b>${computerScore}</b> ⬅ computer`

        if(userScore >= 5) {
            main.innerHTML = `<h1 class="font-bold text-4xl mb-3">Game Over!</h1>
                            <p class="text-2xl mb-3">
                                <b>User Score:</b> ${userScore}
                                <br/>
                                <b>Computer Score:</b> ${computerScore}
                            </p>
                            <p class="text-green-300 font-bold text-2xl">You Won!</p>`
        } else if(computerScore >= 5) {
            main.innerHTML = `<h1 class="font-bold text-4xl mb-3">Game Over!</h1>
                            <p class="text-2xl mb-3">
                                <b>User Score:</b> ${userScore}
                                <br/>
                                <b>Computer Score:</b> ${computerScore}
                            </p>
                            <p class="text-red-300 font-bold text-2xl">Computer Won!</p>`
        }
    })
})

function operation(userChoice, computerChoice) {
    if(userChoice == computerChoice) {
        return "Match draw"
    } else if(
        userChoice == "rock" && computerChoice == "scissors" || 
        userChoice == "paper" && computerChoice == "rock" || 
        userChoice == "scissors" && computerChoice == "paper"
    ) {
        userScore++
        return "You won"
    } else {
        computerScore++
        return "Computer won"
    }
}