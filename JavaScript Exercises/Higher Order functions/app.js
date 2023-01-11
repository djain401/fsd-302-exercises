//ForEach Exercise 1
let favoriteFood = ['Pasta','Brownies','Noodles','Chocolate'];

favoriteFood.forEach(element => {
    console.log(element);
});

//ForEach Exercise 2
let numArray = [1,2,4,5,6];

function summation(array){
    let sum = 0;
    array.forEach(element => {
        sum+=element;
    });

    return sum;
}

console.log(summation(numArray));


//ForEach Exercise 3
function product(array){
    let product = 1;
    array.forEach(element => {
        product*=element;
    });

    return product;
}

console.log(product(numArray));

//ForEach Exercise 4
let studentGrades = [70,20,53,64,78,60,32];
function passedGrades(studentGrades){
    let newArray = [];
    studentGrades.forEach(element => {
        if(element>50)
        {
            newArray.push(element);
        }
        
    });
    return newArray;
}

console.log(passedGrades(studentGrades));

///////////////////////////////////////////////
//Join Exercise 1
let students = ['Rachel','John','Matilda']; 
console.log(students.join(' '));

//Join Exercise 2

function toCSV(array)
{
    return(array.join(','));
}

console.log(toCSV(students));

///////////////////////////////////////////////

//Map Exercise 1

let kilometers = [1,2,3,11.5,5.7];

function toMiles(kilometers)
{
    let miles = [];
    miles = kilometers.map(element => (element/0.621371).toFixed(2));
    return miles;
}

console.log(toMiles(kilometers));

//Map Exercise 2
// let inputArray = ["18","27",19,21,"22",NaN,undefined];

// function newStudentArray(array)
// {
//     let newArray = [];
//     newArray = array.map(element => 
//         {
//                 console.log(typeof element);
//                 return Number(element);
            
//         }
//     )

//     return newArray;
// }

// console.log(newStudentArray(inputArray));




