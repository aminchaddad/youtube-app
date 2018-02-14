(function() {
  'use strict';

  angular
  .module("app")
  .component("mainHeader",{
    controller: 'MainHeaderController',
    controllerAs: 'vm',
    templateUrl: 'app/layout/main-header.html'
  });
})();