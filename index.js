let mod = 20 % 3;
mod = -20.25 % 3;
console.log(mod);

let a = 10;
let b = a++;   //    a++  post increment      ++a    pre increment

console.log("B = " + b);
console.log("A = " + a);

a = 10;
b = a--;   //    a--  post decrement      --a    pre decrement

console.log("B = " + b);
console.log("A = " + a);

a = -a;
a = -a;
console.log("A = " + a);


console.log('10' == 10); // true
console.log('10' === 10); // false

console.log('10' != 10); // false
console.log('10' !== 10); // true


let stuname = "sagar";
let bio = "";

// if(bio == undefined)
// {
//     bio = stuname;
// }

//bio = bio || stuname;
bio ||= stuname;
console.log(bio);


// power operator (Exponentiation Operator)
let power = 8 ** 3;
console.log(power);


let age = 18;
// 18+  you can vote
// you can not vote
if(age >= 18)
{
    console.log("You Can Vote");
}
else
{
    console.log("You Can Not Vote")
}

console.log(age >= 18 ? "You Can Vote" : "You Can Not Vote");


/*

1
12
123
1234
12345

*/
let row = 1;
let col = 1;
while(row <= 5)
{
    col = 1;
    let output = "";
    while(col <= row)
    {    
        output = output + " " + col;
        col++;
    }
    console.log(output);
    row++;
}


let x = 10;
let y = (x++, x + 1);

console.log(x, y); //x = 11 , y = 12;