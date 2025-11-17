// 배열
const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도", "메론"];
const others = ["과일", 1, 1.34, new Date(), true, {}];
const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const planet = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

// 배열 출력
console.log(fruits);
for (let index = 0; index < array1.length; index++) {
  const element = array1[index];
  console.log(element);
}

planet.forEach((element, idx) => {
  console.log(`${idx} : ${element}`);
});

for (const element of others) {
  console.log(element);
}

console.log(fruits[3]);

// 1. 배열요소 추가
//push(), unshitft()
console.log("\n------- 배열요소 추가 ----------");
fruits.push("메론");
fruits.unshift("딸기");
// 배열 요소 변경
fruits[5] = "키위";
console.log(fruits);

// 없는 index 사용 시 push 상황과 동일
fruits[8] = "파인애플";
console.log(fruits);

// 2. 배열 요소 삭제
//splice(start, deleteCount), pop()
console.log("\n------- 배열요소 제거 ----------");
console.log(array1);
array1.pop();
console.log(array1);
array1.splice(2, 1);
console.log(array1);
//splice(start, deleteCount, "아이템") 교체
array1.splice(2, 1, "오토바이");
console.log(array1);
//splice(start, 0, "아이템") 삽입
array1.splice(2, 0, "트럭");
console.log(array1);

// 3. 배열 연결
// fruits.join();
console.log("-문자열로 배열 연결", fruits.join("-"));
console.log("-문자열로 배열 연결", fruits.join());

// 4. 다른 배열과 연결 후 새로운 배열로 리턴 : concat();
console.log(fruits.concat(planet));
console.log(fruits);

//5. 배열요소 자르기 :  slice()
console.log(fruits.splice(1, 3));

// 6. 정렬
// sort의 경우 문자열은 정렬을 해주지만 숫자는 안해준다. 그래서 따로 함수를 만들어야만 숫자를 정렬할 수 있다.
console.log(fruits.sort());
// 아래와 같이 함수를 써야만 정리할 수 있다
//화살표 함수: 원하는 정렬 장식 지정
console.log([12, 6, 9, 1, 10, 7].sort((a, b) => b - a)); //내림차순
console.log([12, 6, 9, 1, 10, 7].sort((a, b) => a - b)); //오름차순

// 7. 배열 인덱스 확인 : indexOf() 자바와 동일
console.log(fruits.indexOf("망고"));
console.log(fruits.indexOf("자동차"));

// 8. 깊은 복사 vs 얕은 복사
const fruits2 = fruits;
// 값 복사가 아닌 주소복사
console.log(fruits);
console.log(fruits2);

// 원본 수정
fruits[2] = "자동차";
console.log("\n -- 얕은 복사 --");
console.log(fruits);
console.log(fruits2);

// ... : spread 연산자 값복사할 때 사용한다.
const shallowCopy = [...fruits];
fruits[2] = "메론";
console.log("\n -- 깊은 복사 --");
console.log(fruits);
console.log(shallowCopy);

// [숫자 1 ] 5개를 요소로 하는 배열 생성
// const array2 = [1, 1, 1, 1, 1]; 아래와 동일함
const array2 = new Array(5).fill(1);
console.log(array2);

// 조건에 만족하는 배열 요소 추출 : find() 만족하는 배열의 첫 요소만
const array3 = [12, 6, 9, 1, 10, 7];

console.log(array3.find((item) => item > 5));
// 첫 요소의 인덱스 추출: findIndex()
console.log(array3.findIndex((item) => item > 5));

const varArr1 = ["num1", "num2"];
const varArr2 = ["num3", "num4"];

const varArr3 = [varArr1, varArr2];
console.log(varArr3); // [ [ 'num1', 'num2' ], [ 'num3', 'num4' ] ] 2차원 배열
const varArr4 = [...varArr1, ...varArr2];
varArr1[0] = "num5";
console.log("복사본 ", varArr3);
console.log(varArr4); // [ 'num1', 'num2', 'num3', 'num4' ] 1차원배열
