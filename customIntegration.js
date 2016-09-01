/**
 * Integration file
 * This file receives the API Object as parameter. It integrates a preInit and postInit functions, 
 * called in different times of the app life cycle.
 * 
 * Using the API Object methods, it's possible to construct a custom integration that suit your 
 * needs. For more info, check this module repository: 
 * https://github.com/rodati/sirena-api-integration-node-js
 */

/**
 * The "preInit" fn will be called when the app is starting. 
 * It's the ideal place to set routes for your app. For example, you may want to check 
 * through a simple route if your app is alive. 
 * Example: 
 * 		function preInit(app, api) {
 * 			// Add a status route
 * 	 		app.get('/status', function(req, res) {
 * 		 		res.send({
 * 			 		status: 'success'
 * 		   		});
 * 	      	});
 *      }
 * 
 * @param  {object} app - Express Object, with all the methods from the express server
 * @param  {object} api - API Object, with all the methods from the API
 */
function preInit(app, api) {
	console.log('App is starting...');
}

/**
 * The "postInit" fn will be called just after the app has started. 
 * It's the ideal to set all the things you want to do when the app initializes.
 * For example, you may want to check what Active Subscriptions you have in the Sirena API
 * Example: 
 * 		function postInit(app, api) {
 *	  		api
 *	  			.getActiveSubscriptions()
 *		   		.then(function(response) {
 *			    	console.log('API Response:', response.body);
 *		      	}, function(rejectedReason) {
 *			      	console.log('Rejected reason:', reason.body);
 *		        })
 *		        .catch(function(error) {
 *			       	// Handle any error from all above steps 
 *			        console.log('Error :(', error);
 *		         })
 *		        .done();
 *  	}
 * 
 * @param  {object} app - Express Object, with all the methods from the express server
 * @param  {object} api - API Object, with all the methods from the API
 */
function postInit(app, api) {

	console.log('App has started. Ready!');

}

module.exports = {
	preInit: preInit,
	postInit: postInit
}
