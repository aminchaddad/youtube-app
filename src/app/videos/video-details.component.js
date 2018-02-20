(function() {
  'use strict';

  angular
  .module('app')
  .component('ytVideoDetails', {
    controller: 'VideoDetailsController',
    controllerAs: 'vm',
    bindings: { videoId: '<' },
    templateUrl: 'app/videos/video-details.html'
  });

})();
