(function() {
  'use strict';

  angular
  .module('app')
  .component('video', {
    controller: 'VideoController',
    controllerAs: 'vm',
    templateUrl: 'app/videos/video.html'
  });

})();
