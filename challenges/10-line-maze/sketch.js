var tenLineMazeSketch = function(sketch) {

    let mySketch = myP5BoilerPlate(sketch);

    let x = 0;
    let y = 0;
    let spacing;
    let slider;

    //template start
    mySketch.windowResized = function(){
        mySketch.defaultInitStuff();
        x = 0;
        y = 0;
        spacing = slider.value();
        setCanvasBackground();
    };

    mySketch.defaultInitStuff = function(){
        var parentDiv = document.getElementById('jumboid');
        var pwidth = parentDiv.offsetWidth*0.90;
        var pheight = parentDiv.offsetHeight*0.90;
        mySketch.createCanvas(pwidth, pheight);
    };

    mySketch.setup = function() {
        slider = mySketch.createSlider(mySketch.width*0.5,mySketch.width*2, mySketch.width/3*0.1);
        mySketch.defaultInitStuff();
        //template stop
        mySketch.frameRate(10);
        setCanvasBackground();
        spacing = slider.value();
        slider.changed(mySketch.windowResized);
    };

    function setCanvasBackground() {
        console.log('setting canvas background');
        mySketch.background(mySketch.bgcolor);
        mySketch.stroke(mySketch.fgcolor);
        mySketch.fill(255);
    }

    mySketch.defaultInitStuff = function () {
        mySketch.createCanvas(mySketch.pwidth, mySketch.pheight);

    };

    mySketch.preload = function () {
        //mySketch.colorMode(mySketch.HSB, 360, 100, 100, 1);
        let colorSet = holder_pickRandomColorSet();
        mySketch.bgcolor = colorSet['bgColor'];
        mySketch.fgcolor = colorSet['fgColor'];
        let fill = colorSet['fill'];
        mySketch.fillColor = mySketch.color(fill[0], fill[1], fill[2], fill[3]);
        let highlight = colorSet['highlight'];
        mySketch.highlight = mySketch.color(highlight[0], highlight[1], highlight[2], highlight[3]);

        //TODO: make mySketch agnostic about html page it will land on.
        let parentDiv = document.getElementById('jumboid');
        mySketch.pwidth = parentDiv.offsetWidth * 0.95;
        mySketch.pheight = parentDiv.offsetHeight * 1.95;
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
            setCanvasBackground();
        }

    };

};