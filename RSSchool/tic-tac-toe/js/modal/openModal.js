import { modal } from "./modalVariables.js";
import renderEmptyStatistic from "./renderEmptyStatistic.js";
import renderGamesStatistic from "./renderGamesStatistic.js";
import { removeScroll } from "./setScroll.js";

function openModal(event) {
    event.stopPropagation();

    modal.classList.add("active");
    removeScroll();
    const storedStatistic = JSON.parse(localStorage.getItem("statistic")) || [];

    storedStatistic.length > 0
        ? renderGamesStatistic(storedStatistic)
        : renderEmptyStatistic();
}

export default openModal;
