import { searchInput } from "../varablesDOM.js";
import handleSearch from "./handleSearch.js";

const btnClose = document.querySelector("#search_box .close");

btnClose.addEventListener("click", () => (searchInput.value = ""));

function keyDown(event) {
    if (searchInput === document.activeElement && event.key === "Enter") {
        handleSearch();
    }
}

window.addEventListener("keypress", keyDown);
