var mazeSketch = function (sketch) {
    
    let mySketch = myP5BoilerPlate(sketch);

    let scribble = new Scribble( mySketch );
    mySketch.frameRate(30);

    let cellSizeInPixels = 50;
    let rows, cols;
    let grid = [];
    // let steps = [];
    let bgcolor;
    let fgcolor;
    let manualIterator=0;

    // function getSteps(){
    //     return steps;
    // }

    mySketch.windowResized = function () {
        mySketch.defaultInitStuff();
        resetGrid();
    };

    mySketch.preload = function(){
        bgcolor = holder_pickRandomColor(holder_bgColors);
        fgcolor = holder_pickRandomColor(holder_fgColors);
    };


    mySketch.defaultInitStuff = function () {
        //TODO: make mySketch agnostic about html page it will land on.
        let parentDiv =  document.getElementById('jumboid');
        let pwidth    =  parentDiv.offsetWidth * 0.95;
        let pheight   =  parentDiv.offsetHeight * 1.95;
        mySketch.createCanvas(pwidth, pheight);

    };
    function initCanvas(){
        mySketch.background(bgcolor);
        mySketch.stroke(fgcolor);
        mySketch.fill(255);
    }

    mySketch.setup = function () {

        mySketch.defaultInitStuff();
        initCanvas();
        scribble.roughness = 0.5;
        resetGrid();
        };
    mySketch.draw = function () {
        initCanvas();
        mySketch.translate((mySketch.width-cols*cellSizeInPixels)/2,(mySketch.height-rows*cellSizeInPixels)/2);
        for (let cell = 0; cell < grid.length;cell++){
            grid[cell].show();
        }

        // for (let step = 0; step < steps.length;step++){
        //     mySketch.stroke(mySketch.random(255), mySketch.random(255), mySketch.random(255));
        //     mySketch.line(steps[step][0].x+cellSizeInPixels/2, steps[step][0].y+cellSizeInPixels/2,
        //                 steps[step][1].x+cellSizeInPixels/2, steps[step][1].y+cellSizeInPixels/2);
        // }
        //mySketch.noLoop();

    };

    function resetGrid(){
        grid.splice(0,grid.length);
        rows = Math.floor(mySketch.height  / cellSizeInPixels);
        cols = Math.floor(mySketch.width / cellSizeInPixels);
        initCanvas();
        for (let row = 0; row < rows;row++) {
            for (let col = 0; col < cols; col++) {
                let cell = new Cell(col, row);
                grid.push(cell);
            }
        }
        carve(grid[0]);
        // console.log(steps);

    }

    function Cell(col, row) {
        this.col = col;
        this.row = row;
        this.x = col * cellSizeInPixels;
        this.y = row * cellSizeInPixels;
        this.walls = {N: true, E: true, S: true, W: true};
        this.visited = false;

        this.show = function () {
            for (wall in this.walls) {
                if (this.walls[wall]) {
                    this.drawWall(wall);
                }
            }
            if (this.visited){
                //mySketch.ellipse(this.x+cellSizeInPixels/2, this.y+cellSizeInPixels/2, cellSizeInPixels/2)
                //mySketch.text(this.iterator, this.x+cellSizeInPixels/2, this.y+cellSizeInPixels/2);

            }
            // mySketch.text(this.getIndex(), this.x+cellSizeInPixels/2, this.y+cellSizeInPixels/2);
        };

        this.getNeighbour = function(direction){
                let index =  this.getIndex();
                let neighbourIndex = index + directions(direction);
                // first row has no cells NORTH
                if (index < cols && direction === 'N'){
                    return null;
                }
                // last row has no cells SOUTH
                if (index / cols >= rows-1 && direction === 'S'){
                    return null;
                }
                //first column has no cells west
                if (index % cols === 0 && direction === 'W'){
                    return null;
                }
                //last column has no cells east
                if (index % cols === cols-1 && direction === 'E'){
                    return null;
                }
                if (0 <= neighbourIndex && neighbourIndex < grid.length) {
                    return grid[neighbourIndex];
                }
                return null;

        };

        this.getIndex = function(){
            return (this.row*cols)+this.col; sketch.noLoop()
        };

        this.drawWall = function (wall) {
            switch (wall) {
                case 'N':
                    scribble.scribbleLine(this.x,
                        this.y,
                        this.x + cellSizeInPixels,
                        this.y);
                    break;
                case 'E':
                    scribble.scribbleLine(this.x + cellSizeInPixels,
                        this.y,
                        this.x + cellSizeInPixels,
                        this.y + cellSizeInPixels);
                    break;
                case 'S':
                    scribble.scribbleLine(this.x,
                        this.y + cellSizeInPixels,
                        this.x + cellSizeInPixels,
                        this.y + cellSizeInPixels);
                    break;
                case 'W':
                    scribble.scribbleLine(this.x,
                        this.y,
                        this.x,
                        this.y + cellSizeInPixels);
            }
        };
    }

    let directions = function(direction) {
        switch (direction) {
            case 'N':
                return -cols;
            case 'E':
                return 1;
            case 'S':
                return cols;
            case 'W':
                return -1;
        }
    };

    let opposite = {
        N: 'S',
        E: 'W',
        S: 'N',
        W: 'E'
    };



        function carve(cell){
            //choose random direction
            //check if cell is valid and unvisited
            //remove walls
            //repeat
            cell.visited = true;
            cell.iterator = manualIterator;
            manualIterator++;
            let randomlyOrderedDirections = shuffle(['N', 'E', 'S', 'W']);
            for (let i = 0; i < randomlyOrderedDirections.length; i++){
                let direction = randomlyOrderedDirections[i];
                let neighbour = cell.getNeighbour(direction);
                if (neighbour && !neighbour.visited){
                    cell.walls[direction] = false;
                    neighbour.walls[opposite[direction]] = false;
                    // steps.push([cell, neighbour, randomlyOrderedDirections[i],]);
                    carve(neighbour);
                }
            }
        }

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
};