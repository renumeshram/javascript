const input=require("readline-sync");
// let a=[];
// let i,j;

// let r= input.questionInt("enter no. of rows");
// let c= input.questionInt("enter no. of columns");
// let k=0;
// //console.log(n);

// for(i=0;i<r;i++){
//     a[i]=[] //for going to that row of 2d array
//     let str="";
//     for(j=0;j<c;j++){
//         if(i==0){
//             k++
//             a[i][j]=k;
//             str+=k;
//         }
//         else if(i%2==0){
//             k++;
//             a[i][j]=k
//             str+=k;
//         }
//         else{
//             str+=k;
//             a[i][j]=k
//             k--;
//         }
//     }
//     k+=c;
//     console.log(str);
// }

// console.log(a);

// adding two matices and storing in third matrix

let x=[[1,2,3],[1,4,5],[3,4,8]],y=[[2,6,9],[1,1,1],[3,6,1]],z=[];

for(let i=0;i<3;i++){
    z[i]=[]
    for(let j=0;j<3;j++){
        let num = (x[i][j]+y[i][j]);
        z[i][j]=num;
        //console.log(z[i][j]);
    }
}
console.log(z);
 
//subracting two matrices and storing that in separate array

//let a=[[1,2,3],[1,4,5],[3,4,8]],b=[[2,6,9],[1,1,1],[3,6,1]],c=[];
// let  a=[],b=[],c=[];
// m1=input.questionInt("enter size of rows for 1st array")
// n1=input.questionInt("enter size of columns for 1st array")

// m2=input.questionInt("enter size of rows for 2nd array")
// n2=input.questionInt("enter size of columns for 2nd array")

// if((m1==m2)&(n1==n2)){

// for(let i=0;i<m1;i++){
//     a[i]=[]
//     for(let j=0;j<n1;j++){
//         a[i][j]=input.questionInt("Enter elements for 1st array:");
//     }
// }
// console.log("Now it's time for 2nd array :D");
// for(let i=0;i<m2;i++){
//     b[i]=[]
//     for(let j=0;j<n2;j++){
//         b[i][j]=input.questionInt("Enter elements for 2nd array:");
//     }
// }
// for(let i=0;i<3;i++){
//     c[i]=[]
//     for(let j=0;j<3;j++){
//         let num = (a[i][j]-b[i][j]);
//         c[i][j]=num;
//     }
// }
// console.log(c);
// }
// else{
//     console.log("Please enter same values of rows and column for both array!!!!");
// }

//multiplication

let  a=[],b=[],c=[];
m1=input.questionInt("enter size of rows for 1st array")
n1=input.questionInt("enter size of columns for 1st array")

m2=input.questionInt("enter size of rows for 2nd array")
n2=input.questionInt("enter size of columns for 2nd array")

if((m1==m2)&(n1==n2)){

for(let i=0;i<m1;i++){
    a[i]=[]
    for(let j=0;j<n1;j++){
        a[i][j]=input.questionInt("Enter elements for 1st array:");
    }
}
console.log("Now it's time for 2nd array :D");
for(let i=0;i<m2;i++){
    b[i]=[]
    for(let j=0;j<n2;j++){
        b[i][j]=input.questionInt("Enter elements for 2nd array:");
    }
}
for(let i=0;i<3;i++){
    c[i]=[]
    for(let j=0;j<3;j++){
        let num = (a[i][j]*b[i][j]);
        c[i][j]=num;
    }
}
console.log(c);
}
else{
    console.log("Please enter same values of rows and column for both array!!!!");
}