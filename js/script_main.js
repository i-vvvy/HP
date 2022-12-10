//1.풀페이지 스크롤
$(function () {
  $('#fullpage').fullpage({
    fingersonly: true,
    anchors: [
      'firstPage',
      'secondPage',
      'thirdPage',
      'fourthPage',
      'fifthPage',
      'sixthPage',
      'seventhPage',
    ],
    menu: '.rightNav',
    afterLoad: function (anchorLink, index) {
      if (index == 2) {
        $('.count').counterUp({ delay: 10, time: 550 });
      }
      if (index == 3) {
        $('.count2').counterUp({ delay: 10, time: 550 });
      }
    },
  });
});

//2.비디오 Controls 숨기기
let vids = $('video');
$.each(vids, function () {
  this.controls = false;
});
//Loop though all Video tags and set Controls as false

$('video').click(function () {
  //console.log(this);
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});

//3.section3 이미지 슬라이드
$(function () {
  $('.visual').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 3000,
    customPaging: function (slider, i) {
      let tit = $(slider.$slides[i]).find('.dot').html();
      return '<div class="pager-tit" class= "+ i +">' + tit + '</div>';
    },
  });
});

//4.section3 이미지 슬라이드 - 넓이, 높이

$(function () {
  let winW = $(window).width();
  let winH = $(window).height();
  list = $('.visual .list');
  list.css({ width: winW + 'px', height: winH + 'px' });
});

//5.section5 - products 슬라이드

$(function () {
  $('.product').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // dots: true,
  });
});
