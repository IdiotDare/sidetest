/*
var canvas = document.querySelector('canvas');

canvas.width = 100%;
canvas.height = 100%;
*/
/*
function scrollWrapper(x, y){
    var wrapper = document.getElementById('wrapper');  
    wrapper.scrollTop = x;
    wrapper.scrollLeft = y;
}
*/
function scrollWrapper(x){
    var wrapper = document.getElementById('wrapper');  
    wrapper.scrollLeft = x;
}

var movement = 0
if(event.37){
    var movement = movement+3;
    scrollWrapper(movement);
}
