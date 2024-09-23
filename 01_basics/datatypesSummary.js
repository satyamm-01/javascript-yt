// primitive or call by value
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
// jb bhi Stack memory use hoti h apne jo variable use kra uska copy milta h 

let myYoutubename = "satyamdotcom"

 let anothername = myYoutubename
 anothername = "chaiorcode"

 console.log(myYoutubename); // satyamdotcom
 console.log(anothername);    // chaiorcode
 
 



// Heap (Non-Primitive)

// jb bhi ek memory heap k andar define hoti h to waha se milta h original value ka 
// reference original val change hoti h


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);   //  hitesh@google.com
console.log(userTwo.email);   //  hitesh@google.com

