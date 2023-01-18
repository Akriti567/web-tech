alert("Please do not make noise in class");
console.log("I am 17 years old");
console.log("Hi! I am Akriti Kumari Dev");
console.log(document.getElementById("paragraph").innerHTML);
console.log(typeof document);
document.getElementById("paragraph").innerHTML="<h1>Hello</h1>";
document.getElementById("paragraph").style.cssText="color:purple; background:green";
//document.getElementById("paragraph").style.color="purple";
//document.getElementById("paragraph").style.backgroundColor="yellow";
const age = 10;
//age=12;
var age1= 10;
age1=13;
let age2= 10;
age2=14;
console.log( typeof age);
console.log( typeof age1);
console.log(typeof age2);

var name;
var name="Akriti";
console.log(name);

console.log(prompt("Enter a name:"));
document.getElementById("message").innerHTML="Hello"+""+"my name is:"+""+name+""+"I am"+age+""+"years old"+"!";