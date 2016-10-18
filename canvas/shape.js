/**
 * Created by mszz on 2016/10/8.
 */
window.ucai = window.ucai || {};
(function () {
   
    function Shape() {
        this._x = 0;
        this._y = 0;
        this._rotation = 0;
    }

    var p = Shape.prototype;

    Object.defineProperties(p,{
        x:{
            set:function (value) {
                this._x = value;
            },
            get:function () {
                return this._x;
            }
        },
        y:{
            set:function (value) {
                this._y = value;
            },
            get:function (value) {
                return this._y;
            }
        },
        color:{
            set:function (value) {
                this._color = value;
            },
            get:function () {
                return this._color;
            }
        },
        rotation:{
            set:function (value) {
                this._rotation = value;
            },
            get:function (value) {
                return this._rotation;
            }
        }
    });

    p.render = function (context) {
        this.onUpdate();
        context.save();
        context.transaction(this.x,this.y);
        context.rotate(this._rotation);
        context.fillStyle = this.color;
        this.onDraw(context);
    };

    p.onDraw = function (context) {
    };

    p.onUpdate = function () {
    };

    ucai.Shape = Shape;
    
})();