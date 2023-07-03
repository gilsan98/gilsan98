// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}입니다.`);
// }

// function multiple(a, b) {
//   return a * b;
// }

// console.log(`두 수를 곱한 결과는 ${multiple(10, 20)}입니다.`);

//NaN=not a number

// function multiple(a, b = 5, c = 10) {
//   return a * b + c;
// }

// let calcSum =  (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }

// calcSum(10);

// let hi = (user) => console.log(`${user}님, 안녕하세요`);


// let multiple = (a, b) => a * b;

// console.log(`두 수를 곱한 결과는 ${multiple(10, 20)}입니다`);

// const btn = document.querySelector('button');

// let display = () => {
//   alert("클릭했습니다.");
// };

// btn.addEventListener('click', display);

// let showData = (name, age) => {
//   alert(`안녕하세요! ${name}님, ${age}살 이군요`);
// };

// let getData = (callback) => {
//   let userName = prompt(`이름을 입력하세요`);
//   let userAge = prompt('나이를 입력하세요');
//   callback(userName, userAge);
// };


// fruits = ["apple", "banana", "grape"];

// console.log(...fruits);

// let addNum = (a, b) => {
//   return a + b;
// };

// let addNum = (...numbers) => {
//   let sum = 0;

//   for(let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };


// let greeting = () => {
//   console.log(`안녕하세요~`);
// };

// // setInterval(greeting, 1000);

// // setInterval(() => {
// //   console.log(`안녕하세요~`);
// // }, 1000);

// let counter = 0;

// let timer = setInterval(() => {
//   console.log("안녕하세요!")
//   counter++;

//   if(counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// setTimeout(() => {
//   console.log(`이제 안녕!`);
// }, 3000);

// 자바스크립트 함수 = 프로그래밍 언어 대표적인 1급 시민 <br />
// 1. 변수에 값을 할당할 수 있어야 한다.<br />
// 2. 다른 함수의 인자값으로 사용할 수 있어야 한다.<br />
// 3. 다른 함수에서 반환값으로 반환할 수 있어야 한다.<br />

// let number = parseInt(prompt(`숫자를 입력하세요`));

// let isPositive = (n) => {
//   if(n > 0) {
//     alert(`${n}은 양수 입니다.`);
//   } else if (n < 0) {
//     alert(`${n}은 음수입니다.`);
//   } else {
//     alert(`${n}은 0입니다.`);
//   }
// };

// if (!isNaN(number)) {
//   isPositive(number);
// }

// let f = parseInt(prompt('숫자를 입력해주세요'));
// let s = parseInt(prompt('또 다른 숫자를 입력해주세요'));

// let getGCD = (f, s) => {
//   let max = f > s ? f : s;
//   let GCD = 0;
//   for (let i = 1; i <= max; i++) {
//     if(f % i === 0 && s % i === 0) {
//       GCD = i;
//     }
//   }
//   return GCD;
// };


// console.log(`${f}와 ${s}의 최대공약수는 ${getGCD(f, s)}`);


let chColor = () => {
  let arrColor = ['#ff0', '#6c0', '#fcf', '#cf0', '#39f'];
  let arrNum = Math.floor(Math.random() * arrColor.length);
  let bodyTag = document.querySelector("#theBody");
  bodyTag.style.backgroundColor = arrColor[arrNum];
};