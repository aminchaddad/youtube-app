(function() {
  'use strict';

  angular
  .module("app")
  .component("ytLoader",{
    templateUrl: 'app/layout/loader.html',
    bindings: { isLoading: '<' },
    controllerAs: 'vm'
  });
})();