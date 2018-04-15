jQuery(document).ready(function($) {
  //Arrow animation for page scrolling
  $("#scroll").click(function(e) {
    e.preventDefault();
    var position = $(".cool-dev").offset().top;
    $("body, html").animate(
      {
        scrollTop: position
      },
      1200
    );
  });

  /*Scoll animation for different taglines*/

  //cool-dev
  $("#tag1, #dot2").click(function(e) {
    e.preventDefault();
    var position = $(".cool-dev").offset().top;
    $("body, html").animate(
      {
        scrollTop: position
      },
      1200
    );
  });

  //code-fanatic
  $("#tag2, #dot3").click(function(e) {
    e.preventDefault();
    var position = $(".code-fan").offset().top;
    $("body, html").animate(
      {
        scrollTop: position
      },
      1500
    );
  });

  //react-buff
  $("#tag3, #dot4").click(function(e) {
    e.preventDefault();
    var position = $(".react-buff").offset().top;
    $("body, html").animate(
      {
        scrollTop: position
      },
      1800
    );
  });

  //home
  $("#dot1").click(function(e) {
    e.preventDefault();
    var position = $(".main").offset().top;
    $("body, html").animate(
      {
        scrollTop: position
      },
      1800
    );
  });

  //Scroll to top button
  $("#arrow-up").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1800
    );
    return false;
  });

  /*Hover animation for different items */

  //Added pulse animation on hover to social icons
  $("[id^=social]").hover(
    () => {
      $(this).addClass("animated infinite pulse");
    },
    () => {
      $(this).removeClass("animated infinite pulse");
    }
  );

  //Added flash animation on hover to skills icons
  $("[id^=skills]").hover(
    () => {
      $(this).addClass("animated infinite pulse");
    },
    () => {
      $(this).removeClass("animated infinite pulse");
    }
  );

  /*Hides and displays navbar after certain scroll*/

  //Hide navbar initially
  $(".nav-bar").hide();

  // Fade animation
  $(() => {
    $(window).scroll(() => {
      // Determines position on page before navbar displays
      if ($(this).scrollTop() > 400) {
        $(".nav-bar").fadeIn();
      } else {
        $(".nav-bar").fadeOut();
      }
    });
  });

  //Fades text into page
  function fadeIn(id) {
    $("#" + id).addClass("animated fadeInRight");
  }

  //Timer on when to load the animation
  setTimeout(() => {
    fadeIn("tag1");
    fadeIn("tag2");
    fadeIn("tag3");
  }, 10);
});

/*Hamburger animation*/
$(".hamburger").click(() => {
  if ($(".is-active")[0]) {
    $(this).removeClass("is-active");
  } else {
    $(this).addClass("is-active");
  }
});

/*Change dot navigation based on sections*/
$(window).scroll(() => {
  //Section heights
  let mT = $(".main").offset().top,
    mH = $(".main").outerHeight();
  let cdT = $(".cool-dev").offset().top;
  let cfT = $(".code-fan").offset().top;
  let rbT = $(".react-buff").offset().top;

  //Window height
  let wS = $(this).scrollTop(),
    wH = $(window).height();

  if (wS >= cdT && wS < cfT) {
    isCurrent("#li-dot2");
  } else if (wS >= cfT && wS < rbT) {
    isCurrent("#li-dot3");
  } else if (wS >= rbT) {
    isCurrent("#li-dot4");
  } else {
    isCurrent("#li-dot1");
  }
});

//Checks for the current dot
function isCurrent(dotId) {
  if ($(".current")[0]) {
    let element = $(".dotstyle").find(".current");
    element.removeClass("current");

    $(dotId).addClass("current");
  }
}
