(function() {
  'use strict';

  angular.module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider.state('playlist', {
      url: '/playlist/{playlistId}',
      component: 'ytPlaylist',
    });

    $stateProvider.state('playlistVideo', {
      url: '/playlist/{playlistId}/video/{videoId}',
      component: 'ytPlaylist',
    });
  }

})();
