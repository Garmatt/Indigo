angular.module('indigo').controller('loginController', function ($scope, $http) {
	$scope.errorMessageKey = '';
	$scope.wrongField = '';	
	$scope.user = {name:'', password:''};
		
  $scope.Submit = function() {
	  $scope.errorMessageKey = '';
	  $scope.wrongField = '';
	  $http.post('/account/login', $scope.user).then(function(response){
		  alert(response.data.toString()); //TO DO: save JWT (using AuthenticationService) and redirect to home page
	  }, function(error) {
		  var errorInfo = error.data;
		  $scope.errorMessageKey = errorInfo.messageKey;
		  $scope.wrongField = errorInfo.errorField;
	  });
  }
  
});