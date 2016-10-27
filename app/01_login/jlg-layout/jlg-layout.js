(function() {
	'use strict';

	var app = angular.module('jlg-layout', []);

	app.directive('jlgLogo', function() {
		return {
			link: function(scope, element, attrs) {
				element.html('<img src="' + attrs.src + '" />');
			}
		}
	});

	app.directive('jlgUtilitiesItem', function() {
		return {
			template: '<button class="btn btn-default btn-success" ng-transclude></button>',
			transclude: true
		}
	});
	
})();
