const { sum, multiply } = require("./sum");
// import { sum, multiply } from "./sum.js";

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test("nums 1, 2, 3 to equal 6", () => {
    expect(multiply(1, 2, 3)).toEqual(6);
});
