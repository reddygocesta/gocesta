'use strict';

var gocestaApp = angular.module('gocesta',[ 'ngRoute' ])
.config(

		function($routeProvider, $httpProvider, $locationProvider) {

			//$locationProvider.html5Mode(true);

			$routeProvider.when('/', {
				templateUrl : 'resources/js/home/home.html',
				controller : 'homeController',
				controllerAs : 'controller'
			}).when('/register', {
				templateUrl : 'resources/js/signup/signup.html',
				controller : 'signupController',
				controllerAs : 'ctrl'
			}).when('/login', {
				templateUrl : 'resources/js/login/login.html',
				controller : 'loginController',
				controllerAs : 'login'
			}).otherwise('/');

			$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

});


