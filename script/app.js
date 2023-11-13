import * as NowTime from "../script/script-time.js";

NowTime.getTimes();

import * as Greeting from "../script/greeting.js";

Greeting.showGreeting();

import { inputGreeting, setLocalStorage, getLocalStorage } from "../script/greeting.js";

inputGreeting.addEventListener("change", () => {
  setLocalStorage();
});

window.addEventListener("beforeunload", setLocalStorage);

window.addEventListener("load", getLocalStorage);

import {
  body,
  slideNext,
  slidePrev,
  date,
  hours,
  timeOfDay,
  getRandomNum,
  setBg,
  randomNum,
  bgNum,
  getSlideNext,
  getSlidePrev,
} from "../script/back.js";

setBg(timeOfDay[Math.trunc(hours / 6)], bgNum);

slideNext.addEventListener("click", getSlideNext);
slidePrev.addEventListener("click", getSlidePrev);

import {
  weatherIcon,
  temperature,
  weatherDescription,
  city,
  getWeather,
  setwLocalStorage,
  getwLocalStorage,
} from "../script/weather.js";

getWeather("Минск");

city.addEventListener("change", () => {
  getWeather(`${city.value}`);
});

window.addEventListener("beforeunload", setwLocalStorage);
window.addEventListener("load", getwLocalStorage);

import {
  qoutes,
  forQoutes,
  reload,
  getRandomN,
  random,
  getQuotes,
} from "../script/qoutes.js";

getQuotes();

reload.addEventListener("click", () => {
  getQuotes();
});


import {playPauseBtn,
   isPlay,
   playAudio, 
    audio,

  
} from "../script/player.js";

playPauseBtn.addEventListener('click', () => {

 playPauseBtn.classList.remove('pause');
 playAudio();

} );

import {playList} from '../script/player.js';

import {
  plNext,
  plPrev,
  playNum, 
  playNext, 
  playPrev,
  playNPAudio, 
  li,
  removeClassLi
} from '../script/player.js';




plNext.addEventListener('click', () =>{
  playNext();
  playPauseBtn.classList.add('pause');
 removeClassLi();
 li[playNum].classList.add('item-active');

})




plPrev.addEventListener('click', () => {
  playPrev();
  playPauseBtn.classList.add('pause');
 removeClassLi();
 li[playNum].classList.add('item-active');
  
} )