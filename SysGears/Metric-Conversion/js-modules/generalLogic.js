import parseJson from "./functions/parseJson.js";
import addNewRule from "./functions/addRule.js";
import setSelectOption from "./functions/findElement.js";
import {
    rulesPath,
    mmRulePath,
    ydRulePath,
    kmRulePath,
    inputParamsPath,
} from "./path.js";
import {
    fromUnitInputs,
    toUnitInputs,
    resultInput,
    distanceInput,
} from "./variables/variablesDOM.js";

parseJson(rulesPath).then((result) =>
    console.log("изначальный набор правил\n", result)
);

async function conversion() {
    // отримуємо набір початкових правил (m, cm, in, ft)
    const rules = await parseJson(rulesPath);
    // задання правил конвертації за допомогою JSON файлу
    console.log("новые правила для конвертации");
    const mmRule = await parseJson(mmRulePath);
    console.log(mmRule);
    const ydRule = await parseJson(ydRulePath);
    console.log(ydRule);
    const kmRule = await parseJson(kmRulePath);
    console.log(kmRule);

    // розширити список одиниць, що підтримуються: "mm", "km", "yd".
    [mmRule, ydRule, kmRule].forEach((newRule) => {
        addNewRule(rules, newRule);
    });
    console.log("полный набор после добавления правил\n", rules);

    // отображаем входные параметры из ТЗ на вебстранице как значения выбранные по умолчанию
    console.log("входные параметры");
    const inputParams = await parseJson(inputParamsPath);
    console.log(inputParams);
    const { distance, convertTo } = inputParams;

    // находим элемент из которого конвертируем и делаем его выбранным по умолчанию
    setSelectOption(fromUnitInputs, distance);
    // находим элемент в который конвертируем и делаем его выбранным по умолчанию
    setSelectOption(toUnitInputs, convertTo);

    // устанавливаем числовое значение для конвертации
    distanceInput.value = distance.value;
    // вычисляем итоговое значение
    const result = +(
        distanceInput.value * rules[distance.unit][convertTo]
    ).toFixed(2);
    resultInput.value = result;

    // согласно ТЗ выводим в консоль объект в формате {"unit": "ft", "value": 1.64}
    const resultObj = { unit: convertTo, value: result };
    console.log("результат конвертування\n", resultObj);

    // теперь повесим лиснеры на все инпуты, от значений которых зависит результат
    const allInputs = [fromUnitInputs, toUnitInputs, distanceInput];

    allInputs.forEach((input) => {
        input.addEventListener("change", () => {
            const selectedValue1 = fromUnitInputs.value;
            const selectedValue2 = toUnitInputs.value;
            console.log(
                `конвертируем ${distanceInput.value} из: ${selectedValue1} в ${selectedValue2}`
            );
            resultInput.value = +(
                distanceInput.value * rules[selectedValue1][selectedValue2]
            ).toFixed(2);
            console.log("результат: " + resultInput.value);
        });
    });
}

conversion();
