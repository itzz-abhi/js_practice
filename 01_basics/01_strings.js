let name ="Abhishek Singh";
let repoCount = 50;
// console.log(name +" "+ repoCount);
// console.log(name +" "+repoCount +" "+"Repositry");

// console.log(`Hello! my name is ${name} and my repoCount is ${repoCount}`); // this is known as String interpolation we  use `---`

let newName = new String("Abhishek Singh");   // we will invoke the object by the new keyword

console.log(newName[0]);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.toLowerCase());

let anotherName ="      aryan      ";
console.log(anotherName.length);
console.log(anotherName.trim());
console.log(anotherName.trim().length);
console.log(anotherName.trim().charAt(2));
console.log(anotherName.trim().indexOf("r"));

let name1 ="Abhishek";
let name2 ="Singh";
console.log(name1.concat(" "+name2));
console.log(name1.concat(" "+name2).length);
console.log(name1.endsWith('k'));
console.log(name1.includes("Chaudhary"));
console.log(name1.includes('i'));
console.log(name1.lastIndexOf('s'));
console.log(name1.replace('shek',""));
console.log(name1.replace('shek',"").length);
console.log(name1.charAt(5));
console.log(name1.indexOf('s'));
console.log(name1.substring(2,6)); //--> we can break a string into substring 2=>inclusive and 6=>exclusive

let intro = "Hii! my name is abhishek Singh";
console.log(intro.split(" "));   //=> this method is convert the string into array on the basis of given value

let anotherIntro ="hii! myself abhishek Singh";
console.log(anotherIntro.split(" "));
console.log(anotherIntro.split(" ").length);