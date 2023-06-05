// Даний об'єкт employee. Додайте до нього властивості age і salary, 
// не змінюючи початковий об'єкт (має бути створено новий об'єкт,
// який включатиме всі необхідні властивості). Виведіть новий об'єкт у консоль.
console.log(callStyles, green, "6. Cоздать объект на основе исходного с добавлением новых свойств, не изменяя исходный");

const employee = {
  name: 'Vitalii',
  surname: 'Klichko'
}



console.log(callStyles, coral, "1й вариант с помощью спред оператора");
const fullEmployee = { ...employee, age: 51, salary: 999 }
console.log(fullEmployee);



console.log(callStyles, coral, "2й вариант с помощью конструктора класса и спред оператора");
class Workers {
    constructor({name, surname}, age, salary) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.salary = salary;
    }
}
const worker = new Workers(employee, 51, 999);
console.log(worker);
console.log("\n");