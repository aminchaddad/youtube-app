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

    $stateProvider.state('playlist.video', {
      url: '/video/{videoId}',
      component: 'ytVideoDetails',
    });
  }

})();
