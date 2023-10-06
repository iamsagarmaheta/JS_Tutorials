// creating array
let number_list = [11, 22, 33, 44, 55];
let student_name = ['Sagar', 'Bob', 'Ronaldo', 66, 77, true, false, 3.14];

let old_data = new Array('Pele', 'Maldini', 'Messi', 55, 7);

let empty_data = [];
let empty_list = new Array();


// accessing array
console.log("3rd Element " + number_list[2]);
console.log("Player " + old_data[2]);

// updating array
old_data[2] = "Ronaldo";
console.log("Player " + old_data[2]);

// size of array
console.log("Size Of Array " + number_list.length);
console.log(typeof number_list);    

// add new element
number_list[number_list.length] = 66;
number_list.push(77);
number_list.unshift(88); // enter value at beginning

// remove element
let deleted_number = number_list.pop();
console.log( "deleted_number : " + deleted_number);

// find index of elemetn
let idx = old_data.indexOf('Pele');
console.log( "idx : " + idx);

idx = number_list.indexOf(666);
console.log( "idx of 666 : " + idx);


for(let index = 0; index < number_list.length; index++)
{
    //console.log(number_list[index]);
}


// check if array
if(Array.isArray(number_list) == true)
{
    console.log("number_list Is Array.");
}

let person = {
    name: "sagar"
};
if(Array.isArray(person) == false)
{
    console.log("person Is No Array.");
}