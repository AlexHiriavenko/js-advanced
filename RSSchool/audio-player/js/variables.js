const player = document.getElementById("ap");
const playBtn = player.querySelector(".ap-toggle-btn");
const prevBtn = player.querySelector(".ap-prev-btn");
const nextBtn = player.querySelector(".ap-next-btn");
const repeatBtn = player.querySelector(".ap-repeat-btn");
const volumeBtn = player.querySelector(".ap-volume-btn");
const trackTitle = player.querySelector(".ap-title");
const curTime = player.querySelector(".ap-time--current");
const durTime = player.querySelector(".ap-time--duration");
const progressBar = player.querySelector(".ap-bar");
const preloadBar = player.querySelector(".ap-preload-bar");
const volumeBar = player.querySelector(".ap-volume-bar");
const imageDiv = document.querySelector(".ap-image");
const image = imageDiv.querySelector(".cover");

export {
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
    imageDiv,
    image,
};
