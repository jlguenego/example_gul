'use strict';


require('../bower_components/angular/angular-csp.css');
require('../bower_components/bootstrap/dist/css/bootstrap.css');
require('../bower_components/font-awesome/css/font-awesome.css');
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

var homeUrl = require('./tmpl/home.html');

var app = angular.module('mainApp', ['ngRoute', 'jlg-layout', 'jlg-user', 'jlg-contact', 'jlg-services']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	console.log('mainApp config');
	$locationProvider
		.html5Mode(true);

	$routeProvider
		.when('/', {
			templateUrl: homeUrl,
		})
		.otherwise({
			redirectTo: '/',
		});
}]);

// Just to look how much time take a digest cycle.
app.run(['$injector', function($injector) {
	var $rootScope = $injector.get('$rootScope');
	var $timeout = $injector.get('$timeout');

	function postDigest(callback) {
		var unregister = $rootScope.$watch(function() {
			unregister();
			$timeout(function() {
				callback();
				postDigest(callback);
			}, 0, false);
		});
	}

	postDigest(function() {
		console.log('end of digest');
	});

}]);

