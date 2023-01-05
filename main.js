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
let winner;
 




// /*----- cached elements  -----*/


const slot = document.getElementById('slot');
// const slot2 = document.getElementById('slot2');
// const slot3 = documnet.getElementById('slot3');
const playButton = document.getElementById('spin');





// /*----- event listeners -----*/
playButton.addEventListener('click', spinSlot);




// 1. Randomly access 3 items from the array and render them to the DoM
// 2. Cache a reference to those 3 items from the array
// 3. Check if these 3 items match each other
// 4. If they dont match the player loses money or say if they win


// /*----- functions -----*/
function spinSlot() {
  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * items.length);
    const slot = document.getElementById(`slot-${i}`);
    const items = items[index];
    slot.innerText = items;
  }
  console.log('buttonClicked')
}


 
