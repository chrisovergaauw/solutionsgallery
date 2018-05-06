/* eslint-disable */
let myP5BoilerPlate = require('../../../js/myP5BoilerPlate.js').myP5BoilerPlate
var sketchInstance = function (sketch) {
  let mySketch = myP5BoilerPlate(sketch)

      let getSketchControls = 'f = fullscreen, s = save canvas to PNG'

      mySketch.setup = function () {
        mySketch.defaultInitStuff()
        mySketch.background(0)
      }

      mySketch.draw = function () {
        mySketch.stroke(mySketch.random(255),mySketch.random(255),mySketch.random(255))
        let radius = mySketch.random(10)
        mySketch.ellipse(mySketch.random(mySketch.width), mySketch.random(mySketch.height), radius*2, radius*2)
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

let getTags =  function () {
  return ['#boring', '#demo']
}

export {
  sketchInstance,
  getDescription,
  getTags
}
