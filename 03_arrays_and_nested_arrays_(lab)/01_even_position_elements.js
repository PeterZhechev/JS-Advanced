function evenPositionElements(arr) {

    console.log(arr.filter((_, a) => a % 2 === 0).join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60']);

evenPositionElements(['5', '10']);