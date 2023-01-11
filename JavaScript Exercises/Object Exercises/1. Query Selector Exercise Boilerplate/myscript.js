//////////////// Query Selector Exercise //////////////////
/*
1. Given the boiler plate use query selector console log the following items on the page:​

    - The text Content of the H1 element​
    
    - The text content of the id “Hero”​
    -The text content of the first instance of the class “list”​

2. Add some text to the p tag with the id “dynamic-text”​
​*/

// Add Your JavaScript Below

let x;
x = document.querySelector('h1').textContent;
console.log(x);
x = document.querySelector('#hero').textContent;
console.log(x);
x = document.querySelectorAll('.list');
console.log(x[0].textContent);

document.querySelector('#dynamic-text').textContent = 'Dynamic text added';