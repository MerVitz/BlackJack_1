let firstCard = 10
let secondCard = 4

let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let cardsEl = document.querySelector("#cards-el")
let sumEl =  document.getElementById("sum-el")
let takeMessage = document.querySelector("#message-el")

function startGame() {
    toMove()
}


function toMove() {
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
cardsEl.textContent = "Cards: " + cards[0] + " and " + cards[1]                                                                                          
}

function newcard() {
   let card = 8
   sum +=card
   cards.push(card)
   console.log(cards)
   toMove()
}
