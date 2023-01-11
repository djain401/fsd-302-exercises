//Exercise 0
const spaceCraft = {
    size: 10,
    range: 7,
    model: 'Apollo',
    capacity: 6
}
console.log(spaceCraft.range);
for (let n in spaceCraft){
    console.log(spaceCraft[n]);
}

//Exercise 1
let person = {
    firstName: 'John',
    lastName: 'Dobson',
    age: 45,
    eyeColor: 'blue'
}

console.log(person.firstName);
console.log(person.age);
console.log(person['eyeColor']);
console.log(person['lastName']);

person = {
    firstName: 'Kate',
    lastName: 'Moss',
    age: 30,
    eyeColor: 'green'
}
console.log(person);
person.height = 6;
console.log(person.hasOwnProperty('height'));

//Exercise 2
let myObj = {
    gift: 'Pony',
    pet: 'kitten',
    bed: 'sleigh'
}

function objectPropertyValue(property){

    if(myObj.hasOwnProperty(property))
    {
        return myObj[property];
    }

}

console.log(objectPropertyValue('gift'));

//Exercise 3

let album1={
    name: 'Yellow',
    artist:'Coldplay',
    releaseDate: 2010
}

let album2={
    name: 'This is acting',
    artist:'Sia',
    releaseDate: 2016
}


let array = [];
array.push(album1);
array.push(album2);
array.forEach(element => {
    
    console.log(element)
});

//Exercise 4
let myPlants = [
{
    type: 'flowers',
    list: ['rose','tulip','dandelion']
},
{
    type: 'trees',
    list: ['fir','pine','birch']
}]

console.log(myPlants[1].list[1]);

//Exercise 5
let staffMember = {
    firstName:'Divya',
    lastName:'Jain',
    id:2,
    fullName:function (){ return this.firstName+' '+ this.lastName}
};

console.log(staffMember.fullName());