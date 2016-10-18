/**
 * Created by mszz on 2016/10/8.
 */
window.ucai = window.ucai || {};

(function () {

    function Circle(r) {
        this._r = r;
    }

    var p = Circle.prototype = new ucai.Shape();

    p.onDraw = function (context) {
        context.beginPath();
        context.arc(0,0,this._r,0,Math.PI*2);
        context.fill();
        context.closePath();
    }

    ucai.Circle = Circle;
})();
