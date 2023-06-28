// ---디바이스 크기 및 해상도 확인---

// let info = navigator.userAgent.toLowerCase();
// let osImg = null;

// if(info.indexOf('windows') >= 0) {
//   osImg = 'windows.png';
// } else if (info.indexOf('macintosh') >= 0) {
//   osImg = 'macintosh.png';
// } else if (info.indexOf('iphone') >= 0) {
//   osImg = 'iphone.png';
// } else if (info.indexOf('android') >= 0) {
//   osImg = 'android.png';
// }

// document.write(`<img src="img/${osImg}">`, '<br/>');
// let scr = screen;
// let sc_w = scr.width;
// let sc_h = scr.height;

// document.write("모니터 해상도 너비: " + sc_w + 'px', '<br/>')
// document.write("모니터 해상도 높이: " + sc_h + 'px', '<br/>')


//---DOM = Document Object Model---
//DOM 자주 사용하는 함수

//querySelector() : 특정 웹 요소에 접근할 때 사용
// const text = document.querySelector('h1');
// const img = document.querySelector('img');
// console.log(text);
// console.log(img);

//querySelectorAll() : 
// const user = document.querySelectorAll('.user');
// console.log(user);

//문서객체요소안에 있는 내용을 가져오거나 수정할 때 innerText, innerHTML
// const desc = document.querySelector('#desc').innerHTML;
// console.log(desc);

// const title = document.querySelector('#title');
// // console.log(title);
// title.onclick = () => (title.innerText = '프로필');

// const userName = document.querySelector('#desc .user1');
// // console.log(userName);
// userName.onclick = () => userName.innerHTML = `이름: <b>전지현</b>`;


// const title = document.querySelector('#title');

// title.onclick = () => {
//   title.style.backgroundColor = "black";
//   title.style.color = "white";
// }

//---특정 요소에 어떤 클래스 값이 적용되었는지를 확인하는 방벙---

// const title = document.querySelector('#title');
// title.onclick = () => {
//   if(!title.classList.contains("clicked")) {
//     title.classList.add("clicked")
//   } else {
//     title.classList.remove('clicked');
//   }
// };

// title.onclick = () => {
//   title.classList.toggle("clicked");
// }

// const btn = document.querySelector('button');

// btn.onclick = () => {
//   document.body.classList.toggle("dark");
//   if(btn.innerHTML=="다크모드변경") {
//     btn.innerHTML = '라이트모드변경';
//   } else if (btn.innerHTML == "라이트모드변경") {
//     btn.innerHTML = '다크모드변경';
//   }
// }

// const viewBtn = document.querySelector('#view');
// const detail = document.querySelector('#detail');

// viewBtn.onclick = () => {
//   detail.classList.toggle('hidden');
// }

//입력값이 남아있는 value
//let odern = document.querySelector('#order-name').value;


const submitBtn = document.querySelector('button');

const displaySelect = () => {
  let custom = document.querySelector('#order-name').value;
  let item = document.querySelector('#product').value;
  alert(`${custom}님의 ${item} 주문 감사합니다.`);
};

submitBtn.onclick = displaySelect;