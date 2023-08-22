const noData = {};
////////////////////////
const wrongType = "wrong type";
////////////////////////
const noCondition = {
    data: [
        { name: "John", email: "john2@mail.com" },
        { name: "John", email: "john1@mail.com" },
        { name: "Jane", email: "jane@mail.com" },
    ],
};
////////////////////////
const onlySortBy = {
    data: [
        { name: "John", email: "john2@mail.com" },
        { name: "John", email: "john1@mail.com" },
        { name: "Jane", email: "jane@mail.com" },
    ],
    condition: { sortBy: ["email"] },
};
////////////////////////
const SortByNotExistParam = {
    data: [
        { name: "John", email: "john2@mail.com" },
        { name: "John", email: "john1@mail.com" },
        { name: "Jane", email: "jane@mail.com" },
    ],
    condition: { sortBy: ["rating"] },
};
////////////////////////
const sortByDifParams = {
    data: [
        { name: "John", email: "john2@mail.com" },
        { name: "John" },
        { name: "Jane", email: "jane@mail.com" },
    ],
    condition: { sortBy: ["email"] },
};
///////////////////////////////////
const wrongTypeExclude = {
    data: [
        { name: "John", email: "john2@mail.com" },
        { name: "John", email: "john1@mail.com" },
        { name: "Jane", email: "jane@mail.com" },
    ],
    condition: { exclude: 1, sortBy: ["email"] },
};
////////////////////////
const wrongTypeSortBy = {
    data: [
        { name: "John", email: "john2@mail.com" },
        { name: "John", email: "john1@mail.com" },
        { name: "Jane", email: "jane@mail.com" },
    ],
    condition: {
        exclude: [{ name: "John", email: "john2@mail.com" }],
        sortBy: "email",
    },
};
////////////////////////

const test = {
    data: [
        { name: "John", email: "john2@mail.com" },
        { name: "John", email: "john1@mail.com" },
        { name: "Jane", email: "jane@mail.com" },
        { name: "Jane", email: "jane3@mail.com" },
    ],
    condition: {
        exclude: [
            { name: "John", email: "john2@mail.com" },
            { email: "jane3@mail.com" },
        ],
        sortBy: "email",
    },
};

////////////////////////////////////////////////////

export {
    noData,
    wrongType,
    noCondition,
    onlySortBy,
    wrongTypeExclude,
    wrongTypeSortBy,
    SortByNotExistParam,
    sortByDifParams,
    test,
};
