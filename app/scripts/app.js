'use strict';

/**
 * @ngdoc overview
 * @name botiAppApp
 * @description
 * # botiAppApp
 *
 * Main module of the application.
 */
angular
  .module('botiAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/botilleria', {
        templateUrl: 'views/botilleria.html',
        controller: 'BotilleriaCtrl',
        controllerAs: 'botilleria'
      })
      .when('/botilleria/:boti_id', {
        templateUrl: 'views/botilleria-ofertas.html',
        controller: 'BotiOfertasCtrl',
        controllerAs: 'botilleria'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
