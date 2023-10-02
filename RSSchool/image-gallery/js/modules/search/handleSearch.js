import { imgsGallery, searchInput } from "../varablesDOM.js";
import { urlBasicSearch } from "../urls.js";
import getImgs from "../fetch.js";
import renderImgsList from "../renderImgsList.js";

let query = "";

async function handleSearch() {
    const imgsList = [...imgsGallery.querySelectorAll("img")];
    if (searchInput.value.trim()) {
        query = searchInput.value;
        const options = `&query=${query}`;
        const { results } = await getImgs(urlBasicSearch, options);
        if (isEqualLength(imgsList, results)) {
            setImgs(imgsList, results);
        } else {
            imgsGallery.innerHTML = "";
            renderImgsList(results, imgsGallery);
        }
    }
}

export default handleSearch;

export function isEqualLength(arr1, arr2) {
    return arr1.length >= 30 && arr1.length === arr2.length;
}

export function setImgs(currentImgsList, newImgsList) {
    currentImgsList.map((img, i) => {
        img.src = newImgsList[i].urls.small;
        img.alt = newImgsList[i].alt_description;
        img.id = newImgsList[i].id;
    });
}
