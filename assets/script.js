/* --------------------------------- Default win/loss/ties count -------------------------------- */
var wins = 0;
var losses = 0;
var ties = 0;

/* ------------------------------------- Computer entry options ------------------------------------- */
var entryOptions = ["R", "P", "S"];

/* --------------------------------- Users choice to play or not -------------------------------- */
var userChoice = window.prompt("Please enter R, P or S");
    if (!userChoice) {
        return;
    }

