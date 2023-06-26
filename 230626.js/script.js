const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

//익명함수
let clock = () => {
  const now = new Date();
  console.log(now)

  hour.innerText = now.getHours();
  min.innerText = now.getMinutes();
  sec.innerText = now.getSeconds();
}

setInterval(clock, 1000);