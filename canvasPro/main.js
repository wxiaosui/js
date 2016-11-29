/**
 * Created by mszz on 2016/11/29.
 */
(function(){
    var CANVAS_WIDTH = 400, CANVAS_HEIGHT = 300;
    function createCanvas() {
        canvas = document.createElement("canvas");
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        document.body.appendChild(canvas);
        context = canvas.getContext("2d");
    }
    function clearCanvas() {
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);   //清除画板
    }
    function drawRect() {
        var rect = new xiaosui.Rectangle(100, 100);
        rect.x = 100;
        rect.y = 100;
        rect.color = "#efefef";
        rect.render(context);
        var circle = new xiaosui.Circle(50);
        circle.color = "#ff4400";
        circle.x = 50;
        circle.y = 50;
        circle.render(context);
    }
    function init() {
        createCanvas();
        drawRect();
    }
    init();
})();