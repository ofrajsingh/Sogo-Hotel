const mainMenu = document.querySelectorAll(".mainMenu");
const closeMenu = document.querySelectorAll(".closeMenu");
const openMenu = document.querySelectorAll(".openMenu");
// console.log(document.querySelectorAll(".mainMenu"));

openMenu[0].addEventListener("click", show);
openMenu[1].addEventListener("click", show);
closeMenu[0].addEventListener("click", close);
closeMenu[1].addEventListener("click", close);

function show() {
  mainMenu[1].style.display = "flex";
  mainMenu[1].style.top = "0";
  console.log('clicked openmenu')
}
function close() {
  // mainMenu.style.top = "-100%";
  mainMenu[1].style.display = "none";

}
