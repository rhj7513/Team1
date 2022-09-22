function ss(global, $) {

    var $menu     = $('.floating-menu nav.m'),
        $contents = $('.scroll'),
        $doc      = $('html, body');
    $(function () {
        // 해당 섹션으로 스크롤 이동
        $menu.on('click','a', function(e){
            var $target = $(this).parent(),
                idx     = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;
            $doc.stop()
                    .animate({
                        scrollTop :offsetTop
                    }, 800);
            return false;
        });
    });

    // menu class 추가
    $(window).scroll(function(){
        var scltop = $(window).scrollTop();
        $.each($contents, function(idx, item){
            var $target   = $contents.eq(idx),
                i         = $target.index(),
                targetTop = $target.offset().top;

            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
            if (!(200 <= scltop)) {
                $menu.removeClass('on');
            }
        })

    });

    // Go to the TOP
    var btnTop = $('.btn-top');
    btnTop.on('click','a', function(e){
        e.preventDefault();
        $doc.stop()
                .animate({
                    scrollTop : 0
                },800)
    });

}(window, window.jQuery);
// ss();
console.log(ss);

// https://webclub.tistory.com/304


// 글씨 촤라랅 
// 참고 사이트: https://gahyun-web-diary.tistory.com/2

$(window).ready(function() {
    var typingBool = false;
    var typingIdx = 0;
    var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다
    typingTxt = typingTxt.split(""); // 한글자씩 자른다.
    if (typingBool == false) {
      // 타이핑이 진행되지 않았다면
      typingBool = true;
  
      var tyInt = setInterval(typing, 100); // 반복동작
    }
  
    function typing() {
      if (typingIdx < typingTxt.length) {
        // 타이핑될 텍스트 길이만큼 반복
        $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
        typingIdx++;
      } else {
        clearInterval(tyInt); //끝나면 반복종료
      }
    }
  });


  $(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
  


// 특정 부분에 가면 이벤트 발생
// var isVisible = false;
// $(window).on('scroll',function(e){

//     if(checkVisible($('.dongboxs'))&&!isVisible){
//         $('html,body').stop().animate({
//             scrollTop:section1Top_Height
//         },800);        
//         directTextAniFunction();
        
//         $('#section-02').css('display','none')
//         introAniFunction(this);

//         isVisible=true;
//     }
 
// });

// function checkVisible(elm,eval){
//     eval=eval||"object visible";
//     var viewportHeight=$(window).height(),
//     scrolltop=$(window).scrollTop(),
//     y=$(elm).offset().top,
//     elementHeight=$(elm).height();


//     if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
//     if (eval == "above") return ((y < (viewportHeight + scrolltop)));
// }

// jQuery('.dongbox').one('inview', function (event, visible) {
//     if (visible == true) {
//         let options = {
//             startAngle: -1.55,
//             size: 150,
//             value: 0.85,
//             fill: {gradient: ['#a445b2', '#fa4299']}
//           }
//           $(".circle .bar").circleProgress(options).on('circle-animation-progress',
//           function(event, progress, stepValue){
//             $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
//           });
//           $(".js .bar").circleProgress({
//             value: 0.70
//           });
//           $(".react .bar").circleProgress({
//             value: 0.60
//           });
//     }
// });
// http://daplus.net/javascript-%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B0%80-%ED%8A%B9%EC%A0%95-%EC%9A%94%EC%86%8C%EB%A1%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%ED%95%A0-%EB%95%8C-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%ED%8A%B8%EB%A6%AC%EA%B1%B0/


// skill동그라미 누르면 밑에 설명 보이게 해주고 없어지게 하기
$("[class^=text]").hide();

$("#button").on("click", function(){
    // 버튼 클릭시 a태그 때문에 새로고침되는 문제 막음
    event.preventDefault()
    //모든 텍스트 숨기기
    $("[class^=text]").hide();
    //클릭한 버튼 인덱스번호와 똑같은 인덱스번호를 가진 text를 반환한다.
    $("[class^=text]").eq($(this).index()).show();
})
  
  
