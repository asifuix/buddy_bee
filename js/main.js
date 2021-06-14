$(document).ready(function(){

  // sticky menu
  window.addEventListener("scroll", function(){
    var nav = document.querySelector(".nav-menu");
    nav.classList.toggle("sticky", window.scrollY > 0);
  })

  // // toggle auto close
  // $('.navbar-nav>li>a').on('click', function(){
  //   $('.navbar-collapse').collapse('hide');
  // });

  // wow js
  new WOW().init();

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

  // owl carousel
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:false,
      autoplayTimeout:4000,
      autoplayHoverPause:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

  // owl carousel (partner logo)
  var owl = $('.partner-logo');
  owl.owlCarousel({
      items:6,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:false,
      responsive:{
          0:{
              items:3
          },
          600:{
              items:4
          },
          1000:{
              items:6
          }
      }
  });

  // calender js
  $("#calendar").MEC();

  // countdown js
  $('#countdown').countdown('2040/01/01', function(event) {
    $(this).html(event.strftime('<div class="single-count"><h1>%d</h1><span>Days</span></div> <div class="single-count"><h1>%H</h1><span>Hours</span></div> <div class="single-count"><h1>%M</h1><span>Minute</span></div> <div class="single-count"><h1>%S</h1><span>Second</span></div>'));
  });

  // process circle js
  $('.circlechart').circlechart();
  
});