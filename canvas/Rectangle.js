/**
 * Created by mszz on 2016/10/8.
 */
window.ucai = window.ucai || {};
(function () {
   function Rectangle(width,height) {
       this._width = width;
       this._height = height;

       ucai.Shape.call(this);
   }

    var p = Rectangle.prototype= new ucai.Shape();

    p.onDraw = function (context) {
        context.fillRect(0,0,this._width,this._height)
    };

    Object.defineProperties(Rectangle.prototype,{
        width:{
            set:function (value) {
                this._width = value;
            },
            get:function (value) {
                return this._width;
            }
        },
        height:{
            set:function (value) {
                this._height = value;
            },
            get:function (value) {
                return this._height;
            }
        }
    });

    ucai.Rectangle = Rectangle;
})();