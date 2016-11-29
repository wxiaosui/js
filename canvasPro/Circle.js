/**
 * Created by mszz on 2016/11/29.
 */
window.xiaosui = window.xiaosui ||{};
(function(){
    function Circle(r) {
        this._r = r;
    }
    var p = Circle.prototype = new xiaosui.Shape();
    p.onDraw = function (context) {
        context.beginPath();
        context.arc(0, 0, this._r, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    };
    xiaosui.Circle = Circle;
})();