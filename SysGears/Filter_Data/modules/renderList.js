// функция которая получает объект и рендерит список на страницу
// с контентом obj.data

function renderList(obj, parent) {
    const renderData = obj.data || obj.result;
    if (renderData) {
        const ul = document.createElement("ul");
        renderData.map((user) => {
            const li = document.createElement("li");
            ul.append(li);
            for (const [key, value] of Object.entries(user)) {
                li.textContent += `${key}: ${value}; `;
            }
        });

        parent.insertAdjacentElement("afterend", ul);
    }

    if (obj.condition) {
        const params = document.createElement("p");
        params.textContent = JSON.stringify(obj.condition)
            .replace(/[^\w\d:,]/g, "")
            .replace(/,/g, ", ");
        const paramsTitile = document.querySelector(".params-title");
        paramsTitile.insertAdjacentElement("afterend", params);
    }
}
export default renderList;
