class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.fuel = fuel;
        this.model = model;
        this.parts = parts;
        this.parts.quality = parts.engine * parts.power;
    }
    drive (consumption) {
        this.fuel -= consumption;
    }
}
let parts = { engine: 6, power: 100 }
let vehicle = new Vehicle('a', 'b', parts, 200)
vehicle.drive(100)
console.log(vehicle.fuel)
console.log(vehicle.parts.quality)