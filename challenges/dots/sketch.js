

var starSketch = function(sketch) {

    let getSketchControls = "f = fullscreen, s = save canvas to PNG";

    sketch.setup = function () {
        var parentDiv = document.getElementById('jumboid');
        var pwidth = parentDiv.offsetWidth * 0.95;
        var pheight = parentDiv.offsetHeight * 0.95;
        sketch.createCanvas(pwidth, pheight);
        sketch.background(0);
        this.p = sketch.createP(getSketchControls);
        this.p.addClass('lead');
        this.p.addClass('text-muted');
    };

    sketch.draw = function () {
        //sketch.fill();
        sketch.stroke(255);
        sketch.ellipse(sketch.random(sketch.width), sketch.random(sketch.height), 10, 10);
    };

    sketch.keyPressed = function (k) {
        if (k.key === 'f') {
            sketch.fullscreen(true);
        }
        if (k.key === 's') {
            sketch.save('thumbnail.png');
        }
    };
};