// for of

const arr =[1,2,3,4,5];
for(const num of arr){
    // console.log(`numbers are ${num}`);
}

const intro ="Hello I am Abhishek Singh";
for(const i of intro){
    // console.log(`Each char is ${i}`);
}

const arr1 =[1,2,3,4,5,6,7,8,9,10];
for(const i of arr1 ){
    let result =i* i;
    // console.log(result);
}
const arr2 =[1,2,3,4,5,6,7,8,9,10];
for(const i of arr2){
    // console.log(2 +"*" + i +"="+2*i);
}

//****************************Map ****************************************/

 const map = new Map();
map.set("student1","Abhishek Singh");
map.set("student2","Aditya kumar");
map.set("student3","harsh pandey");
map.set("student2","Aditya kumar");                  // key always be unique but value may be same

// console.log(map);

map.set("student1","Sumit singh");
// console.log(map.get("student1"));

map.delete("student3");
// console.log(map.size);
// console.log(map);


const marks = new Map();
marks.set("java",83);
marks.set("DSA",78);
marks.set("Swift",90);

// console.log(marks);

// for(const key of marks){
//     console.log(key);
// }

for(const [key,value] of marks){
    // console.log(key);
}
for(const [key,value] of marks){
    // console.log(value);
}
for(const [key,value] of marks){
    //  console.log(key ,"->",value);
}


const myobj ={
    name:"Abhishek Singh",
    price:999
}

// for(const key of myobj){
//     // console.log(key);                //TypeError: myobj is not iterable 
// }

const myobj1 ={
    name:"Abhishek Singh",
    price:999,
    email:"hindolabhishek8433@gmail.com"
}

for (const key in myobj1) {
//    console.log(key);
}

for(const key in myobj1) {
    // console.log(myobj1[key]);
}

for(const [key,value] of Object.entries(myobj1)){
    // console.log(value);
}

const myarr = [1,2,3,4,5];
for(const value in myarr){
    // console.log(myarr[value]);
}

for(const [index,value] of myarr.entries()){
    // console.log(index);
}


// In JavaScript, the forEach method passes three arguments to its callback function in this specific order:
// array.forEach(function (index,value,array){
// })
const myarr1 =[1,2,3,4,5];
myarr1.forEach(function (i){
    // console.log(i*2);
});

myarr1.forEach((i)=>
{
    // console.log(i);
}
)


const subject =[
    {
        languageName: "Javascript",
        langaugeFileName:"JS"
    },
    {
        languageName: "Python",
        langaugeFileName:"PY"
    },
    {
        languageName:"Java",
        langaugeFileName:"Java"
    }
]


subject.forEach((item)=>
{
    // console.log(item);
}
)
subject.forEach((item)=>
{
//    console.log(item.langaugeFileName);
}
);

subject.forEach((item)=>
{
    console.log(item.languageName);
}
)