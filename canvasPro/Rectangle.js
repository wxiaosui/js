/**
 * Created by mszz on 2016/11/29.
 */
window.xiaosui = window.xiaosui ||{};
(function(){
    function Rectangle(width, height) {
        this._width = width;
        this._height = height;
        xiaosui.Shape.call(this);
    }
    Rectangle.prototype = new xiaosui.Shape();
    var p = Rectangle.prototype;
    p.onDraw = function (context) {
        context.fillRect(0, 0, this.width, this.height);
    };
    Object.defineProperties(p, {
        width: {
            set: function (value) {
                this._width = value;
            },
            get: function () {
                return this._width;
            }
        },
        height: {
            set: function (value) {
                this._height = value;
            },
            get: function () {
                return this._height;
            }
        }
    });
    xiaosui.Rectangle = Rectangle;
})()