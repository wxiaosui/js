/**
 * Created by mszz on 2016/10/9.
 */
window.ucai = window.ucai || {};

(function () {

    function button(context,label) {
        ucai.Text.call(this, context, label);
    }

    var p = button.prototype = new ucai.Text();

    p.onDraw = function () {
        ucai.Text.prototype.onDraw.call(this);
    };

    ucai.button = button;
})();