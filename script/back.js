const body = document.querySelector("body");
const slideNext = document.querySelector("#slider-next");
const slidePrev = document.querySelector("#slider-prev");

const date = new Date();
const hours = date.getHours();

const timeOfDay = ["night", "morning", "afternoon", "evening"];

const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //
};

const setBg = (array, bgNum) => {
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${array}/${bgNum}.jpg`;

  const src = img.getAttribute("src");

  img.addEventListener("load", () => {
    body.style.backgroundImage = `url('${src}')`;
    body.style.transition = "1s", 
    body.style.transitionTimingFunction = "ease-in-out";
  });
};

let randomNum = getRandomNum(1, 20);

const bgNum = String(randomNum).padStart(2, "0");


const getSlideNext = () => {
  randomNum = getRandomNum(1, 20);
  if (randomNum !== 20) {
    setBg(
      timeOfDay[Math.trunc(hours / 6)],
      String(randomNum++).padStart(2, "0")
    );
  } else if (randomNum == 20) {
    randomNum = 1;
  }
};


const getSlidePrev = () => {
  randomNum = getRandomNum(1, 20);
  if (randomNum > 1) {
    setBg(
      timeOfDay[Math.trunc(hours / 6)],
      String(randomNum--).padStart(2, "0")
    );
  } else if (randomNum == 1) {
    randomNum = 20;
  }
};


export {
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
};
