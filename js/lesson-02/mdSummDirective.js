threeInput.directive("mdSumm",function($http){
    return {
        link:function($scope, element, attrs){
            $http({method: 'GET', url: 'http://api.fixer.io/latest'}).then(
                function success(response) {
                    $scope.currencyList=response.data.rates;
                    $scope.coef= _.result($scope.currencyList,$scope.country);

                    $scope.$watchCollection('numbers',function(){

                        var mapNum = function(numbers){
                            return _.map(numbers, function(num){
                                if(num === "true"){num = num == "true"}
                                return Number(num);});};
                        var compNum = function(numbers){return _.compact(numbers);};
                        var redNum = function(numbers){return _.reduce(numbers, function(memo,item){return memo+(+item);}, 0);};

                        var sum = _.compose(redNum,compNum,mapNum);
                        var input = '<input placeholder="'+sum($scope.numbers)+'">';
                        var span = '<span>'+$scope.country+' '+$scope.coef*sum($scope.numbers)+'</span>';

                        element.html(input+span);})
                });
        }}});