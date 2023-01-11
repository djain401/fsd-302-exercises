let favoriteFood =['Cherries','Pasta','Chinese']; 

const textInsert = document.querySelector('#dynamicContent');
textInsert.innerHTML ='<ul></ul>';

favoriteFood.forEach(element => {
    document.querySelector('#dynamicContent ul').innerHTML += `<li>${element}</li>`
});

document.querySelector('body').classList.add('darkMode');