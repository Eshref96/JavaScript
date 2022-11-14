// A variable is a container for storing data
// A variable behaves as if it was the value that it contains 

// Two steps:
// 1. Declare (var, let, const)
// 2. Assigment (= assigment operator)

let firstname = "Eshref"; //strings
let age = 18; //numbers
let student = true; //booleans
let Text = "jona";

age = age + 1;


console.log("Hello", firstname)
console.log("You are", age, "years old");
console.log("You are Enrolld =",  student);

document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
