import filterObj from "./filterObj.js";
import sortObj from "./sortObj.js";
import isObj from "./helpers/isObj.js";
import isObjEmpty from "./helpers/isObjEmpty.js";

function setCondition(obj = {}) {
    // если пришел не объект или объект пустой возвращаем пустой результат по шаблону ТЗ:
    if (!isObj(obj) || isObjEmpty(obj)) {
        console.log("нет данных или они не валидны");
        return { result: [] };
    }

    // если нет данных, то возвращаем пустой результат по шаблону ТЗ:
    if (!("data" in obj) || !obj.data.length) {
        return { result: [] };
    }

    // если условий для фильтрации и сортировки нет возвращаем результат из
    // исходного объекта без изменений по шаблону ТЗ:
    if (!obj.condition || !isObj(obj.condition) || isObjEmpty(obj.condition)) {
        console.log("фильтрация отменена - нет валидных условий");
        return { result: obj.data };
    }

    // чтобы не мутировать исходный объект делаем глубокую копию;
    const cloneObj = structuredClone(obj);

    // параметры для фильтрации
    const condition = cloneObj.condition;

    // фильтруем элемент по условиям condition
    const filteredObj = filterObj(cloneObj, condition);

    // сортировка
    const isValidSortBy =
        "sortBy" in condition && Array.isArray(condition.sortBy) && !!condition.sortBy.length;

    // если параметры для сортировки валидны - сортируем и возвращаем отсортированный объект
    if (isValidSortBy) {
        const sortParam = condition.sortBy[0];
        return sortObj(filteredObj, sortParam);
    }
    // если не валидны или отсутствуют - возвращаем отфильтрованный объект без сортировки
    else {
        return filteredObj;
    }
}

export default setCondition;
