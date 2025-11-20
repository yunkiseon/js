const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const wrap = document.querySelector(".wrap");

// 1번 script
//next.addEventListener("click", (e) => {
//   wrap.style.transform = `translate(-${300 * 1}px)`;
// });
// prev.addEventListener("click", (e) => {
//   wrap.style.transform = `translate(${300 * 0}px)`;
// });

//carousel.html2 스크립트
//첫번째 슬라이드 => 다음 클릭
//transform = translate(-${100}vs) -> 200ㅍㄴ
// 이전 클릭시 200 100 0 순으로
const carousel = document.querySelector(".carousel");

let idx = 0;
prev.addEventListener("click", (e) => {
  if (idx === 0) {
    return;
  }
  idx -= 1; // idx = idx -1;
  carousel.style.transform = `translate(-${100 * idx}vw)`;
});

next.addEventListener("click", (e) => {
  if (idx === 2) {
    return;
  }
  idx += 1;
  carousel.style.transform = `translate(-${100 * idx}vw)`;
});

function logText(msg) {
  msg(); //msg는 변수이지만 밑에 전달인자로 사용되었다.
}
logText(() => console.log("hi"));
// logText를 호출하면서 함수를 전달인자로 사용하는 것
