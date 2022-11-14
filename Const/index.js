// const = a variable that cant't be changed

const PI = 3.14159
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//pi = 420.69;

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);