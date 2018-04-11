function fadeIn(id) {
  $("#" + id).addClass("animated fadeInRight");
}

setTimeout(function() {
  fadeIn("desc1");
  fadeIn("desc2");
  fadeIn("desc3");
  fadeIn("desc4");
}, 10);
