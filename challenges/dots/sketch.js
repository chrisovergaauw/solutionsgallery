var starSketch = function(sketch) {

    sketch.setup = function() {
        var parentDiv = document.getElementById('jumboid');
        var pwidth = parentDiv.offsetWidth*0.95;
        var pheight = parentDiv.offsetHeight*0.95;
        console.log(pheight);
        sketch.createCanvas(pwidth, pheight);
        sketch.background(0);
    };

    sketch.draw = function() {
        //sketch.fill();
        sketch.stroke(255);
        sketch.ellipse(sketch.random(sketch.width), sketch.random(sketch.height), 10, 10 );
    };
};