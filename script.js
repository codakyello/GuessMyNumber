'use strict';
// Button Elements
const checkEl = document.querySelector('.check');
const resetEl = document.querySelector('.again');

// Elements
const inputEl = document.querySelector('.guess');
const scoreEl = document.querySelector('.score');
const jackEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const highScoreEl = document.querySelector('.highscore');

//Generate Number
let randomNumber = Number(Math.trunc(Math.random() * 20) + 1);
let score = 20;
let highScore = 0;

//Check Guess
const checkGuess = function () {
  const guess = inputEl.value;
  if (randomNumber > guess) {
    messageEl.textContent = 'Too low!!!';
    countScore();
  } else if (randomNumber < guess) {
    messageEl.textContent = 'Too high!!!';
    countScore();
  } else {
    console.log('You win!!');
    jackEl.textContent = guess;
    messageEl.textContent = 'You win!!';
    document.body.style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  }
};
checkEl.addEventListener('click', checkGuess);

// Count Scores
const countScore = function () {
  score -= 1;
  scoreEl.textContent = score;
};

// Reset Game
const reset = function () {
  messageEl.textContent = 'Start guessing...';
  score = 20;
  highScore = 0;
  scoreEl.textContent = 20;
  highScoreEl.textContent = 0;
  document.body.style.backgroundColor = '#222';
  inputEl.value = '';
  jackEl.textContent = '?';
};

resetEl.addEventListener('click', reset);
