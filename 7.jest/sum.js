function sum(a, b) {
    return a + b;
}
const multiply = (...nums) =>
    nums.reduce((acc, val) => {
        acc *= val;
        return acc;
    }, 1);

module.exports = {
    sum,
    multiply,
};
