import { trackTitle } from "../variables.js";
import { isEmptyList } from "./isEmptyList.js";
import setCoverImg from "./setCoverImg.js";
import { playList } from "../playList.js";

function playToggle(event, audio, index) {
    const button = event.target.closest("button");
    if (isEmptyList()) {
        return;
    }
    trackTitle.innerHTML = playList[index].title;
    if (audio.paused) {
        audio.play();
        button.classList.add("playing");
    } else {
        audio.pause();
        button.classList.remove("playing");
    }
    setCoverImg(index);
}

export default playToggle;
