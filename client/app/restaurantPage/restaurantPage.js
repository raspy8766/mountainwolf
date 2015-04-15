angular.module('infoodity.restaurantPage', [])

  .controller('RestaurantController', ['$scope', 'Restaurant', '$location', function ($scope, Restaurant, $location){

<<<<<<< HEAD
    console.log('hi');

=======
>>>>>>> cf8b200f75711852019662ee61afaa061a40eae9
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

<<<<<<< HEAD
    $scope.getRestaurant(1);
    // <div class="row test" ui-view="secondary-content">
    // </div> // ui route to reviews
=======
    $scope.getRestaurant(idSelected);

>>>>>>> cf8b200f75711852019662ee61afaa061a40eae9
}]);
