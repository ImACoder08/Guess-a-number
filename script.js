'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value;
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //no guess
  if (!guess && score > 1) {
    document.querySelector('.message').textContent = 'No number!';

    // When Player Wins
  } else if (guess === secretNumber && score > 1) {
    if (score > highscore) {
      highscore = score;
    }

    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.label-highscore').textContent =
      'highschore ' + highscore;
    //guess too high
  } else if (guess > secretNumber && score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too High!';

    //guess too low
  } else if (guess < secretNumber && score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too Low!';
  } else {
    //Loss
    document.querySelector('.message').textContent =
      'You Lost the Game!!! FAILURE';
    let score = 0;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing!';

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
