// const msg = new String("hello javascript");
const msg = "hello javascript"; // 많이 써서 스킵가능하도록 기능해둠

console.log("특정 문자 위치 반환 ", msg.charAt(4));
console.log("특정 문자 위치 찾기 ", msg.indexOf("j")); //못찾으면 -1
console.log("찾을 문자 ", msg.match("ja"));
console.log("찾을 문자 ", msg.match("boy"));
console.log("특정문자 변경 ", msg.replace("hello", "hi"));
console.log("특정 문자 찾기(위치) ", msg.search("ja"));
console.log("문자 자르기 ", msg.slice(6, 10));
console.log("문자 자르기 ", msg.substring(6, 10));
console.log("문자 공백 제거 ", "    hello   ".trim());
console.log("대문자 변경 ", msg.toUpperCase());
console.log("소문자 변경 ", "ABCDEFG".toLowerCase());

// 함수작성
// 사용자로부터 영문이름 소문자로 입력, 전화번호 입력(000-0000-0000)
// 이름은 대문자로 출력, 010-5365-1256 -> 010-####-1256

// const info = () => {
//   const userName = prompt("소문자로 이름 입력");
//   const userTel = prompt("전화번호 입력(000-0000-0000)");
//   document.writeln("이름 : ", userName.toUpperCase());
//   document.writeln("<br>");
//   document.writeln("전화번호 : ", userTel.replace(userTel.substaring(4, 8), "####"));
// };
// info();

// 이메일 입력받기
// 이메일 형식이 맞는 지 확인하는 함수 : @ 확인
// 없다면 alert(입력값 확인)/ 있다면 이메일 출력

// email.includes("@") == 자바의 contains()

const info = () => {
  const email = prompt("이메일을 입력");
  if (email.indexOf("@") == -1) {
    alert("입력값 확인");
    info();
  } else {
    document.writeln("이메일 : ", email);
  }
};
info();
