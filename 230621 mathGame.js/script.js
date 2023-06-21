//수학객체

// let num = 2.1234;

// let maxNum = Math.max(10, 5, 8, 30);
// let minNum = Math.min(10, 5, 8, 30);

// let roundNum = Math.round(num);
// let floorNum = Math.floor(num);
// let ceilNum = Math.ceil(num);

// let rndNum = Math.ceil(Math.random() * 10);
// let piNum = Math.PI

let game = prompt("가위, 바위, 보 중 선택하세요", "가위")
let gameNum;

switch(game) {
  case "가위" :
    gameNum = 1;
    break;
  case "바위" :
    gameNum = 2;
    break;
  case "보" :
    gameNum = 3;
    break;
  default: alert("잘못 작성하셨습니다.");
}

let com = Math.ceil(Math.random() * 3);
document.write("<img src=\"/img/math_img_"+ com +".jpg\">")

if(gameNum === com) {
  document.write("<img src=\"/img/game_1.jpg\">");
} else {
  document.write("<img src=\"/img/game_2.jpg\">");
}