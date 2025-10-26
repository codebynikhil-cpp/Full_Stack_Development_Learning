let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    ulEl.innerHTML += "<li>" + inputEl.value + "</li>"
    inputEl.value = ""
})

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     // Clear out the input field
//     renderLead()
//     inputEl.value = ""
// })

// function renderLead() {
//     let listItem = "<li>" + inputEl.value + "</li>"
//     ulEl.innerHTML += listItems  
// }