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
        imagen: 'https://photos-6.dropbox.com/t/2/AACuWWUHPBKtOpPjuNzTGlHy1apR2v7vRfybXw5w1Fcphg/12/133525864/png/32x32/1/_/1/2/foto1.png/COji1T8gASACKAEoAg/509DHPin3AnRkeBm3C9okKE2Oho812F5a_M4khENOsY?size=1024x768&size_mode=2'
      },{
        titulo: 'Segunda Imagen',
        imagen: 'https://photos-2.dropbox.com/t/2/AABnvG3eC07kZi-e_GfxiHQflYk_mHVfP1Fya9HGtyZ77A/12/133525864/png/32x32/1/_/1/2/foto2.png/COji1T8gASACKAEoAg/d8U6XdwFQCB27V21-jTE1o38162dQWBZmpKDVPFjC0c?size=1024x768&size_mode=2'
      }
    ];
  });