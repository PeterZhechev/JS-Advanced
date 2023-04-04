function greatestCommonDivisorGCD(num1, num2) {
    
    let divisor = 0; 

    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            divisor = i;
        }
    }

    console.log(divisor);
}

greatestCommonDivisorGCD(15, 5);

greatestCommonDivisorGCD(2154, 458);