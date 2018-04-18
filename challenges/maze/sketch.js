var template = function (sketch) {

    var minCellSizeInPixels;
    var nodes;

    const N = 1
    , S = 2
    , E = 4
    , W = 8;

    const DX = {N: 0, S: 0, E: -1, W: 1 };
    const DY = {N: 1, S: -1, E: 0, W: 0 };
    const OPPOSITE = {N: S, S: N, E: W, W: E};

    //template start
    sketch.windowResized = function () {
        sketch.resizeCanvas();
    };

    sketch.defaultInitStuff = function () {
        //TODO: make sketch agnostic about html page it will land on.
        var parentDiv = document.getElementById('jumboid');
        var pwidth = parentDiv.offsetWidth * 0.95;
        var pheight = parentDiv.offsetHeight * 0.95;
        sketch.createCanvas(pwidth, pheight);
        minCellSizeInPixels = pwidth / 10;
    };

    sketch.setup = function () {
        sketch.defaultInitStuff();
        maxNumberOfNodes = sketch.width / minCellSizeInPixels;
        for (var row = 0; row < maxNumberOfNodes; row++) {
            for (var col = 0; col < maxNumberOfNodes; col++) {
                nodes.push([row, col]);
            }
        }
    };
    sketch.draw = function () {

        sketch.defaultInitStuff();
        //template stop
        sketch.background(0);
        sketch.stroke(100);
        sketch.fill(255);
        sketch.translate(sketch.width % minCellSizeInPixels * -1, sketch.width % minCellSizeInPixels * -1);
        for (var row = 1; row < maxNumberOfNodes; row++) {
            for (var col = 1; col < maxNumberOfNodes; col++) {
                sketch.ellipse(row * minCellSizeInPixels, col * minCellSizeInPixels, 15);

            }
        }
    };


    //supportive functions
    sketch.createMatrix = function (width, height) {
        var matrix = new Array(height);
        for (var h = 0; h < height; h++) {
            matrix[h] = new Array(width);
        }
        return matrix;
    };

    sketch.carvePassagesFrom = function(x, y, grid){
        directions = [N, E, S, W].

    };

    sketch.isValidNode = function (x, y, grid){
        return (0 <= x <= grid.length && 0 <= y <= grid[0].length && grid[x][y] === 0);
    }

};