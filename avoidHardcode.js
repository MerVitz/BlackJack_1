

let player = {
    names: "Amakalu",
    coins: 50
    }



let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cardsEl = document.querySelector("#cards-el")
let sumEl =  document.getElementById("sum-el")
let takeMessage = document.querySelector("#message-el")
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.names + ": $" + player.coins




function getRandomCard() {
let num = Math.floor( Math.random()*13 ) + 1
if (num === 1 ) {
    return 11
} else if  (num > 10) {
    return 10
} else {
    return num
}
}


function startGame() {
    isAlive = true
let firstcard = getRandomCard()
let secondcard = getRandomCard()
cards = [firstcard,secondcard]
sum = firstcard + secondcard


    toMove()
}


function toMove() {
  
    cardsEl.textContent = "Cards: "  //+ cards[0] + " and " + cards[1]  
for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " + "
}
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


function newcard() {
if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum +=card
    cards.push(card)
    console.log(cards)
    toMove()
}

   
}
