import {
    player,
    playBtn,
    prevBtn,
    nextBtn,
    repeatBtn,
    volumeBtn,
    trackTitle,
    curTime,
    durTime,
    progressBar,
    preloadBar,
    volumeBar,
} from "./variables.js";

import { playList } from "./playList.js";
import extend from "./functions/extend.js";
import empty from "./functions/emtpy.js";
import { isEmptyList } from "./functions/isEmptyList.js";
import setCoverImg from "./functions/setCoverImg.js";
import play from "./functions/play.js";
import prev from "./functions/prev.js";
import playToggle from "./functions/playToogle.js";

const AudioPlayer = (function () {
    const audio = new Audio();

    let index = 0,
        plEnd = playList.length - 1,
        volumeLength,
        repeating = true,
        played = [],
        seeking = false,
        rightClick = false,
        apActive = false,
        // settings
        settings = {
            volume: 0.7,
            autoPlay: false,
            playList: [],
        };

    function init(options) {
        if (apActive || player === null) {
            return;
        }

        settings = extend(settings, options);

        playBtn.addEventListener("click", (event) => playToggle(event, audio, index), false);
        volumeBtn.addEventListener("click", volumeToggle, false);
        repeatBtn.addEventListener("click", repeatToggle, false);

        progressBar.parentNode.parentNode.addEventListener("mousedown", handlerBar, false);
        progressBar.parentNode.parentNode.addEventListener("mousemove", seek, false);
        document.documentElement.addEventListener("mouseup", seekingFalse, false);

        volumeBar.parentNode.parentNode.addEventListener("mousedown", handlerVol, false);
        volumeBar.parentNode.parentNode.addEventListener("mousemove", setVolume);
        document.documentElement.addEventListener("mouseup", seekingFalse, false);

        prevBtn.addEventListener("click", () => prev(played, index, audio), false);
        nextBtn.addEventListener("click", next, false);

        apActive = true;

        // Create audio object
        audio.volume = settings.volume;

        if (isEmptyList()) {
            empty();
            return;
        }

        audio.src = playList[index].file;
        audio.preload = "auto";
        trackTitle.innerHTML = "Track Name";
        volumeBar.style.height = audio.volume * 100 + "%";
        volumeLength = volumeBar.css("height");

        audio.addEventListener("error", error, false);
        audio.addEventListener("timeupdate", update, false);
        audio.addEventListener("ended", doEnd, false);
        audio.addEventListener(
            "play",
            () => {
                playBtn.classList.add("playing");
            },
            false
        );
        audio.addEventListener(
            "pause",
            () => {
                playBtn.classList.remove("playing");
            },
            false
        );

        if (settings.autoPlay) {
            audio.play();
        }
    }

    /**
     *  Player methods
     */
    function error() {
        !isEmptyList() && next();
    }

    function next(interactive) {
        if (index === plEnd && !repeating && !interactive) {
            audio.pause();
            setCoverImg(index);
            playBtn.classList.remove("playing");
            return;
        }

        index = index === plEnd ? 0 : index + 1;
        play(played, index, audio);
    }

    function volumeToggle() {
        if (audio.muted) {
            if (parseInt(volumeLength, 10) === 0) {
                volumeBar.style.height = "100%";
                audio.volume = 1;
            } else {
                volumeBar.style.height = volumeLength;
            }
            audio.muted = false;
            this.classList.remove("muted");
        } else {
            audio.muted = true;
            volumeBar.style.height = 0;
            this.classList.add("muted");
        }
    }

    function repeatToggle() {
        const repeat = this.classList;
        const iElement = this.querySelector("i"); // Найти дочерний элемент <i>

        if (repeat.contains("ap-active")) {
            repeating = false;
            repeat.remove("ap-active");
            iElement.classList.remove("ap-active"); // Удалить класс у <i>
        } else {
            repeating = true;
            repeat.add("ap-active");
            iElement.classList.add("ap-active"); // Добавить класс <i>
        }
    }

    function update() {
        if (audio.readyState === 0) return;

        const barlength = Math.round(audio.currentTime * (100 / audio.duration));
        progressBar.style.width = barlength + "%";

        let curMins = Math.floor(audio.currentTime / 60),
            curSecs = Math.floor(audio.currentTime - curMins * 60),
            mins = Math.floor(audio.duration / 60),
            secs = Math.floor(audio.duration - mins * 60);
        curSecs < 10 && (curSecs = "0" + curSecs);
        secs < 10 && (secs = "0" + secs);

        curTime.innerHTML = curMins + ":" + curSecs;
        durTime.innerHTML = mins + ":" + secs;

        const buffered = audio.buffered;
        if (buffered.length) {
            const loaded = Math.round((100 * buffered.end(0)) / audio.duration);
            preloadBar.style.width = loaded + "%";
        }
    }

    function doEnd() {
        next(false);
    }

    function moveBar(evt, el, dir) {
        let value;
        if (dir === "horizontal") {
            value = Math.round(
                ((evt.clientX - el.offset().left + window.pageXOffset) * 100) /
                    el.parentNode.offsetWidth
            );
            el.style.width = value + "%";
            return value;
        } else {
            const offset = el.offset().top + el.offsetHeight - window.pageYOffset;
            value = Math.round(offset - evt.clientY);
            if (value > 100) value = 100;
            if (value < 0) value = 0;
            volumeBar.style.height = value + "%";
            return value;
        }
    }

    function handlerBar(evt) {
        rightClick = evt.which === 3 ? true : false;
        seeking = true;
        seek(evt);
    }

    function handlerVol(evt) {
        rightClick = evt.which === 3 ? true : false;
        seeking = true;
        setVolume(evt);
    }

    function seek(evt) {
        if (seeking && rightClick === false && audio.readyState !== 0) {
            const value = moveBar(evt, progressBar, "horizontal");
            audio.currentTime = audio.duration * (value / 100);
        }
    }

    function seekingFalse() {
        seeking = false;
    }

    function setVolume(evt) {
        volumeLength = volumeBar.css("height");
        if (seeking && rightClick === false) {
            const value = moveBar(evt, volumeBar.parentNode, "vertical") / 100;
            if (value <= 0) {
                audio.volume = 0;
                volumeBtn.classList.add("muted");
            } else {
                if (audio.muted) audio.muted = false;
                audio.volume = value;
                volumeBtn.classList.remove("muted");
            }
        }
    }

    /**
     *  Helpers
     */

    Element.prototype.offset = function () {
        const el = this.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return {
            top: el.top + scrollTop,
            left: el.left + scrollLeft,
        };
    };

    Element.prototype.css = function (attr) {
        if (typeof attr === "string") {
            return getComputedStyle(this, "")[attr];
        } else if (typeof attr === "object") {
            for (const name in attr) {
                if (this.style[name] !== undefined) {
                    this.style[name] = attr[name];
                }
            }
        }
    };

    /**
     *  Public methods
     */
    return {
        init: init,
    };
})();

AudioPlayer.init({
    volume: 0.7,
    autoPlay: false,
    playList: playList,
});

//////////  draft ////////////////////////////

// function play() {
//     index = index > plEnd ? 0 : index;
//     if (index < 0) index = plEnd;

//     if (isEmptyList()) {
//         empty();
//         return;
//     }

//     played.push(index);

//     audio.src = playList[index].file;
//     audio.preload = "auto";
//     document.title = trackTitle.innerHTML = playList[index].title;
//     audio.play();
//     setCoverImg(index);
// }

// function prev() {
//     if (played.length > 1) {
//         index = played.splice(-2)[0];
//     } else {
//         index = 0;
//     }

//     play(played, index, audio);
// }

// function playToggle() {
//     if (isEmptyList()) {
//         return;
//     }
//     if (audio.paused) {
//         audio.play();
//         this.classList.add("playing");
//     } else {
//         audio.pause();
//         this.classList.remove("playing");
//     }
//     setCoverImg(index);
// }
