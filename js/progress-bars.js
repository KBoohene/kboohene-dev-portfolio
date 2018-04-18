jQuery(document).ready(function($) {
  // HTML progress line
  let html_line = new ProgressBar.Line("#html-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  // CSS progress line
  let css_line = new ProgressBar.Line("#css-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  // JS progress line
  let js_line = new ProgressBar.Line("#js-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  //TODO:Add the rest of the modal line animations
  css_line.animate(0.5);
  js_line.animate(0.7);
  html_line.animate(0.85);
});
