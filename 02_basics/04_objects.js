// object declare using constructor
let regularUser = {
    email:"hii@gmail.com",
    username:{
        firstName:"Abhishek",
        lastName:"Singh"
    },
    phoneNumber:"8433153892"
}

// console.log(Object.keys(regularUser));          //retrieve the keys from an object
// console.log(typeof Object.keys(regularUser));
// console.log(Object.values(regularUser));        //retrieve the value from an object
// console.log(Object.entries(regularUser));       //array inside array(key:value)

// console.log(regularUser);
// console.log(regularUser.username);
// console.log(regularUser.username.firstName);

let obj1 ={
    name:"Abhishek Singh",
    age:23
}
obj1.greeting = function(){
    return `Hello, ${this.name}`
}
// console.log(obj1.greeting());

// console.log(obj1.hasOwnProperty("age"));
// console.log(obj1.hasOwnProperty('last name'));

let obj2 ={
    location:"Mathura",
    State:"UttarPradesh"
}
// const obj3 ={obj1, obj2};       //objects inside another object
// console.log(obj3);

//  const obj3 = Object.assign(obj1,obj2);
// const obj3 = Object.assign({},obj1,obj2);
const obj3 ={...obj1,...obj2};
// console.log(obj3);

//***************************Object destructuring*************************** */
const course ={
    courseName :"Javascript",
    coursePrice :999,
    courseInstructor :"Abhishek"
}
// console.log(course.courseInstructor);
// console.log(course["courseInstructor"]);
// const {courseInstructor} =course;       //-> object destructuring
// console.log(courseInstructor);

// const{courseName:name} = course;       //-> object destructuring
// console.log(name);

const person ={
    personName:"Abhishek",
    personAge:23,
    personEmail:"hindolabhishek8433@gmail.com",
    personPhoneNumber:"8433153892"
}
// console.log(person.personName);
// console.log(person["personPhoneNumber"] +"\n"+person["personEmail"]);

const{personName:name ,personAge:age} = person
// console.log(name +"\n"+age);

const{personName ,personAge} = person
console.log(personName +"\n"+personAge);