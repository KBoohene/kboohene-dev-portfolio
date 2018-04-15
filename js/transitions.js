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

  /*Hover animation for different items */

  //Added pulse animation on hover to social icons
  $("[id^=social]").hover(
    function() {
      $(this).addClass("animated infinite pulse");
    },
    function() {
      $(this).removeClass("animated infinite pulse");
    }
  );

  //Added flash animation on hover to skills icons
  $("[id^=skills]").hover(
    function() {
      $(this).addClass("animated infinite pulse");
    },
    function() {
      $(this).removeClass("animated infinite pulse");
    }
  );

  //Change section title based on dots hover
  $("#dot1").hover(
    function() {
      document.getElementById("section-title").innerHTML = "Home";
    },
    function() {
      document.getElementById("section-title").innerHTML = "";
    }
  );

  $("#dot2").hover(
    function() {
      document.getElementById("section-title").innerHTML = "Cool Dev";
    },
    function() {
      document.getElementById("section-title").innerHTML = "";
    }
  );

  $("#dot3").hover(
    function() {
      document.getElementById("section-title").innerHTML = "Code Fanatic";
    },
    function() {
      document.getElementById("section-title").innerHTML = "";
    }
  );

  $("#dot4").hover(
    function() {
      document.getElementById("section-title").innerHTML = "React Buff";
    },
    function() {
      document.getElementById("section-title").innerHTML = "";
    }
  );

  $("#dot5").hover(
    function() {
      document.getElementById("section-title").innerHTML = "Book Repo";
    },
    function() {
      document.getElementById("section-title").innerHTML = "";
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

  /*Hamburger animation*/
  $(".hamburger").click(() => {
    if ($(".is-active")[0]) {
      $(".hamburger").removeClass("is-active");
    } else {
      $(".hamburger").addClass("is-active");
    }
  });
});
