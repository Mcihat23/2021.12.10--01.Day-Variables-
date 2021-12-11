let massMark = 75;
let massJohn = 75;
let heightMark = 1.80;
let heightJohn = 1.70;

let BMIJohn = massJohn/(heightJohn*heightJohn);
let BMIMark = massMark/(heightMark*heightMark);

console.log(BMIJohn);
console.log(BMIMark);

BMIJohn = Math.floor(BMIJohn);
console.log(`John BMI ${BMIJohn}`);

BMIMark = Math.floor(BMIMark);
console.log(BMIMark);

const higherBMI = BMIJohn > BMIMark;
console.log(higherBMI);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is highen than John")
} else {
    console.log("John's BMI is highen than Mark")
}