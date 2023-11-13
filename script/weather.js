const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const city = document.querySelector(".city");

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("статус не 200");
    }

    const data = await res.json();
    weatherIcon.className = "weather-icon owf";

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.innerHTML = `<p>${
      data.weather[0].description
    } </p> <p> скорость ветра - ${Math.round(
      data.wind.speed
    )} м/с </p> <p>влажность - ${data.main.humidity} %</p>`;
  } catch (error) {
    weatherIcon.className = "weather-icon owf";
    temperature.textContent = "";
    weatherDescription.innerHTML = `<div> <p> Ошибка, ${city} город не найден</p> </div>`;

    console.error(error);
  }
};

city.value = "Минск";

city.addEventListener("change", () => {
  getWeather(`${city.value}`);
});

const setwLocalStorage = () => {
  localStorage.setItem("city", city.value);
};

const getwLocalStorage = () => {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
};

export {
  weatherIcon,
  temperature,
  weatherDescription,
  city,
  getWeather,
  setwLocalStorage,
  getwLocalStorage,
};
