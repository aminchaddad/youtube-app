(function() {
  'use strict';

  angular
  .module("app")
  .component("ytSearchList",{
    templateUrl: 'app/layout/search-list.html',
    bindings: { items: '<' },
    controllerAs: 'vm'
  });
})();