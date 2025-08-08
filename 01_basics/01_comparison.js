// console.log("2">1);
// console.log("2"<1);
// console.log("1">=1);
// console.log("1">1);
// console.log("2">=1);

//In comparison string convert to the number in equality check as well as  in comparison

console.log(null>0);
console.log(null<0);
console.log(null>=0);
console.log(null==0);

//In this comparison(>=,>,<,<=) convert null into a number thatswhy output is true
//  equality check(==) do not convert a null into a number thatwhy output is false 

console.log("2"==2);   //it checks only number weather it is in string or not
console.log(true == 1);
console.log("" == false);  //true
console.log("abhishek" == 1);   //false
console.log("abhishek" == true);// false

console.log("2"===2) // it check datatype also

// note:- comparison is between the same datatype not in different datatype 