(function drawToTheCanvas () {
	"use strict";

	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d");

	context.fillStyle = "green";
	context.fillRect(10, 10, 100, 100);
}());
