jQuery(document).ready(function($) {
  //Fix navbar to the top based on scroll
  $(window).scroll(() => {
    let Ws = $(this).scrollTop();
    let bN = $(".book-list").offset().top;
    let fN = $(".footer").offset().top;

    // console.log("Ws :" + Ws);
    // console.log("bN :" + bN);
    // console.log("fN :" + fN);

    if (Ws >= bN && Ws < fN) {
      $(".book-nav").addClass("fixed-nav");
      $(".hidden-nav").addClass("reveal");
    } else if (Ws < bN) {
      $(".book-nav").removeClass("fixed-nav");
      $(".hidden-nav").removeClass("reveal");
    }
  });

  //Navbar animations
  $(window).scroll(() => {
    let Ws = $(this).scrollTop() + 500;
    let bN = $(".book-list").offset().top;

    if (Ws >= bN) {
      $("#nav-links").css("visibility", "visible");
      $("#nav-links").removeClass("animated fadeOutDown");
      $("#nav-links").addClass("animated fadeInUp");

      $("#welcome-txt").css("visibility", "visible");
      $("#welcome-txt").removeClass("animated fadeOutLeft");
      $("#welcome-txt").addClass("animated fadeInLeft");
    } else if (Ws < bN) {
      $("#nav-links").removeClass("animated fadeInUp");
      $("#nav-links").addClass("animated fadeOutDown");

      $("#welcome-txt").removeClass("animated fadeInLeft");
      $("#welcome-txt").addClass("animated fadeOutLeft");
    }
  });

  //Navigate to series book section
  $("#sect-series").click(function(e) {
    e.preventDefault();
    var position = $("#series-sect").offset().top - 100;
    $("body, html").animate(
      {
        scrollTop: position
      },
      1500
    );
  });

  //Navigate to singles book section
  $("#sect-singles").click(function(e) {
    e.preventDefault();
    var position = $("#singles-sect").offset().top - 100;
    $("body, html").animate(
      {
        scrollTop: position
      },
      1500
    );
  });
});
