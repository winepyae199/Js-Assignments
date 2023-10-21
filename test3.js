const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function numberGuessingGame(min, max) {
  const num = 58;
  let attempts = 0;

  function getPlayerNum() {
    rl.question(`Guess the number between ${min} and ${max}: `, (guess) => {
      const playerNum = parseInt(guess);

      if (isNaN(playerNum)) {
        console.log('Please enter a valid number.');
        getPlayerNum();
      } else {
        attempts++;
        if (playerNum == num) {
          console.log(`Congratulations!`);
          rl.close();
        } else if (playerNum < num) {
          console.log('Too low! Try again.');
          getPlayerNum();
        } else {
          console.log('Too high! Try again.');
          getPlayerNum();
        }
      }
    });
  }

  getPlayerNum();
}

const minNumber = 1;
const maxNumber = 100;
numberGuessingGame(minNumber, maxNumber);
