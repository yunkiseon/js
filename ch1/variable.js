//타입 지정은 따로 안함
//변수선언: var, let
//상수선언 : const
var value1 = 4;
var value2 = 5;
console.log(value1 + value2);
//재선언
var value2 = 6;
console.log(value2);
//let은 재선언불가 즉 let value1=7 불가
value1 = 7;
console.log(value1); //SyntaxError : var 타입은 하나의 변수에 여러 값을 넣을 수 있지만 let은 안된다.
value3 = 10;
console.log(value3);

const value4 = 15; // 상수는 초기화 필수
// value4 = 20;
// console.log(value4);
