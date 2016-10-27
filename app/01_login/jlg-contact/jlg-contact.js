(function() {
	'use strict';

	var app = angular.module('jlg-contact', []);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		console.log('jlg-user config');
		$locationProvider
			.html5Mode(true);

		$routeProvider
			.when('/contact', {
				templateUrl: 'jlg-contact/tmpl/contact.html',
			});
	}]);
})();
