$(function () {
  "use strict";

  // Fixed menu js start
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // full page loader js
  $(".fullpage_loader").fadeOut("slow", function () {
    $(this).remove();
  });
  // banner slider js
  $(".banner_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    arrows: true,
    dots: false,
    prevArrow: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon arrow arrow_left icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>',
    nextArrow: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon arrow arrow_right icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>',
  }).slickAnimation();

  // masonry layout gallery
  $(document).ready(function () {
    var $masonryLayout = $('.masonry-layout');

    $masonryLayout.imagesLoaded(function () {
      $masonryLayout.masonry({
        itemSelector: '.col-md-6',
        columnWidth: '.col-md-6',
        percentPosition: true
      });
    });
  });

  // Create scenes
  $(".content").each(function (i) {
    let target1 = $(this).find(".about-one__image");
    let target2 = $(this).find(".about-one__content");
    let target3 = $(this).find(".blog_home_item");
    let target4 = $(this).find(".faq_info");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'top 80%',
        end: 'bottom top',
        toggleActions: 'play none none none'
      }
    });

    if (target1.length) {
      tl.from(
        target1,
        1, {
          opacity: 0,
          x: -60,
        },
        0
      );
    }
    if (target2.length) {
      tl.from(
        target2,
        1, {
          opacity: 0,
          x: 60,
        },
        0
      );
    }
    if (target3.length) {
      tl.from(
        target3,
        1, {
          y: 100,
          opacity: 0,
          stagger: 0.2,
        },
        0
      );
    }
    if (target4.length) {
      tl.from(
        target4,
        1, {
          opacity: 0,
          x: 60,
          stagger: 0.5,
        },
        0
      );
    }
  });


  if ($(".certified_label").length) {
    gsap.from(".certified_label", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
    });
  }

  // gsap splitting text
  gsap.registerPlugin(ScrollTrigger);
  const splitTypes = document.querySelectorAll(".reveal-type");

  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, {
      types: "chars,words",
    });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: "top 100%",
        scrub: false,
        markers: false,
        toggleActions: "restart none none reset",
      },
      x: -40,
      opacity: 0,
      stagger: 0.04,
    });
  });


  // magnific popup js
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // magnific video js
  $(".vidplay").magnificPopup({
    type: "iframe",
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
      },
      srcAction: "iframe_src",
    },
  });

  /* Odometer Active js */
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  // back to top js
  var btn = $(".scroll-to-top");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        1000
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });

  // mobile menu js
  $(".mobile-topbar .bars").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
    return false;
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  $(".sub-mobile-menu ul").hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });
});