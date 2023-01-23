//저는 붓산사람이어서 부산 대기질 정보 조회 API 를 사용해보았습니다..
//부산 대기질 정보 조회 API: https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15057173

const getyourDong = prompt(`대기질을 조회하려는 동 이름을 입력해주세요. 
\부산시 전체 대기질 조회를 원하는 경우 '전체' 라고 입력하세요.`);

function getToday() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  var hour = date.getHours();

  return year + month + day + hour;
}

const url = `http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=8H87gZmi8dng6IQJyNwps63ti1dKr8uN66XnzT89JRznGnRQjRpHEMkxBwAhUymFwzFNWnYxqnxS5jIJy541QA%3D%3D&pageNo=1&numOfRows=40&resultType=json&controlnumber=${getToday()}`;

fetch(url).then(res => res.json()).then(result => {
  const airQuality =
    result.getAirQualityInfoClassifiedByStation.body.items.item;

  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hour = date.getHours();

  console.log(
    `<${year}년 ${month}월 ${day}일 ${hour}시 부산시 ${getyourDong} 대기질 정보 조회>`
  );
  console.log(airQuality);
  for (let i = 0; i < airQuality.length; i++) {
    if (getyourDong == airQuality[i].site) {
      console.log(`미세먼지 농도: ${airQuality[i][`pm10`]} ㎍/㎥`);
      if (airQuality[i][`pm10`] >= 0 && airQuality[i][`pm10`] <= 30) {
        console.log("=> 미세먼지 좋음");
      } else if (airQuality[i][`pm10`] >= 31 && airQuality[i][`pm10`] <= 80) {
        console.log("=> 미세먼지 보통");
      } else if (airQuality[i][`pm10`] >= 81 && airQuality[i][`pm10`] <= 120) {
        console.log("=> 미세먼지 약간나쁨");
      } else {
        console.log("=> 미세먼지 나쁨");
      }
    } else if (getyourDong === `전체`) {
      //console.log(`초미세먼지: ${airQuility[i][`pm25`]} ㎍/㎥`)
      console.log(
        `${airQuality[i][`site`]} 지역 미세먼지 농도: ${airQuality[i][`pm10`]} ㎍/㎥`
      );
      if (airQuality[i][`pm10`] >= 0 && airQuality[i][`pm10`] <= 30) {
        console.log("=> 미세먼지 좋음");
      } else if (airQuality[i][`pm10`] >= 31 && airQuality[i][`pm10`] <= 80) {
        console.log("=> 미세먼지 보통");
      } else if (airQuality[i][`pm10`] >= 81 && airQuality[i][`pm10`] <= 120) {
        console.log("=> 미세먼지 약간나쁨");
      } else {
        console.log("=> 미세먼지 나쁨");
      }
      //consolg.log(`${airQuality[j][`site`]} 초미세먼지: ${airQuility[j][`pm25`]} ㎍/㎥`)
    } else {
      throw new Error(`해당 지역에는 대기질 측정소가 없습니다. 다시 시도해 주세요.`);
    }
  }
});
