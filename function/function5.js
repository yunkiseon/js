// 콜백함수 : 함수를 다른 함수의 전달인자로 전달, 전달된 함수 호출 가능
// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   alert("동의하셨습니다.");
// }
// function showCancel() {
//   alert("취소하셨습니다.");
// }
// ask("동의하십니까?", showOk, showCancel);

// const foo = function (func) {
//   func();
// };
// //괄호가 있기에 함수임을 알 수 있다. 그리고 foo를 호출할 때도 그 형식에 맞게 () {}이라는 function 으로 해주어야 한다.
// foo(() => {
//   console.log("함수를 전달인자로 전달");
// });

function callTenTimes(callback) {
  for (let index = 0; index < 10; index++) {
    callback();
  }
}
const callback = () => console.log("함수호출");

callTenTimes(callback);
