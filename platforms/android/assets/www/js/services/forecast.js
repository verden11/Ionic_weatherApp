app.factory('forecast', ['$http', function ($http) {
    var city = $('#city').val();
    console.log("the city is " + city);
    var ret = $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&mode=json&appid=114daa2762d016b13d87ed66e03c54b7&units=metric')
        .success(function (data) {
            return data;
        }).error(function (err) {
            return err;
        });
    return ret;
}]);



