function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabate(){
    const alphabateString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabates = alphabateString.split('');
    

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabate = alphabates[index];
    // console.log(index,alphabate);
    return alphabate;
}