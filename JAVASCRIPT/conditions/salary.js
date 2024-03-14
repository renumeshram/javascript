const input=require("readline-sync");
let bs=input.questionInt("Enter basic salary");
let gs;

if(bs<= 10000){
    gs=bs+0.2*bs+ 0.8*bs;
    console.log(gs);
}
else if(bs<=20000){
    gs=bs+0.25*bs+0.9*bs;
    console.log(gs);
}
else{
    gs=bs+0.3*bs+0.95*bs;
    console.log(gs);
}