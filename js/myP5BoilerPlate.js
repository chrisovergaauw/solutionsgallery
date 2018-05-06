var myP5BoilerPlate = function (sketch) {
  //Functions that every of my sketches should have are included here.

  sketch.defaultInitStuff = function () {
    sketch.desiredCanvasSize()
    sketch.createCanvas(sketch.pwidth, sketch.pheight)
  }

  sketch.resizeMyCanvas = function () {
    sketch.desiredCanvasSize()
    sketch.resizeCanvas(sketch.pwidth, sketch.pheight)
  }

  sketch.desiredCanvasSize = function () {
    sketch.pwidth = document.body.offsetWidth * 0.8
    sketch.pheight = (document.body.offsetWidth < 768)? sketch.pwidth : sketch.pwidth * 0.45
  }

  sketch.keyPressed = function (k) {
    console.log('key pressed: ' + k.key);
    switch (k.key) {
      case 'f':
        console.log('f pressed');
        sketch.fullscreen(true);
        sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
        break;
      case 'n':
        if (!sketch.whyIsP5_loopPrivate) {
          sketch.redraw();
        } else {
          console.log("with 'n' you can only summon the next frame is the canvas is paused with 'p'")
        }
        break;
      case 'p':
        sketch.toggleLoop();
        break;
      case 'r':
        if (sketch.recording){

        }
      case 's':
        sketch.save(`${sketch.name}.png`);
        break;
      case 'Escape':
        sketch.remove();
        break;
      default:
        console.log("'" + k.key + "' " + "pressed but there's no action tied to this event");
    }
  };

  sketch.toggleLoop = function () {
    if (typeof sketch.whyIsP5_loopPrivate === 'undefined' || sketch.whyIsP5_loopPrivate === true) {
      sketch.whyIsP5_loopPrivate = false;
      sketch.noLoop();
    } else {
      sketch.whyIsP5_loopPrivate = true;
      sketch.loop();
    }

  };
  sketch.link = sketch.createA('#', 'X')
  sketch.link.mousePressed(sketch.remove)
  sketch.link.addClass('button is-warning is-inline-block is-outlined')
  return sketch;
};

export {
  myP5BoilerPlate
}
