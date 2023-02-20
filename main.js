let button = document.getElementById('submit');

button.addEventListener('click', () => {
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
