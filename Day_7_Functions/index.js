// Basic Function With Parameters
function printData(message) {
    console.log('Hello From Function : ' + message);
}

printData('M1');
printData('M2');
printData('M3');

// function calculate addition & return it
function calculateAddition(number1, number2) {
    let answer = number1 + number2;
    return answer;
}

let result = calculateAddition(10, 20);
result = calculateAddition(50, 60);
console.log('Addition : ' + result);

// Default Arguments
function calculateAreaOfCircle(radius, PI = 3.14) {
    return PI * (radius * radius);
}

result = calculateAreaOfCircle(10);
console.log('Radius : ' + result);
result = calculateAreaOfCircle(20, 3.14);
console.log('Radius : ' + result);
result = calculateAreaOfCircle(20, 3.15);
console.log('Radius : ' + result);


// hoisting 
addNumbers(10,20,30,40,50);
addNumbers(70,80,90);
addNumbers();

// dynamic size arguments
function addNumbers()
{
    let sum = 0;
    for(let index = 0; index < arguments.length; index++)
    {
        sum += arguments[index];
    }
    console.log("Sum : " + sum);
}

// assigning function to a variable OR converting a function into variable.
let unlimitedSum = addNumbers;
unlimitedSum(20,30,40);