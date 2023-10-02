import { imgsGallery } from "./varablesDOM.js";
import { openModal } from "./modalShowImg.js";

function renderImgsList(fetchData, parent) {
    if (!fetchData?.length) {
        imgsGallery.innerHTML = "";
        const message = "По данному ключевому слову картинок не найдено";
        const title = document.createElement("h2");
        title.textContent = message;
        title.style.textAlign = "center";
        title.style.color = "orangered";
        parent.append(title);
    }

    fetchData.map((dataImg, i) => {
        const { urls, alt_description, id } = dataImg;
        const img = document.createElement("img");
        img.src = urls.small;
        img.alt = alt_description;
        img.className = "img";
        img.id = id;
        img.dataset.serial = i;
        img.addEventListener("click", (event) => openModal(event, img.id, i));
        parent.append(img);
    });
}

export default renderImgsList;
