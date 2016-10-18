/**
 * Created by mszz on 2016/10/8.
 */
(function () {

    var canvas;

    var context;

    var rect;

    function createCanvas() {
        canvas = document.createElement("canvas")
        canvas.width = 400;
        canvas.height = 300;
        document.body.appendChild(canvas);

        context = canvas.getContext("2d");
    }
    
    function clearCanvas() {
        context.clearRect(0,0,canvas.width,canvas.height)
    }
    
    function createRectangle() {
        rect = new ucai.Rectangle(100,100);
        rect.x = 100;
        rect.y = 100;
        rect.color = "#ff9900";
        rect.render(context);

        //画圆；
        // var circle = new ucai.Circle(50);
        // circle.color = "#ff0000";
        // circle.x = 50;
        // circle.y = 50;
        // circle.render(context);

    }

    function render() {
        clearCanvas();
        rect.render(context)
    //
    }

    // function move() {
    //     var id = setInterval(function () {
    //         rect.x++;
    //
    //         clearCanvas();
    //         rect.render(context);
    //
    //         if (rect.x > 200) {
    //             clearInterval(id);
    //         }
    //     }, 20);
    // }
    
    function init() {
        createCanvas();
        createRectangle();
        render();
        // move();
    }

    init();
})();