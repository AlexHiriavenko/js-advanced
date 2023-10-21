function extend(defaults, options) {
    for (const name in options) {
        if (defaults.hasOwnProperty(name)) {
            defaults[name] = options[name];
        }
    }
    return defaults;
}

export default extend;
