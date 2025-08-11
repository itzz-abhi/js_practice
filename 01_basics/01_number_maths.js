//******************************number***************************/
let score = 100;
// console.log(score);

let balance = new Number(400);    // specifically specify balance is a number data type
// balance = 400;
// console.log(balance);
// console.log(balance.toString());
// console.log(typeof balance.toString());

let num = 100.67;
// console.log(num.toFixed(1));
// console.log(num.toFixed(2));

let anotherNum = 37.78
// console.log(anotherNum.toPrecision(3));

let anotherNum2 = 457.89
// console.log(anotherNum2.toPrecision(2));
// console.log(anotherNum2.toPrecision(3));

let hundered = 100000;
// console.log(hundered.toLocaleString());      
// console.log(hundered.toLocaleString('en-IN'));

//*********************************************Maths**********************/
let marks = 47.98;
// console.log(Math.floor(marks));
// console.log(Math.round(marks));
// console.log(Math.ceil(marks));
// console.log(Math.PI);
// console.log(Math.round(Math.PI));
// console.log(Math.abs(-89));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(144));

let num3 = 4;
// console.log(Math.pow(num3)); 
// console.log(Math.pow(num3,2));   //Math.pow(base,expo);

let num4 = new Number(4);
// console.log(Math.pow(num4));
// console.log(Math.pow(num4,2)); 

// console.log(Math.random());        //Math.random value will always lie between 0 and 1
// console.log((Math.random()*10) +1);

let min =10;
let max = 20;
console.log(Math.floor((Math.random() * (max-min +1)) +min));

let num1 = 1;
let num2 = 6;
console.log(Math.floor(Math.random() * (num2-num1  +1)+num1));