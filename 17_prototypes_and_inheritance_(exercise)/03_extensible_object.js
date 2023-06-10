function extensibleObject() {

    let obj = {
        extend(template) {
            for (let el in template) {
                if (typeof template[el] === 'function') {
                    Object.getPrototypeOf(obj)[el] = template[el];
                } else {
                    obj[el] = template[el];
                }
            }
        }
    };

    return obj;
}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);

console.log(myObj);