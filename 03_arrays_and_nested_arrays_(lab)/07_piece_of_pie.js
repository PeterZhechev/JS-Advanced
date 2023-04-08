function pieceOfPie(arr, firstTargetFlavor, secondTargetFlavor) {

    let outputArr = [];
    let isStart = false;
    let isEnd = false;

    for (let el of arr) {
        if (el === firstTargetFlavor) {
            isStart = true;
        }

        if (isStart) {
            outputArr.push(el);
        }

        if (el === secondTargetFlavor) {
            isEnd = true;
        }

        if (isEnd) {
            break;
        }
    }

    return outputArr;
}

// console.log(pieceOfPie(
//     ['Pumpkin Pie',
//         'Key Lime Pie',
//         'Cherry Pie',
//         'Lemon Meringue Pie',
//         'Sugar Cream Pie'],
//     'Key Lime Pie',
//     'Lemon Meringue Pie'));

console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'));

