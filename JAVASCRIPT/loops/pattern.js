// star pattern
const input=require("readline-sync")
// let i ,j;

// let n= input.questionInt("Enter number of rows:")
// for(i=0;i<n;i++){
//     let str="";
//     for(j=0;j<=i;j++){
//         str+="*"
//     }
//     console.log(str);
// }

// star pattern (flipped)

let i ,j,k;
let str=""

let n= input.questionInt("Enter number of rows:")
for(i=n;i>0;i--){
    
    for(j=1;j<i;j++){
        str+=" ";
    }
    for(k=n;k>=i;k--){
        str+="*"
    }
    str+="\n"
   
}
console.log(str);