//Exercise 1 - Breakfast

let breakfast = ["Fruit","Juice","Cereal",];

console.log(breakfast);
breakfast.push("Nuts");
console.log(breakfast);
console.log(breakfast.length);

//Exercise 2 - Last Value
function lastValue(array1){
    return array1[array1.length - 1];
}

let myArray = [1,2,3,5,6,7];
console.log(lastValue(myArray));

//Exercise 3 - Music

let musicGenres = ["Rock","Rap"];
musicGenres.push("Jazz");
console.log(musicGenres);
let middleIndex =((musicGenres.length + 1)/2) - 1;
musicGenres.splice(middleIndex,1,"Classical");
console.log(musicGenres);
musicGenres.unshift("Blues","Reggae");
console.log(musicGenres);

//Exercise 4 :Sort
function sortArray(array1){
    let result = array1.sort();
    return result;
}

console.log(sortArray(breakfast));


