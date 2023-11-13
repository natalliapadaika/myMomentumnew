const qoutes = document.querySelector(".qoutes");
const forQoutes = qoutes.querySelector(".for-qoutes");

const reload = qoutes.querySelector(".reload");

const getRandomN = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const random = () => {
  return getRandomN(1, 100);
};

const getQuotes = async () => {
  const quotes = "quotes.json";
  const res = await fetch(quotes);
  const data = await res.json();

  const randomN = random();

  forQoutes.innerHTML = `
  <p> ${data[randomN].text} </p>
  <p> ${data[randomN].author}</p>
  `;
};


export { qoutes, forQoutes, reload, getRandomN, random, getQuotes };
