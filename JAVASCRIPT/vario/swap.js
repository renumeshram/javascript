//swapping inputs without using third variable

const input=require("readline-sync");
let x= input.questionInt("Enter a number:");
let y= input.questionInt("Enter another number:");

x= x+y;
y= x-y;
x= x-y; 
 
console.log("After Swapping:");
console.log(x);
console.log(y);