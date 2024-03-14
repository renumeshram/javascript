//check leap year

const input= require("readline-sync");
let y= input.questionInt("Enter Year:");

if((y%400==0)||(y%4==0)&&(y%100!=0)){
    console.log("Leap year!");
}
else{
    console.log("Not a leap year!");
}