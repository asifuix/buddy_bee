$(document).ready(function(){

  // // sticky menu
  window.addEventListener("scroll", function(){
    var nav = document.querySelector(".nav-menu");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });

  // back to top
    var btn = $('#back-top');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
});