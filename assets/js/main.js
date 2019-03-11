webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__general__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slick_carousel__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slick_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slick_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery_mmenu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery_mmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery_mmenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery_on_screen__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery_on_screen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery_on_screen__);






var _window = window,
    location = _window.location;


__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('load', function () {
  mobileCheck();
});
__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).resize(function () {
  mobileCheck();
});

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function ($) {
  // Custom styles
  mobileCheck();

  // Mobile Menu
  $('#menu').mmenu({
    extensions: ["position-right"]
  });

  // home slider
  $('.home-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        adaptiveHeight: true
      }
    }]
  });

  // News slider
  $('.news-slider').slick({
    infinite: true,
    arrows: false,
    fade: true,
    dots: true,
    adaptiveHeight: true,
    pauseOnHover: false
  });

  // Scroll
  $('.scroll').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $('header').height() + 14
        }, 1000);
        return false;
      }
    }
  });
});

function equalHeight(group) {
  // Equal height blocks
  var tallest = 0;
  group.height('auto').each(function () {
    var thisHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).height();
    if (thisHeight > tallest) {
      tallest = thisHeight;
    }
  });
  group.height(tallest);
}

function getScrollbarWidth() {
  var div = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div></div>');
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').append(div);
  var w1 = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('div', div).innerWidth();
  div.css('overflow-y', 'auto');
  var w2 = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('div', div).innerWidth();
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(div).remove();
  return w1 - w2;
}

function mobileCheck() {
  // equal height
  equalHeight(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.news .post h3'));

  // Active nav state animation
  setTimeout(function () {
    var $el;
    var leftPos;
    var newWidth;
    var $mainNav = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#nav > ul');

    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#magic-line');

    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#nav > ul > .active').length) {
      var currentPageWidth = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#nav > ul > .active > a').parent().width();
      var currentPageLeft = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#nav > ul > .active > a').parent().position().left;
    }

    $magicLine.width(currentPageWidth).css('left', currentPageLeft).data('origLeft', $magicLine.position().left).data('origWidth', $magicLine.width());

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#nav > ul > li').hover(function () {
      $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
      leftPos = $el.position().left;
      newWidth = $el.width();
      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    }, function () {
      $magicLine.stop().animate({
        left: $magicLine.data('origLeft'),
        width: $magicLine.data('origWidth')
      });
    });
  }, 0);

  // Animation
  // if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).width() > 767 - getScrollbarWidth()) {
    window.setTimeout(function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.home-slider').slick('slickPause');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.slide-thumb').addClass('animated fadeIn');
    }, 0);
    window.setTimeout(function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.homepage header').addClass('animated fadeInDown');
    }, 200);
    window.setTimeout(function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.slide-content .msg-box h2').addClass('animated slideInLeft');
    }, 800);
    window.setTimeout(function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.slide-content .msg-box h1').addClass('animated slideInLeft');
    }, 1500);
    window.setTimeout(function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.slide-content .msg-box .box').addClass('animated slideInLeft');
    }, 2200);
    window.setTimeout(function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.white-line').addClass('animated fadeIn line-active');
    }, 2600);
    window.setTimeout(function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.slider-hold .logos').addClass('animated fadeIn');
    }, 3600);
    window.setTimeout(function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.slider-hold .scroll').addClass('animated fadeIn');
    }, 3800);
    // Start slider once all elements are loaded
    window.setTimeout(function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.home-slider').slick('slickPlay');
    }, 4000);

    // Before slide transition, remove all animation elements on previous slide
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.home-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.slide-content .msg-box h2, .slide-content .msg-box h1, .slide-content .msg-box .box').removeClass('animated slideInLeft');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.white-line').removeClass('animated fadeIn line-active');
    });
    // After slide transition, animate boxes and plus sign
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.home-slider').on('afterChange', function (event, slick, currentSlide) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.slide-content .msg-box h2, .slide-content .msg-box h1, .slide-content .msg-box .box').addClass('animated slideInLeft');
      /* window.setTimeout(function () {
        $('.slide-content .msg-box h2').addClass('animated slideInLeft')
      }, 0)
      window.setTimeout(function () {
        $('.slide-content .msg-box h1').addClass('animated slideInLeft')
      }, 200)
      window.setTimeout(function () {
        $('.slide-content .msg-box .box').addClass('animated slideInLeft')
      }, 500) */
      window.setTimeout(function () {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.white-line').addClass('animated fadeIn line-active');
      }, 1000);
    });

    // Page animation
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.home-main > *, .homepage footer').each(function () {
      var cur = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
      if (cur.isOnScreen(0.15, 0.15)) {
        if (!cur.hasClass('animated')) {
          cur.addClass('animated fadeInUp');
        }
      }
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).scroll(function () {
        if (cur.isOnScreen(0.15, 0.15)) {
          if (!cur.hasClass('animated')) {
            cur.addClass('animated fadeInUp');
          }
        }
      });
    });
  // }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jquery__ = __webpack_require__(3);
