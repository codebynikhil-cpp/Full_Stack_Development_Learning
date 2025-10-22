// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let firstCard = 5
let secondCard = 9
let sum = firstCard + secondCard

if(sum < 21){
    console.log("Do you want to draw a new card ?")
} else if(sum === 21) {
    console.log("yyeyey you got a BlackJack !!!")
}else console.log("you lost :(")