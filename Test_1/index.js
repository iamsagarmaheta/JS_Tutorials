/*
Question 1 : Frequency In A Sorted Array 
Input : arr=[10,10,10,20,20,30,40,40]
output : 
10 = 3
20 = 2
30 = 1
40 = 2
*/

function countFrequency(numberList)
{
    // Input [10,10,10,20,20,30,40,40]
    let number = numberList[0]; // 10
    let frequency = 1;
    for(let index = 1; index < numberList.length; index++)
    {
        if(numberList[index] === number)
        {
            frequency++;
        }
        else
        {
            // print last frequency
            console.log(`${number} Is Occurred ${frequency} Times.`);
            // number change
            number = numberList[index];
            // frequency change
            frequency = 1;
        }
    }
    console.log(`${number} Is Occurred ${frequency} Times.`);
}

//countFrequency([10,10,10,20,20,30,40,40]);

/*
    Question 4 : Print Given Static Array Using Recursion (Array : 5,4,3,2,1)
    Output : 1,2,3,4,5
*/

function printArray(numberList, length, index)
{
    // base case / exit case
    if(length === index)
    {
        return;
    }

    // bigger to small problem
    console.log(numberList[index]);

    // recursive call
    printArray(numberList, length, ++index);    
}

//printArray([1,2,3,4,5], 5, 0);


/*
Question 3 : Write A Program To Store Information of Multiple Students In Object (Name, Age, Class, Roll Number)
Input : How Many Students Are There ? 
User: 5
Input : Enter Name For Student 1 :
User : Sagar
Input : Enter Age For Student 1 :
User : 26
Etc.....

Output : 
Student 1 Details : 
Name : 
Age : 
Class : 
Roll Number
---------------
Student 2 Details : 
Name : 
Age : 
Class : 
Roll Number
*/

// 1. get information about students
// 2. print student details

function getSingleStudentDetails()
{
    let studentData = {
        StudentName : "",
        Age : 0,
        Class : "",
        RollNumber: 0,
    };

    studentData.StudentName = prompt("Enter Student Name : ");
    studentData.Age = +prompt("Enter Age : ");
    studentData.Class = prompt("Enter Class : ");
    studentData.RollNumber = +prompt("Enter Roll Number : ");

    return studentData;
}

function printSingleStudentDetails(studentDetails)
{
    console.log(`======================================`);
    console.log(`Name : ${studentDetails.StudentName}`);
    console.log(`Age : ${studentDetails.Age}`);
    console.log(`Class : ${studentDetails.Class}`);
    console.log(`Roll Number : ${studentDetails.RollNumber}`);
}

function main()
{
    let studentTotal = +prompt("How Many Students You Have ?");
    let studentList = [];

    // Get Student Details
    for(let index = 0; index < studentTotal; index++)
    {
        let singleStudentObject = getSingleStudentDetails();
        studentList.push(singleStudentObject);
    }
    
    // Print Student Details
    for(let index = 0; index < studentTotal; index++)
    {
        printSingleStudentDetails(studentList[index]);
    }
}

main();