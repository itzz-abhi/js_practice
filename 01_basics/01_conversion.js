let score = 33;
// console.log(score);

let valueInString = String(score);
// console.log(valueInString); 
// console.log(typeof valueInString); 

let num1 = 33;
// console.log(typeof num1);

num1 ="33";
// console.log(num1);

let valueInNumber = Number(num1);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

num1 ="33abc";
valueInNumber = Number(num1);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);       //Not a Number

let isLoggedIn = true;
valueInNumber = Number(isLoggedIn);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let num2 ="abhishek";
let valueInBoolean = Boolean(num2);
console.log(typeof valueInBoolean);
console.log(valueInBoolean);

//0-> False; 1-> true
//""-> False; "abhishek"->true