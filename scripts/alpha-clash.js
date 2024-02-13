// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function continueGame(){
    const alphabate = getARandomAlphabate();
    console.log(alphabate);
}

function play(){
    hiddenElementById('home-screen');
    showElementById('play-ground')
    continueGame();
}