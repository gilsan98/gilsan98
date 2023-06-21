// let book = {
//   author: "youhongjoon",
//   category: "culture",
//   page: 416,
//   price: 19800
// }

// let car = {
//   color: "black",
//   price: 5000000,
//   info: function() {
//     console.log("car 색상: " + car.color);
//     console.log("car 가격: " + car.price);

//   }
// }

//객체 => 내장객체!
//대표적인 js내장객체 => 내장객체, 수학객체

// let today = new Date();
// console.log(today);

// let nowMonth = today.getMonth() + 1;
// console.log(nowMonth);

// let nowDate = today.getDate();
// console.log(nowDate);

// let nowDay = today.getDay();
// console.log(nowDay);

// let open = new Date("2023/3/13");
// console.log(open);

// let theMonth = open.getMonth() + 1;
// let theDate = open.getDate();
// let theDay = open.getDay();

// document.write("<h1> 개업일 날짜 정보 </h1>");
// document.write("개업월:" + theMonth, "<br />");
// document.write("개업월:" + theDate, "<br />");


//자바스크립트에서의 시간개념
//1밀리초 = 1/1000초
//1초     = 1000밀리초
//1분     =60,000 밀리초
//1시간   =3,600,000 밀리초

// let today = new Date();
// let nowYear = today.getFullYear();
// console.log(nowYear);

// let theDate = new Date(nowYear, 11, 31);
// let diffDate = theDate.getTime() - today.getTime();

// let result = Math.ceil(diffDate / (24 * 60 * 60 * 1000));
//let result = Math.floor(diffDate / (24 * 60 * 60 * 1000));
//let result = Math.round(diffDate / (24 * 60 * 60 * 1000));
//올림, 내림, 반올림 순서
// console.log("연말 D-day: " + result + "일 남았습니다.");

//사용자 요구분석
//1.D-day 기준으로 100일/ 200일/ 1년/ 500일
let now = new Date();
let firstDay = new Date("2023-06-14");
let toNow = now.getTime(); //오늘 날짜를 밀리초로 바꾼다.
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime/(24*60*60*1000))
console.log(passedDay);
document.querySelector("#accent").innerText = passedDay + "일";
// 다 쓴 후 defer
const test1 = document.querySelector("#accent");
console.log(test1);

//D-100
// let future = toFirst + 100*(24*60*60*1000);
// let someDay = new Date(future);
// let year = someDay.getFullYear();
// let month = someDay.getMonth();
// let date = someDay.getDate();
// document.querySelector("#date100").innerText = year + "년" + month + "월" + date + "일";

//D-Day Counter

function calcDate(days) {
  let future = toFirst + days*(24*60*60*1000);
  let someDay = new Date(future);
  let year = someDay.getFullYear();
  let month = someDay.getMonth();
  let date = someDay.getDate();
  document.querySelector("#date"+days).innerText = year + "년 " + month + "월 " + date + "일";
}

calcDate(100)
calcDate(200)
calcDate(365)
calcDate(500)