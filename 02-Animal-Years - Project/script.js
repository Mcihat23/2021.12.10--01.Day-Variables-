//Ask age of the user:
let myAge = prompt("What's your age?");
console.log(`I am ${myAge} years old.`);

//The first two years of a dog’s life count as 10.5 dog years each:
let earlyYears = 2;
earlyYears = earlyYears*10.5;

//Each year following equates to 4 dog years:
let laterYears = myAge-2; 
laterYears = laterYears*4;

//Calculate the age of the user as dog years:
let myAgeInDogYears = earlyYears+laterYears;

//share in console:
console.log(`My age in dog years: ${myAgeInDogYears}`)

//Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
let myName = "MUSTAFA".toLowerCase();
console.log(`My name is ${myName}`);

//Write an alert that displays your name and age in dog years. 
alert(`${myName} is ${myAge} years old as human. However, he is ${myAgeInDogYears} years old as a dog.`);