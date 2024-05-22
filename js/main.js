const sidebar = document.querySelector(".sidebar");
const hamber = document.querySelector(".hamburger-icon");
const mainContent = document.querySelector(".main-content");
const menuToggle = document.querySelector("#menu-toggle");

hamber.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

menuToggle.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

////

const options = document.querySelectorAll(".sidebar-menu a.option");

options.forEach((option) => {
  option.addEventListener("click", (event) => {
    event.preventDefault(); // جلوگیری از رفتن به لینک
    options.forEach((opt) => {
      opt.classList.remove("active");
    });
    option.classList.add("active");
  });
});
