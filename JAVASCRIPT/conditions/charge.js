

const input= require("readline-sync");
let U = input.questionInt("Enter charge")
let E,F,A,B,C;

if(U<=50){
    E=U*0.5;
    F=E+E*0.2;
    console.log(F);
}
else if(U<=150){
    A=U-50;
    E=50*0.57+A*0.75;
    F=E+E*0.2;
    console.log(F);
}
else if(U<=250){
    B=U-150;
    E=50*0.5+100*0.75+B*1.20;
    F=E+E*0.2;
    console.log(F);
}
else{
    C= U-250;
    E= 50*0.5+100*0.75+100*1.20+C*1.50;
    F=E+E*0.2;
    console.log(F);
}
