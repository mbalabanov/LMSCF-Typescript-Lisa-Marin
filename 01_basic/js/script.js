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
var Person = /** @class */ (function () {
    function Person(a, b, c, d, e) {
        this.first_name = a;
        this.last_name = b;
        this.age = c;
        this.job_title = d;
        this.employed_since = e;
    }
    Person.prototype.fullname = function () {
        return this.first_name + ' ' + this.last_name;
    };
    Person.prototype.personFunction = function () {
        return "Hello, my name is " + this.first_name + ", I am " + this.age + " years old and I work as a " + this.job_title + ". My full name is " + this.fullname() + ". I am employed since " + this.employed_since + " months.";
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(first_name, last_name, age, job_title, employed_since, title, salary) {
        var _this = _super.call(this, first_name, last_name, age, job_title, employed_since) || this;
        _this.title = title;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.fullInfo = function () {
        return "My name is " + this.first_name + ", my title is " + this.title + ", my salary is " + this.salary + " and I am employed since " + this.employed_since + " months.";
    };
    return Employee;
}(Person));
var detlef = new Person('Detlef', 'Udeholm', 24, 'JavaScript Developer', 12);
console.log(detlef.personFunction());
var hannelore = new Employee('Hannelore', 'Kohl', 24, 'Project Manager', 12, 'Master of Disaster', 3000);
console.log(hannelore.fullInfo());
