let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


function random(){
    let randomInd = Math.floor(Math.random*hands.length)
    return hands[randomInd]
}
console.log(random())