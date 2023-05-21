/* --------------------------------- Default win/loss/ties count -------------------------------- */
var wins = 0;
var losses = 0;
var ties = 0;

/* ------------------------------------- Computer entry options ------------------------------------- */
var entryOptions = ["R", "P", "S"];

/* --------------------------------- Users choice to play or not -------------------------------- */
var userChoice = window.prompt("Please enter R, P or S");

if (!userChoice) {
    console.log("No Play");
}

/* --------------------------------------- Computer choice -------------------------------------- */
var pcIndex = Math.floor(Math.random() * entryOptions.length)
var computerChoice = entryOptions[pcIndex];

window.alert("The computer chose " + computerChoice)




