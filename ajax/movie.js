//페이지가 로드되면 1. 어제 날짜를 보여주기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

const init = () => {
  const now = new Date(); //2025-11-21T08:11:48.387Z
  console.log(now);

  const year = now.getFullYear();
  const month = now.getMonth() + 1; // JS 월을 0부터 시작해서 +1 해줘야함
  const day = now.getDate() - 1; //어제 날짜

  console.log(year, month, day);

  // 구한 어제 날짜를 화면에 보여주기

  // value에 01~09 식으로 되어있기 때문에 금일이 9일 처럼 한 자리 수라면 성립하지 않는다.
  // 때문에 추가적인 함수가 필요하다.

  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};
init();

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  // 원래 fetch 주소 끝에 날짜가 들어가기 때문에 일별 박스 오피스에서 날짜를 움직여도 고정된 값이기에 바뀌지 않는다.
  // 때문에 변수를 넣어줘서 바꿀 필요가 있다.
  // 사용자가 입력한 날짜 가져오기
  const date = txtYear.value + selMon.value + selDay.value;
  console.log(date);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=8808e2400027f3f02ca1cf7a9e393d64&targetDt=${date}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const msg = document.querySelector("#msg");
      const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      let result = ``;
      dailyBoxOfficeList.forEach((item) => {
        result += `<ul>`;
        result += `<li>movieCd : ${item.movieCd}</li>`;
        result += `<li>movieNm : ${item.movieNm}</li>`;
        result += `<li>rank : ${item.rank}</li>`;
        result += `<li>rankInten : ${item.rankInten}</li>`;
        result += `</ul>`;
      });
      //   console.log(data.boxOfficeResult.dailyBoxOfficeList);
      //movieCd, movieNm, rank, rankInten
      msg.innerHTML = result;
    });
});
