/* 
TASK:
Convert your age from “human years” to “dog years”:
    The first two years of a dog’s life count as 10.5 dog years each.
    Each year following equates to 4 dog years.
With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.
*/

// Creating a variable to store my age as a number
const myAge = 21;
// Creating a variable to store the first two years of a dog life
let earlyYears = 2;

// Making calculations
earlyYears *= 10.5;
let lateYears = myAge - 2;
lateYears *= 4;

// console.log(earlyYears);
// console.log(lateYears);

// Calculating my age in dog years
let myAgeInDogYears = earlyYears + lateYears;

// Creating a variable with the string and make every word lower case.
const myName = "Polina".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
