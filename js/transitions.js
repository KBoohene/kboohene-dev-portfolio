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
$("#desc1").click(function(e) {
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
$("#desc2").click(function(e) {
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
$("#desc3").click(function(e) {
  e.preventDefault();
  var position = $(".react-buff").offset().top;
  $("body, html").animate(
    {
      scrollTop: position
    },
    1800
  );
});

//smiley
$("#desc4").click(function(e) {
  e.preventDefault();
  var position = $(".smiley").offset().top;
  $("body, html").animate(
    {
      scrollTop: position
    },
    2000
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

//Fades text into page
function fadeIn(id) {
  $("#" + id).addClass("animated fadeInRight");
}

//Timer on when to load the animation
setTimeout(function() {
  fadeIn("desc1");
  fadeIn("desc2");
  fadeIn("desc3");
  fadeIn("desc4");
}, 10);
