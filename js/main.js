/*----------------------------------------
  MENU SIDE
----------------------------------------*/

$("#menu-close").click(function(e) {
  e.stopPropagation();
  $("#sidebar-wrapper").toggleClass("active");
});
$("#menu-toggle").click(function(e) {
  e.stopPropagation();
  $("#sidebar-wrapper").toggleClass("active");
});
$(document).click(function(){
  if($("#sidebar-wrapper").hasClass('active')){
    $("#sidebar-wrapper").removeClass("active");
  }
});

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
    $('.social-link').addClass("hidden");
  } else {
    $('.social-link').removeClass("hidden");
  }
});
