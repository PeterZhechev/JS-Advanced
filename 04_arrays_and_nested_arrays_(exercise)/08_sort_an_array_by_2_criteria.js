function sortAnArrayBy2Criteria(arr) {

    let sortedArr = arr.sort((a, b) => {
        let sorted = a.length - b.length;

        if (sorted === 0) {
            sorted = a.localeCompare(b);
        }

        return sorted;
    });

    console.log(sortedArr.join('\n'));
}

sortAnArrayBy2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);