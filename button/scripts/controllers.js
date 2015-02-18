angular.module('app.controllers', []).controller('loadingButtonCtrl', function($scope){
	$scope.buttonText = 'Click Me';
	$scope.buttonDisabled = false;
	$scope.startLoading = function(){
		$scope.buttonText = 'Loading...';
		$scope.buttonDisabled = true;

		setTimeout(function(){
			console.log('test');
			$scope.buttonText = 'Click me';
			$scope.buttonDisabled = false;
			$scope.$apply();
		}, 2000);
	}
})




































