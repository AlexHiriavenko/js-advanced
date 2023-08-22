// функция, которая сортирует объект по заданному параметру sortBy

function sortObj(obj, sortBy) {
    obj.result.sort((a, b) => {
        // если в объекте есть ключ по которому надо сортировать то сортируем
        if (a[sortBy] && b[sortBy]) {
            // если числа, то сортируем как числа, иначе сортируем как строки
            const areNumbers = !isNaN(a[sortBy]) && !isNaN(b[sortBy]);
            return areNumbers ? a[sortBy] - b[sortBy] : a[sortBy].localeCompare(b[sortBy]);
        } else {
            console.log(`данные с параметром сортировки - ${sortBy} отсутствуют`);
        }
    });
    return obj;
}

export default sortObj;
