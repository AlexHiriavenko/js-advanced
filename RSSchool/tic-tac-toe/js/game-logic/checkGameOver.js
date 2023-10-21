import { game } from "./gameProps.js";
import { boxes, gameState, playAgain } from "./gameVariables.js";
import updateStatistic from "../games-statistic/updateStatistic.js";

const winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkGameOver() {
    let winner = "";

    winPositions.forEach((position) => {
        if (
            (game.gameField[position[0]] !== "" ||
                game.gameField[position[1]] !== "" ||
                game.gameField[position[2]] !== "") &&
            game.gameField[position[0]] === game.gameField[position[1]] &&
            game.gameField[position[1]] === game.gameField[position[2]]
        ) {
            if (game.gameField[position[0]] === "X") winner = "X";
            else winner = "O";

            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });
    if (winner !== "") {
        gameState.innerText = `Winner Player - ${winner}`;
        updateStatistic(winner, game.stepsCounter);
        game.stepsCounter = 0;
        playAgain.classList.add("active");
        return;
    }
    let fillCount = 0;
    game.gameField.forEach((box) => {
        if (box !== "") fillCount++;
    });
    if (fillCount === 9) {
        gameState.innerText = `Tied Match`;
        updateStatistic("Tied", game.stepsCounter);
        game.stepsCounter = 0;
        playAgain.classList.add("active");
    }
}

export default checkGameOver;
