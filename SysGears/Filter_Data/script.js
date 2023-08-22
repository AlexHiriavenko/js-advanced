import {
    noData,
    wrongType,
    noCondition,
    onlySortBy,
    wrongTypeExclude,
    wrongTypeSortBy,
    SortByNotExistParam,
    sortByDifParams,
    test,
} from "./data/boundaryCases.js";

import {
    dataCustomTask,
    dataRuleAND,
    dataMainTask,
    dataSimple,
    dataRuleOR,
} from "./data/allCases.js";

import setCondition from "./modules/setCondition.js";
import renderList from "./modules/renderList.js";
import { initialDataTitle, resultDataTitle } from "./modules/variablesDOM.js";

// рендер: входящие данные и параметры фильтрации/сортировки
renderList(dataMainTask, initialDataTitle);

// рендер: результат сортировки и фильтрации
const result = setCondition(dataMainTask);
renderList(result, resultDataTitle);

// test tasks
console.log("декілька варіантів вхідних даних та умов фільтрації / сортування");
console.log("параметры фильтрации и сортировки можно посмотреть в папке data");

console.log("исходный объект", dataSimple);
console.log("результат", setCondition(dataSimple));

console.log("исходный объект", dataRuleOR);
console.log("результат", setCondition(dataRuleOR));

console.log("исходный объект", dataRuleAND);
console.log("результат", setCondition(dataRuleAND));

console.log("исходный объект", dataMainTask);
console.log("результат", setCondition(dataMainTask));

console.log("исходный объект", dataCustomTask);
console.log("результат", setCondition(dataCustomTask));

console.log("результат", setCondition(test));

console.log(`спектр можливих вхідних значень, та обробка виняткових ситуацій
розкоментуйте код у головному js файлі`);
// console.log("нет данных", setCondition(noData));
// console.log("не валидный тип данных", setCondition(wrongType));
// console.log("нет условий", setCondition(noCondition));
// console.log("только сортировка", setCondition(onlySortBy));
// console.log("сортировка по параметру которого не существует", setCondition(SortByNotExistParam));
// console.log("не валидный тип данных Исключить", setCondition(wrongTypeExclude));
// console.log("не валидный тип данных Сортировать", setCondition(wrongTypeSortBy));
// console.log("в одном из объектов нет параметра сортировки", setCondition(sortByDifParams));
