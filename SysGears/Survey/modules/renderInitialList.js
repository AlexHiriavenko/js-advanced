// функция которая рендерит входные данные в DOM в виде списка
function renderInitialList(obj, parent, isTopLevel = true) {
    if (Object.keys(obj).length === 0) {
        return;
    }

    const ul = document.createElement("ul");

    if (parent && isTopLevel) {
        parent.insertAdjacentElement("afterend", ul);
        ul.classList.add("initialDataList");
    } else if (parent && !isTopLevel) {
        parent.append(ul);
    }

    Object.entries(obj).forEach(([key, val]) => {
        const li = document.createElement("li");
        li.textContent = key;
        ul.append(li);
        // рекурсия
        if (val !== null && typeof val === "object") {
            renderInitialList(val, li, false);
        }
    });

    return ul;
}

export default renderInitialList;
