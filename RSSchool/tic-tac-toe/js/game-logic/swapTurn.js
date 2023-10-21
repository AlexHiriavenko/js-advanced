import { game } from "./gameProps.js";
import { gameState } from "./gameVariables.js";

function swapTurn() {
    if (game.currentPlayer === "X") game.currentPlayer = "O";
    else game.currentPlayer = "X";
    gameState.innerText = `Ход Игрока: ${game.currentPlayer}`;
}

export default swapTurn;
