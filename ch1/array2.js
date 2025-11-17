// 최대값과 최소값 출력
const numArr = [52, 273, 586, 32, 57, 103, 312, 2];
// numArr.sort((a, b) => b - a);
// console.log(numArr[0]);
// console.log(numArr.find((a, b) => a > b));

let max = numArr[0];
let min = numArr[0];
for (let index = 1; index < numArr.length; index++) {
  if (max < numArr[index]) max = numArr[index];
  if (min > numArr[index]) min = numArr[index];
}
document.writeln(`최대값 : ${max}, 최솟값 : ${min}`);
document.writeln("<br>");

// numArr.sort((a, b) => a - b);
// console.log(numArr[0]);
// console.log(numArr.find((a, b) => a < b));

// 사용자한테 한글로 행성 이름을 입력 받은 후 영어로 된 행성 이름 출력
const planetKor = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성"];
const planetEng = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus"];

let input = prompt("행성입력");
document.writeln("입력한 한글 행성 이름 : ", input);
document.writeln("영어 행성 이름 : ", planetEng[planetKor.indexOf(input)]);
