/* --------------------------------- Default win/loss/ties count -------------------------------- */
var wins = 0;
var losses = 0;
var ties = 0;

/* ------------------------------------- Computer entry options ------------------------------------- */
var entryOptions = ["R", "P", "S"];

/* ------------------------------------- User entry options ------------------------------------- */
var userEntryOptions = ["R", "P", "S", "r", "p", "s"];

/* ------------------------------ Window alert that starts the game ----------------------------- */
window.alert("Click OK to start game");
// If statement that only enables game once user clicks "OK"
if (window.alert) {
  playGame();
}

/* --------------------------- Function that allows user to play game --------------------------- */
function playGame() {
  //   Users choice to play or not
  var userChoice = window.prompt("Please enter R, P or S");

  //   Converting userChoice to upper case for easier comparison
  if (userChoice !== null) {
    userChoice = userChoice.toUpperCase();
  }

  //   If statement to determine if user plays or not
  if (!userChoice) {
    console.log("No Play");
    return;
  }

  //   Ensure that user only selects available options
  if (!userEntryOptions.includes(userChoice)) {
    console.log("User input is not accepted!");
    window.alert("Please select between R, P, and S only!");
    return;
  }

  //  Computer choice
  var pcIndex = Math.floor(Math.random() * entryOptions.length);
  var computerChoice = entryOptions[pcIndex];

  window.alert("The computer chose " + computerChoice);

  //   Win, loss or draw calculator
  if (computerChoice === userChoice) {
    console.log("tie");
    window.alert("It's a Tie");
    ties++;
  } else if (
    (computerChoice === "R" && userChoice === "S") ||
    (computerChoice === "P" && userChoice === "R") ||
    (computerChoice === "S" && userChoice === "P")
  ) {
    console.log("loss");
    window.alert("You lose ;(");
    losses++;
  } else {
    console.log("win");
    window.alert("You win!");
    wins++;
  }

  //   Wins, Losses and Ties live calculator
  console.log("Stats will be displayed to user.");

  window.alert(
    "Stats:\nwins: " + wins + "\nLosses: " + losses + ",\nTies: " + ties
  );
  
  /* --------------------------------- Play again option for user --------------------------------- */
  var playGameAgain = window.confirm("Do you want to play the game again?");

  // Instruction if user selects "OK" to play game again
  if (playGameAgain) {
    playGame();
  }
}
