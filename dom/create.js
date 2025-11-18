// 동적으로 element(node) 생성
// <p>HELLO</p> 를 생성버튼을 누리면 생성
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const pTag = "<p>HELLO</p>";

  //insertAdjacentHTML("위치", 삽입요소)
  document.querySelector("#test").insertAdjacentHTML("beforeend", pTag);
  //   document.body.append(pTag); 옆으로 붙이기 -> p 태그도 노출됨
  const img = document.createElement("img");
  img.src = "1.jpg";
  img.alt = "시계";
  document.body.appendChild(img);
});
