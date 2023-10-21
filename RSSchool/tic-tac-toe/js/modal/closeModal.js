import { enableScroll } from "./setScroll.js";
import { modal, statisticTableBody } from "./modalVariables.js";

function closeModal(e) {
    if (!e.target.closest(".table")) {
        modal.classList.remove("active");
        enableScroll();
        statisticTableBody.innerHTML = "";
    }
}

export default closeModal;
