'use strict';

var app = angular.module('jlg-prod', []);

app.config(['$compileProvider', function ($compileProvider) {
	// comment this to go in debug mode (default)
	$compileProvider.debugInfoEnabled(false);
}]);
