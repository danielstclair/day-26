angular.module('app.controllers', []).controller('likeAdding', function($scope){
	$scope.numLike = 0;
	$scope.addLike = function(){
		$scope.numLike++;
	}
})


































