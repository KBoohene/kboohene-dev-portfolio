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
$("#tag1").click(function(e) {
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
$("#tag2").click(function(e) {
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
$("#tag3").click(function(e) {
  e.preventDefault();
  var position = $(".react-buff").offset().top;
  $("body, html").animate(
    {
      scrollTop: position
    },
    1800
  );
});

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

//Fades text into page
function fadeIn(id) {
  $("#" + id).addClass("animated fadeInRight");
}

//Timer on when to load the animation
setTimeout(function() {
  fadeIn("tag1");
  fadeIn("tag2");
  fadeIn("tag3");
}, 10);
