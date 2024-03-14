//take two numbers and six operations 

const input=require("readline-sync");
let x= input.questionInt("Enter a number: ");
let y= input.questionInt("Enter another number: ");
let a, b, c, d, e, f;
a= x+y;
b= x-y;
c= x*y;
d= x/y;
e= x%y;
f= Math.floor(x/y);   // for integer division we use Math.floor() function.

console.log("Addition: "+a+"\nSubraction: "+b+ "\nMultiplication: "+c+"\nDivision: "+d+"\nModulous Division: "+e+"\nInteger Division: ",f);

//take two numbers and calculate quotient and remainder when divided

let m= input.questionInt("Enter a number: ");
let n= input.questionInt("Enter another number: ");
console.log("Quotient ",Math.floor(m/n));
console.log("Remainder ", m%n);