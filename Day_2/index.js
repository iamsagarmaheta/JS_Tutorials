// Variable & naming rules
// Data Types
// How To Check DataType
// string concatenation 
// string - template literals


// var keyword // old method to use variables
var age;
console.log(typeof(age));
age = 12; 
console.log(age);

age = 18.50
console.log(age);
console.log(typeof(age));

age = "Eighteen";
console.log(typeof(age));
console.log(age);

// let keyword // new way of using variables
let person_name;
console.log(person_name);
person_name = "sandeep";
person_name = 'i\'m sagar Maheta';
console.log(person_name);
console.log(typeof(person_name))


// const keyword
const birthdate = "15-8-2005";
//birthdate = "15-8-2005";
console.log(birthdate);
console.log(typeof(person_name));

let data = true;
console.log(typeof(data));

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log(NaN == NaN); // false

// NAN

// '12A'
let first_name = "Sagar";
let last_name = "Maheta";
let full_name= first_name + " " + last_name;

// Template Literal
let bio = `Hello My First Name Is ${first_name} And My Last Name Is ${last_name}. My Age Is ${age}.`;
//bio = "Hello First Name Is " + first_name + " And My Last Name Is " + last_name + ". My Age Is " + age;
console.log(bio);

let pageView = 9007199254740991999999999999999n + 10n;
console.log(typeof(pageView)); // 'bigint'
console.log(pageView); // 5e-324

var numbers = [10,50,100,38,40,35];