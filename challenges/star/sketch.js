var s = function(sketch) {

    sketch.setup = function() {
        var parentDiv = document.getElementById('jumboid');
        var pwidth = parentDiv.offsetWidth*0.95;
        var pheight = parentDiv.offsetHeight*0.95;
        console.log(pheight);
        sketch.createCanvas(pwidth, pheight);
        console.log("setup");
        sketch.background(0);
    };

    sketch.draw = function() {
        console.log("draw");
    };
}