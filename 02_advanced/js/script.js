var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyClassInstances = [];
var Vehicle = /** @class */ (function () {
    function Vehicle(aa, bb, cc, dd, ee, ff) {
        this.manufacturer = aa;
        this.model = bb;
        this.kilometers_left = cc;
        this.number_of_seats = dd;
        this.fuel_type = ee;
        this.year_of_production = ff;
    }
    Vehicle.prototype.fullVehicleName = function () {
        return this.manufacturer + ' ' + this.model;
    };
    Vehicle.prototype.price = function () {
        var price = this.kilometers_left * this.number_of_seats;
        return "Your vehicle is a " + this.manufacturer + " " + this.model + ", it was built in " + this.year_of_production + ". The price is " + price + ".";
    };
    Vehicle.prototype.vehicleInfo = function () {
        return "VEHICLE! The general info for your vehicle is: " + this.manufacturer + " " + this.model + ", " + this.year_of_production + ".";
    };
    return Vehicle;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(manufacturer, model, kilometers_left, number_of_seats, fuel_type, year_of_production, cargo_load, cargo_dimensions) {
        var _this = _super.call(this, manufacturer, model, kilometers_left, number_of_seats, fuel_type, year_of_production) || this;
        _this.cargo_load = cargo_load;
        _this.cargo_dimensions = cargo_dimensions;
        return _this;
    }
    Truck.prototype.truckLoad = function () {
        return "Your " + _super.prototype.fullVehicleName.call(this) + " was built in " + this.year_of_production + " and can hold " + this.cargo_load + "kg in " + this.cargo_dimensions + "m<sup>2</sup>.";
    };
    Truck.prototype.vehicleInfo = function () {
        return "TRUCK! The general info for your vehicle is: " + this.manufacturer + " " + this.model + ", " + this.year_of_production + ".";
    };
    return Truck;
}(Vehicle));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(manufacturer, model, kilometers_left, number_of_seats, fuel_type, year_of_production) {
        return _super.call(this, manufacturer, model, kilometers_left, number_of_seats, fuel_type, year_of_production) || this;
    }
    Car.prototype.carStatement = function () {
        return "Your " + _super.prototype.fullVehicleName.call(this) + " was built in " + this.year_of_production + " and has " + this.number_of_seats + ".";
    };
    Car.prototype.vehicleInfo = function () {
        return "CAR! The general info for your vehicle is: " + this.manufacturer + " " + this.model + ", " + this.year_of_production + ".";
    };
    return Car;
}(Vehicle));
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(manufacturer, model, kilometers_left, number_of_seats, fuel_type, year_of_production, number_of_tires) {
        var _this = _super.call(this, manufacturer, model, kilometers_left, number_of_seats, fuel_type, year_of_production) || this;
        _this.number_of_tires = number_of_tires;
        return _this;
    }
    Motorbike.prototype.bikeStatement = function () {
        return "Your " + _super.prototype.fullVehicleName.call(this) + " was built in " + this.year_of_production + " and has " + this.number_of_tires + " wheels.";
    };
    Motorbike.prototype.vehicleInfo = function () {
        return "The general info for your vehicle is: " + this.manufacturer + " " + this.model + ", " + this.year_of_production + ".";
    };
    return Motorbike;
}(Vehicle));
var LisasTruck = new Truck('Scania', 'Serie V8', 40000, 3, 'Diesel', 2018, 25000, 100);
var JochensTruck = new Truck('Volkswagen', 'Transporter', 30000, 8, 'Diesel', 1996, 10000, 20);
var KevinsTruck = new Truck('Iveco', 'Stratis 430', 80000, 2, 'Diesel', 2010, 45000, 15000);
var JennysCar = new Car('Porsche', 'Cayenne', 20000, 3, 'Diesel', 2018);
var JohnsCar = new Car('Mercedes', 'S-Klasse', 30000, 8, 'Diesel', 1996);
var JoesCar = new Car('Volkswagen', 'Golf 4', 81000, 2, 'Diesel', 2010);
var JanesBike = new Motorbike('Suzuki', 'Hayabusa GSX 1300 R', 120000, 1, 'Benzin', 2018, 2);
var BrandonsBike = new Motorbike('Harley Davidson', 'Indian', 3200, 1, 'Benzin', 1953, 2);
var TomsBike = new Motorbike('Harley Davidson', 'Excelsior', 8100, 1, 'Benzin', 1964, 2);
var FritzsBike = new Motorbike('Harley Davidson', 'Henderson', 0, 1, 'Benzin', 1971, 2);
var LisasBike = new Motorbike('KTM', '450 SX', 34000, 1, 'Benzin', 2009, 2);
console.log(LisasTruck.truckLoad());
console.log(JohnsCar.carStatement());
console.log(FritzsBike.bikeStatement());
console.log('Vehicle Info:');
console.log(LisasTruck.vehicleInfo());
console.log(LisasTruck["super"].vehicleInfo());
