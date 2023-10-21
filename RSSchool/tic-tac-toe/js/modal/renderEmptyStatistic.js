import { statisticTableBody } from "./modalVariables.js";

function renderEmptyStatistic() {
    const noneRow = document.createElement("tr");
    const noneCell = document.createElement("td");
    noneCell.setAttribute("colspan", "3");
    noneCell.textContent = "no histiry yet";
    noneCell.style.textAlign = "center";
    noneRow.appendChild(noneCell);
    statisticTableBody.appendChild(noneRow);
}

export default renderEmptyStatistic;
