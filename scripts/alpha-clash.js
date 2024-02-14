function handelKeybordButtonPress(event) {
  const playerPressed = event.key;
//   game over
if(playerPressed === 'Escape'){
    gameOver();
}
  const curretnAlphabateElement = document.getElementById("current-alphabate");
  const currentAlphabate = curretnAlphabateElement.innerText;
  const expectedAlphabate = currentAlphabate.toLowerCase();
  let finalScore = 0;
  if (playerPressed === expectedAlphabate) {

    const currentScore = getTextElementValueById('current-score');
    const updateScore = currentScore + 1;
    setTextElementValueById('current-score',updateScore);
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;

    removeBackgroundColorById(playerPressed);
    continueGame();
  } else {
    const currentLifeScore = getTextElementValueById('current-life');
    const updateLifeScore = currentLifeScore - 1;
    setTextElementValueById('current-life',updateLifeScore);
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;
    // currentLifeElement.innerHTML = newLife;

    if (updateLifeScore === 0) {
      gameOver();
    }
  }
}
document.addEventListener("keyup", handelKeybordButtonPress);

function continueGame() {
  const alphabate = getARandomAlphabate();
  const currentAlphabante = document.getElementById("current-alphabate");
  currentAlphabante.innerText = alphabate;
  setBackgroundColorById(alphabate);
}

function play() {
  hiddenElementById("home-screen");
  hiddenElementById("score");
  showElementById("play-ground");
  setTextElementValueById('current-score',0)
  setTextElementValueById('current-life',5)
  continueGame();
}

function gameOver() {
  hiddenElementById("play-ground");
  showElementById("score");

  const lastScore = getTextElementValueById('current-score');
  setTextElementValueById('game-score',lastScore);

  const currentAlphabate = getElementTextById('current-alphabate');
  removeBackgroundColorById(currentAlphabate);
}
