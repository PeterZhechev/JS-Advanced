function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let outputText = 'Error!';

  if (currentCase === 'Camel Case') {
    outputText = camelCase(input)
  } else if (currentCase === 'Pascal Case') {
    outputText = pascalCase(input);
  }

  function camelCase(inputText) {
    let outputText = inputText.toLowerCase();
    let arr = outputText.split(' ');
    let result = [];
    result.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
      let currentWord = arr[i];
      if (currentWord === '') continue;
      let currentLetter = currentWord[0].toUpperCase();
      let currentWordArr = currentWord.split('');
      currentWordArr.splice(0, 1, currentLetter);
      result.push(currentWordArr.join(''));
    }

    return result.join('');
  }

  function pascalCase(inputText) {
    let outputText = inputText.toLowerCase();
    let arr = outputText.split(' ');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let currentWord = arr[i];
      if (currentWord === '') continue;
      let currentLetter = currentWord[0].toUpperCase();
      let currentWordArr = currentWord.split('');
      currentWordArr.splice(0, 1, currentLetter);
      result.push(currentWordArr.join(''));
    }

    return result.join('');
  }

  document.getElementById('result').innerHTML = outputText;
}