'use strict'

/**
 * @ngdoc function
 * @name botiAppApp.controller:BotilleriaCtrl
 * @description
 * # BotilleriaCtrl
 * Controller of the botiAppApp
 */

var app = angular.module('botiAppApp')
  .controller('BotilleriaCtrl', function ($scope, botyFactory) {
    $scope.crearBotilleria = function () {
      botyFactory.save({store: $scope.datos}, function () {
        console.log($scope.datos)
        $scope.datos = {}
      })
    }
  })


app.controller('BotiOfertasCtrl', function ($scope, botyFactory, $routeParams) {
  console.log($routeParams)
  botyFactory.get({id: $routeParams.boti_id}, function (data) {
    $scope.botilleria = data
    console.log($scope.botilleria)
  })
  $scope.crearOferta = function () {
    console.log($scope.datos)
    botyFactory.crearOferta({id: $routeParams.boti_id}, {deal: $scope.datos}, function (data) {
      console.log(data)
    })
  }
})
