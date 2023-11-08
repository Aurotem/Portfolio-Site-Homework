//! Scrolls
const scrollUp = document.getElementById("scroll-up");
const scrollDown = document.getElementById("scroll-down");

//! Stars
const littleStars = document.getElementById("stars");
const middleStars = document.getElementById("stars2");
const bigStars = document.getElementById("stars3");

//*Window Properties
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;
  //* Fastest Stars
  littleStars.style.top = -mouseY * 3 + "px";
  littleStars.style.left = -mouseX * 3 + "px";
  //* Middle-speed Stars
  middleStars.style.top = -mouseY * 2 + "px";
  middleStars.style.left = -mouseX * 2 + "px";
  //* Slowest Stars
  bigStars.style.top = -mouseY + "px";
  bigStars.style.left = -mouseX + "px";
});
//! Scroll Button Function
function addDisplayNone(x, y) {
  x.classList.toggle("display-none");
  y.classList.toggle("display-none");
}
