// take input and print the last digit of that number

const input=require("readline-sync");

let num=input.questionInt("Enter any number ");
console.log("Last digit ",num%10);