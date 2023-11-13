const timeDate = document.querySelector(".time-date"),
  time = timeDate.querySelector(".time"),
  date = timeDate.querySelector(".date");

const getTimes = () => {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  time.textContent = currentTime;

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const currentDate = now.toLocaleDateString("ru-Ru", options);
  date.textContent = currentDate;

  setTimeout(getTimes, 1000);
};

export { timeDate, time, date, getTimes };
