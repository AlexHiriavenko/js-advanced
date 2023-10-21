import { trackTitle, curTime, durTime, progressBar, preloadBar } from "../variables.js";

function empty(audio) {
    audio.pause();
    audio.src = "";
    trackTitle.innerHTML = "queue is empty";
    curTime.innerHTML = "--";
    durTime.innerHTML = "--";
    progressBar.style.width = 0;
    preloadBar.style.width = 0;
}

export default empty;
