/* 
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/

// Check user choice and return its value if it is correct
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase(); // Make input lower case so we can accept text input with different capitalizations
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    //console.log(userInput)
    return userInput;
  } else if (userInput === "bomb") {
    return userInput;
  } else {
    console.log("Error");
  }
};
// Randomly get computer's choice by using Math.random and switch statement to assign number values to string values
const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3); // get a random integer between 0 and 2
  switch (number) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    default:
      return "scissors";
      break;
  }
};
// Determine who is the winner of the game
let determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  } else {
    return "User won thanks to bomb!";
  }
};
// "Main" function of the game where we put everything together
playGame = () => {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log(
    `User's choice is ${userChoice}\nComputer's choice is ${computerChoice}`
  );
  let winner = determineWinner(userChoice, computerChoice);
  console.log(winner);
};

playGame(); // call the "main" function

// Check if code works properly
// getUserChoice("rOck");
// getUserChoice("ferret");
//console.log(getComputerChoice());
