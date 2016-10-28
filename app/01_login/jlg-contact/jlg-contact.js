(function() {
	'use strict';

	var app = angular.module('jlg-contact', []);

	app.config(['$routeProvider', function($routeProvider) {
		console.log('jlg-contact config');

		$routeProvider
			.when('/contact', {
				templateUrl: 'jlg-contact/tmpl/contact.html',
			});
	}]);
})();
