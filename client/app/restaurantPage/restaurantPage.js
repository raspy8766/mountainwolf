angular.module('infoodity.restaurantPage', [])

  .controller('RestaurantController', ['$scope', 'Restaurant', '$location', function ($scope, Restaurant, $location){

    var idSelected = $location.path().split('/').pop();

    $scope.getRestaurant = function(id){
      Restaurant.getRestaurant(id)
        .then(function (data) {
          $scope.results = data; // on return of $http call, populate data
        })
          .catch(function (error) {
            console.error(error); // if error on return of $http call, return error
          });
    };

    $scope.getRestaurant(idSelected);

}]);
