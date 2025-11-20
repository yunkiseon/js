// tab button이 클릭 될 때마다 짝꿍인 tab content 띄우기

// 이벤트 버블링으로 해결하기
const parent = document.querySelector(".container");
const btns = document.querySelectorAll(".tab-button");
const cons = document.querySelectorAll(".tab-content");

parent.addEventListener("click", (e) => {
  btns.forEach((element) => {
    element.classList.remove("orange");
  });
  e.target.classList.add("orange");
  cons.forEach((cons) => {
    cons.classList.remove("show");
  });
  cons[e.target.dataset.idx].classList.add("show");
});
