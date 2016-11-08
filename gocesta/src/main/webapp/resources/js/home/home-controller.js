/**
 * 
 */

'use strict';
 
yugaApp.controller('homeController', ['$scope', '$http','$location','$window','$log','$rootScope', function($scope,$http,$location,$window,$log,$rootScope) {
	
    var self = this;
    self.user = {};
    self.users = [];
    self.submit = submit;
    self.reset = reset;
    self.logininfo = {username:"",password:""};
    self.changepass = {oldPassword:"",newPassword:""};
    self.changePassWordSubmit = changePassWordSubmit;
    
    $scope.getStateDataFromServer = function() {

	    $http({method: 'GET', url: 'states'}).
        success(function(data, status, headers, config) {
         	console.log("date inside get method"+data);
        	$scope.stateDatas = data;	        	
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });		    
    };		 
    
    $('#Confirm').click(function(){
    	
    	if($scope.ChangePasswordForm.$invalid){
    		return false;
    	}else{
    		changePassWordSubmit();
    	}
    });
 
    
    
    /*function createUser(user){
        UserService.createUser(user).
        then(function (response) {
        	if(response == 1){
        		 var url = "http://" + $window.location.host + "/YuGa/login";
        	        $log.log(url);
        	        $window.location.href = url;
        		reset();
        	}else{
        		
        	}
        		
            });
    }
    
    
      function forgotPassword(user){
    	  UserService.forgotPassword(user).
        then(function (response) {
        console.log("resonse:::"+response);
        
        if(response == 'success'){
       	 var url = "http://" + $window.location.host + "/YuGa/login";
	        $log.log(url);
	        $window.location.href = url;
        }else if(response == 'EmailInvitationFailed'){
        	$scope.message = "Email invitation failed.";
        }else{
        	$scope.message = "Email Address not Exit.";
        }
        
            });
    }
    */
    
 
    function submit() {
    	 
    	  if($scope.register.$invalid){
    		  return false;
		    }else{
		         //createUser(self.user);
		    }
        
    }
    
 
    $scope.forgotpasswordsubmit = function() {
  	//  forgotPassword(self.user);
    }
  
  function changePassWordSubmit(){

	//  changePassWord(self.user);
  }
  
 /* function changePassWord(user){
	  UserService.changePassWord(user).
	  then(function (response) {
		  console.log("response:::"+response);
		 if(response == 'success'){
		     		 var url = "http://" + $window.location.host + "/YuGa/login";
		     	        $log.log(url);
		     	        $window.location.href = url;
		     		
		     	}else if(response == 'passwordsSame'){
		     		$scope.message = "Please do not use the recent passwords,try with new password.";
		     		
		     	}else if(response== 'invalidOldPassword' ){
		     		$scope.message = "Invalid old password.";
		     	}else{
		 
		     		$scope.message = "Password already available in history. ";
		     		
		     	}
          });
  }*/
  
  
  
  function reset(){
	  self.user = {};
      $scope.register.$setPristine(); //reset Form
  }
  
  
   
 
}]);
