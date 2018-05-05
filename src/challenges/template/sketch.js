/* eslint-disable */
var s = function (sketch) {
  // template start
  sketch.windowResized = function () {
    sketch.resizeCanvas()
  }

  sketch.defaultInitStuff = function () {
    var parentDiv = document.getElementById('jumboid')
    var pwidth = parentDiv.offsetWidth * 0.95
    var pheight = parentDiv.offsetHeight * 0.95
    sketch.createCanvas(pwidth, pheight)
  }

  sketch.setup = function () {
    sketch.defaultInitStuff()
    // template stop
    sketch.background(0)
  }

  sketch.draw = function () {
  }

}
