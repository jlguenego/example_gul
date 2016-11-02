'use strict';

var Hashes = require('jshashes');

var signinUrl = require('./tmpl/signin.html');
var signupUrl = require('./tmpl/signup.html');
var signupSuccessUrl = require('./tmpl/signup/success.html');
var signoutUrl = require('./tmpl/signout.html');

var app = angular.module('jlg-user', []);

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/signin', {
			templateUrl: signinUrl
		})
		.when('/signup', {
			templateUrl: signupUrl,
		})
		.when('/signup/success', {
			templateUrl: signupSuccessUrl,
		})
		.when('/signout', {
			templateUrl: signoutUrl
		});
}]);

app.value('hash', function(email, password) {
	var SHA256 = new Hashes.SHA256; // on crée la variable de cryptage
	return SHA256.hex(password + email + password);
});

app.controller('JLGUserCtrl', function($scope, $http, hash, navigate) {
	'ngInject';
	var ctrl = this;
	ctrl.getDisplayName = function() {
		return ctrl.account.content.firstname;
	};
	ctrl.signup = function() {
		console.log('signup', arguments);

		var data = {
			email: ctrl.signupData.email,
			// permet de crypter le password
			password: hash(ctrl.signupData.email, ctrl.signupData.password),
			content: {
				lastname: ctrl.signupData.lastname,
				firstname: ctrl.signupData.firstname,
				address: ctrl.signupData.address
			}
		};
		$http({
			url: '/ws/signup',
			method: 'POST',
			data: data,
			// for php only
			// headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).then(function(response) {
			console.log('response', response);
			if (response.data.status === 'ko') {
				ctrl.errorMsg = response.data.errorMsg;
				ctrl.account = undefined;
				return;
			}
			ctrl.account = data;
			navigate.goto('signup/success');
		}).catch(function(error) {
			console.error('error', error);
			ctrl.errorMsg = 'Technical Error. Sorry. Try later.';
			ctrl.account = undefined;
		});
	};
});

