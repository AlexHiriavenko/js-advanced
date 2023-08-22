function filterObj(obj, condition) {
    // устанавливаем флаги для понимания что делаем - включаем или исключаем

    const mustInclude = "include" in condition;
    const mustExclude = "exclude" in condition;
    // если обоих условий нет возвращаем исходный объект по шаблону ТЗ
    if (!mustExclude && !mustInclude) {
        console.log("фильтрация отменена");
        return { result: obj.data };
    }

    // получаем параметры фильтрации
    const filterParams = mustInclude ? condition.include : condition.exclude;

    // если параметры фильтрации не валидны - возвращаем исходный объект по шаблону ТЗ
    if (!Array.isArray(filterParams) || !filterParams.length) {
        console.log("фильтрация отменена - параметры не валидны");
        return { result: obj.data };
    }
    // фильтруем
    const filteredObj = obj.data.filter((item) => {
        for (const param of filterParams) {
            const match = Object.entries(param).every(
                ([key, value]) => item[key] === value
            );
            // включить
            if (mustInclude && match) {
                return true;
            }
            // исключить
            if (mustExclude && match) {
                return false;
            }
        }
        return mustExclude;
    });
    return { result: filteredObj };
}

export default filterObj;
