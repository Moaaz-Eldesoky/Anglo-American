$(function() {
  "use strict";
$(".navbar .fa-search").click(function(){
  $(".navbar form").toggle(300);
});
// $(window).on("scroll",function(){
//   var sc=$(window).scrollTop();
//   if(sc>40){
//     $("nav").css({"background":"rgba(100,100,100,.8)"})
//     $("nav,.navbar-light .navbar-nav .nav-link").css({"color":"#FFF"})
//     $(".navbar form").css({"border-bottom":"#000"})

//   }
//   else {
//     $("nav").css({"background":"rgb(255,255,255)"})
//     $("nav,.navbar-light .navbar-nav .nav-link").css({"color":"#000"})
//     $(".navbar form").css({"border-bottom":"#FFF"})
//   }
// });
  });
$(document).ready(function(){
  $(".carousel").carousel({interval:2000});
})
$('.owl-carousel').owlCarousel({
  stagePadding: 10,
  loop:true,
  autoplay: true,
  margin:30,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  },
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
});

// var orgContent = $('.excerpt').html();
//     var txtContent = $('.excerpt').text().substr(0, 450) + '...<br> <a id="morelink">continue reading</a>';
//     $('.excerpt').html(txtContent);
//     $("body").on("click", '#morelink', function(){
//         $('.excerpt').html(orgContent);
//         $('<br><a id="lesslink"> less</a>').appendTo('.excerpt');
//     });
//     $("body").on("click", '#lesslink', function(){
//         $('.excerpt').html(txtContent);
//     });                                                   load more at the same page


var orgContent = $('.excerpt').html();
    var txtContent = $('.excerpt').text().substr(0, 450) + '...<br> <a id="morelink">continue reading</a>';
    $('.excerpt').html(txtContent);
    $("body").on("click", '#morelink', function(){
        $('.excerpt').html(orgContent);
        $('<br><a id="lesslink"> less</a>').appendTo('.excerpt');
    });
    $("body").on("click", '#lesslink', function(){
        $('.excerpt').html(txtContent);
    });



function printFunction() {
  window.print();
};


new WOW().init();