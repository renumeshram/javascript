 const input=require("readline-sync");

//print element

// let L=[1,2,3,4,5,6,7,8];
// let i=0;
// while(i<8){
//     console.log(L[i]);
//     i=i+1;
// }

// natural number
// const array=[]
// let i=0, j=1

// while(i<20){
//     array[i]=j;
//     console.log(array[i]);
//     j++
//     i++
// }

//reverse array

// const a=[]
// let n =input.questionInt("Enter Array size");
// for(let i=0;i<n;i++){
//     a[i]= input.questionInt("Enter Elements:");

// }

// for(let j=n;j>=0;j--){
//     console.log(a[j]);
// }

//target case

// let n =input.questionInt("Enter Array size");
// const a=[]

// for(let i=0;i<n;i++){
//     a[i]= input.questionInt("Enter Elements:");
// }

// let target= input.questionInt("Enter your target")

// for (let j=0;j<n;j++){
//     if(a[j]==target){
//         console.log("Yes");
//         break;
//     }
//     else{
//         console.log("Not Present");
//         break;
//     }
// }

//sum of odd-even numbers

// let n =input.questionInt("Enter Array size");
// const a=[]
// let esum=0; osum=0;

// for(let i=0;i<n;i++){
//     a[i]= input.questionInt("Enter Elements:");

// }

// for( let j=0; j<n;j++){
//     if(a[j]%2==0){
//         esum=esum+a[j];
//     }
//     else{
//         osum=osum+a[j];
//     }
// }

// console.log("Sum of even numbers:",esum);
// console.log("Sum of odd numbers:",osum);

//duplicate numbers
//work done!!!!!!!!!!!!!
// const a=[]
// let n =input.questionInt("Enter Array size");
// if(n==0){
//     console.log("Enter valid number:");
    
// }
// else{
//     for(let i=0;i<n;i++){
//         a[i]= input.questionInt("Enter Elements:");

//     }

//     for(let j=0;j<n;j++){
//         let k=j+1;
//         let count=0;
//         for(;k<n;k++){
//             if(a[j]==a[k]){
//                 count++;
//             }
//         }
//         if(count==1){
//             console.log(a[j]);
//         }
//     }
// }

//merge-sorting

//const a=[54,86,41,62,30,1]
//const b=[23,46,95,2,35,99,78]

// let n =input.questionInt("Enter Array size");
//      const a=[], b=[];
// for(let i=0;i<n;i++){
//         a[i]= input.questionInt("Enter Elements for first array:");
//     }
// let m =input.questionInt("Enter Array size");
//     for(let i=0;i<m;i++){
//         b[i]= input.questionInt("Enter Elements for second array:");
//     }
// const merge= [...a,...b]    //spread operator '...'(three dots) used to merge two arrays
// console.log(merge);
// merge.sort(function(a, b){return a - b});                //sort()is used to sort the array; here comparison can also be given 
// console.log(merge);

//another method

// let n1,n2,n3;
// let i,j,k;
// const a=[], b=[], c=[];
// n1= input.questionInt("Enter size of 1st array");
// for(i=0;i<n1;i++){
//     a[i]=input.questionInt("Enter elements of 1st array:")
// }

// n2= input.questionInt("Enter size of 2nd array");
// for(j=0;j<n1;j++){
//     b[j]=input.questionInt("Enter elements of 2nd array:")
// }

// n3=n1+n2;
// //merging
// for(i=0;i<n1;i++){
//     c[i]=a[i];
// }
// for(j=0;j<n2;j++){
//     c[j+n1]=b[j];
// }
// console.log("Merged Array:");
// for(i=0;i<n3;i++){
//     console.log(c[i]);
// }

// //sorting
// for(i=0;i<n3;i++){
//     let temp;
//     for(j=i+1;j<n3;j++){
//         if(c[i]>c[j]){
//             temp=c[i]
//             c[i]=c[j]
//             c[j]=temp
//         }
//     }
// }

// for(i=0;i<n3;i++){
//     console.log(c[i]);
// }

//pattern

let n;
let i,j;
const a=[];
n= input.questionInt("Enter size of 1st array");
for(i=0;i<n;i++){
    a[i]=input.questionInt("Enter elements of 1st array:")
}
for(i=0;i<=n;i++){
    let x= a[i];
    let str=""
    for(j=0;j<x;j++){
        str=str+">";
    }
    console.log(str);
}


//frequency
// let n,n2,n3;
// let i,j,k;
// const a=[];
// n= input.questionInt("Enter size of 1st array");
// for(i=0;i<n;i++){
//     a[i]=input.questionInt("Enter elements of 1st array:")
// }

// for(i=0;i<n;i++){
//     let count=1;
//     if(a[i]==-1) //if -1 encountered
//     continue;
//     for(j=i+1;j<n;j++){
//         if(a[i]==a[j]){
//             count++;
//             a[j]=-1; //replacing elements which are compared by -1
//         }
//     }
//     console.log(a[i]+"="+count);
//     a[i]=-1;
// }