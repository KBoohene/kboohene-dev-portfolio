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

  // Firebase progress line
  let fbase_line = new ProgressBar.Line("#fbase-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  // Node progress line
  let node_line = new ProgressBar.Line("#node-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  // PHP progress line
  let php_line = new ProgressBar.Line("#php-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  // SQL progress line
  let sql_line = new ProgressBar.Line("#sql-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  // React progress line
  let react_line = new ProgressBar.Line("#react-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  // Sass progress line
  let sass_line = new ProgressBar.Line("#sass-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  // Java progress line
  let java_line = new ProgressBar.Line("#java-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  // Python progress line
  let python_line = new ProgressBar.Line("#python-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  // Git progress line
  let git_line = new ProgressBar.Line("#git-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  // heroku progress line
  let heroku_line = new ProgressBar.Line("#heroku-line", {
    strokeWidth: 2,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "50%" }
  });

  css_line.animate(0.5);
  js_line.animate(0.7);
  html_line.animate(0.85);
  fbase_line.animate(0.9);
  php_line.animate(0.9);
  node_line.animate(0.9);
  sql_line.animate(0.85);
  react_line.animate(0.7);
  sass_line.animate(0.8);
  python_line.animate(0.7);
  heroku_line.animate(0.6);
  git_line.animate(0.8);
  java_line.animate(0.7);
});
