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
