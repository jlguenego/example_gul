'use strict';

//<link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.css" />
require('../bower_components/bootstrap/dist/css/bootstrap.css');
require('../bower_components/font-awesome/css/font-awesome.css');
require('../bower_components/angular/angular-csp.css');
require('./jlg-layout/jlg-layout.css');
require('./style.css');

var $ = require('../bower_components/jquery/dist/jquery.js');
window.jQuery = $;
window.$ = $;
require('../bower_components/bootstrap/dist/js/bootstrap.js');
require('../bower_components/angular/angular.js');
require('../bower_components/angular-route/angular-route.js');
require('./jlg-layout/jlg-layout.js');
require('./jlg-contact/jlg-contact.js');
require('./jlg-services/jlg-services.js');
require('./jlg-user/jlg-user.js');

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

