// cards array holds all cards
let card = document.getElementsByClassName('card');
const cards = [...card];

// deck of all cards in game
const deck = document.getElementById('card-deck');

// array for opened cards
// const openedCards = [];

// @description function to start a new play
function startGame() {
  // remove all exisiting classes from each card
  console.log('startGame');
  for (let i = 0; i < cards.length; i++) {
    deck.innerHTML = '';
    [].forEach.call(cards, function(item) {
      deck.appendChild(item);
    });
    cards[i].classList.remove('show', 'open', 'match', 'disabled');
  }
}

// @description toggles open and show class to display cards
const displayCard = function() {
  console.log('displayCard');
  this.classList.toggle('open');
  this.classList.toggle('show');
  this.classList.toggle('disabled');
};

// @description shuffles cards when page is refreshed / loads
document.body.onload = startGame();

// loop to add displayCard listeners to each card
for (let i = 0; i < cards.length; i++) {
  console.log('add displayCard listener to each card');
  card = cards[i];
  card.addEventListener('click', displayCard);
}
