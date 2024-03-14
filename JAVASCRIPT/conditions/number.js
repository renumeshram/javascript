const input= require("readline-sync");
let n= input.questionInt("Enter a number:");

if(n==0){
    console.log("Zero");
}
if(n>0){
    console.log("Positive");
}
if(n<0){
    console.log("Negative");
}