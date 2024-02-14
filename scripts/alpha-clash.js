function handelKeybordButtonPress(event){
    const playerPressed = event.key;
    const curretnAlphabateElement = document.getElementById('current-alphabate');
    const currentAlphabate = curretnAlphabateElement.innerText;
    const expectedAlphabate = currentAlphabate.toLowerCase();

    if(playerPressed === expectedAlphabate){
        removeBackgroundColorById(playerPressed);
        continueGame();
    }else{
        console.log('You Missed. You Lose your life')
    }
}
document.addEventListener('keyup',handelKeybordButtonPress);

function continueGame(){
    const alphabate = getARandomAlphabate();
    const currentAlphabante = document.getElementById('current-alphabate');
    currentAlphabante.innerText = alphabate;
    setBackgroundColorById(alphabate)
}

function play(){
    hiddenElementById('home-screen');
    showElementById('play-ground')
    continueGame();
}