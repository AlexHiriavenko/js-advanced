export const dataSimple = {
    data: [
        { name: "John", email: "john2@mail.com" },
        { name: "John", email: "john1@mail.com" },
        { name: "Jane", email: "jane@mail.com" },
    ],
    condition: { include: [{ name: "John" }], sortBy: ["email"] },
};

// {
//     "result": [
//         { "name": "John", "email": "john1@mail.com" },
//         { "name": "John", "email": "john2@mail.com" }
//     ]
// }
