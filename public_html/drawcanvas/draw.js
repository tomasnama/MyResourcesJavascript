var canvasID = null;
var canvas = null;
var context = null;
var lastTouchPoint = {x: 0, y: 0};
var eventDown = null;
var eventMove = null;
var eventUp = null;


function start() {
    canvasID = "canvas1";
    canvas = document.getElementById(canvasID);
    canvas.setAttribute('width', "600px");
    canvas.setAttribute('height', "600px");
    context = canvas.getContext("2d");
    context.strokeStyle = "#000000";
    context.lineWidth = 2;
    platform = navigator.platform;
    var doc = document;
    if (platform && platform.startsWith("Win")) {
        if (window.PointerEvent) {
            eventDown = "pointerdown";
            eventMove = "pointermove";
            eventUp = "pointerup";
        }
    } else if(platform && platform.startsWith("MacIntel")) {
        eventDown = "mousedown";
        eventMove = "mousemove";
        eventUp = "mouseup";
    } else {
        eventDown = "touchstart";
        eventMove = "touchmove";
        eventUp = "touchend";
    }
    canvas.addEventListener(eventDown, onCanvasTouchDown, false);
}

function onCanvasTouchDown(event) {
    if (event) {
        canvas.addEventListener(eventMove, onCanvasTouchMove, false);
        canvas.addEventListener(eventUp, onCanvasTouchUp, false);

        updateTouchPosition(event);
        draw(lastTouchPoint.x, lastTouchPoint.y, lastTouchPoint.x+0.1, lastTouchPoint.y+0.1);
    }

}

function onCanvasTouchMove(event) {
    var _prevX = lastTouchPoint.x;
    var _prevY = lastTouchPoint.y;
    updateTouchPosition(event);
    var _currX = lastTouchPoint.x;
    var _currY = lastTouchPoint.y;
    draw(_prevX, _prevY, _currX, _currY);
    //event.preventDefault();
}

function onCanvasTouchUp(event) {
    canvas.removeEventListener(eventMove, onCanvasTouchMove, false);
    canvas.removeEventListener(eventUp, onCanvasTouchUp, false);
}

function updateTouchPosition(event) {
    var rec = canvas.getBoundingClientRect();
    var platform = navigator.platform;
    if (platform && platform.startsWith("Win")) {
        lastTouchPoint.x = event.clientX - rec.left;
        lastTouchPoint.y = event.clientY - rec.top;
    } else {
        var target = event;
        if (typeof canvas.offset == 'function') {
            var offset = canvas.offset();
            lastTouchPoint.x = target.pageX - offset.left;
            lastTouchPoint.y = target.pageY - offset.top;
        } else {
            lastTouchPoint.x = target.pageX - canvas.offsetLeft;
            lastTouchPoint.y = target.pageY - canvas.offsetTop;
        }
    }
}

function draw(_prevX, _prevY, _currX, _currY) {
    context.beginPath();
    context.moveTo(_prevX, _prevY);
    context.lineTo(_currX, _currY);
    console.log(_prevX +" "+ _prevY +" "+ _currX +" "+ _currY);
    context.stroke();
    context.closePath();
}

start();



