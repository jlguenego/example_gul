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
			});
	}]);
})();
