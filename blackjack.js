let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let hitEl = document.getElementById('hit-btn');
let startEl = document.getElementById('start-btn');
let playerEl = document.getElementById('player');

let player = {
  name: 'Phillip',
  chips: '250',
};

playerEl.textContent = player.name + ':' + ' $' + player.chips;

function start() {
  isAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  startEl.textContent = 'START GAME';
  hitEl.style.backgroundColor = 'gold';
  hitEl.style.color = 'rgb(10, 129, 9)';
  messageEl.style.color = 'white';

  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    messageEl.style.color = 'gold';
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    messageEl.style.color = 'red';
    isAlive = false;
    startEl.textContent = 'PLAY AGAIN';
    startEl.style.backgroundColor = 'gold';
    hitEl.style.backgroundColor = 'red';
    hitEl.style.color = 'white';
  }
  console.log(message);
  messageEl.textContent = message;
  sumEl.textContent = 'Sum: ' + sum;
  cardsEl.textContent = 'Cards: ' + cards.join(' ');
}

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function hit() {
  if (isAlive === true && hasBlackjack === false) {
    let newCard = randomCard();
    sum = sum + newCard;
    cards.push(newCard);
    renderGame();
  }
}
