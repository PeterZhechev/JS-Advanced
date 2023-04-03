function stringLength(firstStr, secondStr, thirdStr) {
    
    let totalStrLength = firstStr.length + secondStr.length + thirdStr.length;
    let avgStrLength = Math.floor(totalStrLength / 3);
    console.log(`${totalStrLength}\n${avgStrLength}`);
}

stringLength('chocolate', 'ice cream', 'cake');

stringLength('pasta', '5', '22.3');