function fadeIn(id) {
  $("#" + id).addClass("animated fadeInRight");
}

setTimeout(function() {
  fadeIn("desc1");
}, 10);
