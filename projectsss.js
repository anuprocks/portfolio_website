

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");


  
  // Close hamburger menu when a link is clicked
  burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Select nav links
const navLink = document.querySelectorAll(".nav-link");


