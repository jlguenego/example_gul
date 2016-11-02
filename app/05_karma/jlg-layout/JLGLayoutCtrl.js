'use strict';

module.exports = function JLGLayoutCtrl($scope, $element, $attrs, $transclude, $injector) {
	'ngInject';
	console.log('ctrl JLGLayoutCtrl', arguments);

	var $location = $injector.get('$location');
	var navigate = $injector.get('navigate');

	this.name = $attrs.name || 'ctrl';
	$scope[this.name] = this;
	console.log('$scope[controllerName]', $scope[this.name]);
	var ctrl = $scope[this.name];

	ctrl.isMenu = false;
	ctrl.toggleMenu = function() {
		console.log('toggleMenu', arguments);
		ctrl.isMenu = !ctrl.isMenu;
	};

	ctrl.goto = function(url) {
		console.log('goto', arguments);
		navigate.goto(url);
	};

	ctrl.refresh = function() {
		console.log('refresh', arguments);
		ctrl.isSmallScreen = window.innerWidth < 768;
		ctrl.isMobile = window.mobilecheck() || ctrl.isSmallScreen;
		ctrl.isLandscape = window.innerWidth > window.innerHeight;
		console.log('ctrl.isSmallScreen', ctrl.isSmallScreen);
		console.log('ctrl.isMobile', ctrl.isMobile);
		console.log('ctrl.isLandscape', ctrl.isLandscape);
	};

	window.onresize = function(event) {
		ctrl.refresh();
		$scope.$apply();
	};
	ctrl.refresh();
};


