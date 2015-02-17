app.controller('TabsCtrl', function ($scope) {
	$scope.showFirstTab = false;
	$scope.showSecondTab = false;
	$scope.showThirdTab = false;

	$scope.showFirst = function(){
			$scope.showFirstTab = true;
			$scope.showSecondTab = false;
			$scope.showThirdTab = false;
	}
	$scope.showSecond = function(){
		$scope.showFirstTab = false;
		$scope.showSecondTab = true;
		$scope.showThirdTab = false;
	}
	$scope.showThird = function(){
		$scope.showFirstTab = false;
		$scope.showSecondTab = false;
		$scope.showThirdTab = true;
	}
})






























