angular.module('indigo').controller('loginController', function ($scope, $http) {
	$scope.errorMessage = '';	
	$scope.user = {name:'', password:''};
		
  $scope.Submit = function() {
	  $scope.errorMessage = '';
	  $http.post('/account/login', $scope.user).then(function(response){
		  alert(response.data.toString()); //TO DO: redirect to home page
	  }, function(error) {
		  $scope.errorMessage = error.data.message;
	  });
  }
  
});