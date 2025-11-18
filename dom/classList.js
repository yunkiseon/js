// h1 요소의 클래스명 전부 가져오기
const h1 = document.querySelector("h1");
console.log(h1.classList);
// h1 클래스명 one -> four 변경
h1.classList.replace("one", "four");
// h1 클래스명 five 추가
h1.classList.add("five");
// h1 클래스명 one 을 추가하되 있다면 제거하고 없다면 붙인다
h1.classList.toggle("two");
// h1 클래스명 제거
