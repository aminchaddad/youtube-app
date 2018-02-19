(function() {
  'use strict';

  angular.module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider.state('video', {
      url: '/video/{id}',
      component: 'ytVideo',
    });
  }

})();
