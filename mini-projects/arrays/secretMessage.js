let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

console.log(`Length before the modification: ${secretMessage.length}`);
console.log(`Length before the modification: ${secretMessage}`);

// remove the last string of the array
secretMessage.pop();

// add the words to and Program as separate strings to the end of the array
secretMessage.push("to", "Program");

// Change the word easily to the word right
secretMessage[7] = "right";

// Remove the first string of the arra
secretMessage.shift();

// Add the string Programming to the beginning of the array
secretMessage.unshift("Programming");

// remove the strings get, right, the, first, time,, and replace them with the single string know,
// console.log(`BEFORE: ${secretMessage}`)
secretMessage.splice(6, 5, "know,");

console.log(`Length after the modification: ${secretMessage.length}`);
console.log(`Length after the modification: ${secretMessage}`);

console.log(secretMessage.join(" "));
