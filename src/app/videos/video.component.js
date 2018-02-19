(function() {
  'use strict';

  angular
  .module('app')
  .component('ytVideo', {
    controller: 'VideoController',
    controllerAs: 'vm',
    templateUrl: 'app/videos/video.html'
  });

})();
