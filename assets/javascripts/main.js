$(document).ready(function(){
  $('.menu-icon').click(function(event){
    event.preventDefault();
    $('.page-header').toggleClass('active-mobile-menu');
  });
});