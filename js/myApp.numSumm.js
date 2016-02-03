var myApp = angular.module("myApp",[]);
myApp.controller("numSummCtrl",function($scope){
    $scope.numbers = [];
    $scope.addition = function(numbers){
        return _.reduce(
            _.compact(
                _.map(numbers, function(num){
                    if(num === "true"){num = num == "true"};
                    return Number(num);
                })
            ),function(memo,item){return memo+(item);},0);};
});