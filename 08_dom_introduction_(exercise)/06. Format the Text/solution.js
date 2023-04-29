function solve() {

  let inputArea = document.getElementById('input');
  let outputArea = document.getElementById('output');
  const pattern = /(?<sentence>[^.]+)/g;
  let outputArr = [];
  let count = 1;
  let currentParagraph = [];

  let matched = [...inputArea.value.matchAll(pattern)];

  for (let match of matched) {
    let splitted = match.groups.sentence.split('')
    splitted.push('.');
    let joinned = splitted.join('');

    if (count % 3 !== 0) {
      currentParagraph.push(joinned);
    } else {
      currentParagraph.push(joinned);
      let outputParagraph = currentParagraph.join('');
      outputArr.push(`<p>${outputParagraph}</p>`);
      currentParagraph = [];
      outputParagraph = [];
    }

    count++;
  }

  if (currentParagraph.length > 0) {
    let outputParagraph = currentParagraph.join('');
    outputArr.push(`<p>${outputParagraph}</p>`);
  }

  outputArea.innerHTML = outputArr.join('');
}