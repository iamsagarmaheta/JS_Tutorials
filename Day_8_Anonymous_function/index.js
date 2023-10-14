// assigning function to a variable OR converting a function into variable.
let unlimitedSum = addNumbers;
unlimitedSum(20,30,40);


// anonymous function
let printName = function (user_name)
{
    console.log("Hello, "+user_name+" From Fun 1");
}
printName("Sagar");


// arrow function
let greetUser = () => 
{
    console.log("Hello From Anonymous Function.");
}
greetUser();

// arrow function with args
let calcAverage = (num1, num2) => 
{
    return (num1 + num2) / 2;
}
console.log("Avg(10,20) : " + calcAverage(10,20));

// arrow function with args
let calcAverage_shortcut = (num1, num2) => (num1 + num2) / 2;
console.log("Avg_shortcut(10,20) : " + calcAverage_shortcut(10,20));