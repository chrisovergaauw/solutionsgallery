var tenLineMazeSketch = function(sketch) {

    let mySketch = myP5BoilerPlate(sketch);

    let x = 0;
    let y = 0;
    let spacing;
    let slider;

    //template start
    mySketch.windowResized = function(){
        mySketch.resizeCanvas();
    };

    mySketch.defaultInitStuff = function(){
        var parentDiv = document.getElementById('jumboid');
        var pwidth = parentDiv.offsetWidth*0.90;
        var pheight = parentDiv.offsetHeight*0.90;
        mySketch.createCanvas(pwidth, pheight);
    };

    mySketch.setup = function() {
        mySketch.defaultInitStuff();
        //template stop
        mySketch.frameRate(10);
        mySketch.background(0);
        slider = mySketch.createSlider(0,mySketch.width/9, mySketch.width/3*0.3);
        spacing = slider.value();
    };

    mySketch.draw = function() {
        mySketch.stroke(255);
        if (mySketch.random(1) < 0.5) {
            mySketch.line(x, y, x + spacing, y + spacing);
        }else {
            mySketch.line(x, y + spacing, x + spacing, y);
        }

        x = x + spacing;

        if (x > mySketch.width){
            x = 0;
            y = y + spacing;
        }

        if (y > mySketch.height){
            y = 0;
            mySketch.background(0);
            spacing = slider.value();
        }

    };

};