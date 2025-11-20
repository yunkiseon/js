// 알림창 보여주기 클릭하면 알림창 보여주기 display block으로 바꾸기
const box = document.querySelector(".alert-box ");

const notification = (state) => {
  box.style.display = state;
};

document.querySelector("button").addEventListener("click", () => {
  notification("block");
});

// x 클릭시 창 닫기
// display = "none"
document.querySelector(".close").addEventListener("click", () => {
  notification("none");
});
