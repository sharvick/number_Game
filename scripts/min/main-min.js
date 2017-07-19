

// I want you to create a simple guess the number type game. It should choose a
// random number between 1 and 100, then challenge the player to guess the number
//  in 10 turns. After each turn the player should be told if they are right or
//  wrong, and if they are wrong, whether the guess was too low or too high.
//  It should also tell the player what numbers they previously guessed. The game
//  will end once the player guesses correctly, or once they run out of turns.
//  When the game ends, the player should be given an option to start playing again.


/*var max = (100)
var number = Math.ceil(Math.random() * max)
alert("Cheat: " + number)
var guess
var numGuesses = 1

while(guess != number && numGuesses > 0) {
    guess = prompt("Guess a number between " + max + "! (You have " + numGuesses + " left)")

      if(guess > number) {
        alert("Your number is too high")
    }
      if(guess < number) {
        alert("Your number is too low")
    }
    numGuesses = numGuesses - 1
}

      if(guess == number) {
          alert("Yes! Good job!")
      } else {
          alert("You are a LOSER!!")
      }
*/

var randomNumber = Math.ceil(Math.random() * 100)

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount =  1;
var resetButton;

guessField.focus();
guessField.addEventListener('keyup', keyupHandler);

function keyupHandler(event) {
  console.log('A keyup event occured, keyCode:' + event.keyCode);


// If the key pressed was "Enter"
  if(event.keyCode === 13) {
    guessSubmit.click();
  }
}

function checkGuess() {
  var userGuess = Number(guessField.value);
    guessField.focus();
  if(guessField.value === '') {
    return;
  }

  if(userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    lastResult.textContent = "That is not a valid guess. Try again!";
    lastResult.style.color = 'yellow';
    lastResult.style.backgroundColor = 'black';
    guessField.value = '';
    guessField.focus();
    return;
  }






  if(guessCount === 1) {
    guesses.textContent += "Previous guesses: ";
  }
    guesses.textContent += userGuess + ' ';

// LOGIC GOES HERE
  if(userGuess === randomNumber) {
      //The user guessed the right number
      lastResult.textContent = "Congratulations! You got it right";
      lastResult.style.color = 'white';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      //The user is out of guesses
      lastResult.textContent = '!!!GAME OVER!!!';
      lastResult.style.color = 'black';
      lastResult.style.backgroundColor = 'red';
      setGameOver();
    } else {
      //User hasnt gotten it right but still has guesses left
      lastResult.textContent = "Wrong!"
      lastResult.style.color = 'black';
      lastResult.style.backgroundColor = 'yellow';
  if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Your guess is too LOW!';
    } else {
      lowOrHi.textContent = 'Your guess is too HIGH!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start New Game';
  document.querySelector('.form').appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame(){
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }
    lastResult.style.backgroundColor = 'white';

    guessField.disabled = false;
    guessSubmit.disabled = false;

    resetButton.parentNode.removeChild(resetButton);
    guessField.value = '';
    guessField.focus();
    randomNumber = Math.ceil(Math.random() * 100);

}

guessSubmit.addEventListener('click', checkGuess);



























//*************BOTTOM OF PAGE **********************


