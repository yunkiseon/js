// 내장함수
// corfirm(), alert() 이 둘 모두 사실 window. 이 생략되어있는 것이다.
//isNaN(), parseInt(), parseFloat()

// 문자 인코딩
// a -> 97 -> 10021
// 문자 디코딩
// a <- 97 <- 10021
//http://localhost:8080/basic/info/html?name=%ED%99%8D%EA%B8%B8%EB%8F%99
console.log(encodeURI("http://localhost:8080/basic/info/html?name=홍길동"));
console.log();
//http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo%2Fhtml%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99
console.log(encodeURIComponent("http://localhost:8080/basic/info/html?name=홍길동"));
// 네트워크 를 통해서 한글 등이 넘어갈 때 바꾸어주는 기능을 한다.
// encodeURI : 영문,숫자, 일부 기호만 제외한다
// encodeURIComponent : 영문 숫자만 제외한다.

//디코딩
console.log(decodeURI("http://localhost:8080/basic/info/html?name=%ED%99%8D%EA%B8%B8%EB%8F%99"));
console.log(
  decodeURIComponent(
    "http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo%2Fhtml%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99"
  )
);

// 2초가 지난 뒤 안녕 출력
console.log("시작");
setTimeout(() => {
  console.log("안녕");
}, 2000);
console.log("종료");

// 일정 시간 간격으로 처리
console.log("시작");
setInterval(() => {
  console.log("3초가 지났습니다.");
}, 3000);
console.log("종료");
