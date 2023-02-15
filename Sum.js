let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
// To check if the player has won 
let hasBlackJack = false
//for checking  whrether player is still on the game or they lost
let isAlive = true

///Beginning of the statements
if (sum<= 20) {
    console.log("Do you want to draw new card?")
    isAlive =true
}
else if(sum === 21) {
    console.log("Wohooo! You've got Blackjack!")
    hasBlackJack = true
}
else{
    console.log("You're out of the game!")
    isAlive = true
}
console.log("You are still in the game? "+ isAlive)
console.log("You won? "+ hasBlackJack)
//CASH OUT!