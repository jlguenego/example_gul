(function() {
	'use strict';

	var servicesUrl = require('./tmpl/services.html');
	var usabilityUrl = require('./tmpl/usability.html');
	var angularUrl = require('./tmpl/angular.html');

	var app = angular.module('jlg-services', []);

	app.config(['$routeProvider', function($routeProvider) {
		console.log('jlg-services config');

		$routeProvider
			.when('/services', {
				templateUrl: servicesUrl,
			})
			.when('/services/usability', {
				templateUrl: usabilityUrl,
			})
			.when('/services/angular', {
				templateUrl: angularUrl,
			});
	}]);
})();
