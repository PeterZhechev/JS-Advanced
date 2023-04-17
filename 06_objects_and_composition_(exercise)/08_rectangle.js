function rectangle(width, height, color) {

    let rect = {
        width: width,
        height: height,
        color: changeFirstLetterToCapital(color),
        calcArea() {
            return this.width * this.height;
        }
    }

    function changeFirstLetterToCapital(text) {
        let firstColorLetter = text[0].toUpperCase();
        let coppyColor = text.split('');
        coppyColor.splice(0, 1, firstColorLetter);
        text = coppyColor.join('');

        return text;
    }

    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

