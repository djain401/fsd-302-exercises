////////////////  Query Selector All ////////////////////

/* 
1. Given the boiler plate use query selector console log the following items on the page:​

    - The second p tag​
    - All of the list items​ with the class list
    - The text content of the third instance of the class “list”​
    - The length of the list.

*/

// Write your JavaScript below
let x;
x = document.querySelectorAll('p');
console.log(x[1]);

x = document.querySelectorAll('.list');
console.log(x);

console.log(x[2].textContent);

console.log(x.length);