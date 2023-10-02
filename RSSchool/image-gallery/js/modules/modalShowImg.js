import { getImgPathByID } from "./fetch.js";
import { imgsGallery } from "./varablesDOM.js";

const modal = document.querySelector(".modal");
const currentImage = document.querySelector(".modal-cert");
const btnCloseModal = document.querySelector(".btn-close-modal");
const btnNextImgR = document.querySelector(".pag.toRight");
const btnNextImgL = document.querySelector(".pag.toLeft");

modal.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

function closeModal(e) {
    if (!e.target.matches(".modal-cert") && !e.target.matches(".pag")) {
        modal.classList.remove("active");
        currentImage.classList.remove("zoom");
        enableScroll();
        btnNextImgL.disabled = false;
        btnNextImgL.style.color = "white";
        btnNextImgR.disabled = false;
        btnNextImgR.style.color = "white";
    }
}

export async function openModal(event, id, dataAttrValue) {
    event.stopPropagation();
    currentImage.dataset.serial = dataAttrValue;
    const imgPath = await getImgPathByID(id);
    currentImage.src = imgPath;
    modal.classList.add("active");
    removeScroll();
    if (dataAttrValue === 0) {
        btnNextImgL.disabled = true;
        btnNextImgL.style.color = "grey";
    }
    if (dataAttrValue === imgsGallery.children.length - 1) {
        btnNextImgR.disabled = true;
        btnNextImgR.style.color = "grey";
    }
}

function removeScroll() {
    document.body.style.overflow = "hidden";
}

function enableScroll() {
    document.body.style.overflow = "auto";
}

btnNextImgR.addEventListener("click", nextRight);
btnNextImgL.addEventListener("click", nextLeft);

async function nextRight() {
    const currentIndex = +currentImage.dataset.serial;

    const imgsListLength = imgsGallery.children.length - 1;
    if (currentIndex < imgsListLength) {
        const nextIndex = +currentIndex + 1;
        const nextImg = imgsGallery.querySelector(`[data-serial="${nextIndex}"]`);
        currentImage.dataset.serial = +currentImage.dataset.serial + 1;
        const imgPath = await getImgPathByID(nextImg.id);
        currentImage.src = imgPath;
        if (imgsListLength - currentIndex === 1) {
            btnNextImgR.disabled = true;
            btnNextImgR.style.color = "grey";
        }
        btnNextImgL.disabled = false;
        btnNextImgL.style.color = "white";
    }
}

async function nextLeft() {
    const currentIndex = +currentImage.dataset.serial;

    if (currentIndex > 0) {
        const nextIndex = +currentIndex - 1;
        const nextImg = imgsGallery.querySelector(`[data-serial="${nextIndex}"]`);
        currentImage.dataset.serial = +currentImage.dataset.serial - 1;
        const imgPath = await getImgPathByID(nextImg.id);
        currentImage.src = imgPath;
        btnNextImgR.disabled = false;
        btnNextImgR.style.color = "white";
        if (currentIndex === 1) {
            btnNextImgL.disabled = true;
            btnNextImgL.style.color = "grey";
        }
    }
}
