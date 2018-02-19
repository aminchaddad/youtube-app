(function() {
  'use strict';

  angular.module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider.state('search', {
      url: '/search?query',
      component: 'ytSearch',
    });
  }

})();
