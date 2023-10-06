let addition = 10_00_00_000.0000_100_12;
console.log(addition);

// typecasting (String To Number)
let amount = "123";
console.log(typeof(amount)); // string

console.log(isNaN(amount)); // to check whether it is valid number

//amount = parseInt(amount); // convert to number
//amount = amount * 1;    // convert to number
amount = +amount; // convert to number

console.log(typeof(amount)); // number
console.log(amount); // number


// typecasting Number TO String
let username = 1234;
username = username + "";
console.log(typeof(username)); // string
console.log(username); // "1234"


// typecasting to bool

//string to boolean rule 
//      for non-empty string it will return true. Ex. "true", "false", "hello"....
//      for empty string it will return false. ex. ""

let isTall = "false";  // non empty string -> true  
isTall = ""; // empty string => false 
isTall = Boolean(isTall);
console.log(typeof(isTall)); // boolean
console.log(isTall); // false


//number to boolean rule 
//      If 0 Or NaN Then False Otherwise True

let isShort = 500; // true
isShort = 0; // false
isShort = Boolean(isShort);
console.log(typeof(isShort)); // boolean
console.log(isShort); // False

// string typecasting
let data = 125;
data = data.toString();
console.log(typeof(data)); // string
console.log(data); // "false"

// string escape sequence
let bio = "Name : Sagar \n\rEduction : MCA \n Job : Software.";
console.log(bio);
console.log(bio.length);
console.log(bio[4]);

/*
for(let index = 0; index < bio.length; index++)
{
    console.log(bio[index]);
}
*/

let char_1 = 'C';
let char_2 = 'b';
if(char_1 > char_2)
{
    console.log(char_1 + " Is Bigger");
}
else
{
    console.log(char_2 + " Is Bigger");
}