// необхідно об'єднати дані з трьох об'єктів в один об'єкт - fullProfile.
// в результуючому об'єкті має зберегтися значення, яке було отримано пізніше
// Змінювати об'єкти satoshi2018, satoshi2019, satoshi2020 не можна.

const satoshi2020 = {
    name: "Nick",
    surname: "Sabo",
    age: 51,
    country: "Japan",
    birth: "1979-08-21",
    location: {
        lat: 38.869422,
        lng: 139.876632,
    },
};

const satoshi2019 = {
    name: "Dorian",
    surname: "Nakamoto",
    age: 44,
    hidden: true,
    country: "USA",
    wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    browser: "Chrome",
};

const satoshi2018 = {
    name: "Satoshi",
    surname: "Nakamoto",
    technology: "Bitcoin",
    country: "Japan",
    browser: "Tor",
    birth: "1975-04-05",
};

// Простое решение const dossier = { ...satoshi2018, ...satoshi2019, ...satoshi2020 } НЕ подходит. Потому что это не глубокое клонирование.
// Если мы позже решим изменить значение вложенного свойства в результирующем объекте (например fullProfile.location.lat = 42).
// Мы изменим это же свойство и у изначального объекта и оно тоже станет = 42.
// Поэтому я сделал функцию которая сделает все то же самое, но вернет как итог полностью клонированный объект через
// JSON.parse(JSON.stringify(object));
// Наверно раз пошли такие песни то и решение через JSON может не подойти, потому что этот метод нельзя использовать для копирования
// методов объекта, которые были написаны пользователем и не работает для циклических объектов.
// И возможно тогда лучше использовать алгоритм структурированного клонирования или библиотеку лодаш.
// Но во первых я понятия не имею шо это такое, а во вторых в данных нам объектах нет методов и объекты не циклические.

function mergeObjs(obj1, obj2, obj3) {
    const simpleMerge = { ...obj1, ...obj2, ...obj3 };
    return JSON.parse(JSON.stringify(simpleMerge));
}

const fullProfile = mergeObjs(satoshi2018, satoshi2019, satoshi2020);

// итак доступа из вне к simpleMerge нет. А dossier это уже глубоко клонированный объект и можно не бояться менять значения вложенных свойств.

// вывод в консоль
console.log(
    callStyles,
    green,
    "4. Мердж объектов, у которых есть одинаковые свойства, но разные значения"
);
const { name: name2018, surname: surname2018 } = satoshi2018;
console.log(callStyles, coral, "Полное досье на " + name2018 + " " + surname2018);
for (let [key, value] of Object.entries(fullProfile)) {
    typeof value === "object"
        ? console.log(key + ": " + JSON.stringify(value))
        : console.log(key + ": " + value);
}
console.log("\n");

const merjObjs = structuredClone({ ...satoshi2018, ...satoshi2019, ...satoshi2020 });
console.log(callStyles, coral, "глубокое копирование structuredClone", merjObjs);
