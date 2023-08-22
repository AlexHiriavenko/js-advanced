// функция которая рендерит результат выполнения функции getAllSurveyPaths(config)
// (все пути - все возможные последовательности: вопрос-ответ)в DOM в виде списка

function renderAllPathsList(obj, parent) {
    const ul = document.createElement("ul");
    parent.insertAdjacentElement("afterend", ul);

    Object.entries(obj).forEach(([key, val]) => {
        const li = document.createElement("li");
        li.textContent = key;
        ul.append(li);

        if (Array.isArray(val)) {
            val.forEach(({ question, answer }) => {
                const innerUl = document.createElement("ul");
                const innerLi = document.createElement("li");
                innerLi.textContent = question + ": " + answer;
                innerUl.append(innerLi);
                li.append(innerUl);
            });
        } else if (typeof val === "object" && val !== null) {
            renderAllPathsList(val, li);
        }
    });
}

export default renderAllPathsList;
