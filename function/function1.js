// 함수 와 메소드는 같은 개념이지만 메소드는 객채 내에 포함된 개념이고 함수는 단독으로 존재한다는 차이점이 있다.
//함수 만드는 방법
// function name(params) {}
// const func = function(){};
// const func1 = ()=>{};

// 1. 파라매터가 없는 경우
function showMsg() {
  console.log("안녕하세요");
}
showMsg();

// 2. 파라매터가 있는 경우
function multiply(a, b) {
  console.log(a, b);
  return a * b;
}
const result = multiply(5, 3);
console.log(result);

function showDialog(greeting, name) {
  console.log(`${greeting}!!${name}`);
}

showDialog("hello", "kim");

// 3. 매개 변수 기본값 : 매개변수 값이 안 넘어오는 경우 기본값 사용
function multiply(a, b = 5) {
  console.log(a, b);
  return a * b;
}
console.log(multiply(3));
console.log(multiply(5, 6));

function multiply(a, b) {
  console.log(a, b);
  b = b || showDialog;
  return a * b;
}
console.log(multiply(3));
console.log(multiply(5, 6));

// 4. 함수 안에 함수 작성
function a() {
  function b() {
    console.log("b function");
  }
  if (true) {
    function c() {}
  }
  b();
  c();
}
a(); // a 안에서 선언되었기에 밖에선 a 만 가능
