function isObjEmpty(obj) {
    return JSON.stringify(obj) === "{}";
}

export default isObjEmpty;
