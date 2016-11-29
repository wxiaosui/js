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
            if (index != -1) {
                handlers.splice(index, 1);
            }
        },
        runHandlers: function () {
            for (var i = 0; i < handlers.length; i++) {
                handlers[i]();
            }
        }
    }
})();