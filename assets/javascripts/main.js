$(document).ready(function(){
  var topOfContent = $(".page-content").offset().top;
  var windowHeight = $(window).height();
  displayImages(windowHeight);
  $('.menu-icon').click(function(event){
    event.preventDefault();
    $('.trigger').toggleClass('active');
  });
});