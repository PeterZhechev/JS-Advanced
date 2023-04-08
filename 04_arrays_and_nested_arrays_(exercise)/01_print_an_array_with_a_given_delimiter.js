function printAnArrayWithAGivenDelimiter(arr, delimiter) {
    
    return arr.join(delimiter);
}

console.log(printAnArrayWithAGivenDelimiter([
    'One',
    'Two',
    'Three',
    'Four',
    'Five'
], '-'));

console.log(printAnArrayWithAGivenDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'));