// /*----- constants -----*/


const items = [
  '🍭',
  '❌',
  '💵',
  '🦖'
];



// /*----- state variables -----*/
let gameState = 0;
// If gameState equals 0 begin a knew game the player just pressed reset
// if gameState equals 1 the game is over and the the player just pressed play

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


// /*----- functions -----*/
function handlePlayButton() {
  gameState = 1;
  const slotIdx = [randNum(), randNum(), randNum()];
  renderSlotImages(slotIdx);
  const resultMessage = checkWinner(slotIdx);
  renderMessage(resultMessage)
}

function handleResetButton() {
  gameState = 0;
  renderSlotImages();
  renderMessage();
}

function randNum() {
  return Math.floor(Math.random() * items.length);
}

function renderSlotImages(slotIdx) {
  if (gameState === 1) {
    slot1El.innerHTML = items[slotIdx[0]]
    slot2El.innerHTML = items[slotIdx[1]]
    slot3El.innerHTML = items[slotIdx[2]]
    } else {
    slot1El.innerHTML = "?"
    slot2El.innerHTML = "?"
    slot3El.innerHTML = "?"
  }
}

function checkWinner(slotIdx) {
  let winMessage = ""
  if (slotIdx[0] === slotIdx[1] && slotIdx[1] === slotIdx[2]) {
    winMessage = "Jackpot!"
  } else {
   winMessage = "Try Again!"
  }
  return winMessage; 
}

function renderMessage(winMessage) {
  if (gameState === 1) {
      messageEl.innerHTML = winMessage;
    } else {
      messageEl.innerHTML = "Spin The Bin!";
  }
}

