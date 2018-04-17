jQuery(document).ready(function($) {
  /*Change dot navigation based on sections*/
  $(window).scroll(() => {
    //Section heights
    let mT = $(".main").offset().top;
    let cdT = $(".cool-dev").offset().top;
    let cfT = $(".code-fan").offset().top;
    let rbT = $(".react-buff").offset().top;

    //Window height
    let wS = $(this).scrollTop() + 100;

    if (wS >= cdT && wS < cfT) {
      isCurrent("#li-dot2");
    } else if (wS >= cfT && wS < rbT) {
      isCurrent("#li-dot3");
    } else if (wS >= rbT) {
      isCurrent("#li-dot4");
    } else {
      isCurrent("#li-dot1");
    }

    wS = $(this).scrollTop() + 450;

    if (wS >= cfT && wS < rbT) {
      $(".skill-icons").addClass("animated fadeInUp");
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

  /*Circular Progressbar for page loading*/
  let bar = new ProgressBar.Circle("#section-loading", {
    color: "#aaa",

    strokeWidth: 3,
    trailWidth: 1,
    easing: "easeInOut",
    duration: 1400,
    from: { color: "#aaa", width: 1 },
    to: { color: "#333", width: 3 },

    step: function(state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value + "%  ready");
      }
    }
  });

  bar.animate(0.1);
});
