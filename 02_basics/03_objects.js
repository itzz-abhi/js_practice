// object literal

const user1 ={
    name: "Abhishek Singh",
    age: 23,
    email:"abhi@gmail.com",
    location: "Mathura",
    "State":"Uttar Pradesh",
    isLoggedIn: false
};
// console.log(user1.email);
// console.log(user1["age"]);
// console.log(user1.State);
// console.log(user1["State"]);

// how to declare a symbol in an object

const mysym = Symbol("Key1");
// console.log(typeof mysym);
const user2 ={
    name:"Sumit Singh",
    age:27,
    // mysym:"Key1",
    [mysym]:"this is a key",
    "email":"sumit@gmail.com",
    location:"Noida",
    State:"Uttar Pradesh"
}
// console.log(typeof user2[mysym]);

user2.email="hindol8433@gmail.com";
// console.log(user2);

// Object.freeze(user2)           //we can freeze the objects
// user2.email="sumit@gmail.com";
// console.log(user2);

user2.greeting = function(){
    return "Hello user....!";
}
console.log(user2.greeting());

user2.greetings = function(){
    return `Hello ${this.name}`;
}
// console.log(user2.greetings);
console.log(user2.greetings());