
window.ucai = window.ucai || {};

(function () {

    function PropertyAnimation(target, propertyName, from, to, frames) {
        var speed = (to - from) / frames;
        var frameCount = 0;

        var handler = function () {
            target[propertyName] += speed;

            frameCount++;

            if (frameCount >= frames) {
                ucai.renderHandler.removeHandler(handler);
                target[propertyName] = to;
            }
        };

        target[propertyName] = from;
        ucai.renderHandler.addHandler(handler);
    }

    ucai.PropertyAnimation = PropertyAnimation;
})();