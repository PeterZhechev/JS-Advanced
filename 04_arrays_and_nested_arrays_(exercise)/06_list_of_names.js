function listOfNames(names) {

    let sortedNames = names.sort((a, b) => a.localeCompare(b));
    let count = 1;

    for (let name of sortedNames) {
        console.log(`${count}.${name}`);
        count++;
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);