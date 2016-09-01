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
 * Add routes 
 */
app.get('/status', function(req, res) {
	res.send({
		status: 'success'
	});
});

/**
 * Initialize the Sirena Integration Module
 */
var Sirena = require('./sirenaIntegration');
var api = new Sirena({
	apiKey: config.apiKey,
	isQuery: true,
	apiUrl: config.apiUrl
});
integration(app, api);

/**
 * Start the Node JS App
 */
app.listen(Number(process.env.PORT) || config.port, function() {
	console.log(
		'=================================\n' +
		'App    : Sirena API Integration\n' +
		'Port   : ' + config.port + '\n' +
		'=================================\n');
});
