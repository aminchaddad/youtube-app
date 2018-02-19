(function() {
  'use strict';

  angular.module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider.state('channel', {
      url: '/channel/{id}',
      component: 'ytChannel',
    });
  }

})();
