/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"SAPUI5-TEST/SAPUI5-TEST/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});