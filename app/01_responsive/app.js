(function() {
	'use strict';

	var app = angular.module('mainApp', ['ngRoute', 'jlg-layout', 'jlg-user', 'jlg-contact', 'jlg-services']);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		console.log('mainApp config');
		$locationProvider
			.html5Mode(true);

		$routeProvider
			.when('/', {
				templateUrl: 'tmpl/home.html',
			})
			.otherwise({
				redirectTo: '/',
			});
	}]);

	app.run(['$injector', function($injector) {
		console.log('mainApp run');
		var $rootScope = $injector.get('$rootScope');
		var $location = $injector.get('$location');

		$rootScope.goto = function(url) {
			console.log('goto', arguments);
			$location.path(url);
		};
	}]);
})();
