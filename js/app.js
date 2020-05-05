// cards array holds all cards
let card = document.getElementsByClassName('card');
let cards = [...card];

// deck of all cards in game
const deck = document.getElementById('card-deck');

// close icon in modal
const closeicon = document.querySelector('.close');

// declare modal
const modal = document.getElementById('popup1');

// array for opened cards
const openedCards = [];

// @description function to start a new play
function startGame() {
  // shuffle deck
  //   cards = shuffle(cards);
  // remove all exisiting classes from each card
  for (let i = 0; i < cards.length; i++) {
    deck.innerHTML = '';
    [].forEach.call(cards, function(item) {
      deck.appendChild(item);
    });
    cards[i].classList.remove('show', 'open', 'match', 'disabled');
  }
}

// @description shuffles cards when page is refreshed / loads
document.body.onload = startGame();

// @description toggles open and show class to display cards
var displayCard = function() {
  this.classList.toggle('open');
  this.classList.toggle('show');
  this.classList.toggle('disabled');
};

// @description add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
  openedCards.push(this);
  var len = openedCards.length;
}

// @description game timer
// let second = 0;
// let minute = 0;
// let hour = 0;
// let timer = document.querySelector('.timer');
// var interval;
// function startTimer() {
//   interval = setInterval(function() {
//     timer.innerHTML = minute + 'mins ' + second + 'secs';
//     second++;
//     if (second === 60) {
//       minute++;
//       second = 0;
//     }
//     if (minute === 60) {
//       hour++;
//       minute = 0;
//     }
//   }, 1000);
// }

// @description close icon on modal
// function closeModal() {
//   closeicon.addEventListener('click', function(e) {
//     modal.classList.remove('show');
//     startGame();
//   });
// }

// loop to add event listeners to each card
for (let i = 0; i < cards.length; i++) {
  card = cards[i];
  card.addEventListener('click', displayCard);
  card.addEventListener('click', cardOpen);
  //   card.addEventListener('click', congratulations);
}
