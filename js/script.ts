class Person {
  public first_name: string;
  public last_name: string;
  public age : number;
  public job_title: string;
  public employed_since: number;

  constructor(a, b, c, d, e) {
    this.first_name = a;
    this.last_name = b;
    this.age = c;
    this.job_title = d;
    this.employed_since = e;
  }
  public fullname() {
    return this.first_name + ' ' + this.last_name;
  }
  public personFunction() {
    return `Hello, my name is ${this.first_name}, I am ${this.age} years old and I work as a ${this.job_title}. My full name is ${this.fullname()}. I am employed since ${this.employed_since} months.`;
  }
}

class Employee extends Person {
  public title: string;
  public salary: number;

  constructor(first_name, last_name, age, job_title, employed_since, title, salary) {
    super(first_name, last_name, age, job_title, employed_since);
    this.title = title;
    this.salary = salary;
  }
  fullInfo() {
    return `My name is ${this.first_name}, my title is ${this.title}, my salary is ${this.salary} and I am employed since ${this.employed_since} months.`;
  }

}

let detlef = new Person('Detlef', 'Udeholm', 24, 'JavaScript Developer', 12);
console.log(detlef.personFunction());

let hannelore = new Employee('Hannelore', 'Kohl', 24, 'Project Manager', 12, 'Master of Disaster', 3000);
console.log(hannelore.fullInfo());
