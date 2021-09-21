let fran_photo = document.getElementById("who-i-am_img");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  fran_photo.style.bottom = value * 0.5 + "px";
});
