/* --------------------------------- Default win/loss/ties count -------------------------------- */
var wins = 0;
var losses = 0;
var ties = 0;

/* ------------------------------------- Computer entry options ------------------------------------- */
var entryOptions = ["R", "P", "S"];

/* ------------------------------------- User entry options ------------------------------------- */
var userEntryOptions = ["R", "P", "S", "r", "p", "s"];

/* --------------------------------- Users choice to play or not -------------------------------- */
var userChoice = window.prompt("Please enter R, P or S");

userChoice = userChoice.toUpperCase();

if (!userChoice) {
  console.log("No Play");
}

/* --------------------------------------- Computer choice -------------------------------------- */
var pcIndex = Math.floor(Math.random() * entryOptions.length);
var computerChoice = entryOptions[pcIndex];

window.alert("The computer chose " + computerChoice);

/* ----------------------- Ensure that user only selects available options ---------------------- */
if (!userEntryOptions.includes(userChoice)) {
  console.log("Please select between R, P, and S only!");
}

/* -------------------------------- Win, loss or draw calculator -------------------------------- */
if (computerChoice === userChoice ) {
   console.log("tie"); 
} else if (
    (computerChoice === "R" && userChoice === "S") ||
    (computerChoice === "P" && userChoice === "R") ||
    (computerChoice === "S" && userChoice === "P") 
) {
   console.log("loss"); 
} else {
    console.log("win");
} 