// You can do global stuff in here
// for example the menus, footers, etc

// We're not using foundation but you can enable if you need
// import './foundation'

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


// Make jQuery global for other plugins to consume
window.$ = window.jQuery = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a;

/***/ })
],[1]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9nZW5lcmFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvZ2VuZXJhbC9qcXVlcnkuanMiXSwibmFtZXMiOlsid2luZG93IiwibG9jYXRpb24iLCIkIiwib24iLCJtb2JpbGVDaGVjayIsInJlc2l6ZSIsImRvY3VtZW50IiwicmVhZHkiLCJtbWVudSIsImV4dGVuc2lvbnMiLCJzbGljayIsImluZmluaXRlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwic3BlZWQiLCJmYWRlIiwiY3NzRWFzZSIsImRvdHMiLCJhcnJvd3MiLCJwYXVzZU9uSG92ZXIiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYWRhcHRpdmVIZWlnaHQiLCJjbGljayIsInBhdGhuYW1lIiwicmVwbGFjZSIsImhvc3RuYW1lIiwidGFyZ2V0IiwiaGFzaCIsImxlbmd0aCIsInNsaWNlIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImhlaWdodCIsImVxdWFsSGVpZ2h0IiwiZ3JvdXAiLCJ0YWxsZXN0IiwiZWFjaCIsInRoaXNIZWlnaHQiLCJnZXRTY3JvbGxiYXJXaWR0aCIsImRpdiIsImFwcGVuZCIsIncxIiwiaW5uZXJXaWR0aCIsImNzcyIsIncyIiwicmVtb3ZlIiwic2V0VGltZW91dCIsIiRlbCIsImxlZnRQb3MiLCJuZXdXaWR0aCIsIiRtYWluTmF2IiwiJG1hZ2ljTGluZSIsImN1cnJlbnRQYWdlV2lkdGgiLCJwYXJlbnQiLCJ3aWR0aCIsImN1cnJlbnRQYWdlTGVmdCIsInBvc2l0aW9uIiwibGVmdCIsImRhdGEiLCJob3ZlciIsInN0b3AiLCJhZGRDbGFzcyIsImV2ZW50IiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwicmVtb3ZlQ2xhc3MiLCJjdXIiLCJpc09uU2NyZWVuIiwiaGFzQ2xh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TUFBQSw4Q0FBQUEsQ0FBRSxzRkFBRixFQUEwRitELFFBQTFGLENBQW1HLHNCQUFuRztBQUNJOzs7Ozs7Ozs7QUFTSmpFLGFBQU9rRCxVQUFQLENBQWtCLFlBQVk7QUFDNUJoRCxRQUFBLDhDQUFBQSxDQUFFLGFBQUYsRUFBaUIrRCxRQUFqQixDQUEwQiw2QkFBMUI7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdELEtBZEQ7O0FBZ0JFO0FBQ0YvRCxJQUFBLDhDQUFBQSxDQUFFLGtDQUFGLEVBQXNDc0MsSUFBdEMsQ0FBMkMsWUFBWTtBQUNyRCxVQUFJOEIsTUFBTSw4Q0FBQXBFLENBQUUsSUFBRixDQUFWO0FBQ0EsVUFBSW9FLElBQUlDLFVBQUosQ0FBZSxJQUFmLEVBQXFCLElBQXJCLENBQUosRUFBZ0M7QUFDOUIsWUFBSSxDQUFDRCxJQUFJRSxRQUFKLENBQWEsVUFBYixDQUFMLEVBQStCO0FBQzdCRixjQUFJTCxRQUFKLENBQWEsbUJBQWI7QUFDRDtBQUNGO0FBQ0QvRCxNQUFBLDhDQUFBQSxDQUFFRixNQUFGLEVBQVV5RSxNQUFWLENBQWlCLFlBQVk7QUFDM0IsWUFBSUgsSUFBSUMsVUFBSixDQUFlLElBQWYsRUFBcUIsSUFBckIsQ0FBSixFQUFnQztBQUM5QixjQUFJLENBQUNELElBQUlFLFFBQUosQ0FBYSxVQUFiLENBQUwsRUFBK0I7QUFDN0JGLGdCQUFJTCxRQUFKLENBQWEsbUJBQWI7QUFDRDtBQUNGO0FBQ0YsT0FORDtBQU9ELEtBZEQ7QUFlRDtBQUNGLEM7Ozs7Ozs7QUM3TUQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCOzs7Ozs7Ozs7QUNKQTs7QUFFQTtBQUNBakUsT0FBT0UsQ0FBUCxHQUFXRixPQUFPMEUsTUFBUCxHQUFnQiw4Q0FBM0IsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL2dlbmVyYWwnXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJ1xuaW1wb3J0ICdqcXVlcnkubW1lbnUnXG5pbXBvcnQgJ2pxdWVyeS1vbi1zY3JlZW4nXG5cbmNvbnN0IHtsb2NhdGlvbn0gPSB3aW5kb3dcblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICBtb2JpbGVDaGVjaygpXG59KVxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gIG1vYmlsZUNoZWNrKClcbn0pXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gIC8vIEN1c3RvbSBzdHlsZXNcbiAgbW9iaWxlQ2hlY2soKVxuXG4gICAgLy8gTW9iaWxlIE1lbnVcbiAgJCgnI21lbnUnKS5tbWVudSh7XG4gICAgICBleHRlbnNpb25zOiBbXCJwb3NpdGlvbi1yaWdodFwiXVxuICB9KVxuXG4gICAgLy8gaG9tZSBzbGlkZXJcbiAgJCgnLmhvbWUtc2xpZGVyJykuc2xpY2soXG4gICAge1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDYwMDAsXG4gICAgICBzcGVlZDogODAwLFxuICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgZG90czogZmFsc2UsXG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KVxuXG4gICAgLy8gTmV3cyBzbGlkZXJcbiAgJCgnLm5ld3Mtc2xpZGVyJykuc2xpY2soe1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGFycm93czogZmFsc2UsXG4gICAgZmFkZTogdHJ1ZSxcbiAgICBkb3RzOiB0cnVlLFxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgIHBhdXNlT25Ib3ZlcjogZmFsc2VcbiAgfSlcblxuICAgIC8vIFNjcm9sbFxuICAkKCcuc2Nyb2xsJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaClcbiAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKVxuICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtICQoJ2hlYWRlcicpLmhlaWdodCgpICsgMTRcbiAgICAgICAgfSwgMTAwMClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9KVxufSlcblxuZnVuY3Rpb24gZXF1YWxIZWlnaHQgKGdyb3VwKSB7ICAgICAvLyBFcXVhbCBoZWlnaHQgYmxvY2tzXG4gIHZhciB0YWxsZXN0ID0gMFxuICBncm91cC5oZWlnaHQoJ2F1dG8nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhpc0hlaWdodCA9ICQodGhpcykuaGVpZ2h0KClcbiAgICBpZiAodGhpc0hlaWdodCA+IHRhbGxlc3QpIHtcbiAgICAgIHRhbGxlc3QgPSB0aGlzSGVpZ2h0XG4gICAgfVxuICB9KVxuICBncm91cC5oZWlnaHQodGFsbGVzdClcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGggKCkge1xuICB2YXIgZGl2ID0gJCgnPGRpdiBzdHlsZT1cIndpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjAwcHg7bGVmdDotMjAwcHg7XCI+PGRpdiBzdHlsZT1cImhlaWdodDoxMDBweDtcIj48L2Rpdj48L2Rpdj4nKVxuICAkKCdib2R5JykuYXBwZW5kKGRpdilcbiAgdmFyIHcxID0gJCgnZGl2JywgZGl2KS5pbm5lcldpZHRoKClcbiAgZGl2LmNzcygnb3ZlcmZsb3cteScsICdhdXRvJylcbiAgdmFyIHcyID0gJCgnZGl2JywgZGl2KS5pbm5lcldpZHRoKClcbiAgJChkaXYpLnJlbW92ZSgpXG4gIHJldHVybiAodzEgLSB3Milcbn1cblxuZnVuY3Rpb24gbW9iaWxlQ2hlY2sgKCkge1xuICAvLyBlcXVhbCBoZWlnaHRcbiAgZXF1YWxIZWlnaHQoJCgnLm5ld3MgLnBvc3QgaDMnKSlcblxuICAvLyBBY3RpdmUgbmF2IHN0YXRlIGFuaW1hdGlvblxuICBzZXRUaW1lb3V0KFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVsXG4gICAgICAgIHZhciBsZWZ0UG9zXG4gICAgICAgIHZhciBuZXdXaWR0aFxuICAgICAgICB2YXIgJG1haW5OYXYgPSAkKCcjbmF2ID4gdWwnKVxuXG4gICAgICAgICRtYWluTmF2LmFwcGVuZChcIjxsaSBpZD0nbWFnaWMtbGluZSc+PC9saT5cIilcbiAgICAgICAgdmFyICRtYWdpY0xpbmUgPSAkKCcjbWFnaWMtbGluZScpXG5cbiAgICAgICAgaWYgKCQoJyNuYXYgPiB1bCA+IC5hY3RpdmUnKS5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgY3VycmVudFBhZ2VXaWR0aCA9ICQoJyNuYXYgPiB1bCA+IC5hY3RpdmUgPiBhJykucGFyZW50KCkud2lkdGgoKVxuICAgICAgICAgIHZhciBjdXJyZW50UGFnZUxlZnQgPSAkKCcjbmF2ID4gdWwgPiAuYWN0aXZlID4gYScpLnBhcmVudCgpLnBvc2l0aW9uKCkubGVmdFxuICAgICAgICB9XG5cbiAgICAgICAgJG1hZ2ljTGluZVxuICAgICAgICAgICAgLndpZHRoKGN1cnJlbnRQYWdlV2lkdGgpXG4gICAgICAgICAgICAuY3NzKCdsZWZ0JywgY3VycmVudFBhZ2VMZWZ0KVxuICAgICAgICAgICAgLmRhdGEoJ29yaWdMZWZ0JywgJG1hZ2ljTGluZS5wb3NpdGlvbigpLmxlZnQpXG4gICAgICAgICAgICAuZGF0YSgnb3JpZ1dpZHRoJywgJG1hZ2ljTGluZS53aWR0aCgpKVxuXG4gICAgICAgICQoJyNuYXYgPiB1bCA+IGxpJykuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRlbCA9ICQodGhpcylcbiAgICAgICAgICBsZWZ0UG9zID0gJGVsLnBvc2l0aW9uKCkubGVmdFxuICAgICAgICAgIG5ld1dpZHRoID0gJGVsLndpZHRoKClcbiAgICAgICAgICAkbWFnaWNMaW5lLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgIGxlZnQ6IGxlZnRQb3MsXG4gICAgICAgICAgICB3aWR0aDogbmV3V2lkdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJG1hZ2ljTGluZS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICBsZWZ0OiAkbWFnaWNMaW5lLmRhdGEoJ29yaWdMZWZ0JyksXG4gICAgICAgICAgICB3aWR0aDogJG1hZ2ljTGluZS5kYXRhKCdvcmlnV2lkdGgnKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9LCAwKVxuXG4gICAgLy8gQW5pbWF0aW9uXG4gIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2NyAtIGdldFNjcm9sbGJhcldpZHRoKCkpIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuaG9tZS1zbGlkZXInKS5zbGljaygnc2xpY2tQYXVzZScpXG4gICAgICAkKCcuc2xpZGUtdGh1bWInKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluJylcbiAgICB9LCAwKVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5ob21lcGFnZSBoZWFkZXInKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluRG93bicpXG4gICAgfSwgMjAwKVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5zbGlkZS1jb250ZW50IC5tc2ctYm94IGgyJykuYWRkQ2xhc3MoJ2FuaW1hdGVkIHNsaWRlSW5MZWZ0JylcbiAgICB9LCA4MDApXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJCgnLnNsaWRlLWNvbnRlbnQgLm1zZy1ib3ggaDEnKS5hZGRDbGFzcygnYW5pbWF0ZWQgc2xpZGVJbkxlZnQnKVxuICAgIH0sIDE1MDApXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJCgnLnNsaWRlLWNvbnRlbnQgLm1zZy1ib3ggLmJveCcpLmFkZENsYXNzKCdhbmltYXRlZCBzbGlkZUluTGVmdCcpXG4gICAgfSwgMjIwMClcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcud2hpdGUtbGluZScpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlSW4gbGluZS1hY3RpdmUnKVxuICAgIH0sIDI2MDApXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJCgnLnNsaWRlci1ob2xkIC5sb2dvcycpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlSW4nKVxuICAgIH0sIDM2MDApXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJCgnLnNsaWRlci1ob2xkIC5zY3JvbGwnKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluJylcbiAgICB9LCAzODAwKVxuICAgICAgLy8gU3RhcnQgc2xpZGVyIG9uY2UgYWxsIGVsZW1lbnRzIGFyZSBsb2FkZWRcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuaG9tZS1zbGlkZXInKS5zbGljaygnc2xpY2tQbGF5JylcbiAgICB9LCA0MDAwKVxuXG4gICAgICAvLyBCZWZvcmUgc2xpZGUgdHJhbnNpdGlvbiwgcmVtb3ZlIGFsbCBhbmltYXRpb24gZWxlbWVudHMgb24gcHJldmlvdXMgc2xpZGVcbiAgICAkKCcuaG9tZS1zbGlkZXInKS5vbignYmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICAgICQoJy5zbGlkZS1jb250ZW50IC5tc2ctYm94IGgyLCAuc2xpZGUtY29udGVudCAubXNnLWJveCBoMSwgLnNsaWRlLWNvbnRlbnQgLm1zZy1ib3ggLmJveCcpLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBzbGlkZUluTGVmdCcpXG4gICAgICAkKCcud2hpdGUtbGluZScpLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBmYWRlSW4gbGluZS1hY3RpdmUnKVxuICAgIH0pXG4gICAgICAvLyBBZnRlciBzbGlkZSB0cmFuc2l0aW9uLCBhbmltYXRlIGJveGVzIGFuZCBwbHVzIHNpZ25cbiAgICAkKCcuaG9tZS1zbGlkZXInKS5vbignYWZ0ZXJDaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUpIHtcbiAgICAgICQoJy5zbGlkZS1jb250ZW50IC5tc2ctYm94IGgyLCAuc2xpZGUtY29udGVudCAubXNnLWJveCBoMSwgLnNsaWRlLWNvbnRlbnQgLm1zZy1ib3ggLmJveCcpLmFkZENsYXNzKCdhbmltYXRlZCBzbGlkZUluTGVmdCcpXG4gICAgICAgICAgLyogd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnNsaWRlLWNvbnRlbnQgLm1zZy1ib3ggaDInKS5hZGRDbGFzcygnYW5pbWF0ZWQgc2xpZGVJbkxlZnQnKVxuICAgICAgICAgIH0sIDApXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnNsaWRlLWNvbnRlbnQgLm1zZy1ib3ggaDEnKS5hZGRDbGFzcygnYW5pbWF0ZWQgc2xpZGVJbkxlZnQnKVxuICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuc2xpZGUtY29udGVudCAubXNnLWJveCAuYm94JykuYWRkQ2xhc3MoJ2FuaW1hdGVkIHNsaWRlSW5MZWZ0JylcbiAgICAgICAgICB9LCA1MDApICovXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy53aGl0ZS1saW5lJykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJbiBsaW5lLWFjdGl2ZScpXG4gICAgICB9LCAxMDAwKVxuICAgIH0pXG5cbiAgICAgIC8vIFBhZ2UgYW5pbWF0aW9uXG4gICAgJCgnLmhvbWUtbWFpbiA+ICosIC5ob21lcGFnZSBmb290ZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjdXIgPSAkKHRoaXMpXG4gICAgICBpZiAoY3VyLmlzT25TY3JlZW4oMC4xNSwgMC4xNSkpIHtcbiAgICAgICAgaWYgKCFjdXIuaGFzQ2xhc3MoJ2FuaW1hdGVkJykpIHtcbiAgICAgICAgICBjdXIuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJblVwJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjdXIuaXNPblNjcmVlbigwLjE1LCAwLjE1KSkge1xuICAgICAgICAgIGlmICghY3VyLmhhc0NsYXNzKCdhbmltYXRlZCcpKSB7XG4gICAgICAgICAgICBjdXIuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJblVwJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIiwiLy8gWW91IGNhbiBkbyBnbG9iYWwgc3R1ZmYgaW4gaGVyZVxuLy8gZm9yIGV4YW1wbGUgdGhlIG1lbnVzLCBmb290ZXJzLCBldGNcbmltcG9ydCAnLi9qcXVlcnknXG4vLyBXZSdyZSBub3QgdXNpbmcgZm91bmRhdGlvbiBidXQgeW91IGNhbiBlbmFibGUgaWYgeW91IG5lZWRcbi8vIGltcG9ydCAnLi9mb3VuZGF0aW9uJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9nZW5lcmFsL2luZGV4LmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vLyBNYWtlIGpRdWVyeSBnbG9iYWwgZm9yIG90aGVyIHBsdWdpbnMgdG8gY29uc3VtZVxud2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gJFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9nZW5lcmFsL2pxdWVyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=