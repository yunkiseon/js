const products = [
  { id: 0, price: 77000, title: "Blossom Dress" },
  { id: 1, price: 55000, title: "SpringField Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];
// 배열
const fruits = ["사과", "딸기", "수박", "바나나"];
// console.log(fruits[0]); 단일
fruits.forEach((item) => {
  console.log(item);
}); // 전체 출력
//객체
const person = {
  name: "홍길동",
  job: "학생",
};
const person1 = {
  name: "성춘향",
  job: "학생",
};
console.log(person.name);
//객체배열
const persons = [
  { name: "홍길동", job: "학생" },
  { name: "성춘향", job: "학생" },
];
// console.log(persons[0].name);
persons.forEach((p) => {
  console.log(`${p.name} : ${p.job}`);
});

// 위와 같이 products 에도 접근하면 된다.
products.forEach((item) => {
  console.log(`${item.id}, ${item.price}, ${item.title}`);
});

// card-title : 제품 타이틀
// card-text : 가격
// 카드 영역 찾기
const cards = document.querySelectorAll(".card");
cards.forEach((card, idx) => {
  // .card-title 요소 찾기
  const title = card.querySelector(".card-title");
  // title을 찾았기에 next로 찾으면 text가 나옴
  const price = title.nextElementSibling;

  title.textContent = products[idx].title;
  price.textContent = products[idx].price;
});
