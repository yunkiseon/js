// const func = function (){} : 함수 표현식
const showMsg = function () {
  console.log("안녕하세요");
};

showMsg();

const multiply = function (a, b) {
  return a * b;
};

const result = multiply(5, 3);
console.log(result);

const showDialog = function (greeting, name) {
  console.log(`${greeting}!!${name}`);
};

showDialog("hello", "kim");

const showDialog2 = function a(greeting, name) {
  console.log(`${greeting}!!${name}`);
};
showDialog2("hello", "kim");

// 함수 선언하기 전 호출 : hoisting
console.log(multiply2(6, 8));

function multiply2(x, y) {
  return x * y;
}

// 함수표현식은 hoisting 안됨 ReferenceError: Cannot access 'multiply3' before initialization
// 장점은 문법적 오류를 잡기 편하다는 점이다. hoisting이 안되기에 순서를 찾기 편하기 때문이다.
// console.log(z);
// var z = 5;

// multiply3(8, 9);
// const multiply3 = function (x, y) {
//   return x * y;
// };

console.log(k); //ReferenceError: Cannot access 'k' before initialization
let k = 6;
