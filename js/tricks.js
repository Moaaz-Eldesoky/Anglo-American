$('document').ready(function(){
  $('.start').click(function(){

    // send notification

    $('.start').hide();
    $('.back .greenDot span').addClass("scrollAnimation");
    $('.back .progress').addClass("started");
    $('.mainContent .threeDotes .biblineMoved').addClass("started");
    var MyintervalCounter = setInterval(checkProgressWidth , 100),
    counter = 0,
    countMin = setInterval(function(){counter += 1;$('.progress span').html(counter);} , 1000);
    function checkProgressWidth(){
      if ($(".back .progress").width() >= $(".back").width() / 3 - 33 && $(".back .progress").width() < ($(".back").width() / 3 - 33) * 2) {
        $('.mainContent .threeDotes .back .progress').css("background-color","#ffd800");
        $('.mainContent .threeDotes .biblineMoved').css("color","#ffd800");
        $('.mainContent .threeDotes .back .dot.greenDot').css("transform","translateY(130px)");
        $('.mainContent .threeDotes .back .dot.greenDot').css("opacity","0");
        $('.back .greenDot~p').css("transform","translateY(130px)");
        $('.back .greenDot~p').css("opacity","0");
        $('.back .yellowDot span').addClass("scrollAnimation");

        // send notification
      }
      else if ($(".back .progress").width() >= (($(".back").width() / 3) * 2) && $(".back .progress").width() + 10 < $(".back").width()) {
        $('.mainContent .threeDotes .back .progress').css("background-color","#ff4800");
        $('.mainContent .threeDotes .biblineMoved').css("color","#ff4800");
        $('.mainContent .threeDotes .back .dot.yellowDot').css("transform","translateY(130px)");
        $('.mainContent .threeDotes .back .dot.yellowDot').css("opacity","0");
        $('.back .yellowDot~p').css("transform","translateY(130px)");
        $('.back .yellowDot~p').css("opacity","0");
        $('.back .redDot span').addClass("scrollAnimation");

        // send notification
      }
      else if($(".back .progress").width() >= $(".back").width()) {
        $('.mainContent .threeDotes .back .dot.redDot').css("transform","translateY(130px)");
        $('.mainContent .threeDotes .back .dot.redDot').css("opacity","0");
        $('.back .redDot~p').css("transform","translateY(130px)");
        $('.back .redDot~p').css("opacity","0");
        $('.mainContent .notAllowedMessage').css("margin-bottom","-5px");
        $('.mainContent .notAllowedMessage').css("opacity","1");
        clearInterval(MyintervalCounter);
        clearInterval(countMin);

        // send notification
      }
    }
  });


  $('.leftNav .arrowOpen').click(function(){
    $('.topNav .brand').css("margin-left","-50%");
    $('.topNav .brand').addClass("rotated");
    $('.leftNav .leftNavBrand').addClass("rotated");
    $('.mainContent').css({
      'padding' : '80px 0',
      'width' : '84%',
      'padding-left' : '250px'});

    $('.leftNav').css("margin-left","-300px");
    $('.leftNav.opened').css("margin-left","0");
    $('.leftNav.opened').css("opacity","1");
  });


 $('.leftNav.opened .arrowOpen').click(function(){
   $('.topNav .brand').css("margin-left","0");
   $('.leftNav .leftNavBrand').removeClass("rotated");
   $('.topNav .brand').removeClass("rotated");

   $('.mainContent').css({
     'padding' : '80px 15px',
     'width' : '80%'});
   $('.leftNav').css("margin-left","-300px");
   $('.leftNav.closed').css("margin-left","0");
   $('.leftNav.closed').css("opacity","1");
 });

 $( window ).scroll(function() {
   if($(this).scrollTop() > 200){
     $(".studentAffairs").slideUp();
     $('.topNav .brand').css("margin-top","18px");
     $('.leftNav').css("margin-top","-75px");
     $('.leftNav .leftNavBrand').css("margin-top","-30px");
   }
   else {
     $(".studentAffairs").slideDown();
     $('.topNav .brand').css("margin-top","-35px");
     $('.leftNav').css("margin-top","-50px");
     $('.leftNav .leftNavBrand').css("margin-top","14px");

   }
  });

})
