// questions content
const question = document.querySelectorAll(".question_line");
const result = document.querySelectorAll(".question_box > p");

// Email validation
const contact = document.querySelector(".footer_contact_button");
const invalid = document.querySelector(".invalid_email");
const input = document.querySelector("input");

//hamburger
const hamburger = document.getElementById("hamburger");
const header = document.getElementById("header_right");

//features
const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));

    tab.classList.add("active");

    contents.forEach((c) => c.classList.remove("active"));
    contents[index].classList.add("active");
  });
});
tabs[0].click();

// //arrow rotation
// const arrow = document.getElementById("question_arrow");

// arrow.forEach((e) => {
//   e.addEventListener("click", () => {
//     e.forEach((e) => e.classList.remove("rotate"));

//     e.classList.add("rotate");
//   });
// });
// questions content
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    result[i].classList.toggle("hide");
  });
}

// email validation check alert
function Validation(mail) {
  let characters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return mail.match(characters) ? true : false;
}

contact.addEventListener("click", function () {
  if (!Validation(input.value)) {
    invalid.classList.remove("hide");
  } else {
    invalid.classList.add("hide");
  }
});

// hamburger

hamburger.addEventListener("click", () => {
  header.classList.toggle("show");
});
