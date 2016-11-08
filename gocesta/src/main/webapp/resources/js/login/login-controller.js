/**
 * 
 */

yugaApp.controller('loginController', function($http,$rootScope,$location) {
	 this.credentials  = {};
	 this.reset = reset;
	 
	 
	 var authenticate = function(credentials, callback) {

		    var headers = credentials ? {authorization : "Basic "
		        + btoa(credentials.username + ":" + credentials.password)
		    } : {};

		   /* $http.post('login', {headers : headers},credentials).success(function(data) {
		      if (data.name) {
		        $rootScope.authenticated = true;
		      } else {
		        $rootScope.authenticated = false;
		      }
		      callback && callback();
		    }).error(function() {
		      $rootScope.authenticated = false;
		      callback && callback();
		    });*/
		    
		   /* $http.post('login', '', credentials)
		    .success(function(data, status, headers, config) {
		     authService.loginConfirmed(data);
		    }).error(function(data, status, headers, config) {
		     $rootScope.authenticationError = true;
		     Session.invalidate();
		    });*/
		    
		        $http.post('login', $.param(credentials), {
		          headers : {
		            "content-type" : "application/x-www-form-urlencoded"
		          }
		        }).success(function(data) {
		        	 if (data.name) {
		 		        $rootScope.authenticated = true;
		 		      } else {
		 		        $rootScope.authenticated = false;
		 		      }
		 		      callback && callback();
		        }).error(function(data) {
		        	  $rootScope.authenticated = false;
				      callback && callback();
		        })

	 }
	 
	 //authenticate();
	 
	 this.login = function() {
	      authenticate(this.credentials, function() {
	        if ($rootScope.authenticated) {
	          $location.path("/");
	          this.error = false;
	        } else {
	          $location.path("/login");
	          this.error = true;
	        }
	      });
	  };
 function reset(){
	  this.user = {};
     $scope.register.$setPristine(); //reset Form
 }
});