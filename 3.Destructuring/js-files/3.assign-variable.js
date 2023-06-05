const user1 = { name: "John", years: 30 };

// Напишіть деструктуруюче присвоєння, яке:
// властивість name присвоїть в змінну ім'я
// властивість years присвоїть в змінну вік
// властивість isAdmin присвоює в змінну isAdmin false, якщо такої властивості немає в об'єкті
// Виведіть змінні на екран.

const { name, years: age, isAdmin = false } = user1;
console.log(callStyles, green, "3. Деструктурирующее присваивание, вывести на экран результат");
console.log(name, age, isAdmin);

// вывод на экран (вместо алерт добавил в разметку);
const userInfo = document.createElement("h3");
userInfo.textContent = name + ", " + age + ", " + isAdmin;
document.body.insertAdjacentElement("beforeend", userInfo);
console.log("\n");