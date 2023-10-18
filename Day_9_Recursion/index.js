// Recursion
function printNumbers(limit)
{
    // base case (for loop condition)
    if(limit == 0)
    {
        return;
    }

    // solve small problem (for loop inner code)
    console.log(limit);

    // recursive call (for loop increment/decrement)
    printNumbers(limit-1);
}

let user_input = +prompt("How Many Numbers You Want ? ", "5");
printNumbers(user_input);


// function to calculate n natural number.
function calculateNumber(limit)
{
    // base case
    if(limit == 0)
    {
        return 0;
    }

    return limit + calculateNumber(limit-1);

    /*
    let answer = 0;
    for(let index = 1; index <= limit; index++)
    {
        answer += index;
    }
    return answer;
    */
}
console.log(calculateNumber(user_input));

function power(base, power)
{
    
}