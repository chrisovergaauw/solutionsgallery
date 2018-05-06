/* eslint-disable */
let sketchInstance = function (sketch) {
  sketch.name='example'
  let mySketch = myP5BoilerPlate(sketch)
  // template start
  mySketch.windowResized = function () {
    mymySketch.resizeMyCanvas()
  }

  mymySketch.setup = function () {
    mySketch.defaultInitStuff()
    // template stop
    mySketch.background(0)
  }

  mySketch.draw = function () {
  }

}

let getDescription = function () {
  return `example description`
}

let getTags = function () {
  return ['#example', '#demo']
}
export {
  sketchInstance,
  getDescription,
  getTags
}


