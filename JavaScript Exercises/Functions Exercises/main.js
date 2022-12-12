//Exercise 1
function simpleFunction()
{
    return "Hello World";
}

console.log(simpleFunction());

//Exercise 2
function quadrupler(paramOne){
    return paramOne * 4;
}
console.log(quadrupler(2));
console.log(quadrupler(3));
console.log(quadrupler(10));

//Exercise 3

function welcome(firstName,lastName){

    return `Hello ${firstName.toLowerCase()} ${lastName.toUpperCase()} , how can I help you?` ;

}

console.log(welcome("Divya","Jain"));
console.log(welcome("ermias","kidane"));

//Exercise 4

function temperatureConverter(fahrenheit)
{
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius;
}

console.log(temperatureConverter(100));
console.log(temperatureConverter(0));
console.log(temperatureConverter(10));

//Exercise5

function humanYearsToDogYears(humanYears,name)
{
    if(humanYears<= 15)
    {
        result = 1;
        return `${name}'s age is ${result} dogyears`;
    }
    else if(humanYears>15 && humanYears<=24)
    {
        result = 2;
        return `${name}'s age is ${result} dogyears`;
    }
    else
    {
        result = 2 + (humanYears-24)/5;
        return `${name}'s age is ${result} dogyears`;
    }
}

console.log(humanYearsToDogYears(29,'Divya'));


//Exercise 6
function calculator(first,second,third){


     if(isNaN(first) || isNaN(third) ){

       
        result = 'Error not a number';
        return(result);
    }
    
    else{
    
     switch(second)  {
        case '+':
            result = first + third;
            break;
        case '-':
            result = first - third;
            break;
        case '*':
            result = first * third;
                break;
        case '/':
            result = first / third;
             break;
        default:
            result = 'Error not a valid operand';
     }

   
     return(result);
       
    }
    
    

}

console.log(calculator(1,'+','£'));

//Exercise 7

function min(a,b)
{
    if(!(isNaN(a) || isNaN(b)))
    {
        if(a>b) {
            return b;
        }
        else {
            return a;
        }
    }
    else{
        let message = 'Enter a valid number';
        return message;
    }
}

console.log(min(4,20));

//Exercise 8

function pow(x,n)
{
    result = x**n;
    return result;
}

console.log(pow(2,4));