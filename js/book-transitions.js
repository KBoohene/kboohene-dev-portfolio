jQuery(document).ready(function ($) {

  //Fix navbar to the top based on scroll
  $(window).scroll(() => {

    let Ws = $(this).scrollTop();
    let bN = $('.book-list').offset().top;
    let fN = $('.footer').offset().top;

    // console.log("Ws :" + Ws);
    // console.log("bN :" + bN);
    // console.log("fN :" + fN);

    if (Ws >= bN && Ws < fN) {
      $(".book-nav").addClass('fixed-nav');
      $(".hidden-nav").addClass('reveal');
    } else if (Ws < bN) {
      $(".book-nav").removeClass('fixed-nav');
      $(".hidden-nav").removeClass('reveal');
    }
  });

  //Navigate to series book section
  $("#sect-series").click(function (e) {
    e.preventDefault();
    var position = $("#series-sect").offset().top - 100;
    $("body, html").animate({
        scrollTop: position
      },
      1500
    );
  });

  //Navigate to singles book section
  $("#sect-singles").click(function (e) {
    e.preventDefault();
    var position = $("#singles-sect").offset().top - 100;
    $("body, html").animate({
        scrollTop: position
      },
      1500
    );
  });
});