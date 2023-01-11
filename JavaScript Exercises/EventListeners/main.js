const btn= document.querySelector('button');
const dynamicContent = document.querySelector('#dynamic-content');

btn.addEventListener('click',()=>{
    dynamicContent.classList.toggle('hide');
})

const password = document.querySelector('#password').value;
console.log(password);

const submitbutton = document.querySelector('#submit');
submitbutton.addEventListener('click',() => {
    if(password.length<8){
        console.log('Password is invalid');
    }
    else{
        console.log('Password is valid')
    }
})