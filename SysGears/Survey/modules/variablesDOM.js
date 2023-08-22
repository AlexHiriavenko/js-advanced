const mainTitle = document.querySelector("h1");
const initiallistTitle = document.createElement("h2");
initiallistTitle.textContent = "Вхідні дані";
mainTitle.insertAdjacentElement("afterend", initiallistTitle);

const resultTitle = document.createElement("h2");
resultTitle.textContent =
    "Дані на виході - усi можливi шляхи у процесi опитування";

export { mainTitle, initiallistTitle, resultTitle };
