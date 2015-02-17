app.controller('loadingButtonCtrl', function($scope){
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

// angular.module('TabsApp', []).controller('TabsCtrl', ['$scope', function ($scope) {
// app.controller('TabsCtrl', ['$scope', function ($scope) {
//     $scope.tabs = [{
//             title: 'One',
//             url: 'one.tpl.html'
//         }, {
//             title: 'Two',
//             url: 'two.tpl.html'
//         }, {
//             title: 'Three',
//             url: 'three.tpl.html'
//     }];

//     $scope.currentTab = 'one.tpl.html';

//     $scope.onClickTab = function (tab) {
//         $scope.currentTab = tab.url;
//     }
    
//     $scope.isActiveTab = function(tabUrl) {
//         return tabUrl == $scope.currentTab;
//     }
// }]);

app.controller('TabsCtrl', function ($scope) {
	$scope.showFirstTab = false;
	$scope.showSecondTab = false;
	$scope.showThirdTab = false;

	$scope.showTabs = function(currentTab){
		if (currentTab === 'One') {
			$scope.showFirstTab = !$scope.showFirstTab;
			$scope.showSecondTab = false;
			$scope.showThirdTab = false;
		};
		else if (currentTab === 'Two'){
			$scope.showFirstTab = false;
			$scope.showSecondTab = !$scope.showSecondTab;
			$scope.showThirdTab = false;
		};
		else if (currentTab === 'Three'){
			$scope.showFirstTab = false;
			$scope.showSecondTab = false;
			$scope.showThirdTab = !$scope.showThirdTab;
		};
	}
})

app.controller('likeAdding', function($scope){
	$scope.numLike = 0;
	$scope.addLike = function(){
		$scope.numLike++;
	}
})


































