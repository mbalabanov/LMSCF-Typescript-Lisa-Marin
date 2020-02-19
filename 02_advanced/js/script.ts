class Vehicle {
  public manufacturer: string;
  public model: string;
  public kilometers_left: number;
  public number_of_seats: number;
  public fuel_type: string;
  public year_of_production: number;

  constructor(a1, b1, c1, d1, e1, f1) {
    this.manufacturer = a1;
    this.model = b1;
    this.kilometers_left = c1;
    this.number_of_seats = d1;
    this.fuel_type = e1;
    this.year_of_production = f1;
  }
  public fullVehicleName() {
    return this.manufacturer + ' ' + this.model;
  }
  public price() {
    let price = this.kilometers_left * this.number_of_seats;
    return `Your vehicle is a ${this.manufacturer} ${this.model}, it was built in ${this.year_of_production}. The price is ${price}.`;
  }
  public 
}

class Truck extends Vehicle {
  public cargo_load: number;
  public cargo_dimensions: number;

  constructor(manufacturer, model, kilometers_left, number_of_seats, fuel_type, year_of_production, cargo_load, cargo_dimensions) {
    super(manufacturer, model, kilometers_left, number_of_seats, fuel_type, year_of_production);
    this.cargo_load = cargo_load;
    this.cargo_dimensions = cargo_dimensions;
  }
  truckLoad() {
    return `Your ${super.fullVehicleName()} was built in ${this.year_of_production} and can hold ${this.cargo_load}kg in ${this.cargo_dimensions}m<sup>2</sup>.`;
  }
}

class Car extends Vehicle {
  constructor(manufacturer, model, kilometers_left, number_of_seats, fuel_type, year_of_production) {
    super(manufacturer, model, kilometers_left, number_of_seats, fuel_type, year_of_production);
  }
  carStatement() {
    return `Your ${super.fullVehicleName()} was built in ${this.year_of_production} and has ${this.number_of_seats}.`;
  }
}

class Motorbike extends Vehicle {
    public number_of_tires: number;

  constructor(manufacturer, model, kilometers_left, number_of_seats, fuel_type, year_of_production, number_of_tires) {
    super(manufacturer, model, kilometers_left, number_of_seats, fuel_type, year_of_production);
    this.number_of_tires = number_of_tires;
  }
  bikeStatement() {
    return `Your ${super.fullVehicleName()} was built in ${this.year_of_production} and has ${this.number_of_tires} wheels.`;
  }
}


let LisasTruck = new Truck('Scania', 'Serie V8', 40000, 3, 'Diesel', 2018, 25000, 100);
let JochensTruck = new Truck('Volkswagen', 'Transporter', 30000, 8, 'Diesel', 1996, 10000, 20);
let KevinsTruck = new Truck('Iveco', 'Stratis 430', 80000, 2, 'Diesel', 2010, 45000, 15000);


let JennysCar = new Car('Porsche', 'Cayenne', 20000, 3, 'Diesel', 2018);
let JohnsCar = new Car('Mercedes', 'S-Klasse', 30000, 8, 'Diesel', 1996);
let JoesCar = new Car('Volkswagen', 'Golf 4', 81000, 2, 'Diesel', 2010);

let JanesBike = new Motorbike('Suzuki', 'Hayabusa GSX 1300 R', 120000, 1, 'Benzin', 2018, 2);
let BrandonsBike = new Motorbike('Harley Davidson', 'Indian', 3200, 1, 'Benzin', 1953, 2);
let TomsBike = new Motorbike('Harley Davidson', 'Excelsior', 8100, 1, 'Benzin', 1964, 2);
let FritzsBike = new Motorbike('Harley Davidson', 'Henderson', 0, 1, 'Benzin', 1971, 2);
let LisasBike = new Motorbike('KTM', '450 SX', 34000, 1, 'Benzin', 2009, 2);

console.log(LisasTruck.truckLoad());
console.log(JohnsCar.carStatement());
console.log(FritzsBike.bikeStatement());
console.table(Truck);
