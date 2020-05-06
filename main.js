let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 18;
if (age > 18 && registeredEarly) {
console.log(true);
} else;
console.log(raceNumber + 1000);
if (age > 18 && registeredEarly) {
console.log(raceNumber + ' Race start at 9:30am');} else if (age > 18 && !registeredEarly) {
  console.log(raceNumber + ' Race start at 11am');
} else if(age < 18) {
  console.log(raceNumber +' Race start at 12:30pm');
} else ;
console.log('see registracion desk')
