(function() {
  'use strict';

  angular
  .module('app')
  .component('search', {
    controller: 'SearchController',
    controllerAs: 'vm',
    templateUrl: 'app/search/search.html',
  });

})();
