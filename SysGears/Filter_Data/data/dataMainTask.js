export const dataMainTask = {
    data: [
        { user: "mike@mail.com", rating: 20, disabled: false },
        { user: "greg@mail.com", rating: 14, disabled: false },
        { user: "john@mail.com", rating: 25, disabled: true },
    ],
    condition: { exclude: [{ disabled: true }], sortBy: ["rating"] },
};

// {
//     "result": [
//         { "user": "greg@mail.com", "rating": 14, "disabled": false },
//         { "user": "mike@mail.com", "rating": 20, "disabled": false }
//     ]
// }
