// initializing variables to store values

let boardSideInput;  // stores user's input on number of cells per board side
const board = document.querySelector('.board'); // represents board 
let inCellNum = 16; // initial number of cells per board side 
let oldGridSize = Math.pow(inCellNum, 2); // initial full number of cells that the board contains by default

// function to build the initial grid on the initial page load

function setInitGrid() {
  let boardWidth = board.style.gridTemplateColumns = `repeat(${inCellNum}, 1fr)`; // setting grid-template-coulumns
  let boardHeight = board.style.gridTemplateRows = `repeat(${inCellNum}, 1fr)`;   // setting grid-template-rows

 // building the initial grid
  for (i=0; i<oldGridSize; i++){
    let cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    cell.style.borderTop = '1px solid gray';
    cell.style.borderLeft ='1px solid gray';
    cell.addEventListener('mouseover', ()=>{
      cell.style.backgroundColor = 'black';
    });
    board.appendChild(cell);
    };
};

// function with prompting a number of cells per side for the grid

function getBoardSide (){
  boardSideInput = prompt('Please enter the desired number of cells per board side but please keep it under 100');
  if(boardSideInput<=100){
  return boardSideInput + setGrid();
  }else{
    alert('Please enter a number less or equal to 100');
  }
};

// function for cleaning the grid. Invoked by the getBoardSide function on each user input

function clearGrid () {
  for (i=0; i<oldGridSize; i++){
    board.lastElementChild.remove();
  };
};

// sets the new grid after the user's input

function setGrid (){
  gridSize = Math.pow(boardSideInput, 2);  

  boardWidth = board.style.gridTemplateColumns = `repeat(${boardSideInput}, 1fr)`;
  boardHeight = board.style.gridTemplateRows = `repeat(${boardSideInput}, 1fr)`;
  
  clearGrid();

  for (i=0; i<gridSize; i++){
   let cell = document.createElement('div');
   cell.setAttribute('class', 'cell');
   cell.addEventListener('mouseover', ()=>{
     cell.style.backgroundColor = 'black';
   });
   cell.style.borderTop = '1px solid gray';
   cell.style.borderLeft ='1px solid gray';
   oldGridSize=gridSize;
   board.appendChild(cell);
 };
}

// button for setting a grid

const button = document.querySelector('#button');
button.addEventListener('click', getBoardSide);

setInitGrid();


