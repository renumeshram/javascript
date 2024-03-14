//print date-of-birth
let date= "22";
let month= "September";
let year= "2002";
console.log(date);
console.log(month);
console.log(year);

//taking input from user
const input=require("readline-sync");
let num= input.questionInt("Enter a number");
console.log("Number you have entered is ",num);

//taking two inputs and swapping them
let a =input.questionInt("Enter 1st value:");
let b =input.questionInt("Enter 2nd value:");
let c;
c= a;
a= b;
b= c;
console.log("After swapping:");
console.log(a);
console.log(b);

//taking string as input(you just write input.question)
let m =input.question("Enter month:");
console.log(m);