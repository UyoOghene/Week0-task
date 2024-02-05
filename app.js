
// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'indigo',
//     'violet'
// ];

 // Function to handle color clicks
 function handleColorClick(color) {
    displayClickedColor(color);
    highlightColorSquare(color);
}

// Function to display clicked color below the color box
function displayClickedColor(color) {
    const displayColor = document.getElementById('display-color');
    displayColor.textContent = color;
}

// Function to highlight clicked color square
function highlightColorSquare(color) {
    const colorSquares = document.querySelectorAll('.color-square');
    colorSquares.forEach(square => square.style.border = 'none');
    const clickedSquare = document.getElementById(color);
    clickedSquare.style.border = '2px solid black';
}

// Event listeners for color clicks
document.getElementById('red').addEventListener('click', function () {
    handleColorClick('red');
});

document.getElementById('blue').addEventListener('click', function () {
    handleColorClick('blue');
});

document.getElementById('green').addEventListener('click', function () {
    handleColorClick('green');
});

document.getElementById('yellow').addEventListener('click', function () {
    handleColorClick('yellow');
});

document.getElementById('indigo').addEventListener('click', function () {
    handleColorClick('indigo');
});

document.getElementById('violet').addEventListener('click', function () {
    handleColorClick('violet');
});


// function displayClickedColor(color) {
//     const displayColor = document.getElementById('display-color');
//     displayColor.textContent = color;
// }
// // Function to highlight clicked color square
// function highlightColorSquare(square) {
//     const colorSquares = document.querySelectorAll('.color-square');
//     colorSquares.forEach(square => square.classList.remove('clicked'));
//     square.classList.add('clicked');
// }

// applyColors();