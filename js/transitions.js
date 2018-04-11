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

//Fades text into page
function fadeIn(id) {
  $("#" + id).addClass("animated fadeInRight");
}

setTimeout(function() {
  fadeIn("desc1");
  fadeIn("desc2");
  fadeIn("desc3");
  fadeIn("desc4");
}, 10);
