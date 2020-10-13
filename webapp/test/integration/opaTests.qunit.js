/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"SAPUI5-TEST/SAPUI5-TEST/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});