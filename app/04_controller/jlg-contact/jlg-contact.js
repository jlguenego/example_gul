(function() {
	'use strict';
	
	var contactUrl = require('./tmpl/contact.html');
	console.log('contactUrl', contactUrl);

	var app = angular.module('jlg-contact', []);

	app.config(['$routeProvider', function($routeProvider) {
		console.log('jlg-contact config');

		$routeProvider
			.when('/contact', {
				templateUrl: contactUrl,
			});
	}]);
})();
