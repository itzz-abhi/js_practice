const marvel_heros =["Thor","Ironman","Spiderman"];
const dc_heros =["Superman","flash","Batman"];
const indian_heros =["Nagraj","Shaktiman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// console.log(marvel_heros[2]);
// console.log(marvel_heros[3][2]);

// console.log(marvel_heros.concat(dc_heros));

const all_heros = [...marvel_heros,...dc_heros,...indian_heros];     // we can conactinate more than two are at a single time using spread function
console.log(all_heros);

const newArray =[1,2,3,[4,5,6],6,7,[8,9,[1,2,3,[5,6,7]]],10,11];
// console.log(newArray.flat(Infinity));
// console.log(newArray.flat(3));   // depth ->3
console.log(newArray.flat(2));      // depth ->2

const newMarvelHeros = marvel_heros.join();      //return a string

// console.log(marvel_heros);
// console.log(typeof marvel_heros);

// console.log(newMarvelHeros);
// console.log(typeof newMarvelHeros); 

const a1 = "Abhishek";
console.log(Array.isArray(a1));   // return a boolean

const a2 = Array.from(a1);       // return an array
console.log(a2);  

let num1 = 1;
let num2 =2;
let num3 =3;

const a3 = Array.of(num1,num2,num3);
console.log(a3);

let name1 ="Abhishek Singh"
let name2 ="Sagar Garg"
let name3 ="Vinayak kesarwani"

const friends = Array.of(name1,name2,name3);
console.log(friends);
console.log(typeof friends);

