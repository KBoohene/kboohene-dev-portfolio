//Animation for page scrolling
$("#scroll").click(function(e) {
  console.log("output");
  e.preventDefault();
  var position = $(".cool-dev").offset().top;
  $("body, html").animate(
    {
      scrollTop: position
    },
    1200
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
