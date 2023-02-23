const gridContainer = document.querySelector('#grid');

// Set the size of the grid container
gridContainer.style.width = '500px';
gridContainer.style.height = '500px';

// Loop through the rows and columns of the grid
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    // Create a new square div element
    const square = document.createElement('div');
    square.classList.add('square');

    // Set the size and border of the square div element
    square.style.width = 500 / 16 + 'px';
    square.style.height = 500 / 16 + 'px';
    square.style.outline = 'solid lightgray 1px';
    // Add the square div element to the grid container
    gridContainer.appendChild(square);
  }
}

// Select an individual cell block
let cellBlock = document.querySelectorAll('.square');

// Make the cell block black if you hover the mouse over it
cellBlock.forEach((item) => {
  item.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'black';
  });
});

// Clear the board and make all cell blocks white again
const clear = function () {
  for (let i = 0; i < cellBlock.length; i++) {
    cellBlock[i].style.backgroundColor = 'white';
  }
};

const clearButton = document.querySelector('.clear-button');

clearButton.onclick = function () {
  clear();
};

// Prints the range slider value below it as it is being adjusted
const rangeSlider = document.getElementById('range-slider');
const sliderValue = document.getElementById('slider-value');

rangeSlider.addEventListener('input', () => {
  sliderValue.innerText = rangeSlider.value;
  clear();

  const removedSquares = document.querySelectorAll('.square');
  removedSquares.forEach((item) => item.remove());

  // Loop through the rows and columns of the grid, using the values inputted by the user
  for (let i = 0; i < rangeSlider.value; i++) {
    for (let j = 0; j < rangeSlider.value; j++) {
      // Create a new square div element
      const square = document.createElement('div');
      square.classList.add('square');

      // Set the size and border of the square div element, using the values inputted by the user
      square.style.width = 500 / rangeSlider.value - 0.01 + 'px';
      square.style.height = 500 / rangeSlider.value - 0.01 + 'px';
      square.style.outline = 'solid lightgray 1px';
      // Add the square div element to the grid container
      gridContainer.appendChild(square);

      // Make the cell block black if you hover the mouse over it
      square.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = 'black';
      });
    }
    cellBlock = document.querySelectorAll('.square');
  }
});
