const accountId =101;
let accountEmail ="Abhishek@gmail.com"; 
console.log(accountEmail);
{
    let accountEmail ="google.com";       //let and const scope is local
    console.log(accountEmail);
}
console.log(accountEmail);
accountEmail = "sumit@gmail.com";
console.log(accountEmail);

var accountPassword ="12345";
console.log(accountPassword);
{
  var accountPassword ="8433";
  console.log(accountPassword);     //var scope is global
}
console.log(accountPassword);
accountCity ="Jaipur";
console.log(accountCity);
{
    accountCity ="Mathura";
    console.log(accountCity);
}
   console.log(accountCity);    //by default variable is var and scope is global

// const accountId =2;   const keyword cannot be reassign
// accountId = 102;      const value cannot be change
// console.log("Account Id:" + accountId);

// console.table([accountEmail,accountId,accountPassword,accountCity]);

// let accountState;           O/p->undefined
// console.log(accountState);

 accountState = undefined;
//  console.log(accountState);

 console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);