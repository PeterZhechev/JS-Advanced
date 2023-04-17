function createSortedList() {

    let outputList = [];

    let obj = {

        add(addNum) {
            outputList.push(addNum);
            outputList.sort((a, b) => a - b);
            this.size = outputList.length;
        },

        remove(removeIndex) {
            if (removeIndex >= 0 && removeIndex <= outputList.length - 1) {
                outputList.splice(removeIndex, 1);
                outputList.sort((a, b) => a - b);
                this.size = outputList.length;
            }
        },

        get(index) {
            if (index >= 0 && index <= outputList.length - 1) {
                let currentIndex = outputList[index];
                return currentIndex;
            }
        },

        size: 0
    };

    return obj;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

