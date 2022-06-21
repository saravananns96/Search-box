"use strict";

const search = document.querySelector(".search");
const button = document.querySelector(".btn");
console.log("msg");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
