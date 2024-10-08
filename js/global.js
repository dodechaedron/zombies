


$('.loading .play').click(function(){
  $('body').addClass('adbg')
  togg = 1;
  $('.main .audiobox .controls .pause').removeClass('current')
  $(".loading").fadeOut(500,function(){
    $(".audio").get(0).play()
  })
  var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
  });
  wow.init();
})












$(document).ready(function(){
  $(window).load(function () {
          $(".mobile-inner-header-icon").click(function(){
            $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
            $(".mobile-inner-nav").slideToggle(250);
          });
          $(".mobile-inner-nav li").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });
          $(".mobile-inner-nav li").click(function(){
            $(this).find('dl').slideToggle(200)
          })
        });

})

$(document).ready(function(){

$('.section4>*>*').each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });

$('.section1 .wrap>*').each(function( index ) {
            $( this ).css({'animation-delay': (index/4)+'s'});
          });
$('.section4 .wrap .item img').each(function( index ) {
            $( this ).css({'animation-delay': (index/4)+'s'});
          });
$('.section7 .wrap .list .item').each(function( index ) {
            $( this ).css({'animation-delay': (index/4)+'s'});
          });
$('.footer>*').each(function( index ) {
            $( this ).css({'animation-delay': (index/4)+'s'});
          });





$('.section4 .wrap .item,.footer>*').addClass('wow bounceInUp')
$('.section2 .wrap .title,.section5 .content .title').addClass('wow vanishIn')
$('.section1 .wrap>*').addClass('wow puffIn')
$('.section1 .anis1').addClass('wow fadeInRight')
$('.section1 .anis2,.section5 .content .center .tis').addClass('wow bounceInUp')
$('.section1 .anis2 img').addClass('scrollAni3')
$('.section1 .anis1 .ani1').addClass('scrollAni4')
$('.section2 .anis1').addClass('wow tinLeftIn')
$('.section2 .anis1 .ani1').addClass('scrollAni5')
$('.section2 .wrap .videoMain .play img').addClass('heartbeatAni')
$('.section2 .wrap .videoMain video').addClass('wow zoomIn')
$('.section2 .wrap .videoMain .hj').addClass('wow spaceInRight')
$('.section2 .wrap .videoMain .hj img').addClass('scrollAni6')
$('.section3 .wrap .content .title').addClass('wow vanishIn')
$('.section3 .wrap .content .dec').addClass('wow tinRightIn')
$('.section3 .wrap .content .more').addClass('sclani2')
$('.section3 .anis1 img').addClass('bounceAni')
$('.section3 .anis1').addClass('wow zoomIn')
$('.section4 .wrap .item img').addClass(' tdAni')
$('.section5 .content .zs i').addClass(' wow width0')
$('.section5 .content .dec,.section6 .wrap .formtable').addClass('wow bounceInDown')
$('.section5 .content .center .anism img.anism1').addClass('scrollAni6')
$('.section5 .content .center .anism img.anism2').addClass('scrollAni4')
$('.section6 .wrap .dec').addClass(' scrollAni6')
$('.section7 .wrap .title').addClass(' wow vanishIn')
$('.section7 .wrap .list .item').addClass('wow zoomIn')
$('.section7 .bg img').addClass('wow sclani2')
$('.section8 .wrap .list .item img').addClass('wow spaceInDown')
$('.section1 .bg img').addClass('scrollAni2')
$('.section1 .wrap .link a img').hover(function(){
  $(this).toggleClass('animated tadaAni')
})
$('.section2 .wrap .videoMain .play').click(function(){
  $(this).fadeOut(200)
  $('.section2 .wrap .videoMain video').get(0).play()
})
function height(){
  var sc = $(window).scrollTop();
  if (sc > 200) {
      $("body").addClass("current");
    } else {
      $("body").removeClass("current");
    }
}
height()
$(window).scroll(function () {
  height()
});

var list1left = new Swiper('.section3 .list1.left .swiper-container', {
    direction: 'vertical',
    pagination: '.section3 .list1.left .swiper-pagination',
    paginationClickable: '.section3 .list1.left .swiper-pagination',
    nextButton: '.section3 .list1.left .swiper-button-next',
    prevButton: '.section3 .list1.left .swiper-button-prev',
    autoplay: 1300,
    autoplayDisableOnInteraction: false,
    speed: 500,
    loop:true,
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
        640: {
            noSwiping: false,
            slidesPerView: 3,
            spaceBetween: 5,
            direction: 'horizontal',
        },
        768: {
            noSwiping: false,
            slidesPerView: 3,
            spaceBetween: 5,
            direction: 'horizontal',
        },
        1024: {
            noSwiping: false,
            slidesPerView: 3,
            spaceBetween: 5,
        },
    }
});


var list1right = new Swiper('.section3 .list1.right .swiper-container', {
    direction: 'vertical',
    pagination: '.section3 .list1.right .swiper-pagination',
    paginationClickable: '.section3 .list1.right .swiper-pagination',
    nextButton: '.section3 .list1.right .swiper-button-next',
    prevButton: '.section3 .list1.right .swiper-button-prev',
    autoplay: 1300,
    loop:true,
    autoplayDisableOnInteraction: false,
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
        640: {
            noSwiping: false,
            slidesPerView: 3,
            spaceBetween: 5,
            direction: 'horizontal',
        },
        768: {
            noSwiping: false,
            slidesPerView: 3,
            spaceBetween: 5,
            direction: 'horizontal',
        },
        1024: {
            noSwiping: false,
            slidesPerView: 3,
            spaceBetween: 5,
        },
    }
});


var list2 = new Swiper('.section3 .list2 .swiper-container', {
        pagination: '.section3 .list2 .swiper-pagination',
        paginationClickable: '.section3 .list2 .swiper-pagination',
        nextButton: '.section3 .list2 .swiper-button-next',
        prevButton: '.section3 .list2 .swiper-button-prev',
        autoplay:1300,
        loop:true,
        autoplayDisableOnInteraction: false,
        speed:500,
        slidesPerView: 3,
        spaceBetween: 0,
        breakpoints: {
            640: {
                noSwiping: false,
                slidesPerView: 3,
                spaceBetween: 5,
                direction: 'horizontal',
            },
            768: {
                noSwiping: false,
                slidesPerView: 3,
                spaceBetween: 5,
                direction: 'horizontal',
            },
            1024: {
                noSwiping: false,
                slidesPerView: 3,
                spaceBetween: 5,
            },
        }
});




});