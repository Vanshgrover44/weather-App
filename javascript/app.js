



const form = document.querySelector("form");
const weather = document.querySelector(".weather");
const search = document.querySelector("#search");

const getweather = async (city) => {
  weather.innerHTML = `loading`;

  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=44.34&lon=10.99&appid=${process.env.API_KEY2}&units=metric`;

  const response = await fetch(url2);
  const data = await response.json();
  console.log(data);

  return showweather(data);
};

const showweather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = ` <h1> enter details are wrong please enter the right details!!!!!</h1>`;
  }

  if (data.weather[0].icon == "04n" || data.weather[0].main == "Clouds") {
    document.body.style.backgroundColor = "darkslategray";
  } else if (data.weather[0].icon == "50n" || data.weather[0].main == "Haze") {
    document.body.style.backgroundColor = "darkgray";
  } else if (data.weather[0].icon == "10n" || data.weather[0].main == "Rain") {
    document.body.style.backgroundColor = "gray";
  } else if (data.weather[0].icon == "13n") {
    document.body.style.backgroundColor = "lightskyblue";
  } else if (data.weather[0].main == "Clear") {
    document.body.style.backgroundColor = "lightsalmon";
  } else document.body.style.backgroundColor = " yellow";

  weather.innerHTML = ` <div>
        <img src="https:openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp}°C</h2>
        <h4>${data.weather[0].description}</h4>
        <h4 >FEELS LIKE:- ${data.main.feels_like} </h4>
    </div>
    `;
};

form.addEventListener("submit", function (event) {
  // console.log(search.value)
  getweather(search.value);
  event.preventDefault();
});
