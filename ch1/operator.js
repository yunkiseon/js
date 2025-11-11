// 연산자
let a = 4,
  b = 5;
//산술연산자
console.log("\n산술연산");
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b); // 몫
console.log("a % b = ", a % b);
//비교연산자
console.log("\n비교연산");
console.log("a == b", a == b);
console.log("a === b", a === b);
console.log("a != b", a != b);
console.log("a !== b", a !== b);
let c = "4";
console.log("a == c", a == c); // true 4 == "4" 를 해준다. 자바와는 다르게.
console.log("a === c", a === c); //false 타입까지 모두 확인해줌
console.log("a != c", a != c); //false
console.log("a !== c", a !== c); //true

//연결연산자
console.log("\n연결연산");
console.log("a + c = ", a + c); // 4 + "4" 44
let d = 5;
console.log("d + c = ", d + c); // 5 + "4" 54
//단항
console.log("\n단항연산");
let i = 0;
while (i < 10) {
  i++;
  if (i == 5) continue;
  console.log(i);
}
