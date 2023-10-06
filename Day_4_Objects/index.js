// Creating Objects
let student = {
    name:"Sagar Maheta",
    age : 27,
    roll_number: 25,
    isPresent : true    
};

// access object property
console.log(student.name);
console.log(student["age"]);
console.log(student.age);

// updating details
student.name = "Maheta Sagar";
student["name"] = "Maheta Sagar A.";
console.log(student.name);

// add new property
student.class = "10th";
console.log(student.class);


// delete property
delete student.class;
console.log(student.class);

// check if property exists
if('age' in student)
{
    console.log(student.age);
}

console.log(student);
console.log(typeof(student));