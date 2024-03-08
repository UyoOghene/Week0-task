const colortext = document.getElementById('colortext');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const orange = document.getElementById('orange');
const indigo = document.getElementById('indigo');
const violet = document.getElementById('violet');
const guesstxt =document.getElementById('output');
const colorguess = document.getElementById('colorguess');

// red.addEventListener('click',al);

function enterColor (e){

    if (e.key === "Enter"){
        const typeColor = colorguess.value;
        console.log(typeColor);
        
    }  
    const typeColor = colorguess.value;
    guesstxt.style.color = typeColor;


    if(typeColor === 'red'){
       red.style.border = '5px solid black';
       guesstxt.innerText = 'You chose red';
        }

    if(typeColor === 'blue'){
       blue.style.border = '5px solid black';
       guesstxt.innerText = 'You chose blue';
        }

    if(typeColor === 'green'){
       green.style.border = '5px solid black';
       guesstxt.innerText = 'You chose green';
        }

    if(typeColor === 'yellow'){
       yellow.style.border = '5px solid black';
       guesstxt.innerText = 'You chose yellow';
        }
    if(typeColor === 'orange'){
       orange.style.border = '5px solid black';
       guesstxt.innerText = 'You chose orange';
        }

    if(typeColor === 'indigo'){
       indigo.style.border = '5px solid black';
       guesstxt.innerText = 'You chose indigo';
        }

    if(typeColor === 'violet'){
       violet.style.border = '5px solid black';
       guesstxt.innerText = 'You chose violet';
        }
}

colorguess.addEventListener('keydown', enterColor);

function al(event){
    console.log(event.target.id);
    colortext.innerText=event.target.id;

}



function manos(){
    // console.log(colortext.innerText);
    colortext.innerText='red';
    colortext.style.backgroundColor='red';

    
}
red.addEventListener('click', manos);
function cred(){
    console.log(colortext.innerText);
    colortext.innerText='red';

}

// create a function to console log the color
function corange(){
    console.log(colortext.innerText);
    colortext.innerText='orange';
    colortext.style.backgroundColor='orange';

}

// addEventListener to the targeted element
orange.addEventListener('click',corange);

function cyellow(){
    console.log(colortext.innerText);
    colortext.innerText='yellow';
    colortext.style.backgroundColor='yellow';

}
yellow.addEventListener('click',cyellow);


function cblue(){
    console.log(colortext.innerText);
    colortext.innerText='blue';
    colortext.style.backgroundColor='blue';

}
blue.addEventListener('click',cblue);

function cgreen(){
    console.log(colortext.innerText);
    colortext.innerText='green';
    colortext.style.backgroundColor='green';

}
green.addEventListener('click',cgreen);

function cindigo(){
    console.log(colortext.innerText);
    colortext.innerText='indigo';
    colortext.style.backgroundColor='indigo';

}
indigo.addEventListener('click',cindigo);

function cviolet(){
    console.log(colortext.innerText);
    colortext.innerText='violet';
    colortext.style.backgroundColor='violet';

}
violet.addEventListener('click',cviolet);


























// const redbox = document.querySelectorAll('.red');
// redbox.forEach(function(box) {
//     box.addEventListener('click',function boxtext(){const txt= document.getElementById('colortext');
//     const content = '<p>red</p>';
//     txt.innerHTML=content;}
// );
// });

// const orangebox = document.querySelectorAll('.orange');
// orangebox.forEach(function(box) {
//     box.addEventListener('click', function boxtext(){const txt= document.getElementById('colortext');
//     const content = '<p>orange</p>';
//     txt.innerHTML=content;}
// );
// });

// const yellowbox = document.querySelectorAll('.yellow');
// yellowbox.forEach(function(box) {
//     box.addEventListener('click',function boxtext(){const txt= document.getElementById('colortext');
//     const content = '<p>yellow</p>';
//     txt.innerHTML=content;}
// );
// });

// const bluebox = document.querySelectorAll('.blue');
// bluebox.forEach(function(box) {
//     box.addEventListener('click', function boxtext(){const txt= document.getElementById('colortext');
//     const content = '<p>blue</p>';
//     txt.innerHTML=content;}
// );
// });
// const greenbox = document.querySelectorAll('.green');
// greenbox.forEach(function(box) {
//     box.addEventListener('click', function boxtext(){const txt= document.getElementById('colortext');
//     const content = '<p>green</p>';
//     txt.innerHTML=content;}
// );
// });

// const indigobox = document.querySelectorAll('.indigo');
// indigobox.forEach(function(box) {
//     box.addEventListener('click', function boxtext(){const txt= document.getElementById('colortext');
//     const content = '<p>violet</p>';
//     txt.innerHTML=content;}
// );
// });

// const violetbox = document.querySelectorAll('.violet');
// violetbox.forEach(function(box) {
//     box.addEventListener('click', function boxtext(){const txt= document.getElementById('colortext');
//     const content = '<p>indigo</p>';
//     txt.innerHTML=content;}
//     );
// });

