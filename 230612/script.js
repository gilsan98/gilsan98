function sideMenu() {
  const side_menu = document.querySelector(".trigger");
  const sns = document.querySelector(".sns");
  const gnb = document.querySelector(".gnb");

  side_menu.classList.toggle("active");
  sns.classList.toggle("on");
  gnb.classList.toggle("on")
}