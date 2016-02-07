threeInput.controller('threeInputCtrl', function($scope, $routeParams, $location, $http){
    $scope.hash = "x";
    $scope.numbers = $routeParams.numbers.split($scope.hash); $scope.numbers.shift();
    $scope.country = "CAD";

    $scope.updateUrl = function(){
        $location.url(_.reduce($scope.numbers,function(memo,item){return memo+$scope.hash+item;},""))};
});