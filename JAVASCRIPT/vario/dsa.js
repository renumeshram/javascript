//Q-1

function gear(activity,weather){
    switch (activity) {
        case "running":
            if (weather=="sunny"){
                console.log("Wear light shoes and sun glasses!");
            }
            break;
        case "cycling":
            if (weather=="rainy"){
                console.log("Wear a waterproof gear!");
            }
            break;
        case "hiking":
            if (weather=="cloudy"){
                console.log("Wear a sturdy boots and a waterproof backpack!");
            }
        case  "swimming":
            if(weather=="hot"){
                console.log("Wear a swimsuit and suncreen!");
            }  
            break; 
        default:
            console.log("Wear appropriate clothing and gear based on common sense!");
            break;
    }

}

// const input=require("readline-sync")
// let activity1= input.question("Enter activity from \n running\n cycling \n hiking \n swimming \n")
// let weather1= input.question("Enter weather from \n sunny\n rainy \n cloudy \n hot \n")
// gear(activity1, weather1)

let a1="swimming", b1="hot";
gear(a1, b1)

//Q-2

//pairing and odd-even

function team(N, roll_no, marks) {
    let evenTotal=0
    let oddTotal=0
    // console.log(roll_no[2]);
    // console.log(marks[2]);
    for(let i=0; i<N; i++){
        if(roll_no[i] % 2==0){
            evenTotal= evenTotal+ marks[i]
        }
        else{
            oddTotal= oddTotal+ marks[i]
        }

    }
    roll_no.join('')

    if(evenTotal > oddTotal ){
        // console.log("EVEN");
        let a="EVEN"
        return a
    }
    else{
        // console.log("ODD");
        let a="ODD"
        return a
    }
}
let rolln= [1, 2, 3, 4, 5] //giving array input
let n= 5
let marks= [10, 20, 30, 40, 50]
console.log( team(n, rolln, marks) );

// Q-3 largest consecutives ones

function biggest(bin){
    countCurrent=0
    max=0
    bin.split('')
    
    for (let i = 0; i < bin.length; i++) {
    if (bin[i]==='1'){
        countCurrent++; // holds the consecutiveness
    }
    else{
        if(countCurrent>max){
            max=countCurrent
        }
        countCurrent=0; //resets value to 0 as continuity of 1 broke 
    }
        
    }
    //checks if current value(inrements in 'if') of consecutive 1s is  more than the max(present in else)
    if(countCurrent>max){
        max=countCurrent
    }
    return max;
}

let binaryStr= "101011111011"
console.log(biggest(binaryStr));

//Q-4 add-search-remove book from library

//lib object is created here
const lib= {
    "Wings on Fire": { title:"Wings on Fire",
                     author:"A.P.J Abdul Kalam",
                     price:100
   }
};

function addbook(title, author, price){
    if(!lib[title]){
        lib[title]={title, author, price};
        console.log(`Book with "${title}" is successfully added to library!`);
    }
    else{
        console.log(`Book with "${title}" already exists in library!`);
    }
}

function searchbook(title) {
    if(lib[title]){
        console.log(lib[title]);
        console.log(("Book is present!!"));
    }
    else{
        console.log(`Book with "${title}" is not found!!`);
    }
}

function deletebook(title) {
    if(lib[title]){
        delete lib[title];
        console.log(`"${title}" is successfully deleted!`);
    }
    else{
        console.log(`Book "${title}" not found!!`);
    }
}
const input=require("readline-sync")
let op=input.questionInt("Choose an operation you want to do \n 1: Add a book \n 2: Search a book \n 3: Remove a book");

switch (op) {
    case 1:
        let t=input.question("Enter title:")
        let a=input.question("Enter author name:")
        let p=input.question("What's the price?")
        addbook(t,a,p)
        break;
    case 2:
        let t1=input.question("Enter title of book:")
        searchbook(t1)
        break;
    case 3:
        let t2=input.question("Enter title of book:")
        deletebook(t2)
        break;
    default:
        console.log("Enter valid choice: ");
        break;
}

//string dsa

function replace(str){
    let ans="";
    for (let i = 0; i < str.length; i+=2) {
        if(str[i]==0 && str[i+1]==0){
            ans+="A";
        }
        if(str[i]==0 && str[i+1]==1){
            ans+="T";
        }
        else if(str[i]==1 && str[i+1]==0){
            ans+="C";
        }
        else{
            ans+="G";
        }
        
    }
    console.log(ans);
}

let str= '110110'
replace(str)

//Q-2 CHEF WORDLE

function wordle(s1, s2){
    var z="";
    if(s1.length==s2.length){
        
        for (let i = 0; i < s1.length; i++) {
            if(s1[i]===s2[i]){
                z+='G';
                
            }
            else
            z+='B';
        
        }
        console.log(z);
    }
    else
    console.log("Enter string of same length!");
}

// let s1='ROUND',  s2='RINGS';
let s1='ABCDE', s2= 'EDCBA'
wordle(s1, s2)

// CONSECUTIVE QUESTIONS

function track(num){
    let count=0;
    // kind of logic is there cause comparing single numbers not pairs
    // so, increment should be ++ in place of+=2
    //another way i=1; and if(num[i]==num[i-1])
    for (let i = 0; i< num.length; i++) {
      if(num[i]==num[i+1]){
        count++;
      }
      else
      continue; 
    }
    console.log(count);
}

let num='00101010001111'
track(num)

//Q- Titlecase

function titleCase(sen){
    word= sen.split(' ')
    const title= word.map(word=>{
        if(word===word.toUpperCase()){
            return word;
        }
        else{
            return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
        }
    });
    return title.join(' ');
}

// let sen="hello world"
let sen=" WELCOME to real world"
let final= titleCase(sen)
console.log(final);


//Q- Stack operations

var t=-1;
var max= 10;
var a= Array(max).fill(0);

function isEmpty() {
    return (t < 0);
}
function push(x){
    if(t>=(max-1)){
        console.log("Stack Overflow...");
        return false;
    }
    else{
        t+=1;
        a[t]=x;
        console.log(x + "Pushed into stack.....");
        return true;
    }
}
function pop(){
    if(t<0){
        console.log("Stack Underflow....");
        return 0;
    }
    else{
        var y=a[t];
        t-=1;
        return y;
    }
}
function peek() {
    if(t<0){
        console.log("Stacks Underflow....");
        return 0;
    }
    else{
        var y =a[t];
        return y;
    }
}
function print() {
    for (let i = t; i >-1; i--) {
        console.log(a[i]);
        
    }
    
}

push(10);
push(20);
push(30);

console.log(pop()+ "Poped from stack....");
console.log("Top element is:" +peek());
console.log("Elements present in stacks:");
print();
