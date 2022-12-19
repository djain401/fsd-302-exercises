//Exercise 1 - Counting

//counting 1 to 10
for(let i=1;i<=10;i++){
    console.log(i);
}

//counting 10 to 1
for(let j=10;j>=1;j--){
    console.log(j);
}

//Exercise 2 - Tasks
let tasks = ["Cleaning","Cooking","Fixing"];

for (let i = 0;i < tasks.length;i++)
{
    console.log(`Task ${i+1}:${tasks[i]}`);
}

//Exercise 3- Last Loop Value is 1
let i=3;

while(i){
    alert(i--);
}

//Exercise 4 -Even numbers
for(let j=2;j<=10;j+=2){
    console.log(j);
}

//Exercise 5 
for (let x=0;x<3;x++)
{
    alert(`number ${x}!`);
}

let x=0;
while(x<3)
{
    alert(`number ${x}!`);
    x++;
}   

//Exercise 6
function sumInput(arrayOfNumbers)
{
    let sum = 0;
    let average = 0;
    for(i=0;i<arrayOfNumbers.length;i++)
    {
        sum+=arrayOfNumbers[i];
    }
    average = sum/i;
    // return sum;
    return average;
}

let numbers = [1,2,3];
console.log(sumInput(numbers));

//String || Exercise 1 :addFullStop

function addFullStop(someString)
{
    let result = someString.concat('.');
    return result;
}

console.log(addFullStop("I am a cat"));

//String || Exercise 2 :Capitalize
function capitalize(input)
{
    
    if(typeof input == 'string')
    {
        console.log(input.toUpperCase());

    }
    else{
        console.error("This is not a string");
    
    }
}

capitalize("The weather is chilly");