'use strict';

module.exports = 'JLGLayoutCtrl';

var app = angular.module('jlg-layout');
app.controller(module.exports, ['$injector', '$scope', function JLGLayoutCtrl($injector, $scope) {
	console.log('ctrl JLGLayoutCtrl', arguments);

	var $location = $injector.get('$location');

	$scope.isMenu = false;
	$scope.toggleMenu = function() {
		console.log('toggleMenu', arguments);
		$scope.isMenu = !$scope.isMenu;
	};

	$scope.goto = function(url) {
		console.log('goto', arguments);
		$location.path(url);
	};

	$scope.refresh = function() {
		console.log('refresh', arguments);
		$scope.isSmallScreen = window.innerWidth < 768;
		$scope.isMobile = window.mobilecheck() || $scope.isSmallScreen;
		$scope.isLandscape = window.innerWidth > window.innerHeight;
		console.log('$scope.isSmallScreen', $scope.isSmallScreen);
		console.log('$scope.isMobile', $scope.isMobile);
		console.log('$scope.isLandscape', $scope.isLandscape);
	};

	window.onresize = function(event) {
		$scope.refresh();
		$scope.$apply();
	};
	$scope.refresh();
}]);


