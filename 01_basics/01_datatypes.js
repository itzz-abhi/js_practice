"use strict"    //treat all JS code as newer version 
// but in today's it is not compulsory to written this use strict

let name="Abhishek Singh"   //String datatype
let age =23;   //number datatype
let isLoggedIn =false;  //boolean datatype
let num =BigInt(12342667211818917219);


//There are two type of datatype 

// 1.primitive -> pre-defined datatypes
//number,boolean,bigInt,null,undefined,symbol,string
//symbol is used for uniqueness

//2.non-primitive -> user-defined datatypes
//Array,function,objects

console.log(typeof age);
console.log(typeof null);  //object
console.log(typeof undefined); //undefined
console.log(typeof num);   //BigInt
console.log(typeof isLoggedIn); //boolean