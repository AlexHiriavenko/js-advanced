function removeScroll() {
    document.body.style.overflow = "hidden";
}

function enableScroll() {
    document.body.style.overflow = "auto";
}

export { removeScroll, enableScroll };
