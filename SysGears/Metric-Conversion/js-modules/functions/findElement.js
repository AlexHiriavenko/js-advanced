// хелпер для поиска нужного option, чтобы установить этот option как выбранный по умолчанию
function setSelectOption(elements, unit) {
    unit = typeof unit !== "object" ? unit : unit.unit;
    const optionToSelect = [...elements.options].find((option) => option.value === unit);
    optionToSelect.selected = true;
}

export default setSelectOption;
