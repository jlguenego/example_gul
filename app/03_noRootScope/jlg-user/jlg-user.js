(function() {
	'use strict';

	var signinUrl = require('./tmpl/signin.html');
	var signupUrl = require('./tmpl/signup.html');
	var signoutUrl = require('./tmpl/signout.html');

	var app = angular.module('jlg-user', []);

	app.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/signin', {
				templateUrl: signinUrl
			})
			.when('/signup', {
				templateUrl: signupUrl
			})
			.when('/signout', {
				templateUrl: signoutUrl
			});
	}]);
})();
