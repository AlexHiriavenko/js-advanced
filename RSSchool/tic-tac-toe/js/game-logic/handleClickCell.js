import { game } from "./gameProps.js";
import { boxes, stepCount } from "./gameVariables.js";
import swapTurn from "./swapTurn.js";
import checkGameOver from "./checkGameOver.js";

function handleClickCell(index) {
    if (game.gameField[index] === "") {
        boxes[index].innerText = game.currentPlayer;
        game.gameField[index] = game.currentPlayer;
        boxes[index].style.pointerEvents = "none";
        game.stepsCounter += 1;
        stepCount.textContent = game.stepsCounter;
        swapTurn();
        checkGameOver();
    }
}

export default handleClickCell;
