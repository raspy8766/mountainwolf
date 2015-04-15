var app = angular.module('infoodity', [
  'infoodity.restaurantPage',
  'infoodity.searchResults',
  'infoodity.services',
  'infoodity.reviews',
  'infoodity.submitReview',
  'ui.router'
  ])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider

      .state('restaurantPage', {
        url: '/restaurantpage',
        templateUrl: './app/restaurantPage/restaurantPage.html',
        controller: 'RestaurantController',
        views: {
        "main-content": { templateUrl: "./app/restaurantPage/restaurantPage.html" },
        "secondary-content": { templateUrl: "./app/reviews/reviews.html" }
        }
      })

      .state('restaurantPage.submitReview', {
        url: '/submitReview',
        templateUrl: './app/submitReview/submitReview.html',
        controller: 'SubmitReviewController'
      })

      .state('results', {
        url: '/results',
        templateUrl: './app/results/results.html',
        controller: 'ResultsController',
        views: {
        "main-content": { templateUrl: "./app/results/results.html" }
        }
      })

  }]);
