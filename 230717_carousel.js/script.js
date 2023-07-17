//1. 회색박스 안에 이미지 넣기
//2. 테두리 안에 출력할 이미지를 별도의 공간에 저장한다
//3. 양쪽 버튼을 클릭 했을 때, 이미지를 회전시킨다
//4. 이미지가 무한으로 돌아갈 수 있도록 기능을 구현한다

const container = document.querySelector("#container");
const pics = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];
container.style.backgroundImage = `url(../img/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");
let i = 0;
arrows.forEach(arrow => {
  arrow.addEventListener("click", (e) => {
    if(e.target.id === "left") {
      i--;
      if(i < 0) {
        i = pics.length -1
      }
    } else if (e.target.id === "right") {
      i++;
      if(i >= pics.length) {
        i = 0;
      }
    }
    container.style.backgroundImage = `url(../img/${pics[i]})`;
  });
});