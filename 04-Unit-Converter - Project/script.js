//To start, create a variable named 'kelvin', and set it equal to 293.
const kelvin = 280;
console.log(`The temprature is ${kelvin} Kelvin today.`);

//Convert Kelvin to Celsius by subtracting 273 from the 'kelvin' variable:
let celsius = kelvin - 273;
console.log(`${kelvin} K is converted to Celcius as ${celsius}°C.`);

//Use the equation to calculate Fahrenheit:
let fahrenheit = celsius * (9 / 5) + 32;

//Round the number saved to 'fahrenheit':
fahrenheit = Math.round(fahrenheit);
console.log(`${celsius}°C is equals to ${fahrenheit}°F (Fahrenheit).`)

//Convert celsius to the Newton:
let newton = celsius*(33/100);

// Round down the Newton temperature:
newton = Math.floor(newton);
console.log(`${celsius}°C is equals to ${newton} Newton.`);

// project end