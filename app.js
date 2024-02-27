const colortext = document.getElementById('colortext');
const red = document.getElementById('red');
const colorguess = document.getElementById('colorguess');

// red.addEventListener('click',al);

function enterColor (e){
    // e.preventDefault();

    if (e.key === "Enter"){
        console.log(colorguess.value);
        
    }

   
}
colorguess.addEventListener('keydown', enterColor);


// function al(event){
//     console.log(event.target.id);
//     colortext.innerText=event.target.id;

// }
// console.log(vaColor);












// // console.log('hi');
// function manos(){
//     // console.log(colortext.innerText);
//     colortext.innerText='red';
// }
// red.addEventListener('click', manos);


// // First target the element then declare as a variable
// const orange=document.getElementById('orange');

// // create a function to console log the color
// function corange(){
//     console.log(colortext.innerText);
//     colortext.innerText='orange';
// }
// // addEventListener to the targeted element
// orange.addEventListener('click',corange);

// const yellow=document.getElementById('yellow');
// function cyellow(){
//     console.log(colortext.innerText);
//     colortext.innerText='yellow';
// }
// yellow.addEventListener('click',cyellow);


// const blue=document.getElementById('blue');
// function cblue(){
//     console.log(colortext.innerText);
//     colortext.innerText='blue';
// }
// blue.addEventListener('click',cblue);

// const green=document.getElementById('green');
// function cgreen(){
//     console.log(colortext.innerText);
//     colortext.innerText='green';
// }
// green.addEventListener('click',cgreen);

// const indigo=document.getElementById('indigo');
// function cindigo(){
//     console.log(colortext.innerText);
//     colortext.innerText='indigo';
// }
// indigo.addEventListener('click',cindigo);

// const violet=document.getElementById('violet');
// function cviolet(){
//     console.log(colortext.innerText);
//     colortext.innerText='violet';
// }
// violet.addEventListener('click',cviolet);


























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

