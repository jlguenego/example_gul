(function() {
	'use strict';

	var app = angular.module('jlg-layout', []);

	app.directive('jlgLogo', function() {
		return {
			link: function(scope, element, attrs) {
				element.html('<img src="' + attrs.src + '" />');
			}
		};
	});

	app.directive('jlgUtilitiesItem', function() {
		return {
			template: '<button class="btn btn-default btn-success" ng-transclude></button>',
			transclude: true
		};
	});

	app.directive('jlgMenu', function() {
		return {
			link: function(scope, element, attrs) {
				console.log('link jlgMenu', arguments);
				// look at the url and deduct which item is active
			}

		};
	});

	app.directive('jlgMenuItem', ['$injector', function($injector) {
		return {
			link: function(scope, element, attrs) {
				console.log('link jlgMenu', arguments);
				// look at the url and deduct which item is active
			}

		};
	}]);
})();
