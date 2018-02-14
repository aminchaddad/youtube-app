(function() {
  'use strict';

  angular
  .module("app")
  .component("searchList",{
    templateUrl: 'app/layout/search-list.html',
    bindings: { items: '<' },
    controllerAs: 'vm'
  });
})();