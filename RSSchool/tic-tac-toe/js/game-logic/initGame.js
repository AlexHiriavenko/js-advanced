import { boxes, playAgain, gameState, stepCount } from "./gameVariables.js";
import { game } from "./gameProps.js";

stepCount.textContent = game.stepsCounter;

function initGame() {
    stepCount.textContent = 0;
    game.stepsCounter = 0;
    game.currentPlayer = "X";

    game.gameField = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        box.classList.remove("win");
    });
    playAgain.classList.remove("active");
    gameState.innerText = `Ход Игрока: ${game.currentPlayer}`;
}

export default initGame;
