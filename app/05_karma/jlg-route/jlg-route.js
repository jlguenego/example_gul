'use strict';

var app = angular.module('jlg-route', []);

app.service('navigate', function Navigate($location) {
	'ngInject';
	this.goto = function(url) {
		console.log('navigate to ', url);
		$location.path(url);
	};
});
