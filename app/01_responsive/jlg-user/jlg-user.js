(function() {
	'use strict';

	var app = angular.module('jlg-user', []);
	
	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		console.log('jlg-user config');
		$locationProvider
			.html5Mode(true);

		$routeProvider
			.when('/signin', {
				templateUrl: 'jlg-user/tmpl/signin.html'
			})
			.when('/signup', {
				templateUrl: 'jlg-user/tmpl/signup.html'
			})
			.when('/signout', {
				templateUrl: 'jlg-user/tmpl/signout.html'
			});
	}]);
})();
