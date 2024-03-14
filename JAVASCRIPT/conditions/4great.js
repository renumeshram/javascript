//take four numbers from the user and print the greater number of the four numbers.

const input= require("readline-sync");
let a= input.questionInt("Enter a number:");
let b= input.questionInt("Enter another number:");
let c= input.questionInt("Enter a number:");
let d= input.questionInt("Enter another number:");

if(a>b){
    let max=a;
}
else{
    max=b;
}
if(max>c){
    if(max>d){
        console.log(max);
    }
    else{
        console.log(d);
    }
}
else{
    if(c>d){
        console.log(c);
    }
    else{
        console.log(d);
    }
}