// carName="Volvo";
// let carName="Saab"

// console.log(carName);
//throws error because here carName is not declared first, it has initialised here
// and in let variable it throws error but in var it doesn't

//functions

function mighty(x=0,y=0,z=0,a=0,b=0,c=0){// overriding occurs when arguments are passed otherwise these default parameters are taken considered
    
    let mean= (x+y+z+a+b+c)/6
    // console.log(mean);
    return mean // return is a keyword used to return the value, anything written after this is not executed

}//to catch the value or to print it, store the function in a variable then use it (ideal)

console.log( mighty(1,2,3,4,5,6));// argumnents: values given);
//console.log(final)

// function adviseSportsGear(activity, weather) {
//     switch (activity) {
//         case "running":
//             if (weather === "sunny") {
//                 return "Light shoes and sunglasses.";
//             }
//             break;
//         case "cycling":
//             if (weather === "rainy") {
//                 return "Waterproof gear.";
//             }
//             break;
//         case "hiking":
//             if (weather === "cloudy") {
//                 return "Sturdy boots and a waterproof backpack.";
//             }
//             break;
//         case "swimming":
//             if (weather === "hot") {
//                 return "Swimsuit and apply sunscreen.";
//             }
//             break;
//         default:
//             return "Wear appropriate clothing and gear based on common sense.";
//     }
// }

// // Example usage:
// const activity = "running";
// const weather = "sunny";
// const gearAdvisory = adviseSportsGear(activity, weather);
// console.log(gearAdvisory);


// JavaScript program to count maximum
// consecutive 1's in a binary array.

// Returns count of maximum
// consecutive 1's in binary
// array arr[0..n-1]
function getMaxLength(arr, n) {
	// initialize count
	let count = 0;

	// initialize max
	let result = 0;

	for (let i = 0; i < n; i++) {
		// Reset count when 0 is found
		if (arr[i] == 0)
			count = 0;

		// If 1 is found, increment
		// count and update result
		// if count becomes more.
		else {
			// increase count
			count++;
			result = Math.max(result,count);
            //console.log(result);
		}
	}

	return result;
}

// Driver code
let arr = new Array(1, 1, 0, 1, 1, 1,
	1, 0, 1, 1, 0, 1);
let n = arr.length;
console.log((getMaxLength(arr, n)));

// This code is contributed by gfgking

function determineWinningTeam(N, rollNumbers, scores) {
    let oddTeamTotal = 0;
    let evenTeamTotal = 0;

    for (let i = 0; i < N; i++) {
        if (rollNumbers[i] % 2 === 0) {
            evenTeamTotal += scores[i];
        } else {
            oddTeamTotal += scores[i];
        }
    }

    if (oddTeamTotal > evenTeamTotal) {
        return "ODD";
    } else if (evenTeamTotal > oddTeamTotal) {
        return "EVEN";
    } else {
        return "TIE";
    }
}

// Example usage:
const N = 5;
const rollNumbers = [1, 2, 3, 4, 5];
const scores = [10, 20, 30, 40, 50];
const winningTeam = determineWinningTeam(N, rollNumbers, scores);
console.log(winningTeam);

function flipBits(binaryStr, start, end) {
    // Convert the binary string to an array to manipulate individual bits
    let binaryArr = binaryStr.split('');

    // Iterate through the range [start, end] and flip each bit
    for (let i = start; i <= end; i++) {
        // Flip the bit by changing 0 to 1 and vice versa
        binaryArr[i] = binaryArr[i] === '0' ? '1' : '0';
    }

    // Join the array back to form the modified binary string
    return binaryArr.join('');
}

// Example usage:
const binaryStr1 = "101010";
const start1 = 1;
const end1 = 4;
console.log(flipBits(binaryStr1, start1, end1)); // Output: 110101

// const binaryStr2 = "01011011";
// const start2 = 2;
// const end2 = 7;
// console.log(flipBits(binaryStr2, start2, end2)); // Output: 01100100

function value(x1,y1,...num1){ // triple dot rest operator which is also used as spread operator
    return num1
}
 console.log(value(123,456,556,25000,945,524));

// const a={
//     name: "Shiv",
//     place: "Himalaya"
//  }
function bhala(anyobject) {
    console.log(`Welcome to ${anyobject.name} at ${anyobject.place}`) // back-ticks are used here(string interpolation)
}
// bhala(a)
 
//another way where you write object inside the function during function invokation
bhala({                 
    name:"Shiv",
    place:"Himalaya" 
})


let a=[1,2,3,4], b=[5,6,7,8], c=[9,10,11,12]

let m= a.concat(b,c)  //merge
console.log(m);

let z=[...a,...b,...c]
console.log(z);

let n1=m.slice(0,10); //returns selected range of element
console.log(n1);
console.log(m);

const x= [1,2,3,4,5]
const y=x.splice(1,2) //syntax splice(index,how many values you want to remove,ele you want to add)
//removes the number of element mention from the index specified and add new elements
console.log(x); //new array displayed
console.log(y); //has deleted elements

x1='2'
y1='3'
console.log(x1*y1);
