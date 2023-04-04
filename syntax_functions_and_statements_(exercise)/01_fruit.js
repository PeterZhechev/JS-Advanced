function fruit(typeOfFruit, weightInGrams, pricePerKilogram) {
    
    let weightInKilograms = weightInGrams / 1000;
    let totalSum = weightInKilograms * pricePerKilogram;

    return `I need \$${(totalSum).toFixed(2)} to buy ${(weightInKilograms).toFixed(2)} kilograms ${typeOfFruit}.`;
}

console.log(fruit('orange', 2500, 1.80));