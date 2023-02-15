let firstCard = 11
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


let cardsEl = document.querySelector("#cards-el")
let sumEl =  document.getElementById("sum-el")
let takeMessage = document.querySelector("#message-el")

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
sumEl.textContent = "Sum: " + sum    
cardsEl.textContent = "Cards: " + firstCard + " and " + secondCard                                                                                           
}

function newcard() {
    console.log("Drawing a new card from the deck")
}
