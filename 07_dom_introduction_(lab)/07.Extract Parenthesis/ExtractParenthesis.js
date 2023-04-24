function extract(content) {
    let text = document.getElementById('content').innerText;
    let pattern = /\((?<word>[A-Za-z0-9 ]+)\)/g;
    let matched = [...text.matchAll(pattern)];
    let arr = [];

    for (let match of matched) {
        arr.push(match.groups['word']);
    }

    return arr.join('; ');
}
