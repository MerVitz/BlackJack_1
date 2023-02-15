let firstCard = 11
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let sumEl =  document.getElementById("sum-el")
// Can use another method other than getElementbyid;
// the querySelector... But one should be more specific
//check below
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
}
