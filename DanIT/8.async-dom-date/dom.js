//1. Check if a value is a DOM element:

const isDomEl1 = (el) => typeof el === "object" && el.nodeType === 1;
const isDomEl2 = (el) => el instanceof Element;

const paragraph = document.querySelector(".text-content");

console.log(isDomEl1(paragraph), isDomEl1(undefined));
console.log(isDomEl2(paragraph), isDomEl2(null));
