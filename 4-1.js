const apiKey = "7eb10076d5dbfef21a8a06e9f861fb42";
const cityName = prompt("도시명을 영문으로 입력하세요(e.g Seoul)");
const base_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=kr&appid=${apiKey}`;

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
)
  .then(response => response.json())
  .then(result => {
    document.querySelector("#leadP").innerHTML = `오늘 ${cityName} 날씨는 ${result
      .weather[0].description} 입니다!`;
    document.querySelector("#clouds").innerHTML = `구름: ${result.clouds.all} %`;
    document.querySelector("#humidity").innerHTML = `습도: ${result.main
      .humidity} %`;
    document.querySelector("#feels_like").innerHTML = `체감온도: ${result.main
      .feels_like} ℃`;
    document.querySelector("#temp").innerHTML = `기온: ${result.main.temp} ℃`;
    document.querySelector("#wind").innerHTML = `풍속: ${result.wind.speed} m/s`;
  })
  .catch(error => {
    alert("에러가 발생했습니다. 도시명을 다시 입력하고 조회해주세요");
  });

function getNewResult() {
  let newCityName = document.getElementById("input_text").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${newCityName}&appid=${apiKey}&units=metric`
  )
    .then(response => response.json())
    .then(result => {
      document.querySelector(
        "#leadP"
      ).innerHTML = `오늘 ${newCityName} 날씨는 ${result.weather[0]
        .description} 입니다!`;
      document.querySelector("#clouds").innerHTML = `구름: ${result.clouds
        .all} %`;
      document.querySelector("#humidity").innerHTML = `습도: ${result.main
        .humidity} %`;
      document.querySelector("#feels_like").innerHTML = `체감온도: ${result.main
        .feels_like} ℃`;
      document.querySelector("#temp").innerHTML = `기온: ${result.main.temp} ℃`;
      document.querySelector("#wind").innerHTML = `풍속: ${result.wind
        .speed} m/s`;
    })
    .catch(error => {
      alert("에러가 발생했습니다. 도시명을 다시 입력하고 조회해주세요");
    });
}
