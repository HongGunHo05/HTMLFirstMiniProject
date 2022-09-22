$(function() {

    //네비게이션 (hover시 해당 메뉴만)
    $("nav > ul.mainMenu > li").hover(function() {
        $(this).find("ul.subMenu").stop().fadeIn();
    }, function() {
        $(this).find("ul.subMenu").stop().fadeOut();
    });



  //이미지슬라이드 (페이드)
  $('.imgSlide a:gt(0)').hide(); //2,3번째 이미지 숨기기

  setInterval(function(){
    $('.imgSlide a:first-child').fadeOut() //1번째 이미지 fadeOut
    .next('a').fadeIn() //2번째 이미지 fadeIn
    .end().appendTo('.imgSlide');
  }, 3000);



  //탭메뉴
  $(".shopping").hide();
  $("#tab1").css("text-decoration","underline")

  $("#tab1").click(function() {
    $(".dining").show();
    $(".shopping").hide();

    $("#tab1").css("text-decoration","underline")
    $("#tab2").css("text-decoration","none")
  })

  $("#tab2").click(function() {
    $(".dining").hide();
    $(".shopping").show();

    $("#tab2").css("text-decoration","underline")
    $("#tab1").css("text-decoration","none")
  })

});
