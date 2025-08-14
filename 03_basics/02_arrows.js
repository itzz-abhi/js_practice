const user ={
    username :"Abhishek Singh",
    price :999,
    welcomeMessage : function(){
         return `${this.username}, welcome`
        // console.log(`${this.username}, welcome`)
        // console.log(this);
        
    }
}
// console.log(this);
//   console.log(user.welcomeMessage());
  user.username ="Sumit Singh";
//   console.log(user.welcomeMessage());

//   const person = function(){
//     name:"Abhishek Singh"
//     console.log(this.name);
//   }
//  const person = function(){
//     name:"Abhishek Singh"
//     console.log(this);
//   }

//****arror function ********/
// const person = () =>{
//     return "Abhishek"
// }
//  console.log(person());

// const person = () =>{
//     username:"Abhishek";
//     console.log(this.username);
// }
//  person();

// const addtwo =(num1,num2) =>{
// let num3 = num1 +num2;
// return num3;
// }
// console.log(addtwo(2,3));

const addtwo =(num1,num2) => num1 +num2;           //implicit return using arrow function
console.log(addtwo(2,3));                          //it automatically assume that return num1+num2

const objreturn =() =>({
    username:"Abhishek Singh"
})
console.log(objreturn());

const arrreturn =() =>([11,22,33,44,55])
console.log(arrreturn());

const obj1 ={
    username:"Abhishek",
    price:399
}

function fun(anyobject){
    if(anyobject.username===""){
        return "Please enter a username";
    }
    else{
        return `${anyobject.username},welcome`
    }
}
console.log(fun(obj1));

const arr =[1,2,3,4,5]
function arrayfun(anyarray){
    return anyarray;
}
console.log(arrayfun(arr));