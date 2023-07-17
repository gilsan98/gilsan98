const bttn = document.querySelector('#bttn');
const nav = document.querySelector("#nav");

bttn.addEventListener('click', () => {
  nav.classList.toggle("active");
  bttn.classList.toggle("active");
});