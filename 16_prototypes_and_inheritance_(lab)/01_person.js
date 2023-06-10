class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullName = `${this.firstName} ${this.lastName}`;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set firstName(newName) {
        return this._firstName = newName;
    }

    set lastName(newName) {
        return this._lastName = newName;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(newName) {
        let splitted = newName.split(' ');
        this._firstName = splitted[0];
        this._lastName = splitted[1];
    }
}



let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla