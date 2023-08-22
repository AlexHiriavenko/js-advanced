// функция, которая добавляет новые правила конвертации
// этой функции достаточно получить лишь один коэфициент - коэфициент для конвертации в "метр".
// и на основе этого одного коэфициента функция расчитывает все остальные коэфициенты для всех едениц расстояний.

function addNewRule(rules, newRule) {
    const { ruleName, factorMeter } = newRule;

    // для каждой единицы измерения добавляем правило "новая единица измерения : новый коэфициент"
    for (const unit of Object.values(rules)) {
        unit[ruleName] = +(factorMeter * (unit["m"] || 1)).toFixed(6);
    }

    // создаем новое свойство объекта rules с новым набором правил для конвертации
    const meterValues = Object.entries(rules.m);
    rules[ruleName] = meterValues.reduce((acc, [key, value]) => {
        acc[key] = +(value / factorMeter).toFixed(6);
        return acc;
    }, {});

    return rules; // Возвращаем обновленные правила
}

export default addNewRule;
