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
    ],
    afterLoad: function (anchorLink, index) {
      if (index == 4) {
        $('.count').counterUp({ delay: 10, time: 550 });
      }
    },
  });
});

//2.GNB
$(function () {
  setGnb();
  function setGnb() {
    $('.innerHeader .gnb > li > a ').on('mouseenter focus', function () {
      $('.innerHeader ').addClass('on');
      $('.innerHeader .gnb > li > .inner').addClass('on');
    });
    $('header').on('mouseleave', function () {
      $('.innerHeader ').removeClass('on');
      $('.innerHeader .gnb > li > .inner').removeClass('on');
    });
  }
});

//3.section1: 비디오 Controls 숨기기
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

//4.section3: 이미지 슬라이드
$(function () {
  $('.visual').slick({
    arrows: false,
    fade: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 3000,
    dot: false,
  });
});

//5.section5: products 슬라이드

$(function () {
  $('.product').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  });
});

//6.section: width, height 설정
$(function () {
  var winW = $(window).width();
  var winH = $(window).height();
  list = $('#section1 .container');
  list.css({ width: winW + 'px', height: winH + 'px' });
});

$(function () {
  var winW = $(window).width();
  var winH = $(window).height();
  list = $('#section3 .visual .list');
  list.css({ width: winW + 'px', height: winH + 'px' });
});

$(function () {
  var winW = $(window).width();
  var winH = $(window).height();
  list = $('#section5 .container');
  list.css({ width: winW + 'px', height: winH + 'px' });
});

$(function () {
  var winW = $(window).width();
  var winH = $(window).height();
  list = $('#section6 .container');
  list.css({ width: winW + 'px', height: winH + 'px' });
});
