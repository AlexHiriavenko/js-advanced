function isObj(obj) {
    return (
        typeof obj === "object" &&
        obj !== null &&
        Object.getPrototypeOf(obj) === Object.prototype
    );
}

export default isObj;
