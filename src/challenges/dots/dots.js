

var starSketch = function(sketch) {

    let mySketch = myP5BoilerPlate(sketch);

    let getSketchControls = "f = fullscreen, s = save canvas to PNG";

    mySketch.setup = function () {
        var parentDiv = document.getElementById('jumboid');
        var pwidth = parentDiv.offsetWidth * 0.90;
        var pheight = parentDiv.offsetHeight;
        mySketch.createCanvas(pwidth, pheight);
        mySketch.background(0);
        this.p = mySketch.createP(getSketchControls);
        this.p.addClass('lead');
        this.p.addClass('text-light');
    };

    mySketch.draw = function () {
        //mySketch.fill();
        mySketch.stroke(255);
        mySketch.ellipse(mySketch.random(mySketch.width), mySketch.random(mySketch.height), 10, 10);
    };
};