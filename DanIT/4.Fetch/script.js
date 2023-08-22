"use strict";
const btnLoad = document.getElementById("btn-load");
const preloader = document.querySelector(".loading");
const urlFilms = "https://ajax.test-danit.com/api/swapi/films";

btnLoad.addEventListener("click", onClickLoadBtn);

function onClickLoadBtn() {
    const ul = document.querySelector(".films-list");
    if (ul) {
        ul.remove();
        btnLoad.textContent = "Show";
    } else if (localStorage.getItem("filmsList")) {
        let ul = document.createElement("ul");
        ul.innerHTML = localStorage.getItem("filmsList");
        btnLoad.after(ul);
        btnLoad.textContent = "Hide";
    } else {
        preloader.style.display = "block";
        getResponse(urlFilms)
            .then((json) => responseToMarkup(json))
            .then((arrayPromises) => {
                render(arrayPromises, btnLoad);
            });
    }
}

function getResponse(url) {
    return fetch(url).then((response) => response.json());
}

function responseToMarkup(json) {
    return json
        .sort((a, b) => a.episodeId - b.episodeId)
        .map(({ episodeId, name, openingCrawl, characters }) => {
            const charactersPromise = getCharacters(characters);
            return charactersPromise.then((heroNames) => {
                const listItems = heroNames
                    .sort()
                    .map(
                        (nameHero) =>
                            `<li class="names">${nameHero}</li>`
                    )
                    .join("");
                return `<b>Episode ${episodeId}: ${name}</b> <br>${openingCrawl}<br><br></b><b>Characters:</b><ul class="names-list">${listItems}</ul>`;
            });
        });
}

function getCharacters(characters) {
    const promises = characters.map((characterUrl) =>
        getResponse(characterUrl)
    );
    return Promise.all(promises).then((characters) => {
        return characters.sort().map(({ name }) => name);
    });
}

function render(array, parent) {
    Promise.allSettled(array).then((resolve) => {
        const ul = document.createElement("ul");
        ul.classList.add("films-list");
        parent.after(ul);
        resolve.map((el) => {
            const li = document.createElement("li");
            li.innerHTML = el.value;
            ul.append(li);
            preloader.style.display = "none";
            btnLoad.textContent = "Hide";
        });
        localStorage.setItem("filmsList", ul.outerHTML);
    });
}
