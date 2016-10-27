(function() {
	'use strict';

	var app = angular.module('mainApp', ['ngRoute', 'jlg-layout', 'jlg-user']);
	
	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider
			.html5Mode(true);

		$routeProvider
			.when('/', {
				templateUrl: 'tmpl/home.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
	
})();
