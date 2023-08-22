class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = typeof age === "number" ? age : this.getAge(age);
    this._salary = salary;
  }

  set name(value) { this._name = value }  
  get name() {return this._name}
  
  set age(value) {
    if (typeof value === "number" && value > 15) {
      this._age = value;
    }
    if (typeof value === "string" &&
      this.getAge(value) && 
      this.getAge(value) > 15) {
      this._age = this.getAge(value)
    }
  }
  get age() {return this._age}
  
  set salary(value) { if (value > 0) this._salary = value; }  
  get salary() {return this._salary}
  
  getAge = function (euDateFormat) {
    let dmyArr = euDateFormat.split(".");
    let usDateFormat = `${dmyArr[1]}.${dmyArr[0]}.${dmyArr[2]}`;
    return new Date().getFullYear() - new Date(usDateFormat).getFullYear();
  } 
}



class Programmer extends Employee {
  constructor(name, age, salary, lang = []) {
    super(name, age, salary);
    this.lang = lang;
  }
  
  set salary(value) {
    if (value > 0) {
      this._salary = value * 3;
    }
  }
  get salary () {
    return this._salary;
  }
}



const dev1 = new Programmer(
  "Linus Torvalds",
  "28.12.1969",
  1200000,
  ['Assembly', 'C', 'Rust'])

const dev2 = new Programmer(
  "Larry Page",
  "26.03.1973",
  Infinity,
  ["C", "C++", "Python"]
)  

const dev3 = new Programmer(
  "Sergey Brin",
  "21.08.1973",
  Infinity,
  ["C", "C++", "Python"]
)

const dev4 = new Programmer(
  "Kenneth Lane Thompson",
  "04.02.1943",
  100000,
  ["B", "C", "Go"]
)

const dev5 = new Programmer(
  'James Gosling',
  "19.05.1955",
  300000,
  "Java"
)

const dev6 = new Programmer(
  "Brendan Eich",
  "04.07.1961",
  300000,
  "Java Script"
)
console.log(dev1)
console.log(dev2)
console.log(dev3)
console.log(dev4)
console.log(dev5)
console.log(dev6)


// tests

dev6.salary = 50000;
console.log(dev6.salary, "50 000 * 3 = 150 000")
dev6.salary = -100; 
console.log(dev6.salary, "введено отрицательное число, значение не изменилось")

dev6.age = 19;
console.log(dev6.age, "возраст 19 > 15, возрат изменился");
dev6.age = "14.13.1969";
console.log(dev6.age, "введен неверный формат даты (13й месяц не существует) возраст не изменился");
dev6.age = "02.05.1979"
console.log(dev6.age, "введена дата,согласно которой возраст больше 16, возраст изменился");
dev6.age = "02.05.2020"
console.log(dev6.age, "введена дата,согласно которой возраст меньше 16, возраст не изменился");
dev6.age = 14;
console.log(dev6.age, "возраст меньше 16, возраст не изменился");