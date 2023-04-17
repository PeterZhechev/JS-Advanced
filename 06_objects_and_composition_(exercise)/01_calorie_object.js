function calorieObject(arr) {

    let arrCoppy = arr.slice(0);
    let obj = {};

    while (arrCoppy.length > 0) {
        let currentName = arrCoppy.shift();
        let currentCalories = arrCoppy.shift();
        obj[currentName] = Number(currentCalories);
    }

    return obj;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));