my_canvas = document.getElementById("canvas");
lol = my_canvas.getContext("2d");

/* circle
lol.beginPath()
lol.strokeStyle = "white";
lol.lineWidth = 3;
// arc(x,y,radius, startangle, endangle)
//Math.PI = 180
lol.arc(100, 200, 40, 0, 2 * Math.PI);
lol.stroke();

*/

width = screen.width;

new_width = screen.width - 70;
new_height = screen.height - 300;

if (width < 992) {

    document.getElementById("canvas").width = new_width;
    document.getElementById("canvas").height = new_height;
    document.body.style.overflow = "hidden";
}




mouseEvent = "";

last_x = 0;
last_y = 0;
current_x = 0;
current_y = 0;
last_touch_x = 0;
last_touch_y = 0;
current_touch_x = 0;
current_touch_y = 0;


my_canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {

    last_touch_x = e.touches[0].clientX - my_canvas.offsetLeft;
    last_touch_y = e.touches[0].clientY - my_canvas.offsetTop;
    color = document.getElementById("color").value;
    brush_width = document.getElementById("width_brush").value;

}

my_canvas.addEventListener("touchmove", my_touchmove)

function my_touchmove(e) {

    current_touch_x = e.touches[0].clientX - my_canvas.offsetLeft;
    current_touch_y = e.touches[0].clientY - my_canvas.offsetTop;


   
    lol.beginPath();
    lol.strokeStyle = color;
    lol.lineWidth = brush_width;
    lol.moveTo(last_touch_x, last_touch_y);
    lol.lineTo(current_touch_x, current_touch_y);
    lol.stroke();

    last_touch_x = current_touch_x;
    last_touch_y = current_touch_y;
}







my_canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {

    mouseEvent = "my_mouseup";
}

my_canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {

    mouseEvent = "my_mouseleave";
}


my_canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    last_x = e.clientX - my_canvas.offsetLeft;
    last_y = e.clientY - my_canvas.offsetTop;
    color = document.getElementById("color").value;
    brush_width = document.getElementById("width_brush").value;
    mouseEvent = "my_mousedown";


}

my_canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e) {

    current_x = e.clientX - my_canvas.offsetLeft;
    current_y = e.clientY - my_canvas.offsetTop;

    if (mouseEvent == "my_mousedown") {

        lol.beginPath();
        lol.strokeStyle = color;
        lol.lineWidth = brush_width;
        lol.moveTo(last_x, last_y);
        lol.lineTo(current_x, current_y);
        lol.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}


function Clear() {
    lol.clearRect(0,0,lol.canvas.width,lol.canvas.height);


}
/*

function circle(x,y){
    lol.beginPath()
    lol.strokeStyle = "black";
    lol.lineWidth = 3;
    // arc(x,y,radius, startangle, endangle)
    //Math.PI = 180



    lol.arc(x,y, 40, 0, 2 * Math.PI);
    lol.stroke();

}*/