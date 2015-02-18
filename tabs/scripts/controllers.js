// angular.module('app.controller', []).controller('TabsCtrl', function ($scope) {

// 	// $scope.currentTab === 'One'
// 	// $scope.showTabs = function(currentTab){
// 	// 	$scope.currentTab = $scope.currentTab
// 	// }

// 	$scope.showFirstTab = false;
// 	$scope.showSecondTab = false;
// 	$scope.showThirdTab = false;



// 	$scope.showFirst = function(){
// 			$scope.showFirstTab = true;
// 			$scope.showSecondTab = false;
// 			$scope.showThirdTab = false;
// 	}
// 	$scope.showSecond = function(){
// 		$scope.showFirstTab = false;
// 		$scope.showSecondTab = true;
// 		$scope.showThirdTab = false;
// 	}
// 	$scope.showThird = function(){
// 		$scope.showFirstTab = false;
// 		$scope.showSecondTab = false;
// 		$scope.showThirdTab = true;
// 	}


// })

angular.module('app.controller', []).controller('TabsCtrl', ['$scope', function($scope) {
	$scope.currentTab = 'one';
	$scope.changeTab = function(num) {
		console.log(num);
		$scope.currentTab = num;
	}
}]);



	






















