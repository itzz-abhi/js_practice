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
console.log(loggInUser("Abhishek"));  //Abhishek just logged in