// async
// async (params) => {
//
// };
// async function name(params) {
//
// }

async function logName() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json());
}
//async 가 붙은 fnc 를 사용하려면 반드시 await 을 써야한다.
const todo = await logName();
console.log(todo);
