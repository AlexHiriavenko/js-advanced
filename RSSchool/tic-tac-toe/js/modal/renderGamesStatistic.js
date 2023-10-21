import { statisticTableBody } from "./modalVariables.js";

function renderGamesStatistic(storedStatistic) {
    statisticTableBody.innerHTML = "";

    storedStatistic.sort((a, b) => b.gameNumber - a.gameNumber);
    storedStatistic.forEach((game) => {
        const row = document.createElement("tr");
        const gameNumberCell = document.createElement("td");
        gameNumberCell.textContent = game.gameNumber;
        const stepsCell = document.createElement("td");
        stepsCell.textContent = game.steps;
        const winnerCell = document.createElement("td");
        winnerCell.textContent = game.winner;

        row.appendChild(gameNumberCell);
        row.appendChild(stepsCell);
        row.appendChild(winnerCell);
        statisticTableBody.appendChild(row);
    });
}

export default renderGamesStatistic;
