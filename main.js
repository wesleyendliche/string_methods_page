let checkBtn = document.getElementById('submit');
let concatenateBtn = document.getElementById('concatenate');
let changeWordsBtn = document.getElementById('change-name');

checkBtn.addEventListener('click', () => {
    let text = document.getElementById('textbox').value;

    let length = text.length;
    document.getElementById('length').innerHTML = length;
    
    let repeat = text.repeat(2);
    document.getElementById('repeat').innerHTML = repeat;

    let slice = text.slice(0, 3);
    document.getElementById('slice').innerHTML = slice;

    let splitWords = text.split("");
    document.getElementById('splitWord').innerHTML = splitWords;

    let splitSentences = text.split(" ");
    document.getElementById('splitSentence').innerHTML = splitSentences;

    let upperCase = text.toUpperCase();
    document.getElementById('toUpperCase').innerHTML = upperCase;

    let lowerCase = text.toLowerCase();
    document.getElementById('toLowerCase').innerHTML = lowerCase;
})

concatenateBtn.addEventListener('click', () => {
    let firstValue = document.getElementById('concat-1').value;
    let secondValue = document.getElementById('concat-2').value;
    let result = firstValue.concat(" ", secondValue);

    document.getElementById('concat-result').innerHTML = result;
})

changeWordsBtn.addEventListener('click', () => {
    let lastWordsArray = document.querySelector('#movie-list').innerHTML;
    let newWordField = document.getElementById('newWord');
    let newMovieName = lastWordsArray.replace(/Rings|Secrets|War|Parabellum|Caribbean/g, `${newWordField.value}`);

    document.getElementById('movie-list').innerHTML = newMovieName;
})
