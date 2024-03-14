//take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.

const input= require("readline-sync");
let n= input.questionInt("Enter a number:");

if(n%2==0){
    console.log(n);
}
else{
    console.log(n*2);
}