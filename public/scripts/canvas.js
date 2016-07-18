window.app = (function drawToTheCanvas () {
    "use strict";

    var mixboard = window.document.getElementById("mix-board"),
        mentoring = {
        getKeys: function (numberOfKeys) {
            var keyWidth = 100,
                keyHeight = 100,
                keyColor = "tomato",
                keys = [],
                currentKeyIndex = 0;

            while (currentKeyIndex < numberOfKeys) {
                keys.push({
                    id: currentKeyIndex,
                    x: (currentKeyIndex * keyWidth) + 10,
                    y: 0,
                    width: keyWidth,
                    height: keyHeight,
                    backgroundColor: keyColor
                });

                currentKeyIndex++;
            }

            return keys;
        },
        handleKeyClicked: function (keyId) {
            // https://developers.google.com/web/fundamentals/primers/promises/
            return new Promise(function(resolve, reject) {
                // resolve promise if even, reject if odd after random amount of time
                var maxTime = 5,
                    callbackInMilliseconds = Math.random() * maxTime * 1000,
                    isEven = (callbackInMilliseconds % 2 < 1) ? true : false;

                window.console.log("Promise will settle in this many milliseconds: " + callbackInMilliseconds);

                window.setTimeout(function () {
                    if (isEven) {
                        resolve("Success after this many milliseconds: " + callbackInMilliseconds);
                    }
                    else {
                        reject(new Error("It broke after this amount of time: " + callbackInMilliseconds));
                    }
                }, callbackInMilliseconds);
            });
        },
        drawKey: function (configs) {
            var canvas = window.document.createElement("canvas"),
                context = canvas.getContext("2d");

            context.fillStyle = configs.backgroundColor;
            context.fillRect(configs.x, configs.y, configs.width, configs.height);

            canvas.style.width = configs.width + "px";

            canvas.addEventListener("click", function () {
                var promise = mentoring.handleKeyClicked(configs.id);

                window.console.log("Key clicked with id: " + configs.id);

                promise.then(function (data) {
                    window.console.log(data);
                }).catch(function (data) {
                    window.console.log(data);
                });
            });

            mixboard.appendChild(canvas);
        },
        drawKeys: function (keys) {
            keys.forEach(function (key) {
                mentoring.drawKey(key);
            });
        },
        drawMixboardWithNumberOfKeys: function (numberOfKeys) {
            var keys = mentoring.getKeys(numberOfKeys);

            mentoring.drawKeys(keys);
        }
    };

    return mentoring;
}());
