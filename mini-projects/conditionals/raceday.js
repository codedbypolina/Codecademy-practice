/* 
TASK:
There are adult runners (over 18 years of age) and youth runners
(under 18 years of age). They can register early or late.
Runners are assigned a race number and start time based
on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
*/

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;
// console.log("Before: " + raceNumber); - Check if code works properly

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}
// console.log("After: " + raceNumber); - Check if code works properly
if (runnerAge > 18 && registeredEarly) {
  console.log(`Runner #${raceNumber}, your race will start at 9:30am`);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`Runner #${raceNumber}, late adults run at 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration)`);
} else {
  console.log(`See the registration desk`);
}
