alert("Please do not make noise in class");
console.log("I am 22 years old"); 
console.log("Hi i am Jenny Rajak");
console.log(document.getElementById("paragraph").innerHTML); 
console.log(typeof document);
document.getElementById("paragraph").innerHTML="<h1>HELLO</h1>";
document.getElementById("paragraph").style.cssText="color:blue; background:red";
// document.getElementById("paragraph").style.color="blue";
// document.getElementById("paragraph").style.background="red";

const age = 100;
// age = 12;
var age1 = 10;
age1= 13;
let age3 = 10;
age3 = 23;

console.log(typeof age);
console.log(typeof age1);
console.log(typeof age3);

var name;
var name ="Jenny";
console.log(typeof name);

console.log(prompt("Enter a name:"));
// document.getElementById("message").innerHTML= "Hello"+" "+ "my name is:"+" "+name+ " "+  "I am"+ " "+age +" "+"years old"+"!";
document.getElementById("message").innerHTML=`Hello my name is ${name}, my age is ${age}`;