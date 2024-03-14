const input= require("readline-sync");
let a= input.questionInt("Enter a number:");


if(a%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}