let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

largeCountries.shift()
largeCountries.unshift("china")
largeCountries.pop()
largeCountries.push("Pakistan")
console.log(largeCountries)