//taking temperature and converting to another unit.

const input=require("readline-sync");

let c= input.questionInt("Enter temperature in celsius:");

let f;
f= ((9*c)/5)+32;
console.log("Temperature in Fahrenhite: ",f);