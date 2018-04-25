var holder_bgColors = ['#85afc5', '#A87b5d', '#9f9da2'];
var holder_fgColors = ['#181818', '#f1f7fa'];

var holder_pickRandomColor = function(colors){
    return colors[Math.floor(Math.random() * colors.length)];
}

Holder.addTheme("coffeeTable", {
    bg: '#85afc5', fg: '#f1f7fa', size: 12
});

// $('.card-img-top').each(function(){
//     let attr = $(this).attr('data-src');
//
//     if (typeof attr !== typeof undefined && attr !== false) {
//         console.log(`holder.js/100px225?theme=coffeeTable&amp;
//                     bg=${holder_pickRandomColor(holder_bgColors)}$amp;
//                     fg=${holder_pickRandomColor(holder_fgColors)}&amp;
//                     text=Placeholder`);
//         $(this).attr('data-src',
//             `holder.js/100px225?theme=coffeeTable&amp;bg=${holder_pickRandomColor(holder_bgColors)}$amp;fg=${holder_pickRandomColor(holder_fgColors)}&amp;text=Placeholders`);
//         // Holder.run({images:".card-img-top"});
//     }
// });