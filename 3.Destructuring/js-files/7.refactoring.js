// Доповніть код так, щоб він коректно працював
// alert(value); // має бути виведено 'value'
// alert(showValue());  // має бути виведено 'showValue'
console.log(callStyles, green, "7. Деструктурирующее присваивание, вывести значение переменных");

const array = ['value', () => 'showValue'];

const [value, showValue] = array;

console.log(array)
console.log(value);
console.log(showValue());