angular.module('app.controller', []).controller('TabsCtrl', ['$scope', function($scope) {
	$scope.currentTab = 'one';
	$scope.changeTab = function(num) {
		console.log(num);
		$scope.currentTab = num;
	}
}]);
