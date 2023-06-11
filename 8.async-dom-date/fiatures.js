// Debounce a function

const debounce = (fn, time) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), time);
    };
};

// Open a new tab with a given URL

const openTab = (url) => {
    window.open(url, "_blank");
};

// Get value of cookie
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
};
