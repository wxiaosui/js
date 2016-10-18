/**
 * Created by mszz on 2016/10/8.
 */
window.ucai = window.ucai || {};
(function () {

    var handlers = [];

    ucai.renderHandler = {
        addHandler:function (handler) {
            handlers.push(handler);
        },
        removeHandler:function (handler) {
            var index = handlers.indexOf(handler)
        }
    }

})();