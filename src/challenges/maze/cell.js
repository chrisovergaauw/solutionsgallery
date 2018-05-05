/* eslint-disable */
function Cell(mySketch, col, row) {
  this.col = col
  this.row = row
  this.x = col * mySketch.cellSizeInPixels
  this.y = row * mySketch.cellSizeInPixels
  this.walls = {N: true, E: true, S: true, W: true}
  this.visited = false

  this.show = function () {
    for (let wall in this.walls) {
      if (this.walls[wall]) {
        mySketch.stroke(mySketch.fgcolor)
        this.drawWall(wall)
      }
    }
    if (this.visited) {
      mySketch.noStroke()
      mySketch.fill(mySketch.fillColor)
      mySketch.rect(this.x, this.y, mySketch.cellSizeInPixels, mySketch.cellSizeInPixels)

    }
  }

  this.highlight = function () {
    mySketch.noStroke()
    mySketch.fill(mySketch.highlight)
    mySketch.rect(this.x, this.y, mySketch.cellSizeInPixels, mySketch.cellSizeInPixels)

  }

  this.getNeighbour = function () {
    let neighbours = []

    let NORTH = mySketch.grid[mySketch.getIndex(col, row - 1)]
    let EAST = mySketch.grid[mySketch.getIndex(col + 1, row)]
    let SOUTH = mySketch.grid[mySketch.getIndex(col, row + 1)]
    let WEST = mySketch.grid[mySketch.getIndex(col - 1, row)]

    if (NORTH && !NORTH.visited) {
      neighbours.push(NORTH)
    }
    if (EAST && !EAST.visited) {
      neighbours.push(EAST)
    }
    if (SOUTH && !SOUTH.visited) {
      neighbours.push(SOUTH)
    }
    if (WEST && !WEST.visited) {
      neighbours.push(WEST)
    }

    if (neighbours.length > 0) {
      return neighbours[Math.floor(mySketch.random(0, neighbours.length))]
    } else {
      return undefined
    }
  }

  this.drawWall = function (wall) {
    switch (wall) {
      case 'N':
        mySketch.scribble.scribbleLine(this.x,
          this.y,
          this.x + mySketch.cellSizeInPixels,
          this.y)
        break
      case 'E':
        mySketch.scribble.scribbleLine(this.x + mySketch.cellSizeInPixels,
          this.y,
          this.x + mySketch.cellSizeInPixels,
          this.y + mySketch.cellSizeInPixels)
        break
      case 'S':
        mySketch.scribble.scribbleLine(this.x,
          this.y + mySketch.cellSizeInPixels,
          this.x + mySketch.cellSizeInPixels,
          this.y + mySketch.cellSizeInPixels)
        break
      case 'W':
        mySketch.scribble.scribbleLine(this.x,
          this.y,
          this.x,
          this.y + mySketch.cellSizeInPixels)
    }
  }
}

export default Cell
