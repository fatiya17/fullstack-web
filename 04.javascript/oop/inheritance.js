// parent class
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}

// child class
class Car extends Vehicle {
    constructor(brand, model, year, doors) {
        super(brand, model, year);
        this.doors = doors;
    }
    getCarInfo() {
        return `${this.getInfo()} Pintu : ${this.doors} doors`;
    }
}

// child class
class Motorcycle extends Vehicle {
    constructor(brand, model, year, type) {
        super(brand, model, year);
        this.type = type;
    }
    getMotorInfo(){
        return `${this.getInfo()} Tipe : ${this.type}`;
    }
}

let myCard = new Car("Toyota", "Camry", 2020, 4);
console.log(myCard.getCarInfo());

let myMotor = new Motorcycle("Honda", "CBR600RR", 2019, "Sport");
console.log(myMotor.getMotorInfo());