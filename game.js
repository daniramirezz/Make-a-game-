//by putting in the get element by id we are allowing java script to refrence 
// the stuf from the html by the ID or the span that we gave it in the html file
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
// could give it a class name as button and pick it out that way, if i add another button, i should give it another class name 
const possibleChoice = document.querySelectorAll('button')

// we save userChoice to the global so we can access it from anywhere 
let userChoice
let computerChoice
let result



// we use add event listener to listen for a click
// once we click we want it to pass through a function 
// use e for event 
// whatever we click we want to get the ID 
// and save that to user choice 

//Essentially everytime we click we go through all these functions 
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice= e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

// We want the computer to get a random number 
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1

// here we are assigning each number a value 1 is rock, 2 scissors, and 3 paper using if statement 
    if (randomNumber === 1) {
        computerChoice= 'rock'
    }
    if (randomNumber === 2) {
        computerChoice= 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice= 'paper'
    }
    //this statement allows the user to see what the computer chose 
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice ){
        result = "You Tied! "
    }
    if (computerChoice === 'rock' && userChoice === "paper" ){
        result = "You win! "
    }
    if (computerChoice === 'rock' && userChoice === "scissors" ){
        result = "You Loose! "
    }
    if (computerChoice === 'paper' && userChoice === "scissors" ){
        result = "You Win! "
    }
    if (computerChoice === 'paper' && userChoice === "rock" ){
        result = "You loose! "
    }
    if (computerChoice === 'scissors' && userChoice === "rock" ){
        result = "You win! "
    }
    if (computerChoice === 'scissors' && userChoice === "paper" ){
        result = "You loose! "
    }
    resultDisplay.innerHTML = result
}