export const dataRuleOR = {
    data: [
        { name: "John", email: "john2@mail.com" },
        { name: "John", email: "john1@mail.com" },
        { name: "Jane", email: "jane@mail.com" },
    ],
    condition: { exclude: [{ name: "John" }, { email: "john2@mail.com" }] },
};

// {"result": [{"name": "Jane", "email": "jane@mail.com"}]}
