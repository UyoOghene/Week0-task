
// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'indigo',
//     'violet'
// ];


const redbox = document.querySelectorAll('.red');
redbox.forEach(function(box) {
    box.addEventListener('click',function boxtext(){const txt= document.getElementById('colortext');
    const content = '<p>red</p>';
    txt.innerHTML=content;}
);
});

const orangebox = document.querySelectorAll('.orange');
orangebox.forEach(function(box) {
    box.addEventListener('click', function boxtext(){const txt= document.getElementById('colortext');
    const content = '<p>orange</p>';
    txt.innerHTML=content;}
);
});

const yellowbox = document.querySelectorAll('.yellow');
yellowbox.forEach(function(box) {
    box.addEventListener('click',function boxtext(){const txt= document.getElementById('colortext');
    const content = '<p>yellow</p>';
    txt.innerHTML=content;}
);
});

const bluebox = document.querySelectorAll('.blue');
bluebox.forEach(function(box) {
    box.addEventListener('click', function boxtext(){const txt= document.getElementById('colortext');
    const content = '<p>blue</p>';
    txt.innerHTML=content;}
);
});
const greenbox = document.querySelectorAll('.green');
greenbox.forEach(function(box) {
    box.addEventListener('click', function boxtext(){const txt= document.getElementById('colortext');
    const content = '<p>green</p>';
    txt.innerHTML=content;}
);
});

const indigobox = document.querySelectorAll('.indigo');
indigobox.forEach(function(box) {
    box.addEventListener('click', function boxtext(){const txt= document.getElementById('colortext');
    const content = '<p>violet</p>';
    txt.innerHTML=content;}
);
});

const violetbox = document.querySelectorAll('.violet');
violetbox.forEach(function(box) {
    box.addEventListener('click', function boxtext(){const txt= document.getElementById('colortext');
    const content = '<p>indigo</p>';
    txt.innerHTML=content;}
    );
});

