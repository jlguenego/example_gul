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
	
	// /xxx/yyy/zzz => /xxx
	var getTopDirectory = function(path) {
		return path.substring(0, path.substring(1).indexOf('/') + 1);
	};

	app.directive('jlgMenuItem', ['$injector', function($injector) {
		var $rootScope = $injector.get('$rootScope');
		return {
			compile: function compile(tElement, tAttrs, transclude) {
				console.log('compile jlgMenuItem', arguments);
				return function(scope, element, attrs) {
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
						console.log('toUrl', toUrl);
						console.log('getTopDirectory(toUrl)', getTopDirectory(toUrl));
						console.log('attrs.href', attrs.href);
						if (getTopDirectory(toUrl) === attrs.href) {
							element.addClass('active-dir');
						} else {
							element.removeClass('active-dir');
						}
					});

					element.bind('click', function() {
						console.log('click', arguments);
						$rootScope.goto(attrs.href);
						scope.$apply();
					});

				};
			}
		};
	}]);
})();
