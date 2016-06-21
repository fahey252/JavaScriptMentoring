window.console.log("Starting tests");

(function tests(){
	"use strict";

	var successfulTests = 0,
		totalTests = 2;

	function testsGettingKeys() {
		var numberOfKeysToDraw = 4,
			keys = window.app.getKeys(numberOfKeysToDraw),
			assertion = keys.length === numberOfKeysToDraw;

		window.console.log(assertion + " - Model: testing key creatation");

		successfulTests += assertion ? 1 : 0;
	}

	function testKeysToDOM() {
		var numberOfKeysToDraw = 4,
			keyConfigs = [{
				id: 0,
				x: 100,
				y: 0,
				width: 100,
				height: 100,
				backgroundColor: "tomato"
			}, { 
				id: 0,
				x: 210,
				y: 0,
				width: 100,
				height: 100,
				backgroundColor: "green"
			}],
			keys = window.app.drawKeys(keyConfigs),
			keysExists = window.document.getElementsByTagName("canvas").length === 2;

		window.console.log(keysExists + " - View: testing key creatation");

		successfulTests += keysExists ? 1 : 0;
	}

	testsGettingKeys();
	testKeysToDOM();

	window.console.log("Tests complete. " + successfulTests + " of " + totalTests + " tests successful.");
}());
