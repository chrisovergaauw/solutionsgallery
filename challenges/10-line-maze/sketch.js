var tenLineMazeSketch = function(sketch) {

    let x = 0;
    let y = 0;
    let spacing;
    let slider;

    //template start
    sketch.windowResized = function(){
        sketch.resizeCanvas();
    };

    sketch.defaultInitStuff = function(){
        var parentDiv = document.getElementById('jumboid');
        var pwidth = parentDiv.offsetWidth*0.90;
        var pheight = parentDiv.offsetHeight*0.90;
        sketch.createCanvas(pwidth, pheight);
    };

    sketch.setup = function() {
        sketch.defaultInitStuff();
        //template stop
        sketch.frameRate(10);
        sketch.background(0);
        slider = sketch.createSlider(0,sketch.width/3, sketch.width/3*0.3);
        spacing = slider.value();
    };

    sketch.draw = function() {
        sketch.stroke(255);
        if (sketch.random(1) < 0.5) {
            sketch.line(x, y, x + spacing, y + spacing);
        }else {
            sketch.line(x, y + spacing, x + spacing, y);
        }

        x = x + spacing;

        if (x > sketch.width){
            x = 0;
            y = y + spacing;
        }

        if (y > sketch.height){
            y = 0;
            sketch.background(0);
            spacing = slider.value();
        }

    };

};