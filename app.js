
var infoodity = angular.module('infoodity', ['ui.router'])
  

infoodity.config(function($stateProvider, $urlRouterProvider) {
    
   $urlRouterProvider.otherwise('');

    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'testpage.html'
      })
      .state('uiview1', {
        url: '/uiview1',
        templateUrl: 'uiview1.html'
      })
      .state('uiview1.uiview2', {
        url: '/uiview2',
        templateUrl: 'uiview2.html'
      });
  });

