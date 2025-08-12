 // array

 //***********************************Notes**************************************************** */
//  In javascript array is an object collection of multiple element in a single variable
//  array is a non-primitive datatype
//  JavaScript arrays are resizable and can contain a mix of different data types. 
//  JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers
//  JavaScript array-copy operations create shallow copies rather than deep copy.
 
//  shallow copy:-A shallow copy of an object is a copy whose properties share the same references
//  deep copy:-A shallow copy of an object is a copy whose properties do not share the same references


// ********************************************************************************************//

const arr =[0,1,2,3,4]
// console.log(arr[0]);
// console.log(arr[1]);

// const newArr = new Array("Spiderman","Ironman","Dr. Strange","Venom","Dr. Doom");
// console.log(newArr[3]);

const newArr1 = new Array(1,2,3,4,5);
// console.log(newArr1[2]);

//array methods

newArr1.push(6);
// console.log(newArr1)

newArr1.push(10);
// console.log(newArr1);

newArr1.pop();
// console.log(newArr1);

newArr1.shift();
// console.log(newArr1);      // remove the element from the first place

newArr1.unshift(31);
// console.log(newArr1);     // add the element from the first place

newArr1.shift();
// console.log(newArr1);

newArr1.push(1);
// console.log(newArr1);

const newArr = new Array(0,1,2,3,4);
// console.log(newArr.includes(9));
// console.log(newArr.includes(4));

// console.log(newArr.indexOf(90));
// console.log(newArr.indexOf(2));

const a1 = new Array(0,1,2,3,4);
const a2 = new Array(5,6,7,8);
// console.log(a1.concat(a2));
// console.log(a2.concat(a1));

// console.log(a1.concat(a2).length);

const a3 = new Array("a","b","c","d","e");
// console.log(a3.copyWithin(1,3));
// console.log(a3.copyWithin(0,2));   //["c","d","e","d","e"]

const a4 = new Array(1,2,3,4,5,6,7,8,9,10);
//  console.log(a4.copyWithin(1,2));  //[1,3,4,5,6,7,8,9,10,10]
//  console.log(a4);

const newa1 = new Array(1,2,3,4,5,6,7);

console.log(newa1.slice(1,5)); // [2,3,4,5]    // 1-> included and 2-> excluded
 console.log(newa1);

const newa2 = new Array(1,2,3,4,5,6,7);
// console.log(newa2.splice(1,5));  //[2,3,4,5,6]
// console.log(newa2);

console.log(newa2.splice(1,6));    //[2,3,4,5,6,7]
 console.log(newa2);