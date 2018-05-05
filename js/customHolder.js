import Holder from 'holderjs'

const holder_bgColors = ['#85afc5', '#A87b5d', '#9f9da2'];
const holder_fgColors = ['#181818', '#f1f7fa'];

let holder_color_sets = [];

holder_color_sets[0] = {bgColor: '#85afc5', fgColor: '#f1f7fa', fill: [255,255,0,80], highlight: [0,255,0,80]};
holder_color_sets[1] = {bgColor: '#A87b5d', fgColor: '#181818', fill: [238,235,211,100], highlight: [247,179,72,100]};
holder_color_sets[2] = {bgColor: '#9f9da2', fgColor: '#f1f7fa', fill: [0,0,0,100], highlight: [214,73,51,150]};


let holder_pickRandomColor = function(colors){
    return colors[Math.floor(Math.random() * colors.length)];
};

let holder_pickRandomColorSet = function() {
    return holder_color_sets[Math.floor(Math.random()*holder_color_sets.length)];
};

let holder_getColorSets = function () {
  return holder_color_sets;
}



Holder.addTheme("coffeeTable", {
    bg: '#85afc5', fg: '#f1f7fa', size: 12
});

export {
  holder_pickRandomColor,
  holder_pickRandomColorSet,
  holder_getColorSets
}
