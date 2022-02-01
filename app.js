const GRID = document.querySelector('.grid');
const clearBtn = document.getElementById('clear-btn');
const gridText = document.querySelector('#size');

let SQUARE = document.querySelectorAll('.square');

function createGrid(gridSize) {
  let attributeSize = gridSize;

  gridText.textContent = `${attributeSize} X ${attributeSize}`;

  gridSize *= gridSize;
  
  divRemove = document.querySelectorAll('.square');

  divRemove.forEach(item => {
    GRID.removeChild(item);
  })
  
  for (let i=0; i<gridSize; i++) {
    let div = document.createElement('div');
    div.className = 'square';
    GRID.appendChild(div);
  }
  createListener();
  
  GRID.setAttribute('style', `grid-template-columns: repeat(${attributeSize}, 1fr); grid-template-rows: repeat(${attributeSize}, 1fr)`);
}

function createListener() {
  SQUARE = document.querySelectorAll('.square');

  SQUARE.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = 'black';
    })
  });
}
createGrid(16); //runs that function to create initial grid

function clearHandler() {
  SQUARE.forEach(item => {item.style.backgroundColor = 'white';})

  let newGrid = 0;

  do {
    newGrid = prompt('enter new square grid size, max 100', '');
  } while (newGrid > 100);

  createGrid(newGrid);
}


clearBtn.addEventListener('click', clearHandler);