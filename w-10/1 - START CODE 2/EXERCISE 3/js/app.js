const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
 
  // 1 - Random color for card
  const contain = document.getElementById('containerId');
  let newCard = document.createElement('div');
  newCard.className = 'card';
  newCard.innerHTML = (`<p id='pt'>Description</p><div class="card-footer"><button id='remove'>Remove Card</button></div>`);
  newCard.style.backgroundColor = randomColor();
  contain.appendChild(newCard);

};

let removecard = ()=>{
  const card = document.getElementsByClassName('card');
  card.remove();

}
//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);
const rmv = document.getElementById('remove');
rmv.addEventListener('click',removecard);