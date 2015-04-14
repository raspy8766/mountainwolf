
var infoodity = angular.module('infoodity', ['ui.router'])
  

infoodity.config(function($stateProvider, $urlRouterProvider) {
    
   $urlRouteProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'index.html'
      })
      .state('home.results', {
        url: '/results',
        templateUrl: 'results/results.html'
      })
      .state('home.reviews', {
        url: '/reviews',
        templateUrl: 'reviews/reviews.html'
      });
  });

