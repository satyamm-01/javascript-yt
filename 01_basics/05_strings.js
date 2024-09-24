const name = "satyam"
const repocount = 50

// console.log(name + repocount);

console.log(`hello my name is ${name} and my repocount is ${repocount}`);


const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const mainString = "   hitesh   "
console.log(mainString);
console.log(mainString.trim());

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

console.log(url.split('/'));


