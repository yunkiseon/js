document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
  //href 값 가져오기
  console.log("href", e.target.href);
  // target 값 가져오기
  console.log("target", e.target.target);
  // data- 값 가져오기
  //console.log("data-link", e.target.data-link); 이건 안됨 js 에선 - 를 사용하지 않기 때문
  console.log("data-link", e.target.dataset.link);
  console.log("data-link-test", e.target.dataset.linkTest);

  // 주소에  naver 가 있다면 네이버로 아니라면 구글로
  // if (e.target.href.includes("naver")) {
  //   location.href = e.target.href;
  // } else {
  //   location.href = "http://www.google.com";
  // }
});

// form submit 발생시

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  // submit 중지
  e.preventDefault();
  // 검증
  // 내용이 잘 입력이 되었는 지 확인
  if (form.name.value === "") {
    form.name.focus();
    alert("이름을 입력하세요");
    return;
  } else if (form.password.value === "") {
    form.password.focus();
    alert("비밀번호를 입력하세요");
    return;
  } else if (form.age.value === "") {
    form.age.focus();
    alert("나이를 입력하세요");
    return;
  }
  e.target.submit();

  // 입력이 안되었다면 안된곳에 focus 를 주고 입력하라고 alert 주기

  // 잘 되었다면 submit 하기
});
