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
		drawKey: function (configs) {
			var canvas = window.document.createElement("canvas"),
				context = canvas.getContext("2d");

			context.fillStyle = configs.backgroundColor;
			context.fillRect(configs.x, configs.y, configs.width, configs.height);

			canvas.style.width = configs.width + "px";

			canvas.addEventListener("click", function () {
				window.console.log("Key clicked with id: " + configs.id);
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
