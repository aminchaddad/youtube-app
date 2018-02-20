(function() {
  'use strict';

  angular.module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider.state('video', {
      abstract: true,
      url: '/video/{videoId}',
      component: 'ytVideo',
    });
    $stateProvider.state('video.details', {
      url: '',
      component: 'ytVideoDetails',
    });
  }

})();
