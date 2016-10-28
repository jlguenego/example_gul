(function() {
	'use strict';

	var app = angular.module('jlg-services', []);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		console.log('jlg-user config');
		$locationProvider
			.html5Mode(true);

		$routeProvider
			.when('/services', {
				templateUrl: 'jlg-services/tmpl/services.html',
			})
			.when('/services/usability', {
				templateUrl: 'jlg-services/tmpl/usability.html',
			})
			.when('/services/angular', {
				templateUrl: 'jlg-services/tmpl/angular.html',
			});
	}]);
})();
