var mazeSketch = function (sketch) {

    let scribble = new Scribble( sketch );

    let cellSizeInPixels = 30;
    let rows, cols;
    let grid = [];
    let bgcolor;
    let fgcolor;

    //template start
    sketch.windowResized = function () {
        sketch.defaultInitStuff();
        resetGrid();
    };

    sketch.preload = function(){
        bgcolor = holder_pickRandomColor(holder_bgColors);
        fgcolor = holder_pickRandomColor(holder_fgColors);
    };


    sketch.defaultInitStuff = function () {
        //TODO: make sketch agnostic about html page it will land on.
        var parentDiv =  document.getElementById('jumboid');
        var pwidth    =  parentDiv.offsetWidth * 0.95;
        var pheight   =  parentDiv.offsetHeight * 0.95;
        sketch.createCanvas(pwidth, pheight);

    };
    function initCanvas(){
        console.log('init');
        sketch.background(bgcolor);
        sketch.stroke(fgcolor);
        sketch.fill(255);
    }

    sketch.setup = function () {

        sketch.defaultInitStuff();
        initCanvas();
        scribble.roughness = 0.5;
        resetGrid();
        console.log(grid.length);
    };
    sketch.draw = function () {
    };

    function resetGrid(){
        grid.splice(0,grid.length);
        rows = Math.floor(sketch.height  / cellSizeInPixels);
        cols = Math.floor(sketch.width / cellSizeInPixels);
        initCanvas();
        for (let col = 0; col < cols;col++){
            for (let row = 0; row < rows;row++){
                let cell = new Cell(row, col);
                grid.push(cell);
                console.log('pushed');
            }
        }
        sketch.translate((sketch.width-cols*cellSizeInPixels)/2,(sketch.height-rows*cellSizeInPixels)/2);
        for (let cell = 0; cell < grid.length;cell++){
            grid[cell].show();
        }

    }

    function Cell(row, col){
        this.x = col*cellSizeInPixels;
        this.y = row*cellSizeInPixels;
        this.walls = {top: true, right: true, bottom: true, left: true};

        this.show = function(){
            for (wall in this.walls){
                if (this.walls[wall]) {
                    this.drawWall(wall);
                }
            }
        };

        this.drawWall = function (wall){
            switch(wall){
                case 'top':
                    scribble.scribbleLine(this.x,
                                this.y,
                                this.x+cellSizeInPixels,
                                this.y);
                    break;
                case 'right':
                    scribble.scribbleLine(this.x+cellSizeInPixels,
                                this.y,
                                this.x+cellSizeInPixels,
                                this.y+cellSizeInPixels);
                    break;
                case 'bottom':
                    scribble.scribbleLine(this.x,
                                this.y+cellSizeInPixels,
                                this.x+cellSizeInPixels,
                                this.y+cellSizeInPixels);
                    break;
                default: //left
                    scribble.scribbleLine(this.x,
                                this.y,
                                this.x,
                                this.y+cellSizeInPixels);
            }
        }

    }
};