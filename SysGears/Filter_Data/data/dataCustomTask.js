// додати новий модуль з правилом exclude, яке буде відкидати
// записи, що містять ключі з певним значенням.

export const dataCustomTask = {
    data: [
        { user: "jim@mail.com", rating: 21, disabled: true },
        { user: "helen@mail.com", rating: 19, disabled: false },
        { user: "bill@mail.com", rating: 14, disabled: true },
        { user: "john@mail.com", rating: 25, disabled: true },
        { user: "mike@mail.com", rating: 20, disabled: false },
        { user: "greg@mail.com", rating: 14, disabled: false },
    ],
    condition: { exclude: [{ rating: 14 }], sortBy: ["rating"] },
};

// {
//     "result": [
//         { user: "helen@mail.com", rating: 19, disabled: false },
//         { user: "mike@mail.com", rating: 20, disabled: false },
//         { user: "jim@mail.com", rating: 21, disabled: true },
//         { user: "john@mail.com", rating: 25, disabled: true }
//     ]
// }
