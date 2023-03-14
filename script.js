'use strict';
let score = 20;
let highscore = 0;
let secretNumber = Math.ceil(Math.random() * 20);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess)
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');
  //When player  wins
  else if (guess === secretNumber) {
    //ocument.querySelector('.message').textContent = 'Correct answer';
    displayMessage('Correct answer');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
  }
  //When guess is wrong
  else {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess < secretNumber ? 'The number too low' : 'The number too higt';
      displayMessage(
        guess < secretNumber ? 'The number too low' : 'The number too higt'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You  lose the game';
      displayMessage('You  lose the game');
      document.querySelector('body').style.backgroundColor = '#dd0000';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
});
