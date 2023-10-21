import { isEmptyList } from "./isEmptyList.js";
import empty from "./emtpy.js";
import { playList } from "../playList.js";
import { trackTitle } from "../variables.js";
import setCoverImg from "./setCoverImg.js";

function play(played, index, audio) {
    const plEnd = playList.length - 1;
    index = index > plEnd ? 0 : index;
    if (index < 0) index = plEnd;

    if (isEmptyList()) {
        empty(audio);
        return;
    }

    played.push(index);

    audio.src = playList[index].file;
    audio.preload = "auto";
    document.title = trackTitle.innerHTML = playList[index].title;
    audio.play();
    setCoverImg(index);
}

export default play;
