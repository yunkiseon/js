// h1 태그 요소 삭제
const h1 = document.querySelector("h1");
// document.querySelector("button").addEventListener("click", () => h1.remove());
// h1.remove();

// e.target : 이벤트 대상 가져오기
// 즉 h1.addEventListener("click", () => h1.remove()) 와
// h1.addEventListener("click", (e) => e.target.remove()) 은 동일하다. 하지만 위의 button의 경우 target이 버튼임을 기억하자.
// h1.addEventListener("mouseover", (e) => e.target.remove());

// h1 요소의 class 제거 button 클릭하면
// 1) removeAttribute("제거할 속성명")-모든 속성용 2)classList.remove()-class전용
// img 요소 찾기
const img = document.querySelector("img");
// img의 alt 속성 값 제거
img.removeAttribute("alt");
// h1.removeAttribute("class");

console.log(h1.classList);
console.log(h1.classList[0]);
console.log(h1.classList[1]);
h1.classList.remove("two");
