const playPauseBtn = document.querySelector(".play");

let isPlay = false;

const audio = new Audio();

import playList from "../script/play-list.js";

export { playList };

let playNum = 0;

function playAudio() {

  

  if (!isPlay) {
   audio.src = playList[playNum].src;
   audio.currentTime = 0;

    audio.play();
    isPlay = true;
    playPauseBtn.classList.add("pause");
    li[playNum].classList.add("item-active");
  } else if (isPlay) {
    audio.pause();
    isPlay = false;
    li[playNum].classList.remove("item-active");
  }
}

export { playPauseBtn, playAudio, isPlay, audio };

const ul = document.querySelector("ul");
const plNext = document.querySelector(".play-next");
const plPrev = document.querySelector(".play-prev");

playList.forEach((el, i) => {
  const li = document.createElement("li");
  li.classList.add("play-item");
  li.textContent = `${playList[i].title}`;
  ul.append(li);
});

const playNext = () => {
  playNum++;
  if (playNum !== playList.length) {
    playNPAudio();
  } else {
    playNum = 0;
    playNPAudio();
  }
};

const playPrev = () => {
  if (playNum == 0) {
    playNum = playList.length;
  }
  if (playNum <= playList.length) {
    playNum--;
    playNPAudio();
  } else if (playNum < 0) {
    playNum = playList.length;
  }
};

function playNPAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;

  audio.play();
  isPlay = true;

  li[playNum].classList.add("item-active");
}

const li = Array.from(ul.querySelectorAll("li"));

const removeClassLi = () => {
  li.forEach((el) => {
    el.classList.remove("item-active");
  });
};

export {
  plNext,
  plPrev,
  playNum,
  playNext,
  playPrev,
  playNPAudio,
  li,
  removeClassLi,
};
