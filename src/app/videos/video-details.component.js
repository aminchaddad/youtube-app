(function() {
  'use strict';

  angular
  .module('app')
  .component('ytVideoDetails', {
    controller: 'VideoDetailsController',
    controllerAs: 'vm',
    templateUrl: 'app/videos/video-details.html'
  });

})();
