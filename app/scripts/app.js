'use strict';

/**
 * @ngdoc overview
 * @name hackathonApp
 * @description
 * # hackathonApp
 *
 * Main module of the application.
 */
angular
  .module('hackathonApp', [
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "hackathonApp.services",
    "hackathonApp.filters",
    "hackathonApp.factories",
    "hackathonApp.directives",
    "hackathonApp.controllers"
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
