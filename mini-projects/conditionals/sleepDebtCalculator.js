/*
The program will determine the actual and ideal hours of sleep for
each night of the last week.

Finally, it will calculate, in hours, how far you are from
your weekly sleep goal.
*/

let getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 7;
      break;
    case "tuesday":
      return 5;
      break;
    case "wednesday":
      return 4;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 6;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 7;
      break;
  }
};

// Function to calculate overall hours slept in one week
const getActualSleepHours = () => {
  let totalHours =
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("thursday") +
    getSleepHours("Friday") +
    getSleepHours("SaTurdAy") +
    getSleepHours("sunday");
  return totalHours;
};

// Function to calculate ideal sleep hours
const getIdealSleepHours = (idealHours) => idealHours * 7;

console.log(`Actual Sleep Hours: ${getActualSleepHours()}`);
console.log(`Desired Sleep Hours: ${getIdealSleepHours(8)}`);

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log("Great job! You got the perfect amount of sleep :)");
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `Oh-oh... You need to sleep more! You slept ${
        idealSleepHours - actualSleepHours
      } hours less than your ideal sleep hours!`
    );
  } else {
    console.log(
      `Wow! You got more rest than needed! You slept for ${
        actualSleepHours - idealSleepHours
      } hours more than needed!`
    );
  }
};

calculateSleepDebt();
