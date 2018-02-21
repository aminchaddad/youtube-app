(function() {
  'use strict';

  angular
  .module('app')
  .component('ytSearchFilter', {
    controller: 'SearchFilterController',
    controllerAs: 'vm',
    bindings: {
      type: '=',
      uploadDate: '=',
      order: '=',
      resultCount: '<',
      onChange: '&'
    },
    templateUrl: 'app/search/search-filter.html',
  });

})();
