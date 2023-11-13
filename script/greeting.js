const greeting = document.querySelector(".greeting"),
  pGreeting = greeting.querySelector(".greeting_time-of-day"),
  inputGreeting = greeting.querySelector(".greeting_name");

const date = new Date();
const hours = date.getHours();

const timeOfDay = ["ночи", "утро", "день", "вечер"];

const getTimeOfDay = () => {
  if (Math.trunc(hours / 6) === 0) {
    pGreeting.textContent = `Доброй ${timeOfDay[0]},`;
  }
  if (Math.trunc(hours / 6) === 1) {
    pGreeting.textContent = `Доброе ${timeOfDay[1]},`;
  }
  if (Math.trunc(hours / 6) === 2) {
    pGreeting.textContent = `Добрый ${timeOfDay[2]},`;
  }
  if (Math.trunc(hours / 6) === 3) {
    pGreeting.textContent = `Добрый ${timeOfDay[3]},`;
  }
};

const showGreeting = () => {
  getTimeOfDay();
  setTimeout(showGreeting, 1000);
};

showGreeting();

export {
  greeting,
  pGreeting,
  date,
  hours,
  timeOfDay,
  getTimeOfDay,
  showGreeting,
};

const setLocalStorage = () => {
  localStorage.setItem("name", inputGreeting.value);
};

const getLocalStorage = () => {
  if (localStorage.getItem("name")) {
    inputGreeting.value = localStorage.getItem("name");
  }
};

export { inputGreeting, setLocalStorage, getLocalStorage };
