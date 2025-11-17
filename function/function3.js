// add(a,b) : 더한 결과 리턴 함수선언방식
function add(x, y) {
  return x + y;
}
console.log("더하기", add(5, 7));

// add2(a,b) : 함수표현식
const add2 = function (x, y) {
  return x + y;
};
console.log("더하기", add2(5, 8));

// 1~10까지 더한 결과를 리턴하는 함수 작성(함수표현식)
const sum = function () {
  let hap = 0;
  for (let i = 0; i < 11; i++) {
    hap += i;
  }
  return hap;
};
console.log("1~10덧셈", sum());

// OtoT();
// 3의 배수 찾기.
// multiple(num) : num 3의 배수라면 박수 출력 아니라면 통과 출력

const multiple = function (num) {
  if (num % 3 == 0) console.log("박수");
  else console.log("통과");
};
multiple(3);

// multiple = function (num) {
//   let i = i++;
//   if (num == 3 * i) {
//     console.log("박수");
//   } else {
//     console.log("통과");
//   }
// };
// multiple(3);

//multiple2(num) 3의 배수인 경우 박수, 9의 배수 박수 2, 아닌 경우 통과
const multiple2 = function (num) {
  if (num % 3 == 0) {
    if (num % 9 == 0) {
      console.log("박수2");
    } else {
      console.log("박수");
    }
  } else console.log("통과");
};
multiple2(3);
multiple2(7);
multiple2(9);

// 두 과목의 점수를 입력하면 합격 여부를 알려주는 함수
// pass(outline, law)
// 두 과목 합해서 120 점 이상이면 합격 출력, 한 과목 40점 미만이면 불합격
function pass(outline, law) {
  const jumsu = outline + law;
  if (outline >= 40 && law >= 40 && jumsu >= 120) console.log("합격");
  else console.log("불합격");
}
pass(50, 80);
