jQuery(document).ready(function ($) {
  $(window).scroll(() => {

    let Ws = $(this).scrollTop();
    let bN = $('.book-list').offset().top;
    let fN = $('.footer').offset().top;

    console.log("Ws :" + Ws);
    console.log("bN :" + bN);
    console.log("fN :" + fN);

    if (Ws >= bN && Ws < fN) {
      $(".book-nav").addClass('fixed-nav');
      $(".hidden-nav").addClass('reveal');
    } else if (Ws < bN) {
      $(".book-nav").removeClass('fixed-nav');
      $(".hidden-nav").removeClass('reveal');
    }
  });
});