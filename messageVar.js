let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
// Declaring and assing our new variable that is empty 

let message = ""
// lets repace the new var with console.log
if (sum<= 20) {
    message = ("Do you want to draw new card?")
    isAlive =true
}
else if(sum === 21) {
    message = ("Wohooo! You've got Blackjack!")
    hasBlackJack = true
}
else{
    message = ("You're out of the game!")
    isAlive = true
}
// lets log it out!

console.log(message)