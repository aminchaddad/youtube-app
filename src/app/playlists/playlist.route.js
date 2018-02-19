(function() {
  'use strict';

  angular.module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider.state('playlist', {
      url: '/playlist/{id}',
      component: 'ytPlaylist',
    });
  }

})();
