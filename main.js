/*----- constants -----*/

(function () {
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


 
/*----- state variables -----*/


const slots = document.querySelectorAll('.slots');


/*----- cached elements  -----*/

document.querySelector('#spin').addEventListener('click', spin)
document.querySelector('#reset').addEventListener('click', init)


/*----- event listeners -----*/





/*----- functions -----*/

function init(firstInit = true, groups = 1, duration = 1) {
  for (const slot of slots) {
    if (firstInit) {
      slot.dataset.spinned = '0';
    }
}

      
