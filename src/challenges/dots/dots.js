/* eslint-disable */
let myP5BoilerPlate = require('../../../js/myP5BoilerPlate.js').myP5BoilerPlate
var sketchInstance = function (sketch) {
//  return myP5BoilerPlate2(sketch, (mySketch) => {
  let mySketch = myP5BoilerPlate(sketch)

      let getSketchControls = 'f = fullscreen, s = save canvas to PNG'

      mySketch.setup = function () {
        mySketch.defaultInitStuff()
        mySketch.background(0)
      }

      mySketch.draw = function () {
        // mySketch.fill()
        mySketch.stroke(255)
        mySketch.ellipse(mySketch.random(mySketch.width), mySketch.random(mySketch.height), 10, 10)
      }

  sketch.windowResized = function () {
    mySketch.resizeMyCanvas()
    mySketch.background(0)
  }
      return mySketch
}

let getDescription = function () {
  return `Just drawing random dots for demo purposes. Goal is to finish\
          website (as a framework) first.`
}

export {
  sketchInstance,
  getDescription
}
