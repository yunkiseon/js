// new Promise(); // 대기 상태
// 성공 : resolve()
// // 실패 : reject()
// new Promise((resolve, reject)=> {
//     //수행
//     //성공
//     resolve();
//     //실패
//     reject();
// });

// 프로미스를 만들고 안에 setTimeout 을 넣을 수 있으며 그 프로미스를 p1 이라는 변수에 담을 수도 있다.
const p1 = new Promise((resolve, reject) => {
  console.log("시작");
  setTimeout(() => {
    resolve("요청 성공");
    // 만약 reject까지 해야하는 상황이라면
    // const isSuccess = true;
    // if (isSuccess) {
    //     resolve("요청성공")
    // } else {
    //     reject("요청 실패")
    // }
  }, 3000);
});

// resolve가 성공하면, then을 출력한다. 실패하면 catch를 출력한다.
// then 안의 변수인 result에 resolve가 담겨있기 때문에, 성공적으로 처리됨, result(=resolve)가 출력이 된다.
p1.then((result) => {
  console.log("성공적으로 처리됨", result);
})
  .catch((error) => {
    console.log("오류발생", error.message);
  })
  .finally(() => {
    console.log("무조건 실행");
  });

//fetch 5 에서의 fetch 를 아래와 같이 또 쓸 수 있다.
const p2 = fetch("https://jsonplaceholder.typicode.com/todos/1");
p2.then((response) => response.json()).then((data) => console.log(data));
