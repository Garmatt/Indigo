angular.module('indigo').controller('signupController', function ($scope, $http) {
	
	$scope.user = {name:'', password:''};
		
	$scope.Submit = function() {
	  $http.post('/account/register', $scope.user).then(function(response){
		  alert(response.data.toString()); //TO DO: save JWT (using AuthenticationService) and redirect to home page
	  }, function(error) {
		  //TO DO
	  });
	}
  
});