$(document).ready(function(){
  $('.menu-icon').click(function(event){
    event.preventDefault();
    $('.menu-toggle').toggleClass('active');
  });
});