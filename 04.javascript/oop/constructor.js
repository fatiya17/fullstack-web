function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

    Person.prototype.greet = function() {
        return `Hello, my name is ${this.name}`;
    }
}

let person1 = new Person("Alice", 25, "Jakarta")
let person2 = new Person("Bob", 30, "Bandung")

console.log(person1.greet());
console.log(person2.greet()); 