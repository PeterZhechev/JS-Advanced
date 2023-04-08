function addAndRemoveElements(arr) {

    let outputArr = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command === 'add') {
            outputArr.push(i + 1);
        } else if (command === 'remove') {
            outputArr.pop();
        }
    }

    return outputArr.length > 0 ? outputArr.join('\n') : 'Empty';
}

// console.log(addAndRemoveElements([
//     'add',
//     'add',
//     'remove',
//     'add',
//     'add'
// ]));

// console.log(addAndRemoveElements(['add',
//     'add',
//     'add',
//     'add']
// ));

console.log(addAndRemoveElements(['remove',
    'remove',
    'remove']
));