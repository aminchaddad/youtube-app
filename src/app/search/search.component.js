(function() {
  'use strict';

  angular
  .module('app')
  .component('ytSearch', {
    controller: 'SearchController',
    controllerAs: 'vm',
    templateUrl: 'app/search/search.html',
  });

})();
