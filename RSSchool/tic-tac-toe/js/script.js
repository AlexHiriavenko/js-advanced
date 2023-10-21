import openModal from "./modal/openModal.js";
import closeModal from "./modal/closeModal.js";
import { modal, btnCloseModal, btnStatistic } from "./modal/modalVariables.js";
import initGame from "./game-logic/initGame.js";
import { boxes, playAgain } from "./game-logic/gameVariables.js";
import handleClickCell from "./game-logic/handleClickCell.js";

localStorage.setItem("statistic", JSON.stringify([]));

playAgain.addEventListener("click", initGame);
btnStatistic.addEventListener("click", openModal);
modal.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

initGame();

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClickCell(index);
    });
});
