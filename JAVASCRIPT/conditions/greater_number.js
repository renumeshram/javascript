// var firstName= "Renu";
// console.log(firstName);
// var b="Hello this is my ‘Dell Laptop’ ";
// console.log(b);
// let a =45;
// console.log(a);
// a = 456;
// console.log(a);
const input=require("readline-sync");
let a = input.questionInt("Enter 1st number ");


let b = input.questionInt("Enter 2nd number ");


let c = input.questionInt("Enter 3rd number ");

if(a>b){
        if(a>c){
            console.log("Greatest number",a);
        }
        else{
            console.log("Greatest number",c);
        }
        // exit();
}
else if(b>c){
        console.log("Greatest number",b);
}
else{
    console.log("Greatest number",c);
}
