/* 
TASK:
In this project we will build a Magic Eight Ball using control flow in JavaScript.
The user will be able to input a question, then our program will output a random fortune.
*/

let userName = "";
userName === "Polina" ? console.log("Hey Polina!") : console.log("Hey!");
let userQuestion = "Will I get a ferret at some point in my life?";
console.log(`Your question is the following: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
//console.log(randomNumber)
let eightBall = "";

// Use of SWITCH STATEMENT
switch (randomNumber) {
  case 0:
    eightBall = "Cannot predict now";
    break;
  case 1:
    eightBall = "It is certain";
    break;
  case 2:
    eightBall = "It is decidedly so";
    break;
  case 3:
    eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

/*
Use of IF /IF...ELSE/ ELSE
if(randomNumber = 0){
  eightBall = "Cannot predict now";
} else if (randomNumber = 1){
  eightBall = "It is certain";
} else if (randomNumber = 2){
  eightBall = "It is decidedly so";
} else if (randomNumber = 3){
  eightBall = "Reply hazy try again";
} else if (randomNumber = 4){
  eightBall = "Do not count on it";
} else if (randomNumber = 5){
  eightBall = "My sources say no";
} else if (randomNumber = 6){
  eightBall = "Outlook not so good";
} else {
  eightBall = "Signs point to yes";
}
*/

console.log(eightBall);
