const gridContainer = document.querySelector('#grid');

// Set the size of the grid container
gridContainer.style.width = '512px';
gridContainer.style.height = '512px';

// Loop through the rows and columns of the grid
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    // Create a new square div element
    const square = document.createElement('div');
    square.classList.add('square');

    // Set the size and border of the square div element
    square.style.width = '30px';
    square.style.height = '30px';
    square.style.outline = 'solid lightgray 1px';
    square.style.margin = '1px';
    // Add the square div element to the grid container
    gridContainer.appendChild(square);
  }
}
const cellBlock = document.querySelectorAll('.square');

cellBlock.forEach((item) => {
  item.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'black';
  });
});

const clearButton = document.querySelector('.clearbutton');

clearButton.onclick = function () {
  for (let i = 0; i < cellBlock.length; i++) {
    cellBlock[i].style.backgroundColor = 'white';
  }
};

const selectSize = document.querySelector('.selectsize');
