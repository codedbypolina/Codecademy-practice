/*
Take a phrase like ‘turpentine and turtles’ and translate it into its 
“whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
*/

let input = "turpentine and turtle";
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

// A loop that iterates through each letter of the input variable text
for (let i = 0; i < input.length; i++) {
  // if statement that checks if each letter in the input string is equal to 'e' or "u". If so, add input[i] to the resultArray.
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }

  // Created a nested for loop. Then made the inner loop to iterate through the vowels array each time the outer loop runs.
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

// Check the results
console.log(resultArray);
// Join strings together and make them uppercase
let resultString = resultArray.join("").toUpperCase();

// Check the final result
console.log(resultString);
