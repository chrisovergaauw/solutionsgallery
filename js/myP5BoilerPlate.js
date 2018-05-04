var myP5BoilerPlate = function(sketch, callback){
    //Functions that every of my sketches should have are included here.

    sketch.keyPressed = function (k) {
        console.log('key pressed: ' + k.key);
        switch (k.key) {
            case 'f':
                console.log('f pressed');
                sketch.fullscreen(true);
                sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
                break;
            case 's':
                sketch.save('10-line-maze2.png');
                break;
            case 'p':
                sketch.toggleLoop();
                break;
            case 'n':
                if (!sketch.whyIsP5_loopPrivate) {
                    sketch.redraw();
                } else {
                    console.log("with 'n' you can only summon the next frame is the canvas is paused with 'p'")
                }
                break;
            case 'Escape':
                sketch.remove();
                break;
            default:
                console.log("'" + k.key + "' " + "pressed but there's no action tied to this event");
        }
    };

    sketch.toggleLoop = function() {
        if (typeof sketch.whyIsP5_loopPrivate === 'undefined' || sketch.whyIsP5_loopPrivate === true){
            sketch.whyIsP5_loopPrivate = false;
            sketch.noLoop();
        }else{
            sketch.whyIsP5_loopPrivate = true;
            sketch.loop();
        }

    };
    callback(sketch);
};

export {
  myP5BoilerPlate
}
