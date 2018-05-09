'use strict';

/**
 * @ngdoc service
 * @name botiAppApp.botyFactory
 * @description
 * # botyFactory
 * Factory in the botiAppApp.
 */
angular.module('botiAppApp')
  .factory('botyFactory', function ($resource) {
    // TODO : http://localhost:3000/ => change this path with the deploy adress
    return $resource('http://localhost:3000/api/v1/stores/:id.json/', {}, {
      crearOferta: {method: 'POST', url: 'http://localhost:3000/api/v1/stores/:id/deals', params: {id: ''}}
    })
  })
