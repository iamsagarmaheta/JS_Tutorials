let myAge = 15;

// pass by value 
function doubleMyAge(age)
{
    age = age * 2;
}

console.log("Age Before Function Call :" + myAge);

// we pass value of variable not actual variable
doubleMyAge(myAge);

console.log("Age After Function Call :" + myAge); // 15



let person = {
    person_name : "Sagar",
    age : 26,
};

// pass by ref.
function doubleMyAge_obj(person_data)
{
    person_data.age = person_data.age * 2;
}

console.log("Person Before Function Call :");
console.log(person);

doubleMyAge_obj(person);

console.log("Person After Function Call :");
console.log(person);



let number_list = [10,20,30,40,50];

// pass by ref.
function doubleTheValue(arr_list)
{
    for(let index = 0; index < arr_list.length; index++)
    {
        arr_list[index] *= 2;
    }
}

console.log(number_list);
doubleTheValue(number_list);
console.log(number_list);