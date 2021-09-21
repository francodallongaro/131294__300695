let fran_photo = document.getElementById("who-i-am__img");
let who_i_am__p = document.getElementById("who-i-am__p");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  fran_photo.style.bottom = value * 0.5 + "px";
  who_i_am__p.style.top = value * 0.3 + 70 + "px";
  if (value == 0) {
    who_i_am__p.style.top = 70 + "px";
  }
});
