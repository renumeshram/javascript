// take two numbers and find out the largest number that is less than A and can be evenly divided by B

const input= require("readline-sync");
let A= input.questionInt("Enter a number:");
let B= input.questionInt("Enter another number:");

let C;
C= (Math.floor(A/B)*B);
console.log("Largest number which is less than "+A+" and evenly divisible by "+B+" is:",C);