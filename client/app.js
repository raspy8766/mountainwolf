var infoodity = angular.module('infoodity', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('');

    $stateProvider //make sure the file path is correct. 
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('contentOne', {
        url: '/contentOne',
        templateUrl: 'contentOne.html' 
      })
      .state('contentTwo', {
        url: '/contentTwo',
        templateUrl: 'contentTwo.html'
      })
      .state('contentOne.a', { // This is a partial of contentOne
        url: '/a',
        templateUrl: 'contentOne_a.html'
      })
      .state('contentOne.b', { // This is a partial of contentOne
        url: '/b',
        templateUrl: 'contentOne_b.html'
      })
      // .state('uiview1', {
      //   url: '/uiview1',
      //   templateUrl: 'uiview1.html'
      // })
      // .state('uiview1.uiview2', {
      //   url: '/uiview2',
      //   templateUrl: 'uiview2.html'
      // });
  });

