//[1]Name
const input=require("readline-sync");
// let num=input.question("enter number:");
// let name=input.question("Give your name:");
// let i=0;

// while(i<num){
//     console.log(name);
//     i=i+1;
// }

//[2]print even numbers up to input

// let number=input.question("enter number:");
// let i=1;

// while(i<number){
//     if(i%2==0){
//         console.log(i);
//     }
//     i= i+1;
// }

//[3]print sum of odd number uptoN

// let N=input.questionInt("Enter Number");
// let i=1, sum=0;
// while(i<=N){
//     if(i%2!=0){
//         sum=sum+i;
//     }
//     i=i+1;
// }
// console.log(sum);

//[4]program to take two integers M, and N and print the sum of numbers in the range M to N.

// let M= input.questionInt("Enter a number:");
// let N= input.questionInt("Enter another number:");

// let i, sum;
// i=M; sum=0;
// while(i<= N){
//     sum= sum+i;
//     i= i+1;
// }
// console.log(sum);

//[5]program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N

// let n=input.questionInt("Enter a number:");
// let i=1, sum=0;

// while(i<=n){
//     sum=(1/i)+sum;
//     i=i+1;
// }
// console.log(sum);

//[6]]program to take a number from the user and print the number of digits in the given number

// let num=input.questionInt("Enter a number:");
// let count=0; 

// while(num!=0){
//     let a= num%10;
//     count=count+1;
//     num= Math.floor(num/10);
//     //console.log(num);
// }
// console.log(count);

//[7]program to take a number from the user and print the sum of the digits of the given number.

// let n =input.questionInt("Enter number:");
// let sum=0;
// while(n>0){
//     sum=sum+(n%10);
//     n=Math.floor(n/10);
// }
// console.log(sum);

//[9]a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.

// let n= input.questionInt("Enter a number:");
// let s=0;
// while(n!=0){
//     let a= n%10;
//     //console.log(a);
//     s=s*10+a;
//     n= Math.floor(n/10);
// }
// console.log(s);

//[10]factors

// let n= input.questionInt("Enter a number:");
// let i= 0;
// while(i<=n){
//     if(n%i==0){
//         console.log(i);
//     }
//     i=i+1;
// }

//[11]prime number

// let n= input.questionInt("Enter a number:");
// let i= 2, check = 1;
// while(i<=n){
//     if(n%i==0){
//         check =check*i;
//         //console.log("Yes Prime");
//     }
//     //console.log(i);
//     i=i+1;
// }
// if(check==n && check>1){
//     console.log("Yes Prime");
// }
// else{
//     console.log("Not Prime");
// }

//[12] perfect number

// let n=input.questionInt("Enter number:");
// let i=1, perfect= 0;
// if (n!=0) {
//     while (i<=n/2) {
//         if(n%i==0){
//             perfect=perfect+i;
//         }
//         i=i+1;
//     }
//     if(perfect==n){
//         console.log("Yes");
//     }
//     else{
//         console.log("No");
//     }
// }
// else{
//     console.log("Invalid Number");
// }

// Lcm- Hcf

let A= input.questionInt("Enter a number:");
let B= input.questionInt("Enter another number:");
let R, X, Y,hcf, lcm;

if(A>B){
    X= A;
    Y= B;
}
else{
    X=B;
    Y=A;
}
while(Y!=0){
    R=X%Y;
    X=Y;
    Y=R;
}
hcf= X  //hcf is calculated using long division method, observe carefully & work on your logic.......
lcm=(A*B)/hcf;
console.log("Hcf:",hcf);
console.log("Lcm is:",lcm);

