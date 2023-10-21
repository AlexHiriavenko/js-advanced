import play from "./play.js";

function prev(played, index, audio) {
    index = played.length > 1 ? played.splice(-2)[0] : 0;
    play(played, index, audio);
}

export default prev;
