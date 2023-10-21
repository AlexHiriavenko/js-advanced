import { playList } from "../playList.js";
import { image } from "../variables.js";

function setCoverImg(index) {
    if (playList[index]?.icon) {
        image.src = playList[index].icon;
    }
}

export default setCoverImg;
