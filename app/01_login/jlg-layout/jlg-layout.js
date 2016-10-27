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
			compile: function(tElement, tAttrs, transclude) {
				console.log('compile jlgMenuItem', arguments);
				var href = tAttrs.href;
				tElement.attr('ng-click', 'goto(\'' + href + '\')');
				var link = function(scope, element, attrs) {
					console.log('link jlgMenuItem', arguments);
					// look at the url and deduct which item is active
					scope.$on('$routeChangeStart', function(event, next, current) {
						console.log('$routeChangeStart', arguments);

						var toUrl = next.originalPath;
						console.log('$routeChangeStart', toUrl);
						if (toUrl === attrs.href) {
							element.addClass('active');
						} else {
							element.removeClass('active');
						}
					});
				};
				return link;
			}
		};
	}]);
})();
