let grid = document.querySelector(".grid");
let cell;

const createCells = function (num) {
  for (let i = 0; i < num; i++) {
    cell = document.createElement("div");
    grid.appendChild(cell);
    cell.className = "cell";
  }
};

createCells(256);
