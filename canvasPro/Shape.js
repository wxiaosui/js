/**
 * Created by mszz on 2016/11/29.
 */
window.xiaosui = window.xiaosui ||{};
(function(){
    function Shape() {
    }
    var p = Shape.prototype;
    Object.defineProperties(p, {
        x: {
            set: function (value) {
                this._x = value;
            },
            get: function () {
                return this._x;
            }
        },
        y: {
            set: function (value) {
                this._y = value;
            },
            get: function () {
                return this._y;
            }
        },
        color: {
            set: function (value) {
                this._color = value;
            },
            get: function () {
                return this._color;
            }
        }
    });
    p.render = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.fillStyle = this.color;
        this.onDraw(context);
        context.restore();
    };
    p.onDraw = function (context) {
    };
    xiaosui.Shape = Shape;
})();