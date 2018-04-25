var maxNumberOfNodes = 10;
var nodes = [];

var initMaze = function(callback){
    for (var row = 0; row < maxNumberOfNodes; row++) {
        for (var col = 0; col < maxNumberOfNodes; col++) {
            nodes.push([row, col, [1,2,4]]);
        }
    }
    callback(nodes);
};

initMaze(function(arr){
    console.log(arr);
    console.log('test');
    console.log(arr[1,1]);
});
