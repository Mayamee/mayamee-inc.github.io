$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navClass: ["slider__nav--left", "slider__nav--right"],
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1050: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });
});
