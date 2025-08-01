// ==========================
// PART 1: Validating 4 Numbers
// ==========================

// Declaring 4 numbers
let n1 = 11;
let n2 = 13;
let n3 = 12;
let n4 = 14;

// Validation 1: Sum to 50
let sum = n1 + n2 + n3 + n4;
let isSum50 = sum === 50;

// Validation 2: At least 2 odd numbers
let oddCount = 0;
if (n1 % 2 !== 0) oddCount++;
if (n2 % 2 !== 0) oddCount++;
if (n3 % 2 !== 0) oddCount++;
if (n4 % 2 !== 0) oddCount++;
let has2Odds = oddCount >= 2;

// Validation 3: No number over 25
let allBelow25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

// Validation 4: All unique
let allUnique = (new Set([n1, n2, n3, n4])).size === 4;

// Final validation
let isValid = isSum50 && has2Odds && allBelow25 && allUnique;
console.log(`The four numbers are valid according to the provided criteria: ${isValid}`);

// More checks
let divisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`All numbers divisible by 5? ${divisibleBy5}`);

let isFirstGreater = n1 > n4;
console.log(`Is the first number greater than the last? ${isFirstGreater}`);

let chain = ((n2 - n1) * n3) % n4;
console.log(`Result of the arithmetic chain is: ${chain}`);

// Change isOver25 logic without using !
let isUnderOr25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`All numbers are 25 or less: ${isUnderOr25}`);


// PART 2: Road Trip Simulation

// Constants
const totalDistance = 1500;
const budget = 175;
const costPerGallon = 3;

// Simulation speeds
const scenarios = [
  { speed: 55, mpg: 30 },
  { speed: 60, mpg: 28 },
  { speed: 75, mpg: 23 }
];

scenarios.forEach(({ speed, mpg }) => {
  const gallons = totalDistance / mpg;
  const cost = gallons * costPerGallon;
  const time = totalDistance / speed;
  const affordable = cost <= budget;

  console.log(`\n----- TRIP AT ${speed} MPH -----`);
  console.log(`You will need ${gallons.toFixed(2)} gallons of fuel.`);
  console.log(`It will cost $${cost.toFixed(2)} in fuel.`);
  console.log(`Trip will take ${time.toFixed(2)} hours.`);
  console.log(`Is your $${budget} budget enough? ${affordable}`);
});


// PART 3: Error Handling

try {
  const startPlants = 100;
  const weeks = 10;
  const plantSpace = 0.8;
  const PI = 3.1415;
  const radius = 5;
  const gardenArea = PI * radius * radius;

  const plantsAfter10Weeks = startPlants * 2 ** weeks;
  const spaceNeeded = plantsAfter10Weeks * plantSpace;

  if (spaceNeeded > gardenArea) {
    throw new Error("Not enough space in the garden for all the plants after 10 weeks.");
  }

  console.log("Plants fit perfectly after 10 weeks.");

} catch (error) {
  console.log("ERROR:", error.message);
}
