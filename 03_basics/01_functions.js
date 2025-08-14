function sayMyName(){
     console.log("Name:"+"Abhishek Singh");
     console.log("Age:"+"23");
     console.log("Location:"+"Mathura");
}
// sayMyName();
// sayMyName();

function addTwoNumber(num1,num2){
    let num3 =num1 +num2;
    return num3;
}
// 


// function loggInUser(username){
//     return `${username} just logged in!`;
// }
// console.log(loggInUser("Abhishek"));

function loggInUser(username){
    if(username ==""){
        return "Please enter a username";
    }
    else{
        return `${username} just logged in`;
    }
}
// console.log(loggInUser(""));       please enter a username
// console.log(loggInUser("Abhishek"));  //Abhishek just logged in

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(100));
// console.log(calculateCartPrice(100,200,300));

// function calculateCartPrice(value1,value2,...num1){
//     return num1;
// }
// console.log(calculateCartPrice(100,200,300,400,500))   // [300,400,500]

 function calculateCartPrice(...num1){           //rest operation 
     return num1
 }
//  console.log(calculateCartPrice(100,200,300,400,500));

const user ={
    userName:"Abhishek Singh",
    userCourse:"Javascript",
    userCoursePrice:999
}
function handleObject(obj){              //obj is a parameter which should be an object
    if(obj.userName==""){ 
        return "Please enter a username";
    }
    else{
        return `${obj.userName} just loggedIn!`;
    }
}
//  console.log(handleObject(user));       // user is refer to an obj

const myarr =[10,20,30,40,50];
function handleArray(arr){           //arr is the parameter which should be an array
    if(arr[2]==null){
        return "Please enter a value";
    }
    else{
        return arr[2];
    }
}
// console.log(handleArray(myarr));     //myarr refer to the array


console.log(addone(2));
function addone(num){
    return num +1;
}

// console.log(addone(2));


// console.log(addtwo(3))    --->Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num +2;
}
 console.log(addtwo(3));