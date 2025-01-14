(function ($) {
  "use strict";

  function HeadroomStickyHeader(){
    var header = document.querySelector(".headroom-sticky-header");
    var headroom = new Headroom(header, {
      tolerance: {
        down: 10,
        up: 20
      },
      offset: 15
    });
    headroom.init();
  }
  HeadroomStickyHeader();

  // scrollToTop
  $.scrollUp({
    scrollName: "scrollUp",
    topDistance: "300",
    topSpeed: 500,
    animation: "fade",
    animationInSpeed: 200,
    animationOutSpeed: 200,
    scrollText: '<i class="fa-solid fa-arrow-up"></i>',
    activeOverlay: false,
  });
  // background-start
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  // search-toggle
  $(".search-click").on("click", function () {
    $(".form-toggle,.body-overlay").addClass("active");
  });

  $(".close-btn-serch,.body-overlay").on("click", function () {
    $(".form-toggle,.body-overlay").removeClass("active");
  });

  // preloder-heare
  var loader = document.getElementById("preloader");
  window.addEventListener("load", function () {
    loader.style.display = "none";
  });

  function magnificPopup(){
    var yPopup = $(".play-btn");
    if (yPopup.length) {
        yPopup.magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
  }
  magnificPopup();

  /* magnificPopup gallery view */
  $(".gallery").each(function () {
    $(this).magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });
  // latest-project
  var swiper = new Swiper(".latest", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // testimonial-slider
  var swiper = new Swiper(".testimonial", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-nexts",
      prevEl: ".swiper-button-prevs",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  // herov1-slider
  var swiper = new Swiper(".heroslide1", {
    effect: "fade",
    speed: 1000,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

  // herov2-slider
  var swiper = new Swiper(".heroslide", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // servicev2-slider
  var swiper = new Swiper(".servicev2", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    autoWidth: true,
    navigation: {
      nextEl: ".swiper-button-nexts",
      prevEl: ".swiper-button-prevs",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // brands-slide
  var swiper = new Swiper(".brands-slide", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 100,
      },
    },
  });

  // Counter
  var $CounterUp = $(".counter");
  if ($CounterUp.length > 0) {
    $(".counter").counterUp({
      delay: 10,
      time: 2000,
    });
  }

  // skill-progress-bar
  var $CounterUp = $(".skill-counter");
  if ($CounterUp.length > 0) {
    $(".skill-counter").counterUp({
      delay: 10,
      time: 1200,
    });
  }

  // Select2
  $(".select2").select2({
    allowClear: true
  });

  // wow-js
  new WOW().init();
})(jQuery);
