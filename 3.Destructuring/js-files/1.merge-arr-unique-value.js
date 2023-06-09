// У вас є 2 масиви рядків, у кожному з них – прізвища клієнтів. 
// Створіть на їх основі один масив, який буде об'єднанням двох масивів без повторюваних прізвищ клієнтів.
const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

// Рішення 1. Об'єднання двох масивів
// литерал [] создает массив в котором спред оператор ... раскрывает массивы clients1 и clients2;
// new Set - возвращает набор уникальных значений; 
// спред оператор ... створює масив з набору new Set; 

const merge = [... new Set([...clients1, ...clients2])];

console.log(callStyles, green, "1. Объеденить массивы в один без повторяющихся значений")
console.log(callStyles, coral, "- за допомогою spread та new Set");
console.log(merge);


// Рішення 2 Отримання значень без повторів за допомогою методу .filter();
// если индекс текущего обрабатываемого элемента равен индексу, который мы находим по значению - 
// то элемент "остается" в массиве; Например, когда нам попадется Пирс 1й раз, то индекс элемента будет равен 2 
// и indexOf("Пирс") будет равен 2; А когда нам попадется Пирс 2й раз, то индекс элемента будет равен уже 7
// а indexOf("Пирс") по прежнему будет равен 2;  7 !== 2 поэтому элемент отфильтрован и его не будет в результате.

let mergeVer2 = [...clients1, ...clients2]
mergeVer2 = mergeVer2.filter((name, index) => index === mergeVer2.indexOf(name));

console.log(callStyles, coral, "- за допомогою spread та методів .filter ; .indexOf");
console.log(mergeVer2);


// Рішення 3 Ускладнемо таким чином - треба змерджити необмежену кількість масивів і отримати значення без повторів;
// для этого добавим 3й массив clients3;
// Принимаем в функцию любое кол-во массивов ...arrays при помощи оператора rest. Создадим пустой массив newArr;
// Перебираем массив массивов arrays. Каждый массив раскрываем и пушим в newArr. 
// для получения уникальных значений используем new Set и делаем из набора массив.
const clients3 = ["name1" , "name2" , "Беннет"];

function uniqueConcatArrays(...arrays) {
    const newArr = [];
    arrays.map(array => newArr.push(...array));
    return [...new Set(newArr)];
}

console.log(callStyles, coral, "- объеднання декількох масивів (2 і більше) в один без дублюючих значень")
console.log(uniqueConcatArrays(clients1, clients2, clients3));
console.log("\n");