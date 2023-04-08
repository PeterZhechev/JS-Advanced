function lastKNumbersSequence(nNumber, kNumber) {

    let nums = [1];
    let count = kNumber;

    for (let i = 1; i < nNumber; i++) {
        let currentNum = 0;
        let currentNums = 0;
        if (nums.length <= kNumber) {
            count = nums.length;
        } else {
            count = kNumber;
        }

        for (let index = 1; index <= count; index++) {
            currentNum = nums[nums.length - index];
            currentNums += currentNum;
        }

        nums.push(currentNums);
    }

    return nums
}

lastKNumbersSequence(9, 2);