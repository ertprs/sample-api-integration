/**
 * Load Settings
 */
var config = require('./_config');

/**
 * Load Dependencies
 */
var express = require('express');
var app = express();
var integration = require('./customIntegration');

/**
 * Initialize the Sirena Integration Module
 */
var Sirena = require('sirena-api-integration-node-js');
var api = new Sirena({
	apiKey: config.apiKey,
	isQuery: true,
	apiUrl: config.apiUrl
});

/**
 * Call the "preInit" fn from the customIntegration file, if it exists.
 */
if (integration.preInit && typeof integration.preInit === 'function') {
	integration.preInit(app, api);
}

/**
 * Start the Node JS App
 */
app.listen(Number(process.env.PORT) || config.port, function() {
	console.log(
		'=================================\n' +
		'App    : Sirena API Integration\n' +
		'Port   : ' + config.port + '\n' +
		'=================================\n');

	/**
	 * Call the "postInit" fn from the customIntegration file, if it exists.
	 */
	if (integration.postInit && typeof integration.postInit === 'function') {
		integration.postInit(app, api);
	}

});
