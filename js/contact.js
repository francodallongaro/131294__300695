$("#contact-btn").click(function () {
  $("#contact-page").show();
  $('.meta').remove();
  $('head').append('<meta name="theme-color" class="meta" content="#d5e5e4"></meta>');
});

$("#contact-close").click(function () {
  $("#contact-page").hide();
  $('.meta').remove();
  $('head').append('<meta name="theme-color" class="meta" content="#f8f8f8"></meta>');
});
