var mazeSketch = function (sketch) {

    let mySketch = myP5BoilerPlate(sketch);
    mySketch.scribble = new Scribble(mySketch);
    mySketch.frameRate(30);

    mySketch.cellSizeInPixels = 50;
    mySketch.rows = undefined;
    mySketch.cols = undefined;
    mySketch.bgcolor = undefined;
    mySketch.fgcolor = undefined;

    mySketch.grid = [];
    mySketch.stack = [];
    mySketch.current = undefined;

    mySketch.setup = function () {

        mySketch.defaultInitStuff();
        setCanvasBackground();
        resetGrid();
    };
    mySketch.draw = function () {
        setCanvasBackground();
        //This centers the drawing
        mySketch.translate((mySketch.width - mySketch.cols * mySketch.cellSizeInPixels) / 2,
            (mySketch.height - mySketch.rows * mySketch.cellSizeInPixels) / 2);
        for (let cell = 0; cell < mySketch.grid.length; cell++) {
            mySketch.grid[cell].show();
        }
        // STEP 1
        mySketch.current.visited = true;
        mySketch.current.highlight();

        //STEP 2.1
        let next = mySketch.current.getNeighbour();

        if (next) {
            // STEP 2.2
            mySketch.stack.push(mySketch.current);

            //STEP 2.3
            removeWalls(mySketch.current, next);

            //STEP 2.4
            next.visited = true;
            mySketch.current = next;
        }else if(mySketch.stack.length > 0){
            mySketch.current = mySketch.stack.pop();
        }else{
            mySketch.noLoop();
        }
    };

    mySketch.getIndex = function (x, y) {
        if (x < 0 ||
            y < 0 ||
            x > mySketch.cols - 1 ||
            y > mySketch.rows - 1) {
            return -1
        } else {
            return x + y * mySketch.cols;
        }
    };

    var removeWalls = function(cellA, cellB){
        let deltaX = cellA.col - cellB.col;
        if (deltaX === -1){
            cellA.walls['E'] = false;
            cellB.walls['W'] = false;
        }else if (deltaX === 1){
            cellA.walls['W'] = false;
            cellB.walls['E'] = false;
        }

        let deltaY = cellA.row - cellB.row;
        if (deltaY === -1){
            cellA.walls['S'] = false;
            cellB.walls['N'] = false;
        }else if (deltaY === 1){
            cellA.walls['N'] = false;
            cellB.walls['S'] = false;
        }
    };

    mySketch.windowResized = function () {
        mySketch.defaultInitStuff();
        resetGrid();
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


    mySketch.defaultInitStuff = function () {
        mySketch.createCanvas(mySketch.pwidth, mySketch.pheight);

    };

    function setCanvasBackground() {
        mySketch.background(mySketch.bgcolor);
        mySketch.stroke(mySketch.fgcolor);
        mySketch.fill(255);
        mySketch.scribble.roughness = 0.5;
    }


    function resetGrid() {
        mySketch.grid.splice(0, mySketch.grid.length);
        mySketch.stack.splice(0, mySketch.stack.length);
        mySketch.rows = Math.floor(mySketch.height / mySketch.cellSizeInPixels);
        mySketch.cols = Math.floor(mySketch.width / mySketch.cellSizeInPixels);

        for (let row = 0; row < mySketch.rows; row++) {
            for (let col = 0; col < mySketch.cols; col++) {
                let cell = new Cell(mySketch, col, row);
                mySketch.grid.push(cell);
            }
        }
        // STEP 1
        mySketch.current = mySketch.grid[0];
    }
};