function wordsUppercase(inputText) {
    
    let pattern = /(?<word>[A-Za-z0-9]+)/g;
    let mattchedWords = [...inputText.matchAll(pattern)];
    let extractedWords = [];

    for (let word of mattchedWords) {
        let upperCaseWord = word.groups.word.toUpperCase();
        extractedWords.push(upperCaseWord);
    }

    console.log(extractedWords.join(', '));
}

wordsUppercase('Hi, how are you?');

wordsUppercase('hello');