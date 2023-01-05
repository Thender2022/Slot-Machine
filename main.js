// /*----- constants -----*/


const items = [
  '🍭',
  '❌',
  '⛄️',
  '🦄',
  '🍌',
  '💩',
  '👻',
  '😻',
  '💵',
  '🤡',    
  '🦖',
  '🍎',
  '😂',
  '🖕',
];



// /*----- state variables -----*/
let winner = 0;
// If winner equals 0 begin a knew game the player just pressed reset
// if winner equals 1 the game is over and the the player just pressed play

// /*----- cached elements  -----*/


const slot1El = document.querySelector('.slot1');
const slot2El = document.querySelector('.slot2');
const slot3El = document.querySelector('.slot3');
const messageEl = document.querySelector('h2');

const playButtonEl = document.getElementById('spin');
const resetButtonEl = document.getElementById('reset');

// /*----- event listeners -----*/
playButtonEl.addEventListener('click', handlePlayButton);
resetButtonEl.addEventListener('click', handleResetButton);

// 1. Randomly access 3 items from the array and render them to the DoM
// 2. Cache a reference to those 3 items from the array
// 3. Check if these 3 items match each other
// 4. If they dont match the player loses money or say if they win


// /*----- functions -----*/
function handlePlayButton() {
  winner = 1;
}

function handleResetButton() {
  winner = 0;
}

function generateSlotIndexes() {
  
    
  }
  
}

function renderSlotImages() {

}

function checkWinner() {

}

function renderMessage() {

}

function init() {

}