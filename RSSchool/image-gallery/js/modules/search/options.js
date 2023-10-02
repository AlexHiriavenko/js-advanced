import getImgs from "../fetch.js";
import { urlBasicSearch } from "../urls.js";
import renderImgsList from "../renderImgsList.js";
import { imgsGallery } from "../varablesDOM.js";
import { setImgs, isEqualLength } from "./handleSearch.js";

const selects = document.querySelectorAll("select");

for (const select of selects) {
    select.addEventListener("change", setCategory);
}

async function setCategory(event) {
    const imgsList = [...imgsGallery.querySelectorAll("img")];
    const options = `&query=${event.target.value}`;
    const { results } = await getImgs(urlBasicSearch, options);
    if (isEqualLength(imgsList, results)) {
        setImgs(imgsList, results);
    } else {
        imgsGallery.innerHTML = "";
        renderImgsList(results, imgsGallery);
    }
    for (const select of selects) {
        if (select.value !== event.target.value) {
            select.firstElementChild.selected = true;
        }
    }
}
