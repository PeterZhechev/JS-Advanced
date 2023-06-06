class List {
    constructor() {
        this.collectionArr = [];
        this.size = this.collectionArr.length;
    }
    
    add(num) {
        this.collectionArr.push(num);
        this.collectionArr.sort((a, b) => a - b);
        this.size ++;
    }
    
    remove(index) {
        if (index < 0 || index >= this.collectionArr.length) {
            throw new Error(`Incorrect index!`);
        } else {
                    this.collectionArr.splice(index, 1);
        this.collectionArr.sort((a, b) => a - b);
        this.size --;
        }
    }
    
    get(index) {
        if (index < 0 || index >= this.collectionArr.length) {
            throw new Error(`Incorrect index!`);
        } else {
        return this.collectionArr[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));