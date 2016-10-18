/**
 * Created by mszz on 2016/10/9.
 */
(function () {

    var SRC = [
        "Shape.js",
        "Text.js",
        "button.js",
        "main.js"
    ];

    for (var i = 0; i < SRC.length; i++) {
        var file = SRC[i];

        /**
         *
         * @type {HTMLScriptElement}
         */
        var script = document.createElement("script");
        script.async = false;
        script.src = file;
        document.body.appendChild(script);
    }
})();