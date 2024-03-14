//find 2nd max out of three numbers (First, do it in the normal way then do it by using 3 comparisons)

const input= require("readline-sync");
let a= input.questionInt("Enter a number:");
let b= input.questionInt("Enter another number:");
let c= input.questionInt("Enter a number:");

let max;
let min;

if(a>b){
     max=a;
     min=b;
}
else{
    max=b;
    min=a;
}
if(max>c){
    if(min>c){
        console.log(min);
    }
    else{
        console.log(c);
    }
}
else{
    console.log(max);
}