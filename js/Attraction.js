$(function () {
    //아틀란티스 이미지슬라이드 (페이드)
    $(".imgSlide1 a:gt(0)").hide(); //2,3번째 이미지 숨기기

    setInterval(function () {
        $(".imgSlide1 a:first-child")
            .fadeOut() //1번째 이미지 fadeOut
            .next("a")
            .fadeIn() //2번째 이미지 fadeIn
            .end()
            .appendTo(".imgSlide1");
    }, 3000);

    //자이로스윙 이미지슬라이드 (페이드)
    $(".imgSlide2 a:gt(0)").hide(); //2,3번째 이미지 숨기기

    setInterval(function () {
        $(".imgSlide2 a:first-child")
            .fadeOut() //1번째 이미지 fadeOut
            .next("a")
            .fadeIn() //2번째 이미지 fadeIn
            .end()
            .appendTo(".imgSlide2");
    }, 3000);

    //혜성특급 이미지슬라이드 (페이드)
    $(".imgSlide3 a:gt(0)").hide(); //2,3번째 이미지 숨기기

    setInterval(function () {
        $(".imgSlide3 a:first-child")
            .fadeOut() //1번째 이미지 fadeOut
            .next("a")
            .fadeIn() //2번째 이미지 fadeIn
            .end()
            .appendTo(".imgSlide3");
    }, 3000);

    //배너 이미지슬라이드 (페이드)
    $(".ad a:gt(0)").hide(); //2,3번째 이미지 숨기기

    setInterval(function () {
        $(".ad a:first-child")
            .fadeOut() //1번째 이미지 fadeOut
            .next("a")
            .fadeIn() //2번째 이미지 fadeIn
            .end()
            .appendTo(".ad");
    }, 3000);
});
