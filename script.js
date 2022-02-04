const hamburger = document.getElementById("hamburger");
const right = document.getElementById("header_right");

hamburger.addEventListener("click", () => {
  right.classList.toggle("show");
  console.log("you clicked me");
});
