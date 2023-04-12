function fromJsonToHtmlTable(input) {

    let parsed = JSON.parse(input);

    let output = [];
    let firstLine = [];
    
    output.push('<table>');
    
    let keys = Object.keys(parsed[0]);
    if (keys.length > 0) {
        for (let key of keys) {
            firstLine.push(`<th>${key}</th>`);
        }
    
        output.push(`  <tr>${firstLine.join('')}</tr>`);
    }

    for (let obj of parsed) {
        let secondLine = [];
        for (let key of keys) {
            let currentKey = obj[key];
            secondLine.push(`<td>${currentKey}</td>`);
        }

        output.push(`  <tr>${secondLine.join('')}</tr>`);

    }

    output.push('</table>');

    for (let line of output) {
        console.log(line);
    }
}

// console.log(fromJsonToHtmlTable(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`
// ));

fromJsonToHtmlTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
);


