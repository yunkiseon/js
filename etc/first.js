//변수에 할당

const func1 = () => {
  console.log("변수 할당");
};
func1();

//다른 함수의 인자로 전달

function logText(msg) {
  msg(); //msg는 변수이지만 밑에 전달인자로 사용되었다.
}
logText(() => console.log("hi"));
// logText를 호출하면서 함수를 전달인자로 사용하는 것

//다른 함수의 리턴값으로 사용됨

function add(x) {
  return function (y) {
    return x + y;
  };
}
const sum = add(5);
// 이 경우  sum 안에 function (y) 가 들어있는 것이다. return 이기에
console.log(sum(6));
