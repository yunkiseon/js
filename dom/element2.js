// table 요소 찾기
const table = document.querySelector("table");
console.log(table);

// const btn = document.querySelector(".btn-outline-success"); submit 버튼인 경우 form 을 찾는 것이 낫다. form 에 submit 이벤트가 생긴다면...
const form = document.querySelector("form");
console.log(form);
// 폼 안의 요소 찾기
// 1) form.querySelector(""); or 2) 이름으로 찾기 form.name값

// Search 클릭 시 검색어 가져오기
form.addEventListener("submit", (e) => {
  //이벤트 중지 submit
  e.preventDefault();
  const search = form.search;
  //   console.log(search); 찾았으니까 value 를 가져오면 된다.
  console.log(search.value);
});

// link li 찾기 text 출력
const li = document.querySelector(".navbar-nav li:nth-child(2)");
console.log(li);
console.log(li.textContent);
