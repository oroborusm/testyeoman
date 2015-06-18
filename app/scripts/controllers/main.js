'use strict';

/**
 * @ngdoc function
 * @name papaseguroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the papaseguroApp
 */

angular.module('papaseguroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.slides = [
      {
        titulo: 'Primera Imagen',
        imagen: '/images/foto1.png'
      },{
        titulo: 'Segunda Imagen',
        imagen: '/images/foto2.png'
      },{
        titulo: 'Tercera Imagen',
        imagen: '/images/foto3.png'
      }
    ];
  });