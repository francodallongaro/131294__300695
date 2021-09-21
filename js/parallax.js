let fran_photo = document.getElementById("who-i-am__img");
let who_i_am__p = document.getElementById("who-i-am__p");
let my_values__title = document.getElementById("my_values__title");

let vh = window.innerHeight;

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  fran_photo.style.bottom = value * 0.5 + "px";
  who_i_am__p.style.top = value * 0.3 + 70 + "px";

  my_values__title.style.top = (value + vh) * 0.1 + "px";
});
