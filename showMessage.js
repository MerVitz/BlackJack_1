let firstCard = 4
let secondCard = 16
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


let takeMessage = document.getElementById("message-el")
function startGame() {
    
if (sum <= 20) {
    message = ("Do you want to draw new card?")
}
else if(sum === 21) {
    message = ("You've got Blackjack!")
    hasBlackJack = true
}
else{
    message = ("You're out of the game!")
    isAlive = false
}
takeMessage.textContent = message                                                                                                 
}

