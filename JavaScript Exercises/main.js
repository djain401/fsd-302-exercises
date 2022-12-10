//Exercise 1 - Password check
let password = 'password1234';
if (password.length > 7)
{       
    console.log(true);
}
else{
    console.log(false);
}
//Exercise 2 - Height test
let height = 150;
if(typeof(height) != "number")
{
    console.log("Please enter a number");
}
else if(height >= 150)
{   
    console.log("You can go the ride");
}
else{
    console.log("Sorry you are not tall enough");
}
//Exercise 3 - Dice Prize
let diceOne = Math.floor(Math.random()*6 + 1);
let diceTwo = Math.floor(Math.random()*6 + 1);
console.log(diceOne);
console.log(diceTwo);
if(diceOne === 6 && diceTwo === 6)
{
    console.log(`You rolled a ${diceOne} and ${diceTwo} and you win the top prize - a bear!`);
}
else if(diceOne === diceTwo){
    console.log(`You rolled a ${diceOne} and ${diceTwo} and you win three free throws!`);
}
else if(diceOne % 2 === 0 || diceTwo % 2 === 0)
{
    console.log(`You rolled a ${diceOne} and ${diceTwo} and you win one free throw!`);
}
else{
    console.log(`You rolled a ${diceOne} and ${diceTwo} and you lose the game!`)
}



