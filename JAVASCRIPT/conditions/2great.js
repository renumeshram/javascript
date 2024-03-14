//take two numbers and print the greatest

const input= require("readline-sync");
let A= input.questionInt("Enter a number:");
let B= input.questionInt("Enter another number:");

if(A>B){
    console.log("Greatest Number:",A);
}
else{
    console.log("Greatest Number:",B);
}
