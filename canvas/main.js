/**
 * Created by mszz on 2016/10/8.
 */
(function () {

    var canvas;

    var context;

    var rect;

    function createCanvas() {
        canvas = document.createElement("canvas");
        canvas.width = 400;
        canvas.height = 300;
        document.body.appendChild(canvas);
        context = canvas.getContext("2d");

        canvas.onclick = canvasEventHandler;
    }
    
    function canvasEventHandler(e){
        if (e.layerX > rect.x &&
            e.layerY > rect.y &&
            e.layerX < rect.x + rect.width &&
            e.layerY < rect.y + rect.height) {

            ucai.PropertyAnimation(rect, "x", 0, 300, 50);
        }

        console.log(e);
    }
    
    function clearCanvas() {
        context.clearRect(0,0,canvas.width,canvas.height)
    }
    
    function createRectangle() {
        rect = new ucai.Rectangle(100,100);
        // rect.x = 100;
        rect.y = 100;
        rect.color = "#ff9900";
        render(context);
    }

    function render() {
        ucai.renderHandler.runHandlers();

        clearCanvas();

        rect.render(context);

        requestAnimationFrame(render);
    }
    
    function init() {
        createCanvas();
        createRectangle();
        render();
    }

    init();
})();