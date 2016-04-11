/**
 * Created by verden on 3/16/16.
 */
app.controller('MainController',['$scope','forecast',function($scope,forecast){
    forecast.success(function(data){
        $scope.fiveDay = data;
    });
}]);

