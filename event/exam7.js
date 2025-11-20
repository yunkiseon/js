// tab button이 클릭 될 때마다 짝꿍인 tab content 띄우기

// tab-button 찾기 + click 이벤트 리스너 부착
const btns = document.querySelectorAll(".tab-button");
const cons = document.querySelectorAll(".tab-content");

// btns.forEach((btn,idx) => {
//     btn.addEventListener("click",(e)=>{
//         // 어느 tab-button 이 클릭 되었는가? e.target
//         // btns[0].classList.remove("orange");
//         // btns[1].classList.remove("orange");
//         // btns[2].classList.remove("orange");
//         btns.forEach((element)=>{
//             element.classList.remove("orange");
//         });
//         // 모든 tab-button 에 orange제거
//         e.target.classList.add("orange");
//         cons.forEach((cons)=>{
//             cons.classList.remove("show");
//         });
//         cons[idx].classList.add("show");
//     });
// });

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    // tab-content 찾기 + show 클래스명 이동 classList.add, remove, toggle
    btns.forEach((e) => {
      e.classList.remove("orange");
    });
    btns[i].classList.add("orange");

    cons.forEach((e) => {
      e.classList.remove("show");
    });
    cons[i].classList.add("show");
  });
}

// btns[1].addEventListener("click", (e) => {
//   cons[1].classList.add("show");
//   cons[0].classList.remove("show");
//   btns[0].classList.remove("orange");
//   btns[1].classList.add("orange");
// });
// btns[2].addEventListener("click", (e) => {
//   cons[2].classList.add("show");
//   cons[0].classList.remove("show");
//   btns[2].classList.add("orange");
//   btns[0].classList.remove("orange");
// });
